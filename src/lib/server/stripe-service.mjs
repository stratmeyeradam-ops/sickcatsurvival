export const effectiveTier = rows => rows.reduce((best,r) => ['active','trialing'].includes(r.status) && new Date(r.current_period_end).getTime()>Date.now() ? Math.max(best,Number(r.tier)) : best,0);
export function createBillingService({sql,stripe,origin,tiers,products,env=process.env,fetcher=fetch}) {
 const SITE='sickcatsurvival';
 const tagged=meta=>meta?.site===SITE;
 const productFor=slug=>products.find(p=>p.slug===slug);
 const mapping=slug=>{try{return JSON.parse(env.PRINTIFY_PRODUCTS_JSON||'{}')[slug]}catch{return null}};
 async function customer(userId,email){
  if(userId){const [saved]=await sql`select customer_id from stripe_customers where user_id=${userId}`;if(saved)return saved.customer_id;}
  // Guests have no user id, so key on email (or a random id) instead of a shared "null" key.
  const key=userId?`sickcat-customer-${userId}`:`sickcat-customer-guest-${(email||'').toLowerCase()||crypto.randomUUID()}`;
  const c=await stripe.customers.create({email:email||undefined,metadata:{userId:userId||'',site:SITE}},{idempotencyKey:key});
  if(userId)await sql`insert into stripe_customers(user_id,customer_id) values(${userId},${c.id}) on conflict(user_id) do nothing`;
  return c.id;
 }
 async function catalog(){return Promise.all(tiers.map(async tier=>{
  const explicit=env[`STRIPE_PRICE_${tier.slug.replaceAll('-','_').toUpperCase()}`];
  if(explicit){const p=await stripe.prices.retrieve(explicit);return {tier:tier.id,price_id:p.id,product_id:typeof p.product==='string'?p.product:p.product.id};}
  const [saved]=await sql`select * from stripe_catalog where tier=${tier.id}`;if(saved)return saved;
  const product=await stripe.products.create({name:`Sick Cat Survival — ${tier.name}`,metadata:{tierId:String(tier.id),site:SITE}},{idempotencyKey:`sickcat-product-${tier.id}-v1`});
  const price=await stripe.prices.create({product:product.id,currency:'usd',unit_amount:tier.priceCents,recurring:{interval:'month'}},{idempotencyKey:`sickcat-monthly-${tier.id}-${tier.priceCents}-v1`});
  await sql`insert into stripe_catalog(tier,price_id,product_id) values(${tier.id},${price.id},${product.id}) on conflict(tier) do update set price_id=excluded.price_id,product_id=excluded.product_id`;
  return {tier:tier.id,price_id:price.id,product_id:product.id};
 }));}
 async function portal(userId,email){
  const customerId=await customer(userId,email);let configId=env.STRIPE_PORTAL_CONFIGURATION;
  if(!configId){
   const [saved]=await sql`select value from stripe_settings where key='portal'`;configId=saved?.value;
   if(!configId){const prices=await catalog();const config=await stripe.billingPortal.configurations.create({business_profile:{headline:'Manage your Sick Cat Survival membership'},features:{customer_update:{enabled:true,allowed_updates:['email','address']},invoice_history:{enabled:true},payment_method_update:{enabled:true},subscription_cancel:{enabled:true,mode:'at_period_end'},subscription_update:{enabled:true,default_allowed_updates:['price'],proration_behavior:'always_invoice',products:[...new Set(prices.map(p=>p.product_id))].map(id=>({product:id,prices:prices.filter(p=>p.product_id===id).map(p=>p.price_id)}))}}},{idempotencyKey:'sickcat-portal-v1'});configId=config.id;await sql`insert into stripe_settings(key,value) values('portal',${configId}) on conflict(key) do update set value=excluded.value`;}
  }
  const result=await stripe.billingPortal.sessions.create({customer:customerId,configuration:configId,return_url:origin+'/account'});return {url:result.url};
 }
 async function checkout(userId,email,input){
  const customerId=await customer(userId,email);
  let params;
  if(input.type==='sub'){
   const tier=tiers.find(t=>t.id===input.tierId);if(!tier)throw Error('Unknown membership');
   const memberships=await sql`select * from stripe_memberships where user_id=${userId}`;
   if(effectiveTier(memberships)>0)return portal(userId,email);
   const prices=await catalog();
   params={mode:'subscription',line_items:[{price:prices.find(p=>p.tier===tier.id).price_id,quantity:1}],subscription_data:{metadata:{userId,tierId:String(tier.id),site:SITE}},metadata:{userId,tierId:String(tier.id),kind:'subscription',site:SITE}};
  }else{
   const p=productFor(input.slug),map=mapping(input.slug);if(!p)throw Error('Unknown product');
   if(!env.PRINTIFY_API_TOKEN||!env.PRINTIFY_SHOP_ID||!map?.product_id||!map?.variant_id)throw Error('This item is not available for shipping yet. Please choose another item.');
   params={mode:'payment',line_items:[{quantity:input.quantity||1,price_data:{currency:'usd',unit_amount:p.priceCents,product_data:{name:p.name}}}],shipping_address_collection:{allowed_countries:['US']},phone_number_collection:{enabled:true},metadata:{userId,kind:'merch',slug:p.slug,quantity:String(input.quantity||1),site:SITE}};
  }
  const result=await stripe.checkout.sessions.create({...params,customer:customerId,branding_settings:{display_name:'Sick Cat Survival'},success_url:origin+'/checkout/success?session_id={CHECKOUT_SESSION_ID}',cancel_url:origin+(input.type==='sub'?'/pricing?canceled=1':'/shop/'+input.slug+'?canceled=1')},{idempotencyKey:crypto.randomUUID()});
  if(!result.url)throw Error('Checkout did not open. Please try again.');return {url:result.url};
 }
 async function syncSubscription(sub,knownUserId){
  if(!tagged(sub.metadata))return;
  let userId=knownUserId || sub.metadata?.userId || sub.metadata?.user_id;
  const customerId=typeof sub.customer==='string'?sub.customer:sub.customer?.id;
  if(!userId && customerId){const [row]=await sql`select user_id from stripe_customers where customer_id=${customerId}`;userId=row?.user_id;}
  if(!userId && customerId){
    try {
      const cust = await stripe.customers.retrieve(customerId);
      const email = (cust.email || '').toLowerCase().trim();
      if (email) {
        const [u] = await sql`select id from "user" where lower(email)=${email}`;
        userId = u?.id;
      }
    } catch(e) {}
  }
  if(!userId)return;
  const priceId=sub.items?.data?.[0]?.price?.id;
  const saved=await sql`select * from stripe_catalog`;let tier=saved.find(p=>p.price_id===priceId)?.tier;
  if(!tier)tier=tiers.find(t=>env[`STRIPE_PRICE_${t.slug.replaceAll('-','_').toUpperCase()}`]===priceId)?.id;
  tier=Number(tier||sub.metadata?.tierId||0);
  if(!tiers.some(t=>t.id===tier))return;
  const end=sub.items?.data?.[0]?.current_period_end||sub.current_period_end;
  const until=end?new Date(end*1000).toISOString():null;
  await sql`insert into stripe_memberships(id,user_id,customer_id,tier,status,current_period_end,cancel_at_period_end) values(${sub.id},${userId},${customerId},${tier},${sub.status},${until},${Boolean(sub.cancel_at_period_end)}) on conflict(id) do update set tier=excluded.tier,status=excluded.status,current_period_end=excluded.current_period_end,cancel_at_period_end=excluded.cancel_at_period_end,updated_at=now()`;
 }
 async function pf(path,body){const response=await fetcher(`https://api.printify.com/v1/shops/${env.PRINTIFY_SHOP_ID}/${path}`,{method:body?'POST':'GET',headers:{Authorization:`Bearer ${env.PRINTIFY_API_TOKEN}`,'Content-Type':'application/json','User-Agent':'SickCatSurvival/1.0'},body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error(`Shipping provider returned ${response.status}: ${(await response.text().catch(()=>'')).slice(0,300)}`);return response.status===204?{}:response.json();}
 async function fulfill(orderId){
  const [order]=await sql`update stripe_orders set fulfillment_status='processing',fulfillment_started_at=now() where id=${orderId} and (fulfillment_status in ('pending','error') or (fulfillment_status='processing' and fulfillment_started_at<now()-interval '10 minutes')) returning *`;
  if(!order)return;
  try{
   const map=mapping(order.product_slug);if(!map?.product_id||!map.variant_id)throw Error('Shipping product mapping is missing');
   const shipping=typeof order.shipping==='string'?JSON.parse(order.shipping):order.shipping;const a=shipping.address;const names=(shipping.name||'').trim().split(/\s+/);
   if(!a?.line1||!shipping.email||!names[0])throw Error('Shipping details are incomplete');
   let id=order.printify_id;
   if(!id){
    // A stable external ID lets a retry recover an order created before a timeout.
    for(let page=1;page<=20&&!id;page++){const list=await pf(`orders.json?limit=50&page=${page}`);id=list.data?.find(o=>o.external_id===order.session_id)?.id;if(!list.next_page_url)break;}
    if(!id){const created=await pf('orders.json',{external_id:order.session_id,label:`Sick Cat #${order.id}`,line_items:[{product_id:map.product_id,variant_id:map.variant_id,quantity:order.quantity}],shipping_method:1,send_shipping_notification:true,address_to:{first_name:names.shift(),last_name:names.join(' ')||'-',email:shipping.email,phone:shipping.phone||'',country:a.country,region:a.state||'',address1:a.line1,address2:a.line2||'',city:a.city,zip:a.postal_code}});id=created.id;}
    if(!id)throw Error('Shipping provider did not return an order');await sql`update stripe_orders set printify_id=${id} where id=${order.id}`;
   }
   const details=await pf(`orders/${id}.json`);
   if(['pending','on-hold','payment-not-received'].includes(details.status)){
    // Printify rejects the submit while a freshly created order is still settling.
    for(let attempt=1;;attempt++){
     try{await pf(`orders/${id}/send_to_production.json`,{});break;}
     catch(e){if(attempt>=3)throw e;await new Promise(r=>setTimeout(r,1500*attempt));}
    }
   }
   await sql`update stripe_orders set fulfillment_status='submitted',error=null where id=${order.id}`;
  }catch(error){await sql`update stripe_orders set fulfillment_status='error',error=${error.message} where id=${order.id}`;throw error;}
 }
 async function complete(session){
  if(!tagged(session.metadata))throw Error('This checkout is not for Sick Cat Survival.');
  let userId=session.metadata?.userId || session.client_reference_id;
  const email=(session.customer_details?.email||'').toLowerCase().trim();
  if(!userId && email){
    const [u]=await sql`select id from "user" where lower(email)=${email}`;
    userId=u?.id;
  }
  if(!userId && email){
    const newId='sc_'+Math.random().toString(36).slice(2,10);
    await sql`insert into "user"(id, name, email, "emailVerified", "createdAt", "updatedAt") values(${newId}, ${session.customer_details?.name || 'Member'}, ${email}, true, now(), now()) on conflict(email) do nothing`;
    const [u2]=await sql`select id from "user" where lower(email)=${email}`;
    userId=u2?.id;
  }
  if(!userId)throw Error('Checkout account is missing');
  // Persist the customer mapping so later invoice.paid renewals resolve this user.
  const custId=typeof session.customer==='string'?session.customer:session.customer?.id;
  if(custId)await sql`insert into stripe_customers(user_id,customer_id) values(${userId},${custId}) on conflict(user_id) do nothing`;
  if(session.mode==='subscription'){
   if(!['paid','no_payment_required'].includes(session.payment_status))throw Error('Your payment is still processing. Please check again shortly.');
   const id=typeof session.subscription==='string'?session.subscription:session.subscription?.id;if(!id)throw Error('Membership is still processing');
   await syncSubscription(await stripe.subscriptions.retrieve(id),userId);return {kind:'subscription'};
  }
  if(session.metadata.kind!=='merch')return {kind:'other'};
  if(session.payment_status!=='paid')throw Error('Your payment is still processing. Please check again shortly.');
  const p=productFor(session.metadata.slug);if(!p)throw Error('Product is missing');
  const shipping={...(session.collected_information?.shipping_details||session.shipping_details),email:session.customer_details?.email,phone:session.customer_details?.phone};
  const [order]=await sql`insert into stripe_orders(user_id,session_id,product_slug,product_name,quantity,amount_cents,currency,shipping) values(${userId},${session.id},${p.slug},${p.name},${Number(session.metadata.quantity||1)},${session.amount_total},${session.currency},${JSON.stringify(shipping)}) on conflict(session_id) do update set session_id=excluded.session_id returning id`;
  await fulfill(order.id);return {kind:'merch'};
 }
 async function event(evt){
  const object=evt.data.object;
  if(['checkout.session.completed','checkout.session.async_payment_succeeded'].includes(evt.type)){
   if(!tagged(object.metadata))return;
   if(['paid','no_payment_required'].includes(object.payment_status))await complete(object);
  }else if(evt.type.startsWith('customer.subscription.')){
   // Retrieve the latest state so delayed events cannot roll back a plan change.
   const sub=await stripe.subscriptions.retrieve(object.id);
   if(!tagged(sub.metadata))return;
   await syncSubscription(sub);
  }else if(['invoice.paid','invoice.payment_failed'].includes(evt.type)){
   const id=object.parent?.subscription_details?.subscription||object.subscription;if(!id)return;
   const sub=await stripe.subscriptions.retrieve(typeof id==='string'?id:id.id);
   if(!tagged(sub.metadata))return;
   await syncSubscription(sub);
  }
 }
 return {customer,catalog,portal,checkout,syncSubscription,fulfill,complete,event};
}

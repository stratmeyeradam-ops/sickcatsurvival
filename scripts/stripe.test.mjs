import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {PGlite} from '@electric-sql/pglite';
import {createBillingService,effectiveTier} from '../src/lib/server/stripe-service.mjs';import {ledgerCsv} from '../src/lib/ledger-export.mjs';
function wrap(pg){return async(parts,...values)=>{let text=parts[0];values.forEach((_,i)=>text+=`$${i+1}${parts[i+1]}`);return (await pg.query(text,values)).rows}}
const tiers=[{id:1,slug:'field-notes',name:'Field Notes',priceCents:100},{id:2,slug:'emergency-desk',name:'Emergency Desk',priceCents:500},{id:3,slug:'archive',name:'Archive',priceCents:1000}];
test('Stripe subscriptions, portal changes, lifecycle and automatic fulfillment',async()=>{
 const pg=new PGlite();await pg.exec(await readFile(new URL('../migrations/0003_stripe.sql',import.meta.url),'utf8'));const sql=wrap(pg);const checkouts=[],prices=[],portalConfigs=[],requests=[];let sub,createCount=0,sendCount=0,fail=true;
 const stripe={customers:{create:async()=>({id:'cus_1'})},products:{create:async p=>({id:'prod_'+p.metadata.tierId})},prices:{create:async p=>{prices.push(p);return {id:'price_'+p.product,product:p.product}}},checkout:{sessions:{create:async p=>{checkouts.push(p);return {url:'https://checkout.stripe.com/test'}}}},billingPortal:{configurations:{create:async p=>{portalConfigs.push(p);return{id:'bpc_1'}}},sessions:{create:async()=>({url:'https://billing.stripe.com/test'})}},subscriptions:{retrieve:async()=>sub}};
 const fetcher=async(url,options)=>{requests.push({url,options});let body={};if(url.includes('orders.json?'))body={data:[]};else if(url.endsWith('orders.json')){createCount++;const p=JSON.parse(options.body);assert.equal(p.external_id,'cs_paid');assert.equal(p.address_to.address1,'10 Real Street');assert.equal(p.address_to.first_name,'Actual');assert.equal(p.line_items[0].product_id,'published_product');body={id:'pf_1'}}else if(url.endsWith('send_to_production.json')){sendCount++;if(fail)return new Response('{}',{status:503})}else body={status:'pending'};return Response.json(body)};
 const env={PRINTIFY_API_TOKEN:'test',PRINTIFY_SHOP_ID:'shop',PRINTIFY_PRODUCTS_JSON:JSON.stringify({'field-tee':{product_id:'published_product',variant_id:101}})};
 const service=createBillingService({sql,stripe,origin:'https://sickcatsurvival.com',tiers,products:[{slug:'field-tee',name:'Field tee',priceCents:2800}],env,fetcher});
 try{
  await service.checkout('user','member@example.com',{type:'sub',tierId:3});assert.equal(prices.length,3);assert.deepEqual(prices.map(p=>p.unit_amount).sort((a,b)=>a-b),[100,500,1000]);assert.ok(prices.every(p=>p.recurring.interval==='month'));assert.equal(checkouts[0].mode,'subscription');assert.equal(checkouts[0].metadata.site,'sickcatsurvival');assert.equal(checkouts[0].subscription_data.metadata.site,'sickcatsurvival');
  sub={id:'sub_1',customer:'cus_1',metadata:{userId:'user',tierId:'3',site:'sickcatsurvival'},status:'active',items:{data:[{price:{id:'price_prod_3'},current_period_end:Math.floor(Date.now()/1000)+86400}]}};
  await service.syncSubscription(sub);assert.equal(effectiveTier(await sql`select * from stripe_memberships`),3);
  // A portal price change wins over the original checkout metadata.
  sub.items.data[0].price.id='price_prod_1';await service.event({type:'customer.subscription.updated',data:{object:{id:'sub_1'}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),1);
  await service.checkout('user','member@example.com',{type:'sub',tierId:2});assert.equal(checkouts.length,1);assert.ok(portalConfigs[0].features.subscription_cancel.enabled);assert.ok(portalConfigs[0].features.subscription_update.enabled);
  sub.status='canceled';await service.event({type:'customer.subscription.deleted',data:{object:{id:'sub_1'}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),0);
  await service.event({type:'customer.subscription.created',data:{object:{id:'sub_1'}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),0);
  sub.status='active';await service.event({type:'invoice.paid',data:{object:{parent:{subscription_details:{subscription:'sub_1'}}}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),1);
  sub.metadata={userId:'user',tierId:'3',site:'kindwell'};sub.items.data[0].price.id='price_prod_3';await service.event({type:'customer.subscription.updated',data:{object:{id:'sub_1'}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),1);await service.event({type:'invoice.paid',data:{object:{parent:{subscription_details:{subscription:'sub_1'}}}}});assert.equal(effectiveTier(await sql`select * from stripe_memberships`),1);sub.metadata={userId:'user',tierId:'1',site:'sickcatsurvival'};sub.items.data[0].price.id='price_prod_1';
  await service.event({type:'checkout.session.completed',data:{object:{id:'cs_foreign',mode:'payment',payment_status:'paid',amount_total:100,currency:'usd',metadata:{site:'kindwell',userId:'user',kind:'merch',slug:'field-tee',quantity:'1'}}}});assert.equal((await sql`select * from stripe_orders`).length,0);
  await assert.rejects(service.complete({id:'cs_other',mode:'payment',payment_status:'paid',amount_total:100,currency:'usd',metadata:{site:'methspace',userId:'user',kind:'merch',slug:'field-tee',quantity:'1'}}),/not for Sick Cat Survival/);
  await service.checkout('user','member@example.com',{type:'merch',slug:'field-tee',quantity:2});assert.equal(checkouts[1].mode,'payment');assert.equal(checkouts[1].line_items[0].quantity,2);assert.ok(checkouts[1].shipping_address_collection);
  const session={id:'cs_paid',mode:'payment',payment_status:'paid',amount_total:5600,currency:'usd',metadata:{userId:'user',kind:'merch',slug:'field-tee',quantity:'2',site:'sickcatsurvival'},collected_information:{shipping_details:{name:'Actual Buyer',address:{line1:'10 Real Street',city:'Rapid City',state:'SD',postal_code:'57701',country:'US'}}},customer_details:{email:'buyer@example.com',phone:'123'}};
  await assert.rejects(service.complete({...session,payment_status:'unpaid'}));assert.equal((await sql`select * from stripe_orders`).length,0);
  await assert.rejects(service.complete(session));assert.equal((await sql`select * from stripe_orders`)[0].fulfillment_status,'error');fail=false;await service.complete(session);await service.complete(session);assert.equal(createCount,1);assert.equal(sendCount,4);assert.equal((await sql`select * from stripe_orders`).length,1);assert.equal((await sql`select * from stripe_orders`)[0].fulfillment_status,'submitted');
 }finally{await pg.close()}
});
test('membership expiration and spreadsheet-safe, lossless CSV',()=>{
 assert.equal(effectiveTier([{tier:3,status:'active',current_period_end:'2000-01-01'}]),0);
 assert.equal(effectiveTier([{tier:3,status:'past_due',current_period_end:'2099-01-01'}]),0);
 const out=ledgerCsv([{cat_name:'Cat, "Two"',kind:'symptom',value:'=formula',note:'line one\nline two',logged_at:'2026-10-16'}]);assert.ok(out.includes('"Cat, ""Two"""'));assert.ok(out.includes('"\'=formula"'));assert.ok(out.includes('"line one\nline two"'));
});

test('portable schema applies cleanly and excludes the old payment demo',async()=>{
 const pg=new PGlite();
 try {
  for(const name of ['0001_auth.sql','0002_schema.sql','0003_stripe.sql','0004_remove_demo_posts.sql'])await pg.exec(await readFile(new URL('../migrations/'+name,import.meta.url),'utf8'));
  const tables=(await pg.query("select tablename from pg_tables where schemaname='public'")).rows.map(r=>r.tablename);
  for(const name of ['user','session','forum_threads','forum_replies','health_logs','stripe_memberships','stripe_orders'])assert.ok(tables.includes(name));
  assert.ok(!tables.includes('paypal_events'));assert.ok(!tables.includes('printify_jobs'));
  assert.equal((await pg.query("select * from forum_threads where user_id='seed'")).rows.length,1);
 }finally{await pg.close()}
});

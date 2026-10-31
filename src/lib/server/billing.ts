import {createServerFn} from '@tanstack/react-start';
import {z} from 'zod';
import {getSql} from '@/lib/db';
import {authMiddleware} from '@/lib/auth/middleware';
import {optionalSession} from './session';
import {TIERS} from '@/lib/tiers';
import {PRODUCTS} from '@/lib/data/products';


export const getOptionalTier=createServerFn({method:'GET'}).middleware([optionalSession]).handler(async({context})=>{
 if(!context.userId)return {signedIn:false,tier:0,displayName:null as string|null};
 const {readMembership}=await import("./billing-runtime.server");const m=await readMembership(context.userId);return {signedIn:true,tier:m.tier,displayName:context.email||'Member'};
});
export const getMyBilling=createServerFn({method:'GET'}).middleware([authMiddleware]).handler(async({context})=>{
 const sql=await getSql();const {readMembership}=await import("./billing-runtime.server");const m=await readMembership(context.userId);
 const orders=await sql<{id:number;product_name:string;amount_cents:number;currency:string;status:string;fulfillment_status:string;created_at:string}>`select id,product_name,amount_cents,currency,status,fulfillment_status,created_at from stripe_orders where user_id=${context.userId} order by id desc limit 30`;
 return {...m,orders};
});
export const startCheckout=createServerFn({method:'POST'}).middleware([authMiddleware])
 .validator((d:unknown)=>z.discriminatedUnion('type',[z.object({type:z.literal('sub'),tierId:z.union([z.literal(1),z.literal(2),z.literal(3)])}),z.object({type:z.literal('merch'),slug:z.string(),quantity:z.number().int().min(1).max(6).default(1)})]).parse(d))
 .handler(async({context,data})=>{const {billingService}=await import("./billing-runtime.server");const {service}=await billingService();return service.checkout(context.userId,context.email??null,data);});
export const manageSubscription=createServerFn({method:'POST'}).middleware([authMiddleware]).handler(async({context})=>{
 const {billingService}=await import("./billing-runtime.server");const {service}=await billingService();return service.portal(context.userId,context.email??null);
});
export const confirmCheckout=createServerFn({method:'POST'}).middleware([authMiddleware])
 .validator((d:unknown)=>z.object({sessionId:z.string().min(1)}).parse(d)).handler(async({context,data})=>{
  const {billingService}=await import("./billing-runtime.server");const {stripe,service}=await billingService();const session=await stripe.checkout.sessions.retrieve(data.sessionId);
  const sessEmail=(session.customer_details?.email||session.customer_email||'').toLowerCase().trim();
  const myEmail=(context.email||'').toLowerCase().trim();
  const ownerId=session.metadata?.userId||session.client_reference_id||(myEmail&&sessEmail===myEmail?context.userId:undefined);
  if(ownerId&&ownerId!==context.userId)throw Error('This purchase belongs to another account.');
  if(!session.metadata?.userId)session.metadata={...session.metadata,userId:context.userId};
  return service.complete(session);
 });

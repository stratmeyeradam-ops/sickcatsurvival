import {getSql} from "@/lib/db";
import {TIERS} from "@/lib/tiers";
import {PRODUCTS} from "@/lib/data/products";
import {createBillingService,effectiveTier} from "./stripe-service.mjs";
export async function billingService(){
 const key=process.env.STRIPE_SECRET_KEY?.trim();if(!key)throw Error('Checkout is temporarily unavailable. Please try again later.');
 const Stripe=(await import('stripe')).default;
 const stripe=new Stripe(key,{httpClient:Stripe.createFetchHttpClient(),maxNetworkRetries:2,timeout:20000});
 const sql=await getSql();const origin=(process.env.APP_URL||process.env.BETTER_AUTH_URL||'https://sickcatsurvival.com').replace(/\/$/,'');
 return {stripe,service:createBillingService({sql,stripe,origin,tiers:TIERS,products:PRODUCTS})};
}
export async function readMembership(userId:string){
 const sql=await getSql();
 const rows=await sql<{tier:number;status:string;current_period_end:string|null;cancel_at_period_end:boolean}>`select tier,status,current_period_end,cancel_at_period_end from stripe_memberships where user_id=${userId} order by current_period_end desc`;
 return {tier:effectiveTier(rows),memberships:rows};
}

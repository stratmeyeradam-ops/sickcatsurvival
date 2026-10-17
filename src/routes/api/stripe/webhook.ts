import {createFileRoute} from '@tanstack/react-router';

export const Route=createFileRoute('/api/stripe/webhook')({server:{handlers:{POST:async({request})=>{
 const secret=process.env.STRIPE_WEBHOOK_SECRET;if(!secret)return new Response('Webhook is not configured',{status:503});
 const signature=request.headers.get('stripe-signature');if(!signature)return new Response('Missing signature',{status:400});
 const {billingService}=await import("@/lib/server/billing-runtime.server");const {stripe,service}=await billingService();let event;
 try{event=stripe.webhooks.constructEvent(Buffer.from(await request.arrayBuffer()),signature,secret);}catch{return new Response('Invalid signature',{status:400});}
 await service.event(event);return Response.json({received:true});
}}}});

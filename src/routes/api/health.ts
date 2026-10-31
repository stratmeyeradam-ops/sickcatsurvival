import {createFileRoute} from '@tanstack/react-router';
export const Route=createFileRoute('/api/health')({server:{handlers:{GET:async()=>{
 try {const {getSql}=await import('@/lib/db');const sql=await getSql();await sql`select 1`;return Response.json({ok:true,service:'sick-cat-survival',stripe:Boolean(process.env.STRIPE_SECRET_KEY)});}
 catch {return Response.json({ok:false},{status:503});}
}}}});

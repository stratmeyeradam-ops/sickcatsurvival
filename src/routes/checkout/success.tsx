import {useEffect,useState} from 'react';
import {createFileRoute,Link,useRouterState} from '@tanstack/react-router';
import {confirmCheckout} from '@/lib/server/billing';
import {useCurrentUserState} from '@/lib/auth/use-current-user';
import {RedirectToSignIn} from '@/lib/auth/gates';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/checkout/success')({component:Success});
function Success(){
 const {user,isPending}=useCurrentUserState();const search=useRouterState({select:s=>s.location.searchStr});const id=new URLSearchParams(search).get('session_id');const[state,setState]=useState('Checking your purchase…'),[error,setError]=useState<string|null>(null),[attempt,setAttempt]=useState(0);
 useEffect(()=>{if(!user)return;let active=true;setError(null);void (async()=>{if(!id)throw Error('No purchase was supplied. Check your account for your membership and orders.');const result=await confirmCheckout({data:{sessionId:id}});if(active)setState(result.kind==='subscription'?'Your membership is ready':'Your order is being prepared');})().catch(e=>{if(active)setError(e.message)});return()=>{active=false}},[user?.id,id,attempt]);
 if(isPending)return <div className="mx-auto max-w-xl px-4 py-16">Loading…</div>;if(!user)return <RedirectToSignIn/>;
 return <div className="mx-auto max-w-2xl px-4 py-16"><h1 className="font-display text-4xl">{error?'Purchase status':state}</h1>{error?<div className="mt-5" role="alert"><p>{error}</p><Button className="mt-4" onClick={()=>setAttempt(a=>a+1)}>Check again</Button></div>:null}<div className="mt-8 flex flex-wrap gap-4"><Link to="/account" className="text-sage underline">Open your account</Link><Link to="/manuals" className="text-sage underline">Read care manuals</Link><Link to="/toolkit" className="text-sage underline">Open health toolkit</Link></div></div>
}

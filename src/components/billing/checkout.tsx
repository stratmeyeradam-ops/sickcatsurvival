import {useEffect,useRef,useState} from 'react';
import {useRouterState} from '@tanstack/react-router';
import {Check} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {startCheckout,manageSubscription} from '@/lib/server/billing';
import {formatPrice} from '@/lib/data/products';
import {TIERS} from '@/lib/tiers';
import {cn} from '@/lib/utils';
type Kind={type:'sub';tierId:1|2|3}|{type:'merch';slug:string;name:string;priceCents:number};
export function CheckoutButton({kind,signedIn}:{kind:Kind;signedIn:boolean}){
 const [busy,setBusy]=useState(false),[error,setError]=useState<string|null>(null);
 const search=useRouterState({select:s=>s.location.searchStr});const resumed=useRef(false);
 async function buy(){
  if(!signedIn){const next=kind.type==='sub'?`/pricing?plan=${kind.tierId}`:`/shop/${kind.slug}?buy=1`;window.location.href='/login?next='+encodeURIComponent(next);return;}
  setBusy(true);setError(null);
  try{const res=await startCheckout({data:kind.type==='sub'?kind:{type:'merch',slug:kind.slug,quantity:1}});window.location.href=res.url;}catch(e){setError(e instanceof Error?e.message:'Checkout could not open. Please try again.');setBusy(false);}
 }
 useEffect(()=>{const q=new URLSearchParams(search);const resume=kind.type==='sub'?q.get('plan')===String(kind.tierId):q.get('buy')==='1';if(signedIn&&resume&&!resumed.current){resumed.current=true;window.history.replaceState(null,'',window.location.pathname);void buy();}},[signedIn,search]);
 return <div><Button size="lg" className="w-full" disabled={busy} onClick={()=>void buy()}>{busy?'Opening checkout…':kind.type==='sub'?`Subscribe — ${formatPrice(TIERS.find(t=>t.id===kind.tierId)!.priceCents)}/month`:`Buy — ${formatPrice(kind.priceCents)}`}</Button>{error?<p className="mt-3 text-sm text-alert" role="alert">{error}</p>:null}</div>;
}
export function ManageButton(){const[busy,setBusy]=useState(false),[error,setError]=useState<string|null>(null);return <div><Button variant="outline" disabled={busy} onClick={()=>{setBusy(true);setError(null);void manageSubscription().then(r=>window.location.href=r.url).catch(e=>{setError(e.message);setBusy(false);});}}>{busy?'Opening billing…':'Manage subscription'}</Button>{error?<p role="alert" className="mt-2 text-sm text-alert">{error}</p>:null}</div>}
export function TierCard({tierId,current,signedIn,featured}:{tierId:1|2|3;current:number;signedIn:boolean;featured?:boolean}){
 const plan=TIERS.find(t=>t.id===tierId)!;return <article className={cn('flex h-full flex-col rounded-xl bg-surface p-6 shadow-plate',featured&&'ring-2 ring-sage')}><h2 className="font-display text-2xl">{plan.name}</h2><p className="mt-3 font-display text-4xl">{formatPrice(plan.priceCents)}<span className="ml-1 font-sans text-base text-muted">/ month</span></p><p className="mt-3 text-sm text-muted">{plan.blurb}</p><ul className="mt-5 flex-1 space-y-3 text-sm">{plan.perks.map(p=><li key={p} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-sage"/>{p}</li>)}</ul><div className="mt-6">{current>0?<div><p className="mb-3 text-sm text-sage">{current===tierId?'Your current plan':current>tierId?'Included in your plan':'Upgrade in billing'}</p><ManageButton/></div>:<CheckoutButton kind={{type:'sub',tierId}} signedIn={signedIn}/>}</div></article>
}

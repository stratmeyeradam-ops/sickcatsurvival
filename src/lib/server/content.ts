import {createServerFn} from '@tanstack/react-start';
import {z} from 'zod';
import {optionalSession} from './session';

import {getManual} from './catalog/manuals';
import {WELLNESS_TIPS,ARCHIVES,todaysTip} from './catalog/wellness';
import {getSymptom} from './catalog/symptoms';
import {getProtocol} from './catalog/emergencies';
const slug=(d:unknown)=>z.object({slug:z.string()}).parse(d);
export const loadManual=createServerFn({method:'GET'}).middleware([optionalSession]).validator(slug).handler(async({context,data})=>{
 const m=getManual(data.slug);if(!m)return null;const {readMembership}=await import("./billing-runtime.server");const tier=context.userId?(await readMembership(context.userId)).tier:0;return {...m,sections:tier>=1?m.sections:[]};
});
export const loadWellness=createServerFn({method:'GET'}).middleware([optionalSession]).handler(async({context})=>{
 const {readMembership}=await import("./billing-runtime.server");const tier=context.userId?(await readMembership(context.userId)).tier:0;
 return {tier,today:todaysTip(),tips:WELLNESS_TIPS.map(t=>({...t,body:tier>=1?t.body:''})),archives:ARCHIVES.map(a=>({...a,body:tier>=3?a.body:'',items:tier>=3?a.items:[]}))};
});
export const loadAdvanced=createServerFn({method:'GET'}).middleware([optionalSession]).validator(slug).handler(async({context,data})=>{
 const {readMembership}=await import("./billing-runtime.server");const tier=context.userId?(await readMembership(context.userId)).tier:0;
 return {notes:tier>=2?getSymptom(data.slug)?.advancedNotes||[]:[],after:tier>=2?getProtocol(data.slug)?.after||[]:[]};
});
export const dailyNote=createServerFn({method:'GET'}).handler(()=>todaysTip());

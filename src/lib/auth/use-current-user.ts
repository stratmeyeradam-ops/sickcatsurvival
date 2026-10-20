import {useMemo,useSyncExternalStore} from 'react';
import {authClient} from './client';
const subscribe=()=>()=>{},clientReady=()=>true,serverReady=()=>false;
export function useCurrentUserState(){
 const {data,isPending}=authClient.useSession();
 const hydrated=useSyncExternalStore(subscribe,clientReady,serverReady);
 const raw=hydrated?data?.user:null;
 const user=useMemo(()=>raw?{id:raw.id,displayName:raw.name||null,primaryEmail:raw.email||null,profileImageUrl:raw.image||null}:null,[raw?.id,raw?.name,raw?.email,raw?.image]);
 return {user,isPending:!hydrated||isPending};
}

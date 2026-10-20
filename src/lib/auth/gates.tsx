import {useEffect,useState,type ReactNode} from 'react';
import {useRouterState} from '@tanstack/react-router';
import {useCurrentUserState} from './use-current-user';
import {signOut} from './client';
export function SignedIn({children}:{children:ReactNode}){const {user}=useCurrentUserState();return user?<>{children}</>:null;}
export function SignedOut({children}:{children:ReactNode}){const {user,isPending}=useCurrentUserState();return !user&&!isPending?<>{children}</>:null;}
export function RedirectToSignIn(){const next=useRouterState({select:s=>s.location.href});useEffect(()=>{window.location.replace('/login?next='+encodeURIComponent(next))},[next]);return null;}
export function UserButton(){const {user}=useCurrentUserState();const [busy,setBusy]=useState(false);if(!user)return null;return <button type="button" disabled={busy} className="text-sm text-muted underline" onClick={()=>{setBusy(true);void signOut().catch(()=>setBusy(false))}}>{busy?'Signing out…':'Sign out'}</button>}

import {createAuthClient} from 'better-auth/react';
export const authClient=createAuthClient();
export async function signOut(){const result=await authClient.signOut();if(result.error)throw Error(result.error.message);window.location.href='/';}

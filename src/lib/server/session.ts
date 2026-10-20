import {createMiddleware} from '@tanstack/react-start';
export const optionalSession=createMiddleware({type:'function'}).server(async({next})=>{
 const {getSessionUser}=await import('../auth/verify.server');const user=await getSessionUser();
 return next({context:{userId:user?.id??null,email:user?.email??null}});
});

import {createMiddleware} from '@tanstack/react-start';
export const authMiddleware=createMiddleware({type:'function'}).server(async({next})=>{
 const {getSessionUser,UnauthorizedError}=await import('./verify.server');
 const {assertSameSiteRequest}=await import('./isolation.server');assertSameSiteRequest();
 const user=await getSessionUser();if(!user)throw new UnauthorizedError();
 return next({context:{userId:user.id,email:user.email}});
});

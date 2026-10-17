import {getRequest} from '@tanstack/react-start/server';
import {auth} from './server';
export class UnauthorizedError extends Error{readonly status=401;constructor(){super('Unauthorized')}}
export async function getSessionUser(){const request=getRequest();if(!request)return null;const session=await auth.api.getSession({headers:request.headers});return session?.user?{id:session.user.id,email:session.user.email}:null;}

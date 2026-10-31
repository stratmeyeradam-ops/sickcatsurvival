import {betterAuth} from 'better-auth';
import {tanstackStartCookies} from 'better-auth/tanstack-start';
import {Pool} from 'pg';
import {randomBytes} from 'node:crypto';
import {getPglite} from '../db';
import {pgliteDialect} from './pglite-dialect';
const origin=process.env.BETTER_AUTH_URL||process.env.APP_URL||'http://localhost:8080';
const globalAuth=globalThis as typeof globalThis & {appAuthSecret?:string};
const secret=process.env.BETTER_AUTH_SECRET||(globalAuth.appAuthSecret??=randomBytes(32).toString('hex'));
const googleId=process.env.GOOGLE_CLIENT_ID||'';
const googleSecret=process.env.GOOGLE_CLIENT_SECRET||'';
const PROD_HOSTS = [
  'sickcatsurvival.com',
  'www.sickcatsurvival.com',
];
const trustedOrigins = Array.from(new Set([
  origin,
  ...PROD_HOSTS.map(h => `https://${h}`),
  ...PROD_HOSTS.map(h => `http://${h}`)
]));

export const auth=betterAuth({
 baseURL:origin,secret,
 database:process.env.DATABASE_URL?.trim()?new Pool({connectionString:process.env.DATABASE_URL,ssl:/localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL) ? undefined : {rejectUnauthorized:false}}):{dialect:pgliteDialect(()=>getPglite()),type:'postgres'},
 emailAndPassword:{enabled:true},
 ...(googleId && googleSecret ? {socialProviders:{google:{clientId:googleId,clientSecret:googleSecret}}} : {}),
 account: {
   storeStateStrategy: "database",
   skipStateCookieCheck: true,
   accountLinking: {
     enabled: true,
     requireLocalEmailVerified: false,
   },
 },
 trustedOrigins,
 advanced:{
   cookiePrefix:'',
   useSecureCookies:origin.startsWith('https:'),
   defaultCookieAttributes:{secure:true,sameSite:'lax',path:'/'},
   cookies:{
     session_token:{
       name:'__session',
       attributes:{httpOnly:true,secure:true,sameSite:'lax',path:'/'}
     }
   }
 },
 plugins:[tanstackStartCookies()]
});

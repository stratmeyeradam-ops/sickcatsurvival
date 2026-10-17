import {betterAuth} from 'better-auth';
import {tanstackStartCookies} from 'better-auth/tanstack-start';
import {Pool} from 'pg';
import {randomBytes} from 'node:crypto';
import {getPglite} from '../db';
import {pgliteDialect} from './pglite-dialect';
const origin=process.env.BETTER_AUTH_URL||process.env.APP_URL||'http://localhost:8080';
const globalAuth=globalThis as typeof globalThis & {appAuthSecret?:string};
const secret=process.env.BETTER_AUTH_SECRET||(globalAuth.appAuthSecret??=randomBytes(32).toString('hex'));
export const auth=betterAuth({
 baseURL:origin,secret,
 database:process.env.DATABASE_URL?.trim()?new Pool({connectionString:process.env.DATABASE_URL}):{dialect:pgliteDialect(()=>getPglite()),type:'postgres'},
 emailAndPassword:{enabled:true},
 trustedOrigins:[origin],
 advanced:{cookiePrefix:'sickcat',useSecureCookies:origin.startsWith('https://')},
 plugins:[tanstackStartCookies()]
});

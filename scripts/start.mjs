process.on("SIGTERM", () => process.exit(0));
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {randomBytes} from 'node:crypto';
process.env.APP_URL ||= `http://localhost:${process.env.PORT||3000}`;
process.env.BETTER_AUTH_URL ||= process.env.APP_URL;
const dir=path.resolve(process.env.APP_DATA_DIR||'.data');await mkdir(dir,{recursive:true});
if(!process.env.DATABASE_URL?.trim()){process.env.PGLITE_DATA_DIR ||= path.join(dir,'pglite');await mkdir(process.env.PGLITE_DATA_DIR,{recursive:true});}
if(!process.env.BETTER_AUTH_SECRET){const file=path.join(dir,'auth-secret');try{process.env.BETTER_AUTH_SECRET=(await readFile(file,'utf8')).trim();}catch{const value=randomBytes(32).toString('hex');try{await writeFile(file,value,{mode:0o600,flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}process.env.BETTER_AUTH_SECRET=(await readFile(file,'utf8')).trim();}}
await import('../.output/server/index.mjs');

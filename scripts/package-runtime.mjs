// Nitro bundles PGlite's JS; its sibling WASM/data files must travel with it.
import {copyFile,mkdir} from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';
const require=createRequire(import.meta.url);
const source=path.dirname(require.resolve('@electric-sql/pglite'));
const target=new URL('../.output/server/_libs/',import.meta.url);
await mkdir(target,{recursive:true});
for(const file of ['pglite.data','pglite.wasm','initdb.wasm'])await copyFile(path.join(source,file),new URL(file,target));
console.log('[package] Embedded database runtime included.');

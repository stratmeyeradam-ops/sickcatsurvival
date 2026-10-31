// Nitro bundles PGlite's JS; its sibling WASM/data files must travel with the node-server build.
// On Vercel the database is Neon. Do not embed PGLite, and give the function a 60s limit.
import {copyFile,mkdir,readFile,writeFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';

if (process.env.VERCEL) {
  const vc = new URL('../.vercel/output/functions/__server.func/.vc-config.json', import.meta.url);
  const cfg = JSON.parse(await readFile(vc, 'utf8'));
  cfg.maxDuration = 60;
  await writeFile(vc, JSON.stringify(cfg, null, 2) + '\n');
  console.log('[package] Vercel function maxDuration 60. Neon is the database, so PGLite wasm stays out.');
} else {
  const require = createRequire(import.meta.url);
  const source = path.dirname(require.resolve('@electric-sql/pglite'));
  const target = new URL('../.output/server/_libs/', import.meta.url);
  await mkdir(target, {recursive: true});
  for (const file of ['pglite.data', 'pglite.wasm', 'initdb.wasm']) await copyFile(path.join(source, file), new URL(file, target));
  console.log('[package] Embedded database runtime included.');
}

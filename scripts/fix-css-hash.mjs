#!/usr/bin/env node
/**
 * Post-build fix: sync the CSS filename referenced by the SSR bundle with the
 * CSS actually emitted to .output/public/assets.
 *
 * The client build and SSR build can emit different content hashes for the
 * same styles.css (environment-dependent CSS pipeline). The SSR bundle bakes
 * its own hash into `styles_default`, which 404s because only the client
 * hash exists as a static asset. This script rewrites SSR references to the
 * real emitted filename.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const vercelAssets = join(root, ".vercel", "output", "static", "assets");
const vercelSsr = join(root, ".vercel", "output", "functions", "__server.func", "_ssr");
let assetsDir = join(root, ".output", "public", "assets");
let ssrDir = join(root, ".output", "server", "_ssr");
try {
  await readdir(vercelAssets);
  assetsDir = vercelAssets;
  ssrDir = vercelSsr;
} catch {
  // node-server preset keeps CSS under .output
}

const actual = (await readdir(assetsDir)).filter((f) => /^styles-[\w-]+\.css$/.test(f));
if (actual.length !== 1) {
  console.error(`[fix-css-hash] expected exactly 1 styles-*.css asset, found: ${actual.join(", ")}`);
  process.exit(1);
}
const realName = actual[0];

let patched = 0;
const files = (await readdir(ssrDir)).filter((f) => f.endsWith(".mjs"));
for (const f of files) {
  const p = join(ssrDir, f);
  const text = await readFile(p, "utf8");
  const refs = text.match(/\/assets\/styles-[\w-]+\.css/g);
  if (!refs) continue;
  const bad = [...new Set(refs.filter((r) => !r.endsWith(realName)))];
  if (!bad.length) continue;
  let out = text;
  for (const b of bad) out = out.split(b).join(`/assets/${realName}`);
  await writeFile(p, out);
  patched += 1;
  console.log(`[fix-css-hash] ${f}: ${bad.join(", ")} -> /assets/${realName}`);
}
console.log(`[fix-css-hash] done — ${patched} file(s) patched to ${realName}`);
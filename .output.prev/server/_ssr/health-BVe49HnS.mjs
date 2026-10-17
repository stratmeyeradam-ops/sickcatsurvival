import { r as getSql } from "./db-WO7Pgea8.mjs";
import { E as _enum, F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-BVe49HnS.js
async function requireTier3(userId) {
	const sql = await getSql();
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	if ((await readMembership(userId)).tier < 3) {
		const err = /* @__PURE__ */ new Error("Archive ($10/mo) is required for the toolkit.");
		err.status = 403;
		throw err;
	}
	return sql;
}
var listHealthLogs_createServerFn_handler = createServerRpc({
	id: "f6af6ddeb445dabfa6ba2e06cccf34503c5f875356f3a19e0124b1543117a8a7",
	name: "listHealthLogs",
	filename: "src/lib/server/health.ts"
}, (opts) => listHealthLogs.__executeServer(opts));
var listHealthLogs = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listHealthLogs_createServerFn_handler, async ({ context }) => {
	return (await requireTier3(context.userId))`
      select id, cat_name, kind, value, note, logged_at
      from health_logs where user_id = ${context.userId}
      order by logged_at desc limit 80
    `;
});
var addInput = object({
	catName: string().trim().min(1).max(40),
	kind: _enum([
		"weight",
		"med",
		"symptom",
		"appetite",
		"water"
	]),
	value: string().trim().min(1).max(80),
	note: string().max(240).optional()
});
var addHealthLog_createServerFn_handler = createServerRpc({
	id: "ffafa193ccc3c0b0ad4f18a91fa7e97d784d86edce31cae594e2463841fdf758",
	name: "addHealthLog",
	filename: "src/lib/server/health.ts"
}, (opts) => addHealthLog.__executeServer(opts));
var addHealthLog = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => addInput.parse(d)).handler(addHealthLog_createServerFn_handler, async ({ context, data }) => {
	await (await requireTier3(context.userId))`
      insert into health_logs (user_id, cat_name, kind, value, note)
      values (${context.userId}, ${data.catName.trim()}, ${data.kind}, ${data.value.trim()}, ${data.note ?? null})
    `;
	return { ok: true };
});
var exportHealthLogs_createServerFn_handler = createServerRpc({
	id: "fc289cd6bf284a4bfc1246c22dbb9720c4c0a3dae3cb773f7ac21e385b5ece99",
	name: "exportHealthLogs",
	filename: "src/lib/server/health.ts"
}, (opts) => exportHealthLogs.__executeServer(opts));
var exportHealthLogs = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(exportHealthLogs_createServerFn_handler, async ({ context }) => {
	return (await requireTier3(context.userId))`select id,cat_name,kind,value,note,logged_at from health_logs where user_id=${context.userId} order by logged_at desc limit 10000`;
});
//#endregion
export { addHealthLog_createServerFn_handler, exportHealthLogs_createServerFn_handler, listHealthLogs_createServerFn_handler };

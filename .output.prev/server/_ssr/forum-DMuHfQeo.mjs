import { r as getSql } from "./db-WO7Pgea8.mjs";
import { F as object, P as number, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forum-DMuHfQeo.js
var listBoard_createServerFn_handler = createServerRpc({
	id: "e2781bf39fd12f02f428d46e2ad84dfe4fca6a4004534d7cc3b0600ba1fe5bba",
	name: "listBoard",
	filename: "src/lib/server/forum.ts"
}, (opts) => listBoard.__executeServer(opts));
var listBoard = createServerFn({ method: "GET" }).handler(listBoard_createServerFn_handler, async () => {
	const sql = await getSql();
	return {
		categories: await sql`
    select c.id, c.slug, c.name, c.description, c.sort_order,
      (select count(*)::int from forum_threads t where t.category_id = c.id) as thread_count
    from forum_categories c
    order by c.sort_order
  `,
		threads: await sql`
    select t.id, t.category_id, t.user_id, t.author_name, t.title, t.body, t.pinned, t.created_at,
      (select count(*)::int from forum_replies r where r.thread_id = t.id) as reply_count,
      c.slug as category_slug, c.name as category_name
    from forum_threads t
    join forum_categories c on c.id = t.category_id
    order by t.pinned desc, t.created_at desc
    limit 40
  `
	};
});
var getThread_createServerFn_handler = createServerRpc({
	id: "a286a51eb2aea9037b2a9afbb01b35ce79ee9872139abb64686d9c9e32683ede",
	name: "getThread",
	filename: "src/lib/server/forum.ts"
}, (opts) => getThread.__executeServer(opts));
var getThread = createServerFn({ method: "GET" }).validator((d) => object({ id: number().int().positive() }).parse(d)).handler(getThread_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	const thread = (await sql`
      select t.id, t.category_id, t.user_id, t.author_name, t.title, t.body, t.pinned, t.created_at,
        (select count(*)::int from forum_replies r where r.thread_id = t.id) as reply_count,
        c.slug as category_slug, c.name as category_name
      from forum_threads t
      join forum_categories c on c.id = t.category_id
      where t.id = ${data.id}
    `)[0];
	if (!thread) return {
		thread: null,
		replies: []
	};
	return {
		thread,
		replies: await sql`
      select id, thread_id, user_id, author_name, body, created_at
      from forum_replies where thread_id = ${data.id} order by created_at
    `
	};
});
async function requireTier2(userId) {
	const sql = await getSql();
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	if ((await readMembership(userId)).tier < 2) {
		const err = /* @__PURE__ */ new Error("Emergency Desk ($5/mo) is required to post.");
		err.status = 403;
		throw err;
	}
	return sql;
}
var postThreadInput = object({
	categoryId: number().int().positive(),
	title: string().trim().min(8).max(140),
	body: string().trim().min(20).max(4e3)
});
var postThread_createServerFn_handler = createServerRpc({
	id: "c839ada98111540a172929003ca53f998c7908dfbb2dc28c05e1c8a942544d22",
	name: "postThread",
	filename: "src/lib/server/forum.ts"
}, (opts) => postThread.__executeServer(opts));
var postThread = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => postThreadInput.parse(d)).handler(postThread_createServerFn_handler, async ({ context, data }) => {
	const sql = await requireTier2(context.userId);
	const people = await sql`select name, email from "user" where id = ${context.userId}`;
	const name = people[0]?.name || people[0]?.email || "Member";
	return { id: (await sql`
      insert into forum_threads (category_id, user_id, author_name, title, body)
      values (${data.categoryId}, ${context.userId}, ${name}, ${data.title.trim()}, ${data.body.trim()})
      returning id
    `)[0].id };
});
var postReplyInput = object({
	threadId: number().int().positive(),
	body: string().trim().min(8).max(4e3)
});
var postReply_createServerFn_handler = createServerRpc({
	id: "8ab5910a0bb068e4901646603de8ba80b53fc3c03c02f0d89030a949b392be39",
	name: "postReply",
	filename: "src/lib/server/forum.ts"
}, (opts) => postReply.__executeServer(opts));
var postReply = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => postReplyInput.parse(d)).handler(postReply_createServerFn_handler, async ({ context, data }) => {
	const sql = await requireTier2(context.userId);
	const people = await sql`select name, email from "user" where id = ${context.userId}`;
	const name = people[0]?.name || people[0]?.email || "Member";
	await sql`
      insert into forum_replies (thread_id, user_id, author_name, body)
      values (${data.threadId}, ${context.userId}, ${name}, ${data.body.trim()})
    `;
	return { ok: true };
});
//#endregion
export { getThread_createServerFn_handler, listBoard_createServerFn_handler, postReply_createServerFn_handler, postThread_createServerFn_handler };

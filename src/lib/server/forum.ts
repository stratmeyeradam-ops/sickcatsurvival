import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";

export type CategoryRow = {
  id: number;
  slug: string;
  name: string;
  description: string;
  sort_order: number;
  thread_count: number;
};

export type ThreadRow = {
  id: number;
  category_id: number;
  user_id: string;
  author_name: string;
  title: string;
  body: string;
  pinned: boolean;
  created_at: string;
  reply_count: number;
  category_slug: string;
  category_name: string;
};

export type ReplyRow = {
  id: number;
  thread_id: number;
  user_id: string;
  author_name: string;
  body: string;
  created_at: string;
};

export const listBoard = createServerFn({ method: "GET" }).handler(async () => {
  const sql = await getSql();
  const categories = await sql<CategoryRow>`
    select c.id, c.slug, c.name, c.description, c.sort_order,
      (select count(*)::int from forum_threads t where t.category_id = c.id) as thread_count
    from forum_categories c
    order by c.sort_order
  `;
  const threads = await sql<ThreadRow>`
    select t.id, t.category_id, t.user_id, t.author_name, t.title, t.body, t.pinned, t.created_at,
      (select count(*)::int from forum_replies r where r.thread_id = t.id) as reply_count,
      c.slug as category_slug, c.name as category_name
    from forum_threads t
    join forum_categories c on c.id = t.category_id
    order by t.pinned desc, t.created_at desc
    limit 40
  `;
  return { categories, threads };
});

export const getThread = createServerFn({ method: "GET" })
  .validator((d: unknown) => z.object({ id: z.number().int().positive() }).parse(d))
  .handler(async ({ data }) => {
    const sql = await getSql();
    const threads = await sql<ThreadRow>`
      select t.id, t.category_id, t.user_id, t.author_name, t.title, t.body, t.pinned, t.created_at,
        (select count(*)::int from forum_replies r where r.thread_id = t.id) as reply_count,
        c.slug as category_slug, c.name as category_name
      from forum_threads t
      join forum_categories c on c.id = t.category_id
      where t.id = ${data.id}
    `;
    const thread = threads[0];
    if (!thread) return { thread: null, replies: [] as ReplyRow[] };
    const replies = await sql<ReplyRow>`
      select id, thread_id, user_id, author_name, body, created_at
      from forum_replies where thread_id = ${data.id} order by created_at
    `;
    return { thread, replies };
  });

async function requireTier2(userId: string) {
  const sql = await getSql();
  const {readMembership}=await import("./billing-runtime.server");
  const membership = await readMembership(userId);
  const tier = membership.tier;
  if (tier < 2) {
    const err = new Error("Emergency Desk ($5/mo) is required to post.");
    (err as Error & { status: number }).status = 403;
    throw err;
  }
  return sql;
}

const postThreadInput = z.object({
  categoryId: z.number().int().positive(),
  title: z.string().trim().min(8).max(140),
  body: z.string().trim().min(20).max(4000),
});

export const postThread = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: unknown) => postThreadInput.parse(d))
  .handler(async ({ context, data }) => {
    const sql = await requireTier2(context.userId);
    const people = await sql<{ name: string; email: string }>`select name, email from "user" where id = ${context.userId}`;
    const name = people[0]?.name || people[0]?.email || "Member";
    const rows = await sql<{ id: number }>`
      insert into forum_threads (category_id, user_id, author_name, title, body)
      values (${data.categoryId}, ${context.userId}, ${name}, ${data.title.trim()}, ${data.body.trim()})
      returning id
    `;
    return { id: rows[0]!.id };
  });

const postReplyInput = z.object({
  threadId: z.number().int().positive(),
  body: z.string().trim().min(8).max(4000),
});

export const postReply = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: unknown) => postReplyInput.parse(d))
  .handler(async ({ context, data }) => {
    const sql = await requireTier2(context.userId);
    const people = await sql<{ name: string; email: string }>`select name, email from "user" where id = ${context.userId}`;
    const name = people[0]?.name || people[0]?.email || "Member";
    await sql`
      insert into forum_replies (thread_id, user_id, author_name, body)
      values (${data.threadId}, ${context.userId}, ${name}, ${data.body.trim()})
    `;
    return { ok: true };
  });

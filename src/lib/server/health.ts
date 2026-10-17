import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";

export type HealthLog = {
  id: number;
  cat_name: string;
  kind: string;
  value: string;
  note: string | null;
  logged_at: string;
};

async function requireTier3(userId: string) {
  const sql = await getSql();
  const {readMembership}=await import("./billing-runtime.server");
  const membership = await readMembership(userId);
  if (membership.tier < 3) {
    const err = new Error("Archive ($10/mo) is required for the toolkit.");
    (err as Error & { status: number }).status = 403;
    throw err;
  }
  return sql;
}

export const listHealthLogs = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await requireTier3(context.userId);
    return sql<HealthLog>`
      select id, cat_name, kind, value, note, logged_at
      from health_logs where user_id = ${context.userId}
      order by logged_at desc limit 80
    `;
  });

const addInput = z.object({
  catName: z.string().trim().min(1).max(40),
  kind: z.enum(["weight", "med", "symptom", "appetite", "water"]),
  value: z.string().trim().min(1).max(80),
  note: z.string().max(240).optional(),
});

export const addHealthLog = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: unknown) => addInput.parse(d))
  .handler(async ({ context, data }) => {
    const sql = await requireTier3(context.userId);
    await sql`
      insert into health_logs (user_id, cat_name, kind, value, note)
      values (${context.userId}, ${data.catName.trim()}, ${data.kind}, ${data.value.trim()}, ${data.note ?? null})
    `;
    return { ok: true };
  });

export const exportHealthLogs=createServerFn({method:'GET'}).middleware([authMiddleware]).handler(async({context})=>{
 const sql=await requireTier3(context.userId);
 return sql<HealthLog>`select id,cat_name,kind,value,note,logged_at from health_logs where user_id=${context.userId} order by logged_at desc limit 10000`;
});

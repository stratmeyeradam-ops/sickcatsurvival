import { createFileRoute } from "@tanstack/react-router";
import { TIERS } from "@/lib/tiers";

type Input = { type: "sub" | "merch"; tierId?: number; slug?: string; quantity?: number };

function resolveTier(raw: unknown) {
  const s = String(raw ?? "").trim();
  if (!s) return null;
  return TIERS.find((t) => String(t.id) === s || t.slug === s) || null;
}

function htmlError(message: string) {
  const safe = message.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] || c);
  return new Response(
    `<!doctype html><meta charset="utf-8"><title>Checkout</title><p>${safe}</p><p><a href="/pricing">Back to pricing</a></p>`,
    { status: 400, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

async function currentUser(request: Request) {
  try {
    // Server-only modules: route files are also bundled for the client, so these
    // stay dynamic (same reason the webhook route does).
    const { auth } = await import("@/lib/auth/server");
    const session = await auth.api.getSession({ headers: request.headers });
    return session?.user ?? null;
  } catch {
    return null;
  }
}

async function open(request: Request, input: Input) {
  const { billingService } = await import("@/lib/server/billing-runtime.server");
  const { service } = await billingService();
  const user = await currentUser(request);
  try {
    const result = await service.checkout(user?.id ?? null, user?.email ?? null, input);
    return Response.json(result);
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 400 });
  }
}

export const Route = createFileRoute("/api/checkout")({
  server: {
    handlers: {
      // Membership checkout: /api/checkout?plan=2 or ?tier=emergency-desk
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const tier = resolveTier(url.searchParams.get("tier") || url.searchParams.get("plan"));
        if (!tier) return htmlError("Choose Field Notes, Emergency Desk, or Archive.");
        const result = await open(request, { type: "sub", tierId: tier.id });
        if (result.status !== 200) {
          const body = (await result.json().catch(() => ({}))) as { error?: string };
          return htmlError(body.error || "Checkout could not open.");
        }
        const body = (await result.json()) as { url?: string };
        if (!body.url) return htmlError("Checkout could not open.");
        return Response.redirect(body.url, 303);
      },
      // Membership or merch: {type:"merch", slug, quantity} or {tier|tierId|plan}
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => ({}))) as Record<string, any>;
        if (body.type === "merch" || body.slug) {
          if (!body.slug) return Response.json({ error: "Choose an item first." }, { status: 400 });
          return open(request, {
            type: "merch",
            slug: String(body.slug),
            quantity: Number(body.quantity) || 1,
          });
        }
        const tier = resolveTier(body.tierId ?? body.tier ?? body.plan);
        if (!tier) return Response.json({ error: "Choose Field Notes, Emergency Desk, or Archive." }, { status: 400 });
        return open(request, { type: "sub", tierId: tier.id });
      },
    },
  },
});

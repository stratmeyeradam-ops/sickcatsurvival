import { r as getSql } from "./db-WO7Pgea8.mjs";
import { A as discriminatedUnion, F as object, M as literal, P as number, R as string, z as union } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as optionalSession } from "./session-CmeaUiny.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/billing-B8fbypIj.js
var getOptionalTier_createServerFn_handler = createServerRpc({
	id: "ddd5322b6e0871d8c7130a065e5e9bb9058f75f0357c811e146ceb702dc440e8",
	name: "getOptionalTier",
	filename: "src/lib/server/billing.ts"
}, (opts) => getOptionalTier.__executeServer(opts));
var getOptionalTier = createServerFn({ method: "GET" }).middleware([optionalSession]).handler(getOptionalTier_createServerFn_handler, async ({ context }) => {
	if (!context.userId) return {
		signedIn: false,
		tier: 0,
		displayName: null
	};
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	return {
		signedIn: true,
		tier: (await readMembership(context.userId)).tier,
		displayName: context.email || "Member"
	};
});
var getMyBilling_createServerFn_handler = createServerRpc({
	id: "13d4e81d869f3c853fae7847e6c58fc0c69369a771ca5a6262c8b1c560116b21",
	name: "getMyBilling",
	filename: "src/lib/server/billing.ts"
}, (opts) => getMyBilling.__executeServer(opts));
var getMyBilling = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getMyBilling_createServerFn_handler, async ({ context }) => {
	const sql = await getSql();
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const m = await readMembership(context.userId);
	const orders = await sql`select id,product_name,amount_cents,currency,status,fulfillment_status,created_at from stripe_orders where user_id=${context.userId} order by id desc limit 30`;
	return {
		...m,
		orders
	};
});
var startCheckout_createServerFn_handler = createServerRpc({
	id: "3a692df9631aa38c4b82a311d5d20841d5b0f5970c1476adcc224f9a39ce2b45",
	name: "startCheckout",
	filename: "src/lib/server/billing.ts"
}, (opts) => startCheckout.__executeServer(opts));
var startCheckout = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => discriminatedUnion("type", [object({
	type: literal("sub"),
	tierId: union([
		literal(1),
		literal(2),
		literal(3)
	])
}), object({
	type: literal("merch"),
	slug: string(),
	quantity: number().int().min(1).max(6).default(1)
})]).parse(d)).handler(startCheckout_createServerFn_handler, async ({ context, data }) => {
	const { billingService } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const { service } = await billingService();
	return service.checkout(context.userId, context.email ?? null, data);
});
var manageSubscription_createServerFn_handler = createServerRpc({
	id: "75fe27772f0c8189043d0a1c14656ee5cc4fd9e3e2953c6c4a8a79ab5f85c622",
	name: "manageSubscription",
	filename: "src/lib/server/billing.ts"
}, (opts) => manageSubscription.__executeServer(opts));
var manageSubscription = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(manageSubscription_createServerFn_handler, async ({ context }) => {
	const { billingService } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const { service } = await billingService();
	return service.portal(context.userId, context.email ?? null);
});
var confirmCheckout_createServerFn_handler = createServerRpc({
	id: "feb43b63b355fdb5a463a355d1ff239a56123c3161ec90f7d84247782d80c4ad",
	name: "confirmCheckout",
	filename: "src/lib/server/billing.ts"
}, (opts) => confirmCheckout.__executeServer(opts));
var confirmCheckout = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => object({ sessionId: string().min(1) }).parse(d)).handler(confirmCheckout_createServerFn_handler, async ({ context, data }) => {
	const { billingService } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const { stripe, service } = await billingService();
	const session = await stripe.checkout.sessions.retrieve(data.sessionId);
	if (session.metadata?.userId !== context.userId) throw Error("This purchase belongs to another account.");
	return service.complete(session);
});
//#endregion
export { confirmCheckout_createServerFn_handler, getMyBilling_createServerFn_handler, getOptionalTier_createServerFn_handler, manageSubscription_createServerFn_handler, startCheckout_createServerFn_handler };

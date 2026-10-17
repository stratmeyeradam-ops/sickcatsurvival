import { A as discriminatedUnion, F as object, M as literal, P as number, R as string, z as union } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as optionalSession } from "./session-CmeaUiny.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/billing-CUfcP8dQ.js
var getOptionalTier = createServerFn({ method: "GET" }).middleware([optionalSession]).handler(createSsrRpc("ddd5322b6e0871d8c7130a065e5e9bb9058f75f0357c811e146ceb702dc440e8"));
var getMyBilling = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("13d4e81d869f3c853fae7847e6c58fc0c69369a771ca5a6262c8b1c560116b21"));
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
})]).parse(d)).handler(createSsrRpc("3a692df9631aa38c4b82a311d5d20841d5b0f5970c1476adcc224f9a39ce2b45"));
var manageSubscription = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("75fe27772f0c8189043d0a1c14656ee5cc4fd9e3e2953c6c4a8a79ab5f85c622"));
var confirmCheckout = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => object({ sessionId: string().min(1) }).parse(d)).handler(createSsrRpc("feb43b63b355fdb5a463a355d1ff239a56123c3161ec90f7d84247782d80c4ad"));
//#endregion
export { startCheckout as a, manageSubscription as i, getMyBilling as n, getOptionalTier as r, confirmCheckout as t };

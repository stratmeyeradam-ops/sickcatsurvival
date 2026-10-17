import { o as __toESM } from "../_runtime.mjs";
import { a as tierName } from "./tiers-Z3ErO98v.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as RedirectToSignIn, l as useCurrentUserState } from "./router-CvHHevTe.mjs";
import { n as getMyBilling } from "./billing-CUfcP8dQ.mjs";
import { n as ManageButton } from "./checkout-DPc3Cxbu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BAQ6ECy0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { user, isPending } = useCurrentUserState();
	const [billing, setBilling] = (0, import_react.useState)(null), [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (user) getMyBilling().then(setBilling).catch((e) => setError(e.message));
	}, [user?.id]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: "Loading account…"
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-sage",
				children: "Your account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: user.displayName || "Your membership"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: user.primaryEmail
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-4 text-alert",
				children: error
			}) : null,
			billing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 rounded-xl bg-surface p-6 shadow-plate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: tierName(billing.tier)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "my-3 text-muted",
							children: billing.tier ? "Your member tools are ready. Change or cancel your plan, update your card, or download invoices in billing." : "Explore the free resources or choose a monthly membership."
						}),
						billing.tier ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageButton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-sage underline",
							children: "Choose a membership"
						}),
						billing.memberships.some((m) => m.cancel_at_period_end) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Your membership is set to end at the close of its current billing period."
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mt-6 grid gap-4 sm:grid-cols-3",
					children: [
						{
							to: "/manuals",
							label: "Care manuals",
							text: "Practical household routines"
						},
						{
							to: "/community",
							label: "Community board",
							text: "Share experiences and logistics"
						},
						{
							to: "/toolkit",
							label: "Health toolkit",
							text: "Records, exports and clinic preparation"
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: r.to,
						className: "rounded-xl bg-surface p-5 shadow-plate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: r.text
						})]
					}, r.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Your orders"
					}), billing.orders.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line",
						children: billing.orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									o.product_name,
									" · ",
									new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: o.currency
									}).format(o.amount_cents / 100)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: o.fulfillment_status === "submitted" ? "Sent for production" : o.fulfillment_status === "error" ? "Payment received · shipping preparation is being retried" : "Payment received · preparing your order"
							})]
						}, o.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "No orders yet."
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-muted",
				children: "Loading membership…"
			})
		]
	});
}
//#endregion
export { AccountPage as component };

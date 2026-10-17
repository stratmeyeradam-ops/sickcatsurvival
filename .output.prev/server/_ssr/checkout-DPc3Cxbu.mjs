import { o as __toESM } from "../_runtime.mjs";
import { i as TIERS } from "./tiers-Z3ErO98v.mjs";
import { d as useRouterState, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Check } from "../_libs/lucide-react.mjs";
import { s as Button, u as cn } from "./router-CvHHevTe.mjs";
import { a as startCheckout, i as manageSubscription } from "./billing-CUfcP8dQ.mjs";
import { n as formatPrice } from "./products-Cvabe9IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DPc3Cxbu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutButton({ kind, signedIn }) {
	const [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(null);
	const search = useRouterState({ select: (s) => s.location.searchStr });
	const resumed = (0, import_react.useRef)(false);
	async function buy() {
		if (!signedIn) {
			const next = kind.type === "sub" ? `/pricing?plan=${kind.tierId}` : `/shop/${kind.slug}?buy=1`;
			window.location.href = "/login?next=" + encodeURIComponent(next);
			return;
		}
		setBusy(true);
		setError(null);
		try {
			const res = await startCheckout({ data: kind.type === "sub" ? kind : {
				type: "merch",
				slug: kind.slug,
				quantity: 1
			} });
			window.location.href = res.url;
		} catch (e) {
			setError(e instanceof Error ? e.message : "Checkout could not open. Please try again.");
			setBusy(false);
		}
	}
	(0, import_react.useEffect)(() => {
		const q = new URLSearchParams(search);
		const resume = kind.type === "sub" ? q.get("plan") === String(kind.tierId) : q.get("buy") === "1";
		if (signedIn && resume && !resumed.current) {
			resumed.current = true;
			window.history.replaceState(null, "", window.location.pathname);
			buy();
		}
	}, [signedIn, search]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		size: "lg",
		className: "w-full",
		disabled: busy,
		onClick: () => void buy(),
		children: busy ? "Opening checkout…" : kind.type === "sub" ? `Subscribe — ${formatPrice(TIERS.find((t) => t.id === kind.tierId).priceCents)}/month` : `Buy — ${formatPrice(kind.priceCents)}`
	}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-sm text-alert",
		role: "alert",
		children: error
	}) : null] });
}
function ManageButton() {
	const [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		disabled: busy,
		onClick: () => {
			setBusy(true);
			setError(null);
			manageSubscription().then((r) => window.location.href = r.url).catch((e) => {
				setError(e.message);
				setBusy(false);
			});
		},
		children: busy ? "Opening billing…" : "Manage subscription"
	}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "alert",
		className: "mt-2 text-sm text-alert",
		children: error
	}) : null] });
}
function TierCard({ tierId, current, signedIn, featured }) {
	const plan = TIERS.find((t) => t.id === tierId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex h-full flex-col rounded-xl bg-surface p-6 shadow-plate", featured && "ring-2 ring-sage"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: plan.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-display text-4xl",
				children: [formatPrice(plan.priceCents), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 font-sans text-base text-muted",
					children: "/ month"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: plan.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex-1 space-y-3 text-sm",
				children: plan.perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-sage" }), p]
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: current > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-sage",
					children: current === tierId ? "Your current plan" : current > tierId ? "Included in your plan" : "Upgrade in billing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageButton, {})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutButton, {
					kind: {
						type: "sub",
						tierId
					},
					signedIn
				})
			})
		]
	});
}
//#endregion
export { ManageButton as n, TierCard as r, CheckoutButton as t };

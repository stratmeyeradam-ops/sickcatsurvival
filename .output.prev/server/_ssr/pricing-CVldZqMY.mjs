import { o as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { r as TierCard } from "./checkout-DPc3Cxbu.mjs";
import { n as PageHero } from "./page-hero-DyvGD1Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-CVldZqMY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	const [tier, setTier] = (0, import_react.useState)(0);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => {
			setTier(r.tier);
			setSignedIn(r.signedIn);
		}).catch(() => setSignedIn(false));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Monthly memberships",
		title: "Useful care tools. One simple membership.",
		lede: "Field Notes $1, Emergency Desk $5, Archive $10 — monthly through Stripe. Emergency protocols stay free.",
		image: "/images/frame-orange.jpg",
		imageAlt: "Orange tabby in an editorial frame"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TierCard, {
				tierId: 1,
				current: tier,
				signedIn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TierCard, {
				tierId: 2,
				current: tier,
				signedIn,
				featured: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TierCard, {
				tierId: 3,
				current: tier,
				signedIn
			})
		]
	})] });
}
//#endregion
export { PricingPage as component };

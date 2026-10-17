import { v as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatPrice, t as PRODUCTS } from "./products-Cvabe9IX.mjs";
import { n as PageHero } from "./page-hero-DyvGD1Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop.index-DATc1qHY.js
var import_jsx_runtime = require_jsx_runtime();
function ShopIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "The shop",
		title: "Goods for the go-bag",
		lede: "Everyday supplies and pieces for cat people. Secure checkout through Stripe.",
		image: "/products/tote.jpg",
		imageAlt: "Natural canvas tote on paper"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-3",
		children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/shop/$slug",
			params: { slug: p.slug },
			className: "group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.image,
				alt: p.name,
				className: "aspect-[6/7] w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl group-hover:text-sage",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular-nums text-sm",
					children: formatPrice(p.priceCents)
				})]
			})]
		}, p.slug))
	})] });
}
//#endregion
export { ShopIndex as component };

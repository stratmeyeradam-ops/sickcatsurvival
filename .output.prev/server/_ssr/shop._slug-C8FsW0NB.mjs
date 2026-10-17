import { o as __toESM } from "../_runtime.mjs";
import { n as DISCLAIMER } from "./tiers-Z3ErO98v.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$4 } from "./router-CvHHevTe.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as formatPrice, r as getProduct, t as PRODUCTS } from "./products-Cvabe9IX.mjs";
import { t as CheckoutButton } from "./checkout-DPc3Cxbu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._slug-C8FsW0NB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route$4.useParams();
	const product = getProduct(slug);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => setSignedIn(r.signedIn)).catch(() => setSignedIn(false));
	}, []);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Not in the shop"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "mt-4 inline-block text-sage",
			children: "Shop"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.image,
			alt: product.name,
			className: "w-full rounded-xl object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: product.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: product.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl tabular-nums",
				children: formatPrice(product.priceCents)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: product.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutButton, {
					kind: {
						type: "merch",
						slug: product.slug,
						name: product.name,
						priceCents: product.priceCents
					},
					signedIn
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: "Secure Stripe checkout. Enter your delivery address at checkout; orders are made on demand."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs text-muted",
				children: DISCLAIMER
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Also in the shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-3 gap-3",
					children: PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop/$slug",
						params: { slug: p.slug },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							className: "aspect-square w-full rounded-md object-cover"
						})
					}, p.slug))
				})]
			})
		] })]
	});
}
//#endregion
export { ProductPage as component };

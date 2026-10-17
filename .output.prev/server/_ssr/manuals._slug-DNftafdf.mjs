import { o as __toESM } from "../_runtime.mjs";
import { n as DISCLAIMER } from "./tiers-Z3ErO98v.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$6 } from "./router-CvHHevTe.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { t as LockNote } from "./page-hero-DyvGD1Dy.mjs";
import { r as loadManual } from "./content-C9BjKGJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manuals._slug-DNftafdf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ManualPage() {
	const { slug } = Route$6.useParams();
	const [manual, setManual] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setLoading(true);
		loadManual({ data: { slug } }).then(setManual).catch(() => setManual(null)).finally(() => setLoading(false));
	}, [slug]);
	const [tier, setTier] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => setTier(r.tier));
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: "Loading manual…"
	});
	if (!manual) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Manual not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manuals",
			className: "mt-4 inline-block text-sage",
			children: "All manuals"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-sage",
				children: manual.read
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: manual.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: manual.lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: manual.image,
				alt: "",
				className: "mt-8 h-64 w-full rounded-xl object-cover"
			}),
			tier < 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockNote, { need: "Field Notes ($1/mo with Stripe)" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-8",
				children: manual.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: s.heading
				}), s.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: p
				}, p))] }, s.heading))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-xs text-muted",
				children: DISCLAIMER
			})
		]
	});
}
//#endregion
export { ManualPage as component };

import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./router-CvHHevTe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DyvGD1Dy.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, lede, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-sage",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-muted",
					children: lede
				})
			] }), image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt ?? "",
				className: cn("h-56 w-full rounded-xl object-cover sm:h-72")
			}) : null]
		})
	});
}
function LockNote({ need }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-plate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-muted",
				children: "Members"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 font-display text-2xl",
				children: ["This desk is behind ", need]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Emergency protocols and the core evaluator stay open. This section is for subscribers, paid through Stripe."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/pricing",
				className: "mt-4 inline-flex text-sm font-medium text-sage underline-offset-4 hover:underline",
				children: "Open Membership plans"
			})
		]
	});
}
//#endregion
export { PageHero as n, LockNote as t };

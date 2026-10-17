import { r as POISON_LINE } from "./tiers-Z3ErO98v.mjs";
import { v as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero } from "./page-hero-DyvGD1Dy.mjs";
import { t as PROTOCOLS } from "./emergencies-CjM6UsfG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/emergency.index-D6big3Jq.js
var import_jsx_runtime = require_jsx_runtime();
function EmergencyIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Open to everyone",
			title: "Emergency protocols",
			lede: "These pages stay unlocked. If the sign matches, you leave. The hospital does the rest.",
			image: "/images/frame-gray.jpg",
			imageAlt: "A gray cat looking upward"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-alert px-4 py-3 text-sm text-alert-fg",
				children: POISON_LINE
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2",
			children: PROTOCOLS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/emergency/$slug",
				params: { slug: p.slug },
				className: "overflow-hidden rounded-xl bg-surface shadow-plate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: "",
					className: "h-44 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-alert",
							children: p.minutes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: p.summary
						})
					]
				})]
			}, p.slug))
		})
	] });
}
//#endregion
export { EmergencyIndex as component };

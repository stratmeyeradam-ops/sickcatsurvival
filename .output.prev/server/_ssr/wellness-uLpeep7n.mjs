import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, t as LockNote } from "./page-hero-DyvGD1Dy.mjs";
import { i as loadWellness } from "./content-C9BjKGJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wellness-uLpeep7n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WellnessPage() {
	const [content, setContent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadWellness().then(setContent).catch(() => {});
	}, []);
	const today = content?.today || {
		title: "Daily care note",
		body: ""
	};
	const WELLNESS_TIPS = content?.tips || [];
	const locked = (content?.tier || 0) < 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Field Notes · $1/mo",
		title: "Wellness desk",
		lede: "Short notes you can use on an ordinary Tuesday so the emergency desk is needed less often.",
		image: "/images/wellness-wide.jpg",
		imageAlt: "Kitten asleep in a window"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockNote, { need: "Field Notes ($1/mo with Stripe)" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-6 rounded-xl bg-surface p-6 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-sage",
						children: "Today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: today.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: locked ? "Subscribe to read the full note." : today.body
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: WELLNESS_TIPS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-plate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: t.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: locked ? "Available on Field Notes." : t.body
					})]
				}, t.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl bg-surface p-6 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Turn notes into a routine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Make a care handoff sheet, print a clinic visit packet, or keep a dated history in the member toolkit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resources",
							className: "text-sage underline",
							children: "Free planning sheets"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/toolkit",
							className: "text-sage underline",
							children: "Health ledger"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm",
				children: [
					"Care manuals live next door.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/manuals",
						className: "text-sage",
						children: "Open manuals"
					})
				]
			})
		]
	})] });
}
//#endregion
export { WellnessPage as component };

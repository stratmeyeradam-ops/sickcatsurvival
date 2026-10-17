import { o as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, t as LockNote } from "./page-hero-DyvGD1Dy.mjs";
import { i as loadWellness } from "./content-C9BjKGJP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archives-BmUABtB8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchivesPage() {
	const [content, setContent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadWellness().then(setContent).catch(() => {});
	}, []);
	const tier = content?.tier || 0, ARCHIVES = content?.archives || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Archive · $10/mo",
		title: "Digital archives",
		lede: "Organized checklists for clinic visits, home-care handoffs and useful records.",
		image: "/images/archives.jpg",
		imageAlt: "Maps and a small slate on a wooden desk"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [tier < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockNote, { need: "Archive ($10/mo with Stripe)" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-2",
			children: ARCHIVES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-6 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: a.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: tier < 3 ? "Unlock with Archive." : a.body
					}),
					tier >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 list-disc space-y-3 pl-5 text-sm",
						children: a.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}) : null
				]
			}, a.slug))
		})]
	})] });
}
//#endregion
export { ArchivesPage as component };

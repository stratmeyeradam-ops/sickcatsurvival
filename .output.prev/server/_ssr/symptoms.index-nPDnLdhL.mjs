import { v as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero } from "./page-hero-DyvGD1Dy.mjs";
import { t as SYMPTOMS } from "./symptoms-Aj-xjOYC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/symptoms.index-nPDnLdhL.js
var import_jsx_runtime = require_jsx_runtime();
function SymptomsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Evaluator",
		title: "What are you seeing?",
		lede: "Large buttons. Short trees. A recommendation to go now, go today, or watch — never a diagnosis.",
		image: "/images/frame-tabby.jpg",
		imageAlt: "Silver tabby observed in quiet light"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2",
		children: SYMPTOMS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/symptoms/$slug",
			params: { slug: s.slug },
			className: "overflow-hidden rounded-xl bg-surface shadow-plate",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.image,
				alt: "",
				className: "h-44 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: s.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-alert",
						children: s.redFlag
					})
				]
			})]
		}, s.slug))
	})] });
}
//#endregion
export { SymptomsIndex as component };

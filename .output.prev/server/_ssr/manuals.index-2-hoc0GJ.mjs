import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as PageHero, t as LockNote } from "./page-hero-DyvGD1Dy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manuals.index-2-hoc0GJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MANUALS = [
	{
		"slug": "water",
		"title": "Water, always",
		"read": "8 min",
		"image": "/images/wellness-wide.jpg",
		"lede": "Chronic kidney disease is common in older cats. The cheapest intervention is making water unavoidable.",
		"sections": []
	},
	{
		"slug": "box",
		"title": "The box as a vital sign",
		"read": "7 min",
		"image": "/images/close-tabby.jpg",
		"lede": "Litter habits are often the first chart a veterinarian wishes you had kept.",
		"sections": []
	},
	{
		"slug": "weight",
		"title": "Weight is a weekly number",
		"read": "6 min",
		"image": "/images/hero-orange.jpg",
		"lede": "A kitchen scale and a carrier. Monthly guesses miss the slide into thinness or the creep of fat.",
		"sections": []
	},
	{
		"slug": "carrier",
		"title": "The carrier is furniture",
		"read": "5 min",
		"image": "/images/sit-brown.jpg",
		"lede": "A cat who only sees the carrier at 2 a.m. will not walk into it at 2 a.m.",
		"sections": []
	},
	{
		"slug": "senior",
		"title": "The older cat",
		"read": "10 min",
		"image": "/images/portrait-gray.jpg",
		"lede": "Senior cats compensate until they cannot. Bloodwork on a schedule is cheaper than a crisis.",
		"sections": []
	},
	{
		"slug": "mouth",
		"title": "Teeth, quietly",
		"read": "6 min",
		"image": "/images/close-orange.jpg",
		"lede": "Cats eat through pain until they stop. Bad breath and dropping food are clinic signs, not personality.",
		"sections": []
	},
	{
		"slug": "stress",
		"title": "A quieter house",
		"read": "7 min",
		"image": "/images/tuxedo.jpg",
		"lede": "Cystitis in cats is often a stress disease as much as a crystal disease.",
		"sections": []
	},
	{
		"slug": "go-bag",
		"title": "The 2 a.m. go-bag",
		"read": "5 min",
		"image": "/images/archives.jpg",
		"lede": "The bag exists so you do not think. You pick it up and you leave.",
		"sections": []
	}
];
function ManualsIndex() {
	const [tier, setTier] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => setTier(r.tier));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Field Notes",
		title: "Care manuals",
		lede: "Household logistics: water, the box, the carrier, the older cat. Not treatment plans.",
		image: "/images/archives.jpg",
		imageAlt: "A desk with maps and a small slate"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [tier < 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockNote, { need: "Field Notes ($1/mo with Stripe)" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-2",
			children: MANUALS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/manuals/$slug",
				params: { slug: m.slug },
				className: "overflow-hidden rounded-xl bg-surface shadow-plate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: m.image,
					alt: "",
					className: "h-40 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: m.read
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: m.lede
						})
					]
				})]
			}, m.slug))
		})]
	})] });
}
//#endregion
export { ManualsIndex as component };

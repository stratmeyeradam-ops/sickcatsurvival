import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight, i as Search, r as Siren } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-CvHHevTe.mjs";
import { t as PRODUCTS } from "./products-Cvabe9IX.mjs";
import { t as dailyNote } from "./content-C9BjKGJP.mjs";
import { t as Input } from "./input-C3fiiGqA.mjs";
import { t as Badge } from "./badge-DybxT2wK.mjs";
import { t as PROTOCOLS } from "./emergencies-CjM6UsfG.mjs";
import { t as SYMPTOMS } from "./symptoms-Aj-xjOYC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CY4HiwSG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [q, setQ] = (0, import_react.useState)("");
	const matches = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		if (!needle) return SYMPTOMS.slice(0, 6);
		return SYMPTOMS.filter((s) => s.title.toLowerCase().includes(needle) || s.summary.toLowerCase().includes(needle) || s.redFlag.toLowerCase().includes(needle));
	}, [q]);
	const [tip, setTip] = (0, import_react.useState)({
		title: "A daily care note",
		body: "Practical notes for everyday routines."
	});
	(0, import_react.useEffect)(() => {
		dailyNote().then(setTip).catch(() => {});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-sage",
						children: "Feline care · practical tools"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl leading-[1.05] sm:text-6xl",
						children: "If your cat is in trouble, start here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-lg text-muted",
						children: "Clear symptom trees and emergency protocols written for a kitchen floor at 2 a.m. Not a veterinarian. A map to one."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8",
						onSubmit: (e) => e.preventDefault(),
						role: "search",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "symptom-search",
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "What are you seeing?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "symptom-search",
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Straining, open mouth, not eating…",
								className: "pl-10"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/emergency",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "alert",
								size: "lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-4" }), "Emergency protocols"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/symptoms",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "lg",
								children: ["Full evaluator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-wide.jpg",
					alt: "A silver tabby cat looking up, quiet and still",
					className: "h-72 w-full rounded-xl object-cover sm:h-[420px]"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:px-6 md:grid-cols-3",
			children: [
				{
					to: "/resources",
					title: "Prepare for a clinic visit",
					text: "Free printable visit packets, sitter handoffs and observation sheets."
				},
				{
					to: "/manuals",
					title: "Build a better care routine",
					text: "Practical manuals for feeding, carriers, litter routines and senior-cat logistics."
				},
				{
					to: "/toolkit",
					title: "Keep a useful health history",
					text: "Member records for observations and medicines, with a CSV to share with your clinic."
				}
			].map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: tool.to,
				className: "rounded-xl bg-surface p-5 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: tool.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: tool.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-4 inline-block text-sm text-sage",
						children: "Open tool →"
					})
				]
			}, tool.to))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "The three that cannot wait"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/emergency",
					className: "hidden text-sm text-sage sm:inline",
					children: "All protocols"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-3",
				children: SYMPTOMS.filter((s) => [
					"not-urinating",
					"breathing",
					"hind-legs"
				].includes(s.slug)).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/symptoms/$slug",
					params: { slug: s.slug },
					className: "group overflow-hidden rounded-xl bg-surface shadow-plate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: "",
						className: "h-40 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "alert",
								children: "Emergency"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl group-hover:text-sage",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: s.redFlag
							})
						]
					})]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Symptom evaluator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: "Answer a few large buttons. The tree tells you whether to go now, go today, or watch."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: matches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/symptoms/$slug",
							params: { slug: s.slug },
							className: "rounded-lg bg-paper p-4 shadow-plate transition-transform duration-150 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: s.summary
							})]
						}, s.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/wellness-wide.jpg",
					alt: "A kitten sleeping in a sunlit window",
					className: "h-72 w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-sage",
						children: "Today’s field note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: tip.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: tip.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/wellness",
						className: "mt-6 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							children: ["Wellness desk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-paper",
					children: "Protocols, not panic"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 md:grid-cols-2",
					children: PROTOCOLS.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/emergency/$slug",
						params: { slug: p.slug },
						className: "rounded-lg border border-white/10 p-4 hover:bg-white/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-sage-fg/70",
								children: p.minutes
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl text-paper",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-paper/70",
								children: p.summary
							})
						]
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Printify shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-sm text-sage",
					children: "All goods"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-4",
				children: PRODUCTS.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop/$slug",
					params: { slug: p.slug },
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.name,
						className: "aspect-[6/7] w-full rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-medium group-hover:text-sage",
						children: p.name
					})]
				}, p.slug))
			})]
		})
	] });
}
//#endregion
export { Home as component };

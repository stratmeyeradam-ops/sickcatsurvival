import { o as __toESM } from "../_runtime.mjs";
import { n as DISCLAIMER } from "./tiers-Z3ErO98v.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, l as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route$2, s as Button, u as cn } from "./router-CvHHevTe.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as loadAdvanced } from "./content-C9BjKGJP.mjs";
import { t as Badge } from "./badge-DybxT2wK.mjs";
import { n as getSymptom, r as urgencyLabel } from "./symptoms-Aj-xjOYC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/symptoms._slug-BcSd74sI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Frame({ title, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("rounded-xl bg-surface p-4 shadow-plate", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mb-3 text-xs uppercase tracking-[0.16em] text-muted",
			children: title
		}), children]
	});
}
function UrinaryDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Urinary tract — male cat, schematic",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Male feline urinary tract schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "150",
					cy: "118",
					rx: "110",
					ry: "70",
					fill: "#EFE8DC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "168",
					cy: "100",
					rx: "38",
					ry: "28",
					fill: "#2A5348",
					opacity: "0.9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "104",
					textAnchor: "middle",
					fontSize: "11",
					fill: "#F4EFE6",
					children: "Bladder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M200 112 C 250 118, 280 150, 300 168",
					stroke: "#9B2C2C",
					strokeWidth: "7",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "236",
					y: "138",
					fontSize: "11",
					fill: "#9B2C2C",
					children: "Urethra (narrow)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "304",
					cy: "172",
					r: "7",
					fill: "#9B2C2C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "28",
					fontSize: "12",
					fill: "#1A1814",
					children: "A plug here stops all urine."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "20",
					y: "204",
					fontSize: "11",
					fill: "#6F685E",
					children: "Schematic only — not a diagnostic image."
				})
			]
		})
	});
}
function RespiratoryDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Breathing effort — what to watch",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Feline respiratory effort schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "120",
					rx: "100",
					ry: "64",
					fill: "#EFE8DC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "148",
					cy: "108",
					rx: "34",
					ry: "26",
					fill: "#2A5348"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "148",
					y: "112",
					textAnchor: "middle",
					fontSize: "11",
					fill: "#F4EFE6",
					children: "Lungs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M210 90 C 250 70, 280 90, 300 80",
					stroke: "#2A5348",
					strokeWidth: "3",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "222",
					y: "68",
					fontSize: "11",
					fill: "#2A5348",
					children: "Open mouth = emergency"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M80 160 C 120 190, 180 190, 220 160",
					stroke: "#9B2C2C",
					strokeWidth: "3",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "96",
					y: "204",
					fontSize: "11",
					fill: "#9B2C2C",
					children: "Belly pumping"
				})
			]
		})
	});
}
function CardiacDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Aorta split — saddle thrombus",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Saddle thrombus schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "150",
					cy: "70",
					rx: "28",
					ry: "22",
					fill: "#9B2C2C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "74",
					textAnchor: "middle",
					fontSize: "11",
					fill: "#F4EFE6",
					children: "Heart"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M150 92 L150 130 L110 190 M150 130 L190 190",
					stroke: "#2A5348",
					strokeWidth: "8",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "132",
					r: "9",
					fill: "#9B2C2C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "168",
					y: "128",
					fontSize: "11",
					fill: "#9B2C2C",
					children: "Clot at the split"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "70",
					y: "210",
					fontSize: "11",
					fill: "#6F685E",
					children: "Hind paws go cold. This is pain. Go now."
				})
			]
		})
	});
}
function GiDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Stomach and gut — schematic",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Feline gastrointestinal schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "130",
					cy: "90",
					rx: "36",
					ry: "24",
					fill: "#2A5348"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "130",
					y: "94",
					textAnchor: "middle",
					fontSize: "11",
					fill: "#F4EFE6",
					children: "Stomach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 96 C 200 80, 230 120, 200 140 C 170 160, 240 170, 250 150",
					stroke: "#2A5348",
					strokeWidth: "6",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "188",
					fontSize: "11",
					fill: "#6F685E",
					children: "Repeated vomiting or a hanging string is not a wait."
				})
			]
		})
	});
}
function NeuroDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Collapse — keep the carrier level",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Collapse handling schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "70",
					y: "80",
					width: "220",
					height: "80",
					rx: "14",
					fill: "#2A5348"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "180",
					cy: "120",
					rx: "70",
					ry: "22",
					fill: "#F4EFE6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "124",
					textAnchor: "middle",
					fontSize: "12",
					fill: "#2A5348",
					children: "Level carrier"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: "40",
					fontSize: "12",
					fill: "#1A1814",
					children: "Do not dangle. Do not give oral medicine."
				})
			]
		})
	});
}
function TraumaDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "Pressure, then the hospital",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 220",
			className: "h-auto w-full",
			role: "img",
			"aria-label": "Bleeding control schematic",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "360",
					height: "220",
					fill: "#F4EFE6",
					rx: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "90",
					y: "70",
					width: "80",
					height: "90",
					rx: "8",
					fill: "#EFE8DC"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "150",
					y: "90",
					width: "90",
					height: "50",
					rx: "8",
					fill: "#2A5348"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "195",
					y: "120",
					textAnchor: "middle",
					fontSize: "11",
					fill: "#F4EFE6",
					children: "Firm cloth"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: "200",
					fontSize: "11",
					fill: "#6F685E",
					children: "Direct pressure. No tourniquet unless a veterinarian is on the phone."
				})
			]
		})
	});
}
function Anatomy({ kind }) {
	switch (kind) {
		case "urinary": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrinaryDiagram, {});
		case "respiratory": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespiratoryDiagram, {});
		case "cardiac": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardiacDiagram, {});
		case "gi": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiDiagram, {});
		case "neuro": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuroDiagram, {});
		case "trauma": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TraumaDiagram, {});
		default: return null;
	}
}
function ResultCard({ result }) {
	const tone = result.urgency === "emergency" ? "alert" : result.urgency === "urgent" ? "sage" : "muted";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-5 shadow-plate sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: tone === "muted" ? "muted" : tone,
				children: urgencyLabel(result.urgency)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl",
				children: result.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: result.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-2",
				children: result.actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
				}, a))
			}),
			result.avoid.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-lg bg-surface-2 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Do not"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1 text-sm text-ink",
					children: result.avoid.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-medium",
				children: result.seek
			}),
			result.urgency === "emergency" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/emergency",
				className: "mt-4 inline-flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "alert",
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Open emergency steps"]
				})
			}) : null
		]
	});
}
function SymptomTree({ guide }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [nodeId, setNodeId] = (0, import_react.useState)(guide.startId);
	const [stack, setStack] = (0, import_react.useState)([]);
	const node = guide.nodes[nodeId];
	const progress = (0, import_react.useMemo)(() => {
		return Math.min(90, 18 + stack.length * 22);
	}, [stack.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 h-1 overflow-hidden rounded-full bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-sage transition-[width] duration-250",
				style: { width: `${progress}%` }
			})
		}),
		selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { result: selected }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "mt-4",
			onClick: () => setSelected(null),
			children: "Back to questions"
		})] }) : node ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-5 shadow-plate sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: ["Step ", stack.length + 1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl sm:text-3xl",
					children: node.question
				}),
				node.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: node.detail
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3",
					children: node.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("min-h-14 rounded-lg bg-paper px-4 py-3 text-left text-base font-medium shadow-plate", "transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-[0.98]"),
						onClick: () => {
							if (opt.result) {
								setSelected(opt.result);
								return;
							}
							if (opt.next) {
								setStack((s) => [...s, nodeId]);
								setNodeId(opt.next);
							}
						},
						children: [opt.label, opt.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-sm font-normal text-muted",
							children: [
								urgencyLabel(opt.result.urgency),
								" — ",
								opt.result.title
							]
						}) : null]
					}, opt.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [stack.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => {
							const prev = stack[stack.length - 1];
							setStack((s) => s.slice(0, -1));
							if (prev) setNodeId(prev);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/symptoms",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							children: "All symptoms"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							setNodeId(guide.startId);
							setStack([]);
							setSelected(null);
						},
						children: "Start over"
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This step is missing. Start over." }),
		guide.anatomy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anatomy, { kind: guide.anatomy })
		}) : null
	] });
}
function SymptomPage() {
	const { slug } = Route$2.useParams();
	const guide = getSymptom(slug);
	const [advancedNotes, setAdvancedNotes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadAdvanced({ data: { slug } }).then((r) => setAdvancedNotes(r.notes)).catch(() => {});
	}, [slug]);
	const [tier, setTier] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => setTier(r.tier));
	}, []);
	if (!guide) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Guide not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/symptoms",
			className: "mt-4 inline-block text-sage",
			children: "All symptoms"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "alert",
					children: "Evaluator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl sm:text-5xl",
					children: guide.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted",
					children: guide.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-medium text-alert",
					children: guide.redFlag
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: guide.image,
				alt: "",
				className: "h-64 w-full rounded-xl object-cover"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymptomTree, { guide }, guide.slug), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-plate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Disclaimer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: DISCLAIMER
				})]
			}), tier < 2 || advancedNotes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-plate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Emergency Desk notes"
				}), tier >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: advancedNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: n }, n))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"Deep-dive notes unlock with the $5 Emergency Desk plan.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-sage",
							children: "Membership plans"
						})
					]
				})]
			}) : null]
		})]
	})] });
}
//#endregion
export { SymptomPage as component };

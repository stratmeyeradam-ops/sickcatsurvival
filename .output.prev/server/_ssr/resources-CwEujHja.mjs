import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-CvHHevTe.mjs";
import { n as Textarea, t as Input } from "./input-C3fiiGqA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-CwEujHja.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var packs = {
	visit: {
		title: "Clinic visit packet",
		items: [
			"Carrier and familiar towel",
			"Clinic address and contact number",
			"Current medication labels or written list",
			"Previous visit notes and lab records",
			"Timeline of what changed",
			"Questions to ask and a place for the answers"
		]
	},
	handoff: {
		title: "Care handoff sheet",
		items: [
			"Feeding routine and where supplies live",
			"Medication instructions exactly as provided by the clinic",
			"Regular veterinarian and after-hours contact",
			"Carrier location and transport plan",
			"What to record during each visit",
			"Who to call if the routine changes"
		]
	},
	daily: {
		title: "Daily observation sheet",
		items: [
			"Food offered and what was eaten",
			"Water routine and noticeable changes",
			"Litter-box observations",
			"Activity and behavior compared with usual",
			"Medicines given as prescribed, including the time",
			"Questions or changes to share with the clinic"
		]
	}
};
function Resources() {
	const [kind, setKind] = (0, import_react.useState)("visit"), [name, setName] = (0, import_react.useState)(""), [contact, setContact] = (0, import_react.useState)(""), [vet, setVet] = (0, import_react.useState)(""), [emergency, setEmergency] = (0, import_react.useState)(""), [notes, setNotes] = (0, import_react.useState)("");
	const pack = packs[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-sage",
						children: "Free planning tools"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl",
						children: "Be ready for the next visit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Prepare a clinic packet, a sitter handoff or a daily observation sheet. Fill it in and print, or save it as a PDF from the print dialog. Your entries stay in this page and are not sent to the server."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: Object.entries(packs).map(([key, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: kind === key ? "primary" : "outline",
							onClick: () => setKind(key),
							children: p.title
						}, key))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "print-packet mt-8 rounded-xl bg-surface p-6 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: pack.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Sick Cat Survival · Household notes for your veterinary team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							{
								label: "Cat name",
								value: name,
								set: setName
							},
							{
								label: "Guardian contact",
								value: contact,
								set: setContact
							},
							{
								label: "Regular clinic",
								value: vet,
								set: setVet
							},
							{
								label: "After-hours clinic",
								value: emergency,
								set: setEmergency
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm",
							children: [f.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: f.value,
								onChange: (e) => f.set(e.target.value),
								placeholder: "Write here"
							})]
						}, f.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-xl",
						children: "What to bring or record"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: pack.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								"aria-label": item,
								className: "mt-1 size-4 shrink-0 accent-sage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 grid gap-2 text-sm",
						children: [
							"Observations, prescribed instructions and questions",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "no-print",
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								rows: 7
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "print-only whitespace-pre-wrap",
								children: notes || "________________________________________"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs text-muted",
						children: "Record what you observe and the instructions your clinic provides. This sheet does not diagnose or prescribe treatment."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-6 flex flex-wrap items-center gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => window.print(),
					children: "Print / save PDF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/toolkit",
					className: "text-sage underline",
					children: "Keep ongoing records in the member toolkit"
				})]
			})
		]
	});
}
//#endregion
export { Resources as component };

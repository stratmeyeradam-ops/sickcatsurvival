import { o as __toESM } from "../_runtime.mjs";
import { E as _enum, F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-CvHHevTe.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as PageHero, t as LockNote } from "./page-hero-DyvGD1Dy.mjs";
import { t as Input } from "./input-C3fiiGqA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/toolkit-CyATllP5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var listHealthLogs = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("f6af6ddeb445dabfa6ba2e06cccf34503c5f875356f3a19e0124b1543117a8a7"));
var addInput = object({
	catName: string().trim().min(1).max(40),
	kind: _enum([
		"weight",
		"med",
		"symptom",
		"appetite",
		"water"
	]),
	value: string().trim().min(1).max(80),
	note: string().max(240).optional()
});
var addHealthLog = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => addInput.parse(d)).handler(createSsrRpc("ffafa193ccc3c0b0ad4f18a91fa7e97d784d86edce31cae594e2463841fdf758"));
var exportHealthLogs = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("fc289cd6bf284a4bfc1246c22dbb9720c4c0a3dae3cb773f7ac21e385b5ece99"));
function ledgerCsv(rows) {
	const cell = (value) => {
		let text = String(value ?? "");
		if (/^[=+@\-]/.test(text)) text = "'" + text;
		return "\"" + text.replaceAll("\"", "\"\"") + "\"";
	};
	return "﻿" + [[
		"cat",
		"kind",
		"value",
		"note",
		"logged_at"
	], ...rows.map((r) => [
		r.cat_name,
		r.kind,
		r.value,
		r.note,
		r.logged_at
	])].map((row) => row.map(cell).join(",")).join("\r\n");
}
function ToolkitPage() {
	const [tier, setTier] = (0, import_react.useState)(0);
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [catName, setCatName] = (0, import_react.useState)("My cat");
	const [kind, setKind] = (0, import_react.useState)("weight");
	const [value, setValue] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		getOptionalTier().then((r) => setTier(r.tier)).catch((e) => setError(e.message));
	}, []);
	(0, import_react.useEffect)(() => {
		if (tier < 3) return;
		listHealthLogs().then(setLogs).catch((e) => setError(e instanceof Error ? e.message : "Could not load"));
	}, [tier]);
	const download = async () => {
		try {
			const rows = await exportHealthLogs();
			const blob = new Blob([ledgerCsv(rows)], { type: "text/csv;charset=utf-8" });
			const url = URL.createObjectURL(blob), a = document.createElement("a");
			a.href = url;
			a.download = "sick-cat-survival-ledger.csv";
			a.click();
			setTimeout(() => URL.revokeObjectURL(url), 1e3);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Could not export your records");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Archive toolkit",
		title: "Health-tracking ledger",
		lede: "Weight, medicines, appetite, water. Download a CSV for the clinic. This is a notebook, not a monitor.",
		image: "/products/notebook.jpg",
		imageAlt: "Clothbound health ledger"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/resources",
				className: "text-sage underline",
				children: "Print a clinic visit packet or care handoff sheet"
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-4 text-alert",
				children: error
			}) : null,
			tier < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockNote, { need: "Archive ($10/mo with Stripe)" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3 rounded-xl bg-surface p-5 shadow-plate",
					onSubmit: (e) => {
						e.preventDefault();
						setError(null);
						addHealthLog({ data: {
							catName,
							kind,
							value,
							note
						} }).then(() => listHealthLogs()).then((rows) => {
							setLogs(rows);
							setValue("");
							setNote("");
						}).catch((err) => setError(err instanceof Error ? err.message : "Could not save"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: catName,
								onChange: (e) => setCatName(e.target.value),
								"aria-label": "Cat name",
								placeholder: "Cat name",
								required: true,
								maxLength: 40
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-11 rounded-md bg-paper px-3 shadow-plate",
								"aria-label": "Record type",
								value: kind,
								onChange: (e) => setKind(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "weight",
										children: "Weight"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "med",
										children: "Medicine"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "appetite",
										children: "Appetite"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "water",
										children: "Water"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "symptom",
										children: "Symptom note"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value,
							onChange: (e) => setValue(e.target.value),
							"aria-label": "Observation",
							placeholder: "Value (e.g. 4.2 kg)",
							required: true,
							maxLength: 80
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: note,
							onChange: (e) => setNote(e.target.value),
							"aria-label": "Note",
							placeholder: "Optional note",
							maxLength: 240
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Log"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => void download(),
								children: "Download CSV"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 font-display text-2xl",
					children: "Recent observations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Your latest 80 records appear below. CSV export includes up to 10,000 records."
				}),
				logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "Start with one observation. Your records stay on your account."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2",
					children: logs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg bg-surface px-4 py-3 text-sm shadow-plate",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: l.kind
							}),
							" · ",
							l.value,
							" · ",
							l.cat_name,
							l.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" — ", l.note]
							}) : null
						]
					}, l.id))
				})
			] })
		]
	})] });
}
//#endregion
export { ToolkitPage as component };

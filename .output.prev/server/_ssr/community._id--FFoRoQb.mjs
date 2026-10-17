import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Route$10, s as Button } from "./router-CvHHevTe.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as Textarea } from "./input-C3fiiGqA.mjs";
import { r as postReply, t as getThread } from "./forum-B9olyVFK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community._id--FFoRoQb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThreadPage() {
	const { id } = Route$10.useParams(), numeric = Number(id);
	const [thread, setThread] = (0, import_react.useState)(null), [replies, setReplies] = (0, import_react.useState)([]), [tier, setTier] = (0, import_react.useState)(0), [ready, setReady] = (0, import_react.useState)(false), [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let active = true;
		setReady(false);
		(async () => {
			if (!Number.isInteger(numeric) || numeric < 1) return;
			const [data, member] = await Promise.all([getThread({ data: { id: numeric } }), getOptionalTier()]);
			if (active) {
				setThread(data.thread);
				setReplies(data.replies);
				setTier(member.tier);
			}
		})().catch((e) => {
			if (active) setError(e.message);
		}).finally(() => {
			if (active) setReady(true);
		});
		return () => {
			active = false;
		};
	}, [numeric]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: "Loading thread…"
	});
	if (!thread) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Thread not found"
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/community",
				className: "mt-4 inline-block text-sage",
				children: "Back to the board"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/community",
				className: "text-sage",
				children: "Back to the board"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-xs uppercase tracking-widest text-muted",
				children: thread.category_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: thread.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: thread.author_name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 whitespace-pre-wrap text-lg",
				children: thread.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: replies.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-plate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: r.author_name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap",
						children: r.body
					})]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl bg-surface p-5 shadow-plate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Reply"
				}), tier >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 space-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						const form = e.currentTarget;
						const body = String(new FormData(form).get("body") || "").trim();
						setBusy(true);
						setError(null);
						postReply({ data: {
							threadId: numeric,
							body
						} }).then(() => getThread({ data: { id: numeric } })).then((data) => {
							setReplies(data.replies);
							form.reset();
						}).catch((e) => setError(e.message)).finally(() => setBusy(false));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 text-sm",
							children: ["Your reply", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								name: "body",
								minLength: 8,
								maxLength: 4e3,
								required: true
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "Posting…" : "Reply"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted",
					children: [
						"Posting and replies are included with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-sage underline",
							children: "Emergency Desk"
						}),
						"."
					]
				})]
			})
		]
	});
}
//#endregion
export { ThreadPage as component };

import { o as __toESM } from "../_runtime.mjs";
import { v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Button } from "./router-CvHHevTe.mjs";
import { r as getOptionalTier } from "./billing-CUfcP8dQ.mjs";
import { n as PageHero } from "./page-hero-DyvGD1Dy.mjs";
import { n as Textarea, t as Input } from "./input-C3fiiGqA.mjs";
import { i as postThread, n as listBoard } from "./forum-B9olyVFK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community.index-CmtiAMzQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CommunityPage() {
	const [categories, setCategories] = (0, import_react.useState)([]);
	const [threads, setThreads] = (0, import_react.useState)([]);
	const [tier, setTier] = (0, import_react.useState)(0);
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [categoryId, setCategoryId] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	async function load() {
		const board = await listBoard();
		setCategories(board.categories);
		setThreads(board.threads);
		if (board.categories[0] && categoryId === null) setCategoryId(board.categories[0].id);
		const me = await getOptionalTier();
		setTier(me.tier);
		setSignedIn(me.signedIn);
	}
	(0, import_react.useEffect)(() => {
		load().catch((e) => setError(e instanceof Error ? e.message : "Could not load the board"));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Peer board",
		title: "Community message board",
		lede: "Experiences, logistics, and company. Not diagnoses. Posting and replies require Emergency Desk ($5/mo).",
		image: "/images/tuxedo.jpg",
		imageAlt: "A tuxedo cat looking toward the camera"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "space-y-3",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-4 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: c.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs tabular-nums text-muted",
						children: [c.thread_count, " threads"]
					})
				]
			}, c.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-5 shadow-plate",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "New thread"
			}), tier < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Upgrade to Emergency Desk to post.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "text-sage",
						children: "Membership plans"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-sage",
						children: "Sign in"
					}),
					" ",
					"and subscribe to post. Anyone may read."
				] })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 space-y-3",
				onSubmit: (e) => {
					e.preventDefault();
					setError(null);
					if (!categoryId) return;
					postThread({ data: {
						categoryId,
						title,
						body
					} }).then((r) => {
						setTitle("");
						setBody("");
						load().catch((e) => setError(e instanceof Error ? e.message : "Could not load the board"));
						return r.id;
					}).catch((err) => {
						setError(err instanceof Error ? err.message : "Could not post");
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm",
						children: ["Room", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 h-11 w-full rounded-md bg-paper px-3 shadow-plate",
							value: categoryId ?? "",
							onChange: (e) => setCategoryId(Number(e.target.value)),
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.name
							}, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Title",
						value: title,
						onChange: (e) => setTitle(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						placeholder: "What you observed, what the veterinarian said, what you are organizing at home.",
						value: body,
						onChange: (e) => setBody(e.target.value),
						required: true
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-alert",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Post"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: threads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/community/$id",
				params: { id: String(t.id) },
				className: "block rounded-xl bg-surface p-5 shadow-plate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: [t.category_name, t.pinned ? " · Pinned" : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl",
						children: t.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 line-clamp-2 text-sm text-muted",
						children: t.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: [
							t.author_name,
							" · ",
							t.reply_count,
							" replies"
						]
					})
				]
			}, t.id))
		})] })]
	})] });
}
//#endregion
export { CommunityPage as component };

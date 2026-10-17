import { o as __toESM } from "../_runtime.mjs";
import { d as useRouterState, v as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as RedirectToSignIn, l as useCurrentUserState, s as Button } from "./router-CvHHevTe.mjs";
import { t as confirmCheckout } from "./billing-CUfcP8dQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-BuMuReR7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Success() {
	const { user, isPending } = useCurrentUserState();
	const search = useRouterState({ select: (s) => s.location.searchStr });
	const id = new URLSearchParams(search).get("session_id");
	const [state, setState] = (0, import_react.useState)("Checking your purchase…"), [error, setError] = (0, import_react.useState)(null), [attempt, setAttempt] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		let active = true;
		setError(null);
		(async () => {
			if (!id) throw Error("No purchase was supplied. Check your account for your membership and orders.");
			const result = await confirmCheckout({ data: { sessionId: id } });
			if (active) setState(result.kind === "subscription" ? "Your membership is ready" : "Your order is being prepared");
		})().catch((e) => {
			if (active) setError(e.message);
		});
		return () => {
			active = false;
		};
	}, [
		user?.id,
		id,
		attempt
	]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-xl px-4 py-16",
		children: "Loading…"
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: error ? "Purchase status" : state
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				role: "alert",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: error }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: () => setAttempt((a) => a + 1),
					children: "Check again"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						className: "text-sage underline",
						children: "Open your account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/manuals",
						className: "text-sage underline",
						children: "Read care manuals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/toolkit",
						className: "text-sage underline",
						children: "Open health toolkit"
					})
				]
			})
		]
	});
}
//#endregion
export { Success as component };

import { o as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./router-CvHHevTe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-C3fiiGqA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = (0, import_react.forwardRef)(function Input({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref,
		className: cn("h-11 w-full rounded-md bg-surface px-3.5 text-base text-ink shadow-plate placeholder:text-muted", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage", className),
		...props
	});
});
var Textarea = (0, import_react.forwardRef)(function Textarea({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		ref,
		className: cn("min-h-32 w-full rounded-lg bg-surface px-3.5 py-3 text-base text-ink shadow-plate placeholder:text-muted", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage", className),
		...props
	});
});
//#endregion
export { Textarea as n, Input as t };

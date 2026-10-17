import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./router-CvHHevTe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DybxT2wK.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ children, tone = "ink", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", {
			ink: "bg-ink text-paper",
			sage: "bg-sage text-sage-fg",
			alert: "bg-alert text-alert-fg",
			muted: "bg-surface-2 text-muted"
		}[tone], className),
		children
	});
}
//#endregion
export { Badge as t };

import { o as getRequest } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/isolation.server-D2f2VJve.js
function assertSameSiteRequest() {
	const site = getRequest()?.headers.get("sec-fetch-site");
	if (site && site !== "same-origin" && site !== "none") {
		const error = /* @__PURE__ */ new Error("Cross-origin request rejected");
		Object.assign(error, { status: 403 });
		throw error;
	}
}
//#endregion
export { assertSameSiteRequest };

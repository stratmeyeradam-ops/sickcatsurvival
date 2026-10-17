import { n as createMiddleware } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-CmeaUiny.js
var optionalSession = createMiddleware({ type: "function" }).server(async ({ next }) => {
	const { getSessionUser } = await import("./verify.server-DdKOjBYO.mjs");
	const user = await getSessionUser();
	return next({ context: {
		userId: user?.id ?? null,
		email: user?.email ?? null
	} });
});
//#endregion
export { optionalSession as t };

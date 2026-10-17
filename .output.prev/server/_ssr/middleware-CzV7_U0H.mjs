import { n as createMiddleware } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/middleware-CzV7_U0H.js
var authMiddleware = createMiddleware({ type: "function" }).server(async ({ next }) => {
	const { getSessionUser, UnauthorizedError } = await import("./verify.server-DdKOjBYO.mjs");
	const { assertSameSiteRequest } = await import("./isolation.server-D2f2VJve.mjs");
	assertSameSiteRequest();
	const user = await getSessionUser();
	if (!user) throw new UnauthorizedError();
	return next({ context: {
		userId: user.id,
		email: user.email
	} });
});
//#endregion
export { authMiddleware as t };

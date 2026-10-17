import { t as auth } from "./server-B28vaBKZ.mjs";
import { o as getRequest } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify.server-DdKOjBYO.js
var UnauthorizedError = class extends Error {
	status = 401;
	constructor() {
		super("Unauthorized");
	}
};
async function getSessionUser() {
	const request = getRequest();
	if (!request) return null;
	const session = await auth.api.getSession({ headers: request.headers });
	return session?.user ? {
		id: session.user.id,
		email: session.user.email
	} : null;
}
//#endregion
export { UnauthorizedError, getSessionUser };

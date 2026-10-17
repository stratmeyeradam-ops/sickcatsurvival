import { F as object, P as number, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CzV7_U0H.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forum-B9olyVFK.js
var listBoard = createServerFn({ method: "GET" }).handler(createSsrRpc("e2781bf39fd12f02f428d46e2ad84dfe4fca6a4004534d7cc3b0600ba1fe5bba"));
var getThread = createServerFn({ method: "GET" }).validator((d) => object({ id: number().int().positive() }).parse(d)).handler(createSsrRpc("a286a51eb2aea9037b2a9afbb01b35ce79ee9872139abb64686d9c9e32683ede"));
var postThreadInput = object({
	categoryId: number().int().positive(),
	title: string().trim().min(8).max(140),
	body: string().trim().min(20).max(4e3)
});
var postThread = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => postThreadInput.parse(d)).handler(createSsrRpc("c839ada98111540a172929003ca53f998c7908dfbb2dc28c05e1c8a942544d22"));
var postReplyInput = object({
	threadId: number().int().positive(),
	body: string().trim().min(8).max(4e3)
});
var postReply = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => postReplyInput.parse(d)).handler(createSsrRpc("8ab5910a0bb068e4901646603de8ba80b53fc3c03c02f0d89030a949b392be39"));
//#endregion
export { postThread as i, listBoard as n, postReply as r, getThread as t };

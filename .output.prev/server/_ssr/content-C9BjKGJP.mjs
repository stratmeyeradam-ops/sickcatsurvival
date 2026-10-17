import { F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as optionalSession } from "./session-CmeaUiny.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B2Izd0c7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-C9BjKGJP.js
var slug = (d) => object({ slug: string() }).parse(d);
var loadManual = createServerFn({ method: "GET" }).middleware([optionalSession]).validator(slug).handler(createSsrRpc("5a91778784009f03f811e4b6e6766a2ecf8bf0cd91d8b195ae7cfdf33fe9f0dd"));
var loadWellness = createServerFn({ method: "GET" }).middleware([optionalSession]).handler(createSsrRpc("f942b457fad4ec6c1c53fc4f56e5c31dd1a5d14e4fe982ed733c25527fc8b3d7"));
var loadAdvanced = createServerFn({ method: "GET" }).middleware([optionalSession]).validator(slug).handler(createSsrRpc("f500525350a6d32eed3993e28138bfef8524c6b0cd35d078cea3bcaa7792d743"));
var dailyNote = createServerFn({ method: "GET" }).handler(createSsrRpc("36e3162110e9755874c4b0ac8913341958fd7fe4c91de6087983002cddf7e56e"));
//#endregion
export { loadWellness as i, loadAdvanced as n, loadManual as r, dailyNote as t };

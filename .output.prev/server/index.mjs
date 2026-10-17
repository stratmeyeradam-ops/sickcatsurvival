globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"73f8-ugmIgcQT2w/i4eUHcmfdN64a9N0\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 29688,
		"path": "../public/og.jpg"
	},
	"/assets/account-D_3MJn3R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c45-IeMcdKORRSq5FTnKlhq+qZtuipg\"",
		"mtime": "2026-10-17T03:42:48.284Z",
		"size": 3141,
		"path": "../public/assets/account-D_3MJn3R.js"
	},
	"/assets/archives-BHPi3xH3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"535-19OdsmdgcCSFf1xo0l88HS6P5cI\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1333,
		"path": "../public/assets/archives-BHPi3xH3.js"
	},
	"/assets/billing-6wjEMxcb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ef-/YliD6thchQbgOeD2MBCeYCnZrs\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 751,
		"path": "../public/assets/billing-6wjEMxcb.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"19a-zlLgEYnrwuMg6W0itCKH1dbmECo\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 410,
		"path": "../public/favicon.svg"
	},
	"/assets/badge-CLEd-WCA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19e-meXiJWQYVhPIj7/rSG9Ndc6W024\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 414,
		"path": "../public/assets/badge-CLEd-WCA.js"
	},
	"/assets/checkout-C1alrstv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b70-q9w9ol/+vCL2lSJBVaxWAkMNwe0\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2928,
		"path": "../public/assets/checkout-C1alrstv.js"
	},
	"/assets/community._id-BuIa7fXa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b78-EsK8CpEMkcvxSQYzobuV7CAnhYk\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2936,
		"path": "../public/assets/community._id-BuIa7fXa.js"
	},
	"/assets/client-BUpdtAsF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71c3-72LUQOlgy/zxaD6BAiADmRm4IHE\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 29123,
		"path": "../public/assets/client-BUpdtAsF.js"
	},
	"/assets/community.index-B56N8M3T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eb0-ra/9M/NnrSjqcEUSg4B6Daft2do\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 3760,
		"path": "../public/assets/community.index-B56N8M3T.js"
	},
	"/assets/content-TKTdUPNq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22e-peQzemaYAYnNjtG94FuFyWIqbno\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 558,
		"path": "../public/assets/content-TKTdUPNq.js"
	},
	"/assets/createLucideIcon-C27-zT2Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c3-TyJ3opV0fnmAAoezm9pV8VXLPeY\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1219,
		"path": "../public/assets/createLucideIcon-C27-zT2Y.js"
	},
	"/assets/emergencies-kNF3TlgA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17ca-fSwTE8W46xI7+8uI/S0Yw7jhwwc\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 6090,
		"path": "../public/assets/emergencies-kNF3TlgA.js"
	},
	"/assets/emergency._slug-DUOOTO-J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ce-NQe5KnA+4X8n2JUG0pp6e4vEhJA\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2510,
		"path": "../public/assets/emergency._slug-DUOOTO-J.js"
	},
	"/assets/emergency.index-CQ6FrU-M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51b-bdlBy6aeI0ho/HELXjiU0hijm78\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1307,
		"path": "../public/assets/emergency.index-CQ6FrU-M.js"
	},
	"/assets/forum-CQCzCZLb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"252-QP5ViPW20FfIuCL41XPj/TO1A7c\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 594,
		"path": "../public/assets/forum-CQCzCZLb.js"
	},
	"/assets/index-BP-xwVfn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"480d3-wMKW6VRcpyS2BjrbHSypDjp4QaI\"",
		"mtime": "2026-10-17T03:42:48.280Z",
		"size": 295123,
		"path": "../public/assets/index-BP-xwVfn.js"
	},
	"/assets/input-e6Qj7NzQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d4-p1Jw1HPMjABawh1L9jDC2Huk70k\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 724,
		"path": "../public/assets/input-e6Qj7NzQ.js"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/legal-B4MHqVaz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97a-689l6zXSZMyH9lVVyU3+q/w/MsM\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2426,
		"path": "../public/assets/legal-B4MHqVaz.js"
	},
	"/assets/link-CgxWlP7m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"403b-L1SmXuAwYHWwCXn53w9G3aosEW4\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 16443,
		"path": "../public/assets/link-CgxWlP7m.js"
	},
	"/assets/login-BI_xb0GC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af7-P3Bit4TPVz884By5rAJJWP0aKv8\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2807,
		"path": "../public/assets/login-BI_xb0GC.js"
	},
	"/assets/manuals._slug-C0OboqU_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"700-xlkFauJrFJjWlTd/o0PxoXIdwIA\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1792,
		"path": "../public/assets/manuals._slug-C0OboqU_.js"
	},
	"/assets/manuals.index-BNpvOtcl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b34-zr4LaBOyvYLALvEUnZwW8hP1HAE\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2868,
		"path": "../public/assets/manuals.index-BNpvOtcl.js"
	},
	"/assets/page-hero-C05-1A-B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"560-nI8vf8O1INLRzJ+QPO0+K0UCMgY\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1376,
		"path": "../public/assets/page-hero-C05-1A-B.js"
	},
	"/assets/preload-helper-CErnP2Jb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1478-zBMO5MYOumDIkC385gzDmN9bjX4\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 5240,
		"path": "../public/assets/preload-helper-CErnP2Jb.js"
	},
	"/assets/pricing-CZoVk94b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d1-8oW15PIIDu2lAr0Je89+DMJm0m0\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 977,
		"path": "../public/assets/pricing-CZoVk94b.js"
	},
	"/assets/products-BvESZ0Zn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83b-WvTX+7omBxirrv33/jPAZQteZNA\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2107,
		"path": "../public/assets/products-BvESZ0Zn.js"
	},
	"/assets/redirect-DtIAAt0y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1-KhpEIx1LNSnb7dNYxiNI58wV9MY\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 481,
		"path": "../public/assets/redirect-DtIAAt0y.js"
	},
	"/assets/resources-DDW7HKSf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f42-P8vRiYdRYRmP0jzoz1Cqff7DMwU\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 3906,
		"path": "../public/assets/resources-DDW7HKSf.js"
	},
	"/assets/routes-DJSawtik.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e48-btwM2L8qWw9s9cTuo+sKn3qI5+E\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 7752,
		"path": "../public/assets/routes-DJSawtik.js"
	},
	"/assets/shop._slug-BZGF6uO2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82d-t4CShihPs1RyyrBvYL69ALaYci8\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2093,
		"path": "../public/assets/shop._slug-BZGF6uO2.js"
	},
	"/assets/session-C7pfqCUQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128b-myo2JybUlfx2Je9zaqRVCEJDNRI\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 4747,
		"path": "../public/assets/session-C7pfqCUQ.js"
	},
	"/assets/shop.index-s2tJkHO2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"408-g3IhCpXzaogfr2j/DroJEFlwJVI\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1032,
		"path": "../public/assets/shop.index-s2tJkHO2.js"
	},
	"/assets/styles-DEv5q9Nz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"6b8a-PN4KLEgTOjufou4RvPQnUYLuA8k\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 27530,
		"path": "../public/assets/styles-DEv5q9Nz.css"
	},
	"/assets/success-CClv4Tn8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"678-81UYC+I+e4LpjNRv2CHo21C93kE\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1656,
		"path": "../public/assets/success-CClv4Tn8.js"
	},
	"/assets/symptoms-CmqkdqS3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7eb7-HS/5Y2hhYbzqaqGZYUJhyt7nQpA\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 32439,
		"path": "../public/assets/symptoms-CmqkdqS3.js"
	},
	"/assets/symptoms._slug-B3ur314Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d22-iDrDeFYcbbVJGSbmqUcBsYY9+IQ\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 11554,
		"path": "../public/assets/symptoms._slug-B3ur314Z.js"
	},
	"/assets/symptoms.index-CsNTcUWv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"438-zH8b6UnbHZiUzTWhS2ErZZdGzG0\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 1080,
		"path": "../public/assets/symptoms.index-CsNTcUWv.js"
	},
	"/assets/toolkit-CMI_-d5j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1164-hXvCwWUWjV+1wMbhVvLtPhiyqIs\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 4452,
		"path": "../public/assets/toolkit-CMI_-d5j.js"
	},
	"/assets/useMatch-DqZFYCQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"243-Qw56rY9McEcS4KViJViuCl+1bgI\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 579,
		"path": "../public/assets/useMatch-DqZFYCQW.js"
	},
	"/assets/useRouterState-CqhsOGOo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-XpNN3miIFwsgzNMHxu6jGA026yE\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 196,
		"path": "../public/assets/useRouterState-CqhsOGOo.js"
	},
	"/assets/useStore-DgeDu-4H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1472-+32AcX4nkgJpbI4HKTSVorLz5Wg\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 5234,
		"path": "../public/assets/useStore-DgeDu-4H.js"
	},
	"/assets/utils-wgmNTzor.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8824-6ONRjB3gM9ZrtIcomOy2D8RE0JU\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 34852,
		"path": "../public/assets/utils-wgmNTzor.js"
	},
	"/assets/wellness-D9cU5dNA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"909-DEo43Zlt/pPJmpAAJf0z4lp3sgo\"",
		"mtime": "2026-10-17T03:42:48.285Z",
		"size": 2313,
		"path": "../public/assets/wellness-D9cU5dNA.js"
	},
	"/images/avatar-a.jpg": {
		"type": "image/jpeg",
		"etag": "\"10284-AaMqOrE5uAvc0YyQgyWtZ1aH9q8\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 66180,
		"path": "../public/images/avatar-a.jpg"
	},
	"/images/archives.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d17-uQNLdtz+ZQ6LdBtsbiC8zTIkoYQ\"",
		"mtime": "2026-10-17T03:42:49.298Z",
		"size": 93463,
		"path": "../public/images/archives.jpg"
	},
	"/images/avatar-b.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf69-rBkQcMYNV4LSuI4ByefVLGanKIs\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 49001,
		"path": "../public/images/avatar-b.jpg"
	},
	"/images/avatar-c.jpg": {
		"type": "image/jpeg",
		"etag": "\"98c8-PG46dCx4lEOT4u9DTrDo3lOYdEs\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 39112,
		"path": "../public/images/avatar-c.jpg"
	},
	"/images/avatar-d.jpg": {
		"type": "image/jpeg",
		"etag": "\"885b-JtBmharW1IoUWxl0N/az/fUN8Dc\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 34907,
		"path": "../public/images/avatar-d.jpg"
	},
	"/images/close-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"2628e-5lL1hvLVm2tVwhPSr/cDs90o0r4\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 156302,
		"path": "../public/images/close-orange.jpg"
	},
	"/images/close-tabby.jpg": {
		"type": "image/jpeg",
		"etag": "\"43eba-86Rx/+uCOMIqnC91hijKN2fSl9g\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 278202,
		"path": "../public/images/close-tabby.jpg"
	},
	"/images/frame-gray.jpg": {
		"type": "image/jpeg",
		"etag": "\"55c82-zey3A/zgO16B+8+jJ8lBnRX8aOA\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 351362,
		"path": "../public/images/frame-gray.jpg"
	},
	"/images/frame-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"35a30-l/6+s/N/gry0NhJzEBcbifE9YYo\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 219696,
		"path": "../public/images/frame-orange.jpg"
	},
	"/images/frame-tabby.jpg": {
		"type": "image/jpeg",
		"etag": "\"4cfbd-vqoo0bmeV+gkKZ9cEb/IN4BqVo8\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 315325,
		"path": "../public/images/frame-tabby.jpg"
	},
	"/images/hero-tabby.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b808-AgqcyLZ56BVlNTf9slnCDgeWnDo\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 243720,
		"path": "../public/images/hero-tabby.jpg"
	},
	"/images/hero-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"43214-358ujRVS3Yof9MbvEKLXt+oTMNw\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 274964,
		"path": "../public/images/hero-wide.jpg"
	},
	"/images/rest-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ee2e-VjtkoNoN1LXjpiPho3BmjS4+To4\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 454190,
		"path": "../public/images/rest-orange.jpg"
	},
	"/images/sit-brown.jpg": {
		"type": "image/jpeg",
		"etag": "\"3749b-G5WYtAlO+onqL5xUCh2jnV4U82g\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 226459,
		"path": "../public/images/sit-brown.jpg"
	},
	"/images/tuxedo.jpg": {
		"type": "image/jpeg",
		"etag": "\"22d87-oTkxa66gIAn4BrQHqvbG31c1Esk\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 142727,
		"path": "../public/images/tuxedo.jpg"
	},
	"/images/wellness-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d504-NaboPIoRXlivjYso7Yp9L/0ObeE\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 185604,
		"path": "../public/images/wellness-wide.jpg"
	},
	"/images/window-kit.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c699-mdD7A5d3mVJchRXSxN9R/Ft3xIg\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 116377,
		"path": "../public/images/window-kit.jpg"
	},
	"/products/bandana.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b264-IfJ4HcJN2qHFe54HE1v2OhiNzFg\"",
		"mtime": "2026-10-17T03:42:49.299Z",
		"size": 176740,
		"path": "../public/products/bandana.jpg"
	},
	"/products/blanket.jpg": {
		"type": "image/jpeg",
		"etag": "\"26a51-xtXY7AbvyC8CKV7kEkpt1ZZy4w4\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 158289,
		"path": "../public/products/blanket.jpg"
	},
	"/products/bowl.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c946-P2bJzFMDcMj0J1bt/8IstVDvgpA\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 182598,
		"path": "../public/products/bowl.jpg"
	},
	"/products/card.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c481-56KxpW0mf8gW/IZHmZE+JZDwYV0\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 181377,
		"path": "../public/products/card.jpg"
	},
	"/products/collar.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ec89-sqT9m0SXZJo9l6yd0WVLfxIDYnE\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 191625,
		"path": "../public/products/collar.jpg"
	},
	"/products/hoodie.jpg": {
		"type": "image/jpeg",
		"etag": "\"25930-3nfX82hxK/BnQT/TYyrW6OpXcP4\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 153904,
		"path": "../public/products/hoodie.jpg"
	},
	"/products/notebook.jpg": {
		"type": "image/jpeg",
		"etag": "\"27775-Q33wZRo1qFMJLZKNE2InIEvSTmI\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 161653,
		"path": "../public/products/notebook.jpg"
	},
	"/products/pin.jpg": {
		"type": "image/jpeg",
		"etag": "\"2dfe6-3eW6zcdzo6vQ+QT08PpdhOzqalc\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 188390,
		"path": "../public/products/pin.jpg"
	},
	"/products/tee.jpg": {
		"type": "image/jpeg",
		"etag": "\"26002-yS71VclwJTLo87Kbj4yNTcEkAOA\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 155650,
		"path": "../public/products/tee.jpg"
	},
	"/products/tote.jpg": {
		"type": "image/jpeg",
		"etag": "\"287eb-z8QEAdB0p2gxj3k+EYp9G8+I/V8\"",
		"mtime": "2026-10-17T03:42:49.301Z",
		"size": 165867,
		"path": "../public/products/tote.jpg"
	},
	"/images/field-tabby.jpg": {
		"type": "image/jpeg",
		"etag": "\"87b6a-EoR41wyVrdA6V+r77GyAn0rJ8oU\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 555882,
		"path": "../public/images/field-tabby.jpg"
	},
	"/images/portrait-gray.jpg": {
		"type": "image/jpeg",
		"etag": "\"da700-qC6vfpT0856tMd2H7iJqjTK9yAA\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 894720,
		"path": "../public/images/portrait-gray.jpg"
	},
	"/images/hero-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"155c1d-vuu6v6Pt6DiteOve2hdcY24Yn44\"",
		"mtime": "2026-10-17T03:42:49.300Z",
		"size": 1399837,
		"path": "../public/images/hero-orange.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Cmmdza = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Cmmdza
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };

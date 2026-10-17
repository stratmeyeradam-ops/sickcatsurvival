import { r as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-WO7Pgea8.js
var db_WO7Pgea8_exports = /* @__PURE__ */ __exportAll({
	n: () => getPglite,
	r: () => getSql,
	t: () => db_exports
});
var _0001_auth_default = "-- Email accounts and sessions.\ncreate table if not exists \"user\" (\n  \"id\" text not null primary key,\n  \"name\" text not null,\n  \"email\" text not null unique,\n  \"emailVerified\" boolean not null,\n  \"image\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate table if not exists \"session\" (\n  \"id\" text not null primary key,\n  \"expiresAt\" timestamptz not null,\n  \"token\" text not null unique,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null,\n  \"ipAddress\" text,\n  \"userAgent\" text,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade\n);\n\ncreate table if not exists \"account\" (\n  \"id\" text not null primary key,\n  \"accountId\" text not null,\n  \"providerId\" text not null,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade,\n  \"accessToken\" text,\n  \"refreshToken\" text,\n  \"idToken\" text,\n  \"accessTokenExpiresAt\" timestamptz,\n  \"refreshTokenExpiresAt\" timestamptz,\n  \"scope\" text,\n  \"password\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null\n);\n\ncreate table if not exists \"verification\" (\n  \"id\" text not null primary key,\n  \"identifier\" text not null,\n  \"value\" text not null,\n  \"expiresAt\" timestamptz not null,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate index if not exists \"session_userId_idx\" on \"session\" (\"userId\");\ncreate index if not exists \"account_userId_idx\" on \"account\" (\"userId\");\ncreate index if not exists \"verification_identifier_idx\" on \"verification\" (\"identifier\");\n";
var _0002_schema_default = "-- Application records and community board.\ncreate table if not exists forum_categories (\n  id serial primary key,\n  slug text not null unique,\n  name text not null,\n  description text not null,\n  sort_order integer not null default 0\n);\n\ncreate table if not exists forum_threads (\n  id serial primary key,\n  category_id integer not null references forum_categories(id),\n  user_id text not null,\n  author_name text not null,\n  title text not null,\n  body text not null,\n  pinned boolean not null default false,\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists forum_replies (\n  id serial primary key,\n  thread_id integer not null references forum_threads(id),\n  user_id text not null,\n  author_name text not null,\n  body text not null,\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists health_logs (\n  id serial primary key,\n  user_id text not null,\n  cat_name text not null default 'My cat',\n  kind text not null,\n  value text not null,\n  note text,\n  logged_at timestamptz not null default now()\n);\n\ncreate index if not exists health_logs_user_idx on health_logs (user_id, logged_at desc);\ncreate index if not exists forum_threads_cat_idx on forum_threads (category_id, created_at desc);\ncreate index if not exists forum_replies_thread_idx on forum_replies (thread_id, created_at);\n\ninsert into forum_categories (slug, name, description, sort_order)\nvalues\n  ('recovery-stories', 'Recovery stories', 'Share what helped after a scare — not a diagnosis, just companionship.', 1),\n  ('home-care', 'Home care logistics', 'Carriers, clinics, after-hours pharmacies, feeding routines.', 2),\n  ('senior-cats', 'Senior cats', 'Mobility, appetite, and the slow changes of later years.', 3),\n  ('new-guardians', 'New guardians', 'First-year questions from people who just brought a cat home.', 4)\non conflict (slug) do nothing;\n\ninsert into forum_threads (category_id, user_id, author_name, title, body, pinned)\nselect c.id, 'seed', 'Board librarian',\n  'How this board is used',\n  'This is a peer board, not a clinic. Describe what you observed, what your veterinarian said, and what you are organizing at home. Do not ask the room to diagnose. Emergency signs — straining with no urine, open-mouth breathing, collapse, cold hind legs, toxin — belong at an emergency hospital, not in a thread.',\n  true\nfrom forum_categories c where c.slug = 'recovery-stories'\nand not exists (select 1 from forum_threads where title = 'How this board is used');\n\n";
var _0003_stripe_default = "create table if not exists stripe_customers(user_id text primary key, customer_id text not null unique);\ncreate table if not exists stripe_catalog(tier integer primary key, price_id text not null, product_id text not null);\ncreate table if not exists stripe_settings(key text primary key, value text not null);\ncreate table if not exists stripe_memberships(\n id text primary key, user_id text not null, customer_id text, tier integer not null,\n status text not null, current_period_end timestamptz, cancel_at_period_end boolean not null default false,\n updated_at timestamptz not null default now()\n);\ncreate index if not exists stripe_memberships_user_idx on stripe_memberships(user_id);\ncreate table if not exists stripe_orders(\n id serial primary key, user_id text not null, session_id text not null unique,\n product_slug text not null, product_name text not null, quantity integer not null,\n amount_cents integer not null, currency text not null default 'usd', shipping jsonb not null,\n status text not null default 'paid', fulfillment_status text not null default 'pending',\n printify_id text, error text, created_at timestamptz not null default now()\n);\nalter table stripe_orders add column if not exists fulfillment_started_at timestamptz;\n";
var _0004_remove_demo_posts_default = "-- Retire the template's fictional testimonials; keep the board-use instructions.\ndelete from forum_threads where user_id='seed' and author_name in ('Mara K.','Jonah','Priya');\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var db_exports = /* @__PURE__ */ __exportAll$1({
	dbSource: () => dbSource,
	ensureDbReady: () => ensureDbReady,
	getPglite: () => getPglite,
	getSql: () => getSql
});
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run, transact) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	sql.transaction = transact ?? (async (work) => work(sql));
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.n);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		}, async (work) => {
			const client = await pool.connect();
			try {
				await client.query("BEGIN");
				const value = await work(toSql(async (text, params) => (await client.query(text, params)).rows));
				await client.query("COMMIT");
				return value;
			} catch (error) {
				await client.query("ROLLBACK");
				throw error;
			} finally {
				client.release();
			}
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({
			dataDir: process.env.PGLITE_DATA_DIR?.trim() || void 0,
			parsers: {
				[OID_INT8]: Number,
				[OID_DATE]: identity,
				[OID_INTERVAL]: identity
			}
		});
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({
			"/migrations/0001_auth.sql": _0001_auth_default,
			"/migrations/0002_schema.sql": _0002_schema_default,
			"/migrations/0003_stripe.sql": _0003_stripe_default,
			"/migrations/0004_remove_demo_posts.sql": _0004_remove_demo_posts_default
		});
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	}, (work) => pg.transaction((tx) => work(toSql(async (text, params) => (await tx.query(text, params)).rows))));
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* The shared PGLite instance (preview only), with `migrations/*.sql` applied.
* Lets Better Auth persist to the SAME embedded DB as app data in preview (via a
* Kysely dialect). Throws when `DATABASE_URL` is set (that path uses Neon).
*/
async function getPglite() {
	if (dbSource !== "pglite") throw new Error("getPglite() is only available on the PGLite fallback (no DATABASE_URL)");
	await getSql();
	const pg = await globalRef.__pgliteInstance__;
	if (!pg) throw new Error("PGLite instance failed to initialize");
	return pg;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
//#endregion
export { getPglite as n, getSql as r, db_WO7Pgea8_exports as t };

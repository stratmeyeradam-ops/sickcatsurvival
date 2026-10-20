# Sick Cat Survival

A portable Node application with Stripe memberships, care guides, practical planning sheets, a member health ledger, community discussions and a merchandise shop.

## Run

Node 22 or later. The ZIP includes source and the production runtime. `npm start` runs that runtime; `PORT` defaults to 3000. To rebuild, use `npm ci` and `npm run build`. Development: `npm run dev`.

Configure the environment using `.env.example` as a reference. The app does not load that example as credentials. Set `APP_URL` to the public origin and provide the existing Stripe secret and webhook signing secret. No hosting provider account is built into the app, and this package does not publish anything.

Startup stores its auth secret and local database in `.data` by default. Keep this directory on persistent storage. This embedded database supports one application process. An external Postgres database can be configured for multiple instances; apply `npm run db:migrate` against that database before starting. Keep test and live Stripe environments in separate databases.

## Memberships

Field Notes is $1/month, Emergency Desk is $5/month, and Archive is $10/month. Stripe Checkout collects payment. The account page opens Stripe's customer portal for plan changes, cancellation, payment methods and invoices. Stripe handles renewals; webhooks synchronize access. If existing Price IDs are not supplied, the app creates the three recurring products/prices through Stripe when first used, then caches their IDs. The billing portal configuration is also created on first use unless an existing configuration is supplied.

Webhook URL: `/api/stripe/webhook`. Subscribe it to `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `customer.subscription.paused`, `customer.subscription.resumed`, `invoice.paid`, and `invoice.payment_failed`.

Core symptom evaluators, emergency protocols and printable planning tools remain free. Member manuals, wellness notes, advanced notes, reference collections, board posting and health records use the relevant subscription tier. Paid writing is delivered by server functions rather than included in the public content catalog.

## Shop

All customer payments use Stripe. Physical fulfillment can use the existing Printify account in the background. Set actual published product/variant mappings in `PRINTIFY_PRODUCTS_JSON`; the original sample IDs and fake shipping address have been removed. Checkout collects the buyer's delivery details. Paid orders are submitted to production automatically, with duplicate delivery handling and retry after provider errors. Merchandise currently supports US delivery. Items without a fulfillment mapping cannot open checkout; memberships do not depend on fulfillment setup.

## Checks

`npm test` and `npm run typecheck`. See REPAIRS.md for browser verification and the limits of provider testing.

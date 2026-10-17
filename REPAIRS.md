# Rebuild notes

The app is a portable Node application with its own email accounts. The preview bridge, external login broker, platform branding/injection scripts, game/connector scaffolding, platform-specific build targets and unused UI/chart dependencies have been removed. Nothing is deployed by the package.

Payments now use Stripe Checkout and recurring monthly memberships: $1 Field Notes, $5 Emergency Desk and $10 Archive. The account page opens Stripe billing management. Webhooks synchronize membership changes and renewals. Existing active members use the portal rather than starting another subscription. Customer-facing fake payment responses and technical fulfillment payload screens are gone.

Useful features include the free symptom evaluator and emergency pages, printable clinic packets/care handoff sheets/daily observation sheets, paid care manuals and reference collections, member health records with CSV export, and a working community board. Terminal evaluator choices now open their selected guidance. The misleading hospital link to a human emergency number was replaced with the site's emergency steps. Forum replies were repaired. Fictional template testimonial posts were removed. The repeated full-width disclaimer banner was removed; the footer and legal page retain the notice.

Paid writing is delivered by authenticated server functions. Membership status, period expiry and tier determine access. The ledger export preserves commas, quotes and newlines and handles spreadsheet formula prefixes. Records are scoped to their account. The original clinical writing was retained; this rebuild was not a clinical review.

Physical orders use Stripe for payment and can use the configured Printify account for automatic production. Buyer shipping details replace the old dummy address. Published product/variant IDs must be supplied in configuration; the sample IDs are removed. Repeated delivery does not create a second order, and provider failures remain retryable.

## Verification

- Production build, TypeScript check and three focused automated tests passed. The tests cover recurring prices, portal configuration, tier changes, cancellation, expiration, latest-state handling, order deduplication, fulfillment retry, CSV round trips and a fresh database schema.
- Desktop 1280×800 and mobile 390×844 browser flows passed: account creation, selected-plan resumption, subscription activation, member content, health-log save/export, forum post/reply, merchandise checkout, automatic production submission, duplicate-return handling, portal opening, cancellation/access removal, account persistence after restart, evaluator answer/back navigation, planning tools and mobile navigation.
- Final browser run reported no application JavaScript errors or failed local assets. Screenshots were inspected for desktop/mobile layout.
- Stripe and Printify responses were mocked locally; no live charge, production order or deployment was made. Real keys, webhook configuration and published merchandise mappings are required for live operation. Local QA mocks and test account data are not included in the ZIP.

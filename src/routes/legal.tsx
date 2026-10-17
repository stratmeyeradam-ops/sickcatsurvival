import { createFileRoute } from "@tanstack/react-router";
import { DBA_LINE, DISCLAIMER, POISON_LINE } from "@/lib/tiers";

export const Route = createFileRoute("/legal")({ component: LegalPage });

function LegalPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-sage">Legal</p>
      <h1 className="mt-2 font-display text-4xl">Disclaimer, terms, privacy</h1>
      <section className="mt-8 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-ink">Veterinary disclaimer</h2>
        <p>{DISCLAIMER}</p>
        <p>
          Symptom trees and protocols are educational decision-support for seeking care. They do not
          create a veterinarian–client–patient relationship. No licensed professional is reviewing your
          cat through this site.
        </p>
        <p>{POISON_LINE}</p>
      </section>
      <section className="mt-8 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-ink">Operator</h2>
        <p>{DBA_LINE}</p>
        <p>
          Creator identity is excluded from this site, from page footers, and from meta tags. WHOIS and
          other registry records are outside this page and are not published here.
        </p>
      </section>
      <section className="mt-8 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-ink">Payments</h2>
        <p>
          Subscriptions and merch are processed exclusively through Stripe. Memberships renew monthly until canceled. Manage your plan, payment method and invoices from your account. Merchandise is made on demand.
        </p>
      </section>
      <section className="mt-8 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-ink">Privacy</h2>
        <p>
          Account data is limited to your email account or an available sign-in provider plus subscription, order, and
          optional board posts. Health-ledger entries stay on your account. We do not sell lists.
        </p>
      </section>
      <section className="mt-8 space-y-4 text-muted">
        <h2 className="font-display text-2xl text-ink">Community</h2>
        <p>
          The board is for non-medical peer support. Posts that ask the room to diagnose, or that
          substitute for emergency care, will be removed. You keep copyright in your words; you grant
          the desk a license to display them.
        </p>
      </section>
    </article>
  );
}

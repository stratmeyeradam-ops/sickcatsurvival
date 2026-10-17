import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, LockNote } from "@/components/layout/page-hero";
import { MANUALS } from "@/lib/data/manuals";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/manuals/")({ component: ManualsIndex });

function ManualsIndex() {
  const [tier, setTier] = useState(0);
  useEffect(() => {
    void getOptionalTier().then((r) => setTier(r.tier));
  }, []);
  return (
    <div>
      <PageHero
        kicker="Field Notes"
        title="Care manuals"
        lede="Household logistics: water, the box, the carrier, the older cat. Not treatment plans."
        image="/images/archives.jpg"
        imageAlt="A desk with maps and a small slate"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {tier < 1 ? <LockNote need="Field Notes ($1/mo with Stripe)" /> : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {MANUALS.map((m) => (
            <Link
              key={m.slug}
              to="/manuals/$slug"
              params={{ slug: m.slug }}
              className="overflow-hidden rounded-xl bg-surface shadow-plate"
            >
              <img src={m.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{m.read}</p>
                <h2 className="mt-2 font-display text-2xl">{m.title}</h2>
                <p className="mt-2 text-sm text-muted">{m.lede}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

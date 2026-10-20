import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, LockNote } from "@/components/layout/page-hero";
import { loadWellness } from "@/lib/server/content";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/wellness")({ component: WellnessPage });

function WellnessPage() {
  const [content,setContent]=useState<Awaited<ReturnType<typeof loadWellness>>|null>(null);
  useEffect(()=>{void loadWellness().then(setContent).catch(()=>{});},[]);
  const today=content?.today||{title:"Daily care note",body:""};
  const WELLNESS_TIPS=content?.tips||[];
  const locked=(content?.tier||0)<1;

  return (
    <div>
      <PageHero
        kicker="Field Notes · $1/mo"
        title="Wellness desk"
        lede="Short notes you can use on an ordinary Tuesday so the emergency desk is needed less often."
        image="/images/wellness-wide.jpg"
        imageAlt="Kitten asleep in a window"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {locked ? <LockNote need="Field Notes ($1/mo with Stripe)" /> : null}
        <article className="mt-6 rounded-xl bg-surface p-6 shadow-plate">
          <p className="text-xs uppercase tracking-[0.16em] text-sage">Today</p>
          <h2 className="mt-2 font-display text-3xl">{today.title}</h2>
          <p className="mt-3 max-w-2xl text-muted">{locked ? "Subscribe to read the full note." : today.body}</p>
        </article>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {WELLNESS_TIPS.map((t) => (
            <article key={t.title} className="rounded-xl bg-surface p-5 shadow-plate">
              <h3 className="font-display text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-muted">{locked ? "Available on Field Notes." : t.body}</p>
            </article>
          ))}
        </div>
        <section className="mt-10 rounded-xl bg-surface p-6 shadow-plate"><h2 className="font-display text-2xl">Turn notes into a routine</h2><p className="mt-3 text-muted">Make a care handoff sheet, print a clinic visit packet, or keep a dated history in the member toolkit.</p><div className="mt-4 flex flex-wrap gap-5"><Link to="/resources" className="text-sage underline">Free planning sheets</Link><Link to="/toolkit" className="text-sage underline">Health ledger</Link></div></section>
        <p className="mt-8 text-sm">
          Care manuals live next door.{" "}
          <Link to="/manuals" className="text-sage">
            Open manuals
          </Link>
        </p>
      </div>
    </div>
  );
}

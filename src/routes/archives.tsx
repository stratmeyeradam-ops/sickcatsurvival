import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, LockNote } from "@/components/layout/page-hero";
import { loadWellness } from "@/lib/server/content";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/archives")({ component: ArchivesPage });

function ArchivesPage() {
  const [content,setContent]=useState<Awaited<ReturnType<typeof loadWellness>>|null>(null);
  useEffect(()=>{void loadWellness().then(setContent).catch(()=>{});},[]);
  const tier=content?.tier||0, ARCHIVES=content?.archives||[];
  return (
    <div>
      <PageHero
        kicker="Archive · $10/mo"
        title="Digital archives"
        lede="Organized checklists for clinic visits, home-care handoffs and useful records."
        image="/images/archives.jpg"
        imageAlt="Maps and a small slate on a wooden desk"
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {tier < 3 ? <LockNote need="Archive ($10/mo with Stripe)" /> : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ARCHIVES.map((a) => (
            <article key={a.slug} className="rounded-xl bg-surface p-6 shadow-plate">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{a.year}</p>
              <h2 className="mt-2 font-display text-2xl">{a.title}</h2>
              <p className="mt-3 text-sm text-muted">{tier < 3 ? "Unlock with Archive." : a.body}</p>
              {tier>=3?<ul className="mt-4 list-disc space-y-3 pl-5 text-sm">{a.items.map(item=><li key={item}>{item}</li>)}</ul>:null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

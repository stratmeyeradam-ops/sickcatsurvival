import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { PROTOCOLS } from "@/lib/data/emergencies";
import { POISON_LINE } from "@/lib/tiers";

export const Route = createFileRoute("/emergency/")({ component: EmergencyIndex });

function EmergencyIndex() {
  return (
    <div>
      <PageHero
        kicker="Open to everyone"
        title="Emergency protocols"
        lede="These pages stay unlocked. If the sign matches, you leave. The hospital does the rest."
        image="/images/frame-gray.jpg"
        imageAlt="A gray cat looking upward"
      />
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <p className="rounded-lg bg-alert px-4 py-3 text-sm text-alert-fg">{POISON_LINE}</p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2">
        {PROTOCOLS.map((p) => (
          <Link
            key={p.slug}
            to="/emergency/$slug"
            params={{ slug: p.slug }}
            className="overflow-hidden rounded-xl bg-surface shadow-plate"
          >
            <img src={p.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-alert">{p.minutes}</p>
              <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

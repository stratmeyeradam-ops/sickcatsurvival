import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { SYMPTOMS } from "@/lib/data/symptoms";

export const Route = createFileRoute("/symptoms/")({ component: SymptomsIndex });

function SymptomsIndex() {
  return (
    <div>
      <PageHero
        kicker="Evaluator"
        title="What are you seeing?"
        lede="Large buttons. Short trees. A recommendation to go now, go today, or watch — never a diagnosis."
        image="/images/frame-tabby.jpg"
        imageAlt="Silver tabby observed in quiet light"
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2">
        {SYMPTOMS.map((s) => (
          <Link
            key={s.slug}
            to="/symptoms/$slug"
            params={{ slug: s.slug }}
            className="overflow-hidden rounded-xl bg-surface shadow-plate"
          >
            <img src={s.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.summary}</p>
              <p className="mt-3 text-sm text-alert">{s.redFlag}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SymptomTree } from "@/components/evaluator/tree";
import { Badge } from "@/components/ui/badge";
import { getSymptom } from "@/lib/data/symptoms";
import { loadAdvanced } from "@/lib/server/content";
import { getOptionalTier } from "@/lib/server/billing";
import { DISCLAIMER } from "@/lib/tiers";

export const Route = createFileRoute("/symptoms/$slug")({
  component: SymptomPage,
});

function SymptomPage() {
  const { slug } = Route.useParams();
  const guide = getSymptom(slug);
  const [advancedNotes,setAdvancedNotes]=useState<string[]>([]);
  useEffect(()=>{void loadAdvanced({data:{slug}}).then(r=>setAdvancedNotes(r.notes)).catch(()=>{});},[slug]);
  const [tier, setTier] = useState(0);

  useEffect(() => {
    void getOptionalTier().then((r) => setTier(r.tier));
  }, []);

  if (!guide) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl">Guide not found</h1>
        <Link to="/symptoms" className="mt-4 inline-block text-sage">
          All symptoms
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge tone="alert">Evaluator</Badge>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">{guide.title}</h1>
            <p className="mt-4 text-lg text-muted">{guide.summary}</p>
            <p className="mt-4 font-medium text-alert">{guide.redFlag}</p>
          </div>
          <img src={guide.image} alt="" className="h-64 w-full rounded-xl object-cover" />
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <SymptomTree key={guide.slug} guide={guide} />
        <aside className="space-y-4">
          <div className="rounded-xl bg-surface p-5 shadow-plate">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Disclaimer</p>
            <p className="mt-2 text-sm text-muted">{DISCLAIMER}</p>
          </div>
          {(tier<2 || advancedNotes.length>0) ? (
            <div className="rounded-xl bg-surface p-5 shadow-plate">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Emergency Desk notes</p>
              {tier >= 2 ? (
                <ul className="mt-3 space-y-2 text-sm">
                  {advancedNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  Deep-dive notes unlock with the $5 Emergency Desk plan.{" "}
                  <Link to="/pricing" className="text-sage">
                    Membership plans
                  </Link>
                </p>
              )}
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LockNote } from "@/components/layout/page-hero";
import { loadManual } from "@/lib/server/content";
import { getOptionalTier } from "@/lib/server/billing";
import { DISCLAIMER } from "@/lib/tiers";

export const Route = createFileRoute("/manuals/$slug")({ component: ManualPage });

function ManualPage() {
  const { slug } = Route.useParams();
  const [manual,setManual]=useState<Awaited<ReturnType<typeof loadManual>>|null>(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{setLoading(true);void loadManual({data:{slug}}).then(setManual).catch(()=>setManual(null)).finally(()=>setLoading(false));},[slug]);
  const [tier, setTier] = useState(0);
  useEffect(() => {
    void getOptionalTier().then((r) => setTier(r.tier));
  }, []);
  if(loading)return <div className="mx-auto max-w-3xl px-4 py-16">Loading manual…</div>;
  if (!manual) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl">Manual not found</h1>
        <Link to="/manuals" className="mt-4 inline-block text-sage">
          All manuals
        </Link>
      </div>
    );
  }
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-sage">{manual.read}</p>
      <h1 className="mt-2 font-display text-4xl">{manual.title}</h1>
      <p className="mt-4 text-lg text-muted">{manual.lede}</p>
      <img src={manual.image} alt="" className="mt-8 h-64 w-full rounded-xl object-cover" />
      {tier < 1 ? (
        <div className="mt-8">
          <LockNote need="Field Notes ($1/mo with Stripe)" />
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {manual.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      )}
      <p className="mt-10 text-xs text-muted">{DISCLAIMER}</p>
    </article>
  );
}

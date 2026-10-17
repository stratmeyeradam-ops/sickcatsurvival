import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SYMPTOMS } from "@/lib/data/symptoms";
import { PROTOCOLS } from "@/lib/data/emergencies";
import { PRODUCTS } from "@/lib/data/products";
import { dailyNote } from "@/lib/server/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [q, setQ] = useState("");
  const matches = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return SYMPTOMS.slice(0, 6);
    return SYMPTOMS.filter(
      (s) =>
        s.title.toLowerCase().includes(needle) ||
        s.summary.toLowerCase().includes(needle) ||
        s.redFlag.toLowerCase().includes(needle),
    );
  }, [q]);
  const [tip,setTip]=useState({title:"A daily care note",body:"Practical notes for everyday routines."});
  useEffect(()=>{void dailyNote().then(setTip).catch(()=>{});},[]);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-sage">Feline care · practical tools</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">
              If your cat is in trouble, start here.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Clear symptom trees and emergency protocols written for a kitchen floor at 2 a.m. Not a
              veterinarian. A map to one.
            </p>
            <form
              className="mt-8"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <label htmlFor="symptom-search" className="text-xs uppercase tracking-[0.16em] text-muted">
                What are you seeing?
              </label>
              <div className="relative mt-2">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                <Input
                  id="symptom-search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Straining, open mouth, not eating…"
                  className="pl-10"
                />
              </div>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/emergency">
                <Button variant="alert" size="lg">
                  <Siren className="size-4" />
                  Emergency protocols
                </Button>
              </Link>
              <Link to="/symptoms">
                <Button variant="outline" size="lg">
                  Full evaluator
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="/images/hero-wide.jpg"
            alt="A silver tabby cat looking up, quiet and still"
            className="h-72 w-full rounded-xl object-cover sm:h-[420px]"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:px-6 md:grid-cols-3">
        {[{to:"/resources",title:"Prepare for a clinic visit",text:"Free printable visit packets, sitter handoffs and observation sheets."},{to:"/manuals",title:"Build a better care routine",text:"Practical manuals for feeding, carriers, litter routines and senior-cat logistics."},{to:"/toolkit",title:"Keep a useful health history",text:"Member records for observations and medicines, with a CSV to share with your clinic."}].map(tool=><Link key={tool.to} to={tool.to} className="rounded-xl bg-surface p-5 shadow-plate"><h2 className="font-display text-xl">{tool.title}</h2><p className="mt-3 text-sm text-muted">{tool.text}</p><span className="mt-4 inline-block text-sm text-sage">Open tool →</span></Link>)}
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">The three that cannot wait</h2>
          <Link to="/emergency" className="hidden text-sm text-sage sm:inline">
            All protocols
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {SYMPTOMS.filter((s) => ["not-urinating", "breathing", "hind-legs"].includes(s.slug)).map(
            (s) => (
              <Link
                key={s.slug}
                to="/symptoms/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-xl bg-surface shadow-plate"
              >
                <img src={s.image} alt="" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <Badge tone="alert">Emergency</Badge>
                  <h3 className="mt-3 font-display text-2xl group-hover:text-sage">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.redFlag}</p>
                </div>
              </Link>
            ),
          )}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl">Symptom evaluator</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Answer a few large buttons. The tree tells you whether to go now, go today, or watch.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((s) => (
              <Link
                key={s.slug}
                to="/symptoms/$slug"
                params={{ slug: s.slug }}
                className="rounded-lg bg-paper p-4 shadow-plate transition-transform duration-150 hover:-translate-y-0.5"
              >
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img
            src="/images/wellness-wide.jpg"
            alt="A kitten sleeping in a sunlit window"
            className="h-72 w-full rounded-xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-sage">Today’s field note</p>
            <h2 className="mt-2 font-display text-3xl">{tip.title}</h2>
            <p className="mt-3 text-muted">{tip.body}</p>
            <Link to="/wellness" className="mt-6 inline-flex">
              <Button variant="outline">
                Wellness desk
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl text-paper">Protocols, not panic</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {PROTOCOLS.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                to="/emergency/$slug"
                params={{ slug: p.slug }}
                className="rounded-lg border border-white/10 p-4 hover:bg-white/5"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-sage-fg/70">{p.minutes}</p>
                <h3 className="mt-2 font-display text-2xl text-paper">{p.title}</h3>
                <p className="mt-1 text-sm text-paper/70">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Printify shop</h2>
          <Link to="/shop" className="text-sm text-sage">
            All goods
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <Link key={p.slug} to="/shop/$slug" params={{ slug: p.slug }} className="group">
              <img src={p.image} alt={p.name} className="aspect-[6/7] w-full rounded-lg object-cover" />
              <p className="mt-2 font-medium group-hover:text-sage">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

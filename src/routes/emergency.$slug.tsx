import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { getProtocol } from "@/lib/data/emergencies";
import { DISCLAIMER } from "@/lib/tiers";

export const Route = createFileRoute("/emergency/$slug")({
  component: ProtocolPage,
});

function ProtocolPage() {
  const { slug } = Route.useParams();
  const p = getProtocol(slug);
  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl">Protocol not found</h1>
        <Link to="/emergency" className="mt-4 inline-block text-sage">
          All protocols
        </Link>
      </div>
    );
  }
  return (
    <div>
      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge tone="alert">{p.minutes}</Badge>
            <h1 className="mt-4 font-display text-4xl text-paper sm:text-5xl">{p.title}</h1>
            <p className="mt-4 text-lg text-paper/75">{p.summary}</p>
          </div>
          <img src={p.image} alt="" className="h-64 w-full rounded-xl object-cover" />
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <section className="rounded-xl bg-surface p-6 shadow-plate">
          <h2 className="font-display text-2xl">Do now</h2>
          <ol className="mt-4 space-y-3 text-sm">
            {p.doNow.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </section>
        <section className="rounded-xl bg-surface p-6 shadow-plate">
          <h2 className="font-display text-2xl">On the way</h2>
          <ol className="mt-4 space-y-3 text-sm">
            {p.onTheWay.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </section>
        <section className="rounded-xl bg-surface p-6 shadow-plate">
          <h2 className="font-display text-2xl">Never</h2>
          <ul className="mt-4 space-y-3 text-sm text-alert">
            {p.never.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl bg-surface p-6 shadow-plate">
          <h2 className="font-display text-2xl">At the hospital</h2>
          <p className="mt-4 text-sm text-muted">{p.hospital}</p>
          {p.after ? (
            <ul className="mt-4 space-y-2 text-sm">
              {p.after.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : null}
        </section>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-12 text-sm text-muted sm:px-6">
        {p.why} {DISCLAIMER}
      </p>
    </div>
  );
}

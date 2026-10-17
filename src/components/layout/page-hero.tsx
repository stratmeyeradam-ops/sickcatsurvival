import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-sage">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{lede}</p>
        </div>
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ""}
            className={cn("h-56 w-full rounded-xl object-cover sm:h-72")}
          />
        ) : null}
      </div>
    </section>
  );
}

export function LockNote({ need }: { need: string }) {
  return (
    <div className="rounded-xl bg-surface p-6 shadow-plate">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Members</p>
      <h2 className="mt-2 font-display text-2xl">This desk is behind {need}</h2>
      <p className="mt-2 text-sm text-muted">
        Emergency protocols and the core evaluator stay open. This section is for subscribers, paid
        through Stripe.
      </p>
      <a href="/pricing" className="mt-4 inline-flex text-sm font-medium text-sage underline-offset-4 hover:underline">
        Open Membership plans
      </a>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { PRODUCTS, formatPrice } from "@/lib/data/products";

export const Route = createFileRoute("/shop/")({ component: ShopIndex });

function ShopIndex() {
  return (
    <div>
      <PageHero
        kicker="The shop"
        title="Goods for the go-bag"
        lede="Everyday supplies and pieces for cat people. Secure checkout through Stripe."
        image="/products/tote.jpg"
        imageAlt="Natural canvas tote on paper"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <Link key={p.slug} to="/shop/$slug" params={{ slug: p.slug }} className="group">
            <img src={p.image} alt={p.name} className="aspect-[6/7] w-full rounded-xl object-cover" />
            <div className="mt-3 flex items-baseline justify-between gap-2">
              <h2 className="font-display text-xl group-hover:text-sage">{p.name}</h2>
              <p className="tabular-nums text-sm">{formatPrice(p.priceCents)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

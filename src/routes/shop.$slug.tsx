import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckoutButton } from "@/components/billing/checkout";
import { getProduct, formatPrice, PRODUCTS } from "@/lib/data/products";
import { getOptionalTier } from "@/lib/server/billing";
import { DISCLAIMER } from "@/lib/tiers";

export const Route = createFileRoute("/shop/$slug")({ component: ProductPage });

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    void getOptionalTier().then((r) => setSignedIn(r.signedIn)).catch(() => setSignedIn(false));
  }, []);
  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-3xl">Not in the shop</h1>
        <Link to="/shop" className="mt-4 inline-block text-sage">
          Shop
        </Link>
      </div>
    );
  }
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <img src={product.image} alt={product.name} className="w-full rounded-xl object-cover" />
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{product.category}</p>
        <h1 className="mt-2 font-display text-4xl">{product.name}</h1>
        <p className="mt-3 font-display text-3xl tabular-nums">{formatPrice(product.priceCents)}</p>
        <p className="mt-4 text-muted">{product.blurb}</p>
        <div className="mt-8 max-w-sm">
          <CheckoutButton
            kind={{ type: "merch", slug: product.slug, name: product.name, priceCents: product.priceCents }}
            signedIn={signedIn}
          />
        </div>
        <p className="mt-4 text-xs text-muted">
          Secure Stripe checkout. Enter your delivery address at checkout; orders are made on demand.
        </p>
        <p className="mt-6 text-xs text-muted">{DISCLAIMER}</p>
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Also in the shop</p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {PRODUCTS.filter((p) => p.slug !== product.slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} to="/shop/$slug" params={{ slug: p.slug }}>
                  <img src={p.image} alt={p.name} className="aspect-square w-full rounded-md object-cover" />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

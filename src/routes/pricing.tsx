import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { TierCard } from "@/components/billing/checkout";
import { getOptionalTier } from "@/lib/server/billing";

export const Route = createFileRoute("/pricing")({ component: PricingPage });

function PricingPage() {
  const [tier, setTier] = useState(0);
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    void getOptionalTier().then((r) => {
      setTier(r.tier);
      setSignedIn(r.signedIn);
    }).catch(() => setSignedIn(false));
  }, []);
  return (
    <div>
      <PageHero
        kicker="Monthly memberships"
        title="Useful care tools. One simple membership."
        lede="Field Notes $1, Emergency Desk $5, Archive $10 — monthly through Stripe. Emergency protocols stay free."
        image="/images/frame-orange.jpg"
        imageAlt="Orange tabby in an editorial frame"
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3">
        <TierCard tierId={1} current={tier} signedIn={signedIn} />
        <TierCard tierId={2} current={tier} signedIn={signedIn} featured />
        <TierCard tierId={3} current={tier} signedIn={signedIn} />
      </div>
    </div>
  );
}

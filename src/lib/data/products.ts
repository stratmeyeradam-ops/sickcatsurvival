export type Product = {
  slug: string;
  name: string;
  priceCents: number;
  blurb: string;
  image: string;
  category: "wear" | "home" | "kit";
};

export const PRODUCTS: Product[] = [
  {
    slug: "field-tee",
    name: "Field tee",
    priceCents: 2800,
    blurb: "Charcoal cotton with the clinic mark over the heart. Cut to wash hard and still look like a uniform.",
    image: "/products/tee.jpg",
    category: "wear",
  },
  {
    slug: "shelter-hoodie",
    name: "Shelter hoodie",
    priceCents: 5400,
    blurb: "Heavy ink-dyed fleece for waiting-room hours. Mark sits small at the chest, not as a slogan.",
    image: "/products/hoodie.jpg",
    category: "wear",
  },
  {
    slug: "canvas-tote",
    name: "Canvas tote",
    priceCents: 2400,
    blurb: "Natural canvas sized for a carrier towel, a paper record, and a can of food.",
    image: "/products/tote.jpg",
    category: "home",
  },
  {
    slug: "hydration-bowl",
    name: "Hydration bowl",
    priceCents: 3200,
    blurb: "Wide sage-glaze ceramic. Whisker-friendly rim. A second water station is a treatment, not décor.",
    image: "/products/bowl.jpg",
    category: "home",
  },
  {
    slug: "field-bandana",
    name: "Field bandana",
    priceCents: 1800,
    blurb: "Sage cotton square. Tie on a carrier handle so the hospital can see a name tag in one glance.",
    image: "/products/bandana.jpg",
    category: "wear",
  },
  {
    slug: "health-ledger",
    name: "Health ledger",
    priceCents: 2600,
    blurb: "Clothbound notebook ruled for weight, medicines, and appetite. The analog backup to the digital toolkit.",
    image: "/products/notebook.jpg",
    category: "kit",
  },
  {
    slug: "enamel-pin",
    name: "Enamel pin",
    priceCents: 1400,
    blurb: "Brass-edge pin of the clinic mark. Quiet flair for a bag or a coat.",
    image: "/products/pin.jpg",
    category: "wear",
  },
  {
    slug: "leather-collar",
    name: "Leather collar",
    priceCents: 3600,
    blurb: "Vegetable-tanned strap, brass tag blank for your engraver. Breakaway hardware.",
    image: "/products/collar.jpg",
    category: "home",
  },
  {
    slug: "emergency-card",
    name: "Emergency wallet card",
    priceCents: 1200,
    blurb: "Letterpress stock listing the five signs that mean you leave now. Fits behind an ID.",
    image: "/products/card.jpg",
    category: "kit",
  },
  {
    slug: "recovery-throw",
    name: "Recovery throw",
    priceCents: 4800,
    blurb: "Wool-blend lap blanket for the recovery room and the car ride home.",
    image: "/products/blanket.jpg",
    category: "home",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

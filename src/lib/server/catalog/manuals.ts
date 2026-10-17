export type Manual = {
  slug: string;
  title: string;
  read: string;
  image: string;
  lede: string;
  sections: { heading: string; body: string[] }[];
};

export const MANUALS: Manual[] = [
  {
    slug: "water",
    title: "Water, always",
    read: "8 min",
    image: "/images/wellness-wide.jpg",
    lede: "Chronic kidney disease is common in older cats. The cheapest intervention is making water unavoidable.",
    sections: [
      {
        heading: "Stations, not a single bowl",
        body: [
          "Keep water in at least two rooms, away from the food and the box. Cats often refuse a bowl that sits in a noisy corridor.",
          "Wide ceramic or glass beats a deep stainless cup that scrapes whiskers. Refresh daily. Fountains help some cats and annoy others — trial, do not preach.",
        ],
      },
      {
        heading: "Wet food is water",
        body: [
          "Canned food carries much of a cat’s water. If the household is dry-food-only, ask the veterinarian before a sudden switch, then add water or a freeze-dried topper moistened in the bowl.",
        ],
      },
    ],
  },
  {
    slug: "box",
    title: "The box as a vital sign",
    read: "7 min",
    image: "/images/close-tabby.jpg",
    lede: "Litter habits are often the first chart a veterinarian wishes you had kept.",
    sections: [
      {
        heading: "Count and scoop",
        body: [
          "Scoop twice daily. A sudden drop in clump number, or visits with no clump, is data. Photograph anything with blood.",
          "One box per cat, plus one. Uncovered boxes are easier to watch. Stronger scented litter drives some cats to the rug.",
        ],
      },
    ],
  },
  {
    slug: "weight",
    title: "Weight is a weekly number",
    read: "6 min",
    image: "/images/hero-orange.jpg",
    lede: "A kitchen scale and a carrier. Monthly guesses miss the slide into thinness or the creep of fat.",
    sections: [
      {
        heading: "How to weigh",
        body: [
          "Weigh yourself, then yourself holding the cat, and subtract. Or place a carrier on a baby scale. Write the number in the ledger.",
          "A 5% drop without a diet is a clinic letter, not a new food experiment.",
        ],
      },
    ],
  },
  {
    slug: "carrier",
    title: "The carrier is furniture",
    read: "5 min",
    image: "/images/sit-brown.jpg",
    lede: "A cat who only sees the carrier at 2 a.m. will not walk into it at 2 a.m.",
    sections: [
      {
        heading: "Leave it out",
        body: [
          "Park the carrier in the living room with a towel and a treat. Feed snacks inside it on ordinary Tuesdays.",
          "Hard-sided, top-opening carriers make hospital exams kinder. Put your name on the outside in large letters.",
        ],
      },
    ],
  },
  {
    slug: "senior",
    title: "The older cat",
    read: "10 min",
    image: "/images/portrait-gray.jpg",
    lede: "Senior cats compensate until they cannot. Bloodwork on a schedule is cheaper than a crisis.",
    sections: [
      {
        heading: "What changes",
        body: [
          "Night crying, a greasy coat, and missing the box are not “just age.” They are reasons to book the veterinarian.",
          "Ask for kidney values, blood pressure, and a thyroid check at the annual — or twice yearly after ten.",
        ],
      },
    ],
  },
  {
    slug: "mouth",
    title: "Teeth, quietly",
    read: "6 min",
    image: "/images/close-orange.jpg",
    lede: "Cats eat through pain until they stop. Bad breath and dropping food are clinic signs, not personality.",
    sections: [
      {
        heading: "Home and clinic",
        body: [
          "If the cat allows it, a veterinarian-approved toothpaste on a finger brush. If not, do not fight a mouth at home — book a dental assessment.",
          "Never use human toothpaste. Resorptive lesions are common and only visible on exam.",
        ],
      },
    ],
  },
  {
    slug: "stress",
    title: "A quieter house",
    read: "7 min",
    image: "/images/tuxedo.jpg",
    lede: "Cystitis in cats is often a stress disease as much as a crystal disease.",
    sections: [
      {
        heading: "Resources",
        body: [
          "Vertical space, a closed door during parties, and separate food bowls in multi-cat homes reduce simmering conflict.",
          "Pheromone diffusers help some households. Punishment never does.",
        ],
      },
    ],
  },
  {
    slug: "go-bag",
    title: "The 2 a.m. go-bag",
    read: "5 min",
    image: "/images/archives.jpg",
    lede: "The bag exists so you do not think. You pick it up and you leave.",
    sections: [
      {
        heading: "Pack",
        body: [
          "Printed list of two emergency hospitals with phones. Last weight. Current medicines in original bottles. A towel that smells like home. A photo of the cat.",
          "Keep it next to the carrier, not in a closet you have to unpack.",
        ],
      },
    ],
  },
];

export function getManual(slug: string) {
  return MANUALS.find((m) => m.slug === slug);
}

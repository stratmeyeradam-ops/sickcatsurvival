export type Protocol = {
  slug: string;
  title: string;
  minutes: string;
  summary: string;
  image: string;
  why: string;
  doNow: string[];
  onTheWay: string[];
  never: string[];
  hospital: string;
  after?: string[];
};

export const PROTOCOLS: Protocol[] = [
  {
    slug: "urethral-obstruction",
    title: "Urethral obstruction",
    minutes: "Go now — hours matter",
    summary: "A blocked male cat cannot empty the bladder. Potassium rises. The heart can stop.",
    image: "/images/close-tabby.jpg",
    why: "Crystals, mucus, and spasm plug the narrow male urethra. The bladder fills, pain is extreme, and toxins that should have left in urine stay in the blood.",
    doNow: [
      "Carrier. Do not wait for a morning appointment.",
      "Call the emergency hospital: “male cat straining, little or no urine.”",
      "If you can do so without delaying, photograph the box.",
    ],
    onTheWay: [
      "Keep the carrier stable. No food.",
      "Do not express the bladder at home.",
    ],
    never: [
      "Do not give leftover urinary pills and wait.",
      "Do not assume constipation — the postures look similar.",
    ],
    hospital: "The hospital will confirm a firm bladder, start pain control and fluids, and relieve the obstruction under care. Kidney values and potassium guide the next day.",
    after: [
      "Ask for the discharge diet, pain plan, and a recheck of kidney values.",
      "Add water stations. Keep the box impeccably clean.",
    ],
  },
  {
    slug: "respiratory-distress",
    title: "Respiratory distress",
    minutes: "Minutes — do not wait",
    summary: "Open-mouth breathing or a pumping belly means the cat cannot meet oxygen demand.",
    image: "/images/hero-tabby.jpg",
    why: "Asthma, heart failure, fluid around the lungs, or a foreign body can look identical at home. Only a hospital can tell them apart.",
    doNow: [
      "Quiet, dark carrier. No chasing.",
      "Cool the car. Do not wrap tightly.",
      "Call ahead so oxygen is ready.",
    ],
    onTheWay: ["Sit the carrier so the cat can keep a crouched posture. Do not force the mouth closed."],
    never: [
      "Do not give an inhaler meant for a person unless already prescribed for this cat.",
      "Do not hold the cat on its back.",
    ],
    hospital: "Expect oxygen first, then imaging. Handling is kept short on purpose.",
  },
  {
    slug: "toxin",
    title: "Toxin or lily exposure",
    minutes: "Go now, even before signs",
    summary: "True lilies can wreck feline kidneys from pollen or a few petals. Human pain medicine is often fatal.",
    image: "/images/field-tabby.jpg",
    why: "Cats lack pathways to metabolize many household chemicals. Waiting for vomiting wastes the window when decontamination still helps.",
    doNow: [
      "Take the plant or bottle with you.",
      "Call the hospital and ASPCA Animal Poison Control: 888-426-4435.",
      "Do not induce vomiting unless a veterinarian tells you to for this poison.",
    ],
    onTheWay: ["Note the time of exposure and any amount you saw swallowed."],
    never: ["Milk, salt, oils, and hydrogen peroxide as home remedies."],
    hospital: "Decontamination, bloodwork, and often IV fluids for 48 hours with lily or antifreeze exposure.",
  },
  {
    slug: "saddle-thrombus",
    title: "Saddle thrombus",
    minutes: "Go now — this is painful",
    summary: "A clot from the heart lodges where the aorta splits to the back legs.",
    image: "/images/sit-brown.jpg",
    why: "Hidden heart disease throws a clot. The cat may howl, drag both hind legs, and the paws go cold.",
    doNow: [
      "Minimize handling. Pain is severe.",
      "Feel the paws only once — cold and pale supports the suspicion.",
      "Call emergency: “sudden hind-leg paralysis.”",
    ],
    onTheWay: ["Keep the cat warm and still. No massage of the legs."],
    never: ["Do not delay because the cat can still sit up."],
    hospital: "Pain control, heart assessment, and a frank talk about options. This is a hospital decision, not a home one.",
  },
  {
    slug: "trauma",
    title: "Trauma and bleeding",
    minutes: "Stabilize and go",
    summary: "Cats walk away from injuries that are still bleeding inside.",
    image: "/images/portrait-gray.jpg",
    why: "High-rise falls, cars, and dog bites cause lung bruises, ruptured bladders, and delayed shock.",
    doNow: [
      "Towel wrap. Firm pressure on obvious bleeding with a clean cloth.",
      "Carrier even if the cat “seems fine.”",
    ],
    onTheWay: ["Keep the spine as straight as you reasonably can if a fall or car was involved."],
    never: ["Tourniquets on a tail or leg unless a veterinarian is talking you through it."],
    hospital: "Pain control, imaging, and observation. Walking is not clearance.",
  },
  {
    slug: "heatstroke",
    title: "Heatstroke",
    minutes: "Cool gently, then go",
    summary: "A panting cat in a hot car or sunroom is in trouble. Cats do not cool like dogs.",
    image: "/images/wellness-wide.jpg",
    why: "They sweat almost not at all. A parked car or dryer-adjacent laundry room can overwhelm them.",
    doNow: [
      "Move to shade or AC.",
      "Wet the paw pads and groins with cool — not ice — water.",
      "Go to emergency even if panting slows.",
    ],
    onTheWay: ["Air conditioning on. Offer a little water if the cat is alert."],
    never: ["Ice baths, which can shut down the skin’s blood flow."],
    hospital: "Fluids, temperature control, and watching the kidneys and clotting.",
  },
  {
    slug: "diabetic-crisis",
    title: "Diabetic crisis",
    minutes: "If known diabetic — do not wait",
    summary: "A diabetic cat who is vomiting, too weak to stand, or breathing in deep slow pulls needs a hospital.",
    image: "/images/hero-orange.jpg",
    why: "Ketoacidosis and hypoglycemia can look similar at home. Guessing with extra insulin is dangerous.",
    doNow: [
      "Bring the insulin bottle and last dose time.",
      "If the cat is seizing and you have been taught to rub corn syrup on the gums, do that — then go.",
    ],
    onTheWay: ["Do not give another full insulin dose on the way."],
    never: ["Doubling insulin because a reading looked high on a home meter you do not trust."],
    hospital: "Glucose, ketones, and fluids. Dosing resumes only after the numbers are known.",
  },
  {
    slug: "birth",
    title: "Labor that is not progressing",
    minutes: "If a kitten is stuck, go",
    summary: "More than 20 minutes of active straining without a kitten, or a kitten visible and not moving, is dystocia.",
    image: "/images/window-kit.jpg",
    why: "A stuck kitten becomes a surgical emergency. Waiting overnight risks the queen and the litter.",
    doNow: [
      "Call emergency with the time labor started and how many kittens you expected.",
      "Keep the queen warm and quiet.",
    ],
    onTheWay: ["Bring any kittens already born, in a warm box."],
    never: ["Pulling a kitten by the legs."],
    hospital: "Exam, calcium/glucose check, and often surgery.",
  },
];

export function getProtocol(slug: string) {
  return PROTOCOLS.find((p) => p.slug === slug);
}

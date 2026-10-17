export const WELLNESS_TIPS = [
  {
    title: "Count sleeping breaths",
    body: "A resting cat usually stays under thirty breaths a minute. Count when they are truly asleep. Write the number once a week.",
  },
  {
    title: "Two water bowls minimum",
    body: "Place a second bowl on another floor or in another room. Thirsty cats will not cross a barking dog or a slamming door.",
  },
  {
    title: "Scoop before coffee",
    body: "Morning scooping is how you notice an empty box. An empty box in a male cat is not a mood.",
  },
  {
    title: "Weigh on Sundays",
    body: "Same scale, same time. A slow loss is easier to reverse than a crash.",
  },
  {
    title: "Carrier as a bed",
    body: "Leave the carrier out with a familiar towel. A cat who naps there will enter it when you need them to.",
  },
  {
    title: "No essential oils",
    body: "Diffusers, tea-tree, and many “calming” blends are not safe around cats. If the house smells like a spa, air it out.",
  },
  {
    title: "Lilies out",
    body: "True lilies (including pollen on fur) are a kidney emergency. If someone sends a bouquet, check every stem.",
  },
  {
    title: "Play at dusk",
    body: "A five-minute wand session before dinner uses the hunting sequence and often settles the night.",
  },
  {
    title: "Photograph the vomit",
    body: "Clinicians would rather see a picture than hear “it was yellowish.” Then clean.",
  },
  {
    title: "Name two hospitals",
    body: "Write the closest 24-hour hospital and a backup. Pin both to the go-bag. Do this on a calm afternoon.",
  },
  {
    title: "Wet food as water",
    body: "If the cat will eat canned food, that is a hydration plan. Ask before a sudden diet change.",
  },
  {
    title: "Separate the resources",
    body: "In a two-cat house, two food bowls side by side still count as one resource. Split them.",
  },
];

export function todaysTip(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const day = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return WELLNESS_TIPS[day % WELLNESS_TIPS.length]!;
}

export const ARCHIVES = [
 {slug:"clinic-folder",title:"Build a clinic-ready folder",year:"Preparation",body:"Keep one place for records so appointments start with useful information.",items:["Write your regular clinic and after-hours contact details on the first page.","Keep visit summaries, lab reports and current medication labels together.","Start a dated timeline of changes using observations rather than guesses.","Write three questions before each appointment; record the answers and follow-up date.","Take the printed packet from Free Tools, or export your health ledger for the visit."]},
 {slug:"care-handoff",title:"A care routine another person can follow",year:"Home care",body:"Turn a familiar routine into a clear handoff for a sitter or family member.",items:["List feeding times, usual portions and the exact location of supplies.","Copy medication instructions exactly from the label or clinic instructions.","Mark the carrier location, transport contact and clinic phone numbers.","Ask the caregiver to record what was eaten, litter observations and when medicines were given.","Choose one contact for questions and leave a place for written notes."]},
 {slug:"observation-history",title:"Make a useful observation history",year:"Recordkeeping",body:"Consistent descriptions are easier to share than memory alone.",items:["Use a date, time and cat name for each entry.","Keep units with measurements, and use the same scale when recording weight.","Separate what you saw from what you think caused it.","Record prescribed medicines and the time they were given without changing instructions yourself.","Export the ledger before a visit; keep a copy with the clinic paperwork."]},
 {slug:"household-map",title:"Map the household routine",year:"Planning",body:"Make the ordinary parts of care easy to locate and repeat.",items:["Sketch where food, water, litter boxes and quiet resting places are located.","Label which supplies belong to each cat in a multi-cat home.","Keep a spare set of care instructions with the carrier.","Use the daily observation sheet when another person is helping.","Review the plan when your clinic changes instructions or your household routine changes."]}
];

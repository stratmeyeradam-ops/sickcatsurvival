import { F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as optionalSession } from "./session-CmeaUiny.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-DX4bhJ8U.js
var MANUALS = [
	{
		slug: "water",
		title: "Water, always",
		read: "8 min",
		image: "/images/wellness-wide.jpg",
		lede: "Chronic kidney disease is common in older cats. The cheapest intervention is making water unavoidable.",
		sections: [{
			heading: "Stations, not a single bowl",
			body: ["Keep water in at least two rooms, away from the food and the box. Cats often refuse a bowl that sits in a noisy corridor.", "Wide ceramic or glass beats a deep stainless cup that scrapes whiskers. Refresh daily. Fountains help some cats and annoy others — trial, do not preach."]
		}, {
			heading: "Wet food is water",
			body: ["Canned food carries much of a cat’s water. If the household is dry-food-only, ask the veterinarian before a sudden switch, then add water or a freeze-dried topper moistened in the bowl."]
		}]
	},
	{
		slug: "box",
		title: "The box as a vital sign",
		read: "7 min",
		image: "/images/close-tabby.jpg",
		lede: "Litter habits are often the first chart a veterinarian wishes you had kept.",
		sections: [{
			heading: "Count and scoop",
			body: ["Scoop twice daily. A sudden drop in clump number, or visits with no clump, is data. Photograph anything with blood.", "One box per cat, plus one. Uncovered boxes are easier to watch. Stronger scented litter drives some cats to the rug."]
		}]
	},
	{
		slug: "weight",
		title: "Weight is a weekly number",
		read: "6 min",
		image: "/images/hero-orange.jpg",
		lede: "A kitchen scale and a carrier. Monthly guesses miss the slide into thinness or the creep of fat.",
		sections: [{
			heading: "How to weigh",
			body: ["Weigh yourself, then yourself holding the cat, and subtract. Or place a carrier on a baby scale. Write the number in the ledger.", "A 5% drop without a diet is a clinic letter, not a new food experiment."]
		}]
	},
	{
		slug: "carrier",
		title: "The carrier is furniture",
		read: "5 min",
		image: "/images/sit-brown.jpg",
		lede: "A cat who only sees the carrier at 2 a.m. will not walk into it at 2 a.m.",
		sections: [{
			heading: "Leave it out",
			body: ["Park the carrier in the living room with a towel and a treat. Feed snacks inside it on ordinary Tuesdays.", "Hard-sided, top-opening carriers make hospital exams kinder. Put your name on the outside in large letters."]
		}]
	},
	{
		slug: "senior",
		title: "The older cat",
		read: "10 min",
		image: "/images/portrait-gray.jpg",
		lede: "Senior cats compensate until they cannot. Bloodwork on a schedule is cheaper than a crisis.",
		sections: [{
			heading: "What changes",
			body: ["Night crying, a greasy coat, and missing the box are not “just age.” They are reasons to book the veterinarian.", "Ask for kidney values, blood pressure, and a thyroid check at the annual — or twice yearly after ten."]
		}]
	},
	{
		slug: "mouth",
		title: "Teeth, quietly",
		read: "6 min",
		image: "/images/close-orange.jpg",
		lede: "Cats eat through pain until they stop. Bad breath and dropping food are clinic signs, not personality.",
		sections: [{
			heading: "Home and clinic",
			body: ["If the cat allows it, a veterinarian-approved toothpaste on a finger brush. If not, do not fight a mouth at home — book a dental assessment.", "Never use human toothpaste. Resorptive lesions are common and only visible on exam."]
		}]
	},
	{
		slug: "stress",
		title: "A quieter house",
		read: "7 min",
		image: "/images/tuxedo.jpg",
		lede: "Cystitis in cats is often a stress disease as much as a crystal disease.",
		sections: [{
			heading: "Resources",
			body: ["Vertical space, a closed door during parties, and separate food bowls in multi-cat homes reduce simmering conflict.", "Pheromone diffusers help some households. Punishment never does."]
		}]
	},
	{
		slug: "go-bag",
		title: "The 2 a.m. go-bag",
		read: "5 min",
		image: "/images/archives.jpg",
		lede: "The bag exists so you do not think. You pick it up and you leave.",
		sections: [{
			heading: "Pack",
			body: ["Printed list of two emergency hospitals with phones. Last weight. Current medicines in original bottles. A towel that smells like home. A photo of the cat.", "Keep it next to the carrier, not in a closet you have to unpack."]
		}]
	}
];
function getManual(slug) {
	return MANUALS.find((m) => m.slug === slug);
}
var WELLNESS_TIPS = [
	{
		title: "Count sleeping breaths",
		body: "A resting cat usually stays under thirty breaths a minute. Count when they are truly asleep. Write the number once a week."
	},
	{
		title: "Two water bowls minimum",
		body: "Place a second bowl on another floor or in another room. Thirsty cats will not cross a barking dog or a slamming door."
	},
	{
		title: "Scoop before coffee",
		body: "Morning scooping is how you notice an empty box. An empty box in a male cat is not a mood."
	},
	{
		title: "Weigh on Sundays",
		body: "Same scale, same time. A slow loss is easier to reverse than a crash."
	},
	{
		title: "Carrier as a bed",
		body: "Leave the carrier out with a familiar towel. A cat who naps there will enter it when you need them to."
	},
	{
		title: "No essential oils",
		body: "Diffusers, tea-tree, and many “calming” blends are not safe around cats. If the house smells like a spa, air it out."
	},
	{
		title: "Lilies out",
		body: "True lilies (including pollen on fur) are a kidney emergency. If someone sends a bouquet, check every stem."
	},
	{
		title: "Play at dusk",
		body: "A five-minute wand session before dinner uses the hunting sequence and often settles the night."
	},
	{
		title: "Photograph the vomit",
		body: "Clinicians would rather see a picture than hear “it was yellowish.” Then clean."
	},
	{
		title: "Name two hospitals",
		body: "Write the closest 24-hour hospital and a backup. Pin both to the go-bag. Do this on a calm afternoon."
	},
	{
		title: "Wet food as water",
		body: "If the cat will eat canned food, that is a hydration plan. Ask before a sudden diet change."
	},
	{
		title: "Separate the resources",
		body: "In a two-cat house, two food bowls side by side still count as one resource. Split them."
	}
];
function todaysTip(date = /* @__PURE__ */ new Date()) {
	const start = new Date(date.getFullYear(), 0, 0);
	return WELLNESS_TIPS[Math.floor((date.getTime() - start.getTime()) / 864e5) % WELLNESS_TIPS.length];
}
var ARCHIVES = [
	{
		slug: "clinic-folder",
		title: "Build a clinic-ready folder",
		year: "Preparation",
		body: "Keep one place for records so appointments start with useful information.",
		items: [
			"Write your regular clinic and after-hours contact details on the first page.",
			"Keep visit summaries, lab reports and current medication labels together.",
			"Start a dated timeline of changes using observations rather than guesses.",
			"Write three questions before each appointment; record the answers and follow-up date.",
			"Take the printed packet from Free Tools, or export your health ledger for the visit."
		]
	},
	{
		slug: "care-handoff",
		title: "A care routine another person can follow",
		year: "Home care",
		body: "Turn a familiar routine into a clear handoff for a sitter or family member.",
		items: [
			"List feeding times, usual portions and the exact location of supplies.",
			"Copy medication instructions exactly from the label or clinic instructions.",
			"Mark the carrier location, transport contact and clinic phone numbers.",
			"Ask the caregiver to record what was eaten, litter observations and when medicines were given.",
			"Choose one contact for questions and leave a place for written notes."
		]
	},
	{
		slug: "observation-history",
		title: "Make a useful observation history",
		year: "Recordkeeping",
		body: "Consistent descriptions are easier to share than memory alone.",
		items: [
			"Use a date, time and cat name for each entry.",
			"Keep units with measurements, and use the same scale when recording weight.",
			"Separate what you saw from what you think caused it.",
			"Record prescribed medicines and the time they were given without changing instructions yourself.",
			"Export the ledger before a visit; keep a copy with the clinic paperwork."
		]
	},
	{
		slug: "household-map",
		title: "Map the household routine",
		year: "Planning",
		body: "Make the ordinary parts of care easy to locate and repeat.",
		items: [
			"Sketch where food, water, litter boxes and quiet resting places are located.",
			"Label which supplies belong to each cat in a multi-cat home.",
			"Keep a spare set of care instructions with the carrier.",
			"Use the daily observation sheet when another person is helping.",
			"Review the plan when your clinic changes instructions or your household routine changes."
		]
	}
];
var ER = {
	urgency: "emergency",
	title: "Emergency veterinary care now",
	summary: "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
	actions: [
		"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
		"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
		"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
	],
	avoid: ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
	seek: "Nearest emergency veterinary hospital. Go now."
};
var SYMPTOMS = [
	{
		slug: "not-urinating",
		title: "Straining or not urinating",
		summary: "A male cat who cannot pass urine can die within hours. This is the most missed feline emergency.",
		redFlag: "Straining in the box with little or no urine — especially in males — is an emergency.",
		image: "/images/close-tabby.jpg",
		anatomy: "urinary",
		startId: "strain",
		advancedNotes: [
			"Urethral obstruction is most common in indoor neutered males. The bladder becomes painfully distended and potassium rises, which can stop the heart.",
			"A cat who visits the box repeatedly, cries, or licks the penis/vulva and produces only drops is obstructing until a veterinarian proves otherwise.",
			"After a blockage, many cats need a prescription diet, more water stations, and a recheck of kidney values."
		],
		nodes: {
			strain: {
				id: "strain",
				question: "Is your cat in or around the litter box, straining, crying, or visiting repeatedly?",
				detail: "Watch the posture: a hunched squat with no stream is different from a normal, brief urination.",
				options: [
					{
						label: "Yes — straining or many visits",
						next: "volume"
					},
					{
						label: "Not sure what I am seeing",
						next: "volume"
					},
					{
						label: "No, urine looks normal",
						next: "other"
					}
				]
			},
			volume: {
				id: "volume",
				question: "How much urine is actually in the box?",
				options: [
					{
						label: "None, or a few drops",
						next: "sex"
					},
					{
						label: "Small spots, maybe with blood",
						next: "sex"
					},
					{
						label: "A normal clump or puddle",
						next: "blood"
					}
				]
			},
			sex: {
				id: "sex",
				question: "Is this a male cat (including neutered males)?",
				detail: "Males have a narrow urethra that plugs easily. Females can still have dangerous cystitis, but complete blockage is far more common in males.",
				options: [{
					label: "Male",
					result: ER
				}, {
					label: "Female",
					result: {
						urgency: "urgent",
						title: "Same-day veterinary care",
						summary: "A female cat producing little or no urine, or only blood spots, still needs a veterinarian today. Do not wait if she is crying, hiding, or vomiting.",
						actions: [
							"Call your clinic or an emergency hospital and describe “straining with little urine.”",
							"Bring a photo of the box and the cat in a carrier.",
							"If she becomes lethargic, vomits, or still produces nothing, go to emergency now."
						],
						avoid: ["Do not give leftover antibiotics or pain medicine from another pet."],
						seek: "Same-day veterinarian; emergency if she declines."
					}
				}]
			},
			blood: {
				id: "blood",
				question: "Is there blood on the litter, or is urination painful?",
				options: [{
					label: "Blood, crying, or licking the rear",
					result: {
						urgency: "urgent",
						title: "Same-day care for painful urination",
						summary: "Blood in urine with a normal volume often means cystitis or crystals. It is painful and can progress to obstruction in males.",
						actions: [
							"See a veterinarian today.",
							"Keep water available in more than one quiet place.",
							"Note how many clumps appear over the next few hours."
						],
						avoid: ["Do not switch foods abruptly or add human medicine."],
						seek: "Same-day veterinarian."
					}
				}, {
					label: "No blood, normal posture",
					result: {
						urgency: "monitor",
						title: "Watch water and the box",
						summary: "If the stream is normal and the cat is otherwise himself, keep watching for 12 hours.",
						actions: ["Count clumps. Any sudden drop in volume with straining becomes an emergency."],
						avoid: ["Do not ignore a later change to straining with no urine."],
						seek: "Clinic if anything changes; emergency if volume drops."
					}
				}]
			},
			other: {
				id: "other",
				question: "Is the cat otherwise eating, walking, and breathing normally?",
				options: [{
					label: "Yes",
					result: {
						urgency: "monitor",
						title: "Keep a box log",
						summary: "A single normal urination is reassuring. Track the next two.",
						actions: ["If the next visits look strained or empty, start this evaluator again and go in."],
						avoid: ["Do not assume the problem is “constipation” without a vet — owners often mix the two up."],
						seek: "Veterinarian if the pattern changes."
					}
				}, {
					label: "No — vomiting, hiding, or weak",
					result: ER
				}]
			}
		}
	},
	{
		slug: "breathing",
		title: "Breathing trouble",
		summary: "Cats hide respiratory distress until they are close to collapse. Open-mouth breathing is never normal rest.",
		redFlag: "Open-mouth breathing, blue/gray gums, or the belly pumping hard is an emergency.",
		image: "/images/hero-tabby.jpg",
		anatomy: "respiratory",
		startId: "mouth",
		advancedNotes: [
			"Cats are obligate nasal breathers at rest. Open-mouth breathing after a short walk across the room is a crisis until proven otherwise.",
			"Do not force a distressed cat onto its side or into a shower steam if it fights you — stress can kill. Quiet dark carrier, AC in the car, go.",
			"Asthma, heart failure, pleural effusion, and foreign bodies can look similar at home. Imaging at the hospital is the distinction, not a home test."
		],
		nodes: {
			mouth: {
				id: "mouth",
				question: "Is the cat breathing with an open mouth, or panting at rest?",
				options: [
					{
						label: "Yes",
						result: ER
					},
					{
						label: "No, but breathing looks hard",
						next: "effort"
					},
					{
						label: "Breathing looks normal",
						next: "noise"
					}
				]
			},
			effort: {
				id: "effort",
				question: "Are the sides or belly pumping, or is the cat sitting hunched with elbows out?",
				options: [{
					label: "Yes — hunched, elbows out, or pumping",
					result: ER
				}, {
					label: "Mild, still moving around",
					result: {
						urgency: "urgent",
						title: "Same-day respiratory exam",
						summary: "Subtle effort can still be asthma or early heart failure. Do not wait overnight if it worsens.",
						actions: ["Keep the cat cool and quiet. No play.", "Call the clinic now. If gums look pale or the cat tires walking to the carrier, go to emergency."],
						avoid: ["Do not put the cat in a steamy bathroom if it panics."],
						seek: "Same-day veterinarian; emergency if effort increases."
					}
				}]
			},
			noise: {
				id: "noise",
				question: "Is there new wheeze, rattling, or a persistent cough?",
				options: [{
					label: "Yes",
					result: {
						urgency: "soon",
						title: "Clinic visit within 24 hours",
						summary: "A new cough or wheeze in a cat deserves auscultation. Watch for any open-mouth breathing.",
						actions: ["Video the breathing. Keep activity low."],
						avoid: ["Do not use essential-oil diffusers around cats."],
						seek: "Veterinarian within a day."
					}
				}, {
					label: "No",
					result: {
						urgency: "monitor",
						title: "Keep watching the resting rate",
						summary: "A sleeping cat usually takes under 30 breaths a minute. Count at rest.",
						actions: ["If the resting rate climbs or the mouth opens, this becomes an emergency."],
						avoid: [],
						seek: "Veterinarian if the rate stays high."
					}
				}]
			}
		}
	},
	{
		slug: "collapse",
		title: "Collapse or unresponsive",
		summary: "A cat who cannot stand, does not respond, or is cold and still needs a hospital, not observation.",
		redFlag: "Unresponsive, seizing, or unable to lift the head — go now.",
		image: "/images/rest-orange.jpg",
		anatomy: "neuro",
		startId: "respond",
		nodes: {
			respond: {
				id: "respond",
				question: "Does the cat respond when you say their name or touch a paw?",
				options: [{
					label: "No response, or only a flicker",
					result: ER
				}, {
					label: "Weak but aware",
					next: "stand"
				}]
			},
			stand: {
				id: "stand",
				question: "Can the cat stand and walk?",
				options: [{
					label: "Cannot stand, or dragging the back legs",
					result: ER
				}, {
					label: "Wobbly but walking",
					result: {
						urgency: "urgent",
						title: "Urgent exam today",
						summary: "Sudden weakness can be heart, inner ear, toxin, or anemia. A veterinarian should see the cat today.",
						actions: ["Carrier, quiet, no food if they may need sedation. Call ahead."],
						avoid: ["Do not give syrups or caffeine."],
						seek: "Same-day or emergency veterinarian."
					}
				}]
			}
		}
	},
	{
		slug: "hind-legs",
		title: "Hind legs weak or cold",
		summary: "A saddle thrombus cuts blood to the back legs. Cats cry, the paws go cold, and the pads may pale.",
		redFlag: "Sudden back-leg paralysis with cold paws is an emergency.",
		image: "/images/sit-brown.jpg",
		anatomy: "cardiac",
		startId: "sudden",
		advancedNotes: [
			"Feline arterial thromboembolism often comes from heart disease the family did not know about.",
			"The cat may howl, drag both hind legs, and the nails or pads look blue-gray. Do not wait for “it to wake up.”",
			"Pain control and heart care happen at the hospital. Home massage of the legs is not treatment."
		],
		nodes: {
			sudden: {
				id: "sudden",
				question: "Did the back legs suddenly fail — dragging, howling, or unable to jump?",
				options: [{
					label: "Yes, sudden",
					next: "paws"
				}, {
					label: "Slow stiffness over weeks",
					result: {
						urgency: "soon",
						title: "Arthritis or nerve clinic visit",
						summary: "Gradual hind-end weakness is still worth a workup, but it is not the same as a clot.",
						actions: ["Book a veterinarian. Note whether the cat still uses the box."],
						avoid: ["Do not give dog NSAIDs."],
						seek: "Veterinarian this week, sooner if pain is obvious."
					}
				}]
			},
			paws: {
				id: "paws",
				question: "Are the back paws colder than the front, or are the pads pale/blue?",
				options: [{
					label: "Cold, pale, or the cat is crying",
					result: ER
				}, {
					label: "Warm paws, just wobbly",
					result: {
						urgency: "urgent",
						title: "Same-day exam",
						summary: "Warm paws make a clot less likely but sudden weakness is still urgent.",
						actions: ["Go in today. Keep the cat still."],
						avoid: ["Do not pull the legs to “stretch it out.”"],
						seek: "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		slug: "vomiting",
		title: "Vomiting",
		summary: "One hairball is common. Repeated vomiting, blood, or a cat who cannot keep water down is not.",
		redFlag: "Unproductive retching, a swollen belly, or vomit with blood needs a veterinarian now.",
		image: "/images/hero-orange.jpg",
		anatomy: "gi",
		startId: "times",
		nodes: {
			times: {
				id: "times",
				question: "How many times has the cat vomited in the last 12 hours?",
				options: [
					{
						label: "Three or more, or still trying",
						next: "keep"
					},
					{
						label: "Once, then fine",
						next: "look"
					},
					{
						label: "Unproductive heaving, no vomit coming",
						result: ER
					}
				]
			},
			keep: {
				id: "keep",
				question: "Can the cat keep water down?",
				options: [{
					label: "No — water comes back up",
					result: ER
				}, {
					label: "Yes, but still vomiting food or foam",
					result: {
						urgency: "urgent",
						title: "Same-day gastrointestinal exam",
						summary: "Repeated vomiting dehydrates cats quickly and can mean a foreign body, pancreatitis, or kidney disease.",
						actions: ["Withhold food until the clinic advises. Offer a little water. Carrier ready."],
						avoid: ["Do not give hydrogen peroxide or salt to induce more vomiting."],
						seek: "Same-day veterinarian."
					}
				}]
			},
			look: {
				id: "look",
				question: "Was there blood, coffee-ground material, or a string/plastic in it?",
				options: [{
					label: "Blood or a string",
					result: ER
				}, {
					label: "Hair, food, or foam, and the cat is eating",
					result: {
						urgency: "monitor",
						title: "Watch the next two meals",
						summary: "A single vomit with a normal appetite can be a hairball. A second episode today changes the plan.",
						actions: ["If it repeats, or appetite drops, go in."],
						avoid: ["Do not pull any string hanging from the mouth or anus."],
						seek: "Veterinarian if it repeats."
					}
				}]
			}
		}
	},
	{
		slug: "not-eating",
		title: "Not eating",
		summary: "Cats that skip meals risk hepatic lipidosis. Forty-eight hours without food is never a wait-and-see.",
		redFlag: "A cat who has not eaten in a day, especially if overweight, needs a veterinarian.",
		image: "/images/window-kit.jpg",
		anatomy: "gi",
		startId: "hours",
		advancedNotes: [
			"An overweight cat that stops eating can develop hepatic lipidosis within days. Early feeding support at a clinic is kinder than waiting.",
			"Check the mouth: a broken tooth, ulcer, or a string under the tongue can look like “picky eating.”",
			"Offer the usual food, then a slightly warmed wet food. If both are refused, do not force syringe-feed until a vet has examined."
		],
		nodes: {
			hours: {
				id: "hours",
				question: "How long since a real meal (not a lick)?",
				options: [{
					label: "More than 24 hours",
					next: "drink"
				}, {
					label: "Skipped one meal, still drinking",
					result: {
						urgency: "soon",
						title: "Offer food and reassess tonight",
						summary: "One skipped meal can be stress. A second missed meal in a cat is a clinic day.",
						actions: ["Warm wet food. If dinner is refused, book the veterinarian."],
						avoid: ["Do not fast a cat “to reset” them."],
						seek: "Veterinarian if the next meal is refused."
					}
				}]
			},
			drink: {
				id: "drink",
				question: "Is the cat drinking and urinating?",
				options: [{
					label: "Not drinking, or hiding and limp",
					result: ER
				}, {
					label: "Drinking, just not eating",
					result: {
						urgency: "urgent",
						title: "Clinic today for anorexia",
						summary: "A cat off food for a day needs an exam, bloodwork, and a feeding plan.",
						actions: ["Bring a list of what was offered. Note any vomiting or drooling."],
						avoid: ["Do not syringe fatty leftovers or milk."],
						seek: "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		slug: "toxin",
		title: "Possible poison",
		summary: "Lilies, acetaminophen, antifreeze, and many household products are feline crises.",
		redFlag: "Known lily ingestion, human pain medicine, or antifreeze — go now, do not wait for signs.",
		image: "/images/field-tabby.jpg",
		startId: "what",
		nodes: {
			what: {
				id: "what",
				question: "What might the cat have gotten into?",
				options: [
					{
						label: "Lily, tulip, or other plant",
						result: ER
					},
					{
						label: "Pill, syrup, or sugar-free gum",
						result: ER
					},
					{
						label: "Antifreeze, pesticide, or cleaner",
						result: ER
					},
					{
						label: "Not sure — just acting odd",
						next: "odd"
					}
				]
			},
			odd: {
				id: "odd",
				question: "Is the cat drooling, wobbly, seizing, or hiding after being out of sight?",
				options: [{
					label: "Yes",
					result: ER
				}, {
					label: "No, I am guessing",
					result: {
						urgency: "soon",
						title: "Call poison control and a clinic",
						summary: "If exposure is only possible, still call ASPCA Animal Poison Control and your veterinarian with the product name.",
						actions: ["Photograph the label. Do not induce vomiting unless a veterinarian tells you to.", "Call ASPCA Animal Poison Control: 888-426-4435 (consultation fee may apply)."],
						avoid: ["Do not give milk, salt, or hydrogen peroxide unless instructed."],
						seek: "Poison control plus veterinarian."
					}
				}]
			}
		}
	},
	{
		slug: "seizure",
		title: "Seizure",
		summary: "A seizing cat needs space, a timer, and a hospital if it lasts or repeats.",
		redFlag: "A seizure longer than three minutes, or cluster seizures, is an emergency.",
		image: "/images/portrait-gray.jpg",
		anatomy: "neuro",
		startId: "now",
		nodes: {
			now: {
				id: "now",
				question: "Is the cat seizing right now?",
				options: [{
					label: "Yes",
					result: {
						urgency: "emergency",
						title: "Protect, time, then go",
						summary: "Do not put hands near the mouth. Dim the room. Time the event. If it passes three minutes or a second one starts, go to emergency.",
						actions: ["Move furniture away. Do not splash water on the cat.", "When the motion stops, wrap in a towel and carrier. Call the hospital."],
						avoid: ["Do not put a spoon or fingers in the mouth."],
						seek: "Emergency veterinary hospital."
					}
				}, {
					label: "It stopped",
					next: "length"
				}]
			},
			length: {
				id: "length",
				question: "How long did it last, and has it happened before today?",
				options: [{
					label: "Over three minutes, or more than one",
					result: ER
				}, {
					label: "Under three minutes, first time",
					result: {
						urgency: "urgent",
						title: "Same-day neurological exam",
						summary: "A first seizure still needs a veterinarian the same day to look for toxin, liver disease, or low blood sugar.",
						actions: ["Write down what you saw. Keep the cat in a quiet room."],
						avoid: ["Do not start human anticonvulsants."],
						seek: "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		slug: "trauma",
		title: "Trauma or bleeding",
		summary: "Falls, cars, dog bites, and bleeding that will not clot need a hospital even if the cat walks it off.",
		redFlag: "Bleeding you cannot stop, a limb at an odd angle, or a cat hit by a car — go now.",
		image: "/images/sit-brown.jpg",
		anatomy: "trauma",
		startId: "bleed",
		nodes: { bleed: {
			id: "bleed",
			question: "Is there active bleeding, a wound you can see bone through, or a crushed limb?",
			options: [{
				label: "Yes",
				result: ER
			}, {
				label: "Bite or scratch, cat is walking",
				result: {
					urgency: "urgent",
					title: "Same-day wound care",
					summary: "Cat and dog bites seed abscesses. A walking cat can still have internal injury after a fall or car.",
					actions: ["Cover with a clean cloth. No ointments. Clinic today."],
					avoid: ["Do not use hydrogen peroxide deep in a wound or wrap so tight the limb cools."],
					seek: "Same-day veterinarian; emergency if pale or breathing hard."
				}
			}]
		} }
	},
	{
		slug: "hiding",
		title: "Hiding or sudden lethargy",
		summary: "A social cat who vanishes under the bed and will not be lured out is telling you something.",
		redFlag: "Hiding plus no urine, no food, or labored breathing is an emergency, not a mood.",
		image: "/images/tuxedo.jpg",
		startId: "who",
		nodes: {
			who: {
				id: "who",
				question: "Is this a cat who usually greets you, now refusing to come out?",
				options: [{
					label: "Yes, sudden change",
					next: "pair"
				}, {
					label: "Always a closet cat",
					result: {
						urgency: "monitor",
						title: "Watch eating and the box",
						summary: "A lifelong shy cat is not automatically sick. Track food weight and clumps.",
						actions: ["If intake drops or the box is empty, run the other evaluators."],
						avoid: ["Do not drag the cat out for a photograph."],
						seek: "Veterinarian if patterns change."
					}
				}]
			},
			pair: {
				id: "pair",
				question: "Any of these with the hiding: not eating, not urinating, crying, or breathing hard?",
				options: [{
					label: "Yes",
					result: ER
				}, {
					label: "Just hiding, still eating",
					result: {
						urgency: "soon",
						title: "Quiet check-in, then a clinic if it lasts",
						summary: "Pain and fever often look like hiding. If it lasts more than a day, get an exam.",
						actions: ["Offer food in the hiding spot. Book the clinic if tomorrow looks the same."],
						avoid: ["Do not assume it is “mad at you.”"],
						seek: "Veterinarian within 24–48 hours if it continues."
					}
				}]
			}
		}
	},
	{
		slug: "eye",
		title: "Eye pain or sudden change",
		summary: "A squinting eye can lose vision in a day. Keep the cat from pawing and get a veterinarian.",
		redFlag: "A bulging eye, a cloudy cornea, or a pupil that will not constrict needs urgent care.",
		image: "/images/close-orange.jpg",
		startId: "look",
		nodes: { look: {
			id: "look",
			question: "What do you see?",
			options: [
				{
					label: "Eye out of the socket, or bleeding",
					result: ER
				},
				{
					label: "Squinting, pawing, or a cloudy surface",
					result: {
						urgency: "urgent",
						title: "Same-day eye exam",
						summary: "Ulcers and uveitis hurt and progress. Do not put leftover drops in the eye.",
						actions: ["Dim the room. Elizabethan collar if the cat is rubbing. Clinic today."],
						avoid: ["No visine, no leftover dog drops."],
						seek: "Same-day veterinarian."
					}
				},
				{
					label: "A little goop, both eyes open",
					result: {
						urgency: "soon",
						title: "Clinic if it lasts two days",
						summary: "Mild discharge can be a virus. One closed eye is more urgent than two slightly crusty ones.",
						actions: ["Wipe with warm water on a cloth. Book if it worsens."],
						avoid: ["Do not use leftover human ointment."],
						seek: "Veterinarian if it persists."
					}
				}
			]
		} }
	},
	{
		slug: "diarrhea",
		title: "Diarrhea",
		summary: "One soft stool is common. Blood, black tar, or a kitten with diarrhea is a different problem.",
		redFlag: "Black tarry stool, large amounts of blood, or a collapsed kitten — emergency.",
		image: "/images/frame-orange.jpg",
		anatomy: "gi",
		startId: "blood",
		nodes: { blood: {
			id: "blood",
			question: "Is there blood, black tar, or is this a kitten?",
			options: [{
				label: "Black tar, lots of blood, or a weak kitten",
				result: ER
			}, {
				label: "Soft or watery, cat still playful",
				result: {
					urgency: "soon",
					title: "Hydration and a clinic if it lasts",
					summary: "Adult cats with one day of diarrhea and a good appetite can be watched closely. Two days, or any lethargy, needs a veterinarian.",
					actions: ["Water always available. Photograph the stool. No milk."],
					avoid: ["Do not give Pepto or Imodium unless a veterinarian prescribed it for this cat."],
					seek: "Veterinarian if it lasts 48 hours or the cat slows down."
				}
			}]
		} }
	}
];
function getSymptom(slug) {
	return SYMPTOMS.find((s) => s.slug === slug);
}
var PROTOCOLS = [
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
			"If you can do so without delaying, photograph the box."
		],
		onTheWay: ["Keep the carrier stable. No food.", "Do not express the bladder at home."],
		never: ["Do not give leftover urinary pills and wait.", "Do not assume constipation — the postures look similar."],
		hospital: "The hospital will confirm a firm bladder, start pain control and fluids, and relieve the obstruction under care. Kidney values and potassium guide the next day.",
		after: ["Ask for the discharge diet, pain plan, and a recheck of kidney values.", "Add water stations. Keep the box impeccably clean."]
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
			"Call ahead so oxygen is ready."
		],
		onTheWay: ["Sit the carrier so the cat can keep a crouched posture. Do not force the mouth closed."],
		never: ["Do not give an inhaler meant for a person unless already prescribed for this cat.", "Do not hold the cat on its back."],
		hospital: "Expect oxygen first, then imaging. Handling is kept short on purpose."
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
			"Do not induce vomiting unless a veterinarian tells you to for this poison."
		],
		onTheWay: ["Note the time of exposure and any amount you saw swallowed."],
		never: ["Milk, salt, oils, and hydrogen peroxide as home remedies."],
		hospital: "Decontamination, bloodwork, and often IV fluids for 48 hours with lily or antifreeze exposure."
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
			"Call emergency: “sudden hind-leg paralysis.”"
		],
		onTheWay: ["Keep the cat warm and still. No massage of the legs."],
		never: ["Do not delay because the cat can still sit up."],
		hospital: "Pain control, heart assessment, and a frank talk about options. This is a hospital decision, not a home one."
	},
	{
		slug: "trauma",
		title: "Trauma and bleeding",
		minutes: "Stabilize and go",
		summary: "Cats walk away from injuries that are still bleeding inside.",
		image: "/images/portrait-gray.jpg",
		why: "High-rise falls, cars, and dog bites cause lung bruises, ruptured bladders, and delayed shock.",
		doNow: ["Towel wrap. Firm pressure on obvious bleeding with a clean cloth.", "Carrier even if the cat “seems fine.”"],
		onTheWay: ["Keep the spine as straight as you reasonably can if a fall or car was involved."],
		never: ["Tourniquets on a tail or leg unless a veterinarian is talking you through it."],
		hospital: "Pain control, imaging, and observation. Walking is not clearance."
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
			"Go to emergency even if panting slows."
		],
		onTheWay: ["Air conditioning on. Offer a little water if the cat is alert."],
		never: ["Ice baths, which can shut down the skin’s blood flow."],
		hospital: "Fluids, temperature control, and watching the kidneys and clotting."
	},
	{
		slug: "diabetic-crisis",
		title: "Diabetic crisis",
		minutes: "If known diabetic — do not wait",
		summary: "A diabetic cat who is vomiting, too weak to stand, or breathing in deep slow pulls needs a hospital.",
		image: "/images/hero-orange.jpg",
		why: "Ketoacidosis and hypoglycemia can look similar at home. Guessing with extra insulin is dangerous.",
		doNow: ["Bring the insulin bottle and last dose time.", "If the cat is seizing and you have been taught to rub corn syrup on the gums, do that — then go."],
		onTheWay: ["Do not give another full insulin dose on the way."],
		never: ["Doubling insulin because a reading looked high on a home meter you do not trust."],
		hospital: "Glucose, ketones, and fluids. Dosing resumes only after the numbers are known."
	},
	{
		slug: "birth",
		title: "Labor that is not progressing",
		minutes: "If a kitten is stuck, go",
		summary: "More than 20 minutes of active straining without a kitten, or a kitten visible and not moving, is dystocia.",
		image: "/images/window-kit.jpg",
		why: "A stuck kitten becomes a surgical emergency. Waiting overnight risks the queen and the litter.",
		doNow: ["Call emergency with the time labor started and how many kittens you expected.", "Keep the queen warm and quiet."],
		onTheWay: ["Bring any kittens already born, in a warm box."],
		never: ["Pulling a kitten by the legs."],
		hospital: "Exam, calcium/glucose check, and often surgery."
	}
];
function getProtocol(slug) {
	return PROTOCOLS.find((p) => p.slug === slug);
}
var slug = (d) => object({ slug: string() }).parse(d);
var loadManual_createServerFn_handler = createServerRpc({
	id: "5a91778784009f03f811e4b6e6766a2ecf8bf0cd91d8b195ae7cfdf33fe9f0dd",
	name: "loadManual",
	filename: "src/lib/server/content.ts"
}, (opts) => loadManual.__executeServer(opts));
var loadManual = createServerFn({ method: "GET" }).middleware([optionalSession]).validator(slug).handler(loadManual_createServerFn_handler, async ({ context, data }) => {
	const m = getManual(data.slug);
	if (!m) return null;
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const tier = context.userId ? (await readMembership(context.userId)).tier : 0;
	return {
		...m,
		sections: tier >= 1 ? m.sections : []
	};
});
var loadWellness_createServerFn_handler = createServerRpc({
	id: "f942b457fad4ec6c1c53fc4f56e5c31dd1a5d14e4fe982ed733c25527fc8b3d7",
	name: "loadWellness",
	filename: "src/lib/server/content.ts"
}, (opts) => loadWellness.__executeServer(opts));
var loadWellness = createServerFn({ method: "GET" }).middleware([optionalSession]).handler(loadWellness_createServerFn_handler, async ({ context }) => {
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const tier = context.userId ? (await readMembership(context.userId)).tier : 0;
	return {
		tier,
		today: todaysTip(),
		tips: WELLNESS_TIPS.map((t) => ({
			...t,
			body: tier >= 1 ? t.body : ""
		})),
		archives: ARCHIVES.map((a) => ({
			...a,
			body: tier >= 3 ? a.body : "",
			items: tier >= 3 ? a.items : []
		}))
	};
});
var loadAdvanced_createServerFn_handler = createServerRpc({
	id: "f500525350a6d32eed3993e28138bfef8524c6b0cd35d078cea3bcaa7792d743",
	name: "loadAdvanced",
	filename: "src/lib/server/content.ts"
}, (opts) => loadAdvanced.__executeServer(opts));
var loadAdvanced = createServerFn({ method: "GET" }).middleware([optionalSession]).validator(slug).handler(loadAdvanced_createServerFn_handler, async ({ context, data }) => {
	const { readMembership } = await import("./billing-runtime.server-yxC_hiyl.mjs");
	const tier = context.userId ? (await readMembership(context.userId)).tier : 0;
	return {
		notes: tier >= 2 ? getSymptom(data.slug)?.advancedNotes || [] : [],
		after: tier >= 2 ? getProtocol(data.slug)?.after || [] : []
	};
});
var dailyNote_createServerFn_handler = createServerRpc({
	id: "36e3162110e9755874c4b0ac8913341958fd7fe4c91de6087983002cddf7e56e",
	name: "dailyNote",
	filename: "src/lib/server/content.ts"
}, (opts) => dailyNote.__executeServer(opts));
var dailyNote = createServerFn({ method: "GET" }).handler(dailyNote_createServerFn_handler, () => todaysTip());
//#endregion
export { dailyNote_createServerFn_handler, loadAdvanced_createServerFn_handler, loadManual_createServerFn_handler, loadWellness_createServerFn_handler };

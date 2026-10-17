//#region node_modules/.nitro/vite/services/ssr/assets/symptoms-Aj-xjOYC.js
var SYMPTOMS = [
	{
		"slug": "not-urinating",
		"title": "Straining or not urinating",
		"summary": "A male cat who cannot pass urine can die within hours. This is the most missed feline emergency.",
		"redFlag": "Straining in the box with little or no urine — especially in males — is an emergency.",
		"image": "/images/close-tabby.jpg",
		"anatomy": "urinary",
		"startId": "strain",
		"nodes": {
			"strain": {
				"id": "strain",
				"question": "Is your cat in or around the litter box, straining, crying, or visiting repeatedly?",
				"detail": "Watch the posture: a hunched squat with no stream is different from a normal, brief urination.",
				"options": [
					{
						"label": "Yes — straining or many visits",
						"next": "volume"
					},
					{
						"label": "Not sure what I am seeing",
						"next": "volume"
					},
					{
						"label": "No, urine looks normal",
						"next": "other"
					}
				]
			},
			"volume": {
				"id": "volume",
				"question": "How much urine is actually in the box?",
				"options": [
					{
						"label": "None, or a few drops",
						"next": "sex"
					},
					{
						"label": "Small spots, maybe with blood",
						"next": "sex"
					},
					{
						"label": "A normal clump or puddle",
						"next": "blood"
					}
				]
			},
			"sex": {
				"id": "sex",
				"question": "Is this a male cat (including neutered males)?",
				"detail": "Males have a narrow urethra that plugs easily. Females can still have dangerous cystitis, but complete blockage is far more common in males.",
				"options": [{
					"label": "Male",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Female",
					"result": {
						"urgency": "urgent",
						"title": "Same-day veterinary care",
						"summary": "A female cat producing little or no urine, or only blood spots, still needs a veterinarian today. Do not wait if she is crying, hiding, or vomiting.",
						"actions": [
							"Call your clinic or an emergency hospital and describe “straining with little urine.”",
							"Bring a photo of the box and the cat in a carrier.",
							"If she becomes lethargic, vomits, or still produces nothing, go to emergency now."
						],
						"avoid": ["Do not give leftover antibiotics or pain medicine from another pet."],
						"seek": "Same-day veterinarian; emergency if she declines."
					}
				}]
			},
			"blood": {
				"id": "blood",
				"question": "Is there blood on the litter, or is urination painful?",
				"options": [{
					"label": "Blood, crying, or licking the rear",
					"result": {
						"urgency": "urgent",
						"title": "Same-day care for painful urination",
						"summary": "Blood in urine with a normal volume often means cystitis or crystals. It is painful and can progress to obstruction in males.",
						"actions": [
							"See a veterinarian today.",
							"Keep water available in more than one quiet place.",
							"Note how many clumps appear over the next few hours."
						],
						"avoid": ["Do not switch foods abruptly or add human medicine."],
						"seek": "Same-day veterinarian."
					}
				}, {
					"label": "No blood, normal posture",
					"result": {
						"urgency": "monitor",
						"title": "Watch water and the box",
						"summary": "If the stream is normal and the cat is otherwise himself, keep watching for 12 hours.",
						"actions": ["Count clumps. Any sudden drop in volume with straining becomes an emergency."],
						"avoid": ["Do not ignore a later change to straining with no urine."],
						"seek": "Clinic if anything changes; emergency if volume drops."
					}
				}]
			},
			"other": {
				"id": "other",
				"question": "Is the cat otherwise eating, walking, and breathing normally?",
				"options": [{
					"label": "Yes",
					"result": {
						"urgency": "monitor",
						"title": "Keep a box log",
						"summary": "A single normal urination is reassuring. Track the next two.",
						"actions": ["If the next visits look strained or empty, start this evaluator again and go in."],
						"avoid": ["Do not assume the problem is “constipation” without a vet — owners often mix the two up."],
						"seek": "Veterinarian if the pattern changes."
					}
				}, {
					"label": "No — vomiting, hiding, or weak",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}]
			}
		}
	},
	{
		"slug": "breathing",
		"title": "Breathing trouble",
		"summary": "Cats hide respiratory distress until they are close to collapse. Open-mouth breathing is never normal rest.",
		"redFlag": "Open-mouth breathing, blue/gray gums, or the belly pumping hard is an emergency.",
		"image": "/images/hero-tabby.jpg",
		"anatomy": "respiratory",
		"startId": "mouth",
		"nodes": {
			"mouth": {
				"id": "mouth",
				"question": "Is the cat breathing with an open mouth, or panting at rest?",
				"options": [
					{
						"label": "Yes",
						"result": {
							"urgency": "emergency",
							"title": "Emergency veterinary care now",
							"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
							"actions": [
								"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
								"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
								"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
							],
							"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
							"seek": "Nearest emergency veterinary hospital. Go now."
						}
					},
					{
						"label": "No, but breathing looks hard",
						"next": "effort"
					},
					{
						"label": "Breathing looks normal",
						"next": "noise"
					}
				]
			},
			"effort": {
				"id": "effort",
				"question": "Are the sides or belly pumping, or is the cat sitting hunched with elbows out?",
				"options": [{
					"label": "Yes — hunched, elbows out, or pumping",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Mild, still moving around",
					"result": {
						"urgency": "urgent",
						"title": "Same-day respiratory exam",
						"summary": "Subtle effort can still be asthma or early heart failure. Do not wait overnight if it worsens.",
						"actions": ["Keep the cat cool and quiet. No play.", "Call the clinic now. If gums look pale or the cat tires walking to the carrier, go to emergency."],
						"avoid": ["Do not put the cat in a steamy bathroom if it panics."],
						"seek": "Same-day veterinarian; emergency if effort increases."
					}
				}]
			},
			"noise": {
				"id": "noise",
				"question": "Is there new wheeze, rattling, or a persistent cough?",
				"options": [{
					"label": "Yes",
					"result": {
						"urgency": "soon",
						"title": "Clinic visit within 24 hours",
						"summary": "A new cough or wheeze in a cat deserves auscultation. Watch for any open-mouth breathing.",
						"actions": ["Video the breathing. Keep activity low."],
						"avoid": ["Do not use essential-oil diffusers around cats."],
						"seek": "Veterinarian within a day."
					}
				}, {
					"label": "No",
					"result": {
						"urgency": "monitor",
						"title": "Keep watching the resting rate",
						"summary": "A sleeping cat usually takes under 30 breaths a minute. Count at rest.",
						"actions": ["If the resting rate climbs or the mouth opens, this becomes an emergency."],
						"avoid": [],
						"seek": "Veterinarian if the rate stays high."
					}
				}]
			}
		}
	},
	{
		"slug": "collapse",
		"title": "Collapse or unresponsive",
		"summary": "A cat who cannot stand, does not respond, or is cold and still needs a hospital, not observation.",
		"redFlag": "Unresponsive, seizing, or unable to lift the head — go now.",
		"image": "/images/rest-orange.jpg",
		"anatomy": "neuro",
		"startId": "respond",
		"nodes": {
			"respond": {
				"id": "respond",
				"question": "Does the cat respond when you say their name or touch a paw?",
				"options": [{
					"label": "No response, or only a flicker",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Weak but aware",
					"next": "stand"
				}]
			},
			"stand": {
				"id": "stand",
				"question": "Can the cat stand and walk?",
				"options": [{
					"label": "Cannot stand, or dragging the back legs",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Wobbly but walking",
					"result": {
						"urgency": "urgent",
						"title": "Urgent exam today",
						"summary": "Sudden weakness can be heart, inner ear, toxin, or anemia. A veterinarian should see the cat today.",
						"actions": ["Carrier, quiet, no food if they may need sedation. Call ahead."],
						"avoid": ["Do not give syrups or caffeine."],
						"seek": "Same-day or emergency veterinarian."
					}
				}]
			}
		}
	},
	{
		"slug": "hind-legs",
		"title": "Hind legs weak or cold",
		"summary": "A saddle thrombus cuts blood to the back legs. Cats cry, the paws go cold, and the pads may pale.",
		"redFlag": "Sudden back-leg paralysis with cold paws is an emergency.",
		"image": "/images/sit-brown.jpg",
		"anatomy": "cardiac",
		"startId": "sudden",
		"nodes": {
			"sudden": {
				"id": "sudden",
				"question": "Did the back legs suddenly fail — dragging, howling, or unable to jump?",
				"options": [{
					"label": "Yes, sudden",
					"next": "paws"
				}, {
					"label": "Slow stiffness over weeks",
					"result": {
						"urgency": "soon",
						"title": "Arthritis or nerve clinic visit",
						"summary": "Gradual hind-end weakness is still worth a workup, but it is not the same as a clot.",
						"actions": ["Book a veterinarian. Note whether the cat still uses the box."],
						"avoid": ["Do not give dog NSAIDs."],
						"seek": "Veterinarian this week, sooner if pain is obvious."
					}
				}]
			},
			"paws": {
				"id": "paws",
				"question": "Are the back paws colder than the front, or are the pads pale/blue?",
				"options": [{
					"label": "Cold, pale, or the cat is crying",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Warm paws, just wobbly",
					"result": {
						"urgency": "urgent",
						"title": "Same-day exam",
						"summary": "Warm paws make a clot less likely but sudden weakness is still urgent.",
						"actions": ["Go in today. Keep the cat still."],
						"avoid": ["Do not pull the legs to “stretch it out.”"],
						"seek": "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		"slug": "vomiting",
		"title": "Vomiting",
		"summary": "One hairball is common. Repeated vomiting, blood, or a cat who cannot keep water down is not.",
		"redFlag": "Unproductive retching, a swollen belly, or vomit with blood needs a veterinarian now.",
		"image": "/images/hero-orange.jpg",
		"anatomy": "gi",
		"startId": "times",
		"nodes": {
			"times": {
				"id": "times",
				"question": "How many times has the cat vomited in the last 12 hours?",
				"options": [
					{
						"label": "Three or more, or still trying",
						"next": "keep"
					},
					{
						"label": "Once, then fine",
						"next": "look"
					},
					{
						"label": "Unproductive heaving, no vomit coming",
						"result": {
							"urgency": "emergency",
							"title": "Emergency veterinary care now",
							"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
							"actions": [
								"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
								"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
								"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
							],
							"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
							"seek": "Nearest emergency veterinary hospital. Go now."
						}
					}
				]
			},
			"keep": {
				"id": "keep",
				"question": "Can the cat keep water down?",
				"options": [{
					"label": "No — water comes back up",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Yes, but still vomiting food or foam",
					"result": {
						"urgency": "urgent",
						"title": "Same-day gastrointestinal exam",
						"summary": "Repeated vomiting dehydrates cats quickly and can mean a foreign body, pancreatitis, or kidney disease.",
						"actions": ["Withhold food until the clinic advises. Offer a little water. Carrier ready."],
						"avoid": ["Do not give hydrogen peroxide or salt to induce more vomiting."],
						"seek": "Same-day veterinarian."
					}
				}]
			},
			"look": {
				"id": "look",
				"question": "Was there blood, coffee-ground material, or a string/plastic in it?",
				"options": [{
					"label": "Blood or a string",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Hair, food, or foam, and the cat is eating",
					"result": {
						"urgency": "monitor",
						"title": "Watch the next two meals",
						"summary": "A single vomit with a normal appetite can be a hairball. A second episode today changes the plan.",
						"actions": ["If it repeats, or appetite drops, go in."],
						"avoid": ["Do not pull any string hanging from the mouth or anus."],
						"seek": "Veterinarian if it repeats."
					}
				}]
			}
		}
	},
	{
		"slug": "not-eating",
		"title": "Not eating",
		"summary": "Cats that skip meals risk hepatic lipidosis. Forty-eight hours without food is never a wait-and-see.",
		"redFlag": "A cat who has not eaten in a day, especially if overweight, needs a veterinarian.",
		"image": "/images/window-kit.jpg",
		"anatomy": "gi",
		"startId": "hours",
		"nodes": {
			"hours": {
				"id": "hours",
				"question": "How long since a real meal (not a lick)?",
				"options": [{
					"label": "More than 24 hours",
					"next": "drink"
				}, {
					"label": "Skipped one meal, still drinking",
					"result": {
						"urgency": "soon",
						"title": "Offer food and reassess tonight",
						"summary": "One skipped meal can be stress. A second missed meal in a cat is a clinic day.",
						"actions": ["Warm wet food. If dinner is refused, book the veterinarian."],
						"avoid": ["Do not fast a cat “to reset” them."],
						"seek": "Veterinarian if the next meal is refused."
					}
				}]
			},
			"drink": {
				"id": "drink",
				"question": "Is the cat drinking and urinating?",
				"options": [{
					"label": "Not drinking, or hiding and limp",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Drinking, just not eating",
					"result": {
						"urgency": "urgent",
						"title": "Clinic today for anorexia",
						"summary": "A cat off food for a day needs an exam, bloodwork, and a feeding plan.",
						"actions": ["Bring a list of what was offered. Note any vomiting or drooling."],
						"avoid": ["Do not syringe fatty leftovers or milk."],
						"seek": "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		"slug": "toxin",
		"title": "Possible poison",
		"summary": "Lilies, acetaminophen, antifreeze, and many household products are feline crises.",
		"redFlag": "Known lily ingestion, human pain medicine, or antifreeze — go now, do not wait for signs.",
		"image": "/images/field-tabby.jpg",
		"startId": "what",
		"nodes": {
			"what": {
				"id": "what",
				"question": "What might the cat have gotten into?",
				"options": [
					{
						"label": "Lily, tulip, or other plant",
						"result": {
							"urgency": "emergency",
							"title": "Emergency veterinary care now",
							"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
							"actions": [
								"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
								"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
								"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
							],
							"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
							"seek": "Nearest emergency veterinary hospital. Go now."
						}
					},
					{
						"label": "Pill, syrup, or sugar-free gum",
						"result": {
							"urgency": "emergency",
							"title": "Emergency veterinary care now",
							"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
							"actions": [
								"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
								"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
								"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
							],
							"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
							"seek": "Nearest emergency veterinary hospital. Go now."
						}
					},
					{
						"label": "Antifreeze, pesticide, or cleaner",
						"result": {
							"urgency": "emergency",
							"title": "Emergency veterinary care now",
							"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
							"actions": [
								"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
								"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
								"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
							],
							"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
							"seek": "Nearest emergency veterinary hospital. Go now."
						}
					},
					{
						"label": "Not sure — just acting odd",
						"next": "odd"
					}
				]
			},
			"odd": {
				"id": "odd",
				"question": "Is the cat drooling, wobbly, seizing, or hiding after being out of sight?",
				"options": [{
					"label": "Yes",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "No, I am guessing",
					"result": {
						"urgency": "soon",
						"title": "Call poison control and a clinic",
						"summary": "If exposure is only possible, still call ASPCA Animal Poison Control and your veterinarian with the product name.",
						"actions": ["Photograph the label. Do not induce vomiting unless a veterinarian tells you to.", "Call ASPCA Animal Poison Control: 888-426-4435 (consultation fee may apply)."],
						"avoid": ["Do not give milk, salt, or hydrogen peroxide unless instructed."],
						"seek": "Poison control plus veterinarian."
					}
				}]
			}
		}
	},
	{
		"slug": "seizure",
		"title": "Seizure",
		"summary": "A seizing cat needs space, a timer, and a hospital if it lasts or repeats.",
		"redFlag": "A seizure longer than three minutes, or cluster seizures, is an emergency.",
		"image": "/images/portrait-gray.jpg",
		"anatomy": "neuro",
		"startId": "now",
		"nodes": {
			"now": {
				"id": "now",
				"question": "Is the cat seizing right now?",
				"options": [{
					"label": "Yes",
					"result": {
						"urgency": "emergency",
						"title": "Protect, time, then go",
						"summary": "Do not put hands near the mouth. Dim the room. Time the event. If it passes three minutes or a second one starts, go to emergency.",
						"actions": ["Move furniture away. Do not splash water on the cat.", "When the motion stops, wrap in a towel and carrier. Call the hospital."],
						"avoid": ["Do not put a spoon or fingers in the mouth."],
						"seek": "Emergency veterinary hospital."
					}
				}, {
					"label": "It stopped",
					"next": "length"
				}]
			},
			"length": {
				"id": "length",
				"question": "How long did it last, and has it happened before today?",
				"options": [{
					"label": "Over three minutes, or more than one",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Under three minutes, first time",
					"result": {
						"urgency": "urgent",
						"title": "Same-day neurological exam",
						"summary": "A first seizure still needs a veterinarian the same day to look for toxin, liver disease, or low blood sugar.",
						"actions": ["Write down what you saw. Keep the cat in a quiet room."],
						"avoid": ["Do not start human anticonvulsants."],
						"seek": "Same-day veterinarian."
					}
				}]
			}
		}
	},
	{
		"slug": "trauma",
		"title": "Trauma or bleeding",
		"summary": "Falls, cars, dog bites, and bleeding that will not clot need a hospital even if the cat walks it off.",
		"redFlag": "Bleeding you cannot stop, a limb at an odd angle, or a cat hit by a car — go now.",
		"image": "/images/sit-brown.jpg",
		"anatomy": "trauma",
		"startId": "bleed",
		"nodes": { "bleed": {
			"id": "bleed",
			"question": "Is there active bleeding, a wound you can see bone through, or a crushed limb?",
			"options": [{
				"label": "Yes",
				"result": {
					"urgency": "emergency",
					"title": "Emergency veterinary care now",
					"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
					"actions": [
						"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
						"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
						"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
					],
					"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
					"seek": "Nearest emergency veterinary hospital. Go now."
				}
			}, {
				"label": "Bite or scratch, cat is walking",
				"result": {
					"urgency": "urgent",
					"title": "Same-day wound care",
					"summary": "Cat and dog bites seed abscesses. A walking cat can still have internal injury after a fall or car.",
					"actions": ["Cover with a clean cloth. No ointments. Clinic today."],
					"avoid": ["Do not use hydrogen peroxide deep in a wound or wrap so tight the limb cools."],
					"seek": "Same-day veterinarian; emergency if pale or breathing hard."
				}
			}]
		} }
	},
	{
		"slug": "hiding",
		"title": "Hiding or sudden lethargy",
		"summary": "A social cat who vanishes under the bed and will not be lured out is telling you something.",
		"redFlag": "Hiding plus no urine, no food, or labored breathing is an emergency, not a mood.",
		"image": "/images/tuxedo.jpg",
		"startId": "who",
		"nodes": {
			"who": {
				"id": "who",
				"question": "Is this a cat who usually greets you, now refusing to come out?",
				"options": [{
					"label": "Yes, sudden change",
					"next": "pair"
				}, {
					"label": "Always a closet cat",
					"result": {
						"urgency": "monitor",
						"title": "Watch eating and the box",
						"summary": "A lifelong shy cat is not automatically sick. Track food weight and clumps.",
						"actions": ["If intake drops or the box is empty, run the other evaluators."],
						"avoid": ["Do not drag the cat out for a photograph."],
						"seek": "Veterinarian if patterns change."
					}
				}]
			},
			"pair": {
				"id": "pair",
				"question": "Any of these with the hiding: not eating, not urinating, crying, or breathing hard?",
				"options": [{
					"label": "Yes",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				}, {
					"label": "Just hiding, still eating",
					"result": {
						"urgency": "soon",
						"title": "Quiet check-in, then a clinic if it lasts",
						"summary": "Pain and fever often look like hiding. If it lasts more than a day, get an exam.",
						"actions": ["Offer food in the hiding spot. Book the clinic if tomorrow looks the same."],
						"avoid": ["Do not assume it is “mad at you.”"],
						"seek": "Veterinarian within 24–48 hours if it continues."
					}
				}]
			}
		}
	},
	{
		"slug": "eye",
		"title": "Eye pain or sudden change",
		"summary": "A squinting eye can lose vision in a day. Keep the cat from pawing and get a veterinarian.",
		"redFlag": "A bulging eye, a cloudy cornea, or a pupil that will not constrict needs urgent care.",
		"image": "/images/close-orange.jpg",
		"startId": "look",
		"nodes": { "look": {
			"id": "look",
			"question": "What do you see?",
			"options": [
				{
					"label": "Eye out of the socket, or bleeding",
					"result": {
						"urgency": "emergency",
						"title": "Emergency veterinary care now",
						"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
						"actions": [
							"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
							"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
							"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
						],
						"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
						"seek": "Nearest emergency veterinary hospital. Go now."
					}
				},
				{
					"label": "Squinting, pawing, or a cloudy surface",
					"result": {
						"urgency": "urgent",
						"title": "Same-day eye exam",
						"summary": "Ulcers and uveitis hurt and progress. Do not put leftover drops in the eye.",
						"actions": ["Dim the room. Elizabethan collar if the cat is rubbing. Clinic today."],
						"avoid": ["No visine, no leftover dog drops."],
						"seek": "Same-day veterinarian."
					}
				},
				{
					"label": "A little goop, both eyes open",
					"result": {
						"urgency": "soon",
						"title": "Clinic if it lasts two days",
						"summary": "Mild discharge can be a virus. One closed eye is more urgent than two slightly crusty ones.",
						"actions": ["Wipe with warm water on a cloth. Book if it worsens."],
						"avoid": ["Do not use leftover human ointment."],
						"seek": "Veterinarian if it persists."
					}
				}
			]
		} }
	},
	{
		"slug": "diarrhea",
		"title": "Diarrhea",
		"summary": "One soft stool is common. Blood, black tar, or a kitten with diarrhea is a different problem.",
		"redFlag": "Black tarry stool, large amounts of blood, or a collapsed kitten — emergency.",
		"image": "/images/frame-orange.jpg",
		"anatomy": "gi",
		"startId": "blood",
		"nodes": { "blood": {
			"id": "blood",
			"question": "Is there blood, black tar, or is this a kitten?",
			"options": [{
				"label": "Black tar, lots of blood, or a weak kitten",
				"result": {
					"urgency": "emergency",
					"title": "Emergency veterinary care now",
					"summary": "These signs are treated as time-critical. Do not wait for regular clinic hours. Call the nearest emergency hospital on the way.",
					"actions": [
						"Place the cat in a hard-sided carrier with a towel. Do not delay to feed or medicate unless a veterinarian already instructed you.",
						"Call the hospital so they can prepare. Say the observed signs in one sentence (for example: “male cat straining, no urine”).",
						"If the cat is collapsing, keep the carrier level and warm. Do not attempt oral medication."
					],
					"avoid": ["Do not give human pain medicine. Acetaminophen and ibuprofen are toxic to cats.", "Do not wait to “see if it passes overnight.”"],
					"seek": "Nearest emergency veterinary hospital. Go now."
				}
			}, {
				"label": "Soft or watery, cat still playful",
				"result": {
					"urgency": "soon",
					"title": "Hydration and a clinic if it lasts",
					"summary": "Adult cats with one day of diarrhea and a good appetite can be watched closely. Two days, or any lethargy, needs a veterinarian.",
					"actions": ["Water always available. Photograph the stool. No milk."],
					"avoid": ["Do not give Pepto or Imodium unless a veterinarian prescribed it for this cat."],
					"seek": "Veterinarian if it lasts 48 hours or the cat slows down."
				}
			}]
		} }
	}
];
var getSymptom = (slug) => SYMPTOMS.find((x) => x.slug === slug);
function urgencyLabel(u) {
	return u === "emergency" ? "Emergency" : u === "urgent" ? "Same day" : u === "soon" ? "Soon" : "Monitor";
}
//#endregion
export { getSymptom as n, urgencyLabel as r, SYMPTOMS as t };

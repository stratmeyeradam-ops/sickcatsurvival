//#region node_modules/.nitro/vite/services/ssr/assets/tiers-Z3ErO98v.js
var TIERS = [
	{
		id: 1,
		slug: "field-notes",
		name: "Field Notes",
		priceCents: 100,
		cadence: "month",
		blurb: "The wellness library, practical care manuals, and clinic preparation tools.",
		perks: [
			"Daily feline wellness notes",
			"Standard care manuals",
			"Clinic preparation checklists"
		]
	},
	{
		id: 2,
		slug: "emergency-desk",
		name: "Emergency Desk",
		priceCents: 500,
		cadence: "month",
		blurb: "Advanced evaluators, deep emergency protocols, and a seat on the message board.",
		perks: [
			"Everything in Field Notes",
			"Advanced symptom evaluators",
			"Deep-dive emergency protocols",
			"Post and reply on the community board"
		]
	},
	{
		id: 3,
		slug: "archive",
		name: "Archive",
		priceCents: 1e3,
		cadence: "month",
		blurb: "Full digital archives, board flair, and the downloadable health-tracking toolkit.",
		perks: [
			"Everything in Emergency Desk",
			"Digital archives",
			"Organized care reference collections",
			"Health-tracking toolkit"
		]
	}
];
function tierName(tier) {
	if (tier >= 3) return "Archive";
	if (tier >= 2) return "Emergency Desk";
	if (tier >= 1) return "Field Notes";
	return "Open desk";
}
var DISCLAIMER = "Informational guidance only. This platform is not a veterinary practice and is not a substitute for licensed, professional veterinary care. If your cat is in distress, seek emergency veterinary care immediately.";
var DBA_LINE = "Operated by Feline Continuum, a dedicated DBA for educational publishing. Payments processed exclusively through Stripe. Operator identity is not published on this site.";
var POISON_LINE = "ASPCA Animal Poison Control: 888-426-4435 (consultation fee may apply).";
//#endregion
export { tierName as a, TIERS as i, DISCLAIMER as n, POISON_LINE as r, DBA_LINE as t };

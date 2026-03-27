import type { ComparisonRow } from '../types/comparison';

export const worldVsUsa: ComparisonRow[] = [
	{
		label: 'Visibility',
		left: 'Major international windows: Pro League, World Cup, continental championships; strong national-league scenes in several countries.',
		right: 'Niche outside hotbeds; biggest public spikes around Olympics and World Cup; college sports drive much domestic awareness.',
	},
	{
		label: 'Youth → elite',
		left: 'Club/academy pipelines often feed national programs with dense competition calendars.',
		right: 'Regional variation; many athletes discover the sport in school or club; travel and geography shape opportunity.',
	},
	{
		label: 'Professional play',
		left: 'Established pro or semi-pro structures in multiple nations (names and formats change — verify current leagues).',
		right: 'No large pro league equivalent to major US sports; post-college options often international or coaching/officiating.',
	},
];

export const mensVsWomens: ComparisonRow[] = [
	{
		label: 'Collegiate NCAA',
		left: 'Men’s varsity field hockey is essentially absent; male players more often pursue club, international age-group, or pathways outside NCAA “field hockey” as Americans use the term.',
		right: 'Women’s D1/D2/D3 field hockey is a major US hub with scholarships, facilities, and media (relative to men’s).',
	},
	{
		label: 'National team depth',
		left: 'Men’s programs exist but draw from a smaller US player pool; success depends on development investment and player pathways.',
		right: 'Women’s national-team pathways align more closely with NCAA timing and recruiting; larger organized participation base.',
	},
	{
		label: 'Global comparison',
		left: 'Internationally, men’s and women’s national teams both draw from deep club systems; gender differences vary by country, not by a single pattern.',
		right: 'American women more often have a visible “school-to-NCAA-to-national team” story; American men may look more like multi-sport or late-specialization paths.',
	},
];

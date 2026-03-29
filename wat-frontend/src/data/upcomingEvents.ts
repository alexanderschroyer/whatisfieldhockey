export type UpcomingEvent = {
	title: string;
	dateLabel: string;
	location?: string;
	href?: string;
};

/** Add confirmed events to surface “Up next” on the home page ProgramTeaser. Keep empty until dates are public. */
export const upcomingEvents: UpcomingEvent[] = [];

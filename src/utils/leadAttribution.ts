const STORAGE_KEY = "lead_attribution";

export interface LeadAttribution {
	page: string;
	landingPage: string;
	utmSource: string;
	utmMedium: string;
	utmCampaign: string;
}

export function getLeadAttribution(): LeadAttribution {
	const fallback = {
		page: window.location.pathname,
		landingPage: window.location.pathname,
		utmSource: "direct",
		utmMedium: "none",
		utmCampaign: "none",
	};

	try {
		const query = new URLSearchParams(window.location.search);
		const saved = sessionStorage.getItem(STORAGE_KEY);
		const previous = saved ? JSON.parse(saved) : null;
		const attribution = {
			page: window.location.pathname,
			landingPage: previous?.landingPage || window.location.pathname,
			utmSource: query.get("utm_source") || previous?.utmSource || "direct",
			utmMedium: query.get("utm_medium") || previous?.utmMedium || "none",
			utmCampaign: query.get("utm_campaign") || previous?.utmCampaign || "none",
		};
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
		return attribution;
	} catch {
		return fallback;
	}
}

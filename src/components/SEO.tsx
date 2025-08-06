import { useEffect } from "react";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	canonical?: string;
	ogImage?: string;
	structuredData?: object;
}

export function SEO({
	title = "Luna's Roofing LLC - #1 Wills Point Roofer",
	description = "Expert roofing services in Wills Point, Terrell, Forney, Canton & Kaufman TX. Licensed & insured with 24/7 emergency service. Free estimates!",
	keywords = "Wills Point roofer, Terrell roofing contractor, Forney roof repair, Canton roofing company, Kaufman emergency roofing",
	canonical,
	ogImage = "/luna_roofing_logo.png",
	structuredData,
}: SEOProps) {
	useEffect(() => {
		// Update document title
		document.title = title;

		// Helper function to update or create meta tags
		const updateMeta = (name: string, content: string, property = false) => {
			const attribute = property ? "property" : "name";
			let meta = document.querySelector(`meta[${attribute}="${name}"]`);
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute(attribute, name);
				document.head.appendChild(meta);
			}
			meta.setAttribute("content", content);
		};

		// Update meta tags
		updateMeta("description", description);
		updateMeta("keywords", keywords);
		updateMeta(
			"robots",
			"index, follow, max-snippet:-1, max-image-preview:large"
		);

		// Open Graph meta tags
		updateMeta("og:title", title, true);
		updateMeta("og:description", description, true);
		updateMeta("og:image", ogImage, true);
		updateMeta("og:type", "website", true);
		if (canonical) updateMeta("og:url", canonical, true);

		// Twitter meta tags
		updateMeta("twitter:card", "summary_large_image");
		updateMeta("twitter:title", title);
		updateMeta("twitter:description", description);
		updateMeta("twitter:image", ogImage);

		// Update canonical link
		if (canonical) {
			let canonicalLink = document.querySelector('link[rel="canonical"]');
			if (!canonicalLink) {
				canonicalLink = document.createElement("link");
				canonicalLink.setAttribute("rel", "canonical");
				document.head.appendChild(canonicalLink);
			}
			canonicalLink.setAttribute("href", canonical);
		}

		// Update structured data
		if (structuredData) {
			// Remove existing structured data script
			const existingScript = document.querySelector(
				'script[type="application/ld+json"]'
			);
			if (existingScript) {
				existingScript.remove();
			}

			// Add new structured data script
			const script = document.createElement("script");
			script.type = "application/ld+json";
			script.textContent = JSON.stringify(structuredData);
			document.head.appendChild(script);
		}
	}, [title, description, keywords, canonical, ogImage, structuredData]);

	return null;
}

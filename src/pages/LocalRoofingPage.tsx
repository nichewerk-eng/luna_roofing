import { SEO } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Button } from "../components/ui/button";
import { Phone, Shield, CloudLightning, Home } from "lucide-react";

export const LocalRoofingPage = ({ city }: { city: "Canton" | "Kaufman" }) => {
	const slug = `${city.toLowerCase()}-roofing`;
	const description = `Roof repair, replacement, storm response, and inspections for homes and businesses in ${city}, Texas.`;
	return <>
		<SEO title={`${city} Roofing Contractor | Luna's Roofing LLC`} description={`${description} Request a free estimate from Luna's Roofing LLC.`} keywords={`${city} roofer, roof repair ${city} TX, roofing contractor ${city}`} canonical={`https://www.lunasroofingllc.com/${slug}`} structuredData={{ "@context": "https://schema.org", "@type": "Service", name: `${city} Roofing Services`, description, provider: { "@type": "RoofingContractor", name: "Luna's Roofing LLC", telephone: "+1-903-340-9354" }, areaServed: `${city}, TX` }} />
		<Header />
		<main>
			<section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white"><div className="container mx-auto px-4 text-center"><h1 className="text-4xl md:text-6xl font-bold mb-6">Roofing Services in {city}, TX</h1><p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p><Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100"><a href="tel:9033409354"><Phone className="mr-2 h-5 w-5" />Call (903) 340-9354</a></Button></div></section>
			<section className="py-16 bg-white"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl font-bold text-center text-primary">Roofing Help for {city} Properties</h2><p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">Texas heat, wind, hail, and heavy rain can expose small roofing problems quickly. Our team can inspect the roof, explain the visible condition, and provide a written scope for recommended work.</p><div className="grid md:grid-cols-3 gap-6 mt-12"><div className="border rounded-lg p-6"><Home className="text-primary"/><h3 className="font-bold text-xl mt-4">Repair & Replacement</h3><p className="mt-2 text-gray-600">Shingle, metal, low-slope, residential, and commercial roofing options.</p></div><div className="border rounded-lg p-6"><CloudLightning className="text-primary"/><h3 className="font-bold text-xl mt-4">Storm Response</h3><p className="mt-2 text-gray-600">Inspection and urgent help after wind, hail, leaks, or fallen debris.</p></div><div className="border rounded-lg p-6"><Shield className="text-primary"/><h3 className="font-bold text-xl mt-4">Clear Scope</h3><p className="mt-2 text-gray-600">A straightforward explanation of findings, options, and next steps.</p></div></div></div></section>
			<Contact />
		</main><Footer />
	</>;
};

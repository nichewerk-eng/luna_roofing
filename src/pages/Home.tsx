import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SEO } from "../components/SEO";

export default function App() {
	return (
		<div className="min-h-screen">
			<SEO
				title="Wills Point's Most Trusted Roofing Contractor - Luna's Roofing LLC"
				description="Luna's Roofing LLC protects families in Wills Point, Terrell, Forney, Canton, and Kaufman with professional craftsmanship, honest pricing, and unmatched warranty coverage. 24/7 emergency service available!"
				canonical="https://www.lunasroofingllc.com"
			/>
			<Header />
			<Hero />
			<Services />
			<About />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function App() {
	return (
		<div className="min-h-screen">
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

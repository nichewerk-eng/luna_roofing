import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import {
	Phone,
	CheckCircle,
	Building2,
	Shield,
	Clock,
	Users,
	Award,
	Wrench,
} from "lucide-react";

const commercialServices = [
	{
		title: "TPO Membrane Roofing",
		description:
			"Single-ply membrane ideal for flat and low-slope commercial buildings",
		benefits: [
			"Energy efficient",
			"Chemically resistant",
			"Fully adhered system",
			"20+ year warranty",
		],
		image: "/tpo_membrane_roofing_luna.png",
	},
	{
		title: "Modified Bitumen",
		description:
			"Proven multi-layer system for superior waterproofing and durability",
		benefits: [
			"Excellent waterproofing",
			"Weather resistant",
			"Flexible application",
			"Cost effective",
		],
		image: "/modified_bitumen_commercial_luna.png",
	},
	{
		title: "Metal Roofing Systems",
		description:
			"Standing seam and panel systems for maximum durability and aesthetics",
		benefits: [
			"50+ year lifespan",
			"Fire resistant",
			"Energy savings",
			"Low maintenance",
		],
		image: "/metal_roofing_luna.png",
	},
];

const businessTypes = [
	{
		type: "Retail Centers",
		description: "Shopping centers, strip malls, and retail complexes",
	},
	{
		type: "Office Buildings",
		description: "Professional buildings and corporate offices",
	},
	{
		type: "Warehouses",
		description:
			"Distribution centers, storage facilities, and industrial buildings",
	},
	{
		type: "Restaurants",
		description: "Food service establishments and hospitality venues",
	},
	{
		type: "Auto Dealerships",
		description: "Car lots, service centers, and automotive facilities",
	},
	{
		type: "Healthcare",
		description: "Medical offices, clinics, and healthcare facilities",
	},
];

const whyChooseCommercial = [
	{
		icon: Shield,
		title: "Licensed & Bonded",
		description:
			"Fully licensed commercial contractor with comprehensive bonding and insurance",
	},
	{
		icon: Clock,
		title: "Minimal Disruption",
		description:
			"Strategic scheduling to keep your business operations running smoothly",
	},
	{
		icon: Users,
		title: "Project Management",
		description:
			"Dedicated project managers ensuring clear communication throughout",
	},
	{
		icon: Award,
		title: "Warranty Coverage",
		description:
			"Comprehensive warranties on materials and workmanship for peace of mind",
	},
];

export function CommercialRoofingPage() {
	return (
		<>
			<Helmet>
				<title>
					Commercial Roofing Wills Point TX | Business Roof Replacement | Luna's
					Roofing LLC
				</title>
				<meta
					name="description"
					content="Professional commercial roofing in Wills Point, Terrell, Forney, Canton & Kaufman TX. TPO membrane, modified bitumen, metal roofing. Licensed commercial roofers. Free estimates."
				/>
				<meta
					name="keywords"
					content="commercial roofing Wills Point TX, business roof replacement Terrell, Forney commercial roofer, Canton TPO roofing, Kaufman commercial roofing contractor, warehouse roofing, office building roof"
				/>
				<meta
					property="og:title"
					content="Commercial Roofing Services | Luna's Roofing LLC | East Texas"
				/>
				<meta
					property="og:description"
					content="Expert commercial roofing solutions for East Texas businesses. TPO membrane, modified bitumen, metal roofing systems. Licensed, bonded, insured."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/commercial-roofing"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/commercial-roofing"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
							alt="Commercial building with professional roofing in East Texas"
							className="w-full h-full object-cover opacity-30"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Commercial Roofing Experts Serving East Texas Businesses
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Protecting your business investment with professional commercial
							roofing solutions. Serving Wills Point, Terrell, Forney, Canton,
							and Kaufman with minimal business disruption.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									FREE COMMERCIAL ESTIMATE: (903) 340-9354
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Services Overview */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Complete Commercial Roofing Solutions
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								From routine maintenance to complete roof replacement, Luna's
								Roofing LLC provides comprehensive commercial roofing services
								designed to protect your business and minimize downtime.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									title: "Roof Replacement",
									description:
										"Complete commercial roof replacement with minimal disruption",
									icon: Building2,
								},
								{
									title: "Preventive Maintenance",
									description: "Scheduled inspections and maintenance programs",
									icon: Wrench,
								},
								{
									title: "Emergency Repairs",
									description:
										"24/7 response for urgent commercial roofing issues",
									icon: Clock,
								},
								{
									title: "Insurance Claims",
									description: "Full documentation and claims assistance",
									icon: Shield,
								},
							].map((service, index) => {
								const IconComponent = service.icon;
								return (
									<Card
										key={index}
										className="text-center hover:shadow-lg transition-shadow"
									>
										<CardContent className="p-6">
											<div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
												<IconComponent className="h-6 w-6" />
											</div>
											<h3 className="text-xl font-semibold mb-3">
												{service.title}
											</h3>
											<p className="text-gray-600">{service.description}</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Commercial Roofing Systems */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Professional Commercial Roofing Systems
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								We specialize in the most advanced commercial roofing systems
								designed for East Texas climate conditions and business
								requirements.
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-8">
							{commercialServices.map((system, index) => (
								<Card
									key={index}
									className="overflow-hidden hover:shadow-xl transition-shadow"
								>
									<div className="relative h-48">
										<img
											src={system.image}
											alt={`${system.title} commercial roofing in East Texas`}
											className="w-full h-full object-cover"
										/>
									</div>
									<CardHeader>
										<CardTitle className="text-xl">{system.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600 mb-4">{system.description}</p>
										<ul className="space-y-2">
											{system.benefits.map((benefit, idx) => (
												<li key={idx} className="flex items-center text-sm">
													<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
													{benefit}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Business Types */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Serving All Types of East Texas Businesses
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								From small retail shops to large industrial complexes, we
								provide professional roofing solutions tailored to your specific
								business needs.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{businessTypes.map((business, index) => (
								<Card
									key={index}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<h3 className="text-xl font-semibold mb-3 text-primary">
											{business.type}
										</h3>
										<p className="text-gray-600">{business.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Us */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Why East Texas Businesses Choose Luna's Roofing
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Professional commercial roofing requires experience,
								reliability, and understanding of business needs. We deliver all
								three with every project.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{whyChooseCommercial.map((item, index) => {
								const IconComponent = item.icon;
								return (
									<div key={index} className="text-center">
										<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-semibold mb-3">{item.title}</h3>
										<p className="text-gray-600">{item.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Service Areas */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Commercial Roofing Throughout East Texas
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Serving commercial properties throughout Van Zandt and Kaufman
								Counties
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
							{[
								{
									city: "Wills Point",
									business: "Downtown businesses, industrial park",
								},
								{
									city: "Terrell",
									business: "Shopping centers, office complexes",
								},
								{
									city: "Forney",
									business: "New commercial developments, retail",
								},
								{
									city: "Canton",
									business: "Historic commercial district, warehouses",
								},
								{
									city: "Kaufman",
									business: "Government buildings, local businesses",
								},
							].map((area, index) => (
								<Card key={index} className="p-6 text-center">
									<CardContent className="p-0">
										<h3 className="text-xl font-bold mb-2 text-primary">
											{area.city}
										</h3>
										<p className="text-sm text-gray-600">{area.business}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Protect Your Business Investment
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Get your free commercial roofing assessment today. Professional
							solutions, minimal disruption, comprehensive warranties -
							everything your business deserves.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									CALL NOW: (903) 340-9354
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-primary border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
								onClick={() => {
									window.location.href = "/contact";
								}}
							>
								Schedule Assessment
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

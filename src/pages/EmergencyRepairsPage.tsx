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
	Zap,
	Clock,
	Shield,
	AlertTriangle,
	CheckCircle,
	Cloud,
	Home,
} from "lucide-react";

const emergencyServices = [
	{
		title: "Storm Damage Restoration",
		description:
			"Professional response to hail, wind, and tornado damage throughout East Texas",
		icon: Cloud,
		services: [
			"Comprehensive damage assessment",
			"Professional tarping services",
			"Insurance documentation",
			"Quality repairs",
		],
	},
	{
		title: "Roof Leak Repairs",
		description:
			"Expert leak detection and repair to protect your property from water damage",
		icon: Home,
		services: [
			"Precise leak location",
			"Professional sealing",
			"Interior protection",
			"Permanent solutions",
		],
	},
	{
		title: "Structural Repairs",
		description:
			"Professional stabilization and repair of roof structural damage",
		icon: AlertTriangle,
		services: [
			"Thorough structural assessment",
			"Safety stabilization",
			"Professional shoring",
			"Detailed repair planning",
		],
	},
];

const stormDamageTypes = [
	{
		type: "Hail Damage",
		description: "Granule loss, exposed mat, cracked shingles",
		action: "Professional inspection and assessment",
	},
	{
		type: "Wind Damage",
		description: "Missing shingles, lifted edges, exposed underlayment",
		action: "Prompt tarping and repair services",
	},
	{
		type: "Tree Damage",
		description: "Punctures, structural damage, debris removal needed",
		action: "Priority response and stabilization",
	},
	{
		type: "Tornado Damage",
		description: "Severe structural damage, complete roof loss",
		action: "Comprehensive restoration services",
	},
];

const emergencySteps = [
	{
		step: 1,
		title: "Initial Contact",
		description:
			"Contact our team 24/7 for roofing services. We provide prompt, professional response throughout East Texas.",
	},
	{
		step: 2,
		title: "Professional Assessment",
		description:
			"Our experienced team arrives to thoroughly assess damage and develop a repair plan.",
	},
	{
		step: 3,
		title: "Property Protection",
		description:
			"Professional tarping and temporary repairs to protect your property from further damage.",
	},
	{
		step: 4,
		title: "Insurance Support",
		description:
			"Complete documentation and professional assistance with your insurance claim process.",
	},
];

export function EmergencyRepairsPage() {
	return (
		<>
			<Helmet>
				<title>
					Professional Roof Repair Services Wills Point TX | Storm Damage |
					Luna's Roofing LLC
				</title>
				<meta
					name="description"
					content="Professional roof repair services in Wills Point, Terrell, Forney, Canton & Kaufman TX. Storm damage, leaks, wind damage. Available 24/7. Insured roofing contractors."
				/>
				<meta
					name="keywords"
					content="roof repair Wills Point TX, professional roofer Terrell, storm damage repair Forney, roof leak repair Canton, roofing services Kaufman, hail damage repair, wind damage East Texas"
				/>
				<meta
					property="og:title"
					content="Professional Roof Repair Services | Luna's Roofing LLC | East Texas"
				/>
				<meta
					property="og:description"
					content="Quality roofing repair services for storm damage, leaks, and wind damage throughout East Texas. Professional team available 24/7."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/emergency-repairs"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/emergency-repairs"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="/luna_emergency_roof_damage.png"
							alt="Professional roof repair services in East Texas"
							className="w-full h-full object-cover opacity-20"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<div className="flex justify-center mb-6">
							<div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-lg">
								🕐 24/7 Service Available
							</div>
						</div>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Professional Roof Repair Services
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							When unexpected roof damage occurs, Luna's Roofing LLC provides
							reliable repair services throughout Wills Point, Terrell, Forney,
							Canton, and Kaufman with prompt professional response.
						</p>
						<div className="bg-white text-slate-800 p-6 rounded-lg max-w-2xl mx-auto mb-8">
							<h3 className="text-2xl font-bold mb-4">
								Contact Our Repair Team
							</h3>
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-white text-xl px-8 py-4 w-full"
							>
								<a href="tel:9033409354">
									<Phone className="mr-3 h-6 w-6" />
									(903) 340-9354
								</a>
							</Button>
						</div>
						<div className="grid md:grid-cols-3 gap-4 text-center">
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<Zap className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Quick Response</div>
							</div>
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<Clock className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Available 24/7</div>
							</div>
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<Shield className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Insured & Bonded</div>
							</div>
						</div>
					</div>
				</section>

				{/* Repair Services */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Professional Roof Repair Services
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Our experienced team provides comprehensive roof repair services
								for all types of damage, available 24/7 throughout East Texas to
								ensure your property stays protected.
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-8">
							{emergencyServices.map((service, index) => {
								const IconComponent = service.icon;
								return (
									<Card
										key={index}
										className="border-2 border-blue-100 hover:shadow-xl transition-shadow"
									>
										<CardHeader className="text-center">
											<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
												<IconComponent className="h-8 w-8" />
											</div>
											<CardTitle className="text-xl text-primary">
												{service.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="text-gray-600 mb-4">
												{service.description}
											</p>
											<ul className="space-y-2">
												{service.services.map((item, idx) => (
													<li key={idx} className="flex items-center text-sm">
														<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
														{item}
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Roof Damage Types */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Types of Roof Damage We Repair
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								East Texas weather can impact your roof in various ways. Our
								experienced team is equipped to handle all types of roof damage
								with professional expertise.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{stormDamageTypes.map((damage, index) => (
								<Card
									key={index}
									className="p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<h3 className="text-xl font-bold mb-2 text-primary">
											{damage.type}
										</h3>
										<p className="text-gray-600 mb-3 text-sm">
											{damage.description}
										</p>
										<p className="text-sm font-semibold text-primary">
											{damage.action}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Service Process */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Our Professional Service Process
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								When you contact Luna's Roofing LLC for repair services, our
								systematic approach ensures quality workmanship and customer
								satisfaction at every step.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{emergencySteps.map((step, index) => {
								return (
									<div key={index} className="text-center relative">
										{index < emergencySteps.length - 1 && (
											<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2 z-0"></div>
										)}
										<div className="relative z-10">
											<div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
												{step.step}
											</div>
											<h3 className="text-xl font-bold mb-3">{step.title}</h3>
											<p className="text-gray-600">{step.description}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Insurance Claims */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-4xl font-bold mb-6">
									Insurance Claims Made Easy
								</h2>
								<p className="text-xl text-gray-600 mb-6">
									Dealing with insurance companies after storm damage can be
									overwhelming. Our experienced team handles the entire claims
									process, ensuring you get the coverage you deserve.
								</p>
								<ul className="space-y-4 mb-8">
									{[
										"Complete damage documentation with photos",
										"Direct communication with insurance adjusters",
										"Detailed repair estimates and scopes",
										"Assistance with claim filing and paperwork",
										"Protection of your rights throughout the process",
									].map((item, index) => (
										<li key={index} className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-500 mr-3" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-red-700"
								>
									<a href="tel:9033409354">
										<Phone className="mr-2 h-5 w-5" />
										Get Insurance Help: (903) 340-9354
									</a>
								</Button>
							</div>
							<div>
								<img
									src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
									alt="Insurance claims assistance for storm damage in East Texas"
									className="rounded-lg shadow-lg w-full"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Contact CTA */}
				<section className="py-20 bg-slate-800 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Ready to Schedule Your Roof Repair?
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Prompt attention to roof damage helps preserve your property and
							can prevent more extensive repairs. Contact our professional team
							for quality roofing services throughout East Texas.
						</p>
						<div className="bg-white text-slate-800 p-8 rounded-lg max-w-md mx-auto">
							<h3 className="text-2xl font-bold mb-4">Contact Our Team</h3>
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-white text-xl px-8 py-4 w-full"
							>
								<a href="tel:9033409354">
									<Phone className="mr-3 h-6 w-6" />
									(903) 340-9354
								</a>
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

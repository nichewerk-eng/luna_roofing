import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
	Phone,
	Wrench,
	Home,
	Shield,
	CheckCircle,
	Droplet,
	Wind,
	Star,
	Users,
	Award,
} from "lucide-react";

const whyChooseUs = [
	{
		icon: Users,
		title: "Experienced Professionals",
		description:
			"Our team has years of experience installing gutters of all types and sizes throughout East Texas.",
	},
	{
		icon: Star,
		title: "High-Quality Materials",
		description:
			"We use durable materials designed to withstand East Texas weather conditions and heavy storms.",
	},
	{
		icon: Home,
		title: "Custom Solutions",
		description:
			"Every property is unique, and we design gutter systems tailored to your specific needs and budget.",
	},
	{
		icon: Award,
		title: "Seamless Installation",
		description:
			"Our process ensures a clean, polished finish that complements your property's aesthetic.",
	},
	{
		icon: Wrench,
		title: "Comprehensive Services",
		description:
			"We handle everything from removal of old gutters to the installation of complete new systems.",
	},
];

const gutterBenefits = [
	{
		number: "1",
		title: "Protects Your Foundation",
		description:
			"Proper drainage prevents water from pooling near your foundation, reducing the risk of cracks and expensive structural damage.",
	},
	{
		number: "2",
		title: "Prevents Soil Erosion",
		description:
			"Gutters direct rainwater away from your landscaping, preserving the integrity of your yard and preventing costly erosion.",
	},
	{
		number: "3",
		title: "Minimizes Water Damage",
		description:
			"Protect your roof, siding, and walls from water stains, rot, and moisture-related problems.",
	},
	{
		number: "4",
		title: "Enhances Property Value",
		description:
			"A well-installed gutter system improves your property's functionality and curb appeal for potential buyers.",
	},
	{
		number: "5",
		title: "Reduces Maintenance Needs",
		description:
			"Efficient gutters help keep water from accumulating, reducing the need for frequent roof and siding repairs.",
	},
];

const gutterTypes = [
	{
		type: "Seamless Gutters",
		description:
			"Seamless gutters are custom-fit to your property and have fewer joints, reducing the risk of leaks.",
		benefits: [
			"A sleek, uniform appearance",
			"Less maintenance due to fewer debris buildup points",
			"Enhanced durability and longevity",
			"Custom-made on-site for perfect fit",
		],
		image: "/seamless_gutters_luna_roofing.png",
	},
	{
		type: "Aluminum Gutters",
		description:
			"Lightweight yet strong, aluminum gutters are a popular choice for their affordability and weather resistance.",
		benefits: [
			"Rust-resistant and ideal for East Texas humid climate",
			"Available in a wide range of colors to match your property",
			"Lightweight and easy to install",
			"Excellent value for money",
		],
		image: "/aluminum_gutters_luna.png",
	},
];

const installationProcess = [
	{
		step: "1",
		title: "Assessment and Planning",
		description:
			"We evaluate your property's drainage needs and design a custom gutter system for optimal performance.",
	},
	{
		step: "2",
		title: "Material Selection",
		description:
			"Choose from a variety of materials, styles, and colors to suit your preferences and budget.",
	},
	{
		step: "3",
		title: "Precision Installation",
		description:
			"Our skilled technicians install your gutters with precision and efficiency, ensuring proper slope and drainage.",
	},
	{
		step: "4",
		title: "Final Inspection",
		description:
			"We conduct a thorough review to ensure your gutter system is functioning perfectly and meets our quality standards.",
	},
];

const gutterFaqs = [
	{
		question: "How much does gutter installation cost?",
		answer:
			"The cost depends on the size of your property and the materials selected. Contact us for a free, detailed estimate.",
	},
	{
		question: "How long does it take to install gutters?",
		answer:
			"Most residential installations can be completed in one day, though larger or more complex projects may take longer.",
	},
	{
		question: "What are seamless gutters?",
		answer:
			"Seamless gutters are custom-made to fit your property without joints or seams, reducing the risk of leaks and improving appearance.",
	},
	{
		question: "Do you offer warranties on gutter systems?",
		answer:
			"Yes, we provide manufacturer-backed warranties on materials and our own warranty on installation workmanship.",
	},
	{
		question: "How often should gutters be cleaned?",
		answer:
			"We recommend cleaning your gutters at least twice a year, or more frequently if your property is surrounded by trees.",
	},
];

export function GuttersExteriorPage() {
	return (
		<>
			<Helmet>
				<title>
					Reliable Gutter Installation in East Texas | Luna's Roofing LLC |
					Wills Point TX
				</title>
				<meta
					name="description"
					content="Protect your home or business from water damage with expert gutter installation services by Luna's Roofing LLC in East Texas. Serving Wills Point, Terrell, Forney, Canton & Kaufman."
				/>
				<meta
					name="keywords"
					content="gutter installation Wills Point TX, seamless gutters East Texas, aluminum gutters Terrell, copper gutters Forney, gutter replacement Canton, professional gutter services Kaufman"
				/>
				<meta
					property="og:title"
					content="Reliable Gutter Installation in East Texas | Luna's Roofing LLC"
				/>
				<meta
					property="og:description"
					content="Expert gutter installation services for residential and commercial properties. Protect your property from water damage with professional gutter systems."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/gutter-installation"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/gutter-installation"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="/luna_residential_gutters.png"
							alt="Professional gutter and exterior services in East Texas"
							className="w-full h-full object-cover opacity-20"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Reliable Gutter Installation in East Texas
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Protect your home or business from water damage with expert gutter
							installation services by Luna's Roofing LLC in East Texas.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Free Consultation
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Dependable Gutter Installation Services */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-6">
								Dependable Gutter Installation Services in East Texas
							</h2>
							<p className="text-xl text-gray-600 mb-6">
								Gutters are a crucial component of your property's roofing
								system, directing rainwater away from your foundation, walls,
								and landscaping. Without properly functioning gutters, your home
								or business is at risk of water damage, soil erosion, and
								structural issues. At Luna's Roofing LLC, we specialize in
								professional gutter installation services for residential and
								commercial properties in East Texas.
							</p>
							<p className="text-lg text-gray-600 mb-8">
								Our team ensures every gutter system is expertly installed for
								maximum efficiency and durability, helping you protect your
								investment while enhancing your property's overall appearance.
							</p>
							<div className="text-center">
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
								>
									<a href="tel:9033409354">
										<Phone className="mr-2 h-5 w-5" />
										Free Consultation
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Why Choose Luna's Roofing for Gutter Installation? */}
				<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Why Choose Luna's Roofing LLC for Gutter Installation?
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								When it comes to gutter installation, precision and quality
								matter. Here's why homeowners and businesses in East Texas trust
								us:
							</p>
						</div>

						<div className="relative">
							{/* Central Logo/Brand */}
							<div className="flex justify-center mb-12">
								<div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
									<Home className="h-10 w-10" />
								</div>
							</div>

							{/* Radiating Benefits */}
							<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
								{whyChooseUs.map((reason, index) => {
									const IconComponent = reason.icon;
									return (
										<div
											key={index}
											className="text-center group hover:transform hover:scale-105 transition-all duration-300"
										>
											<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border-l-4 border-primary">
												<div className="bg-gradient-to-r from-primary to-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
													<IconComponent className="h-7 w-7" />
												</div>
												<h3 className="text-lg font-bold mb-3 text-primary">
													{reason.title}
												</h3>
												<p className="text-gray-600 text-sm leading-relaxed">
													{reason.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				{/* Benefits of a Professionally Installed Gutter System */}
				<section className="py-20 bg-white relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent"></div>
					<div className="container mx-auto px-4 relative">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							{/* Left Column - Content */}
							<div>
								<h2 className="text-4xl font-bold mb-6">
									Benefits of a Professionally Installed Gutter System
								</h2>
								<p className="text-xl text-gray-600 mb-8">
									Investing in a professionally installed gutter system offers
									numerous advantages for your East Texas property:
								</p>

								{/* Benefits List */}
								<div className="space-y-6">
									{gutterBenefits.map((benefit, index) => (
										<div key={index} className="flex items-start space-x-4">
											<div className="bg-gradient-to-r from-primary to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
												{benefit.number}
											</div>
											<div>
												<h3 className="text-xl font-bold mb-2 text-primary">
													{benefit.title}
												</h3>
												<p className="text-gray-600 leading-relaxed">
													{benefit.description}
												</p>
											</div>
										</div>
									))}
								</div>

								<div className="mt-8">
									<Button
										asChild
										size="lg"
										className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
									>
										<a href="tel:9033409354">
											<Phone className="mr-2 h-5 w-5" />
											Free Consultation
										</a>
									</Button>
								</div>
							</div>

							{/* Right Column - Visual */}
							<div className="relative">
								<div className="bg-gradient-to-br from-primary to-red-600 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
									<div className="text-center">
										<Droplet className="h-16 w-16 mx-auto mb-6 opacity-90" />
										<h3 className="text-2xl font-bold mb-4">
											Protect Your Investment
										</h3>
										<p className="text-lg opacity-90 mb-6">
											Professional gutter installation prevents thousands in
											water damage repairs
										</p>
										<div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
											<div className="text-3xl font-bold">$15,000+</div>
											<div className="text-sm opacity-90">
												Average foundation repair cost
											</div>
										</div>
									</div>
								</div>
								{/* Decorative elements */}
								<div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
								<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-200 rounded-full opacity-30"></div>
							</div>
						</div>
					</div>
				</section>

				{/* Our Gutter Installation Services */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Our Professional Gutter Installation Services
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Choose from our selection of high-quality gutter systems, each
								designed to provide superior protection and performance for your
								East Texas property.
							</p>
						</div>

						<div className="space-y-16">
							{gutterTypes.map((gutter, index) => (
								<div
									key={index}
									className={`grid lg:grid-cols-2 gap-12 items-center ${
										index % 2 === 1 ? "lg:grid-cols-2" : ""
									}`}
								>
									<div className={index % 2 === 1 ? "lg:order-2" : ""}>
										<h3 className="text-3xl font-bold mb-4 text-primary">
											{gutter.type}
										</h3>
										<p className="text-xl text-gray-600 mb-6">
											{gutter.description}
										</p>
										<div className="space-y-3">
											{gutter.benefits.map((benefit, idx) => (
												<div key={idx} className="flex items-start">
													<CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
													<span className="text-gray-700">{benefit}</span>
												</div>
											))}
										</div>
										<div className="mt-8">
											<Button
												asChild
												size="lg"
												className="bg-primary hover:bg-red-700"
											>
												<a href="tel:9033409354">
													<Phone className="mr-2 h-5 w-5" />
													Free Consultation
												</a>
											</Button>
										</div>
									</div>
									<div className={index % 2 === 1 ? "lg:order-1" : ""}>
										<img
											src={gutter.image}
											alt={`${gutter.type} installation in East Texas`}
											className="rounded-lg shadow-lg w-full h-64 object-cover"
											onError={(e) => {
												e.currentTarget.src =
													"https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Custom Gutter Solutions for Residential and Commercial Properties */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Custom Gutter Solutions for Residential and Commercial
								Properties
							</h2>
						</div>

						<div className="grid lg:grid-cols-2 gap-12">
							<Card className="p-8 hover:shadow-xl transition-shadow">
								<CardContent className="p-0">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
										<Home className="h-8 w-8" />
									</div>
									<h3 className="text-2xl font-bold mb-4 text-primary text-center">
										Residential Gutter Installation
									</h3>
									<p className="text-gray-600 mb-6 text-center">
										Your home deserves a gutter system that protects it from
										water damage and blends seamlessly with its design. Our
										residential gutter installation services include:
									</p>
									<ul className="space-y-3">
										{[
											"Custom sizing and design for optimal drainage",
											"Color-matching options to enhance curb appeal",
											"Solutions for single-family homes, townhouses, and multi-unit residences",
											"Seamless integration with existing roofing systems",
										].map((item, idx) => (
											<li key={idx} className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
												<span className="text-gray-700">{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<Card className="p-8 hover:shadow-xl transition-shadow">
								<CardContent className="p-0">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
										<Shield className="h-8 w-8" />
									</div>
									<h3 className="text-2xl font-bold mb-4 text-primary text-center">
										Commercial Gutter Installation
									</h3>
									<p className="text-gray-600 mb-6 text-center">
										Businesses require durable, efficient gutter systems to
										protect large buildings and high-traffic areas. Our
										commercial services include:
									</p>
									<ul className="space-y-3">
										{[
											"Installation of heavy-duty gutters for commercial buildings",
											"Custom drainage solutions for flat or low-slope roofs",
											"Options to meet the needs of warehouses, offices, retail spaces, and more",
											"Minimal disruption to business operations",
										].map((item, idx) => (
											<li key={idx} className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
												<span className="text-gray-700">{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Our Gutter Installation Process */}
				<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10">
						<div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600"></div>
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							}}
						></div>
					</div>

					<div className="container mx-auto px-4 relative">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Our Gutter Installation Process
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								When you invest in our professional gutter installation
								services, you can expect a streamlined process designed for
								quality results:
							</p>
						</div>

						{/* Timeline Layout */}
						<div className="relative max-w-4xl mx-auto">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-red-600 hidden md:block"></div>

							<div className="space-y-12">
								{installationProcess.map((step, index) => (
									<div key={index} className="relative flex items-start">
										{/* Step Number Circle */}
										<div className="bg-gradient-to-r from-primary to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-10">
											{step.step}
										</div>

										{/* Content */}
										<div className="ml-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-1 border border-white/20">
											<h3 className="text-2xl font-bold mb-3 text-white">
												{step.title}
											</h3>
											<p className="text-gray-300 leading-relaxed">
												{step.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Call to Action */}
						<div className="text-center mt-16">
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto border border-white/20">
								<h3 className="text-2xl font-bold mb-4">
									Ready to Get Started?
								</h3>
								<p className="text-gray-300 mb-6">
									Contact us today for your free gutter installation
									consultation
								</p>
								<Button
									asChild
									size="lg"
									className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-4"
								>
									<a href="tel:9033409354">
										<Phone className="mr-2 h-5 w-5" />
										Call (903) 340-9354
									</a>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Protecting Your Property from East Texas Weather */}
				<section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white relative overflow-hidden">
					{/* Weather Animation Background */}
					<div className="absolute inset-0">
						<div className="absolute top-10 left-10 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
						<div className="absolute top-20 right-20 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-40"></div>
						<div className="absolute bottom-10 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
						<div className="absolute top-1/3 right-10 w-1 h-8 bg-blue-300 opacity-30 animate-pulse"></div>
						<div className="absolute top-1/2 left-20 w-1 h-6 bg-blue-200 opacity-40 animate-bounce"></div>
					</div>

					<div className="container mx-auto px-4 relative">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Protecting Your Property from East Texas Weather
							</h2>
							<p className="text-xl text-blue-100 max-w-3xl mx-auto">
								East Texas's heavy rains and occasional storms can put your
								property at risk without a proper drainage system. Our expertly
								installed gutters are designed to handle Texas's unpredictable
								weather, providing reliable protection for years to come.
							</p>
						</div>

						{/* Weather Protection Grid */}
						<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
							{/* Left Column */}
							<div className="space-y-8">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
											<Droplet className="h-6 w-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2">
												Heavy Rainfall Protection
											</h3>
											<p className="text-blue-100">
												Handle intense East Texas storms and seasonal downpours
												with proper water management.
											</p>
										</div>
									</div>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
											<Wind className="h-6 w-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2">
												Storm-Resistant Design
											</h3>
											<p className="text-blue-100">
												Built to withstand high winds and severe weather
												conditions common in our region.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column */}
							<div className="space-y-8">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
											<Shield className="h-6 w-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2">
												Foundation Safeguarding
											</h3>
											<p className="text-blue-100">
												Direct water away from your foundation to prevent costly
												structural damage.
											</p>
										</div>
									</div>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
									<div className="flex items-start space-x-4">
										<div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
											<Home className="h-6 w-6" />
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2">
												Property Value Protection
											</h3>
											<p className="text-blue-100">
												Maintain your property's value with professional
												drainage solutions that last.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Central Call to Action */}
						<div className="text-center mt-16">
							<div className="max-w-md mx-auto">
								<div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
									<h3 className="text-2xl font-bold mb-4">
										Don't Wait for Damage
									</h3>
									<p className="text-blue-100 mb-6">
										Protect your property before the next storm hits
									</p>
									<Button
										asChild
										size="lg"
										className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 w-full"
									>
										<a href="tel:9033409354">
											<Phone className="mr-2 h-5 w-5" />
											Free Weather Protection Assessment
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Frequently Asked Questions About Gutter Installation */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Frequently Asked Questions About Gutter Installation
							</h2>
							<p className="text-xl text-gray-600">
								Get answers to common questions about our gutter installation
								services
							</p>
						</div>

						<div className="max-w-4xl mx-auto">
							{/* FAQ Accordion Style */}
							<div className="space-y-4">
								{gutterFaqs.map((faq, index) => (
									<div
										key={index}
										className="bg-white rounded-lg shadow-md border-l-4 border-primary overflow-hidden hover:shadow-lg transition-shadow"
									>
										<div className="p-6">
											<div className="flex items-start space-x-4">
												<div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
													Q
												</div>
												<div className="flex-1">
													<h3 className="text-xl font-bold mb-3 text-primary">
														{faq.question}
													</h3>
													<div className="flex items-start space-x-4">
														<div className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
															A
														</div>
														<p className="text-gray-600 leading-relaxed">
															{faq.answer}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Additional Help */}
							<div className="mt-12 text-center">
								<div className="bg-gradient-to-r from-primary to-red-600 rounded-2xl p-8 text-white">
									<h3 className="text-2xl font-bold mb-4">
										Still Have Questions?
									</h3>
									<p className="text-lg mb-6 opacity-90">
										Our gutter installation experts are here to help with any
										additional questions you may have
									</p>
									<Button
										asChild
										size="lg"
										className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
									>
										<a href="tel:9033409354">
											<Phone className="mr-2 h-5 w-5" />
											Speak with an Expert
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Luna's Roofing for Gutter Installation in East Texas */}
				<section className="py-20 bg-primary text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Contact Luna's Roofing LLC for Gutter Installation in East Texas
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Protect your property with expertly installed gutters from Luna's
							Roofing LLC. Whether you need a new system for your home or
							business, our team delivers quality results you can trust.
						</p>
						<p className="text-lg mb-8">
							Call us today at <strong>(903) 340-9354</strong> to schedule a
							consultation or request a free quote. Ensure your property is safe
							from water damage with professional gutter installation services
							in East Texas.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Call (903) 340-9354
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
							>
								Free Consultation
							</Button>
						</div>

						<div className="mt-12 text-center">
							<p className="text-lg text-gray-100 mb-4">
								We proudly serve Wills Point, Terrell, Forney, Canton, Kaufman,
								and surrounding East Texas areas
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

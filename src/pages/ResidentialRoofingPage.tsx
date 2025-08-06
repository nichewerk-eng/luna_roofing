import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
	Phone,
	CheckCircle,
	Star,
	Shield,
	Users,
	DollarSign,
	Wrench,
	Home,
} from "lucide-react";

const whyRoofDeservesAttention = [
	{
		icon: Shield,
		title: "Shields Your Home from the Elements",
		description:
			"East Texas weather brings heavy rain, blazing sun, and occasional hailstorms. A strong, well-installed roof acts as your home's first line of defense, year-round.",
	},
	{
		icon: DollarSign,
		title: "Improves Energy Efficiency",
		description:
			"A proper roofing system helps regulate attic temperature and supports better airflow. That means less strain on your HVAC system and lower utility bills.",
	},
	{
		icon: Home,
		title: "Enhances Property Value",
		description:
			"Buyers notice a clean, modern roof. Whether you're selling soon or staying for the long haul, a new roof boosts curb appeal and long-term equity.",
	},
	{
		icon: Wrench,
		title: "Prevents Bigger Repairs",
		description:
			"Small roof issues can turn into big problems fast. Leaks, mold, and structural damage are much easier, and cheaper, to avoid than to fix later.",
	},
	{
		icon: Star,
		title: "Offers Peace of Mind",
		description:
			"When the next storm rolls through East Texas, it's comforting to know your roof is solid. No drips, no surprises, just reliable protection overhead.",
	},
];

const roofingProcess = [
	{
		step: "1",
		title: "Free Inspection",
		description:
			"We start by visiting your home, taking a close look at your current roofing system, and understanding your goals, preferences, and budget.",
	},
	{
		step: "2",
		title: "Honest Estimate",
		description:
			"After the inspection, we provide a detailed quote that includes material options, timelines, and costs—no surprises, no confusing jargon.",
	},
	{
		step: "3",
		title: "Choose Your Materials",
		description:
			"We walk you through available materials, including composition shingles, metal, TPO, and more. You'll get help choosing what suits your home best.",
	},
	{
		step: "4",
		title: "Prep and Tear-Off",
		description:
			"We remove the old roof and check the decking underneath. If repairs are needed, we handle them right away so your new roof starts with a solid base.",
	},
	{
		step: "5",
		title: "Installation",
		description:
			"Our in-house crew installs your roofing system carefully and efficiently, complete with clean edges, proper ventilation, and secure flashing.",
	},
	{
		step: "6",
		title: "Cleanup and Walkthrough",
		description:
			"Once everything is installed, we clean up thoroughly and do a final walkthrough with you to make sure every detail is finished right.",
	},
];

const whyTrustUs = [
	{
		icon: Users,
		title: "Work Done by Our Team",
		description:
			"No strangers or subs. Every phase of the project is handled by our trained, local team for consistent quality and communication.",
	},
	{
		icon: Home,
		title: "Personalized Roofing Plans",
		description:
			"No two homes are exactly alike. We tailor every solution based on your home's structure, neighborhood conditions, and long-term goals.",
	},
	{
		icon: DollarSign,
		title: "Straightforward Pricing",
		description:
			"Our estimates are clear and detailed. You'll know what's included, how much it costs, and when it will be done before we start.",
	},
	{
		icon: Shield,
		title: "Built for East Texas Weather",
		description:
			"We've installed roofs all over East Texas. We understand the heat, hail, and storms, and build to withstand them.",
	},
	{
		icon: Star,
		title: "Clean Worksites",
		description:
			"We respect your home. That means clean work zones, careful handling of landscaping, and a full cleanup when the job is complete.",
	},
];

const timeForNewRoofSigns = [
	{
		title: "Shingles are missing, curled, or cracked",
		description:
			"Damaged shingles can expose the underlayment and lead to leaks. Over time, this kind of wear can compromise the roof's ability to protect your home during heavy rain or wind.",
	},
	{
		title: "Water stains on ceilings or walls",
		description:
			"Leaks might be coming from small breaches in your roof's surface. If left unchecked, that moisture can lead to mold growth, drywall damage, or structural rot.",
	},
	{
		title: "Granules in your gutters",
		description:
			"Losing granules is a clear sign that your shingles are breaking down. These tiny particles are what help reflect sunlight and shield your roof from UV damage.",
	},
	{
		title: "Hot attic or high energy bills",
		description:
			"Your roof may not be ventilating or insulating like it should. That added heat can put stress on your HVAC system and lead to rising utility costs every season.",
	},
	{
		title: "Recent hail or storm damage",
		description:
			"Even minor impact can weaken your roofing system's integrity. You may not see the damage from the ground, but small cracks and bruising can lead to leaks down the line.",
	},
];

const roofingMaterials = [
	{
		name: "Composition Shingles",
		description:
			"Most popular choice for Wills Point homes. Excellent value, durability, and variety of colors.",
		benefits: [
			"20-30 year warranty",
			"Storm resistant",
			"Energy efficient",
			"Wide color selection",
		],
		image: "/composition_shingles_luna.png",
	},
	{
		name: "Metal Roofing",
		description:
			"Premium choice for East Texas weather. Superior durability and energy efficiency.",
		benefits: [
			"50+ year lifespan",
			"Energy savings",
			"Fire resistant",
			"Low maintenance",
		],
		image: "/metal_roofing_materials_luna.png",
	},
	{
		name: "TPO Membrane",
		description:
			"Advanced single-ply roofing system perfect for flat or low-slope residential roofs.",
		benefits: [
			"UV resistant",
			"Energy efficient",
			"Fully adhered",
			"Long-lasting",
		],
		image: "/tpo_membrane_roofing_luna.png",
	},
];

export function ResidentialRoofingPage() {
	return (
		<>
			<Helmet>
				<title>
					Residential Roofing Wills Point TX | Home Roof Replacement & Repair |
					Luna's Roofing
				</title>
				<meta
					name="description"
					content="Expert residential roofing in Wills Point, Terrell, Forney, Canton & Kaufman TX. Roof replacement, repair, composition shingles, metal roofing. Licensed roofers. Free estimates."
				/>
				<meta
					name="keywords"
					content="residential roofing Wills Point TX, home roof replacement Terrell, Forney roof repair, Canton residential roofer, Kaufman home roofing, composition shingles, metal roofing East Texas"
				/>
				<meta
					property="og:title"
					content="Residential Roofing Services | Luna's Roofing LLC | Wills Point TX"
				/>
				<meta
					property="og:description"
					content="Professional home roofing services in East Texas. Quality materials, expert installation, comprehensive warranties. Protecting families since day one."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/residential-roofing"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/residential-roofing"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="/luna_residential_roofing.png"
							alt="Beautiful residential home with new roof in Wills Point TX"
							className="w-full h-full object-cover opacity-30"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Residential Roofing Experts in Wills Point, Texas
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Protecting East Texas families with premium roofing materials,
							expert craftsmanship, and comprehensive warranties. Serving Wills
							Point, Terrell, Forney, Canton, and Kaufman.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									FREE ROOF ESTIMATE: (903) 340-9354
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Thinking It Might Be Time to Update Your Roof? */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-6">
								Thinking It Might Be Time to Update Your Roof?
							</h2>
							<p className="text-xl text-gray-600 mb-6">
								If your roof is starting to show signs of age, damage, or
								weather fatigue, it might be affecting more than just your curb
								appeal. Curling shingles, heat build-up in the attic, or water
								spots on your ceiling could be your roof's way of asking for
								attention. With East Texas's mix of heat, storms, and hail,
								keeping your home protected starts right above your head.
							</p>
							<p className="text-lg text-gray-600 mb-8">
								At Luna's Roofing LLC, we provide residential roofing services
								designed around the challenges of East Texas. Whether your roof
								needs a full replacement or just a few critical repairs, our
								team delivers dependable craftsmanship, timely service, and
								results you can trust to last. We work closely with East Texas
								homeowners to build roofing systems that add value, protect what
								matters, and hold strong no matter what the weather brings.
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

				{/* Why Your Roof Deserves More Attention Than You Think */}
				<section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
					{/* Decorative Background Elements */}
					<div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-32 -translate-y-32"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full translate-x-48 translate-y-48"></div>

					<div className="container mx-auto px-4 relative">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Why Your Roof Deserves More Attention Than You Think
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Your roof does a lot more than keep the rain out—it plays a
								critical role in your home's efficiency, structure, and resale
								value. When it is in good shape, you will notice a difference in
								everything from comfort to energy costs.
							</p>
						</div>

						{/* Central Roof Icon with Radiating Benefits */}
						<div className="relative max-w-6xl mx-auto">
							{/* Central Hub */}
							<div className="flex justify-center mb-12">
								<div className="bg-gradient-to-r from-primary to-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative z-10">
									<Home className="h-12 w-12" />
									{/* Radiating Lines */}
									<div className="absolute inset-0 animate-pulse">
										<div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 rotate-45"></div>
										<div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 -rotate-45"></div>
										<div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 rotate-90"></div>
										<div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent -translate-y-1/2"></div>
									</div>
								</div>
							</div>

							{/* Orbiting Benefits */}
							<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
								{whyRoofDeservesAttention.map((benefit, index) => {
									const IconComponent = benefit.icon;
									return (
										<div
											key={index}
											className="text-center group hover:transform hover:scale-110 transition-all duration-500 animate-pulse"
										>
											<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-primary relative overflow-hidden">
												{/* Background Gradient */}
												<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

												<div className="relative z-10">
													<div className="bg-gradient-to-r from-primary to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform shadow-lg">
														<IconComponent className="h-8 w-8" />
													</div>
													<h3 className="text-lg font-bold mb-3 text-primary">
														{benefit.title}
													</h3>
													<p className="text-gray-600 text-sm leading-relaxed">
														{benefit.description}
													</p>
												</div>
											</div>
										</div>
									);
								})}
							</div>

							<div className="text-center mt-16">
								<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-xl border border-primary/20">
									<h3 className="text-xl font-bold mb-4 text-primary">
										Ready to Protect Your Investment?
									</h3>
									<Button
										asChild
										size="lg"
										className="bg-primary hover:bg-red-700 text-lg px-8 py-4 w-full"
									>
										<a href="tel:9033409354">
											<Phone className="mr-2 h-5 w-5" />
											Free Consultation
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Our Proven Roofing Process */}
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
								Our Proven Roofing Process
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								We make roofing simple. Every home is different, and every
								customer deserves a process that is organized, transparent, and
								worry-free from beginning to end.
							</p>
						</div>

						{/* Timeline Layout */}
						<div className="relative max-w-4xl mx-auto">
							{/* Timeline Line */}
							<div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-red-600 hidden md:block"></div>

							<div className="space-y-12">
								{roofingProcess.map((step, index) => (
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
									Contact us today for your free roofing consultation
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

				{/* Why Trust Luna's Roofing? */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Why Trust Luna's Roofing LLC?
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								We are more than just a crew with ladders—we are a team that
								takes pride in doing things the right way. When you trust your
								roof to us, here is what you can expect:
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{whyTrustUs.map((trust, index) => {
								const IconComponent = trust.icon;
								return (
									<div
										key={index}
										className="p-6 hover:shadow-lg transition-shadow bg-white rounded-xl border-l-4 border-primary"
									>
										<div className="bg-gradient-to-r from-primary to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-bold mb-4 text-primary text-center">
											{trust.title}
										</h3>
										<p className="text-gray-600 text-center leading-relaxed">
											{trust.description}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Premium Roofing Materials We Use */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Premium Roofing Materials We Use
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								We work with reliable, performance-tested materials that are
								proven to stand up to East Texas conditions. You'll always have
								options that balance performance, durability, and style.
							</p>
						</div>

						<div className="space-y-16">
							{roofingMaterials.map((material, index) => (
								<div
									key={index}
									className={`grid lg:grid-cols-2 gap-12 items-center ${
										index % 2 === 1 ? "lg:grid-cols-2" : ""
									}`}
								>
									<div className={index % 2 === 1 ? "lg:order-2" : ""}>
										<h3 className="text-3xl font-bold mb-4 text-primary">
											{material.name}
										</h3>
										<p className="text-xl text-gray-600 mb-6">
											{material.description}
										</p>
										<div className="space-y-3">
											{material.benefits.map((benefit, idx) => (
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
											src={material.image}
											alt={`${material.name} roofing in Wills Point TX`}
											className="rounded-lg shadow-lg w-full h-64 object-cover"
											onError={(e) => {
												e.currentTarget.src =
													"https://images.unsplash.com/photo-1558618047-3c0c7c8f73ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* How to Know It's Time for a New Roof */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								How to Know It's Time for a New Roof
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Sometimes it's obvious, sometimes it's not. If you're noticing
								any of the following issues, it might be time to give us a call:
							</p>
						</div>

						<div className="max-w-4xl mx-auto space-y-8">
							{timeForNewRoofSigns.map((sign, index) => (
								<div
									key={index}
									className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
								>
									<h3 className="text-xl font-bold mb-4 text-primary">
										{sign.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{sign.description}
									</p>
								</div>
							))}
						</div>

						<div className="text-center mt-12">
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

				{/* Residential Roofing FAQs */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Residential Roofing FAQs
							</h2>
							<p className="text-xl text-gray-600">
								Get answers to common questions about our residential roofing
								services
							</p>
						</div>

						<div className="max-w-4xl mx-auto">
							{/* FAQ Accordion Style */}
							<div className="space-y-4">
								{[
									{
										question: "How long does a roof replacement take?",
										answer:
											"Most residential projects are completed in one to two days, depending on roof size and complexity. Weather conditions may affect timing.",
									},
									{
										question: "Is the estimate really free?",
										answer:
											"Yes, we provide no-pressure, no-obligation estimates for all residential roofing services throughout East Texas.",
									},
									{
										question: "Can you help with insurance claims?",
										answer:
											"Absolutely. Our team helps document storm damage and coordinates with your adjuster to streamline the claims process.",
									},
									{
										question: "Do you offer energy-efficient materials?",
										answer:
											"Yes, we install reflective composition shingles, metal roofing, and other materials designed to reduce heat transfer and improve efficiency.",
									},
									{
										question: "Is your work covered by a warranty?",
										answer:
											"Our roofs are backed by both workmanship warranties and material warranties from top manufacturers for your peace of mind.",
									},
								].map((faq, index) => (
									<div
										key={index}
										className="bg-gray-50 rounded-lg shadow-md border-l-4 border-primary overflow-hidden hover:shadow-lg transition-shadow"
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
										Our residential roofing experts are here to help with any
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

				{/* Ready to Start Your Roofing Project? */}
				<section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Ready to Start Your Roofing Project?
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							If your roof is ready for an upgrade, Luna's Roofing LLC is here
							to make the process simple and stress-free. We deliver quality
							work, clear communication, and roofs built to handle East Texas's
							toughest weather.
						</p>
						<p className="text-lg mb-8">
							<strong>Call</strong> now or request a free estimate online. We'll
							inspect your roof, walk you through your options, and give you
							honest guidance on the best path forward.
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
								asChild
								size="lg"
								variant="outline"
								className="text-primary border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
							>
								<Link to="/contact">Free Consultation</Link>
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

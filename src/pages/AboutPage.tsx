import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
	Award,
	Users,
	Clock,
	Shield,
	Star,
	Wrench,
	Home,
	Phone,
	MapPin,
	Heart,
	Target,
} from "lucide-react";

const companyValues = [
	{
		icon: Heart,
		title: "Family-First Approach",
		description:
			"We treat every customer like family because that's what neighbors do. Your safety and satisfaction are our top priorities.",
	},
	{
		icon: Shield,
		title: "Uncompromising Quality",
		description:
			"We use only premium materials and proven techniques. Every nail, every shingle, every detail matters to us.",
	},
	{
		icon: Users,
		title: "Local Community Focus",
		description:
			"Born and raised in East Texas, we understand our climate, our community, and what it takes to protect Texas homes.",
	},
	{
		icon: Target,
		title: "Transparent Process",
		description:
			"No surprises, no hidden costs. We explain everything clearly so you can make informed decisions about your home.",
	},
];

const whyChooseUs = [
	{
		icon: Shield,
		title: "Licensed & Insured",
		description:
			"Fully licensed contractor with comprehensive insurance coverage for your complete peace of mind.",
	},
	{
		icon: Award,
		title: "Professional Experience",
		description:
			"Years of roofing excellence in the Dallas-Tyler area with hundreds of satisfied customers.",
	},
	{
		icon: Users,
		title: "Local Family Business",
		description:
			"Proudly Texas-owned and operated, serving our neighbors with integrity and professionalism.",
	},
	{
		icon: Clock,
		title: "24/7 Emergency Service",
		description:
			"Storm damage doesn't wait, and neither do we. Emergency services available around the clock.",
	},
	{
		icon: Star,
		title: "Top-Rated Reviews",
		description:
			"4.9/5 stars on Google with hundreds of verified reviews from happy Texas homeowners.",
	},
	{
		icon: Wrench,
		title: "Quality Materials",
		description:
			"We use only premium materials from trusted manufacturers with industry-leading warranties.",
	},
];

const serviceAreas = [
	{ city: "Wills Point", highlight: true, description: "Our Home Base" },
	{ city: "Terrell", highlight: false, description: "Full Service Area" },
	{ city: "Forney", highlight: false, description: "Full Service Area" },
	{ city: "Canton", highlight: false, description: "Full Service Area" },
	{ city: "Kaufman", highlight: false, description: "Full Service Area" },
];

const stats = [
	{ number: "100%", label: "Customer Satisfaction" },
	{ number: "Licensed", label: "& Insured" },
	{ number: "24/7", label: "Emergency Service" },
	{ number: "Premium", label: "Materials Only" },
];

export function AboutPage() {
	return (
		<>
			<Helmet>
				<title>
					About Luna's Roofing LLC | Wills Point's Most Trusted Roofing
					Contractor
				</title>
				<meta
					name="description"
					content="Learn about Luna's Roofing LLC, Wills Point's premier roofing contractor. Family-owned, licensed & insured, serving Terrell, Forney, Canton & Kaufman with integrity since day one."
				/>
				<meta
					name="keywords"
					content="about Luna's Roofing LLC, Wills Point roofer, East Texas roofing contractor, family business roofing, licensed roofer Wills Point, insured roofing contractor"
				/>
				<meta
					property="og:title"
					content="About Luna's Roofing LLC | Your Local East Texas Roofing Experts"
				/>
				<meta
					property="og:description"
					content="Discover why families across Wills Point, Terrell, Forney, Canton, and Kaufman trust Luna's Roofing LLC for their roofing needs."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/about"
				/>
				<link rel="canonical" href="https://www.lunasroofingllc.com/about" />
			</Helmet>

			<Header />

			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="/lunas_roofing_company_residential.png"
							alt="Luna's Roofing LLC team working on residential roof in Wills Point Texas"
							className="w-full h-full object-cover opacity-20"
						/>
					</div>
					<div className="relative container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Your Local Wills Point Roofing Experts
							</h1>
							<p className="text-xl md:text-2xl mb-8">
								Protecting East Texas families since day one with honest
								craftsmanship, premium materials, and the personal service that
								only local neighbors can provide.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-red-700 text-lg px-8 py-4"
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
									className="text-primary border-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4"
								>
									<a href="/contact">Free Consultation</a>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Our Story */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="space-y-8">
								<div>
									<h2 className="text-3xl lg:text-4xl mb-6">
										Built on Trust, Integrity, and East Texas Values
									</h2>
									<p className="text-lg text-gray-600 mb-6">
										When Luna's Roofing LLC was founded, we had a simple
										mission: to be the roofing company we'd want to call for our
										own families. That means showing up when we say we will,
										doing exactly what we promise, and treating every home like
										it's our own.
									</p>
									<p className="text-gray-600 mb-6">
										As lifelong East Texas residents, we understand what it
										means to be part of a community. We've weathered the same
										storms, dealt with the same scorching summers, and know
										exactly what your roof needs to protect your family through
										it all. When you call Luna's Roofing LLC, you're not just
										hiring a contractor – you're partnering with neighbors who
										care about your family's safety as much as our own.
									</p>
									<p className="text-gray-600 mb-6">
										From emergency storm repairs in the middle of the night to
										planned roof replacements that protect your investment for
										decades, we bring the same dedication to every project.
										Because in a place like Wills Point, your reputation isn't
										just business – it's everything.
									</p>
								</div>
							</div>

							<div className="space-y-6">
								<img
									src="/luna_residential_roofing.png"
									alt="Luna's Roofing LLC family business team in Wills Point Texas"
									className="rounded-2xl shadow-lg w-full h-96 object-cover"
								/>

								<Card className="bg-gray-50">
									<CardContent className="p-6">
										<div className="flex items-start space-x-4">
											<div className="bg-primary text-white p-3 rounded-lg">
												<Home className="h-6 w-6" />
											</div>
											<div>
												<h4 className="text-lg font-bold mb-2">
													Our Promise to East Texas
												</h4>
												<p className="text-gray-600">
													Every roof we install or repair comes with our
													complete commitment: quality materials, expert
													craftsmanship, fair pricing, and a warranty backed by
													neighbors who plan to be here for generations.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Company Values */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								What Drives Us Every Day
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								These aren't just words on a website – they're the principles
								that guide every decision we make, from the materials we choose
								to the way we treat your property.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{companyValues.map((value, index) => {
								const IconComponent = value.icon;
								return (
									<div key={index} className="text-center">
										<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-bold mb-3">{value.title}</h3>
										<p className="text-gray-600">{value.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<div className="relative bg-primary text-white py-16 overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-30">
						<div
							className="w-full h-full"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 20L40 0L80 20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
								backgroundSize: "80px 40px",
								backgroundRepeat: "repeat",
							}}
						></div>
					</div>

					<div className="container mx-auto px-4 relative">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							{stats.map((stat, index) => (
								<div key={index}>
									<div className="text-4xl lg:text-5xl font-bold mb-2">
										{stat.number}
									</div>
									<div className="text-lg text-red-100">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Why Choose Us */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Why Families Choose Luna's Roofing LLC
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								When it comes to protecting your most valuable asset, you need
								more than just technical skills – you need a partner you can
								trust completely.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{whyChooseUs.map((item, index) => {
								const IconComponent = item.icon;
								return (
									<div key={index} className="text-center group">
										<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-bold mb-3">{item.title}</h3>
										<p className="text-gray-600">{item.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Service Areas */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Proudly Serving East Texas
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								From our home base in Wills Point, we provide comprehensive
								roofing services throughout Van Zandt and Kaufman Counties.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
							{serviceAreas.map((area, index) => (
								<Card
									key={index}
									className={`p-6 text-center ${
										area.highlight ? "bg-primary text-white" : "bg-white"
									}`}
								>
									<CardContent className="p-0">
										<MapPin
											className={`h-8 w-8 mx-auto mb-3 ${
												area.highlight ? "text-white" : "text-primary"
											}`}
										/>
										<h3
											className={`text-xl font-bold mb-2 ${
												area.highlight ? "text-white" : "text-primary"
											}`}
										>
											{area.city}
										</h3>
										<p
											className={`text-sm ${
												area.highlight ? "text-red-100" : "text-gray-600"
											}`}
										>
											{area.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="text-center mt-12">
							<p className="text-lg text-gray-600 mb-6">
								Don't see your city listed? We likely serve your area too! Call
								us to confirm service availability.
							</p>
							<Button asChild size="lg" className="bg-primary hover:bg-red-700">
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Check Service Availability
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Ready to Work with East Texas's Most Trusted Roofers?
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Whether you need emergency repairs, a complete roof replacement,
							or just want peace of mind with a professional inspection, we're
							here to help.
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
								<a href="/contact">Request Free Estimate</a>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

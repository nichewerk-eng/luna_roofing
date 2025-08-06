import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
	Award,
	Users,
	Clock,
	Shield,
	Star,
	Wrench,
	Home,
	Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

const whyChooseUs = [
	{
		icon: Shield,
		title: "Licensed & Insured",
		description:
			"Fully licensed contractor with comprehensive insurance coverage for your peace of mind.",
	},
	{
		icon: Award,
		title: "Professional Experience",
		description:
			"Professional roofing excellence in the Dallas-Tyler area with satisfied customers throughout the region.",
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
			"5 stars on Google with hundreds of verified reviews from happy Texas homeowners.",
	},
	{
		icon: Wrench,
		title: "Quality Materials",
		description:
			"We use only premium materials from trusted manufacturers with industry-leading warranties.",
	},
];

const stats = [
	{ number: "Quality", label: "Materials" },
	{ number: "Licensed", label: "& Insured" },
	{ number: "Residential", label: "& Commercial" },
	{ number: "100%", label: "Customer Satisfaction" },
];

export function About() {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				{/* Why Choose Us Grid */}
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight pb-4 text-primary">
						Why Choose Luna's Roofing LLC?
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						When it comes to protecting your most valuable asset, trust the
						local roofing experts based in Wills Point, TX, proudly serving
						Terrell, Forney, Canton, and Kaufman with premium roofing services.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{whyChooseUs.map((item, index) => {
						const IconComponent = item.icon;
						return (
							<div key={index} className="text-center group">
								<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
									<IconComponent className="h-8 w-8" />
								</div>
								<h3 className="text-xl mb-3">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
							</div>
						);
					})}
				</div>

				{/* Stats Section */}
				<div className="relative bg-primary text-white rounded-xl p-8 mb-20 overflow-hidden">
					{/* Roof Structure Pattern */}
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

					{/* Construction Grid */}
					<div className="absolute inset-0 opacity-8">
						<div
							className="w-full h-full"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.2'%3E%3Cpath d='M0 25h50M25 0v50'/%3E%3C/g%3E%3C/svg%3E")`,
								backgroundSize: "50px 50px",
							}}
						></div>
					</div>

					{/* Decorative Corner Elements */}
					<div className="absolute top-4 right-4 w-20 h-20 transform rotate-45 bg-white/5 rounded-lg"></div>
					<div className="absolute bottom-4 left-4 w-16 h-16 transform -rotate-12 bg-white/5 rounded-lg"></div>

					{/* Roof Peak Accents */}
					<div className="absolute top-0 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white/5"></div>
					<div className="absolute top-0 right-1/4 w-0 h-0 border-l-6 border-r-6 border-b-9 border-l-transparent border-r-transparent border-b-white/5"></div>

					<div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center z-10">
						{stats.map((stat, index) => (
							<div key={index}>
								<div className="text-4xl lg:text-5xl mb-2">{stat.number}</div>
								<div className="text-lg text-red-100">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* About Content */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl lg:text-4xl mb-6">
								Your Local Wills Point Roofing Experts - Protecting East Texas
								Families Since Day One
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								When severe Texas weather threatens your home, you need more
								than just any roofing contractor - you need neighbors who
								understand what your family is going through. Luna's Roofing LLC
								has been the trusted choice for homeowners in Wills Point,
								Terrell, Forney, Canton, and throughout Van Zandt & Kaufman
								Counties. As your local roofing experts, we've weathered every
								storm alongside our community, providing emergency roof repairs,
								complete roof replacements, and peace of mind when you need it
								most.
							</p>
							<p className="text-gray-600 mb-6">
								Our experienced roofing team specializes in both residential and
								commercial roofing services, from the growing subdivisions of
								Forney to the historic homes of Canton and rural properties
								throughout East Texas. We work exclusively with premium roofing
								materials - composition shingles, metal roofing systems, TPO
								membrane, and modified bitumen roofs - ensuring your investment
								protects your family for decades. Every Wills Point roofer on
								our team is fully licensed, insured, and committed to delivering
								the honest, quality craftsmanship your neighbors have trusted
								for years.
							</p>
						</div>
						<Button asChild size="lg" className="bg-primary text-white">
							<a href="tel:9033409354">
								<Phone className="mr-2 h-5 w-5" />
								GET YOUR FREE ROOF INSPECTION: (903) 340-9354
							</a>
						</Button>
					</div>

					<div className="space-y-6">
						<img
							src="/lunas_roofing_company_residential.png"
							alt="Professional roofing contractors from Luna's Roofing LLC working on residential roof replacement in Wills Point, Texas"
							className="rounded-2xl shadow-lg w-full h-96 object-cover"
						/>

						<Card className="bg-gray-50">
							<CardContent className="p-6">
								<div className="flex items-start space-x-4">
									<div className="bg-primary text-white p-3 rounded-lg">
										<Home className="h-6 w-6" />
									</div>
									<div>
										<h4 className="text-lg mb-2">Our East Texas Promise</h4>
										<p className="text-gray-600">
											Your family's safety and satisfaction come first, always.
											Every roof repair and replacement in Wills Point, Terrell,
											Forney, and Canton includes our written warranty, full
											licensing verification, and comprehensive general
											liability insurance. When you call Luna's Roofing LLC,
											you're not just hiring a contractor - you're partnering
											with East Texas neighbors who stand behind our work long
											after the job is complete.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

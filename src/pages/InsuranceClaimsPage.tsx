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
	Shield,
	FileText,
	Camera,
	CheckCircle,
	AlertTriangle,
	DollarSign,
	Clock,
} from "lucide-react";

const claimsServices = [
	{
		title: "Damage Documentation",
		description:
			"Professional documentation of all storm damage with detailed photos and measurements",
		icon: Camera,
		includes: [
			"High-resolution damage photos",
			"Detailed measurements and sketches",
			"Written damage assessment",
			"Evidence organization for claim",
		],
	},
	{
		title: "Insurance Communication",
		description:
			"Direct communication with insurance adjusters to ensure fair treatment and maximum coverage",
		icon: Shield,
		includes: [
			"Adjuster meeting coordination",
			"Professional claim presentation",
			"Dispute resolution assistance",
			"Claim status monitoring",
		],
	},
	{
		title: "Repair Estimates",
		description:
			"Accurate repair estimates using current market pricing and insurance industry standards",
		icon: FileText,
		includes: [
			"Detailed scope of work",
			"Line-item cost breakdown",
			"Material specifications",
			"Labor cost calculations",
		],
	},
];

const claimsProcess = [
	{
		step: 1,
		title: "Call Immediately",
		description:
			"Contact us right after storm damage occurs. Early documentation is crucial for claim success.",
		timing: "Within 24 hours",
	},
	{
		step: 2,
		title: "Damage Assessment",
		description:
			"Our experts conduct a thorough inspection and document all visible and hidden damage.",
		timing: "24-48 hours",
	},
	{
		step: 3,
		title: "File Your Claim",
		description:
			"We help you file your insurance claim with complete documentation and evidence.",
		timing: "2-3 days",
	},
	{
		step: 4,
		title: "Adjuster Meeting",
		description:
			"We meet with your insurance adjuster to present evidence and advocate for fair coverage.",
		timing: "1-2 weeks",
	},
	{
		step: 5,
		title: "Claim Resolution",
		description:
			"We work with insurance companies until you receive fair compensation for all damage.",
		timing: "2-4 weeks",
	},
	{
		step: 6,
		title: "Quality Repairs",
		description:
			"Once approved, we complete high-quality repairs using your insurance settlement.",
		timing: "1-3 weeks",
	},
];

const commonMistakes = [
	{
		mistake: "Delaying claim filing",
		consequence: "Missed deadlines, denied claims",
		solution: "We file immediately after damage assessment",
	},
	{
		mistake: "Incomplete documentation",
		consequence: "Underpaid or denied claims",
		solution: "Professional documentation of all damage",
	},
	{
		mistake: "Accepting first offer",
		consequence: "Thousands in lost coverage",
		solution: "We negotiate for maximum settlement",
	},
	{
		mistake: "DIY damage assessment",
		consequence: "Missing hidden damage",
		solution: "Professional inspection finds all damage",
	},
];

const insuranceCompanies = [
	"State Farm",
	"Allstate",
	"USAA",
	"Farmers",
	"Liberty Mutual",
	"Progressive",
	"Geico",
	"Nationwide",
	"American Family",
	"Travelers",
];

export function InsuranceClaimsPage() {
	return (
		<>
			<Helmet>
				<title>
					Insurance Claims Assistance Wills Point TX | Storm Damage Claims |
					Luna's Roofing
				</title>
				<meta
					name="description"
					content="Expert insurance claims assistance in Wills Point, Terrell, Forney, Canton & Kaufman TX. Storm damage documentation, adjuster meetings, maximize claim payouts."
				/>
				<meta
					name="keywords"
					content="insurance claims assistance Wills Point TX, storm damage claims Terrell, roof insurance Forney, hail damage claims Canton, adjuster meetings Kaufman, insurance claim help East Texas"
				/>
				<meta
					property="og:title"
					content="Insurance Claims Assistance | Luna's Roofing LLC | East Texas"
				/>
				<meta
					property="og:description"
					content="Expert help with storm damage insurance claims. Professional documentation, adjuster advocacy, maximize your settlement throughout East Texas."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/insurance-claims"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/insurance-claims"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
							alt="Professional insurance claims assistance for storm damage in East Texas"
							className="w-full h-full object-cover opacity-20"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Professional Insurance Claims Assistance
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Navigate insurance claims with professional guidance. Luna's
							Roofing LLC provides expert claims assistance throughout Wills
							Point, Terrell, Forney, Canton, and Kaufman to help you through
							the process.
						</p>
						<div className="bg-white text-slate-800 p-6 rounded-lg max-w-2xl mx-auto mb-8">
							<h3 className="text-2xl font-bold mb-4">
								Complimentary Insurance Claim Assessment
							</h3>
							<div className="grid md:grid-cols-2 gap-4">
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-red-700 text-white"
								>
									<a href="tel:9033409354">
										<Phone className="mr-2 h-5 w-5" />
										Call: (903) 340-9354
									</a>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="text-primary border-primary hover:bg-red-50"
								>
									<FileText className="mr-2 h-5 w-5" />
									Schedule Assessment
								</Button>
							</div>
						</div>
						<div className="grid md:grid-cols-3 gap-4 text-center">
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<DollarSign className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Fair Settlements</div>
							</div>
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<Shield className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Professional Advocacy</div>
							</div>
							<div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
								<Clock className="h-8 w-8 mx-auto mb-2 text-blue-300" />
								<div className="font-semibold">Efficient Process</div>
							</div>
						</div>
					</div>
				</section>

				{/* Claims Services */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Complete Insurance Claims Support
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								From initial damage assessment to final payment, we guide you
								through every step of the insurance claims process to ensure
								maximum compensation.
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-8">
							{claimsServices.map((service, index) => {
								const IconComponent = service.icon;
								return (
									<Card
										key={index}
										className="border-2 border-slate-200 hover:shadow-xl transition-shadow"
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
												{service.includes.map((item, idx) => (
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

				{/* Claims Process */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Our Proven Claims Process
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								We've successfully helped hundreds of East Texas families
								navigate the insurance claims process. Here's our step-by-step
								approach to maximizing your settlement.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{claimsProcess.map((step, index) => (
								<Card key={index} className="relative">
									<CardHeader className="text-center">
										<div className="bg-slate-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
											{step.step}
										</div>
										<CardTitle className="text-lg">{step.title}</CardTitle>
										<div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
											{step.timing}
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600 text-center">
											{step.description}
										</p>
									</CardContent>
									{index < claimsProcess.length - 1 && (
										<div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
									)}
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Common Mistakes */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Avoid These Costly Insurance Claim Mistakes
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Most homeowners make critical errors that cost them thousands in
								coverage. Our expertise helps you avoid these common pitfalls.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{commonMistakes.map((item, index) => (
								<Card key={index} className="border-2 border-red-200">
									<CardHeader className="text-center">
										<AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-2" />
										<CardTitle className="text-lg text-red-600">
											{item.mistake}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="bg-red-50 p-3 rounded-lg mb-4">
											<p className="text-sm text-red-700 font-semibold">
												Consequence:
											</p>
											<p className="text-sm text-red-600">{item.consequence}</p>
										</div>
										<div className="bg-green-50 p-3 rounded-lg">
											<p className="text-sm text-green-700 font-semibold">
												Our Solution:
											</p>
											<p className="text-sm text-green-600">{item.solution}</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Insurance Companies */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								We Work With All Major Insurance Companies
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Our experience with all major insurers means we know their
								processes, requirements, and how to present your claim for
								maximum success.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
							{insuranceCompanies.map((company, index) => (
								<Card
									key={index}
									className="p-6 text-center hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<div className="text-lg font-semibold text-blue-600">
											{company}
										</div>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="text-center">
							<p className="text-lg text-gray-600 mb-4">
								Don't see your insurance company listed?
							</p>
							<Button
								asChild
								size="lg"
								className="bg-blue-600 hover:bg-blue-700"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Call Us - We Work With All Insurers
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Success Stories */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Real Results for East Texas Families
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								See how our insurance claims expertise has helped local families
								recover fully from storm damage.
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-8">
							{[
								{
									location: "Wills Point, TX",
									damage: "Hail damage to composition shingle roof",
									initial: "$8,500",
									final: "$18,200",
									savings: "$9,700",
								},
								{
									location: "Terrell, TX",
									damage: "Wind damage to metal roof and gutters",
									initial: "$12,000",
									final: "$24,800",
									savings: "$12,800",
								},
								{
									location: "Forney, TX",
									damage: "Tree damage with structural repairs needed",
									initial: "$15,500",
									final: "$31,200",
									savings: "$15,700",
								},
							].map((story, index) => (
								<Card key={index} className="bg-green-50 border-green-200">
									<CardHeader>
										<CardTitle className="text-green-800">
											{story.location}
										</CardTitle>
										<p className="text-sm text-gray-600">{story.damage}</p>
									</CardHeader>
									<CardContent>
										<div className="space-y-2 mb-4">
											<div className="flex justify-between">
												<span>Initial offer:</span>
												<span className="text-red-600">{story.initial}</span>
											</div>
											<div className="flex justify-between">
												<span>Final settlement:</span>
												<span className="text-green-600 font-bold">
													{story.final}
												</span>
											</div>
											<hr className="border-green-300" />
											<div className="flex justify-between font-bold">
												<span>Additional recovery:</span>
												<span className="text-green-600">{story.savings}</span>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-slate-800 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Professional Claims Assistance Available
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Navigate the insurance claims process with professional guidance
							and experience. Our team helps ensure you receive fair
							consideration for storm damage repairs throughout East Texas.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Contact Us: (903) 340-9354
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-white border-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4"
							>
								<FileText className="mr-2 h-5 w-5" />
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

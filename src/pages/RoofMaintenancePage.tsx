import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
	Phone,
	Calendar,
	CheckCircle,
	DollarSign,
	Shield,
	Clock,
	Wrench,
} from "lucide-react";

const whyMaintenanceEssential = [
	{
		number: "1",
		title: "Prevents Expensive Repairs",
		description: "Catch small issues before they escalate into major problems.",
	},
	{
		number: "2",
		title: "Extends Roof Lifespan",
		description: "Proper care can add years to the life of your roof.",
	},
	{
		number: "3",
		title: "Improves Energy Efficiency",
		description: "A well-maintained roof helps regulate indoor temperatures.",
	},
	{
		number: "4",
		title: "Enhances Property Value",
		description: "A well-kept roof increases curb appeal and resale value.",
	},
];

const maintenanceServices = [
	{
		title: "Comprehensive Inspections",
		description:
			"Regular roof inspections are the foundation of effective maintenance.",
		includes: [
			"Checking for missing, cracked, or curling shingles",
			"Inspecting flashing around vents, chimneys, and skylights",
			"Assessing the roof's structural integrity for sagging or weak spots",
			"Examining gutters and drainage systems for blockages",
		],
	},
	{
		title: "Debris Removal and Cleaning",
		description:
			"Debris buildup can clog gutters and cause water to pool on your roof, leading to damage.",
		includes: [
			"Clearing debris from your roof surface",
			"Cleaning gutters to prevent water overflow",
			"Ensuring proper drainage to avoid water pooling",
			"Removing moss, algae, and other organic growth",
		],
	},
	{
		title: "Minor Repairs and Sealant Application",
		description:
			"Addressing minor issues promptly can prevent more significant damage later.",
		includes: [
			"Repairing small leaks or cracks in the roof",
			"Replacing missing or damaged shingles",
			"Applying sealants to reinforce waterproofing",
			"Securing loose flashing and trim",
		],
	},
	{
		title: "Seasonal Maintenance Plans",
		description:
			"East Texas climate requires attention throughout the year to handle seasonal changes.",
		includes: [
			"Spring preparation for storms and heavy rains",
			"Summer heat protection and ventilation checks",
			"Fall debris clearing and gutter maintenance",
			"Winter preparation and insulation inspection",
		],
	},
];

const howMaintenanceSaves = [
	{
		number: "1",
		title: "Avoids Expensive Repairs",
		description:
			"Small issues caught early are far less costly than major repairs.",
	},
	{
		number: "2",
		title: "Prevents Premature Replacement",
		description:
			"Maintenance extends the lifespan of your roof, delaying the need for a replacement.",
	},
	{
		number: "3",
		title: "Improves Energy Efficiency",
		description:
			"A well-maintained roof reduces energy costs by improving insulation.",
	},
];

const maintenanceSigns = [
	"Granules in gutters from asphalt shingles",
	"Stains or discoloration on the ceiling or walls",
	"Loose or missing shingles after storms",
	"Water pooling on flat or low-slope roofs",
	"Visible cracks or gaps in flashing",
	"Excessive moss or algae growth on roof surface",
];

const residentialServices = [
	"Routine inspections to address small issues before they worsen",
	"Cleaning and clearing debris to improve roof performance",
	"Repairs and reinforcements to keep your home safe and comfortable",
	"Gutter maintenance and downspout cleaning",
];

const commercialServices = [
	"Checking for ponding water and ensuring proper drainage",
	"Inspecting roofing membranes for punctures or tears",
	"Maintaining TPO, metal, and other roofing systems for optimal performance",
	"Minimizing disruptions to your business operations",
];

const maintenanceBenefits = [
	{
		icon: DollarSign,
		title: "Save Money",
		description: "Prevent expensive emergency repairs with regular maintenance",
	},
	{
		icon: Shield,
		title: "Extend Roof Life",
		description: "Regular care can add 5-10 years to your roof's lifespan",
	},
	{
		icon: Clock,
		title: "Warranty Protection",
		description: "Many warranties require regular professional maintenance",
	},
	{
		icon: Wrench,
		title: "Peace of Mind",
		description: "Know your roof is protected before storms hit East Texas",
	},
];

export function RoofMaintenancePage() {
	return (
		<>
			<Helmet>
				<title>
					Roof Maintenance Wills Point TX | Preventive Roof Care | Luna's
					Roofing LLC
				</title>
				<meta
					name="description"
					content="Professional roof maintenance in Wills Point, Terrell, Forney, Canton & Kaufman TX. Annual inspections, preventive care, extend roof life. Save thousands on repairs."
				/>
				<meta
					name="keywords"
					content="roof maintenance Wills Point TX, roof inspection Terrell, preventive roofing Forney, roof care Canton, annual roof check Kaufman, roof cleaning East Texas"
				/>
				<meta
					property="og:title"
					content="Professional Roof Maintenance | Luna's Roofing LLC | East Texas"
				/>
				<meta
					property="og:description"
					content="Extend your roof's life with professional maintenance. Annual inspections, preventive care, and early problem detection throughout East Texas."
				/>
				<meta property="og:type" content="service" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services/roof-maintenance"
				/>
				<link
					rel="canonical"
					href="https://www.lunasroofingllc.com/services/roof-maintenance"
				/>
			</Helmet>
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
					<div className="absolute inset-0">
						<img
							src="/luna_preventative_maintenance.png"
							alt="Professional roof maintenance and inspection in East Texas"
							className="w-full h-full object-cover opacity-20"
						/>
					</div>
					<div className="relative container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Professional Roof Maintenance in East Texas
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Extend your roof's lifespan with expert maintenance services from
							Luna's Roofing LLC, serving Wills Point, Terrell, Forney, Canton,
							and Kaufman.
						</p>
						<div className="bg-white text-slate-800 p-6 rounded-lg max-w-2xl mx-auto mb-8">
							<h3 className="text-2xl font-bold mb-4">
								Schedule Your Maintenance Inspection
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
									<Calendar className="mr-2 h-5 w-5" />
									Schedule Online
								</Button>
							</div>
						</div>
						<div className="text-center">
							<div className="inline-block bg-blue-100 text-slate-800 px-6 py-2 rounded-full font-semibold">
								💡 Preventive Care Saves Money Long-Term
							</div>
						</div>
					</div>
				</section>

				{/* Why Roof Maintenance Is Essential */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Protect Your Investment with Roof Maintenance in East Texas
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Your roof is one of the most critical components of your
								property, providing protection against the elements and ensuring
								structural integrity. The East Texas climate can be unforgiving,
								with scorching summers, heavy rainfall, and occasional storms.
								Regular maintenance offers numerous benefits:
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{whyMaintenanceEssential.map((benefit, index) => (
								<Card
									key={index}
									className="text-center p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
											{benefit.number}
										</div>
										<h3 className="text-lg font-bold mb-3 text-primary">
											{benefit.title}
										</h3>
										<p className="text-gray-600 text-sm">
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* What Our Roof Maintenance Services Include */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								What Our Roof Maintenance Services Include
							</h2>
						</div>

						<div className="grid lg:grid-cols-2 gap-12">
							{maintenanceServices.map((service, index) => (
								<Card
									key={index}
									className="p-8 hover:shadow-xl transition-shadow"
								>
									<CardContent className="p-0">
										<h3 className="text-2xl font-bold mb-4 text-primary">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-6">{service.description}</p>
										<ul className="space-y-3">
											{service.includes.map((item, idx) => (
												<li key={idx} className="flex items-start">
													<CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
													<span className="text-gray-700">{item}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Tailored Maintenance for Residential and Commercial Properties */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Tailored Maintenance for Residential and Commercial Properties
							</h2>
						</div>

						<div className="grid lg:grid-cols-2 gap-12">
							<Card className="p-8 hover:shadow-xl transition-shadow">
								<CardContent className="p-0">
									<h3 className="text-2xl font-bold mb-6 text-primary">
										Residential Roof Maintenance
									</h3>
									<p className="text-gray-600 mb-6">
										Your home's roof is essential for protecting your family and
										belongings. Our residential maintenance services include:
									</p>
									<ul className="space-y-3">
										{residentialServices.map((service, index) => (
											<li key={index} className="flex items-start">
												<CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700">{service}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<Card className="p-8 hover:shadow-xl transition-shadow">
								<CardContent className="p-0">
									<h3 className="text-2xl font-bold mb-6 text-primary">
										Commercial Roof Maintenance
									</h3>
									<p className="text-gray-600 mb-6">
										Commercial roofs often face unique challenges, such as flat
										or low-slope designs that make drainage a priority. Our
										commercial services include:
									</p>
									<ul className="space-y-3">
										{commercialServices.map((service, index) => (
											<li key={index} className="flex items-start">
												<CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700">{service}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* How Regular Maintenance Saves You Money */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								How Regular Maintenance Saves You Money
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Investing in regular roof maintenance is a cost-effective way to
								protect your property. Here's how it saves you money:
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{howMaintenanceSaves.map((saving, index) => (
								<Card
									key={index}
									className="text-center p-8 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
											{saving.number}
										</div>
										<h3 className="text-xl font-bold mb-3 text-primary">
											{saving.title}
										</h3>
										<p className="text-gray-600">{saving.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Signs Your Roof Needs Maintenance */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Signs Your Roof Needs Maintenance
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Even if your roof appears to be in good condition, certain signs
								indicate it's time for maintenance:
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							{maintenanceSigns.map((sign, index) => (
								<div
									key={index}
									className="flex items-start p-4 bg-gray-50 rounded-lg"
								>
									<CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
									<span className="text-gray-700 text-lg">{sign}</span>
								</div>
							))}
						</div>

						<div className="text-center mt-12">
							<p className="text-lg text-gray-600 mb-6">
								If you notice any of these signs, contact Luna's Roofing LLC for
								an inspection.
							</p>
							<Button asChild size="lg" className="bg-primary hover:bg-red-700">
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Schedule Inspection: (903) 340-9354
								</a>
							</Button>
						</div>
					</div>
				</section>

				{/* Protecting Your Roof Against East Texas Climate */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Protecting Your Roof Against East Texas Climate
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								East Texas weather can be unpredictable, with intense heat,
								strong winds, seasonal storms, and heavy rainfall. Roof
								maintenance ensures your property is prepared for these
								challenges by reinforcing weak spots, clearing debris, and
								addressing damage caused by extreme weather events.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{maintenanceBenefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<div key={index} className="text-center">
										<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
											<IconComponent className="h-8 w-8" />
										</div>
										<h3 className="text-xl font-semibold mb-3">
											{benefit.title}
										</h3>
										<p className="text-gray-600">{benefit.description}</p>
									</div>
								);
							})}
						</div>

						<div className="text-center mt-16">
							<div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
								<h3 className="text-2xl font-bold mb-4 text-primary">
									Seasonal Challenges in East Texas
								</h3>
								<div className="grid md:grid-cols-2 gap-6 text-left">
									<div>
										<h4 className="font-semibold text-gray-800 mb-2">
											Spring & Summer:
										</h4>
										<p className="text-gray-600 text-sm">
											Severe storms, hail damage, intense heat, and UV exposure
										</p>
									</div>
									<div>
										<h4 className="font-semibold text-gray-800 mb-2">
											Fall & Winter:
										</h4>
										<p className="text-gray-600 text-sm">
											Heavy rains, debris buildup, occasional freezes
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Service Areas */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Roof Maintenance Throughout East Texas
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Regular maintenance programs available throughout Van Zandt and
								Kaufman Counties
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
							{[
								{
									city: "Wills Point",
									focus: "Historic homes & new construction",
								},
								{ city: "Terrell", focus: "Growing residential communities" },
								{ city: "Forney", focus: "New suburban developments" },
								{ city: "Canton", focus: "Rural properties & older homes" },
								{ city: "Kaufman", focus: "Mixed residential & commercial" },
							].map((area, index) => (
								<Card
									key={index}
									className="p-6 text-center hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<h3 className="text-xl font-bold mb-2 text-primary">
											{area.city}
										</h3>
										<p className="text-sm text-gray-600">{area.focus}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								Frequently Asked Questions About Roof Maintenance
							</h2>
						</div>

						<div className="max-w-4xl mx-auto space-y-6">
							{[
								{
									question: "How often should I schedule roof maintenance?",
									answer:
										"We recommend scheduling maintenance at least twice a year—once in the spring and once in the fall. This helps prepare your roof for East Texas seasonal weather changes.",
								},
								{
									question: "Can maintenance prevent roof replacement?",
									answer:
										"Yes, regular maintenance can significantly extend your roof's lifespan, delaying the need for a replacement by identifying and addressing issues early.",
								},
								{
									question: "Is roof maintenance expensive?",
									answer:
										"The cost of maintenance is minimal compared to the expense of major repairs or a full replacement. Contact us for a custom quote tailored to your property.",
								},
								{
									question: "Can you maintain commercial roofs?",
									answer:
										"Yes, we specialize in maintaining a wide range of commercial roofing systems, including flat and low-slope roofs, TPO, metal, and other commercial materials.",
								},
								{
									question: "What happens if I don't maintain my roof?",
									answer:
										"Neglecting maintenance can lead to leaks, structural damage, and the need for premature replacement, all of which are far more costly than regular upkeep.",
								},
							].map((faq, index) => (
								<Card
									key={index}
									className="p-6 hover:shadow-lg transition-shadow"
								>
									<CardContent className="p-0">
										<h3 className="text-lg font-semibold mb-3 text-primary">
											{faq.question}
										</h3>
										<p className="text-gray-600">{faq.answer}</p>
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
							Contact Luna's Roofing LLC for Roof Maintenance in East Texas
						</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Don't wait until minor roofing issues turn into major problems.
							Protect your property with professional roof maintenance from
							Luna's Roofing LLC.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-5 w-5" />
									Call Today: (903) 340-9354
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-primary border-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4"
							>
								<Calendar className="mr-2 h-5 w-5" />
								Request Free Quote
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

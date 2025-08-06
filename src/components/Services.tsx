import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Home, RefreshCw, Zap, Shield, Wrench, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
	{
		icon: Home,
		title: "Residential Roofing",
		description:
			"Full roof replacements and installations for homes in Wills Point, Terrell, Forney, Canton, and Kaufman with premium craftsmanship.",
		features: [
			"Composition Shingles",
			"Metal Roofing",
			"TPO Membrane",
			"Modified Roofs",
		],
		image: "/luna_residential_roofing.png",
		route: "/services/residential-roofing",
	},
	{
		icon: Building2,
		title: "Commercial Roofing",
		description:
			"Professional commercial roofing solutions for businesses in Terrell, Forney, Canton, Kaufman, and Wills Point areas.",
		features: [
			"TPO Membrane",
			"Modified Roofs",
			"Metal Roofing",
			"Fully Licensed & Insured",
		],
		image: "/commercial_luna_roofing.png",
		route: "/services/commercial-roofing",
	},
	{
		icon: Zap,
		title: "Emergency Repairs",
		description:
			"24/7 emergency roofing services for storm damage, leaks, and urgent repairs throughout Texas.",
		features: [
			"Storm Response",
			"Leak Repairs",
			"Tarp Services",
			"Insurance Claims",
		],
		image: "/luna_emergency_roof_damage.png",
		route: "/services/emergency-repairs",
	},
	{
		icon: RefreshCw,
		title: "Roof Maintenance",
		description:
			"Comprehensive roof maintenance and inspection services to extend your roof's lifespan.",
		features: [
			"Annual Inspections",
			"Gutter Cleaning",
			"Minor Repairs",
			"Preventive Care",
		],
		image: "/luna_preventative_maintenance.png",
		route: "/services/roof-maintenance",
	},
	{
		icon: Shield,
		title: "Insurance Claims",
		description:
			"Expert assistance with insurance claims for storm damage and roofing-related issues.",
		features: [
			"Claim Filing",
			"Adjuster Meetings",
			"Damage Assessment",
			"Full Documentation",
		],
		image: "/luna_insurance_claims.png",
		route: "/",
	},
	{
		icon: Wrench,
		title: "Gutters & Exterior",
		description:
			"Complete exterior solutions including gutters, siding, fascia, and soffit replacement.",
		features: [
			"Gutter Installation",
			"Siding Replacement",
			"Fascia Replacement",
			"Soffit Replacement",
		],
		image: "/luna_residential_gutters.png",
		route: "/services/gutters-exterior",
	},
];

export function Services() {
	return (
		<section
			id="services"
			className="relative py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 overflow-hidden"
		>
			{/* Roof Shingle Pattern Background */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.6'%3E%3Cpath d='M0 0h40v20H0z'/%3E%3Cpath d='M40 20h40v20H40z'/%3E%3Cpath d='M20 10h40v20H20z'/%3E%3Cpath d='M60 30h20v10H60z'/%3E%3Cpath d='M0 30h20v10H0z'/%3E%3C/g%3E%3C/svg%3E")`,
						backgroundSize: "80px 40px",
					}}
				></div>
			</div>

			{/* Geometric Roof Shapes */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Top left roof shape */}
				<div className="absolute -top-32 -left-32 w-64 h-64 transform rotate-45">
					<div className="w-full h-full bg-gradient-to-br from-primary/8 to-red-600/5 rounded-lg"></div>
				</div>

				{/* Top right roof shape */}
				<div className="absolute -top-20 -right-20 w-48 h-48 transform -rotate-12">
					<div className="w-full h-full bg-gradient-to-bl from-blue-500/8 to-slate-600/5 rounded-lg"></div>
				</div>

				{/* Bottom left roof angle */}
				<div className="absolute -bottom-24 -left-24 w-72 h-72 transform rotate-12">
					<div className="w-full h-full bg-gradient-to-tr from-slate-500/8 to-gray-400/5 rounded-lg"></div>
				</div>

				{/* Bottom right roof shape */}
				<div className="absolute -bottom-16 -right-16 w-56 h-56 transform rotate-45">
					<div className="w-full h-full bg-gradient-to-tl from-primary/8 to-red-500/5 rounded-lg"></div>
				</div>

				{/* Center decorative roof lines */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
					<div className="absolute inset-0 transform rotate-45">
						<div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent absolute top-1/4"></div>
						<div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent absolute top-2/4"></div>
						<div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent absolute top-3/4"></div>
					</div>
				</div>
			</div>

			<div className="relative container mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight pb-4 text-primary">
						Our Roofing Services
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						From emergency repairs to complete roof replacements, Luna's Roofing
						LLC provides comprehensive roofing services throughout Wills Point,
						Terrell, Forney, Canton, and Kaufman. We serve both residential and
						commercial properties with full licensing and general liability
						insurance.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<Link key={index} to={service.route} className="block">
								<Card className="group hover:shadow-xl transition-all duration-300 border-0 border-l-8 border-l-primary shadow-lg hover:scale-105 cursor-pointer">
									<CardHeader className="pb-4">
										<div className="relative mb-6">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-64 object-cover rounded-lg"
											/>
											<div className="absolute -bottom-4 left-6 bg-primary text-white p-4 rounded-lg shadow-lg group-hover:bg-red-700 transition-colors">
												<IconComponent className="h-6 w-6" />
											</div>
										</div>
										<CardTitle className="text-xl group-hover:text-primary transition-colors font-bold">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<p className="text-gray-600 group-hover:text-gray-700">
											{service.description}
										</p>
										<ul className="space-y-2">
											{service.features.map((feature, idx) => (
												<li
													key={idx}
													className="flex items-center text-sm text-gray-600"
												>
													<div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-red-700 transition-colors"></div>
													{feature}
												</li>
											))}
										</ul>
										<div className="pt-4">
											<span className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-red-700 transition-colors">
												Learn More
												<svg
													className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										</div>
									</CardContent>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

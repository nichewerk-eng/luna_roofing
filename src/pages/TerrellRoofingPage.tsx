import { SEO } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Button } from "../components/ui/button";
import { Shield, Phone, Clock } from "lucide-react";

export const TerrellRoofingPage = () => {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Terrell Roofing Services",
		description: "Professional roofing services in Terrell, TX",
		provider: {
			"@type": "RoofingContractor",
			name: "Luna's Roofing LLC",
			telephone: "(903) 340-9354",
		},
		areaServed: "Terrell, TX",
	};

	return (
		<>
			<SEO
				title="Terrell Roofer - Luna's Roofing LLC | Expert Roofing Contractor"
				description="Top-rated Terrell roofing contractor. Professional roof repair, replacement & emergency services. Insured & bonded. Free estimates! Call (903) 340-9354"
				keywords="Terrell roofer, Terrell roofing contractor, roof repair Terrell TX, emergency roofing Terrell"
				canonical="https://www.lunasroofingllc.com/terrell-roofing"
				structuredData={structuredData}
			/>
			<Header />

			<main>
				<section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Terrell's Trusted Roofing Contractor
						</h1>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Serving Terrell, TX with professional roofing services. Your local
							roofing experts since day one.
						</p>
						<Button
							asChild
							size="lg"
							className="bg-white text-primary hover:bg-gray-100"
						>
							<a href="tel:9033409354">
								<Phone className="mr-2 h-5 w-5" />
								Call (903) 340-9354 - Free Estimate
							</a>
						</Button>
					</div>
				</section>

				<section className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold mb-8 text-center text-primary">
								Professional Terrell Roofing Services
							</h2>

							<div className="prose prose-lg mx-auto text-gray-600 mb-12">
								<p className="text-lg leading-relaxed mb-6">
									Luna's Roofing LLC proudly serves Terrell, Texas with
									comprehensive roofing services. From the historic downtown
									district to the growing residential areas, we've helped
									protect Terrell homes and businesses for years.
								</p>

								<p className="text-lg leading-relaxed">
									Our Terrell roofing team understands the unique challenges
									that North Texas weather brings, including severe storms,
									hail, and high winds. We're here to help 24/7.
								</p>
							</div>

							<div className="bg-gray-50 rounded-lg p-8 mb-12">
								<h3 className="text-2xl font-bold mb-6 text-center text-primary">
									Why Terrell Chooses Luna's Roofing LLC
								</h3>

								<div className="grid md:grid-cols-2 gap-8">
									<div>
										<h4 className="text-lg font-semibold mb-4 flex items-center">
											<Shield className="h-5 w-5 text-primary mr-2" />
											Insured & Bonded in Texas
										</h4>
										<p className="text-gray-600 mb-4">
											Fully insured roofing contractor with comprehensive
											general liability coverage for all Terrell roofing
											projects.
										</p>
									</div>

									<div>
										<h4 className="text-lg font-semibold mb-4 flex items-center">
											<Clock className="h-5 w-5 text-primary mr-2" />
											24/7 Emergency Response
										</h4>
										<p className="text-gray-600 mb-4">
											Storm damage doesn't wait, and neither do we. Emergency
											roofing services available around the clock in Terrell.
										</p>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-bold mb-4 text-primary">
										Residential Roofing
									</h3>
									<ul className="space-y-2">
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Composition shingle roofing
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Metal roofing installation
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Storm damage repair
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Gutter installation & repair
										</li>
									</ul>
								</div>

								<div>
									<h3 className="text-xl font-bold mb-4 text-primary">
										Commercial Roofing
									</h3>
									<ul className="space-y-2">
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											TPO membrane roofing
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Modified bitumen systems
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Commercial repairs
										</li>
										<li className="flex items-center">
											<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
											Preventive maintenance
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Contact />
			</main>

			<Footer />
		</>
	);
};

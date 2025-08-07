import { SEO } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Button } from "../components/ui/button";
import { Shield, Award, Phone, Clock } from "lucide-react";

export const ForneyRoofingPage = () => {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Forney Roofing Services",
		description: "Professional roofing services in Forney, TX",
		provider: {
			"@type": "RoofingContractor",
			name: "Luna's Roofing LLC",
			telephone: "(903) 340-9354",
		},
		areaServed: "Forney, TX",
	};

	return (
		<>
			<SEO
				title="Forney Roofer - Luna's Roofing LLC | Professional Roofing Services"
				description="Trusted Forney roofing contractor. Expert roof repair, replacement & storm damage services. Insured & bonded. Free estimates! Call (903) 340-9354"
				keywords="Forney roofer, Forney roofing contractor, roof repair Forney TX, storm damage Forney"
				canonical="https://www.lunasroofingllc.com/forney-roofing"
				structuredData={structuredData}
			/>
			<Header />

			<main>
				<section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Forney's Premier Roofing Contractor
						</h1>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Protecting Forney homes and businesses with expert roofing
							services. Fast, reliable, and professional.
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
								Expert Forney Roofing Solutions
							</h2>

							<div className="prose prose-lg mx-auto text-gray-600 mb-12">
								<p className="text-lg leading-relaxed mb-6">
									Luna's Roofing LLC is proud to serve the growing community of
									Forney, Texas. From established neighborhoods to new
									developments, we provide comprehensive roofing services
									throughout the area.
								</p>

								<p className="text-lg leading-relaxed">
									As Forney continues to grow, we're here to protect your
									investment with quality roofing solutions. Our team
									understands the importance of quick response times and quality
									workmanship.
								</p>
							</div>

							<div className="grid md:grid-cols-3 gap-8 mb-12">
								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Shield className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">Quality Materials</h3>
									<p className="text-gray-600">
										Premium roofing materials for Forney's climate
									</p>
								</div>

								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Award className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">
										Expert Installation
									</h3>
									<p className="text-gray-600">
										Professional roofing craftsmen
									</p>
								</div>

								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Clock className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">Fast Response</h3>
									<p className="text-gray-600">
										Quick service for Forney residents
									</p>
								</div>
							</div>

							<div className="bg-gray-50 rounded-lg p-8">
								<h3 className="text-2xl font-bold mb-6 text-center text-primary">
									Complete Forney Roofing Services
								</h3>

								<div className="grid md:grid-cols-2 gap-8">
									<div>
										<h4 className="text-lg font-semibold mb-4">
											Storm Damage Specialists
										</h4>
										<p className="text-gray-600 mb-4">
											Forney experiences severe weather, and we're prepared to
											handle any storm damage quickly and efficiently.
										</p>
										<ul className="space-y-2">
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Hail damage assessment
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Emergency tarping
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Insurance claim assistance
											</li>
										</ul>
									</div>

									<div>
										<h4 className="text-lg font-semibold mb-4">
											New Construction
										</h4>
										<p className="text-gray-600 mb-4">
											Supporting Forney's growth with roofing for new homes and
											commercial buildings.
										</p>
										<ul className="space-y-2">
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												New home roofing
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Commercial projects
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Builder partnerships
											</li>
										</ul>
									</div>
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

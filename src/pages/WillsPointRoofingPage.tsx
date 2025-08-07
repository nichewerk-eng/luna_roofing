import { SEO } from "../components/SEO";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Button } from "../components/ui/button";
import { Shield, Award, Phone, Clock } from "lucide-react";

export const WillsPointRoofingPage = () => {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Wills Point Roofing Services",
		description: "Professional roofing services in Wills Point, TX",
		provider: {
			"@type": "RoofingContractor",
			name: "Luna's Roofing LLC",
			telephone: "(903) 340-9354",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Wills Point",
				addressRegion: "TX",
			},
		},
		areaServed: "Wills Point, TX",
	};

	return (
		<>
			<SEO
				title="Wills Point Roofer - Luna's Roofing LLC | Local Roofing Contractor"
				description="#1 Wills Point roofing contractor. Expert roof repair, replacement & emergency services. Local, insured & bonded. Free estimates! Call (903) 340-9354"
				keywords="Wills Point roofer, Wills Point roofing contractor, roof repair Wills Point TX, emergency roofing Wills Point"
				canonical="https://www.lunasroofingllc.com/wills-point-roofing"
				structuredData={structuredData}
			/>
			<Header />

			<main>
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Wills Point's #1 Roofing Contractor
						</h1>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Serving Wills Point, TX with expert roofing services since day
							one. Insured, bonded, and locally owned.
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

				{/* Local Content */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold mb-8 text-center text-primary">
								Trusted Wills Point Roofing Services
							</h2>

							<div className="prose prose-lg mx-auto text-gray-600 mb-12">
								<p className="text-lg leading-relaxed mb-6">
									As Wills Point's premier roofing contractor, Luna's Roofing
									LLC has been protecting homes and businesses in our community
									for years. We understand the unique weather challenges that
									East Texas brings, from severe thunderstorms to hail damage.
								</p>

								<p className="text-lg leading-relaxed">
									From the historic downtown area to the newer developments,
									we've worked on all types of properties throughout Wills
									Point. Our local expertise means faster response times and
									better understanding of your roofing needs.
								</p>
							</div>

							{/* Features Grid */}
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Shield className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">Insured & Bonded</h3>
									<p className="text-gray-600">
										Fully insured Wills Point roofer
									</p>
								</div>

								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Award className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">Local Experts</h3>
									<p className="text-gray-600">Wills Point-based company</p>
								</div>

								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Clock className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">24/7 Emergency</h3>
									<p className="text-gray-600">Storm damage response</p>
								</div>

								<div className="text-center">
									<div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
										<Phone className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-bold mb-2">Free Estimates</h3>
									<p className="text-gray-600">No obligation inspections</p>
								</div>
							</div>

							{/* Services List */}
							<div className="bg-gray-50 rounded-lg p-8">
								<h3 className="text-2xl font-bold mb-6 text-center text-primary">
									Our Wills Point Roofing Services
								</h3>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<h4 className="text-lg font-semibold mb-3">
											Residential Services
										</h4>
										<ul className="space-y-2">
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Roof replacement and installation
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Storm damage repair
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Gutter installation and repair
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Emergency tarping services
											</li>
										</ul>
									</div>

									<div>
										<h4 className="text-lg font-semibold mb-3">
											Commercial Services
										</h4>
										<ul className="space-y-2">
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Commercial roof replacement
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												TPO membrane roofing
											</li>
											<li className="flex items-center">
												<div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
												Insurance claim assistance
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
					</div>
				</section>

				<Contact />
			</main>

			<Footer />
		</>
	);
};

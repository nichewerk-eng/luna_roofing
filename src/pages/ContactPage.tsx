import React from "react";
import { Helmet } from "react-helmet-async";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ContactPage = () => {
	return (
		<>
			<Helmet>
				<title>
					Contact Luna's Roofing LLC | Free Estimates | Wills Point TX Roofer
				</title>
				<meta
					name="description"
					content="Contact Luna's Roofing LLC for free roofing estimates in Wills Point, Terrell, Forney, Canton & Kaufman TX. Call (903) 340-9354 or request online. Insured & bonded roofers."
				/>
				<meta
					name="keywords"
					content="contact Luna's Roofing LLC, free roofing estimate Wills Point TX, Terrell roofer contact, Forney roof repair quote, Canton roofing contractor, Kaufman emergency roof service, East Texas roofer phone number"
				/>
				<meta
					property="og:title"
					content="Contact Luna's Roofing LLC | Free Roofing Estimates in East Texas"
				/>
				<meta
					property="og:description"
					content="Get your free roofing estimate today! Luna's Roofing LLC serves Wills Point, Terrell, Forney, Canton, and Kaufman with 24/7 emergency service."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/contact"
				/>
				<link rel="canonical" href="https://www.lunasroofingllc.com/contact" />

				{/* Local Business Schema */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "RoofingContractor",
						name: "Luna's Roofing LLC",
						description:
							"Professional roofing contractor serving Wills Point, Terrell, Forney, Canton, and Kaufman TX with residential and commercial roofing services.",
						url: "https://www.lunasroofingllc.com",
						telephone: "(903) 340-9354",
						email: "ram@lunasroofingllc.com",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Wills Point",
							addressRegion: "TX",
							addressCountry: "US",
						},
						areaServed: [
							{
								"@type": "City",
								name: "Wills Point",
								addressRegion: "TX",
							},
							{
								"@type": "City",
								name: "Terrell",
								addressRegion: "TX",
							},
							{
								"@type": "City",
								name: "Forney",
								addressRegion: "TX",
							},
							{
								"@type": "City",
								name: "Canton",
								addressRegion: "TX",
							},
							{
								"@type": "City",
								name: "Kaufman",
								addressRegion: "TX",
							},
						],
						serviceType: [
							"Roof Replacement",
							"Roof Repair",
							"Emergency Roof Repair",
							"Roof Maintenance",
							"Gutter Installation",
							"Gutter Repair",
							"Commercial Roofing",
							"Residential Roofing",
							"Storm Damage Repair",
							"Insurance Claim Assistance",
						],
						priceRange: "$$",
						openingHours: ["Mo-Fr 07:00-19:00", "Sa 08:00-17:00"],
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Roofing Services",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Free Roofing Estimate",
										description:
											"Comprehensive roof inspection and detailed estimate",
									},
									price: "0",
									priceCurrency: "USD",
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "24/7 Emergency Roofing Service",
										description:
											"Emergency roof repair available around the clock",
									},
								},
							],
						},
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "5",
							bestRating: "5",
							ratingCount: "127",
						},
						sameAs: ["https://maps.app.goo.gl/T8yYyUQDhf5AYk6H6"],
					})}
				</script>
			</Helmet>

			{/* Enhanced Contact Page Layout */}
			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
				<Header />

				{/* Hero Section for Contact */}
				<section className="relative py-20 bg-gradient-to-r from-white via-gray-600 to-gray-700 text-white overflow-hidden">
					{/* Animated Background Elements */}
					<div className="absolute inset-0 opacity-20">
						<div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
					</div>

					{/* Roof Pattern Overlay */}
					<div className="absolute inset-0 opacity-10">
						<div
							className="w-full h-full"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 15L30 0L60 15v15H0z'/%3E%3C/g%3E%3C/svg%3E")`,
								backgroundSize: "60px 30px",
								backgroundRepeat: "repeat",
							}}
						></div>
					</div>

					<div className="relative container mx-auto px-4 text-center z-10">
						<div className="max-w-4xl mx-auto">
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
								Get Your Free
								<span className="block text-white">Roofing Estimate</span>
							</h1>
							<p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in-delay">
								Join hundreds of satisfied customers in Wills Point, Terrell,
								Forney, Canton, and Kaufman
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
								<a
									href="tel:9033409354"
									className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
								>
									<span className="mr-2">📞</span>
									Call (903) 340-9354
								</a>
								<p className="text-red font-semibold">
									or fill out the form below
								</p>
							</div>
						</div>
					</div>
				</section>

				<main className="relative -mt-10 z-10">
					{/* Enhanced Contact Component Container */}
					<div className="container mx-auto px-4">
						<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
							<Contact />
						</div>
					</div>
				</main>

				{/* Trust Indicators Section */}
				<section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-12">
							Why East Texas Trusts Us
						</h2>
						<div className="grid md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-4xl mb-4">🏆</div>
								<h3 className="text-xl font-bold mb-2">Insured & Bonded</h3>
								<p className="text-gray-300">
									Fully insured roofing professionals
								</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">⭐</div>
								<h3 className="text-xl font-bold mb-2">5-Star Reviews</h3>
								<p className="text-gray-300">Hundreds of satisfied customers</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">⚡</div>
								<h3 className="text-xl font-bold mb-2">24/7 Emergency</h3>
								<p className="text-gray-300">Always here when you need us</p>
							</div>
							<div className="text-center">
								<div className="text-4xl mb-4">🏠</div>
								<h3 className="text-xl font-bold mb-2">Local Experts</h3>
								<p className="text-gray-300">Your Wills Point neighbors</p>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-16">
				{/* Main Footer Content */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="space-y-6 text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start">
							<div className="mr-4">
								<img
									src="/luna_roofing_logo.png"
									alt="Luna's Roofing LLC Logo"
									className="h-12 w-auto"
								/>
							</div>
							<div>
								<h3 className="text-2xl">Luna's Roofing LLC</h3>
								<p className="text-gray-400">Quality Roofing You Can Trust</p>
							</div>
						</div>
						<p className="text-gray-300">
							Wills Point's premier roofing contractor serving Terrell, Forney,
							Canton, and Kaufman. Protecting Van Zandt and Kaufman County
							families with superior craftsmanship and honest service.
						</p>
						<div className="flex items-center justify-center md:justify-start space-x-2">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
						</div>
					</div>

					{/* Services */}
					<div className="space-y-4 text-center md:text-left">
						<h3 className="text-xl">Our Services</h3>
						<ul className="space-y-3 text-gray-300">
							<li>
								<a
									href="/services/residential-roofing"
									className="hover:text-white transition-colors"
								>
									Full Roof Replacements
								</a>
							</li>
							<li>
								<a
									href="/services/emergency-repairs"
									className="hover:text-white transition-colors"
								>
									Roof Repairs
								</a>
							</li>
							<li>
								<a
									href="/services/gutters-exterior"
									className="hover:text-white transition-colors"
								>
									Gutters
								</a>
							</li>
							<li>
								<a
									href="/services/gutters-exterior"
									className="hover:text-white transition-colors"
								>
									Siding
								</a>
							</li>
							<li>
								<a
									href="/services/gutters-exterior"
									className="hover:text-white transition-colors"
								>
									Fascia & Soffit
								</a>
							</li>
							<li>
								<a
									href="/services"
									className="hover:text-white transition-colors"
								>
									Residential & Commercial
								</a>
							</li>
							<li>
								<p
									className="hover:text-white transition-colors"
								>
									Insurance Claims
								</p>
							</li>
						</ul>
					</div>

					{/* Service Areas */}
					<div className="space-y-4 text-center md:text-left">
						<h3 className="text-xl">Priority Service Areas</h3>
						<ul className="space-y-3 text-gray-300">
							<li>
								<p className="hover:text-white transition-colors text-primary font-semibold">
									Wills Point, TX - Home Base
								</p>
							</li>
							<li>
								<p className="hover:text-white transition-colors">
									Terrell, TX - Roofing Services
								</p>
							</li>
							<li>
								<p className="hover:text-white transition-colors">
									Forney, TX - Premium Roofing
								</p>
							</li>
							<li>
								<p className="hover:text-white transition-colors">
									Canton, TX - Local Roofers
								</p>
							</li>
							<li>
								<p className="hover:text-white transition-colors">
									Kaufman, TX - Roof Repair
								</p>
							</li>
							<li className="pt-2 border-t border-gray-700">
								<span className="text-sm text-gray-400">
									Van Zandt & Kaufman Counties
								</span>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-6 text-center md:text-left">
						<h3 className="text-xl">Contact Us</h3>
						<div className="space-y-4">
							<div className="flex items-center justify-center md:justify-start space-x-3">
								<Phone className="h-5 w-5 text-primary" />
								<div>
									<a
										href="tel:9033409354"
										className="text-lg hover:text-white transition-colors"
									>
										(903) 340-9354
									</a>
									<p className="text-sm text-gray-400">
										24/7 Emergency Service
									</p>
								</div>
							</div>
							<div className="flex items-center justify-center md:justify-start space-x-3">
								<Mail className="h-5 w-5 text-primary" />
								<div>
									<p>ram@lunasroofingllc.com</p>
									<p className="text-sm text-gray-400">
										Free estimates within 24hrs
									</p>
								</div>
							</div>
							<div className="flex items-start justify-center md:justify-start space-x-3">
								<MapPin className="h-5 w-5 text-primary mt-1" />
								<div>
									<p>Based in Wills Point, TX</p>
									<p className="text-sm text-gray-400">
										Serving Van Zandt & Kaufman Counties
									</p>
								</div>
							</div>
						</div>

						<div className="bg-primary p-4 rounded-lg">
							<h4 className="mb-2">Need Emergency Service?</h4>
							<p className="text-sm mb-3">Storm damage doesn't wait!</p>
							<Button
								asChild
								className="w-full bg-white text-primary hover:bg-gray-100"
							>
								<a href="tel:9033409354">Call Now: (903) 340-9354</a>
							</Button>
						</div>
					</div>
				</div>

				<Separator className="bg-gray-700 mb-8" />

				{/* Bottom Footer */}
				<div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-center lg:text-left">
					<div className="text-sm text-slate-400">
						© {year} Website by{" "}
						<a
							href="https://www.nichedoor.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-blue"
						>
							Nichedoor - Local Web Design & SEO Experts
						</a>
						. All Rights Reserved.
					</div>
					<div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
						{/* <a href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Terms of Service
						</a>
						<a href="#" className="hover:text-white transition-colors">
							License Info
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Sitemap
						</a> */}
					</div>
				</div>
			</div>
		</footer>
	);
}

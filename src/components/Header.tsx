import { Button } from "./ui/button";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<header className="bg-white shadow-sm">
			{/* Top bar with contact info */}
			<div className="bg-gray-800 text-white py-2">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
						<div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
							<div className="flex items-center space-x-2">
								<Phone className="h-4 w-4 text-primary" />
								<a
									href="tel:9033409354"
									className="text-sm hover:text-white transition-colors"
								>
									(903) 340-9354
								</a>
							</div>
							<div className="flex items-center space-x-2">
								<MapPin className="h-4 w-4 text-primary" />
								<span className="text-sm">
									Wills Point, TX • Terrell • Forney • Canton • Kaufman
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Clock className="h-4 w-4 text-primary" />
								<span className="text-sm">24/7 Emergency Service</span>
							</div>
						</div>
						<a href="https://maps.app.goo.gl/N5RhdBardLCj1zD86">
							<div className="flex items-center space-x-2">
								<div className="flex">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="h-4 w-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<span className="text-sm"> on Google</span>
							</div>
						</a>
					</div>
				</div>
			</div>

			{/* Main navigation */}
			<div className="bg-white border-b">
				<div className="container mx-auto px-4">
					{/* Desktop Layout */}
					<div className="hidden lg:flex justify-between items-center py-4">
						{/* Logo */}
						<Link
							to="/"
							className="flex items-center hover:opacity-80 transition-opacity"
						>
							<div className="mr-4">
								<img
									src="/luna_roofing_logo.png"
									alt="Luna's Roofing LLC Logo"
									className="h-16 w-auto"
								/>
							</div>
							<div>
								<h1 className="text-2xl text-black font-bold">
									Luna's Roofing LLC
								</h1>
								<p className="text-sm text-gray-600">
									Quality Roofing You Can Trust
								</p>
							</div>
						</Link>

						{/* Navigation Menu - Centered */}
						<nav className="flex items-center space-x-8">
							<Link
								to="/"
								className="text-gray-700 hover:text-primary transition-colors text-xl font-bold"
							>
								Home
							</Link>
							<div className="relative group">
								<Link
									to="/services"
									className="text-gray-700 hover:text-primary transition-colors flex items-center text-xl font-bold"
								>
									Services
									<svg
										className="ml-1 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
									<div className="py-2">
										<Link
											to="/services/residential-roofing"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
										>
											Residential Roofing
										</Link>
										<Link
											to="/services/commercial-roofing"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
										>
											Commercial Roofing
										</Link>
										<Link
											to="/services/emergency-repairs"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
										>
											Emergency Repairs
										</Link>
										<Link
											to="/services/roof-maintenance"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
										>
											Roof Maintenance
										</Link>
										<Link
											to="/services/gutters-exterior"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
										>
											Gutters & Exterior
										</Link>
									</div>
								</div>
							</div>
							<a
								href="/about"
								className="text-gray-700 hover:text-primary transition-colors text-xl font-bold"
							>
								About
							</a>
							<Link
								to="/contact"
								className="text-gray-700 hover:text-primary transition-colors text-xl font-bold"
							>
								Contact
							</Link>
						</nav>

						{/* FREE ESTIMATE Button - Right Side */}
						<div>
							<Button
								className="bg-primary hover:bg-red-700 text-xl font-bold"
								onClick={() => {
									window.location.href = "/contact";
								}}
							>
								FREE ESTIMATE
							</Button>
						</div>
					</div>

					{/* Mobile Layout */}
					<div className="lg:hidden">
						{/* Mobile Header Row */}
						<div className="relative py-4">
							{/* Mobile Menu Button - Top Right */}
							<button
								className="absolute top-4 right-0 text-gray-700 hover:text-primary p-2"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								{isMobileMenuOpen ? (
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>

							{/* Centered Logo and Text Stack */}
							<Link
								to="/"
								className="flex flex-col items-center text-center hover:opacity-80 transition-opacity"
							>
								<div className="mb-2">
									<img
										src="/luna_roofing_logo.png"
										alt="Luna's Roofing LLC Logo"
										className="h-16 w-auto"
									/>
								</div>
								<div>
									<p className="text-sm text-gray-600">
										Quality Roofing You Can Trust
									</p>
								</div>
							</Link>
						</div>

						{/* Mobile Navigation Menu */}
						{isMobileMenuOpen && (
							<div className="border-t border-gray-200 bg-white">
								<nav className="px-4 py-4 space-y-3">
									<Link
										to="/"
										className="block text-gray-700 hover:text-primary transition-colors py-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										Home
									</Link>
									<Link
										to="/services"
										className="block text-gray-700 hover:text-primary transition-colors py-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										Services
									</Link>
									<div className="pl-4 space-y-2">
										<Link
											to="/services/residential-roofing"
											className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											• Residential Roofing
										</Link>
										<Link
											to="/services/commercial-roofing"
											className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											• Commercial Roofing
										</Link>
										<Link
											to="/services/emergency-repairs"
											className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											• Emergency Repairs
										</Link>
										<Link
											to="/services/roof-maintenance"
											className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											• Roof Maintenance
										</Link>
										
										<Link
											to="/services/gutters-exterior"
											className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											• Gutters & Exterior
										</Link>
									</div>
									<a
										href="/about"
										className="block text-gray-700 hover:text-primary transition-colors py-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										About
									</a>
									<Link
										to="/contact"
										className="block text-gray-700 hover:text-primary transition-colors py-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										Contact
									</Link>
								</nav>
							</div>
						)}

						{/* Centered FREE ESTIMATE Button */}
						<div className="pb-4 flex justify-center">
							<Button
								className="bg-primary hover:bg-red-700 w-48"
								onClick={() => {
									window.location.href = "/contact";
								}}
							>
								FREE ESTIMATE
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, MapPin } from "lucide-react";

const projects = [
	{
		title: "Historic Home Restoration",
		location: "Wills Point, TX",
		category: "Residential",
		description:
			"Complete roof replacement on 1920s historic home with custom matching materials and preservation techniques.",
		image:
			"https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2024",
		size: "3,200 sq ft",
	},
	{
		title: "Commercial Warehouse Re-Roof",
		location: "Terrell, TX",
		category: "Commercial",
		description:
			"TPO membrane installation on large distribution center with updated insulation and drainage systems.",
		image:
			"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2024",
		size: "45,000 sq ft",
	},
	{
		title: "Storm Damage Restoration",
		location: "Forney, TX",
		category: "Insurance Claim",
		description:
			"Full roof replacement after severe hail damage with complete insurance claim management and coordination.",
		image:
			"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2024",
		size: "2,800 sq ft",
	},
	{
		title: "Luxury Home Metal Roof",
		location: "Canton, TX",
		category: "Residential",
		description:
			"Premium standing seam metal roof installation with architectural design elements and energy efficiency features.",
		image:
			"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2023",
		size: "4,500 sq ft",
	},
	{
		title: "Multi-Family Complex",
		location: "Kaufman, TX",
		category: "Commercial",
		description:
			"Complete roofing system for 24-unit apartment complex with coordinated scheduling and minimal disruption.",
		image:
			"https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2023",
		size: "18,000 sq ft",
	},
	{
		title: "Tile Roof Restoration",
		location: "Wills Point, TX",
		category: "Restoration",
		description:
			"Clay tile roof restoration with underlayment replacement and protective coating application for extended life.",
		image:
			"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
		completion: "2024",
		size: "3,600 sq ft",
	},
];

export function Projects() {
	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl mb-6">Recent Roofing Projects</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Take a look at some of our recent roofing projects in Wills Point,
						Terrell, Forney, Canton, and Kaufman. Each project showcases our
						commitment to quality and customer satisfaction throughout Van Zandt
						and Kaufman Counties.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
						>
							<div className="relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute top-4 right-4">
									<Badge
										variant="secondary"
										className="bg-white/90 text-gray-800"
									>
										{project.category}
									</Badge>
								</div>
								<div className="absolute top-4 left-4">
									<Badge className="bg-primary text-white">
										{project.completion}
									</Badge>
								</div>
								<div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
									{project.size}
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<div className="flex items-center text-gray-600 mb-3">
									<MapPin className="h-4 w-4 mr-1" />
									<span className="text-sm">{project.location}</span>
								</div>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<Button
									variant="outline"
									size="sm"
									className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
								>
									View Details
									<ExternalLink className="ml-2 h-4 w-4" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button size="lg" className="bg-primary hover:bg-red-700">
						View All Projects
					</Button>
				</div>
			</div>
		</section>
	);
}

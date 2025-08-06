import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
	{
		name: "Elisabeth Baker",
		location: "Grand Saline, TX",
		rating: 5,
		text: "They installed a new roof on my home in Grand Saline this past week and I highly recommend them! Very professional, worked with my insurance agent, and finished in a day. As a Realtor, I work with many contractors and roofers. These guys are honest and dependable.",
		avatar: "SJ",
		service: "New Roof Installation",
	},
	{
		name: "David McCorkle",
		location: "Terrell, TX",
		rating: 5,
		text: "Luna's Roofing helped us from start to finish with a new roof on our house. Ramiro is very knowledgeable and really helped with the whole process. The crew was very professional and left the site clean. Thank you!",
		avatar: "MR",
		service: "Roof Replacement",
	},
	{
		name: "Jennifer Williams",
		location: "Forney, TX",
		rating: 5,
		text: "When our roof started leaking during a storm, Luna's Roofing was there within hours to tarp it and prevent further damage. They saved us thousands in water damage. True professionals!",
		avatar: "JW",
		service: "Emergency Repair",
	},
];

export function Testimonials() {
	return (
		<section
			className="relative py-20 bg-white overflow-hidden"
			style={{
				backgroundImage: "url(/background_shape.png)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute inset-0 bg-gray-50/90"></div>

			<div className="relative container mx-auto px-4 z-10">
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight pb-4 text-primary">
						What Our Customers Say
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Don't just take our word for it. See what your neighbors in Wills
						Point, Terrell, Forney, Canton, and Kaufman have to say about their
						experience with Luna's Roofing LLC.
					</p>
					<div className="flex items-center justify-center mt-6 space-x-2">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="h-6 w-6 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
						<span className="text-lg">5 Rating Reviews</span>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-md"
						>
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<Avatar className="mr-4">
										<AvatarFallback className="bg-primary text-white">
											{testimonial.avatar}
										</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="font-semibold">{testimonial.name}</h4>
										<p className="text-sm text-gray-600">
											{testimonial.location}
										</p>
										<div className="flex mt-1">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star
													key={i}
													className="h-4 w-4 fill-yellow-400 text-yellow-400"
												/>
											))}
										</div>
									</div>
								</div>

								<div className="mb-4">
									<Quote className="h-8 w-8 text-primary/30 mb-2" />
									<p className="text-gray-700 italic">"{testimonial.text}"</p>
								</div>

								<div className="text-sm text-primary font-medium">
									Service: {testimonial.service}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<p className="text-gray-600 mb-4">
						Ready to join our satisfied customers?
					</p>
					<button
						className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
						onClick={() => {
							window.location.href = "/contact";
						}}
					>
						Get Your Free Estimate Today
					</button>
				</div>
			</div>
		</section>
	);
}

import { useState } from "react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.config";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	MessageSquare,
	Calendar,
	Zap,
	CheckCircle,
	AlertCircle,
	Loader2,
} from "lucide-react";

interface FormData {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	serviceType: string;
	timeline: string;
	description: string;
}

export function Contact() {
	const [formStatus, setFormStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: "",
		serviceType: "",
		timeline: "",
		description: "",
	});

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus("submitting");

		// Basic validation
		if (
			!formData.firstName ||
			!formData.lastName ||
			!formData.phone ||
			!formData.email ||
			!formData.address ||
			!formData.serviceType
		) {
			setFormStatus("error");
			setTimeout(() => setFormStatus("idle"), 3000);
			return;
		}

		try {
			// Send email using EmailJS with Postmark integration
			await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				{
					from_name: `${formData.firstName} ${formData.lastName}`,
					from_email: formData.email,
					phone: formData.phone,
					address: formData.address,
					service_type: formData.serviceType,
					timeline: formData.timeline,
					message: formData.description,
					to_name: "Luna's Roofing LLC",
					to_email: "ram@lunasroofingllc.com",
					subject: `New Roofing Inquiry from ${formData.firstName} ${formData.lastName}`,
				},
				EMAILJS_CONFIG.PUBLIC_KEY
			);

			setFormStatus("success");
			// Reset form
			setFormData({
				firstName: "",
				lastName: "",
				phone: "",
				email: "",
				address: "",
				serviceType: "",
				timeline: "",
				description: "",
			});
			// Auto-hide success message after 5 seconds
			setTimeout(() => setFormStatus("idle"), 5000);
		} catch (error) {
			console.error("Error sending email:", error);
			setFormStatus("error");
			setTimeout(() => setFormStatus("idle"), 3000);
		}
	};

	return (
		<section id="contact" className="py-20 bg-gray-50">
			{/* Success/Error Messages */}
			{formStatus === "success" && (
				<div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center max-w-md">
					<CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
					<span>
						Thank you! Your message has been sent successfully. We'll contact
						you within 24 hours.
					</span>
				</div>
			)}

			{formStatus === "error" && (
				<div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center max-w-md">
					<AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
					<span>
						Unable to send message. Please check all required fields or call us
						directly at (903) 340-9354.
					</span>
				</div>
			)}

			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight pb-4 text-primary">
						Contact Us
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Ready to protect your home with Wills Point's most trusted roofing
						contractor? Serving Terrell, Forney, Canton, and Kaufman with
						premium roofing services. Contact us today for your free,
						no-obligation estimate.
					</p>
				</div>

				{/* Emergency Banner */}
				<div className="bg-primary text-white rounded-lg p-6 mb-12 text-center">
					<div className="flex items-center justify-center mb-4">
						<Zap className="h-8 w-8 mr-3" />
						<h3 className="text-2xl">24/7 Emergency Service Available</h3>
					</div>
					<p className="text-lg mb-4">
						Storm damage? Roof leak? We're here to help right now!
					</p>
					<Button
						asChild
						size="lg"
						className="bg-white text-primary hover:bg-gray-100"
					>
						<a href="tel:9033409354">
							<Phone className="mr-2 h-5 w-5" />
							CALL NOW: (903) 340-9354
						</a>
					</Button>
				</div>

				<div className="grid lg:grid-cols-3 gap-12">
					{/* Contact Information */}
					<div className="space-y-6">
						{/* Phone Card */}
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3">
									<Phone className="h-6 w-6 text-primary" />
									<span>Call Us</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<a
									href="tel:9033409354"
									className="text-2xl text-primary mb-2 block hover:underline"
								>
									(903) 340-9354
								</a>
								<p className="text-gray-600">24/7 Emergency Service</p>
							</CardContent>
						</Card>

						{/* Email Card */}
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3">
									<Mail className="h-6 w-6 text-primary" />
									<span>Email Us</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<a
									href="mailto:ram@lunasroofingllc.com"
									className="text-lg text-primary hover:underline"
								>
									ram@lunasroofingllc.com
								</a>
								<p className="text-gray-600">Free estimates within 24 hours</p>
							</CardContent>
						</Card>

						{/* Service Areas Card */}
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3">
									<MapPin className="h-6 w-6 text-primary" />
									<span>Service Areas</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2 text-gray-600">
									<p className="font-semibold text-primary">Wills Point, TX</p>
									<p className="text-sm">
										Our Home Base - Premium Local Service
									</p>
									<div className="mt-3 space-y-1">
										<p>• Terrell, TX</p>
										<p>• Forney, TX</p>
										<p>• Canton, TX</p>
										<p>• Kaufman, TX</p>
									</div>
									<p className="text-sm text-primary mt-3 font-medium">
										Insured Roofing Contractor Serving Van Zandt & Kaufman
										Counties
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Business Hours Card */}
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3">
									<Clock className="h-6 w-6 text-primary" />
									<span>Business Hours</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2 text-gray-600">
									<div className="flex justify-between">
										<span>Monday - Friday:</span>
										<span>7:00 AM - 7:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span>Saturday:</span>
										<span>8:00 AM - 5:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span>Sunday:</span>
										<span>Emergency Only</span>
									</div>
									<div className="text-primary mt-3">
										<p>Emergency Service: 24/7</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="flex items-center space-x-3 text-2xl">
									<MessageSquare className="h-6 w-6 text-primary" />
									<span>Request Your Free Estimate</span>
								</CardTitle>
								<CardDescription className="text-lg">
									Fill out the form below and we'll contact you within 24 hours
									to schedule your free roof inspection and provide a detailed
									estimate.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									{/* Name Fields */}
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<Label htmlFor="firstName">First Name *</Label>
											<Input
												id="firstName"
												placeholder="John"
												className="mt-2"
												value={formData.firstName}
												onChange={(e) =>
													handleInputChange("firstName", e.target.value)
												}
												required
											/>
										</div>
										<div>
											<Label htmlFor="lastName">Last Name *</Label>
											<Input
												id="lastName"
												placeholder="Doe"
												className="mt-2"
												value={formData.lastName}
												onChange={(e) =>
													handleInputChange("lastName", e.target.value)
												}
												required
											/>
										</div>
									</div>

									{/* Contact Fields */}
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<Label htmlFor="phone">Phone Number *</Label>
											<Input
												id="phone"
												type="tel"
												placeholder="(903) 340-9354"
												className="mt-2"
												value={formData.phone}
												onChange={(e) =>
													handleInputChange("phone", e.target.value)
												}
												required
											/>
										</div>
										<div>
											<Label htmlFor="email">Email Address *</Label>
											<Input
												id="email"
												type="email"
												placeholder="john@example.com"
												className="mt-2"
												value={formData.email}
												onChange={(e) =>
													handleInputChange("email", e.target.value)
												}
												required
											/>
										</div>
									</div>

									{/* Address */}
									<div>
										<Label htmlFor="address">Property Address *</Label>
										<Input
											id="address"
											placeholder="123 Main Street, Tyler, TX 75701"
											className="mt-2"
											value={formData.address}
											onChange={(e) =>
												handleInputChange("address", e.target.value)
											}
											required
										/>
									</div>

									{/* Service Details */}
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<Label htmlFor="serviceType">Type of Service *</Label>
											<Select
												value={formData.serviceType}
												onValueChange={(value) =>
													handleInputChange("serviceType", value)
												}
											>
												<SelectTrigger className="mt-2">
													<SelectValue placeholder="Select service needed" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="estimate">
														Free Estimate/Inspection
													</SelectItem>
													<SelectItem value="replacement">
														Roof Replacement
													</SelectItem>
													<SelectItem value="repair">Roof Repair</SelectItem>
													<SelectItem value="emergency">
														Emergency Service
													</SelectItem>
													<SelectItem value="storm">Storm Damage</SelectItem>
													<SelectItem value="maintenance">
														Maintenance
													</SelectItem>
													<SelectItem value="commercial">
														Commercial Roofing
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div>
											<Label htmlFor="timeline">Project Timeline</Label>
											<Select
												value={formData.timeline}
												onValueChange={(value) =>
													handleInputChange("timeline", value)
												}
											>
												<SelectTrigger className="mt-2">
													<SelectValue placeholder="When do you need this done?" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="emergency">
														Emergency (ASAP)
													</SelectItem>
													<SelectItem value="1week">Within 1 week</SelectItem>
													<SelectItem value="1month">Within 1 month</SelectItem>
													<SelectItem value="3months">
														Within 3 months
													</SelectItem>
													<SelectItem value="planning">
														Just planning ahead
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									{/* Description */}
									<div>
										<Label htmlFor="description">Additional Details</Label>
										<Textarea
											id="description"
											placeholder="Please describe your roofing needs, any issues you've noticed, or questions you have..."
											className="min-h-32 mt-2"
											value={formData.description}
											onChange={(e) =>
												handleInputChange("description", e.target.value)
											}
										/>
									</div>

									{/* What Happens Next */}
									<div className="bg-gray-50 p-4 rounded-lg">
										<div className="flex items-center space-x-3 mb-2">
											<Calendar className="h-5 w-5 text-primary" />
											<span className="font-medium">What happens next?</span>
										</div>
										<ul className="text-sm text-gray-600 space-y-1 ml-8">
											<li>• We'll contact you within 24 hours</li>
											<li>• Schedule your free roof inspection</li>
											<li>• Provide detailed written estimate</li>
											<li>• Answer all your questions</li>
										</ul>
									</div>

									{/* Submit Button */}
									<Button
										type="submit"
										size="lg"
										className="w-full bg-primary hover:bg-red-700 text-lg py-4"
										disabled={formStatus === "submitting"}
									>
										{formStatus === "submitting" ? (
											<>
												<Loader2 className="mr-2 h-5 w-5 animate-spin" />
												Sending...
											</>
										) : (
											"GET MY FREE ESTIMATE"
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}

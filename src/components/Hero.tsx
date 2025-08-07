import { Button } from "./ui/button";
import {
	Phone,
	Shield,
	Award,
	Users,
	Calendar,
	CheckCircle,
	AlertCircle,
	Loader2,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.config";

interface HeroFormData {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	serviceType: string;
}

export function Hero() {
	const [formStatus, setFormStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [formData, setFormData] = useState<HeroFormData>({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: "",
		serviceType: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus("submitting");

		// Validate required fields
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
					timeline: "ASAP",
					message: "Lead from Hero section contact form",
					to_name: "Luna's Roofing LLC",
					to_email: "ram@lunasroofingllc.com",
					subject: `Contact FORM: New Roofing Inquiry from ${formData.firstName} ${formData.lastName}`,
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
		<section
			id="home"
			className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white h-[60vh] md:h-[70vh] lg:h-[75vh]"
		>
			{/* Success/Error Messages for Hero Form */}
			{formStatus === "success" && (
				<div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center max-w-md">
					<CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
					<span>Thank you! We'll contact you within 24 hours.</span>
				</div>
			)}

			{formStatus === "error" && (
				<div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center max-w-md">
					<AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
					<span>Please fill in all required fields and try again.</span>
				</div>
			)}
			{/* Background video */}
			<div className="absolute inset-0 overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					disablePictureInPicture
					className="w-full h-full object-cover"
				>
					<source src="/luna_roofing_video.mp4" type="video/mp4" />
				</video>
			</div>

			{/* Enhanced overlay with gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>

			<div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-16 z-20 h-full flex items-center">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8 text-center md:text-left">
						<div className="space-y-4 md:space-y-6">
							<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
								Wills Point's Most Trusted Roofing Contractor
							</h1>
							<p className="text-base md:text-lg lg:text-xl text-shadow">
								Luna's Roofing LLC protects families in Wills Point, Terrell,
								Forney, Canton, and Kaufman with professional craftsmanship,
								honest pricing, and unmatched warranty coverage.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center md:items-start">
							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-red-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
							>
								<a href="tel:9033409354">
									<Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
									CALL NOW: (903) 340-9354
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="text-black hover:bg-secondary hover:text-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
								onClick={() => {
									window.location.href = "/contact";
								}}
							>
								<Calendar className="mr-2 h-4 w-4 md:h-6 md:w-6" />
								Schedule a Free Inspection
							</Button>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 justify-items-center sm:justify-items-start">
							<div className="flex items-center space-x-2 md:space-x-3">
								<Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
								<div>
									<div className="text-base md:text-lg">Insured</div>
									<div className="text-xs md:text-sm text-gray-300">
										& Bonded
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-2 md:space-x-3">
								<Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
								<div>
									<div className="text-base md:text-lg">Professional</div>
									<div className="text-xs md:text-sm text-gray-300">
										Experience
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-2 md:space-x-3">
								<Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
								<div>
									<div className="text-base md:text-lg">Wills Point</div>
									<div className="text-xs md:text-sm text-gray-300">
										Based & Trusted
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="hidden lg:flex lg:justify-center relative">
						<div className="bg-white/50 backdrop-blur rounded-lg p-6 border border-white/20 w-full max-w-xl">
							<h2 className="text-xl mb-4 text-center">Request A Free Quote</h2>
							<form className="space-y-3" onSubmit={handleSubmit}>
								<div className="grid grid-cols-2 gap-6">
									<input
										type="text"
										name="firstName"
										placeholder="First Name"
										value={formData.firstName}
										onChange={handleInputChange}
										required
										className="px-3 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 text-lg"
									/>
									<input
										type="text"
										name="lastName"
										placeholder="Last Name"
										value={formData.lastName}
										onChange={handleInputChange}
										required
										className="px-3 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 text-lg"
									/>
								</div>
								<input
									type="tel"
									name="phone"
									placeholder="Phone Number"
									value={formData.phone}
									onChange={handleInputChange}
									required
									className="w-full px-3 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 text-lg"
								/>
								<input
									type="email"
									name="email"
									placeholder="Email Address"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="w-full px-3 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 text-lg"
								/>
								<input
									type="text"
									name="address"
									placeholder="Property Address"
									value={formData.address}
									onChange={handleInputChange}
									required
									className="w-full px-3 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 text-lg"
								/>
								<select
									name="serviceType"
									value={formData.serviceType}
									onChange={handleInputChange}
									required
									className="w-full px-3 py-3 rounded-lg bg-white/90 text-gray-900 text-lg"
								>
									<option value="">Type of Service Needed</option>
									<option value="Roof Replacement">Roof Replacement</option>
									<option value="Roof Repair">Roof Repair</option>
									<option value="Storm Damage">Storm Damage</option>
									<option value="Inspection">Inspection</option>
									<option value="Emergency Service">Emergency Service</option>
								</select>
								<Button
									type="submit"
									disabled={formStatus === "submitting"}
									className="w-full bg-primary hover:bg-red-700 py-3 text-lg disabled:opacity-50"
								>
									{formStatus === "submitting" ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Sending...
										</>
									) : (
										"GET FREE ESTIMATE"
									)}
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

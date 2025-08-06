// EmailJS Configuration
export const EMAILJS_CONFIG = {
	PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "s_V1grpFsottGl3Ea",
	SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_llyw01r",
	TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ltu9ynt",
};

// Validate that all required environment variables are present
if (process.env.NODE_ENV === "production") {
	const requiredEnvVars = [
		"REACT_APP_EMAILJS_PUBLIC_KEY",
		"REACT_APP_EMAILJS_SERVICE_ID",
		"REACT_APP_EMAILJS_TEMPLATE_ID",
	];

	const missingVars = requiredEnvVars.filter(
		(varName) => !process.env[varName]
	);

	if (missingVars.length > 0) {
		console.warn("Missing EmailJS environment variables:", missingVars);
	}
}

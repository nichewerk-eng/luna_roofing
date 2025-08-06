import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ResidentialRoofingPage } from "./pages/ResidentialRoofingPage";
import { CommercialRoofingPage } from "./pages/CommercialRoofingPage";
import { EmergencyRepairsPage } from "./pages/EmergencyRepairsPage";
import { RoofMaintenancePage } from "./pages/RoofMaintenancePage";
import { GuttersExteriorPage } from "./pages/GuttersExteriorPage";
import { InsuranceClaimsPage } from "./pages/InsuranceClaimsPage";
// Location-specific pages for local SEO
import { WillsPointRoofingPage } from "./pages/WillsPointRoofingPage";
import { TerrellRoofingPage } from "./pages/TerrellRoofingPage";
import { ForneyRoofingPage } from "./pages/ForneyRoofingPage";

export default function App() {
	return (
		<HelmetProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route
						path="/services/residential-roofing"
						element={<ResidentialRoofingPage />}
					/>
					<Route
						path="/services/commercial-roofing"
						element={<CommercialRoofingPage />}
					/>
					<Route
						path="/services/emergency-repairs"
						element={<EmergencyRepairsPage />}
					/>
					<Route
						path="/services/roof-maintenance"
						element={<RoofMaintenancePage />}
					/>
					<Route
						path="/services/gutters-exterior"
						element={<GuttersExteriorPage />}
					/>
					<Route
						path="/services/insurance-claims"
						element={<InsuranceClaimsPage />}
					/>
					{/* Location-specific SEO pages */}
					<Route
						path="/wills-point-roofing"
						element={<WillsPointRoofingPage />}
					/>
					<Route path="/terrell-roofing" element={<TerrellRoofingPage />} />
					<Route path="/forney-roofing" element={<ForneyRoofingPage />} />
				</Routes>
				<Analytics />
				<Toaster position="top-right" richColors closeButton duration={5000} />
			</Router>
		</HelmetProvider>
	);
}

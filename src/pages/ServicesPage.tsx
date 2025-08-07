import React from "react";
import { Helmet } from "react-helmet-async";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ServicesPage() {
	return (
		<>
			<Helmet>
				<title>
					Roofing Services Wills Point TX | Luna's Roofing LLC | Terrell,
					Forney, Canton
				</title>
				<meta
					name="description"
					content="Complete roofing services in Wills Point, Terrell, Forney, Canton & Kaufman TX. Residential & commercial roofing, emergency repairs, maintenance, gutters. Insured & bonded roofers."
				/>
				<meta
					name="keywords"
					content="roofing services Wills Point TX, roofer Terrell TX, Forney roofing contractor, Canton roof repair, Kaufman roofing company, residential roofing, commercial roofing, emergency roof repairs"
				/>
				<meta
					property="og:title"
					content="Professional Roofing Services | Luna's Roofing LLC | East Texas"
				/>
				<meta
					property="og:description"
					content="Expert roofing services throughout East Texas. From emergency repairs to complete roof replacements. Licensed & insured. Free estimates."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.lunasroofingllc.com/services"
				/>
				<link rel="canonical" href="https://www.lunasroofingllc.com/services" />
			</Helmet>
			<Header />
			<main>
				<Services />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

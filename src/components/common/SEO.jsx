import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  image = "https://www.rr-hospital.com/R-and-R%20Hospital.webp",
  type = "website",
  noindex = false,
}) => {
  const location = useLocation();
  const baseUrl = "https://www.rr-hospital.com";
  const url = `${baseUrl}${location.pathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  // Default structured data for hospital
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "R&R Multispecialty Hospital",
    alternateName: "R&R Hospital",
    url: baseUrl,
    logo: `${baseUrl}/R-and-R-logo.webp`,
    image: fullImageUrl,
    description: description || "R&R Multispecialty Hospital is a leading healthcare provider in Jhunjhunu, offering advanced medical treatments and state-of-the-art facilities.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jhunjhunu",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    telephone: "+91-XXX-XXX-XXXX",
    priceRange: "$$",
    medicalSpecialty: [
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Oncology",
      "Pediatrics",
      "General Surgery",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="R&R Multispecialty Hospital" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@RRHospital" />

      {/* Additional Meta Tags */}
      <meta name="author" content="R&R Multispecialty Hospital Jhunjhunu" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jhunjhunu" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;


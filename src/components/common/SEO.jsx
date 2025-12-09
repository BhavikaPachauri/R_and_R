import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  image = "https://www.rr-hospital.com/R-and-RHospital.webp",
  type = "website",
  noindex = false,
}) => {
  const location = useLocation();
  const baseUrl = "https://www.rr-hospital.com";
  const url = `${baseUrl}${location.pathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

 
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "RR Hospital",
    "url": "https://rr-hospital.com/",
    "logo": "https://www.rr-hospital.com/R-and-R-logo.webp",
    "image": "https://www.rr-hospital.com/R-and-RHospital.webp",
    "description": "RR Hospital is a multi-speciality hospital offering advanced healthcare services including General Medicine, Radiology, Orthopaedics, Gynecology, Emergency, and Laboratory services in Jhunjhunu.",
    "telephone": "+91-8432755555",
    "email": "contact@rrmhospitals.com",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23, Churu Road, Basant Vihar",
      "addressLocality": "Jhunjhunu",
      "addressRegion": "Rajasthan",
      "postalCode": "333001",
      "addressCountry": "IN"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.133439",
      "longitude": "75.38284"
    },

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],

    "medicalSpecialty": [
      "General Surgery",
      "Orthopaedics",
      "Radiology",
      "General Medicine",
      "Gynecology",
      "Urology",
      "Dental",
      "Physiotherapy"
    ],

    "specialities": [
      {
        "@type": "MedicalSpecialty",
        "name": "General Surgery",
        "url": "https://rr-hospital.com/speciality/general%20surgery"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Orthopaedics",
        "url": "https://rr-hospital.com/speciality/orthopaedics"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Radiology",
        "url": "https://rr-hospital.com/speciality/radiology"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Gynecology",
        "url": "https://rr-hospital.com/speciality/gynecology"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "General Medicine",
        "url": "https://rr-hospital.com/speciality/general%20medicine"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Urology",
        "url": "https://rr-hospital.com/speciality/urology"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Dental",
        "url": "https://rr-hospital.com/speciality/dental"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Physiotherapy",
        "url": "https://rr-hospital.com/speciality/physiotherapy"
      }
    ],

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8432755555",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
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


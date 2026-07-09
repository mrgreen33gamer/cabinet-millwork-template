// src/app/services/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Cabinetry Services | Custom Cabinets & Millwork | Craftline Cabinetry & Millwork",
  description:
    "Craftline Cabinetry & Millwork offers custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins for Waco and Central Texas. Licensed contractor, 5-Year Craftsmanship Warranty.",
  keywords: [
    "custom cabinets Waco TX",
    "cabinet maker Waco",
    "kitchen millwork Central Texas",
    "bathroom vanities Waco TX",
    "commercial millwork Waco",
    "cabinet refacing Waco",
    "closet built-ins Waco TX",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Cabinetry Services | Craftline Cabinetry & Millwork",
    description:
      "Custom cabinets, kitchen millwork, vanities, commercial millwork, refacing, and built-ins for Waco and Central Texas.",
    url,
    siteName: "Craftline Cabinetry & Millwork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinetry Services | Craftline Cabinetry & Millwork",
    description:
      "Custom cabinets, kitchen millwork, vanities, commercial millwork, refacing, and built-ins for Waco and Central Texas.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Craftline Cabinetry & Millwork — Cabinetry Services",
  description:
    "Residential and commercial cabinetry and millwork for Waco and Central Texas: custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Craftline Cabinetry & Millwork",
    url: BASE_URL,
    telephone: "+12547412800",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Cabinets", url: `${BASE_URL}/services/custom-cabinets` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodel Millwork", url: `${BASE_URL}/services/kitchen-remodel-millwork` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Vanities", url: `${BASE_URL}/services/bathroom-vanities` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Millwork", url: `${BASE_URL}/services/commercial-millwork` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refacing", url: `${BASE_URL}/services/cabinet-refacing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Closet & Built-Ins", url: `${BASE_URL}/services/closet-built-ins` } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

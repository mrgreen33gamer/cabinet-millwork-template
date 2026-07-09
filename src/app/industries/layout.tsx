// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Builders, Designers & Hospitality | Craftline Cabinetry & Millwork",
  description:
    "Craftline Cabinetry & Millwork builds cabinetry and millwork programs for homebuilders and developers, interior designers, and commercial and hospitality groups across Central Texas.",
  keywords: [
    "homebuilder cabinets Waco",
    "interior designer millwork Central Texas",
    "hospitality millwork Waco TX",
    "commercial cabinetry property managers",
    "production cabinets builder Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Craftline Cabinetry & Millwork — Waco, TX",
    description:
      "Cabinetry programs for builders, designers, and hospitality groups across Central Texas.",
    url,
    siteName: "Craftline Cabinetry & Millwork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Craftline Cabinetry & Millwork",
    description: "Cabinetry programs for builders, designers, and hospitality groups across Central Texas.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

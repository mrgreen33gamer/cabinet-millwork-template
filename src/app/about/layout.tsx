import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Craftline Cabinetry & Millwork — Waco TX Flooring Company Since 2008",
  description:
    "Meet the Craftline Cabinetry & Millwork team. Locally owned and operated in Waco, Texas since 2008. licensed craftspeople, licensed licensed contractor, honest pricing, and a 5-Year Craftsmanship Warranty. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about Craftline Waco",
    "Waco flooring company",
    "licensed contractor Waco TX",
    "locally owned flooring Waco",
    "Custom Shop certified installer Waco Texas",
    "Elena Vargas flooring",
    "flooring company history Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Craftline Cabinetry & Millwork — Waco TX Flooring Company Since 2008",
    description:
      "Locally owned and operated in Waco since 2008. shop-built, licensed licensed contractor, flat-rate pricing, 5-Year Craftsmanship Warranty. Serving all of Central Texas.",
    url,
    siteName: "Craftline Cabinetry & Millwork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Craftline Cabinetry & Millwork — Waco TX Since 2008",
    description:
      "Locally owned flooring company in Waco, TX. shop-built, flat-rate pricing, 5-Year Craftsmanship Warranty.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Craftline Cabinetry & Millwork",
  url,
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Craftline Cabinetry & Millwork",
    url: BASE_URL,
    telephone: "+12547153900",
    email: "hello@craftlinecabinetry.com",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2200 S University Parks Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76706",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Elena Vargas",
      jobTitle: "Owner & Lead Installer",
    },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}

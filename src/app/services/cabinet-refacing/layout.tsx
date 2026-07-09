import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/services/cabinet-refacing`;

export const metadata: Metadata = {
  title: "Cabinet Refacing Waco TX | Craftline Cabinetry & Millwork",
  description:
    "Cabinet refacing in Waco, TX — new doors, drawer fronts, and hardware over solid boxes. Flat-rate quotes, 5-Year Craftsmanship Warranty.",
  keywords: [
    "cabinet refacing Waco TX",
    "kitchen cabinet doors replace",
    "reface cabinets Central Texas",
    "cabinet door replacement Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Cabinet Refacing Waco TX | Craftline Cabinetry & Millwork",
    description:
      "Cabinet refacing in Waco, TX — new doors, drawer fronts, and hardware over solid boxes. Flat-rate quotes, 5-Year Craftsmanship Warranty.",
    url,
    siteName: "Craftline Cabinetry & Millwork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Refacing Waco TX | Craftline Cabinetry & Millwork",
    description: "Cabinet refacing in Waco, TX — new doors, drawer fronts, and hardware over solid boxes. Flat-rate quotes, 5-Year Craftsmanship Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinet Refacing",
  description:
    "Cabinet refacing in Waco, TX — new doors, drawer fronts, and hardware over solid boxes. Flat-rate quotes, 5-Year Craftsmanship Warranty.",
  provider: {
    "@type": "LocalBusiness",
    name: "Craftline Cabinetry & Millwork",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",     containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Cabinet Refacing",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}

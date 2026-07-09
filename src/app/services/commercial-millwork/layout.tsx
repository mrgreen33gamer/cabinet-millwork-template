import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/services/commercial-millwork`;

export const metadata: Metadata = {
  title: "Commercial Millwork Waco TX | Craftline Cabinetry & Millwork",
  description:
    "Commercial millwork in Waco and Central Texas — reception, retail, hospitality casework. Licensed, insured, opening-date focused.",
  keywords: [
    "commercial millwork Waco",
    "tenant improvement millwork TX",
    "reception desk custom Waco",
    "retail fixtures Central Texas",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Commercial Millwork Waco TX | Craftline Cabinetry & Millwork",
    description:
      "Commercial millwork in Waco and Central Texas — reception, retail, hospitality casework. Licensed, insured, opening-date focused.",
    url,
    siteName: "Craftline Cabinetry & Millwork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Millwork Waco TX | Craftline Cabinetry & Millwork",
    description: "Commercial millwork in Waco and Central Texas — reception, retail, hospitality casework. Licensed, insured, opening-date focused.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Millwork",
  description:
    "Commercial millwork in Waco and Central Texas — reception, retail, hospitality casework. Licensed, insured, opening-date focused.",
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
  serviceType: "Commercial Millwork",
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

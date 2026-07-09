import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/industries/commercial-hospitality`;

export const metadata: Metadata = {
  title: "Millwork for Commercial & Hospitality | Craftline Cabinetry & Millwork",
  description: "Commercial and hospitality millwork in Waco and Central Texas — reception, retail, bars, and tenant casework on opening-date schedules.",
  keywords: [
    "commercial millwork Waco",
    "hospitality millwork Central Texas",
    "retail fixtures Waco TX",
    "tenant improvement casework Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Millwork for Commercial & Hospitality | Craftline Cabinetry & Millwork",
    description: "Commercial and hospitality millwork in Waco and Central Texas — reception, retail, bars, and tenant casework on opening-date schedules.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millwork for Commercial & Hospitality | Craftline Cabinetry & Millwork",
    description: "Commercial and hospitality millwork in Waco and Central Texas — reception, retail, bars, and tenant casework on opening-date schedules.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Millwork for Commercial & Hospitality",
  description: "Commercial and hospitality millwork in Waco and Central Texas — reception, retail, bars, and tenant casework on opening-date schedules.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Craftline Cabinetry & Millwork",
    url: BASE_URL,
    telephone: "+12547412800",
  },
  areaServed: "Central Texas",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}

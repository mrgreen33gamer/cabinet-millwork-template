import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/industries/homebuilders-developers`;

export const metadata: Metadata = {
  title: "Cabinetry for Homebuilders & Developers | Craftline Cabinetry & Millwork",
  description: "Production cabinet packages and model-home kitchens for homebuilders and developers across Central Texas. Schedule-driven, 5-Year Craftsmanship Warranty.",
  keywords: [
    "homebuilder cabinets Waco",
    "production cabinets Central Texas",
    "model home cabinets Waco TX",
    "developer millwork Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Cabinetry for Homebuilders & Developers | Craftline Cabinetry & Millwork",
    description: "Production cabinet packages and model-home kitchens for homebuilders and developers across Central Texas. Schedule-driven, 5-Year Craftsmanship Warranty.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinetry for Homebuilders & Developers | Craftline Cabinetry & Millwork",
    description: "Production cabinet packages and model-home kitchens for homebuilders and developers across Central Texas. Schedule-driven, 5-Year Craftsmanship Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinetry for Homebuilders & Developers",
  description: "Production cabinet packages and model-home kitchens for homebuilders and developers across Central Texas. Schedule-driven, 5-Year Craftsmanship Warranty.",
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

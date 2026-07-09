import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/industries/interior-designers`;

export const metadata: Metadata = {
  title: "Millwork for Interior Designers | Craftline Cabinetry & Millwork",
  description: "Designer-driven cabinetry and millwork in Waco and Central Texas. We build what you draw, with clear quotes and install that protects the design.",
  keywords: [
    "interior designer millwork Waco",
    "designer cabinets Central Texas",
    "custom cabinetry for designers Waco",
    "trade millwork shop Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Millwork for Interior Designers | Craftline Cabinetry & Millwork",
    description: "Designer-driven cabinetry and millwork in Waco and Central Texas. We build what you draw, with clear quotes and install that protects the design.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Millwork for Interior Designers | Craftline Cabinetry & Millwork",
    description: "Designer-driven cabinetry and millwork in Waco and Central Texas. We build what you draw, with clear quotes and install that protects the design.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Millwork for Interior Designers",
  description: "Designer-driven cabinetry and millwork in Waco and Central Texas. We build what you draw, with clear quotes and install that protects the design.",
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

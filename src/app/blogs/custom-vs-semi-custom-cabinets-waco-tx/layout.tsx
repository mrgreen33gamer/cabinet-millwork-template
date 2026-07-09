import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/blogs/custom-vs-semi-custom-cabinets-waco-tx`;

export const metadata: Metadata = {
  title: "Custom vs. Semi-Custom Cabinets: What Waco Homeowners Should Know | Craftline Cabinetry & Millwork",
  description: "An honest comparison of custom shop cabinets vs. semi-custom lines for Central Texas kitchens — cost, lead time, and when each wins.",
  alternates: { canonical: url },
  openGraph: {
    title: "Custom vs. Semi-Custom Cabinets: What Waco Homeowners Should Know",
    description: "An honest comparison of custom shop cabinets vs. semi-custom lines for Central Texas kitchens — cost, lead time, and when each wins.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

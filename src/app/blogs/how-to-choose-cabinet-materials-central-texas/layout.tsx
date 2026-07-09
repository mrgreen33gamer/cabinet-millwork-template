import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/blogs/how-to-choose-cabinet-materials-central-texas`;

export const metadata: Metadata = {
  title: "How to Choose Cabinet Materials for Central Texas Homes | Craftline Cabinetry & Millwork",
  description: "Plywood vs particleboard, painted vs stained, and hardware that holds up in Central Texas kitchens and baths.",
  alternates: { canonical: url },
  openGraph: {
    title: "How to Choose Cabinet Materials for Central Texas Homes",
    description: "Plywood vs particleboard, painted vs stained, and hardware that holds up in Central Texas kitchens and baths.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

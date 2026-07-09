import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/blogs/signs-its-time-to-refinish-or-replace-cabinets`;

export const metadata: Metadata = {
  title: "Signs It's Time to Refinish, Reface, or Replace Your Cabinets | Craftline Cabinetry & Millwork",
  description: "Peeling finish, failing hardware, water-damaged boxes — how to know whether to refinish, reface, or go full custom in Waco.",
  alternates: { canonical: url },
  openGraph: {
    title: "Signs It's Time to Refinish, Reface, or Replace Your Cabinets",
    description: "Peeling finish, failing hardware, water-damaged boxes — how to know whether to refinish, reface, or go full custom in Waco.",
    url, siteName: "Craftline Cabinetry & Millwork", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

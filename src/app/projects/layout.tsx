// src/app/projects/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: 'Projects Gallery | Craftline Cabinetry & Millwork — Waco, TX',
  description: 'Custom cabinets and fine millwork projects by Craftline Cabinetry & Millwork across Central Texas — kitchens, vanities, closets, commercial millwork, and refacing in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Projects Gallery | Craftline Cabinetry & Millwork',
    description: 'Custom cabinets and fine millwork for Central Texas homes and businesses.',
    url, siteName: 'Craftline Cabinetry & Millwork', locale: 'en_US', type: 'website',
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: 'Craftline Cabinetry & Millwork projects — Waco TX' }],
  },
  twitter: { card: 'summary_large_image', title: 'Projects Gallery | Craftline Cabinetry & Millwork', description: 'Custom cabinets and fine millwork for Central Texas.', images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`] },
  robots: { index: true, follow: true },
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Craftline Cabinetry & Millwork — Projects Gallery',
  description: 'A portfolio of custom kitchens, bathroom vanities, closets and built-ins, commercial millwork, cabinet refacing, and kitchen remodel packages completed by Craftline Cabinetry & Millwork across Central Texas.',
  url,
  about: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Craftline Cabinetry & Millwork',
    url: BASE_URL,
    address: { '@type': 'PostalAddress', addressLocality: 'Waco', addressRegion: 'TX', addressCountry: 'US' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: url },
  ],
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

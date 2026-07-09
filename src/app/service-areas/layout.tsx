// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Flooring Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | Craftline',
  description:
    'Craftline Cabinetry & Millwork serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, free quotes, 5-Year Craftsmanship Warranty.',
  keywords: [
    'flooring service areas Central Texas',
    'flooring Waco TX',
    'flooring Hewitt TX',
    'flooring Killeen TX',
    'flooring Temple TX',
    'hardwood installation Central Texas',
    'tile installation Waco',
    'Craftline service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Flooring Service Areas | Craftline Cabinetry & Millwork — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate flooring installation, refinishing, and repair. Free design consultations available.',
    url,
    siteName: 'Craftline Cabinetry & Millwork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flooring Service Areas | Craftline Cabinetry & Millwork — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, free quotes, 5-Year Craftsmanship Warranty.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Craftline Cabinetry & Millwork',
  url: BASE_URL,
  telephone: '+12547153900',
  email: 'hello@craftlinecabinetry.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2200 S University Parks Dr',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76706',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Waco' },
    { '@type': 'City', name: 'Hewitt' },
    { '@type': 'City', name: 'Woodway' },
    { '@type': 'City', name: 'McGregor' },
    { '@type': 'City', name: 'China Spring' },
    { '@type': 'City', name: 'Bellmead' },
    { '@type': 'City', name: 'Temple' },
    { '@type': 'City', name: 'Killeen' },
  ],
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}

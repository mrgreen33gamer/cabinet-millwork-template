import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.craftlinecabinetry.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Craftline Cabinetry & Millwork | Free Quotes in Waco & Central Texas',
  description:
    'Contact Craftline Cabinetry & Millwork to schedule a free in-home estimate for hardwood, tile, LVP, carpet, commercial flooring, or repair. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 741-2800.',
  keywords: [
    'contact Craftline Waco',
    'flooring estimate Waco TX',
    'free flooring quote Central Texas',
    'Craftline contact',
    'licensed contractor Waco phone',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Craftline Cabinetry & Millwork | Free Quotes in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free design consultations. Flat-rate pricing, 5-Year Craftsmanship Warranty, licensed craftspeople.',
    url,
    siteName: 'Craftline Cabinetry & Millwork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Craftline Cabinetry & Millwork | Waco & Central Texas',
    description: 'Schedule a free flooring estimate. Call (254) 741-2800.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

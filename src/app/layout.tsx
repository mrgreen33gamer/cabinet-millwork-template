// src/app/layout.tsx
// Craftline Cabinetry & Millwork — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator.
//     - themeColor: '#1c1410' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS ─────────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.craftlinecabinetry.com"
  : "http://localhost:3000";

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1c1410" },
    { media: "(prefers-color-scheme: dark)",  color: "#1c1410" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Craftline Cabinetry & Millwork | Custom Cabinets — Waco, TX",
    template: "%s | Craftline Cabinetry & Millwork",
  },
  description:
    "Craftline Cabinetry & Millwork is a Waco, TX custom cabinet shop offering custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins for Central Texas homes and businesses. Licensed, insured, 5-Year Craftsmanship Warranty.",
  keywords: [
    "Craftline Cabinetry & Millwork",
    "custom cabinets Waco TX",
    "cabinet maker Waco Texas",
    "kitchen millwork Central Texas",
    "bathroom vanities Waco",
    "commercial millwork Waco TX",
    "cabinet refacing Hewitt TX",
    "closet built-ins Woodway",
    "custom cabinetry Temple Killeen",
  ],
  authors: [{ name: "Craftline Cabinetry & Millwork", url: BASE_URL }],
  creator: "Craftline Cabinetry & Millwork",
  publisher: "Craftline Cabinetry & Millwork",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Craftline Cabinetry & Millwork | Custom Cabinets — Waco, TX",
    description:
      "Waco-based custom cabinet shop for kitchens, baths, closets, and commercial millwork across Central Texas. Licensed & insured. 5-Year Craftsmanship Warranty.",
    url: BASE_URL,
    siteName: "Craftline Cabinetry & Millwork",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Craftline Cabinetry & Millwork — Waco TX Custom Cabinets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craftline Cabinetry & Millwork | Waco TX Custom Cabinets",
    description:
      "Custom cabinets, kitchen millwork, vanities, commercial millwork & built-ins for Central Texas. Licensed & insured — 5-Year Craftsmanship Warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Craftline Cabinetry & Millwork",
  alternateName: "Craftline Cabinetry",
  description:
    "Residential and commercial custom cabinetry and millwork in Waco and Central Texas — custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins. Licensed, insured, 5-Year Craftsmanship Warranty.",
  url: BASE_URL,
  telephone: "+12547412800",
  email: "hello@craftlinecabinetry.com",
  foundingDate: "2008",
  founder: {
    "@type": "Person",
    name: "Elena Vargas",
    jobTitle: "Owner & Master Craftsperson",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2200 S University Parks Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cabinetry & Millwork Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Cabinets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodel Millwork" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Vanities" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Millwork" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Refacing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Closet & Built-Ins" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/craftlinecabinetry",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#b45309" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1c1410",
                }}
              >
                <PulseLoader size={50} color="#b45309" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}

// _archetype-library/hero-d-materials-grid/Component.tsx
//
// Hero D: Materials Grid — left copy, right mosaic of material swatches.
// Color tiles from materials[].swatch + name; optional imageSrc; staggered reveal.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function MaterialsMosaic({
  materials,
}: {
  materials: Array<{ name: string; swatch: string; imageSrc?: string }>;
}) {
  // Mosaic span classes for visual interest (cycle pattern)
  const spanClass = (i: number) => {
    const mod = i % 6;
    if (mod === 0) return styles.tileWide;
    if (mod === 3) return styles.tileTall;
    return '';
  };

  return (
    <div className={styles.mosaic} role="list" aria-label="Material samples">
      {materials.map((m, i) => (
        <motion.div
          key={`${m.name}-${i}`}
          className={`${styles.tile} ${spanClass(i)}`}
          role="listitem"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.35 + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className={styles.tileFace}
            style={{ backgroundColor: m.swatch }}
          >
            {m.imageSrc ? (
              <img
                src={m.imageSrc}
                alt=""
                className={styles.tileImage}
                draggable={false}
              />
            ) : null}
            <div className={styles.tileOverlay} aria-hidden="true" />
          </div>
          <span className={styles.tileName}>{m.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Trusted Custom Cabinet Shop — Since 2008';
const headlineLines = [
  'Cabinets Built.',
  'Built Right.',
];
const headlineAccent = 'Craftline.';
const subheadline = 'Free design consultations. Flat-rate quotes. 5-Year Craftsmanship Warranty on every install. Custom cabinets and fine millwork for Central Texas homes and businesses.';
const primaryCta = { label: 'Call (254) 741-2800', href: 'tel:+12547412800' };
const secondaryCta = { label: 'Free Quote', href: '/contact' };
const chips = [
  'Free Consults',
  'Flat-Rate Quotes',
  'Custom Shop',
  '18+ Yrs Local',
  '5-Yr Warranty',
];
const stats = [
  {
    "value": "1,200+",
    "label": "Custom Installs"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "5-Year",
    "label": "Craftsmanship Warranty"
  },
  {
    "value": "Free",
    "label": "Design Consults"
  }
];
const meterTarget = 72;
const meterTopLabel = "Featured";
const meterMidLabel = "Popular";
const meterBotLabel = "Classic";
const particleColor = '#b45309';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Builder grade";
const afterLabel = "Custom millwork";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "White Oak", swatch: "#b45309", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Walnut", swatch: "#78350f", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Shaker Paint", swatch: "#d97706", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Maple", swatch: "#fbbf24", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Quartz Pair", swatch: "#d4d4d4", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Soft-Close", swatch: "#78716c", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "From design board to install, Craftline treated our kitchen like a showpiece. Soft-close everywhere.";
const authorName = "Helen & Mark T.";
const authorMeta = "Kitchen remodel · Hewitt";
const rating = 5;
const schematicLabel = "Craftline schematic";
const gauges = [
  { label: "Kitchens", value: "1,200+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Lead time", value: "Clear" },
  { label: "Warranty", value: "2-yr" }
];
const toggles = [
  { label: "Showroom open", on: true },
  { label: "Samples ready", on: true },
  { label: "Install crews", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "Craftline";

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <MaterialsMosaic materials={materials} />
        </motion.div>
      </div>
    </section>
  );
}

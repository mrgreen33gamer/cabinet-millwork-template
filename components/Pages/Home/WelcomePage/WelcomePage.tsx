// Craftline Welcome Hero — unique "Shop Sample Board" visual (not Materials Grid).
// Door profiles are CSS/SVG constructions (no repeating stock photos).
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

type DoorProfile =
  | 'shaker'
  | 'raised'
  | 'slab'
  | 'beadboard'
  | 'glass-lite'
  | 'drawer-stack';

type Sample = {
  name: string;
  finish: string;
  species: string;
  profile: DoorProfile;
  /** base panel fill */
  tone: string;
  /** darker frame / edge */
  frame: string;
  /** highlight for grain / paint sheen */
  sheen: string;
  sku: string;
};

const SAMPLES: Sample[] = [
  {
    name: 'Shaker',
    finish: 'Painted Linen',
    species: 'Maple core',
    profile: 'shaker',
    tone: '#e8e2d6',
    frame: '#c9c0b0',
    sheen: '#f5f1e8',
    sku: 'CL-SK-01',
  },
  {
    name: 'Raised Panel',
    finish: 'Medium Walnut',
    species: 'Solid walnut',
    profile: 'raised',
    tone: '#6b4423',
    frame: '#4a2f18',
    sheen: '#8b5a2b',
    sku: 'CL-RP-04',
  },
  {
    name: 'Slab',
    finish: 'Matte Graphite',
    species: 'MDF paint-grade',
    profile: 'slab',
    tone: '#3d3a38',
    frame: '#2a2826',
    sheen: '#4f4b48',
    sku: 'CL-SL-12',
  },
  {
    name: 'Beadboard',
    finish: 'White Oak Natural',
    species: 'Rift white oak',
    profile: 'beadboard',
    tone: '#c4a574',
    frame: '#9a7b4f',
    sheen: '#d9bc8a',
    sku: 'CL-BB-07',
  },
  {
    name: 'Glass Lite',
    finish: 'Espresso Stain',
    species: 'Cherry',
    profile: 'glass-lite',
    tone: '#4a2c1a',
    frame: '#2f1a0f',
    sheen: '#6b3f26',
    sku: 'CL-GL-09',
  },
  {
    name: 'Drawer Bank',
    finish: 'Honey Maple',
    species: 'Hard maple',
    profile: 'drawer-stack',
    tone: '#d2a86a',
    frame: '#a67c42',
    sheen: '#e6c08a',
    sku: 'CL-DR-03',
  },
];

function DoorProfileFace({ sample }: { sample: Sample }) {
  const { profile, tone, frame, sheen } = sample;

  return (
    <div
      className={styles.profileFace}
      style={
        {
          '--door-tone': tone,
          '--door-frame': frame,
          '--door-sheen': sheen,
        } as React.CSSProperties
      }
      data-profile={profile}
      aria-hidden="true"
    >
      {/* Outer stile / rail envelope */}
      <div className={styles.profileOuter}>
        {profile === 'shaker' && (
          <div className={styles.profileShaker}>
            <span className={styles.shakerPanel} />
          </div>
        )}
        {profile === 'raised' && (
          <div className={styles.profileRaised}>
            <span className={styles.raisedBevel} />
            <span className={styles.raisedCenter} />
          </div>
        )}
        {profile === 'slab' && (
          <div className={styles.profileSlab}>
            <span className={styles.slabGrain} />
            <span className={styles.slabEdgePull} />
          </div>
        )}
        {profile === 'beadboard' && (
          <div className={styles.profileBead}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={styles.bead} />
            ))}
          </div>
        )}
        {profile === 'glass-lite' && (
          <div className={styles.profileGlass}>
            <span className={styles.glassMuntinH} />
            <span className={styles.glassMuntinV} />
            <span className={styles.glassPane} />
          </div>
        )}
        {profile === 'drawer-stack' && (
          <div className={styles.profileDrawers}>
            <span className={styles.drawerRow}>
              <i className={styles.drawerCup} />
            </span>
            <span className={styles.drawerRow}>
              <i className={styles.drawerCup} />
            </span>
            <span className={styles.drawerRow}>
              <i className={styles.drawerCup} />
            </span>
          </div>
        )}
      </div>
      {/* Hardware — unique per profile family */}
      {profile === 'drawer-stack' ? null : (
        <span
          className={
            profile === 'slab' ? styles.hardwareBar : styles.hardwareKnob
          }
        />
      )}
    </div>
  );
}

function ShopSampleBoard() {
  return (
    <div className={styles.sampleBoard} aria-label="Craftline door style sample board">
      <div className={styles.boardTopRail} aria-hidden="true">
        <span className={styles.boardBolt} />
        <span className={styles.boardStamp}>CRAFTLINE · WACO SHOP</span>
        <span className={styles.boardBolt} />
      </div>

      <header className={styles.boardHeader}>
        <div>
          <p className={styles.boardEyebrow}>In-shop sample rack</p>
          <h2 className={styles.boardTitle}>Door Profiles</h2>
        </div>
        <div className={styles.boardLegend} aria-hidden="true">
          <span className={styles.legendDot} />
          <span>Finish · Species · SKU</span>
        </div>
      </header>

      <ul className={styles.sampleList} role="list">
        {SAMPLES.map((sample, i) => (
          <motion.li
            key={sample.sku}
            className={styles.sampleRow}
            role="listitem"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.42,
              delay: 0.28 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.hangTag} aria-hidden="true">
              <span className={styles.hangHole} />
              <span className={styles.hangWire} />
            </div>

            <DoorProfileFace sample={sample} />

            <div className={styles.sampleCopy}>
              <div className={styles.sampleNameRow}>
                <span className={styles.sampleName}>{sample.name}</span>
                <span className={styles.sampleSku}>{sample.sku}</span>
              </div>
              <span className={styles.sampleFinish}>{sample.finish}</span>
              <span className={styles.sampleSpecies}>{sample.species}</span>
              <div
                className={styles.toneChip}
                style={{ background: sample.tone, borderColor: sample.frame }}
                title={sample.finish}
                aria-hidden="true"
              />
            </div>
          </motion.li>
        ))}
      </ul>

      <footer className={styles.boardFoot} aria-hidden="true">
        <span>Bring samples to your lighting</span>
        <span className={styles.boardFootRule} />
        <span>Free design consult</span>
      </footer>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Trusted Custom Cabinet Shop — Since 2008";
  const headlineLines = ['Cabinets Built.', 'Built Right.'];
  const headlineAccent = 'Craftline.';
  const subheadline =
    'Free design consultations. Flat-rate quotes. 5-Year Craftsmanship Warranty on every install. Custom cabinets and fine millwork for Central Texas homes and businesses.';
  const primaryCta = { label: 'Call (254) 741-2800', href: 'tel:+12547412800' };
  const secondaryCta = { label: 'Free Quote', href: '/contact' };
  const chips = [
    'Free Consults',
    'Flat-Rate Quotes',
    'Custom Shop',
    '18+ Yrs Local',
    '5-Yr Warranty',
  ];

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
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
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
          <ShopSampleBoard />
        </motion.div>
      </div>
    </section>
  );
}

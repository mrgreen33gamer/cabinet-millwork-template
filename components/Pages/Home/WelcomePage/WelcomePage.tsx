// Craftline Welcome Hero — Custom Millwork Atelier
// Photographic parallax stage + an authentic craftsman card replaces the
// CSS-only "Shop Sample Board" door-profile mockups. Real shop photography,
// amber/espresso brand tokens, Cormorant Garamond display headline.
// Photos live in /public/pages/home/welcome (hero-shop-scene.jpg, hero-craftsman.jpg).
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduceMotion ? 1.06 : 1.14]);

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
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real shop-floor scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-shop-scene.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Espresso scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />
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

        {/* Authentic shop photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-craftsman.jpg"
              alt="Craftline craftsman hand-finishing a custom cabinet door with a chisel in the Waco shop"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              In the Shop · Waco, TX
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Flat-rate quotes, no surprises
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 5-Year Craftsmanship Warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

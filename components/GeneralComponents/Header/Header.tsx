// _archetype-library/header-4-compact-icon-nav/Component.tsx
//
// Variant 4: no marquee, always-compact. Nav collapses to an icon-trigger
// drawer at every viewport width (not just mobile/tablet) — a utility /
// dispatch-desk feel. Desktop keeps only logo + call + CTA + menu icon.
'use client';
import Link from 'next/link';
import { PhoneIcon } from './_shared/icons';
import { useScrollChrome } from './_shared/useScrollChrome';
import { useMobileDrawer } from './_shared/useMobileDrawer';
import styles from './styles.module.scss';

export default function Header() {
const logoName = 'Craftline Cabinetry';
const logoTagline = 'Custom Cabinets · Fine Millwork';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blogs', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
const phoneDisplay = '(254) 741-2800';
const phoneHref = 'tel:+12547412800';
const ctaLabel = 'Free Quote';
const ctaHref = '/contact';
const marqueeItems = [
  'Free Design Consultations',
  '5-Year Craftsmanship Warranty',
  'Flat-Rate Quotes — No Surprises',
  '4.9★ Google Rating · 340+ Reviews',
  'Custom Shop · Fully Insured',
  '1,200+ Custom Installs',
  'Serving Central Texas Since 2008',
  'Licensed Contractor · Waco, TX',
];
const footerLine = 'Licensed Contractor · Custom Shop · Waco, TX';
const secondaryCtaLabel = 'Book Now';
const secondaryCtaHref = '/contact';
const hoursText = 'Mon–Sat · 7am–7pm';
const serviceAreaText = 'Serving Central Texas';
const ratingText = '4.9★ Local Rating';
  const { scrolled, progressRef } = useScrollChrome();
  const { menuOpen, setMenuOpen, drawerRef, triggerRef, pathname } = useMobileDrawer();

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div ref={progressRef} className={styles.progressBar}
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center', willChange: 'transform' }}
          aria-hidden="true" />

        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label={`${logoName} home`}>
            <span className={styles.logoText}>
              <span className={styles.logoName}>{logoName}</span>
              <span className={styles.logoTagline}>{logoTagline}</span>
            </span>
          </Link>

          <div className={styles.ctaGroup}>
            <a href={phoneHref} className={styles.callBtn}><PhoneIcon size={13} /> <span className={styles.callBtnText}>Call Now</span></a>
            <Link href={ctaHref} className={styles.estimateBtn}>{ctaLabel}</Link>
            <button ref={triggerRef} className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen} aria-controls="mobile-drawer-4">
              <span className={styles.hBar} /><span className={styles.hBar} /><span className={styles.hBar} />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <nav id="mobile-drawer-4" ref={drawerRef} className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-label="Main navigation" aria-hidden={!menuOpen}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>{logoName}</span>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <ul className={styles.drawerLinks} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerActions}>
          <a href={phoneHref} className={styles.drawerCallBtn} onClick={() => setMenuOpen(false)}><PhoneIcon size={14} /> Call {phoneDisplay}</a>
          <Link href={ctaHref} className={styles.drawerEstimateBtn} onClick={() => setMenuOpen(false)}>{ctaLabel}</Link>
        </div>
        <div className={styles.drawerFoot}>{footerLine}</div>
      </nav>
    </>
  );
}

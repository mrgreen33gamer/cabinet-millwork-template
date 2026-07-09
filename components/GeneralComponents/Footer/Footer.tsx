"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faAward, faClipboardCheck, faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/projects',       label: 'Projects' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/custom-cabinets',           label: 'Custom Cabinets' },
  { href: '/services/kitchen-remodel-millwork',  label: 'Kitchen Remodel Millwork' },
  { href: '/services/bathroom-vanities',         label: 'Bathroom Vanities' },
  { href: '/services/commercial-millwork',       label: 'Commercial Millwork' },
  { href: '/services/cabinet-refacing',          label: 'Cabinet Refacing' },
  { href: '/services/closet-built-ins',          label: 'Closet & Built-Ins' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Hewitt, TX', 'Woodway, TX',
  'Bellmead, TX', 'China Spring, TX', 'Temple, TX',
  'Killeen, TX', 'McGregor, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved,     label: 'Licensed Contractor' },
  { icon: faAward,            label: 'Custom Shop' },
  { icon: faClipboardCheck,   label: 'Free Consultations' },
  { icon: faLayerGroup,       label: '5-Yr Warranty' },
];

const SOCIALS = [
  { href: 'https://facebook.com/craftlinecabinetry', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/craftlinecabinetry',      icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="1"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Craftline Cabinetry & Millwork</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Custom cabinets and fine millwork for Central Texas homes and businesses. Flat-rate quotes, material lookbooks, and a 5-Year Craftsmanship Warranty since 2008.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+12547412800" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (254) 741-2800
              </a>
              <a href="mailto:hello@craftlinecabinetry.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@craftlinecabinetry.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                2200 S University Parks Dr, Waco, TX 76706
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Service Areas */}
          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of Central Texas</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Craftline Cabinetry & Millwork. All Rights Reserved. | Licensed Contractor · Custom Shop
          </p>
          <a href="tel:+12547412800" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Call Now', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Call (254) 741-2800
          </a>
        </div>
      </div>

    </footer>
  );
}

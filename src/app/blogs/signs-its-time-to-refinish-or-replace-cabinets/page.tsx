'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faExclamationTriangle, faPaintRoller, faScrewdriverWrench, faRulerCombined, faHome, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Not every tired kitchen needs a full tear-out. Not every peeling door can be saved with paint. Here is how Central Texas homeowners decide between refinish, reface, and replace.',
  },
  {
    type: 'cards',
    heading: 'Warning Signs to Watch',
    cards: [
      { icon: faExclamationTriangle, title: 'Water-damaged boxes', body: 'Swollen bottoms, delaminated ends, and soft floors under the sink usually mean replacement, not a pretty reface.' },
      { icon: faPaintRoller, title: 'Failing finish only', body: 'If boxes are square and solid but doors look worn, refinishing or refacing can transform the kitchen for less.' },
      { icon: faScrewdriverWrench, title: 'Hardware at end of life', body: 'Sagging doors and sticky drawers often need better hinges and slides — sometimes with new doors.' },
      { icon: faRulerCombined, title: 'Layout no longer works', body: 'If you need a new island, pantry, or appliance layout, full custom usually beats dressing up the old plan.' },
      { icon: faHome, title: 'Resale timing', body: 'A clean reface or thoughtful custom package can return more than a half-done DIY paint job.' },
      { icon: faCheck, title: 'Honest shop assessment', body: 'A good cabinet shop will tell you when refacing is enough — and when it is money wasted.' },
    ],
  },
  {
    type: 'tips',
    heading: 'Next Steps',
    items: [
      'Photograph damage under sinks and toe kicks',
      'Note whether the layout still fits how you cook',
      'Get a flat-rate quote that compares reface vs replace when both are viable',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Signs It's Time to Refinish, Reface, or Replace Your Cabinets"
        description="Peeling finish, failing hardware, water-damaged boxes — how to know whether to refinish, reface, or go full custom in Waco."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs cabinets need refinishing or replacement in Waco TX"
        category="Replacement"
        date="April 10, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Talk Through Your Cabinetry Options"
        body="Free design consultation, material samples, and a flat-rate quote — no pressure."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="signs-its-time-to-refinish-or-replace-cabinets-blog" />
    </>
  );
}

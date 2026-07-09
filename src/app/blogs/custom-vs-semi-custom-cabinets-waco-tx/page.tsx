'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faRulerCombined, faClock, faDollarSign, faLayerGroup, faHome, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Custom and semi-custom cabinets both show up in Waco remodels — but they are not the same product, price, or lead time. Here is a clear way to choose.',
  },
  {
    type: 'cards',
    heading: 'Where Each Option Wins',
    cards: [
      { icon: faRulerCombined, title: 'True custom fit', body: 'Shop-built custom cabinets handle odd walls, tall ceilings, and weird appliance openings that semi-custom lines struggle with.' },
      { icon: faClock, title: 'Lead time tradeoffs', body: 'Semi-custom often ships faster. Full custom fabrication is worth it when fit and finish matter more than the calendar.' },
      { icon: faDollarSign, title: 'Budget reality', body: 'Semi-custom can cost less up front. Custom often wins on longevity, repairability, and resale when done well.' },
      { icon: faLayerGroup, title: 'Material control', body: 'A custom shop chooses plywood, door construction, and hardware standards — not just catalog SKUs.' },
      { icon: faHome, title: 'Remodel complexity', body: 'Historic homes and major remodels almost always need custom. Simple box swaps may work with semi-custom.' },
      { icon: faCheck, title: 'Hybrid kitchens', body: 'Some Waco projects mix custom islands and tall runs with semi-custom base boxes — when the plan supports it.' },
    ],
  },
  {
    type: 'table',
    heading: 'Custom vs Semi-Custom — Side by Side',
    tableHeaders: ['Category', 'Custom Shop', 'Semi-Custom'],
    tableRows: [
      ['Fit', 'Built to the opening', 'Modified stock sizes'],
      ['Door/finish control', 'Full control', 'Catalog options'],
      ['Lead time', 'Often longer', 'Often shorter'],
      ['Best for', 'Odd spaces, high finish', 'Straightforward layouts'],
      ['Warranty partner', 'Local shop', 'Manufacturer + installer'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Get both options quoted from a shop that builds custom. A sales-only showroom will rarely tell you when custom is overkill — or when semi-custom will fail.',
  },
  {
    type: 'tips',
    heading: 'How to Decide for Your Waco Kitchen',
    items: [
      'Measure odd walls, soffits, and appliance clearances honestly',
      'Decide if finish quality or speed is the top priority',
      'Ask for a flat-rate quote with material specs written down',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Custom vs. Semi-Custom Cabinets: What Waco Homeowners Should Know"
        description="An honest comparison of custom shop cabinets vs. semi-custom lines for Central Texas kitchens — cost, lead time, and when each wins."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Custom vs semi-custom cabinets comparison for Waco Texas homes"
        category="Comparison"
        date="April 18, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Talk Through Your Cabinetry Options"
        body="Free design consultation, material samples, and a flat-rate quote — no pressure."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="custom-vs-semi-custom-cabinets-waco-tx-blog" />
    </>
  );
}

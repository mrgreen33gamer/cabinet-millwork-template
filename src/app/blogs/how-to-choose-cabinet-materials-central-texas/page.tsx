'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faLayerGroup, faPaintRoller, faTree, faDroplet, faScrewdriverWrench, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Central Texas homes ask a lot of cabinets — heat, humidity swings, busy kitchens, and kids. Material choices matter more than the door style on the sample board.',
  },
  {
    type: 'cards',
    heading: 'Material Decisions That Matter',
    cards: [
      { icon: faLayerGroup, title: 'Box construction', body: 'Quality plywood boxes outperform cheap particleboard in moisture and screw-holding strength over years of use.' },
      { icon: faPaintRoller, title: 'Painted finishes', body: 'Painted MDF doors can look sharp, but prep and sheen choice matter for touch-up and durability.' },
      { icon: faTree, title: 'Stained wood', body: 'Stained doors show grain and hide wear differently than paint — great when you want warmth and character.' },
      { icon: faDroplet, title: 'Wet-area realities', body: 'Baths and wet bars need finishes and construction that tolerate humidity better than pure fashion choices.' },
      { icon: faScrewdriverWrench, title: 'Hardware grade', body: 'Soft-close hinges and full-extension slides are not luxury fluff — they define daily feel for a decade.' },
      { icon: faCheck, title: 'Ask for specs in writing', body: 'If a quote does not name box material and hardware brand/grade, you are comparing apples to mystery fruit.' },
    ],
  },
  {
    type: 'tips',
    heading: 'Practical Selection Tips',
    items: [
      'See samples in your kitchen lighting, not just the showroom',
      'Prioritize box material and hardware before exotic door upgrades',
      'Match finish strategy to pets, kids, and how hard you cook',
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Craftline builds with shop standards you can inspect — ask us to open a sample box construction and hardware set on your consult.',
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Choose Cabinet Materials for Central Texas Homes"
        description="Plywood vs particleboard, painted vs stained, and hardware that holds up in Central Texas kitchens and baths."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="Cabinet material choices for Central Texas humidity and homes"
        category="Materials"
        date="April 14, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Talk Through Your Cabinetry Options"
        body="Free design consultation, material samples, and a flat-rate quote — no pressure."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-to-choose-cabinet-materials-central-texas-blog" />
    </>
  );
}

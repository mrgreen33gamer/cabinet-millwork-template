// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Craftline Cabinetry & Millwork — used by Testimonials
// component, schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Custom Cabinets',
    text:     "Craftline designed and built a full custom kitchen for our Woodway-area remodel. Door style, stain, and hardware all matched what we picked from their lookbook. Install was clean, on schedule, and the fit is perfect.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Bathroom Vanities',
    text:     'Had two bathroom vanities built to fit awkward spaces. Soft-close drawers, solid construction, and the finish matches our tile perfectly. Elena walked us through materials without pressure. Highly recommend.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Kitchen Remodel Millwork',
    text:     'We needed millwork that tied the kitchen, pantry, and island together. Craftline handled design, fabrication, and install under one quote. The shop quality is night-and-day versus big-box cabinets.',
  },
  {
    name:     'Patricia L.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Cabinet Refacing',
    text:     'Refacing saved us thousands versus a full tear-out. New doors, drawer fronts, and hardware transformed the kitchen in days. Honest about when refacing makes sense and when it does not.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Closet & Built-Ins',
    text:     'Primary suite closet system and a built-in media wall. Measured carefully, installed cleanly, and left zero mess. Looks custom because it is — not a cookie-cutter kit from a big-box store.',
  },
  {
    name:     'Angela W.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Commercial Millwork',
    text:     'Reception desk and display millwork for our retail suite. Craftline hit the lease opening date and the finish holds up to constant traffic. Fair pricing, professional crew — our go-to shop now.',
  },
  {
    name:     'Robert H.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Custom Cabinets',
    text:     'Compared three shops. Craftline was clear about plywood vs. particleboard, finish options, and lead times. The cabinets arrived as promised and the installers were careful with our floors.',
  },
  {
    name:     'Cheryl B.',
    location: 'Waco, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Kitchen Remodel Millwork',
    text:     'Free design consult, material samples in our lighting, and a flat-rate quote before fabrication. With kids at home the crew was respectful and tidy every day. Thank you, Craftline.',
  },
];

export default reviews;

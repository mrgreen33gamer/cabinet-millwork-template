// libs/local-db/projects.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central data store for Craftline Cabinetry & Millwork projects shown on
// /projects and /projects/[slug]. Images reuse existing gallery assets.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Custom Kitchens'
  | 'Bathroom Vanities'
  | 'Closets & Built-Ins'
  | 'Commercial Millwork'
  | 'Cabinet Refacing'
  | 'Kitchen Remodel Packages';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const g = (name: string) => `/projects/gallery/${name}`;

const customKitchens: Project[] = [
  {
    id: 'woodway-shaker-kitchen',
    title: 'Woodway Shaker Kitchen',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Custom Kitchens',
    year: '2026',
    duration: '6 weeks',
    shortDesc: 'Full custom shaker kitchen in painted finish with soft-close hardware and a matching island.',
    fullDesc: 'The homeowners wanted a clean painted shaker kitchen that felt custom without a year-long remodel. Craftline designed elevations, fabricated boxes and doors in our Waco shop, and installed over six weeks including tear-out of the old boxes. Soft-close hardware throughout, custom island with seating overhang, and a pantry run that maximized a narrow wall.',
    result: 'Full Custom Install',
    tags: ['Shaker', 'Painted', 'Island', 'Woodway'],
    images: [
      { src: g('2.png'), alt: 'Custom shaker kitchen cabinets', caption: 'Completed kitchen' },
      { src: g('3.png'), alt: 'Island and seating overhang', caption: '' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Kitchen before cabinet replacement' },
    afterImage:  { src: g('2.png'), alt: 'Kitchen after Craftline install' },
    featured: true,
  },
  {
    id: 'hewitt-walnut-kitchen',
    title: 'Hewitt Walnut Stain Kitchen',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Custom Kitchens',
    year: '2025',
    duration: '7 weeks',
    shortDesc: 'Stained walnut-look custom cabinets with mixed open shelving for a warm Central Texas kitchen.',
    fullDesc: 'A complete custom kitchen with stained doors, open shelving accents, and tall pantry cabinets. Craftline matched the clients sample boards under their actual lighting and delivered shop-built quality that big-box lines could not match on the tall openings.',
    result: 'Warm Custom Finish',
    tags: ['Stain', 'Open Shelving', 'Hewitt'],
    images: [
      { src: g('5.png'), alt: 'Walnut-stained custom kitchen', caption: '' },
      { src: g('7.png'), alt: 'Tall pantry cabinets', caption: '' },
    ],
    featured: true,
  },
];

const bathroomVanities: Project[] = [
  {
    id: 'waco-double-vanity',
    title: 'Waco Double Vanity Suite',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Bathroom Vanities',
    year: '2025',
    duration: '3 weeks',
    shortDesc: 'Double vanity with linen tower built to fit an awkward primary bath footprint.',
    fullDesc: 'Plumbing centers and a short wall made stock vanities impossible. Craftline field-measured, built a double vanity with integrated linen storage, and installed without damaging existing tile. Soft-close drawers and a moisture-smart finish.',
    result: 'Perfect Fit',
    tags: ['Double Vanity', 'Linen Tower', 'Waco'],
    images: [
      { src: g('ertret.png'), alt: 'Custom double bathroom vanity', caption: '' },
    ],
    beforeImage: { src: g('ewew.png'), alt: 'Bath vanity before' },
    afterImage:  { src: g('ertret.png'), alt: 'Bath vanity after' },
  },
  {
    id: 'temple-floating-vanity',
    title: 'Temple Floating Vanity',
    client: 'Private Residence',
    location: 'Temple, TX',
    category: 'Bathroom Vanities',
    year: '2025',
    duration: '2 weeks',
    shortDesc: 'Wall-hung vanity with drawer storage for a modern guest bath remodel.',
    fullDesc: 'A compact guest bath needed storage without visual bulk. Craftline built a floating vanity with full-extension drawers and a clean slab door style, coordinating install with the tile crew.',
    result: 'Modern Compact Storage',
    tags: ['Floating', 'Guest Bath', 'Temple'],
    images: [
      { src: g('etru7.png'), alt: 'Floating bathroom vanity', caption: '' },
    ],
  },
];

const closetsBuiltIns: Project[] = [
  {
    id: 'china-spring-walk-in',
    title: 'China Spring Walk-In Closet',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Closets & Built-Ins',
    year: '2025',
    duration: '3 weeks',
    shortDesc: 'Full walk-in closet system with double hang, drawers, and shoe banks.',
    fullDesc: 'The owners converted a spare room into a primary closet. Craftline designed double hang, drawers, and shoe storage to maximize every wall, then shop-built and installed the system with furniture-grade finishes.',
    result: 'Maxed Storage',
    tags: ['Walk-In', 'Drawers', 'China Spring'],
    images: [
      { src: g('gythgnb.png'), alt: 'Custom walk-in closet system', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'woodway-media-wall',
    title: 'Woodway Media Built-In',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Closets & Built-Ins',
    year: '2024',
    duration: '4 weeks',
    shortDesc: 'Floor-to-ceiling media wall with closed storage and open display niches.',
    fullDesc: 'A living room built-in that hides equipment, stores media, and frames the TV. Craftline matched existing trim profiles and finished the unit to read as original millwork.',
    result: 'Seamless Built-In',
    tags: ['Media Wall', 'Built-In', 'Woodway'],
    images: [
      { src: g('htf.png'), alt: 'Custom media wall built-in', caption: '' },
    ],
  },
];

const commercialMillwork: Project[] = [
  {
    id: 'temple-reception-desk',
    title: 'Temple Office Reception Desk',
    client: 'Professional Services Firm',
    location: 'Temple, TX',
    category: 'Commercial Millwork',
    year: '2025',
    duration: '5 weeks',
    shortDesc: 'Custom reception desk and side storage for a professional office tenant improvement.',
    fullDesc: 'Hard opening date, brand finish requirements, and limited after-hours access. Craftline fabricated the reception desk and matching storage off-site, then installed on a compressed schedule so the firm opened on time.',
    result: 'Opened On Date',
    tags: ['Reception', 'Office', 'Temple'],
    images: [
      { src: g('iou.png'), alt: 'Commercial reception desk millwork', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'waco-retail-display',
    title: 'Waco Retail Display Casework',
    client: 'Regional Retail Tenant',
    location: 'Waco, TX',
    category: 'Commercial Millwork',
    year: '2024',
    duration: '4 weeks',
    shortDesc: 'Display fixtures and checkout millwork for a retail suite remodel.',
    fullDesc: 'Craftline built durable display casework and a checkout run designed for daily customer traffic, with finishes approved from the brand book before fabrication.',
    result: 'Retail Ready',
    tags: ['Retail', 'Display', 'Waco'],
    images: [
      { src: g('iytyuhn.png'), alt: 'Retail display millwork', caption: '' },
    ],
  },
];

const cabinetRefacing: Project[] = [
  {
    id: 'bellmead-reface',
    title: 'Bellmead Kitchen Reface',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Cabinet Refacing',
    year: '2025',
    duration: '1 week',
    shortDesc: 'New doors, drawer fronts, and hardware over solid existing boxes.',
    fullDesc: 'Boxes were square and dry; the kitchen just looked dated. Craftline replaced doors and drawer fronts, upgraded to soft-close hinges and slides, and transformed the kitchen in days without a full tear-out.',
    result: 'Days Not Months',
    tags: ['Refacing', 'Soft-Close', 'Bellmead'],
    images: [
      { src: g('jyfhtgb.png'), alt: 'Refaced kitchen cabinets', caption: '' },
    ],
    beforeImage: { src: g('kgh.png'), alt: 'Kitchen before refacing' },
    afterImage:  { src: g('jyfhtgb.png'), alt: 'Kitchen after refacing' },
  },
  {
    id: 'mcgregor-painted-reface',
    title: 'McGregor Painted Reface',
    client: 'Private Residence',
    location: 'McGregor, TX',
    category: 'Cabinet Refacing',
    year: '2024',
    duration: '8 days',
    shortDesc: 'Full color change with new shaker doors on existing plywood boxes.',
    fullDesc: 'Homeowners wanted white shaker without replacing sound boxes. Craftline assessed, quoted flat-rate, and delivered a complete reface with new hardware.',
    result: 'Color Transform',
    tags: ['Painted', 'Shaker', 'McGregor'],
    images: [
      { src: g('liukj.png'), alt: 'Painted cabinet reface', caption: '' },
    ],
  },
];

const kitchenRemodelPackages: Project[] = [
  {
    id: 'killeen-kitchen-package',
    title: 'Killeen Kitchen Remodel Package',
    client: 'Private Residence',
    location: 'Killeen, TX',
    category: 'Kitchen Remodel Packages',
    year: '2025',
    duration: '8 weeks',
    shortDesc: 'Cabinets, island, pantry, and trim millwork as one coordinated remodel package.',
    fullDesc: 'Working with the homeowners GC, Craftline delivered cabinets, island, pantry, and matching trim under one flat-rate package so the remodel stayed on one schedule and one finish language.',
    result: 'One Package Quote',
    tags: ['Remodel', 'Island', 'Killeen'],
    images: [
      { src: g('qwe.png'), alt: 'Kitchen remodel millwork package', caption: '' },
      { src: g('rtet.png'), alt: 'Island and pantry millwork', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'waco-historic-kitchen-package',
    title: 'Downtown Waco Historic Kitchen Package',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Kitchen Remodel Packages',
    year: '2024',
    duration: '7 weeks',
    shortDesc: 'Sensitive kitchen millwork package preserving character in a historic home.',
    fullDesc: 'Craftline designed cabinets and millwork that respect original trim lines while delivering modern storage and soft-close function. Install was sequenced carefully around the homes original floors.',
    result: 'Character Preserved',
    tags: ['Historic', 'Waco', 'Custom'],
    images: [
      { src: g('sesrere.png'), alt: 'Historic home kitchen millwork', caption: '' },
    ],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...customKitchens,
  ...bathroomVanities,
  ...closetsBuiltIns,
  ...commercialMillwork,
  ...cabinetRefacing,
  ...kitchenRemodelPackages,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Custom Kitchens':          customKitchens,
  'Bathroom Vanities':        bathroomVanities,
  'Closets & Built-Ins':      closetsBuiltIns,
  'Commercial Millwork':      commercialMillwork,
  'Cabinet Refacing':         cabinetRefacing,
  'Kitchen Remodel Packages': kitchenRemodelPackages,
};

export const CATEGORIES: ProjectCategory[] = [
  'Custom Kitchens',
  'Bathroom Vanities',
  'Closets & Built-Ins',
  'Commercial Millwork',
  'Cabinet Refacing',
  'Kitchen Remodel Packages',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export default ALL_PROJECTS;

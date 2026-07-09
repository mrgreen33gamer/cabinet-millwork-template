// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'custom-vs-semi-custom-cabinets-waco-tx',
    title:    'Custom vs. Semi-Custom Cabinets: What Waco Homeowners Should Know',
    excerpt:  'An honest comparison of custom shop cabinets vs. semi-custom lines for Central Texas kitchens — cost, lead time, and when each wins.',
    category: 'Comparison',
    date:     'April 18, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Custom vs semi-custom cabinets comparison for Waco Texas homes',
    featured: true,
  },
  {
    slug:     'how-to-choose-cabinet-materials-central-texas',
    title:    'How to Choose Cabinet Materials for Central Texas Homes',
    excerpt:  'Plywood vs particleboard, painted vs stained, and hardware that holds up in Central Texas kitchens and baths.',
    category: 'Materials',
    date:     'April 14, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/hvac-filter.jpg',
    imageAlt: 'Cabinet material choices for Central Texas humidity and homes',
  },
  {
    slug:     'signs-its-time-to-refinish-or-replace-cabinets',
    title:    "Signs It's Time to Refinish, Reface, or Replace Your Cabinets",
    excerpt:  'Peeling finish, failing hardware, water-damaged boxes — how to know whether to refinish, reface, or go full custom in Waco.',
    category: 'Replacement',
    date:     'April 10, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Signs cabinets need refinishing or replacement in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }

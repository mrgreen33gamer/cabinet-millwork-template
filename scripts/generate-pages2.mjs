import fs from 'fs';
import path from 'path';

const BASE = 'https://www.craftlinecabinetry.com';
const brand = 'Craftline Cabinetry & Millwork';

// ── Industries layout ────────────────────────────────────────────────────────
fs.writeFileSync('src/app/industries/layout.tsx', `// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url      = \`\${BASE_URL}/industries\`;

export const metadata: Metadata = {
  title: "Industries We Serve | Builders, Designers & Hospitality | ${brand}",
  description:
    "${brand} builds cabinetry and millwork programs for homebuilders and developers, interior designers, and commercial and hospitality groups across Central Texas.",
  keywords: [
    "homebuilder cabinets Waco",
    "interior designer millwork Central Texas",
    "hospitality millwork Waco TX",
    "commercial cabinetry property managers",
    "production cabinets builder Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | ${brand} — Waco, TX",
    description:
      "Cabinetry programs for builders, designers, and hospitality groups across Central Texas.",
    url,
    siteName: "${brand}",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | ${brand}",
    description: "Cabinetry programs for builders, designers, and hospitality groups across Central Texas.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
`);

const industries = [
  {
    slug: 'homebuilders-developers',
    label: 'Homebuilders & Developers',
    title: 'Cabinetry for Homebuilders & Developers',
    subtitle: 'Production cabinet packages, model-home kitchens, and schedule-driven millwork for Central Texas builders who need cabinets on time and on spec.',
    trust: 'Trusted by homebuilders and developers across Central Texas',
    fn: 'HomebuildersDevelopersPage',
    pain: [
      ['faCalendarAlt','Cabinet trades miss production windows','When cabinets slip, closing dates slip. Supers need a millwork partner who hits the schedule — not one who reschedules mid-cycle.'],
      ['faFileInvoiceDollar','Option upgrades create pricing chaos','Without locked specs and clear upgrade pricing, buyer selections turn into change-order headaches and margin erosion.'],
      ['faHouseChimney','Model kitchens do not match production','If models use different products or install standards than production, buyers walk the model and get something cheaper at closing.'],
      ['faHardHat','Punch lists pile up on cabinet details','Doors, hardware, and incomplete runs create walk-through fails. Weak finishing standards burn super time and delay CO.'],
      ['faClipboardList','No consistent contact across communities','Different crews and standards per community force supers to retrain every start instead of running a repeatable process.'],
      ['faHandshake','Vendors do not understand builder process','Frame-to-finish sequences and buyer walkthroughs have rules. A residential-only installer creates rework instead of clean handoffs.'],
    ],
    why: [
      ['faCalendarAlt','Production-Schedule Reliability','We plan installs around your finish sequence so cabinets are ready when the rest of the house is — not the bottleneck holding CO.'],
      ['faFileInvoiceDollar','Spec Packages & Upgrade Pricing','We lock base specs and clear option upgrades so sales can present numbers buyers understand.'],
      ['faHouseChimney','Model-to-Production Consistency','Same install standards from model to production — so the kitchen buyers fell in love with is the kitchen they get at closing.'],
    ],
    process: [
      [1,'Spec Review & Bid','We review plans and option packages, then bid base specs and upgrades with clear allowances.','faSearch'],
      [2,'Schedule Alignment','We lock install windows to your production calendar.','faCalendarAlt'],
      [3,'Install by Start','Crews install to the agreed specs and leave rooms ready for punch.','faRocket'],
      [4,'Walkthrough Support','We close punch items quickly so buyer walkthroughs are not held up by cabinet details.','faClipboardList'],
    ],
    services: [
      ['faKitchenSet','Custom Cabinets','Shop-built packages for production and custom starts.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Islands, pantries, and trim for model and production kitchens.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Spec vanities across starts with consistent hardware.','/services/bathroom-vanities'],
      ['faDoorOpen','Closet & Built-Ins','Optional closet and mudroom packages.','/services/closet-built-ins'],
    ],
    faq: [
      ['Do you work production homes or custom only?','Both — we support production builders with repeatable specs and custom/semi-custom projects that need higher-end cabinetry.'],
      ['Can you price base packages and buyer upgrades separately?','Yes — we structure bids with clear base allowances and option upgrades so sales and purchasing can manage selections cleanly.'],
      ['Do you install model homes?','Yes — model packages are a specialty. We match the look buyers will get in production so the sales experience stays honest.'],
      ['Can you support multiple communities under one agreement?','Yes — multi-community builders get consistent specs, pricing, and a single point of contact across starts.'],
    ],
    keywords: ['homebuilder cabinets Waco','production cabinets Central Texas','model home cabinets Waco TX','developer millwork Texas'],
    desc: 'Production cabinet packages and model-home kitchens for homebuilders and developers across Central Texas. Schedule-driven, 5-Year Craftsmanship Warranty.',
  },
  {
    slug: 'interior-designers',
    label: 'Interior Designers',
    title: 'Millwork for Interior Designers',
    subtitle: 'Designer-driven cabinetry and millwork — we build what you draw, protect your client relationship, and hit install windows that keep projects on track.',
    trust: 'A custom shop that respects designer specs and client experience',
    fn: 'InteriorDesignersPage',
    pain: [
      ['faCalendarAlt','Shops miss design intent','Substitutions and shortcuts break the look you sold. You need a fabricator who builds what is drawn.'],
      ['faFileInvoiceDollar','Vague shop quotes surprise clients','Vague allowances create awkward budget conversations mid-project and erode trust.'],
      ['faHouseChimney','Install quality undoes the design','Beautiful elevations fail if install leaves gaps, bad reveals, or damaged finishes.'],
      ['faHardHat','No designer-friendly communication','You should not chase a shop for status. Clear updates protect your client experience.'],
      ['faClipboardList','Finish samples do not match reality','Lighting and sheen differences kill presentations. Samples and approvals need discipline.'],
      ['faHandshake','Shops compete for your client','The right partner supports your relationship — they do not sidestep you for the next job.'],
    ],
    why: [
      ['faCalendarAlt','We Build the Drawing','Elevations, door styles, and finish notes are instructions — not suggestions.'],
      ['faFileInvoiceDollar','Clear Quotes Clients Understand','Itemized flat-rate quotes you can present without awkward revisions.'],
      ['faHouseChimney','Install That Protects the Look','Careful setting, hardware adjustment, and punch before we call it done.'],
    ],
    process: [
      [1,'Spec Intake','Share drawings, finish schedules, and budget targets.','faSearch'],
      [2,'Shop Review','We flag constructability issues early and confirm lead times.','faClipboardList'],
      [3,'Fabricate','Approved samples lock the finish; shop builds to drawing.','faRocket'],
      [4,'Install & Punch','Site install with designer walkthrough support.','faHandshake'],
    ],
    services: [
      ['faKitchenSet','Custom Cabinets','Full custom kitchen and bath cabinetry to your design.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Islands, pantries, and trim packages.','/services/kitchen-remodel-millwork'],
      ['faDoorOpen','Closet & Built-Ins','Closets, media walls, and office built-ins.','/services/closet-built-ins'],
      ['faBuilding','Commercial Millwork','Boutique commercial and hospitality casework.','/services/commercial-millwork'],
    ],
    faq: [
      ['Do you work from designer drawings?','Yes — CAD/PDF elevations, door schedules, and finish notes. We flag constructability issues early.'],
      ['Will you contact my client directly?','We coordinate through you unless you authorize direct client contact. Your relationship stays primary.'],
      ['Can you match specified finishes?','We work from samples and approved finish boards. If a finish is not achievable, we say so before fabrication.'],
      ['Do you offer trade pricing?','Discuss project volume and partnership structure with us — we support ongoing designer relationships.'],
    ],
    keywords: ['interior designer millwork Waco','designer cabinets Central Texas','custom cabinetry for designers Waco','trade millwork shop Texas'],
    desc: 'Designer-driven cabinetry and millwork in Waco and Central Texas. We build what you draw, with clear quotes and install that protects the design.',
  },
  {
    slug: 'commercial-hospitality',
    label: 'Commercial & Hospitality',
    title: 'Millwork for Commercial & Hospitality',
    subtitle: 'Reception desks, bars, display fixtures, and tenant millwork built for traffic, brand standards, and hard opening dates.',
    trust: 'Opening-date focused commercial and hospitality millwork',
    fn: 'CommercialHospitalityPage',
    pain: [
      ['faCalendarAlt','Opening dates are non-negotiable','Lease and launch dates do not move because a shop ran long. You need reverse-planned fabrication.'],
      ['faFileInvoiceDollar','Rough ranges blow FF&E budgets','Hospitality and retail need itemized millwork pricing, not vague allowances.'],
      ['faHouseChimney','Residential shops cannot take the wear','High-traffic finishes and hardware fail fast without commercial-minded construction.'],
      ['faHardHat','After-hours install is required','Daytime installs can kill revenue. You need crews who work nights when the project demands it.'],
      ['faClipboardList','Brand finishes get approximated','Brand books exist for a reason. Close enough is not good enough at opening.'],
      ['faHandshake','Multiple vendors create finger-pointing','One millwork partner for casework beats juggling three shops and a GC blame cycle.'],
    ],
    why: [
      ['faCalendarAlt','Reverse-Plan From Opening','Fabrication scheduled backward from your hard date with contingency baked in.'],
      ['faFileInvoiceDollar','Itemized Commercial Quotes','Clear line items for fabrication, delivery, and install so PMs can plan.'],
      ['faHouseChimney','Built for Traffic','Construction and finishes chosen for daily commercial use, not just residential kitchens.'],
    ],
    process: [
      [1,'RFP / Walk','Drawings or site walk with schedule constraints.','faSearch'],
      [2,'Bid','Itemized millwork bid with install assumptions.','faClipboardList'],
      [3,'Fabricate','Shop production with finish samples approved.','faRocket'],
      [4,'Install','Phased or after-hours install, punch list, docs.','faHandshake'],
    ],
    services: [
      ['faBuilding','Commercial Millwork','Reception, display, and tenant casework.','/services/commercial-millwork'],
      ['faKitchenSet','Custom Cabinets','Back-of-house and break-room cabinetry.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Hospitality service stations and related millwork.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Commercial restroom vanity packages.','/services/bathroom-vanities'],
    ],
    faq: [
      ['Do you work nights and weekends?','When the project requires after-hours install to protect revenue, we plan that into the bid.'],
      ['Can you match brand finish standards?','Yes — provide specs or samples and we match as closely as materials allow before fabrication locks.'],
      ['Do you provide COI documentation?','Yes — certificates of insurance and contractor documentation for property managers and GCs.'],
      ['What commercial scopes do you take?','Reception desks, display fixtures, hospitality service stations, tenant millwork, and similar casework.'],
    ],
    keywords: ['commercial millwork Waco','hospitality millwork Central Texas','retail fixtures Waco TX','tenant improvement casework Texas'],
    desc: 'Commercial and hospitality millwork in Waco and Central Texas — reception, retail, bars, and tenant casework on opening-date schedules.',
  },
];

function industryPage(ind) {
  const pain = ind.pain.map(([icon,p,c]) =>
    `    { icon: ${icon}, problem: "${p}", consequence: "${c}" },`).join('\n');
  const why = ind.why.map(([icon,t,d]) =>
    `    { icon: ${icon}, title: "${t}", description: "${d}" },`).join('\n');
  const process = ind.process.map(([n,t,d,icon]) =>
    `    { number: ${n}, title: "${t}", description: "${d}", icon: ${icon} },`).join('\n');
  const services = ind.services.map(([icon,t,b,link]) =>
    `    { icon: ${icon}, title: "${t}", body: "${b}", link: "${link}" },`).join('\n');
  const faq = ind.faq.map(([q,a]) =>
    `    { question: "${q}", answer: "${a}" },`).join('\n');

  return `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faHardHat,
  faClipboardList, faHandshake, faHouseChimney,
  faRocket, faTrophy, faChartLine, faClock,
  faKitchenSet, faRulerCombined, faSink, faDoorOpen, faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function ${ind.fn}() {

  const painPoints = [
${pain}
  ];

  const whyFeatures = [
${why}
  ];

  const processSteps = [
${process}
  ];

  const metrics = [
    { icon: faTrophy,    value: 100, label: "B2B projects completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Client satisfaction", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,  label: "Years serving Central Texas organizations", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Schedule discipline", us: "✅ Locked windows", others: "❌ Soft ETAs" },
    { feature: "Clear package pricing", us: "✅ Flat-rate quotes", others: "❌ Vague allowances" },
    { feature: "Shop-built quality", us: "✅ In-house shop", others: "❌ Outsourced boxes" },
    { feature: "Single point of contact", us: "✅ Dedicated", others: "❌ Rotating vendors" },
    { feature: "5-Year Craftsmanship Warranty", us: "✅ On every project", others: "❌ Limited or none" },
  ];

  const faq = [
${faq}
  ];

  const services = [
${services}
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "${ind.label}" },
      ]} />

      <SectionIntro
        title="${ind.title}"
        subtitle="${ind.subtitle}"
      />

      <TrustBar headline="${ind.trust}" />

      <IndustryPainPoints
        industry="${ind.label.toLowerCase()}"
        painPoints={painPoints}
        ctaText="Get a Partnership Quote"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Central Texas"
          features={whyFeatures}
          title="What We Build Differently"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Services Your Projects Need"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={[
            { town: "Waco", benefit: "Home base — strongest production support nearby.", badge: "Home Base" },
            { town: "Hewitt", benefit: "Active residential growth communities we serve.", badge: "" },
            { town: "Woodway", benefit: "Premium custom and semi-custom homes.", badge: "" },
            { town: "China Spring", benefit: "New construction and rural custom homes.", badge: "" },
            { town: "Temple", benefit: "Bell County production and commercial work.", badge: "" },
            { town: "Killeen", benefit: "Multi-family and commercial properties.", badge: "" },
          ]}
          servicePath="industries/${ind.slug}"
          title="Serving Organizations Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${ind.label} FAQs" />
      </div>

      <CTABanner
        headline="Ready to Partner With Craftline?"
        subline="Tell us about your pipeline, specs, or opening date — we'll build a proposal around how you work."
        primaryText="Call (254) 741-2800"
        primaryLink="tel:+12547412800"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Start the Conversation"
          cityName="Waco"
          slug="${ind.slug}"
          spot="industry-${ind.slug}"
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;
}

function industryLayout(ind) {
  const kws = ind.keywords.map(k => `    "${k}",`).join('\n');
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/industries/${ind.slug}\`;

export const metadata: Metadata = {
  title: "${ind.title} | ${brand}",
  description: "${ind.desc}",
  keywords: [
${kws}
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "${ind.title} | ${brand}",
    description: "${ind.desc}",
    url, siteName: "${brand}", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${ind.title} | ${brand}",
    description: "${ind.desc}",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${ind.title}",
  description: "${ind.desc}",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "${brand}",
    url: BASE_URL,
    telephone: "+12547412800",
  },
  areaServed: "Central Texas",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
`;
}

for (const ind of industries) {
  const dir = path.join('src/app/industries', ind.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), industryPage(ind));
  fs.writeFileSync(path.join(dir, 'layout.tsx'), industryLayout(ind));
  console.log('industry', ind.slug);
}

// ── Blogs ────────────────────────────────────────────────────────────────────
const blogs = [
  {
    slug: 'custom-vs-semi-custom-cabinets-waco-tx',
    title: 'Custom vs. Semi-Custom Cabinets: What Waco Homeowners Should Know',
    description: 'An honest comparison of custom shop cabinets vs. semi-custom lines for Central Texas kitchens — cost, lead time, and when each wins.',
    category: 'Comparison',
    date: 'April 18, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Custom vs semi-custom cabinets comparison for Waco Texas homes',
    sections: `const sections: BlogSection[] = [
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
];`,
    icons: 'faRulerCombined, faClock, faDollarSign, faLayerGroup, faHome, faCheck',
  },
  {
    slug: 'how-to-choose-cabinet-materials-central-texas',
    title: 'How to Choose Cabinet Materials for Central Texas Homes',
    description: 'Plywood vs particleboard, painted vs stained, and hardware that holds up in Central Texas kitchens and baths.',
    category: 'Materials',
    date: 'April 14, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/hvac-filter.jpg',
    imageAlt: 'Cabinet material choices for Central Texas humidity and homes',
    sections: `const sections: BlogSection[] = [
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
];`,
    icons: 'faLayerGroup, faPaintRoller, faTree, faDroplet, faScrewdriverWrench, faCheck',
  },
  {
    slug: 'signs-its-time-to-refinish-or-replace-cabinets',
    title: "Signs It's Time to Refinish, Reface, or Replace Your Cabinets",
    description: 'Peeling finish, failing hardware, water-damaged boxes — how to know whether to refinish, reface, or go full custom in Waco.',
    category: 'Replacement',
    date: 'April 10, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Signs cabinets need refinishing or replacement in Waco TX',
    sections: `const sections: BlogSection[] = [
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
];`,
    icons: 'faExclamationTriangle, faPaintRoller, faScrewdriverWrench, faRulerCombined, faHome, faCheck',
  },
];

function blogPage(b) {
  return `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { ${b.icons} } from '@fortawesome/free-solid-svg-icons';

${b.sections}

export default function Page() {
  return (
    <>
      <BlogHero
        title="${b.title}"
        description="${b.description}"
        imageSrc="${b.imageSrc}"
        imageAlt="${b.imageAlt}"
        category="${b.category}"
        date="${b.date}"
        readTime={${b.readTime}}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Talk Through Your Cabinetry Options"
        body="Free design consultation, material samples, and a flat-rate quote — no pressure."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="${b.slug}-blog" />
    </>
  );
}
`;
}

function blogLayout(b) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/blogs/${b.slug}\`;

export const metadata: Metadata = {
  title: "${b.title} | ${brand}",
  description: "${b.description}",
  alternates: { canonical: url },
  openGraph: {
    title: "${b.title}",
    description: "${b.description}",
    url, siteName: "${brand}", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
}

for (const b of blogs) {
  const dir = path.join('src/app/blogs', b.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), blogPage(b));
  fs.writeFileSync(path.join(dir, 'layout.tsx'), blogLayout(b));
  // minimal scss if sibling pattern needs it
  fs.writeFileSync(path.join(dir, 'page.module.scss'), `// blog page styles inherited from shared components\n`);
  console.log('blog', b.slug);
}

fs.writeFileSync('libs/blog-posts.ts', `// libs/blog-posts.ts
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
`);

console.log('done pages2');

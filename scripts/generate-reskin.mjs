import fs from 'fs';
import path from 'path';

const BASE = 'https://www.craftlinecabinetry.com';
const brand = 'Craftline Cabinetry & Millwork';

const services = [
  {
    slug: 'custom-cabinets',
    name: 'Custom Cabinets',
    short: 'Custom Cabinets',
    iconImport: 'faKitchenSet, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faRulerCombined, faSink, faBuilding',
    fn: 'CustomCabinetsPage',
    subtitle: 'Shop-built kitchen and bath cabinets — door styles, species, and finishes matched to your home with a 5-Year Craftsmanship Warranty.',
    trust: '1,200+ custom installs across Central Texas by Craftline',
    expectations: [
      ['faSearch','Free Design Consultation','We measure openings, review your layout, and bring real door and finish samples — no pressure.'],
      ['faFileContract','Flat-Rate Quote Before Fabrication','Written price before material is ordered or shop work starts. It does not change mid-job.'],
      ['faCheckCircle','Shop-Built, Installed Right','Plywood construction standards, soft-close hardware, and careful install that protects your floors.'],
      ['faShieldHalved','5-Year Craftsmanship Warranty','Every custom cabinet job is backed by five years of coverage on craftsmanship.'],
    ],
    why: [
      ['faClock','Clear Lead Times','Honest fabrication and install timelines with your quote — usually 4–8 weeks after design approval.'],
      ['faKitchenSet','Full Custom, Your Specs','Door styles, wood species, paint or stain, hardware — built for your kitchen, not a showroom floor model.'],
      ['faShieldHalved','Licensed Contractor · Custom Shop','Built in our Waco shop under a licensed contractor with full insurance.'],
    ],
    process: [
      [1,'Call or Book','Contact us by phone or online. We schedule your free design consult — usually within a few days.','faHeadset'],
      [2,'Measure & Samples','We measure every opening and bring door styles, woods, and finishes to your home.','faSearch'],
      [3,'Flat-Rate Quote','Exact price before fabrication. You decide — zero pressure.','faFileContract'],
      [4,'Build & Install','Shop-built, carefully installed, inspected with you, warranted for 5 years.','faCheckCircle'],
    ],
    metrics: [[1200,'Custom cabinets installed', '+', 3],[98,'Customer satisfaction rating', '%', 2],[18,'Years serving Waco-area homeowners', '+', 2]],
    comparison: [
      ['Flat-rate price before fabrication','✅ Always written','❌ Estimate only'],
      ['5-year craftsmanship warranty','✅ Every install','❌ 1 year or less'],
      ['Shop-built custom cabinets','✅ In-house shop','❌ Outsourced boxes'],
      ['Free design consult & samples','✅ Always included','❌ Showroom only'],
      ['Soft-close hardware standard','✅ Included','❌ Often upgrade'],
    ],
    faq: [
      ['How much do custom cabinets cost in Waco?','Most full custom kitchens range based on linear feet, species, and finish. We quote flat-rate after a free design consult and measure.'],
      ['How long does fabrication take?','After design approval, most residential kitchens take 4–8 weeks to fabricate and install depending on scope and finish.'],
      ['What materials do you use?','We build with quality plywood construction and offer solid wood and painted MDF door options, soft-close hardware, and durable finishes suited to Central Texas homes.'],
      ['Do you handle design?','Yes — layout, door style, finish selection, and hardware are part of our design consult. We can work from your designer drawings too.'],
      ['Can you match existing millwork?','Often yes. Bring photos or samples and we will discuss matching profiles, stains, and hardware as closely as the material allows.'],
      ['Do you remove old cabinets?','Yes — demolition and haul-away can be included in your quote so one crew handles tear-out through install.'],
    ],
    cross: [
      ['faRulerCombined','Kitchen Remodel Millwork','Islands, pantries, and remodel millwork as one package.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Custom vanities built to fit tight baths.','/services/bathroom-vanities'],
      ['faBuilding','Commercial Millwork','Reception desks and tenant fixtures on schedule.','/services/commercial-millwork'],
      ['faKitchenSet','Cabinet Refacing','New doors and fronts when boxes are still solid.','/services/cabinet-refacing'],
    ],
    keywords: ['custom cabinets Waco TX','custom kitchen cabinets Waco','cabinet maker Central Texas','shop-built cabinets Hewitt','custom cabinetry Woodway TX'],
    desc: 'Shop-built custom kitchen and bath cabinets in Waco, TX. Free design consultations, flat-rate quotes, 5-Year Craftsmanship Warranty.',
  },
  {
    slug: 'kitchen-remodel-millwork',
    name: 'Kitchen Remodel Millwork',
    short: 'Kitchen Remodel Millwork',
    iconImport: 'faRulerCombined, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faSink, faBuilding',
    fn: 'KitchenRemodelMillworkPage',
    subtitle: 'Cabinets, islands, pantries, and trim millwork coordinated as one remodel package — design through install.',
    trust: 'Full kitchen millwork packages for Central Texas remodels',
    expectations: [
      ['faSearch','Whole-Kitchen Scope','We plan cabinets, island, pantry, and related millwork together so finishes and elevations match.'],
      ['faFileContract','One Flat-Rate Package','A single written quote for shop work and install — not a pile of separate trade bills.'],
      ['faCheckCircle','Remodel-Ready Install','Tear-out through final hardware, sequenced so plumbing and electrical can land cleanly.'],
      ['faShieldHalved','5-Year Craftsmanship Warranty','Millwork craftsmanship covered for five years on every remodel package.'],
    ],
    why: [
      ['faClock','Coordinated Schedule','We work with your GC or as lead millwork trade so cabinets do not become the remodel bottleneck.'],
      ['faRulerCombined','Design + Fabrication','Layout, elevations, and shop drawings when needed — not just a box drop.'],
      ['faShieldHalved','Licensed · Insured · Local Shop','Waco-based shop with full insurance for home remodels.'],
    ],
    process: [
      [1,'Consult','Share plans or walk the kitchen with us. We define scope and budget range.','faHeadset'],
      [2,'Design Measure','Field measure, material samples, and layout confirmation.','faSearch'],
      [3,'Quote & Approve','Flat-rate package quote. Approve finishes and lead time.','faFileContract'],
      [4,'Build & Install','Fabricate, install, walkthrough, and warranty.','faCheckCircle'],
    ],
    metrics: [[1200,'Custom installs completed', '+', 3],[98,'Customer satisfaction rating', '%', 2],[18,'Years of remodel millwork', '+', 2]],
    comparison: [
      ['Single millwork package quote','✅ One price','❌ Multiple vendors'],
      ['Shop-built cabinets & millwork','✅ In-house','❌ Big-box boxes'],
      ['5-year craftsmanship warranty','✅ Every package','❌ Limited'],
      ['Designer-friendly process','✅ Drawings welcome','❌ Retail-only'],
      ['Local Waco shop','✅ Always','❌ Out-of-town'],
    ],
    faq: [
      ['Can you work with my general contractor?','Yes — we regularly coordinate as the millwork trade on larger remodels with clear scopes and install windows.'],
      ['Do you build islands and pantries?','Yes — islands, pantries, appliance panels, and matching trim are part of our kitchen remodel millwork scope.'],
      ['How long does a kitchen remodel package take?','Most residential packages fabricate and install in 4–8 weeks after design approval, depending on complexity.'],
      ['Do you handle countertops?','We coordinate around countertop templates and can recommend partners; cabinets and millwork are our core scope.'],
      ['Can you match open shelving or painted finishes?','Yes — painted, stained, and mixed-finish kitchens are common. We show samples in your lighting before locking the quote.'],
    ],
    cross: [
      ['faKitchenSet','Custom Cabinets','Full custom kitchen and bath cabinets.','/services/custom-cabinets'],
      ['faSink','Bathroom Vanities','Custom bath storage and vanities.','/services/bathroom-vanities'],
      ['faBuilding','Commercial Millwork','Tenant and hospitality millwork.','/services/commercial-millwork'],
      ['faKitchenSet','Cabinet Refacing','Refresh boxes without a full gut.','/services/cabinet-refacing'],
    ],
    keywords: ['kitchen remodel millwork Waco','kitchen cabinets remodel TX','custom kitchen millwork Waco','pantry cabinets Central Texas'],
    desc: 'Kitchen remodel millwork in Waco — cabinets, islands, pantries, and trim as one package. Flat-rate quotes, 5-Year Craftsmanship Warranty.',
  },
  {
    slug: 'bathroom-vanities',
    name: 'Bathroom Vanities',
    short: 'Bathroom Vanities',
    iconImport: 'faSink, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faDoorOpen',
    fn: 'BathroomVanitiesPage',
    subtitle: 'Custom vanities and bath storage built to fit tight spaces — soft-close hardware, durable finishes, clean install.',
    trust: 'Custom bathroom vanities for Waco and Central Texas homes',
    expectations: [
      ['faSearch','Exact Fit Measure','We measure plumbing centers, door swings, and wall quirks so the vanity fits the first time.'],
      ['faFileContract','Flat-Rate Price','Written quote covering fabrication and install before shop work begins.'],
      ['faCheckCircle','Moisture-Smart Finishes','Finishes and construction chosen for bathroom humidity, not just kitchen showrooms.'],
      ['faShieldHalved','5-Year Craftsmanship Warranty','Craftsmanship on every vanity project covered for five years.'],
    ],
    why: [
      ['faClock','Right-Sized Lead Times','Single and double vanities often move faster than full kitchens — we will give you a real date.'],
      ['faSink','Storage That Works','Drawers, open shelves, and linen towers designed around how you actually use the bath.'],
      ['faShieldHalved','Licensed Install Crews','Careful install that protects tile and flooring already in place.'],
    ],
    process: [
      [1,'Book Consult','Call or form — we schedule a free vanity consult.','faHeadset'],
      [2,'Measure','Field measure and finish samples for wet-area durability.','faSearch'],
      [3,'Quote','Flat-rate fabrication and install quote.','faFileContract'],
      [4,'Install','Built, delivered, set, and warranted.','faCheckCircle'],
    ],
    metrics: [[400,'Custom vanities installed', '+', 3],[98,'Customer satisfaction rating', '%', 2],[18,'Years in the trade', '+', 2]],
    comparison: [
      ['Built to your dimensions','✅ Always','❌ Stock sizes only'],
      ['Soft-close hardware','✅ Standard','❌ Upgrade'],
      ['5-year craftsmanship warranty','✅ Included','❌ Limited'],
      ['Free design consult','✅ Yes','❌ Showroom fee'],
      ['Match kitchen finishes','✅ Available','❌ Hard to match'],
    ],
    faq: [
      ['Can you build around existing plumbing?','Yes — we measure supply and drain locations and design the cabinet around them, or coordinate with your plumber for relocations.'],
      ['Single or double vanity?','Both. We also build makeup stations, linen towers, and floating vanities when structure allows.'],
      ['What about countertops and sinks?','We can leave a solid top ready for your fabricator or coordinate a full vanity package. Ask at consult.'],
      ['How long does a vanity take?','Many bathroom vanity projects complete faster than full kitchens. Timeline is in your quote after measure.'],
    ],
    cross: [
      ['faKitchenSet','Custom Cabinets','Full kitchen cabinetry.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Whole-kitchen remodel packages.','/services/kitchen-remodel-millwork'],
      ['faDoorOpen','Closet & Built-Ins','Closets and storage systems.','/services/closet-built-ins'],
      ['faKitchenSet','Cabinet Refacing','Refresh existing cabinetry.','/services/cabinet-refacing'],
    ],
    keywords: ['bathroom vanity Waco TX','custom vanity Central Texas','double vanity cabinets Waco','bathroom cabinets Hewitt'],
    desc: 'Custom bathroom vanities in Waco, TX — built to fit, soft-close hardware, durable finishes, 5-Year Craftsmanship Warranty.',
  },
  {
    slug: 'commercial-millwork',
    name: 'Commercial Millwork',
    short: 'Commercial Millwork',
    iconImport: 'faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faDoorOpen',
    fn: 'CommercialMillworkPage',
    subtitle: 'Reception desks, display fixtures, and tenant millwork for offices, retail, and hospitality — delivered on your schedule.',
    trust: 'Commercial millwork for Central Texas offices, retail & hospitality',
    expectations: [
      ['faSearch','Scope & Spec Review','We review drawings, finishes, and install windows before bidding.'],
      ['faFileContract','Itemized Commercial Quote','Clear line items for fabrication, delivery, and install so PMs can plan.'],
      ['faCheckCircle','Phased or After-Hours Install','We schedule around your business hours and opening dates when needed.'],
      ['faShieldHalved','Licensed · Insured · Warranted','Full insurance and 5-Year Craftsmanship Warranty documentation available.'],
    ],
    why: [
      ['faClock','Opening-Date Discipline','Hard lease dates matter. We plan fabrication backward from your opening.'],
      ['faBuilding','Tenant Improvement Ready','Reception, break rooms, display, and back-of-house millwork under one shop.'],
      ['faShieldHalved','COI & Compliance','Certificates of insurance and contractor documentation for property managers.'],
    ],
    process: [
      [1,'RFP / Walk','Share drawings or schedule a site walk.','faHeadset'],
      [2,'Bid','Detailed millwork bid with schedule assumptions.','faSearch'],
      [3,'Fabricate','Shop production with finish samples approved.','faFileContract'],
      [4,'Install','On-site install, punch list, warranty docs.','faCheckCircle'],
    ],
    metrics: [[150,'Commercial millwork projects', '+', 3],[98,'On-time install rate', '%', 2],[18,'Years local experience', '+', 2]],
    comparison: [
      ['Opening-date focused scheduling','✅ Yes','❌ Vague windows'],
      ['COI & insurance docs ready','✅ Always','❌ On request delays'],
      ['Shop-built commercial grade','✅ Yes','❌ Residential only'],
      ['Single PM contact','✅ Dedicated','❌ Rotating crews'],
      ['5-year craftsmanship warranty','✅ Included','❌ Limited'],
    ],
    faq: [
      ['What commercial work do you take?','Reception desks, display fixtures, tenant millwork, break rooms, hospitality bars/service stations, and similar casework.'],
      ['Do you work nights or weekends?','When the project requires after-hours install to protect revenue, we plan that into the bid.'],
      ['Can you match brand finishes?','Yes — provide finish specs or samples and we will match as closely as materials allow.'],
      ['Do you serve Temple and Killeen?','Yes — commercial work across our Central Texas service area including Bell County.'],
    ],
    cross: [
      ['faKitchenSet','Custom Cabinets','Residential custom cabinets.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Full kitchen packages.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Custom bath vanities.','/services/bathroom-vanities'],
      ['faDoorOpen','Closet & Built-Ins','Storage and built-ins.','/services/closet-built-ins'],
    ],
    keywords: ['commercial millwork Waco','tenant improvement millwork TX','reception desk custom Waco','retail fixtures Central Texas'],
    desc: 'Commercial millwork in Waco and Central Texas — reception, retail, hospitality casework. Licensed, insured, opening-date focused.',
  },
  {
    slug: 'cabinet-refacing',
    name: 'Cabinet Refacing',
    short: 'Cabinet Refacing',
    iconImport: 'faPaintRoller, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faDoorOpen',
    fn: 'CabinetRefacingPage',
    subtitle: 'New doors, drawer fronts, and hardware over solid boxes — a fraction of full replacement when the structure is sound.',
    trust: 'Cabinet refacing that transforms kitchens without a full tear-out',
    expectations: [
      ['faSearch','Honest Box Assessment','We tell you when refacing makes sense and when boxes need full replacement.'],
      ['faFileContract','Clear Scope Quote','Doors, fronts, veneer or paint, hardware — itemized before work starts.'],
      ['faCheckCircle','Fast Transformation','Most refacing projects complete in days, not weeks of full remodel disruption.'],
      ['faShieldHalved','5-Year Craftsmanship Warranty','Craftsmanship on refacing work covered for five years.'],
    ],
    why: [
      ['faClock','Less Disruption','Keep your kitchen layout and plumbing; refresh the face and function.'],
      ['faPaintRoller','Modern Styles','Shaker, slab, and painted looks without replacing every box.'],
      ['faShieldHalved','Shop-Quality Doors','Doors and fronts built to fit your existing openings carefully.'],
    ],
    process: [
      [1,'Assess','On-site evaluation of boxes, hinges, and layout.','faHeadset'],
      [2,'Select','Door style, finish, and hardware samples.','faSearch'],
      [3,'Quote','Flat-rate refacing quote with timeline.','faFileContract'],
      [4,'Install','Remove old doors, install new, adjust, warranty.','faCheckCircle'],
    ],
    metrics: [[300,'Kitchens refaced', '+', 3],[98,'Customer satisfaction', '%', 2],[18,'Years local craft', '+', 2]],
    comparison: [
      ['Honest refacing vs replace advice','✅ Always','❌ Upsell only'],
      ['Days not months of disruption','✅ Typical','❌ Full gut only'],
      ['5-year craftsmanship warranty','✅ Yes','❌ Limited'],
      ['Hardware upgrade included option','✅ Available','❌ Extra shops'],
      ['Flat-rate quote','✅ Written','❌ Hourly'],
    ],
    faq: [
      ['When is refacing a bad idea?','If boxes are water-damaged, out of square, or you need a new layout, full custom usually makes more sense. We will say so.'],
      ['Can you change the color completely?','Yes — painted and wood-look finishes are both common on refacing projects.'],
      ['Do you reface only kitchen cabinets?','Kitchens are most common; bath vanities can be candidates when boxes are solid.'],
      ['How much can I save vs full custom?','Many homeowners save significantly versus full replacement. Your quote will show both options when useful.'],
    ],
    cross: [
      ['faKitchenSet','Custom Cabinets','When full replacement is the better path.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Full remodel packages.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Custom bath solutions.','/services/bathroom-vanities'],
      ['faDoorOpen','Closet & Built-Ins','Add storage elsewhere.','/services/closet-built-ins'],
    ],
    keywords: ['cabinet refacing Waco TX','kitchen cabinet doors replace','reface cabinets Central Texas','cabinet door replacement Waco'],
    desc: 'Cabinet refacing in Waco, TX — new doors, drawer fronts, and hardware over solid boxes. Flat-rate quotes, 5-Year Craftsmanship Warranty.',
  },
  {
    slug: 'closet-built-ins',
    name: 'Closet & Built-Ins',
    short: 'Closet & Built-Ins',
    iconImport: 'faDoorOpen, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faBuilding',
    fn: 'ClosetBuiltInsPage',
    subtitle: 'Walk-in closets, mudroom lockers, media walls, and office built-ins measured and built for how you live.',
    trust: 'Custom closets and built-ins for Central Texas homes',
    expectations: [
      ['faSearch','Lifestyle Measure','We plan hanging, shelves, drawers, and niches around how you store clothes, gear, and media.'],
      ['faFileContract','Flat-Rate Built-In Quote','Clear price for design, shop work, and install.'],
      ['faCheckCircle','Clean Install','Careful fitting to walls and floors, finished look with no gaps or wobble.'],
      ['faShieldHalved','5-Year Craftsmanship Warranty','Built-in craftsmanship warranted for five years.'],
    ],
    why: [
      ['faClock','From Closet to Media Wall','Same shop that builds kitchens builds storage and feature walls.'],
      ['faDoorOpen','Maximized Storage','Double hang, shoe banks, drawers, and adjustable shelves that earn their footprint.'],
      ['faShieldHalved','Finished Furniture Quality','Not wire kits — real cabinetry standards for closets and built-ins.'],
    ],
    process: [
      [1,'Consult','Discuss rooms, storage goals, and budget.','faHeadset'],
      [2,'Design Measure','Field measure and layout proposal.','faSearch'],
      [3,'Quote','Flat-rate approval before shop.','faFileContract'],
      [4,'Install','Fabricate, install, adjust, warranty.','faCheckCircle'],
    ],
    metrics: [[250,'Closet & built-in projects', '+', 3],[98,'Customer satisfaction', '%', 2],[18,'Years crafting storage', '+', 2]],
    comparison: [
      ['True custom fit','✅ Shop-built','❌ Adjustable kits'],
      ['Furniture-grade construction','✅ Yes','❌ Wire systems'],
      ['5-year craftsmanship warranty','✅ Included','❌ Limited'],
      ['Match home millwork','✅ Available','❌ Mismatched kits'],
      ['Flat-rate quote','✅ Written','❌ Open-ended'],
    ],
    faq: [
      ['Do you do reach-in and walk-in closets?','Yes — both, plus mudrooms, pantries as storage rooms, and office built-ins.'],
      ['Can built-ins match my kitchen cabinets?','Often yes if we have finish information or samples. Matching is a common request.'],
      ['Do you install lighting or hardware only?','We focus on the cabinetry/built-in structure; specialty lighting can be coordinated with your electrician.'],
      ['How long do closet projects take?','Many closet systems install faster than full kitchens. Timeline is confirmed in your quote.'],
    ],
    cross: [
      ['faKitchenSet','Custom Cabinets','Kitchen and bath cabinets.','/services/custom-cabinets'],
      ['faRulerCombined','Kitchen Remodel Millwork','Full kitchen packages.','/services/kitchen-remodel-millwork'],
      ['faSink','Bathroom Vanities','Bath storage solutions.','/services/bathroom-vanities'],
      ['faBuilding','Commercial Millwork','Office and retail casework.','/services/commercial-millwork'],
    ],
    keywords: ['custom closet Waco TX','built-ins Central Texas','mudroom lockers Waco','media wall millwork Waco'],
    desc: 'Custom closets and built-ins in Waco, TX — walk-ins, mudrooms, media walls, office storage. Flat-rate quotes, 5-Year Craftsmanship Warranty.',
  },
];

function servicePage(s) {
  const exp = s.expectations.map(([icon,t,d]) =>
    `    { icon: ${icon}, title: "${t}", description: "${d}" },`).join('\n');
  const why = s.why.map(([icon,t,d]) =>
    `    { icon: ${icon}, title: "${t}", description: "${d}" },`).join('\n');
  const proc = s.process.map(([n,t,d,icon]) =>
    `    { number: ${n}, title: "${t}", description: "${d}", icon: ${icon} },`).join('\n');
  const metrics = s.metrics.map(([v,l,suf,dur],i) => {
    const icons = ['faTrophy','faChartLine','faClock'];
    return `    { icon: ${icons[i]}, value: ${v}, label: "${l}", suffix: "${suf}", duration: ${dur} },`;
  }).join('\n');
  const guarantees = `    { icon: faFileContract, title: "Flat-Rate Pricing", body: "The price we quote is the price you pay — no matter how long fabrication takes." },
    { icon: faRotateLeft, title: "5-Year Craftsmanship Warranty", body: "Craftsmanship defects covered for 5 years on every job we complete." },
    { icon: faHeadset, title: "Free Design Consultations", body: "No-cost, no-obligation measure and consultation for every project." },
    { icon: faAward, title: "Licensed & Insured", body: "Licensed contractor, fully insured custom shop. Docs available on request." },`;
  const areas = `    { town: "Waco", benefit: "Home base — shop tours and fastest scheduling.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full residential coverage for Hewitt homes.", badge: "" },
    { town: "Woodway", benefit: "Regular service for Woodway neighborhoods.", badge: "" },
    { town: "Temple", benefit: "On our regular route — reliable turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen", benefit: "Full service coverage for Bell County homes.", badge: "" },`;
  const comp = s.comparison.map(([f,u,o]) =>
    `    { feature: "${f}", us: "${u}", others: "${o}" },`).join('\n');
  const faq = s.faq.map(([q,a]) =>
    `    { question: "${q}", answer: "${a}" },`).join('\n');
  const cross = s.cross.map(([icon,t,b,link]) =>
    `    { icon: ${icon}, title: "${t}", body: "${b}", link: "${link}" },`).join('\n');

  return `// ${brand} — ${s.name} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";

import {
  ${s.iconImport},
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function ${s.fn}() {

  const expectations = [
${exp}
  ];

  const whyFeatures = [
${why}
  ];

  const processSteps = [
${proc}
  ];

  const metrics = [
${metrics}
  ];

  const guarantees = [
${guarantees}
  ];

  const localAreas = [
${areas}
  ];

  const comparisonRows = [
${comp}
  ];

  const faq = [
${faq}
  ];

  const crossServices = [
${cross}
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "${s.short}" },
      ]} />

      <SectionIntro
        title="${s.name} in Waco, TX"
        subtitle="${s.subtitle}"
      />

      <TrustBar headline="${s.trust}" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for ${s.short}" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Craftline First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Matter" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees.map(g => ({ icon: g.icon, title: g.title, description: g.body }))} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="Craftline vs. The Other Guys" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="${s.short} FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your ${s.short} Project?"
        subline="Free design consultations. Flat-rate quotes. 5-Year Craftsmanship Warranty."
        primaryText="Call (254) 741-2800"
        primaryLink="tel:+12547412800"
        secondaryText="Request a Free Quote"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Get Your Free ${s.short} Quote"
          cityName="Waco"
          slug="${s.slug}"
          spot="service-${s.slug}"
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;
}

function serviceLayout(s) {
  const kws = s.keywords.map(k => `    "${k}",`).join('\n');
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '${BASE}';
const url = \`\${BASE_URL}/services/${s.slug}\`;

export const metadata: Metadata = {
  title: "${s.name} Waco TX | ${brand}",
  description:
    "${s.desc}",
  keywords: [
${kws}
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "${s.name} Waco TX | ${brand}",
    description:
      "${s.desc}",
    url,
    siteName: "${brand}",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.name} Waco TX | ${brand}",
    description: "${s.desc}",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${s.name}",
  description:
    "${s.desc}",
  provider: {
    "@type": "LocalBusiness",
    name: "${brand}",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",     containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "${s.name}",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
`;
}

for (const s of services) {
  const dir = path.join('src/app/services', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), servicePage(s));
  fs.writeFileSync(path.join(dir, 'layout.tsx'), serviceLayout(s));
  console.log('wrote', s.slug);
}
console.log('done services');

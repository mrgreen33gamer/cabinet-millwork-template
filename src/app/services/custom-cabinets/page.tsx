// Craftline Cabinetry & Millwork — Custom Cabinets Service Page
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
  faKitchenSet, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faRulerCombined, faSink, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function CustomCabinetsPage() {

  const expectations = [
    { icon: faSearch, title: "Free Design Consultation", description: "We measure openings, review your layout, and bring real door and finish samples — no pressure." },
    { icon: faFileContract, title: "Flat-Rate Quote Before Fabrication", description: "Written price before material is ordered or shop work starts. It does not change mid-job." },
    { icon: faCheckCircle, title: "Shop-Built, Installed Right", description: "Plywood construction standards, soft-close hardware, and careful install that protects your floors." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Every custom cabinet job is backed by five years of coverage on craftsmanship." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Clear Lead Times", description: "Honest fabrication and install timelines with your quote — usually 4–8 weeks after design approval." },
    { icon: faKitchenSet, title: "Full Custom, Your Specs", description: "Door styles, wood species, paint or stain, hardware — built for your kitchen, not a showroom floor model." },
    { icon: faShieldHalved, title: "Licensed Contractor · Custom Shop", description: "Built in our Waco shop under a licensed contractor with full insurance." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone or online. We schedule your free design consult — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Measure & Samples", description: "We measure every opening and bring door styles, woods, and finishes to your home.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Exact price before fabrication. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Build & Install", description: "Shop-built, carefully installed, inspected with you, warranted for 5 years.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1200, label: "Custom cabinets installed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing", body: "The price we quote is the price you pay — no matter how long fabrication takes." },
    { icon: faRotateLeft, title: "5-Year Craftsmanship Warranty", body: "Craftsmanship defects covered for 5 years on every job we complete." },
    { icon: faHeadset, title: "Free Design Consultations", body: "No-cost, no-obligation measure and consultation for every project." },
    { icon: faAward, title: "Licensed & Insured", body: "Licensed contractor, fully insured custom shop. Docs available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — shop tours and fastest scheduling.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full residential coverage for Hewitt homes.", badge: "" },
    { town: "Woodway", benefit: "Regular service for Woodway neighborhoods.", badge: "" },
    { town: "Temple", benefit: "On our regular route — reliable turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen", benefit: "Full service coverage for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before fabrication", us: "✅ Always written", others: "❌ Estimate only" },
    { feature: "5-year craftsmanship warranty", us: "✅ Every install", others: "❌ 1 year or less" },
    { feature: "Shop-built custom cabinets", us: "✅ In-house shop", others: "❌ Outsourced boxes" },
    { feature: "Free design consult & samples", us: "✅ Always included", others: "❌ Showroom only" },
    { feature: "Soft-close hardware standard", us: "✅ Included", others: "❌ Often upgrade" },
  ];

  const faq = [
    { question: "How much do custom cabinets cost in Waco?", answer: "Most full custom kitchens range based on linear feet, species, and finish. We quote flat-rate after a free design consult and measure." },
    { question: "How long does fabrication take?", answer: "After design approval, most residential kitchens take 4–8 weeks to fabricate and install depending on scope and finish." },
    { question: "What materials do you use?", answer: "We build with quality plywood construction and offer solid wood and painted MDF door options, soft-close hardware, and durable finishes suited to Central Texas homes." },
    { question: "Do you handle design?", answer: "Yes — layout, door style, finish selection, and hardware are part of our design consult. We can work from your designer drawings too." },
    { question: "Can you match existing millwork?", answer: "Often yes. Bring photos or samples and we will discuss matching profiles, stains, and hardware as closely as the material allows." },
    { question: "Do you remove old cabinets?", answer: "Yes — demolition and haul-away can be included in your quote so one crew handles tear-out through install." },
  ];

  const crossServices = [
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Islands, pantries, and remodel millwork as one package.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Custom vanities built to fit tight baths.", link: "/services/bathroom-vanities" },
    { icon: faBuilding, title: "Commercial Millwork", body: "Reception desks and tenant fixtures on schedule.", link: "/services/commercial-millwork" },
    { icon: faKitchenSet, title: "Cabinet Refacing", body: "New doors and fronts when boxes are still solid.", link: "/services/cabinet-refacing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Custom Cabinets" },
      ]} />

      <SectionIntro
        title="Custom Cabinets in Waco, TX"
        subtitle="Shop-built kitchen and bath cabinets — door styles, species, and finishes matched to your home with a 5-Year Craftsmanship Warranty."
      />

      <TrustBar headline="1,200+ custom installs across Central Texas by Craftline" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Custom Cabinets" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Custom Cabinets FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Custom Cabinets Project?"
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
          title="Get Your Free Custom Cabinets Quote"
          cityName="Waco"
          slug="custom-cabinets"
          spot="service-custom-cabinets"
          formVariant={4}
        />
      </div>
    </main>
  );
}

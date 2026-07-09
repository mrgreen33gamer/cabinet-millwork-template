// Craftline Cabinetry & Millwork — Cabinet Refacing Service Page
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
  faPaintRoller, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function CabinetRefacingPage() {

  const expectations = [
    { icon: faSearch, title: "Honest Box Assessment", description: "We tell you when refacing makes sense and when boxes need full replacement." },
    { icon: faFileContract, title: "Clear Scope Quote", description: "Doors, fronts, veneer or paint, hardware — itemized before work starts." },
    { icon: faCheckCircle, title: "Fast Transformation", description: "Most refacing projects complete in days, not weeks of full remodel disruption." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Craftsmanship on refacing work covered for five years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Less Disruption", description: "Keep your kitchen layout and plumbing; refresh the face and function." },
    { icon: faPaintRoller, title: "Modern Styles", description: "Shaker, slab, and painted looks without replacing every box." },
    { icon: faShieldHalved, title: "Shop-Quality Doors", description: "Doors and fronts built to fit your existing openings carefully." },
  ];

  const processSteps = [
    { number: 1, title: "Assess", description: "On-site evaluation of boxes, hinges, and layout.", icon: faHeadset },
    { number: 2, title: "Select", description: "Door style, finish, and hardware samples.", icon: faSearch },
    { number: 3, title: "Quote", description: "Flat-rate refacing quote with timeline.", icon: faFileContract },
    { number: 4, title: "Install", description: "Remove old doors, install new, adjust, warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 300, label: "Kitchens refaced", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years local craft", suffix: "+", duration: 2 },
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
    { feature: "Honest refacing vs replace advice", us: "✅ Always", others: "❌ Upsell only" },
    { feature: "Days not months of disruption", us: "✅ Typical", others: "❌ Full gut only" },
    { feature: "5-year craftsmanship warranty", us: "✅ Yes", others: "❌ Limited" },
    { feature: "Hardware upgrade included option", us: "✅ Available", others: "❌ Extra shops" },
    { feature: "Flat-rate quote", us: "✅ Written", others: "❌ Hourly" },
  ];

  const faq = [
    { question: "When is refacing a bad idea?", answer: "If boxes are water-damaged, out of square, or you need a new layout, full custom usually makes more sense. We will say so." },
    { question: "Can you change the color completely?", answer: "Yes — painted and wood-look finishes are both common on refacing projects." },
    { question: "Do you reface only kitchen cabinets?", answer: "Kitchens are most common; bath vanities can be candidates when boxes are solid." },
    { question: "How much can I save vs full custom?", answer: "Many homeowners save significantly versus full replacement. Your quote will show both options when useful." },
  ];

  const crossServices = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "When full replacement is the better path.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Full remodel packages.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Custom bath solutions.", link: "/services/bathroom-vanities" },
    { icon: faDoorOpen, title: "Closet & Built-Ins", body: "Add storage elsewhere.", link: "/services/closet-built-ins" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Cabinet Refacing" },
      ]} />

      <SectionIntro
        title="Cabinet Refacing in Waco, TX"
        subtitle="New doors, drawer fronts, and hardware over solid boxes — a fraction of full replacement when the structure is sound."
      />

      <TrustBar headline="Cabinet refacing that transforms kitchens without a full tear-out" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Cabinet Refacing" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Cabinet Refacing FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Cabinet Refacing Project?"
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
          title="Get Your Free Cabinet Refacing Quote"
          cityName="Waco"
          slug="cabinet-refacing"
          spot="service-cabinet-refacing"
          formVariant={4}
        />
      </div>
    </main>
  );
}

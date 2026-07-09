// Craftline Cabinetry & Millwork — Kitchen Remodel Millwork Service Page
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
  faRulerCombined, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faSink, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function KitchenRemodelMillworkPage() {

  const expectations = [
    { icon: faSearch, title: "Whole-Kitchen Scope", description: "We plan cabinets, island, pantry, and related millwork together so finishes and elevations match." },
    { icon: faFileContract, title: "One Flat-Rate Package", description: "A single written quote for shop work and install — not a pile of separate trade bills." },
    { icon: faCheckCircle, title: "Remodel-Ready Install", description: "Tear-out through final hardware, sequenced so plumbing and electrical can land cleanly." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Millwork craftsmanship covered for five years on every remodel package." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Coordinated Schedule", description: "We work with your GC or as lead millwork trade so cabinets do not become the remodel bottleneck." },
    { icon: faRulerCombined, title: "Design + Fabrication", description: "Layout, elevations, and shop drawings when needed — not just a box drop." },
    { icon: faShieldHalved, title: "Licensed · Insured · Local Shop", description: "Waco-based shop with full insurance for home remodels." },
  ];

  const processSteps = [
    { number: 1, title: "Consult", description: "Share plans or walk the kitchen with us. We define scope and budget range.", icon: faHeadset },
    { number: 2, title: "Design Measure", description: "Field measure, material samples, and layout confirmation.", icon: faSearch },
    { number: 3, title: "Quote & Approve", description: "Flat-rate package quote. Approve finishes and lead time.", icon: faFileContract },
    { number: 4, title: "Build & Install", description: "Fabricate, install, walkthrough, and warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 1200, label: "Custom installs completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years of remodel millwork", suffix: "+", duration: 2 },
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
    { feature: "Single millwork package quote", us: "✅ One price", others: "❌ Multiple vendors" },
    { feature: "Shop-built cabinets & millwork", us: "✅ In-house", others: "❌ Big-box boxes" },
    { feature: "5-year craftsmanship warranty", us: "✅ Every package", others: "❌ Limited" },
    { feature: "Designer-friendly process", us: "✅ Drawings welcome", others: "❌ Retail-only" },
    { feature: "Local Waco shop", us: "✅ Always", others: "❌ Out-of-town" },
  ];

  const faq = [
    { question: "Can you work with my general contractor?", answer: "Yes — we regularly coordinate as the millwork trade on larger remodels with clear scopes and install windows." },
    { question: "Do you build islands and pantries?", answer: "Yes — islands, pantries, appliance panels, and matching trim are part of our kitchen remodel millwork scope." },
    { question: "How long does a kitchen remodel package take?", answer: "Most residential packages fabricate and install in 4–8 weeks after design approval, depending on complexity." },
    { question: "Do you handle countertops?", answer: "We coordinate around countertop templates and can recommend partners; cabinets and millwork are our core scope." },
    { question: "Can you match open shelving or painted finishes?", answer: "Yes — painted, stained, and mixed-finish kitchens are common. We show samples in your lighting before locking the quote." },
  ];

  const crossServices = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Full custom kitchen and bath cabinets.", link: "/services/custom-cabinets" },
    { icon: faSink, title: "Bathroom Vanities", body: "Custom bath storage and vanities.", link: "/services/bathroom-vanities" },
    { icon: faBuilding, title: "Commercial Millwork", body: "Tenant and hospitality millwork.", link: "/services/commercial-millwork" },
    { icon: faKitchenSet, title: "Cabinet Refacing", body: "Refresh boxes without a full gut.", link: "/services/cabinet-refacing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Kitchen Remodel Millwork" },
      ]} />

      <SectionIntro
        title="Kitchen Remodel Millwork in Waco, TX"
        subtitle="Cabinets, islands, pantries, and trim millwork coordinated as one remodel package — design through install."
      />

      <TrustBar headline="Full kitchen millwork packages for Central Texas remodels" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Kitchen Remodel Millwork" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Kitchen Remodel Millwork FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Kitchen Remodel Millwork Project?"
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
          title="Get Your Free Kitchen Remodel Millwork Quote"
          cityName="Waco"
          slug="kitchen-remodel-millwork"
          spot="service-kitchen-remodel-millwork"
          formVariant={4}
        />
      </div>
    </main>
  );
}

// Craftline Cabinetry & Millwork — Closet & Built-Ins Service Page
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
  faDoorOpen, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function ClosetBuiltInsPage() {

  const expectations = [
    { icon: faSearch, title: "Lifestyle Measure", description: "We plan hanging, shelves, drawers, and niches around how you store clothes, gear, and media." },
    { icon: faFileContract, title: "Flat-Rate Built-In Quote", description: "Clear price for design, shop work, and install." },
    { icon: faCheckCircle, title: "Clean Install", description: "Careful fitting to walls and floors, finished look with no gaps or wobble." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Built-in craftsmanship warranted for five years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "From Closet to Media Wall", description: "Same shop that builds kitchens builds storage and feature walls." },
    { icon: faDoorOpen, title: "Maximized Storage", description: "Double hang, shoe banks, drawers, and adjustable shelves that earn their footprint." },
    { icon: faShieldHalved, title: "Finished Furniture Quality", description: "Not wire kits — real cabinetry standards for closets and built-ins." },
  ];

  const processSteps = [
    { number: 1, title: "Consult", description: "Discuss rooms, storage goals, and budget.", icon: faHeadset },
    { number: 2, title: "Design Measure", description: "Field measure and layout proposal.", icon: faSearch },
    { number: 3, title: "Quote", description: "Flat-rate approval before shop.", icon: faFileContract },
    { number: 4, title: "Install", description: "Fabricate, install, adjust, warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 250, label: "Closet & built-in projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years crafting storage", suffix: "+", duration: 2 },
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
    { feature: "True custom fit", us: "✅ Shop-built", others: "❌ Adjustable kits" },
    { feature: "Furniture-grade construction", us: "✅ Yes", others: "❌ Wire systems" },
    { feature: "5-year craftsmanship warranty", us: "✅ Included", others: "❌ Limited" },
    { feature: "Match home millwork", us: "✅ Available", others: "❌ Mismatched kits" },
    { feature: "Flat-rate quote", us: "✅ Written", others: "❌ Open-ended" },
  ];

  const faq = [
    { question: "Do you do reach-in and walk-in closets?", answer: "Yes — both, plus mudrooms, pantries as storage rooms, and office built-ins." },
    { question: "Can built-ins match my kitchen cabinets?", answer: "Often yes if we have finish information or samples. Matching is a common request." },
    { question: "Do you install lighting or hardware only?", answer: "We focus on the cabinetry/built-in structure; specialty lighting can be coordinated with your electrician." },
    { question: "How long do closet projects take?", answer: "Many closet systems install faster than full kitchens. Timeline is confirmed in your quote." },
  ];

  const crossServices = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Kitchen and bath cabinets.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Full kitchen packages.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Bath storage solutions.", link: "/services/bathroom-vanities" },
    { icon: faBuilding, title: "Commercial Millwork", body: "Office and retail casework.", link: "/services/commercial-millwork" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Closet & Built-Ins" },
      ]} />

      <SectionIntro
        title="Closet & Built-Ins in Waco, TX"
        subtitle="Walk-in closets, mudroom lockers, media walls, and office built-ins measured and built for how you live."
      />

      <TrustBar headline="Custom closets and built-ins for Central Texas homes" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Closet & Built-Ins" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Closet & Built-Ins FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Closet & Built-Ins Project?"
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
          title="Get Your Free Closet & Built-Ins Quote"
          cityName="Waco"
          slug="closet-built-ins"
          spot="service-closet-built-ins"
          formVariant={4}
        />
      </div>
    </main>
  );
}

// Craftline Cabinetry & Millwork — Bathroom Vanities Service Page
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
  faSink, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function BathroomVanitiesPage() {

  const expectations = [
    { icon: faSearch, title: "Exact Fit Measure", description: "We measure plumbing centers, door swings, and wall quirks so the vanity fits the first time." },
    { icon: faFileContract, title: "Flat-Rate Price", description: "Written quote covering fabrication and install before shop work begins." },
    { icon: faCheckCircle, title: "Moisture-Smart Finishes", description: "Finishes and construction chosen for bathroom humidity, not just kitchen showrooms." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Craftsmanship on every vanity project covered for five years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Right-Sized Lead Times", description: "Single and double vanities often move faster than full kitchens — we will give you a real date." },
    { icon: faSink, title: "Storage That Works", description: "Drawers, open shelves, and linen towers designed around how you actually use the bath." },
    { icon: faShieldHalved, title: "Licensed Install Crews", description: "Careful install that protects tile and flooring already in place." },
  ];

  const processSteps = [
    { number: 1, title: "Book Consult", description: "Call or form — we schedule a free vanity consult.", icon: faHeadset },
    { number: 2, title: "Measure", description: "Field measure and finish samples for wet-area durability.", icon: faSearch },
    { number: 3, title: "Quote", description: "Flat-rate fabrication and install quote.", icon: faFileContract },
    { number: 4, title: "Install", description: "Built, delivered, set, and warranted.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 400, label: "Custom vanities installed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years in the trade", suffix: "+", duration: 2 },
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
    { feature: "Built to your dimensions", us: "✅ Always", others: "❌ Stock sizes only" },
    { feature: "Soft-close hardware", us: "✅ Standard", others: "❌ Upgrade" },
    { feature: "5-year craftsmanship warranty", us: "✅ Included", others: "❌ Limited" },
    { feature: "Free design consult", us: "✅ Yes", others: "❌ Showroom fee" },
    { feature: "Match kitchen finishes", us: "✅ Available", others: "❌ Hard to match" },
  ];

  const faq = [
    { question: "Can you build around existing plumbing?", answer: "Yes — we measure supply and drain locations and design the cabinet around them, or coordinate with your plumber for relocations." },
    { question: "Single or double vanity?", answer: "Both. We also build makeup stations, linen towers, and floating vanities when structure allows." },
    { question: "What about countertops and sinks?", answer: "We can leave a solid top ready for your fabricator or coordinate a full vanity package. Ask at consult." },
    { question: "How long does a vanity take?", answer: "Many bathroom vanity projects complete faster than full kitchens. Timeline is in your quote after measure." },
  ];

  const crossServices = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Full kitchen cabinetry.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Whole-kitchen remodel packages.", link: "/services/kitchen-remodel-millwork" },
    { icon: faDoorOpen, title: "Closet & Built-Ins", body: "Closets and storage systems.", link: "/services/closet-built-ins" },
    { icon: faKitchenSet, title: "Cabinet Refacing", body: "Refresh existing cabinetry.", link: "/services/cabinet-refacing" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Bathroom Vanities" },
      ]} />

      <SectionIntro
        title="Bathroom Vanities in Waco, TX"
        subtitle="Custom vanities and bath storage built to fit tight spaces — soft-close hardware, durable finishes, clean install."
      />

      <TrustBar headline="Custom bathroom vanities for Waco and Central Texas homes" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Bathroom Vanities" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Bathroom Vanities FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Bathroom Vanities Project?"
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
          title="Get Your Free Bathroom Vanities Quote"
          cityName="Waco"
          slug="bathroom-vanities"
          spot="service-bathroom-vanities"
          formVariant={4}
        />
      </div>
    </main>
  );
}

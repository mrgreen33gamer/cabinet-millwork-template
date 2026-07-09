// Craftline Cabinetry & Millwork — Commercial Millwork Service Page
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
  faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faRotateLeft, faAward, faTrophy, faChartLine, faKitchenSet, faRulerCombined, faSink, faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function CommercialMillworkPage() {

  const expectations = [
    { icon: faSearch, title: "Scope & Spec Review", description: "We review drawings, finishes, and install windows before bidding." },
    { icon: faFileContract, title: "Itemized Commercial Quote", description: "Clear line items for fabrication, delivery, and install so PMs can plan." },
    { icon: faCheckCircle, title: "Phased or After-Hours Install", description: "We schedule around your business hours and opening dates when needed." },
    { icon: faShieldHalved, title: "Licensed · Insured · Warranted", description: "Full insurance and 5-Year Craftsmanship Warranty documentation available." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Opening-Date Discipline", description: "Hard lease dates matter. We plan fabrication backward from your opening." },
    { icon: faBuilding, title: "Tenant Improvement Ready", description: "Reception, break rooms, display, and back-of-house millwork under one shop." },
    { icon: faShieldHalved, title: "COI & Compliance", description: "Certificates of insurance and contractor documentation for property managers." },
  ];

  const processSteps = [
    { number: 1, title: "RFP / Walk", description: "Share drawings or schedule a site walk.", icon: faHeadset },
    { number: 2, title: "Bid", description: "Detailed millwork bid with schedule assumptions.", icon: faSearch },
    { number: 3, title: "Fabricate", description: "Shop production with finish samples approved.", icon: faFileContract },
    { number: 4, title: "Install", description: "On-site install, punch list, warranty docs.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 150, label: "Commercial millwork projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-time install rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years local experience", suffix: "+", duration: 2 },
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
    { feature: "Opening-date focused scheduling", us: "✅ Yes", others: "❌ Vague windows" },
    { feature: "COI & insurance docs ready", us: "✅ Always", others: "❌ On request delays" },
    { feature: "Shop-built commercial grade", us: "✅ Yes", others: "❌ Residential only" },
    { feature: "Single PM contact", us: "✅ Dedicated", others: "❌ Rotating crews" },
    { feature: "5-year craftsmanship warranty", us: "✅ Included", others: "❌ Limited" },
  ];

  const faq = [
    { question: "What commercial work do you take?", answer: "Reception desks, display fixtures, tenant millwork, break rooms, hospitality bars/service stations, and similar casework." },
    { question: "Do you work nights or weekends?", answer: "When the project requires after-hours install to protect revenue, we plan that into the bid." },
    { question: "Can you match brand finishes?", answer: "Yes — provide finish specs or samples and we will match as closely as materials allow." },
    { question: "Do you serve Temple and Killeen?", answer: "Yes — commercial work across our Central Texas service area including Bell County." },
  ];

  const crossServices = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Residential custom cabinets.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Full kitchen packages.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Custom bath vanities.", link: "/services/bathroom-vanities" },
    { icon: faDoorOpen, title: "Closet & Built-Ins", body: "Storage and built-ins.", link: "/services/closet-built-ins" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Millwork" },
      ]} />

      <SectionIntro
        title="Commercial Millwork in Waco, TX"
        subtitle="Reception desks, display fixtures, and tenant millwork for offices, retail, and hospitality — delivered on your schedule."
      />

      <TrustBar headline="Commercial millwork for Central Texas offices, retail & hospitality" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Commercial Millwork" expectations={expectations} />
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
        <FAQ cityName="Waco" faq={faq} title="Commercial Millwork FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Commercial Millwork Project?"
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
          title="Get Your Free Commercial Millwork Quote"
          cityName="Waco"
          slug="commercial-millwork"
          spot="service-commercial-millwork"
          formVariant={4}
        />
      </div>
    </main>
  );
}

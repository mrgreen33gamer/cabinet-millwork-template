// Craftline Cabinetry & Millwork — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faKitchenSet, faRulerCombined, faSink, faBuilding, faPaintRoller, faDoorOpen,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faKitchenSet,    title: "Custom Cabinets",          body: "Shop-built kitchen and bath cabinets — door styles, species, and finishes matched to your home.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Cabinets, islands, pantries, and trim millwork coordinated as one remodel package.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink,          title: "Bathroom Vanities",        body: "Custom vanities and bath storage built to fit tight spaces with soft-close hardware.", link: "/services/bathroom-vanities" },
    { icon: faBuilding,      title: "Commercial Millwork",      body: "Reception desks, display fixtures, and tenant millwork for offices, retail, and hospitality.", link: "/services/commercial-millwork" },
    { icon: faPaintRoller,   title: "Cabinet Refacing",         body: "New doors, drawer fronts, and hardware over solid boxes — a fraction of full replacement.", link: "/services/cabinet-refacing" },
    { icon: faDoorOpen,      title: "Closet & Built-Ins",       body: "Walk-in closets, mudroom lockers, media walls, and office built-ins for how you live.", link: "/services/closet-built-ins" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free Design Consultation",     description: "We measure on-site, review samples in your lighting, and explain exactly what's included with a written price before fabrication." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",    description: "No hourly billing, no surprise fees. You approve the price before we order material — and it never changes mid-job." },
    { icon: faShieldHalved, title: "Licensed Contractor · Shop",   description: "Every project is built in our Waco shop under a licensed contractor with full insurance." },
    { icon: faTag,          title: "5-Year Craftsmanship Warranty", description: "Every job we complete is backed by five full years of coverage on craftsmanship." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Custom installs across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years serving Waco and Central Texas",  suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset,      title: "A Real Person Answers",       description: "Call or text and reach a real Craftline team member — not a call center. We schedule your free consult fast." },
    { icon: faShieldHalved, title: "Honest Scope Advice",         description: "We'll tell you when refacing is enough and when full custom makes sense — no upselling for the sake of it." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",  description: "Licensed contractor, fully insured. Proof of insurance available on request for builders and property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",       description: "Phone, text, or the form below — your choice. We'll confirm a free design consult that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",  description: "We measure openings and bring real door styles, woods, and finishes — explained in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",    description: "Written price before fabrication. You decide — zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Build & Warranty",   description: "Shop-built quality, clean install, 5-Year Craftsmanship Warranty on every project.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag,          title: "Flat-Rate Pricing",            description: "The price you approve is the price you pay. No hourly billing, no change orders mid-job." },
    { icon: faShieldHalved, title: "5-Year Craftsmanship Warranty", description: "Every job is backed by five full years of coverage. If our craftsmanship fails, we fix it at no charge." },
    { icon: faRotateLeft,   title: "Satisfaction Guarantee",       description: "Not happy with the result? We'll return to make it right. We stand behind every project." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",   description: "Licensed contractor, fully insured. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — shop tours and fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial millwork coverage.",          badge: "" },
    { town: "Woodway",      benefit: "Same-week consults for Woodway-area homes when available.",   badge: "" },
    { town: "McGregor",     benefit: "Regular route — reliable turnaround for McGregor customers.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate quote standards.",     badge: "" },
    { town: "Temple",       benefit: "Full service coverage for Bell County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",       us: "✅ Always",          others: "❌ Hourly + surprise fees" },
    { feature: "5-year craftsmanship warranty",   us: "✅ Every job",       others: "❌ 1 year or less" },
    { feature: "Shop-built custom cabinets",      us: "✅ In-house shop",   others: "❌ Outsourced boxes" },
    { feature: "Free design consult & samples",   us: "✅ Always included", others: "❌ Showroom only" },
    { feature: "Projects gallery you can tour",   us: "✅ Real installs",   others: "❌ Stock photos only" },
  ];

  const faq = [
    { question: "How much do custom cabinets cost in Waco?", answer: "Pricing depends on linear feet, materials, and finish. We always provide a flat-rate written quote after a free design consult and measure." },
    { question: "Do you build all cabinets in-house?", answer: "Yes — custom cabinets and millwork are fabricated in our Waco shop. We are a licensed contractor with a real custom shop, not an install-only crew." },
    { question: "How long does a typical kitchen take?", answer: "After design approval, most residential kitchens fabricate and install in 4–8 weeks depending on scope and finish. Your quote includes an exact timeline." },
    { question: "Are free consultations really free?", answer: "Yes — on-site measures and consultations are no-cost and no-obligation. You get a written price before any material is ordered." },
    { question: "What areas do you serve?", answer: "We're based in Waco and serve Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and surrounding Central Texas communities." },
    { question: "Do you offer a warranty on your work?", answer: "Yes — every job is backed by our 5-Year Craftsmanship Warranty. If our craftsmanship fails within that window, we return and fix it at no charge." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Cabinetry & Millwork Services for Waco & Central Texas"
        subtitle="Custom cabinets, kitchen remodel millwork, vanities, commercial millwork, refacing, and built-ins — shop-built, priced fairly, backed by a 5-Year Craftsmanship Warranty."
      />

      <TrustBar headline="Trusted by 1,200+ custom installs across Central Texas since 2008" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses Craftline" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Cabinetry Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Free Consult?"
        subline="Free design consultations available. Flat-rate quotes, 5-Year Craftsmanship Warranty, shop-built quality."
        primaryText="Call Us Now"
        primaryLink="tel:+12547412800"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Free Quote"
          cityName="Waco"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}

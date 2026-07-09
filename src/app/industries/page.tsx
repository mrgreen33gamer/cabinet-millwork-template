"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Process Before We Quote",
      description: "A production builder, an interior designer, and a hospitality group all work differently. Before we quote, we learn your approval process, budget cycle, and schedule constraints.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Contractor · Fully Insured",
      description: "We're based in Waco with a custom shop, licensed contractor status, and full insurance — the documentation multi-unit, commercial, and hospitality projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Cabinetry, Millwork & Schedule — One Shop",
      description: "Whether your project needs production cabinetry packages, designer-driven millwork, or after-hours hospitality installs — we handle it under one quote.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Texas",     suffix: "",  duration: 2 },
    { icon: faChartLine, value: 100,  label: "Builder and commercial projects completed",       suffix: "+", duration: 3 },
    { icon: faClock,     value: 18,   label: "Years serving Central Texas organizations",       suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — serving builders, designers, and hospitality groups.", highlight: "Headquarters" },
    { town: "Hewitt",       benefit: "Production homes and commercial buildings across the city.",           highlight: "" },
    { town: "Woodway",      benefit: "Premium residential developments and commercial suites.",             highlight: "" },
    { town: "Temple",       benefit: "Growing commercial corridor and multi-family properties we serve.",   highlight: "" },
    { town: "Killeen",      benefit: "Multi-family and commercial properties near Fort Cavazos.",           highlight: "" },
    { town: "China Spring", benefit: "New construction and rural commercial properties.",                   highlight: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling & process",  us: "✅ Built per project type",       others: "❌ One-size-fits-all approach" },
    { feature: "Central Texas market knowledge",              us: "✅ 18+ years in Waco",            others: "❌ Out-of-area shops" },
    { feature: "In-house custom shop",                        us: "✅ Shop-built quality",           others: "❌ Install-only crews" },
    { feature: "Transparent, upfront pricing",                us: "✅ Quote before fabrication",     others: "❌ Billable hours + surprises" },
    { feature: "5-Year Craftsmanship Warranty",               us: "✅ On every project",             others: "❌ Limited or no guarantee" },
  ];

  const faq = [
    {
      question: "What types of organizations does Craftline work with?",
      answer: "We have dedicated experience for homebuilders and developers, interior designers, and commercial and hospitality groups — in addition to residential cabinetry for homeowners.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around the organization and the project — production schedules, designer specs, or hospitality opening dates are not the same problem.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — while we're based in Waco and primarily serve Central Texas, we complete projects for builders, designers, and hospitality groups from Temple and Killeen through greater McLennan County.",
    },
    {
      question: "Can you handle multi-home or multi-unit millwork packages?",
      answer: "Yes — we build production-friendly packages and portfolio schedules with a single dedicated point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll do a free walkthrough, identify your biggest scheduling and budget constraints, and recommend the approach that fits.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve Across Texas"
        subtitle="Cabinetry and millwork programs built for how your organization actually works — production homes, designer projects, and hospitality installs."
      />

      <TrustBar headline="Builder-ready, designer-friendly, hospitality-tough millwork" />

      <div className={styles.section}>
        <SectionIndustriesServed />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose Craftline" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="B2B Results" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Where We Serve Organizations" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} title="Craftline vs. Generic Cabinet Vendors" />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>

      <CTABanner
        headline="Ready to Partner With a Real Custom Shop?"
        subline="Tell us about your pipeline, specs, or opening date — we'll build a proposal around how you work."
        primaryText="Call (254) 741-2800"
        primaryLink="tel:+12547412800"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Start an Industry Partnership Conversation"
          cityName="Waco"
          slug="industries"
          spot="industries-index"
          formVariant={4}
        />
      </div>
    </main>
  );
}

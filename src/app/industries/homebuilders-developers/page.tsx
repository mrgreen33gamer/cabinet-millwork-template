"use client";
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

export default function HomebuildersDevelopersPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Cabinet trades miss production windows", consequence: "When cabinets slip, closing dates slip. Supers need a millwork partner who hits the schedule — not one who reschedules mid-cycle." },
    { icon: faFileInvoiceDollar, problem: "Option upgrades create pricing chaos", consequence: "Without locked specs and clear upgrade pricing, buyer selections turn into change-order headaches and margin erosion." },
    { icon: faHouseChimney, problem: "Model kitchens do not match production", consequence: "If models use different products or install standards than production, buyers walk the model and get something cheaper at closing." },
    { icon: faHardHat, problem: "Punch lists pile up on cabinet details", consequence: "Doors, hardware, and incomplete runs create walk-through fails. Weak finishing standards burn super time and delay CO." },
    { icon: faClipboardList, problem: "No consistent contact across communities", consequence: "Different crews and standards per community force supers to retrain every start instead of running a repeatable process." },
    { icon: faHandshake, problem: "Vendors do not understand builder process", consequence: "Frame-to-finish sequences and buyer walkthroughs have rules. A residential-only installer creates rework instead of clean handoffs." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Production-Schedule Reliability", description: "We plan installs around your finish sequence so cabinets are ready when the rest of the house is — not the bottleneck holding CO." },
    { icon: faFileInvoiceDollar, title: "Spec Packages & Upgrade Pricing", description: "We lock base specs and clear option upgrades so sales can present numbers buyers understand." },
    { icon: faHouseChimney, title: "Model-to-Production Consistency", description: "Same install standards from model to production — so the kitchen buyers fell in love with is the kitchen they get at closing." },
  ];

  const processSteps = [
    { number: 1, title: "Spec Review & Bid", description: "We review plans and option packages, then bid base specs and upgrades with clear allowances.", icon: faSearch },
    { number: 2, title: "Schedule Alignment", description: "We lock install windows to your production calendar.", icon: faCalendarAlt },
    { number: 3, title: "Install by Start", description: "Crews install to the agreed specs and leave rooms ready for punch.", icon: faRocket },
    { number: 4, title: "Walkthrough Support", description: "We close punch items quickly so buyer walkthroughs are not held up by cabinet details.", icon: faClipboardList },
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
    { question: "Do you work production homes or custom only?", answer: "Both — we support production builders with repeatable specs and custom/semi-custom projects that need higher-end cabinetry." },
    { question: "Can you price base packages and buyer upgrades separately?", answer: "Yes — we structure bids with clear base allowances and option upgrades so sales and purchasing can manage selections cleanly." },
    { question: "Do you install model homes?", answer: "Yes — model packages are a specialty. We match the look buyers will get in production so the sales experience stays honest." },
    { question: "Can you support multiple communities under one agreement?", answer: "Yes — multi-community builders get consistent specs, pricing, and a single point of contact across starts." },
  ];

  const services = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Shop-built packages for production and custom starts.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Islands, pantries, and trim for model and production kitchens.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Spec vanities across starts with consistent hardware.", link: "/services/bathroom-vanities" },
    { icon: faDoorOpen, title: "Closet & Built-Ins", body: "Optional closet and mudroom packages.", link: "/services/closet-built-ins" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Homebuilders & Developers" },
      ]} />

      <SectionIntro
        title="Cabinetry for Homebuilders & Developers"
        subtitle="Production cabinet packages, model-home kitchens, and schedule-driven millwork for Central Texas builders who need cabinets on time and on spec."
      />

      <TrustBar headline="Trusted by homebuilders and developers across Central Texas" />

      <IndustryPainPoints
        industry="homebuilders & developers"
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
          servicePath="industries/homebuilders-developers"
          title="Serving Organizations Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Homebuilders & Developers FAQs" />
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
          slug="homebuilders-developers"
          spot="industry-homebuilders-developers"
          formVariant={4}
        />
      </div>
    </main>
  );
}

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

export default function CommercialHospitalityPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Opening dates are non-negotiable", consequence: "Lease and launch dates do not move because a shop ran long. You need reverse-planned fabrication." },
    { icon: faFileInvoiceDollar, problem: "Rough ranges blow FF&E budgets", consequence: "Hospitality and retail need itemized millwork pricing, not vague allowances." },
    { icon: faHouseChimney, problem: "Residential shops cannot take the wear", consequence: "High-traffic finishes and hardware fail fast without commercial-minded construction." },
    { icon: faHardHat, problem: "After-hours install is required", consequence: "Daytime installs can kill revenue. You need crews who work nights when the project demands it." },
    { icon: faClipboardList, problem: "Brand finishes get approximated", consequence: "Brand books exist for a reason. Close enough is not good enough at opening." },
    { icon: faHandshake, problem: "Multiple vendors create finger-pointing", consequence: "One millwork partner for casework beats juggling three shops and a GC blame cycle." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Reverse-Plan From Opening", description: "Fabrication scheduled backward from your hard date with contingency baked in." },
    { icon: faFileInvoiceDollar, title: "Itemized Commercial Quotes", description: "Clear line items for fabrication, delivery, and install so PMs can plan." },
    { icon: faHouseChimney, title: "Built for Traffic", description: "Construction and finishes chosen for daily commercial use, not just residential kitchens." },
  ];

  const processSteps = [
    { number: 1, title: "RFP / Walk", description: "Drawings or site walk with schedule constraints.", icon: faSearch },
    { number: 2, title: "Bid", description: "Itemized millwork bid with install assumptions.", icon: faClipboardList },
    { number: 3, title: "Fabricate", description: "Shop production with finish samples approved.", icon: faRocket },
    { number: 4, title: "Install", description: "Phased or after-hours install, punch list, docs.", icon: faHandshake },
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
    { question: "Do you work nights and weekends?", answer: "When the project requires after-hours install to protect revenue, we plan that into the bid." },
    { question: "Can you match brand finish standards?", answer: "Yes — provide specs or samples and we match as closely as materials allow before fabrication locks." },
    { question: "Do you provide COI documentation?", answer: "Yes — certificates of insurance and contractor documentation for property managers and GCs." },
    { question: "What commercial scopes do you take?", answer: "Reception desks, display fixtures, hospitality service stations, tenant millwork, and similar casework." },
  ];

  const services = [
    { icon: faBuilding, title: "Commercial Millwork", body: "Reception, display, and tenant casework.", link: "/services/commercial-millwork" },
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Back-of-house and break-room cabinetry.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Hospitality service stations and related millwork.", link: "/services/kitchen-remodel-millwork" },
    { icon: faSink, title: "Bathroom Vanities", body: "Commercial restroom vanity packages.", link: "/services/bathroom-vanities" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Commercial & Hospitality" },
      ]} />

      <SectionIntro
        title="Millwork for Commercial & Hospitality"
        subtitle="Reception desks, bars, display fixtures, and tenant millwork built for traffic, brand standards, and hard opening dates."
      />

      <TrustBar headline="Opening-date focused commercial and hospitality millwork" />

      <IndustryPainPoints
        industry="commercial & hospitality"
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
          servicePath="industries/commercial-hospitality"
          title="Serving Organizations Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial & Hospitality FAQs" />
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
          slug="commercial-hospitality"
          spot="industry-commercial-hospitality"
          formVariant={4}
        />
      </div>
    </main>
  );
}

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

export default function InteriorDesignersPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Shops miss design intent", consequence: "Substitutions and shortcuts break the look you sold. You need a fabricator who builds what is drawn." },
    { icon: faFileInvoiceDollar, problem: "Vague shop quotes surprise clients", consequence: "Vague allowances create awkward budget conversations mid-project and erode trust." },
    { icon: faHouseChimney, problem: "Install quality undoes the design", consequence: "Beautiful elevations fail if install leaves gaps, bad reveals, or damaged finishes." },
    { icon: faHardHat, problem: "No designer-friendly communication", consequence: "You should not chase a shop for status. Clear updates protect your client experience." },
    { icon: faClipboardList, problem: "Finish samples do not match reality", consequence: "Lighting and sheen differences kill presentations. Samples and approvals need discipline." },
    { icon: faHandshake, problem: "Shops compete for your client", consequence: "The right partner supports your relationship — they do not sidestep you for the next job." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "We Build the Drawing", description: "Elevations, door styles, and finish notes are instructions — not suggestions." },
    { icon: faFileInvoiceDollar, title: "Clear Quotes Clients Understand", description: "Itemized flat-rate quotes you can present without awkward revisions." },
    { icon: faHouseChimney, title: "Install That Protects the Look", description: "Careful setting, hardware adjustment, and punch before we call it done." },
  ];

  const processSteps = [
    { number: 1, title: "Spec Intake", description: "Share drawings, finish schedules, and budget targets.", icon: faSearch },
    { number: 2, title: "Shop Review", description: "We flag constructability issues early and confirm lead times.", icon: faClipboardList },
    { number: 3, title: "Fabricate", description: "Approved samples lock the finish; shop builds to drawing.", icon: faRocket },
    { number: 4, title: "Install & Punch", description: "Site install with designer walkthrough support.", icon: faHandshake },
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
    { question: "Do you work from designer drawings?", answer: "Yes — CAD/PDF elevations, door schedules, and finish notes. We flag constructability issues early." },
    { question: "Will you contact my client directly?", answer: "We coordinate through you unless you authorize direct client contact. Your relationship stays primary." },
    { question: "Can you match specified finishes?", answer: "We work from samples and approved finish boards. If a finish is not achievable, we say so before fabrication." },
    { question: "Do you offer trade pricing?", answer: "Discuss project volume and partnership structure with us — we support ongoing designer relationships." },
  ];

  const services = [
    { icon: faKitchenSet, title: "Custom Cabinets", body: "Full custom kitchen and bath cabinetry to your design.", link: "/services/custom-cabinets" },
    { icon: faRulerCombined, title: "Kitchen Remodel Millwork", body: "Islands, pantries, and trim packages.", link: "/services/kitchen-remodel-millwork" },
    { icon: faDoorOpen, title: "Closet & Built-Ins", body: "Closets, media walls, and office built-ins.", link: "/services/closet-built-ins" },
    { icon: faBuilding, title: "Commercial Millwork", body: "Boutique commercial and hospitality casework.", link: "/services/commercial-millwork" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Interior Designers" },
      ]} />

      <SectionIntro
        title="Millwork for Interior Designers"
        subtitle="Designer-driven cabinetry and millwork — we build what you draw, protect your client relationship, and hit install windows that keep projects on track."
      />

      <TrustBar headline="A custom shop that respects designer specs and client experience" />

      <IndustryPainPoints
        industry="interior designers"
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
          servicePath="industries/interior-designers"
          title="Serving Organizations Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Interior Designers FAQs" />
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
          slug="interior-designers"
          spot="industry-interior-designers"
          formVariant={4}
        />
      </div>
    </main>
  );
}

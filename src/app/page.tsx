// Craftline Cabinetry & Millwork — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faKitchenSet, faRulerCombined, faSink, faBuilding, faPaintRoller, faDoorOpen,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faKitchenSet,
      title: "Custom Cabinets",
      body: "Fully custom kitchen and bath cabinets built in our Waco shop — door styles, species, and finishes matched to your home.",
      link: "/services/custom-cabinets",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faRulerCombined,
      title: "Kitchen Remodel Millwork",
      body: "Cabinets, islands, pantries, and trim millwork coordinated as one remodel package — design through install.",
      link: "/services/kitchen-remodel-millwork",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faSink,
      title: "Bathroom Vanities",
      body: "Custom vanities and storage built to fit tight baths — soft-close hardware, durable finishes, clean install.",
      link: "/services/bathroom-vanities",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Millwork",
      body: "Reception desks, display fixtures, and tenant millwork for offices, retail, and hospitality — on your schedule.",
      link: "/services/commercial-millwork",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faPaintRoller,
      title: "Cabinet Refacing",
      body: "New doors, drawer fronts, and hardware over solid boxes — a fraction of full replacement when boxes are sound.",
      link: "/services/cabinet-refacing",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faDoorOpen,
      title: "Closet & Built-Ins",
      body: "Walk-in closets, mudroom lockers, media walls, and office built-ins measured and built for how you live.",
      link: "/services/closet-built-ins",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Custom installs across Central Texas",         suffix: "+", duration: 3 },
    { icon: faClock,     value: 18,   label: "Years of local cabinetry craftsmanship",       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                 suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free Design Consultations",
      description: "We measure on-site, review material samples in your lighting, and give you a written flat-rate quote before fabrication starts.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Contractor · Custom Shop",
      description: "Every project is built in our shop under a licensed contractor and backed by full insurance. No fly-by-night install-only crews.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2008",
      description: "We're not a franchise. Craftline was founded in Waco by Elena Vargas, a craftsperson with decades in the trade. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free design consultation that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Measure & Show Samples",
      description: "We measure every opening and bring real door styles, woods, and finishes — explained in plain English, not showroom jargon.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before we order material or start fabrication. You decide — zero pressure. The quote covers shop work and install.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Built, Installed & Warranted",
      description: "Shop-built quality, clean install, 5-Year Craftsmanship Warranty on every project. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Scope Assessment",
      description: "We tell you when refacing is enough and when full custom makes sense — not what's most profitable to sell.",
    },
    {
      icon: faLayerGroup,
      title: "Shop-Built Quality",
      description: "Cabinets and millwork fabricated in our Waco shop with solid construction standards, not thin particleboard boxes.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before fabrication. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Material Lookbooks",
      description: "Door styles, species, stains, paints, and hardware samples so you choose finishes with confidence in your own lighting.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — shop tours and fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial millwork coverage.",           badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway kitchens and built-ins.",     badge: "" },
    { town: "Temple",       benefit: "Regular service area — reliable turnaround for Bell County.",  badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate quote standards.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",   badge: "" },
  ];

  const faq = [
    {
      question: "How much do custom cabinets cost in Waco?",
      answer: "Most full custom kitchens run from the mid four figures into higher ranges depending on linear feet, species, and finish. We always provide a flat-rate written quote after a free design consult and measure.",
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes — every estimate includes an on-site measure and material samples, at no cost and no obligation. Call us at (254) 741-2800 to schedule.",
    },
    {
      question: "How long does a typical kitchen take?",
      answer: "After design approval, most residential kitchens fabricate and install in 4–8 weeks depending on scope and finish. We'll give you an honest timeline with your quote.",
    },
    {
      question: "What services do you offer?",
      answer: "Custom cabinets, kitchen remodel millwork, bathroom vanities, commercial millwork, cabinet refacing, and closet built-ins. Browse our projects gallery for recent work.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — Craftline Cabinetry & Millwork is a licensed contractor, fully insured, with a custom shop in Waco. Documentation available on request.",
    },
    {
      question: "Do you offer financing for larger projects?",
      answer: "Yes — flexible financing with approved credit for qualifying homeowners. Ask us when you get your quote.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted cabinet shop — licensed, insured, and warrantied on every project"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Cabinetry & Millwork Services"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes Craftline Different"
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <CTABanner
        headline="Cabinetry Built for How You Live."
        subline="Custom millwork, refacing, and built-ins — design consults, material samples, and install crews who finish clean."
        primaryText="Call (254) 741-2800"
        primaryLink="tel:+12547412800"
        secondaryText="Book Design Consult"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="What to Expect Working With Craftline"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Cabinetry Questions — Answered Straight" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get Your Free Cabinetry Quote"
          cityName="Waco"
          slug="home"
          spot="homepage-form"
          formVariant={4}
        />
      </div>
    </main>
  );
}

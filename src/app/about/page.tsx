// Craftline Cabinetry & Millwork — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faLayerGroup,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2008",
      description: "Craftline was founded in Waco by Elena Vargas, a craftsperson with deep roots in the cabinet trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every installer on our team is background-checked and works under a licensed contractor. We treat every home we enter with the same respect we'd want for our own families — floors protected, worksite clean, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full replacement when refacing will do the job for years. We won't cut corners on box construction to save an afternoon. Our reputation is built on straight talk — and over a decade of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Custom installs across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",            suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years serving Waco-area families",      suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free Design Consultation",      description: "Elena or a senior craftsperson measures your space, brings real samples, and gives you a firm, written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Design the Right Way",          description: "Door styles, materials, and hardware are locked before fabrication. Good cabinets are won or lost in the details.", icon: faShieldHalved },
    { number: 3, title: "Shop-Build With Precision",     description: "Our shop fabricates cabinets and millwork to professional standards, then installs with daily care so your home stays livable.", icon: faLayerGroup },
    { number: 4, title: "Final Walkthrough & Warranty",  description: "We walk every opening with you before we call the job done, and back the finished work with our 5-Year Craftsmanship Warranty.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Craftline Cabinetry & Millwork"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2008. We build honest cabinets at fair prices for the families and businesses we've called neighbors for 18 years."
      />

      <TrustBar headline="1,200+ custom installs trust Craftline — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="18 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Cabinet Shop — Ready When You Are"
        subline="Free design consultations. Flat-rate quotes. 5-Year Craftsmanship Warranty. No pressure — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547412800"
        secondaryText="Request a Free Quote"
        secondaryLink="/contact"
      />

    </main>
  );
}

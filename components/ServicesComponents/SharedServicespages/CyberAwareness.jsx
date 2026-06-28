import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import SecurityStats from "./Shared/SecurityStats";
import IndustriesWeProtect from "./Shared/IndustriesWeProtect";
import CTASection from "../main/CTA";

const securityProcessData = {
  headerData: {
    title: "OUR PROCESS",
    header: "How We Build Security Awareness",
    subheader:
      "A practical approach to reducing human risk through education, compliance alignment, and continuous cybersecurity awareness.",
  },

  steps: [
    {
      number: "01",
      title: "Awareness Assessment",
      description:
        "We evaluate your organization's current security awareness levels, compliance requirements, and employee risk exposure.",
      points: [
        "Security awareness maturity assessment",
        "Compliance and policy review",
        "Human-risk and training needs analysis",
      ],
    },
    {
      number: "02",
      title: "Training Program Development",
      description:
        "Customized training programs are created to educate employees on cyber threats, safe practices, and compliance responsibilities.",
      points: [
        "Role-based cybersecurity training",
        "Security policy and compliance education",
        "Interactive awareness materials and workshops",
      ],
    },
    {
      number: "03",
      title: "Phishing Simulations & Testing",
      description:
        "Realistic phishing campaigns and security exercises help employees recognize and respond to cyber threats effectively.",
      points: [
        "Simulated phishing campaigns",
        "Employee security behavior testing",
        "Targeted awareness reinforcement",
      ],
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description:
        "Awareness programs are continuously refined through reporting, assessments, and compliance monitoring to strengthen security culture.",
      points: [
        "Training effectiveness reporting",
        "Compliance tracking and audits",
        "Ongoing awareness and policy updates",
      ],
    },
  ],
};

export default function CyberAwareness() {
  return (
    <section className="">
      <SplitHero
        title="Cybersecurity Awareness & Compliance"
        tagline={
          "Educate - Prevent - Comply.\nBuilding a Security-First Culture."
        }
        description="Strengthen organizational security through employee awareness training, phishing simulations, compliance programs, and security best practices that reduce human risk."
        image="/services/section/aware.png"
      />

      <ExpertiseGrid
        eyebrow="Security Awareness"
        title="What We Strengthen"
        description="We help organizations reduce human-related security risks through employee education, phishing awareness, compliance readiness, and a strong security culture."
        cards={[
          {
            title: "Security Awareness Training",
            description:
              "Engaging training programs that teach employees how to recognize, avoid, and report cybersecurity threats.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/web/training.avif",
          },
          {
            title: "Phishing Simulations",
            description:
              "Real-world phishing exercises that test employee readiness and improve their ability to identify malicious communications.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/web/phising.avif",
          },
          {
            title: "Compliance Readiness",
            description:
              "Support compliance initiatives by aligning security practices with industry regulations, standards, and internal policies.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/compliance.jpg",
          },
          {
            title: "Security Culture Development",
            description:
              "Foster a security-first mindset across your organization through continuous awareness, engagement, and accountability.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/security-culture.jpg",
          },
        ]}
      />

      <ProcessSection
        headerData={securityProcessData.headerData}
        steps={securityProcessData.steps}
      />

      <SecurityStats />

      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Security Can't Be Compromised"
        highlightedWords={["Security"]}
        subtitle="Enterprise-Grade Protection"
        subtitleHighlight="Protection"
        description="We deliver proactive, intelligent cybersecurity that defends your business against evolving threats, backed by certified experts and AI-driven defense."
        image="/services/web/why.jpg"
        accentColor="#cc0000"
        features={[
          {
            title: "Certified Security Experts",
            description:
              "A team of certified professionals (CEH, OSCP, CISSP) safeguarding your business.",
          },
          {
            title: "AI-Driven Security Solutions",
            description:
              "Machine-learning models that adapt to evolving threats automatically.",
          },
          {
            title: "Advanced Threat Detection",
            description:
              "Proactive identification of threats before they can cause damage.",
          },
          {
            title: "Real-Time Monitoring",
            description:
              "Round-the-clock surveillance across your entire digital environment.",
          },
          {
            title: "Customized Security Strategies",
            description:
              "Tailored defense plans built around your specific risk profile.",
          },
          {
            title: "Confidential & Secure Assessments",
            description:
              "Strict confidentiality and secure handling of all sensitive data.",
          },
        ]}
      />

      <IndustriesWeProtect />

      <CTASection />
    </section>
  );
}

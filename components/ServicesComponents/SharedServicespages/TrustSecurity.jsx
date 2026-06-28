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
    header: "How We Implement Zero Trust",
    subheader:
      "A strategic approach to securing users, devices, applications, and data through continuous verification and least-privilege access.",
  },

  steps: [
    {
      number: "01",
      title: "Identity & Access Assessment",
      description:
        "We evaluate your existing identity systems, user permissions, authentication methods, and access policies to establish a Zero Trust baseline.",
      points: [
        "Identity and access infrastructure review",
        "User privilege and role assessment",
        "Authentication and policy gap analysis",
      ],
    },
    {
      number: "02",
      title: "Zero Trust Architecture Design",
      description:
        "Our specialists design a tailored Zero Trust framework that secures users, devices, applications, and data through continuous verification.",
      points: [
        "Zero Trust strategy and roadmap creation",
        "Identity-centric security architecture",
        "Segmentation and trust boundary design",
      ],
    },
    {
      number: "03",
      title: "Access Control Implementation",
      description:
        "We deploy least-privilege access policies, multi-factor authentication, and conditional access controls to reduce security risks.",
      points: [
        "Multi-factor authentication deployment",
        "Least-privilege access enforcement",
        "Role-based and conditional access policies",
      ],
    },
    {
      number: "04",
      title: "Continuous Verification",
      description:
        "Access requests, devices, and user activities are continuously validated and monitored to maintain a strong security posture.",
      points: [
        "Continuous trust validation",
        "Device and user behavior monitoring",
        "Policy optimization and ongoing governance",
      ],
    },
  ],
};

export default function TrustSecurity() {
  return (
    <section className="">
      <SplitHero
        title="Zero Trust Security Implementation"
        tagline={"Verify - Control - Protect.\nNever Trust, Always Verify."}
        description="Implement Zero Trust security frameworks with identity verification, least-privilege access controls, multi-factor authentication, and continuous trust validation across your organization."
        image="/services/section/zerotrust.png"
      />

      <ExpertiseGrid
        eyebrow="Zero Trust Security"
        title="What We Implement"
        description="We help organizations modernize security by implementing Zero Trust principles that continuously verify identities, enforce least-privilege access, and protect critical resources."
        cards={[
          {
            title: "Identity & Access Management",
            description:
              "Centralize and secure user identities with modern identity management, access governance, and authentication controls.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/web/identity.avif",
          },
          {
            title: "Multi-Factor Authentication",
            description:
              "Strengthen account security with MFA solutions that verify user identities before granting access to critical systems.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/web/multi.avif",
          },
          {
            title: "Least-Privilege Access Control",
            description:
              "Limit access rights to only what users need, reducing attack surfaces and minimizing the impact of compromised accounts.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/access-control.jpg",
          },
          {
            title: "Continuous Trust Verification",
            description:
              "Monitor users, devices, and sessions continuously to ensure every access request remains secure and compliant.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/zero-trust.jpg",
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

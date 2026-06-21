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
    header: "How We Secure Your Business",
    subheader:
      "A structured, proactive security workflow that protects your systems from assessment to continuous defense.",
  },

  steps: [
    {
      number: "01",
      title: "Assessment & Discovery",
      description:
        "We map your entire digital footprint to understand your infrastructure, assets, and current security posture before building a defense strategy.",
      points: [
        "Comprehensive infrastructure and asset inventory mapping",
        "Current security posture, policy, and compliance review",
        "Threat surface identification and assessment scope definition",
      ],
    },
    {
      number: "02",
      title: "Vulnerability Analysis",
      description:
        "We identify weaknesses across your systems using automated scanning combined with manual penetration testing by certified experts.",
      points: [
        "Automated vulnerability scanning and manual penetration testing",
        "Network, application, and configuration security review",
        "Severity classification and real-world exploitability assessment",
      ],
    },
    {
      number: "03",
      title: "Risk Mitigation",
      description:
        "We prioritize and remediate identified risks with actionable fixes, hardened configurations, and stronger access controls.",
      points: [
        "Prioritized remediation roadmap based on risk severity",
        "System hardening, patching, and secure configuration",
        "Access management and security controls implementation",
      ],
    },
    {
      number: "04",
      title: "Continuous Monitoring",
      description:
        "We provide round-the-clock monitoring and rapid response to detect, investigate, and neutralize threats in real time.",
      points: [
        "24/7 real-time threat detection and intelligent alerting",
        "Incident response and automated threat containment",
        "Ongoing reporting, audits, and compliance support",
      ],
    },
  ],
};

export default function CyberSecurity() {
  return (
    <section className="">
      <SplitHero
        title="Cloud & Network Security "
        tagline={"Protect - Detect - Respond.\nEnterprise-Grade Defense."}
        description="We safeguard your business with proactive, intelligent cybersecurity, defending your infrastructure, data, and applications against evolving threats."
        image="/services/section/cloud.png"
      />

      <ExpertiseGrid
        eyebrow="Cyber Security"
        title="What We Secure"
        description="We deliver end-to-end security services that protect your organization across every layer, from networks and applications to cloud infrastructure and endpoints."
        cards={[
          {
            title: "Penetration Testing",
            description:
              "We simulate real-world attacks to uncover vulnerabilities before malicious actors can exploit them, across web, network, and application layers.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/cyber/pentest.jpg",
          },
          {
            title: "Security Audits & Compliance",
            description:
              "Comprehensive assessments aligned with standards like ISO 27001, SOC 2, and GDPR to keep your organization compliant and protected.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/cyber/audit.jpg",
          },
          {
            title: "Threat Detection & Response",
            description:
              "AI-powered monitoring and a dedicated SOC to detect, investigate, and neutralize threats in real time, around the clock.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Cloud & Network Security",
            description:
              "End-to-end protection for your cloud infrastructure and networks with hardened configurations, encryption, and continuous defense.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
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
        image="/services/why/cybersecurity.webp"
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

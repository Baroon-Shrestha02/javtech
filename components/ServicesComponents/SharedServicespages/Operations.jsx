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
    header: "How We Prepare Your SOC",
    subheader:
      "A structured approach to building proactive threat monitoring, incident response, and security operations capabilities.",
  },

  steps: [
    {
      number: "01",
      title: "Security Assessment",
      description:
        "We evaluate your existing security operations, logging infrastructure, monitoring tools, and response capabilities to identify gaps and readiness requirements.",
      points: [
        "Current monitoring and logging assessment",
        "Security operations maturity evaluation",
        "Gap analysis and readiness planning",
      ],
    },
    {
      number: "02",
      title: "SIEM & Log Integration",
      description:
        "We centralize security visibility by integrating logs, events, and telemetry from critical systems into a unified monitoring platform.",
      points: [
        "SIEM platform deployment and configuration",
        "Log source onboarding and normalization",
        "Security event correlation and alert setup",
      ],
    },
    {
      number: "03",
      title: "Detection & Response Design",
      description:
        "We develop monitoring strategies, detection rules, and incident response workflows to rapidly identify and contain threats.",
      points: [
        "Threat detection use-case development",
        "Incident response playbook creation",
        "Alert prioritization and escalation workflows",
      ],
    },
    {
      number: "04",
      title: "Continuous Monitoring",
      description:
        "Your security operations are continuously optimized through monitoring, threat intelligence, reporting, and readiness improvements.",
      points: [
        "24/7 security monitoring strategy",
        "Threat intelligence integration",
        "Ongoing tuning, reporting, and optimization",
      ],
    },
  ],
};

export default function Operations() {
  return (
    <section className="">
      <SplitHero
        title="Security Operations Center (SOC) Readiness"
        tagline={
          "Monitor - Detect - Respond.\nOperational Security Excellence."
        }
        description="Establish proactive threat monitoring and incident response capabilities with SIEM integration, log analysis, and security monitoring strategies designed for modern security operations."
        image="/services/section/soc.jpg"
      />

      <ExpertiseGrid
        eyebrow="SOC Readiness"
        title="What We Enable"
        description="We help organizations establish effective security operations capabilities with centralized monitoring, threat detection, incident response planning, and SIEM-driven visibility."
        cards={[
          {
            title: "SIEM Implementation",
            description:
              "Deploy and configure SIEM platforms to centralize logs, correlate events, and provide actionable security insights across your environment.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/cyber/siem.jpg",
          },
          {
            title: "Log Management & Analysis",
            description:
              "Collect, normalize, and analyze security logs from servers, applications, endpoints, and network devices for complete visibility.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/cyber/log-analysis.jpg",
          },
          {
            title: "Threat Monitoring & Detection",
            description:
              "Establish proactive monitoring strategies with custom detection rules, threat intelligence integration, and real-time alerting.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/threat-monitoring.jpg",
          },
          {
            title: "Incident Response Readiness",
            description:
              "Prepare your team with response playbooks, escalation procedures, containment strategies, and recovery workflows for security incidents.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/incident-response.jpg",
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

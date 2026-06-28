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
    header: "How We Monitor Emerging Threats",
    subheader:
      "A proactive threat intelligence workflow designed to identify risks early, detect suspicious behavior, and strengthen your security posture continuously.",
  },

  steps: [
    {
      number: "01",
      title: "Threat Landscape Assessment",
      description:
        "We evaluate your organization's risk profile, critical assets, and industry-specific threat landscape to establish monitoring priorities.",
      points: [
        "Asset and risk profile analysis",
        "Industry-specific threat intelligence review",
        "Monitoring objectives and threat prioritization",
      ],
    },
    {
      number: "02",
      title: "Intelligence Collection",
      description:
        "Threat data is gathered from global intelligence feeds, security platforms, and internal telemetry to create actionable visibility.",
      points: [
        "Threat intelligence feed integration",
        "Security telemetry and log collection",
        "Threat actor and attack pattern tracking",
      ],
    },
    {
      number: "03",
      title: "Analysis & Detection",
      description:
        "AI-powered analytics and behavioral monitoring identify suspicious activities, anomalies, and indicators of compromise in real time.",
      points: [
        "Behavioral and anomaly detection",
        "AI-powered threat correlation",
        "Attack pattern and IOC identification",
      ],
    },
    {
      number: "04",
      title: "Response & Continuous Monitoring",
      description:
        "Threats are continuously monitored, prioritized, and investigated, enabling rapid response and long-term security improvement.",
      points: [
        "Real-time threat monitoring and alerting",
        "Incident investigation and escalation",
        "Continuous threat intelligence updates",
      ],
    },
  ],
};

export default function Threat() {
  return (
    <section className="">
      <SplitHero
        title="Threat Intelligence & Security Monitoring"
        tagline={
          "Monitor - Analyze - Anticipate.\nIntelligence-Driven Defense."
        }
        description="Monitor cyber threats, suspicious activities, and attack patterns using AI-powered threat intelligence, behavioral analytics, and real-time security monitoring."
        image="/services/section/threat.jpg"
      />

      <ExpertiseGrid
        eyebrow="Threat Intelligence"
        title="What We Monitor"
        description="We provide intelligence-driven security monitoring that helps organizations detect threats early, analyze suspicious behavior, and respond before attacks can cause damage."
        cards={[
          {
            title: "Threat Intelligence Analysis",
            description:
              "Leverage global threat intelligence feeds and attacker insights to identify emerging cyber threats relevant to your organization.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/cyber/analysis.png",
          },
          {
            title: "Security Monitoring",
            description:
              "Continuous monitoring of networks, endpoints, cloud environments, and security events to maintain complete operational visibility.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/cyber/monitor.png",
          },
          {
            title: "Behavioral Analytics",
            description:
              "Detect unusual user and system behavior using AI-powered analytics to uncover hidden threats and insider risks.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/behavioral-analytics.jpg",
          },
          {
            title: "Threat Hunting & Detection",
            description:
              "Proactively search for indicators of compromise, attack patterns, and advanced threats before they impact business operations.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/threat.jpg",
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
        image="/cyber/why.png"
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

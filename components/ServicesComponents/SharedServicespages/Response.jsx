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
    header: "How We Respond To Cyber Incidents",
    subheader:
      "A proven incident response methodology designed to contain threats quickly, preserve evidence, and restore operations with minimal business impact.",
  },

  steps: [
    {
      number: "01",
      title: "Incident Identification",
      description:
        "We rapidly assess alerts, suspicious activities, and security events to determine the scope, severity, and impact of the incident.",
      points: [
        "Initial incident triage and validation",
        "Impact and scope assessment",
        "Threat classification and prioritization",
      ],
    },
    {
      number: "02",
      title: "Containment & Investigation",
      description:
        "Immediate containment measures are deployed while forensic investigators analyze affected systems to determine attack vectors and compromise methods.",
      points: [
        "Threat containment and isolation",
        "Digital evidence collection and preservation",
        "Root cause and attack path investigation",
      ],
    },
    {
      number: "03",
      title: "Eradication & Recovery",
      description:
        "Malicious artifacts are removed, vulnerabilities are addressed, and systems are securely restored to normal business operations.",
      points: [
        "Malware and threat removal",
        "System restoration and validation",
        "Security control enhancement",
      ],
    },
    {
      number: "04",
      title: "Post-Incident Analysis",
      description:
        "Comprehensive reporting and forensic analysis help strengthen defenses, improve response readiness, and prevent future incidents.",
      points: [
        "Detailed forensic reporting",
        "Lessons learned and recommendations",
        "Future incident prevention planning",
      ],
    },
  ],
};

export default function Response() {
  return (
    <section className="">
      <SplitHero
        title="Incident Response & Digital Forensics"
        tagline={
          "Investigate - Contain - Recover.\nRapid Cyber Incident Response."
        }
        description="Rapidly investigate and respond to cyber incidents, ransomware attacks, and data breaches while minimizing operational disruption and accelerating recovery."
        image="/services/section/forensics.png"
      />

      <ExpertiseGrid
        eyebrow="Incident Response"
        title="What We Investigate"
        description="Our specialists help organizations rapidly contain cyber incidents, perform forensic investigations, recover critical systems, and strengthen defenses against future attacks."
        cards={[
          {
            title: "Cyber Incident Response",
            description:
              "Rapid containment and response services designed to minimize damage, reduce downtime, and restore business operations quickly.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/web/cyber.avif",
          },
          {
            title: "Digital Forensics",
            description:
              "Conduct detailed forensic investigations to uncover attack origins, trace malicious activity, and preserve legally defensible evidence.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/web/forensic.avif",
          },
          {
            title: "Ransomware Response",
            description:
              "Identify, contain, and remediate ransomware attacks while supporting recovery efforts and minimizing business disruption.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/ransomware-response.jpg",
          },
          {
            title: "Breach Investigation",
            description:
              "Analyze data breaches and unauthorized access incidents to determine impact, identify compromised assets, and strengthen defenses.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/breach-investigation.jpg",
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

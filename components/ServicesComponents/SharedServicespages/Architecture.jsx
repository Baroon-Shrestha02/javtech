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
    header: "How We Build Secure Infrastructure",
    subheader:
      "A structured approach to designing, hardening, and protecting your IT environment against modern cyber threats.",
  },

  steps: [
    {
      number: "01",
      title: "Infrastructure Assessment",
      description:
        "We evaluate your existing infrastructure, network topology, servers, endpoints, and security controls to identify weaknesses and improvement opportunities.",
      points: [
        "Infrastructure and network architecture review",
        "Asset inventory and security baseline assessment",
        "Identification of security gaps and risks",
      ],
    },
    {
      number: "02",
      title: "Security Architecture Design",
      description:
        "Our experts design a resilient security framework tailored to your business, ensuring protection is built into every layer of your infrastructure.",
      points: [
        "Secure network architecture planning",
        "Firewall, VPN, and access control strategy",
        "Zero-trust and defense-in-depth implementation",
      ],
    },
    {
      number: "03",
      title: "Hardening & Deployment",
      description:
        "We strengthen your environment by implementing hardened configurations, endpoint protection, patch management, and security best practices.",
      points: [
        "Server and operating system hardening",
        "Firewall configuration and policy enforcement",
        "Endpoint security deployment and system patching",
      ],
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description:
        "Security is continuously maintained through monitoring, updates, and ongoing optimization to keep your infrastructure resilient against evolving threats.",
      points: [
        "Continuous security monitoring and alerting",
        "Regular security reviews and configuration audits",
        "Ongoing updates, patching, and performance optimization",
      ],
    },
  ],
};

export default function Architecture() {
  return (
    <section className="">
      <SplitHero
        title="Security Architecture & Infrastructure Hardening"
        tagline={
          "Build - Harden - Secure.\nResilient Infrastructure by Design."
        }
        description="Build a secure IT environment with hardened servers, firewalls, endpoint protection, and resilient network architecture designed to withstand modern cyber threats."
        image="/services/section/security.jpg"
      />

      <ExpertiseGrid
        eyebrow="Infrastructure Security"
        title="What We Harden & Secure"
        description="We design, strengthen, and secure critical IT infrastructure with layered defenses, hardened configurations, and proactive protection across networks, servers, endpoints, and cloud environments."
        cards={[
          {
            title: "Firewall & Network Security",
            description:
              "Deploy and optimize firewalls, network segmentation, VPNs, and access controls to protect your organization from unauthorized access and network-based threats.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/services/cyber/firewall.jpg",
          },
          {
            title: "Server Hardening",
            description:
              "Secure Windows and Linux servers through configuration hardening, patch management, service optimization, and attack surface reduction.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/services/cyber/server-hardening.jpg",
          },
          {
            title: "Endpoint Protection",
            description:
              "Protect workstations, laptops, and devices with advanced endpoint security, malware defense, device control, and continuous monitoring.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
            image: "/services/cyber/endpoint-security.jpg",
          },
          {
            title: "Secure Architecture Design",
            description:
              "Build resilient infrastructure with secure network architecture, zero-trust principles, access management, encryption, and security-by-design practices.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
            image: "/services/cyber/security-architecture.jpg",
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

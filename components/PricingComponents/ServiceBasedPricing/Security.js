"use client";

import { useState } from "react";
import { ShieldCheck, Crosshair } from "lucide-react";
import { PricingSection } from "../shared/Pricingcomponents";
import HeroSection from "../shared/Hero";
import { WhatsAppInquiryModal } from "../shared/Whatsappinquirymodal";
import { WhatsAppCTASection } from "@/components/SharedComponents/Whatsapp";

/* ─────────────────────────────
   CYBERSECURITY PRICING
───────────────────────────── */
export default function SecurityPricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleInquiry = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  /* Core graduated tiers (featured layout) */
  const securityPricingPlans = [
    {
      name: "Basic Security Assessment",
      eyebrow: "Entry-level security check",
      price: "NPR 15,000+",
      period: "/ project",
      description:
        "A foundational security review that identifies common vulnerabilities and gives you a clear picture of your current risk posture.",
      bestFor: "Small businesses, startups, first security check",
      features: [
        "Security Assessment Report",
        "Risk Severity Classification",
        "Security Improvement Recommendations",
      ],
      accent: "from-black to-black",
      bg: "bg-slate-50",
      border: "border-slate-100",
      onCTAClick: () => handleInquiry("Basic Security Assessment"),
    },
    {
      name: "Standard Penetration Testing",
      eyebrow: "Most popular",
      price: "NPR 40,000+",
      period: "/ project",
      description:
        "Hands-on penetration testing that uncovers exploitable vulnerabilities with proof-of-concept evidence and a clear remediation path.",
      bestFor: "Growing companies, web apps, businesses handling user data",
      features: [
        "Detailed VAPT Report",
        "Vulnerability Proof of Concept (PoC)",
        "Risk Assessment Matrix",
        "Remediation Consultation",
      ],
      accent: "from-[#E01522] to-[#E01522]",
      bg: "bg-red-50",
      border: "border-red-100",
      featured: true,
      onCTAClick: () => handleInquiry("Standard Penetration Testing"),
    },
    {
      name: "Advanced Security Testing",
      eyebrow: "Comprehensive assessment",
      price: "NPR 80,000+",
      period: "/ scope",
      description:
        "An in-depth, enterprise-grade assessment covering technical findings, executive-level reporting, and full security hardening guidance.",
      bestFor: "Enterprises, regulated industries, high-risk environments",
      features: [
        "Comprehensive Security Assessment Report",
        "Executive Summary Report",
        "Technical Findings & Evidence",
        "Risk Prioritization Matrix",
        "Security Hardening Recommendations",
        "Post-Assessment Consultation",
      ],
      accent: "from-black to-black",
      bg: "bg-zinc-50",
      border: "border-zinc-100",
      onCTAClick: () => handleInquiry("Advanced Security Testing"),
    },
  ];

  /* Specialized, standalone testing services */
  const specializedSecurityServices = [
    {
      name: "API Security Testing",
      eyebrow: "API protection",
      price: "NPR 15,000+",
      period: "/ project",
      description:
        "Targeted testing of your APIs to surface authentication, authorization, and data-exposure flaws before attackers find them.",
      bestFor: "SaaS products, mobile backends, API-driven platforms",
      features: [
        "API Security Assessment Report",
        "Vulnerability Findings & Evidence",
        "Risk Rating Analysis",
        "Remediation Recommendations",
      ],
      accent: "from-black to-black",
      bg: "bg-sky-50",
      border: "border-sky-100",
      onCTAClick: () => handleInquiry("API Security Testing"),
    },
    {
      name: "Mobile App Penetration Testing",
      eyebrow: "Mobile security",
      price: "NPR 35,000+",
      period: "/ project",
      description:
        "Security testing for Android and iOS apps, covering client-side logic, insecure storage, and communication vulnerabilities.",
      bestFor: "Mobile-first products, fintech apps, consumer apps",
      features: [
        "Mobile Application Security Report",
        "Technical Vulnerability Details",
        "Risk Assessment Matrix",
        "Security Improvement Recommendations",
      ],
      accent: "from-black to-black",
      bg: "bg-violet-50",
      border: "border-violet-100",
      onCTAClick: () => handleInquiry("Mobile App Penetration Testing"),
    },
    {
      name: "Cloud Security Assessment",
      eyebrow: "Cloud posture review",
      price: "NPR 40,000+",
      period: "/ project",
      description:
        "A review of your cloud configuration and architecture to catch misconfigurations and strengthen your overall security posture.",
      bestFor: "AWS / Azure / GCP workloads, cloud-native teams",
      features: [
        "Cloud Security Assessment Report",
        "Configuration Review Findings",
        "Risk Prioritization Report",
        "Security Hardening Recommendations",
      ],
      accent: "from-black to-black",
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      onCTAClick: () => handleInquiry("Cloud Security Assessment"),
    },
    {
      name: "Security Compliance Review",
      eyebrow: "Compliance readiness",
      price: "NPR 30,000+",
      period: "/ scope",
      description:
        "An assessment of your security maturity and compliance gaps, with a clear roadmap toward certification and audit readiness.",
      bestFor: "Teams pursuing ISO 27001, SOC 2, or regulatory compliance",
      features: [
        "Compliance Gap Assessment Report",
        "Security Maturity Evaluation",
        "Compliance Readiness Scorecard",
        "Roadmap for Remediation & Compliance Achievement",
      ],
      accent: "from-black to-black",
      bg: "bg-amber-50",
      border: "border-amber-100",
      onCTAClick: () => handleInquiry("Security Compliance Review"),
    },
  ];

  return (
    <>
      <section>
        <HeroSection
          eyebrow="Cybersecurity pricing packages"
          title="Security Solutions for Your Business"
          description="Choose a security package based on your risk profile, compliance needs, and the depth of testing your systems require."
          image="/services/section/aware.png"
        />

        {/* Core tiers */}
        <PricingSection
          eyebrow="Cybersecurity pricing packages"
          eyebrowIcon={ShieldCheck}
          title="Security packages to protect your"
          highlightedText="business"
          description="Choose a security assessment or penetration testing package based on your risk profile and compliance goals."
          plans={securityPricingPlans}
          ctaText="Inquire Now"
          bgClass="bg-slate-50"
          accentColor="red"
        />

        {/* Specialized services */}
        <PricingSection
          eyebrow="Specialized security testing"
          eyebrowIcon={Crosshair}
          title="Targeted assessments for"
          highlightedText="specific systems"
          description="Focused testing services for APIs, mobile apps, cloud environments, and compliance readiness."
          plans={specializedSecurityServices}
          ctaText="Inquire Now"
          bgClass="bg-white"
          accentColor="red"
        />
      </section>

      {/* WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
        whatsappNumber="9779807128557"
      />

      <section className="max-w-5xl mx-auto mb-6 mt-12 pb-16 ">
        <WhatsAppCTASection />
      </section>
    </>
  );
}

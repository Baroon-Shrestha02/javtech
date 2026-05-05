"use client";

import { useState } from "react";
import { Megaphone } from "lucide-react";
import { PricingSection } from "../shared/Pricingcomponents";
import HeroSection from "../shared/Hero";
import { WhatsAppInquiryModal } from "../shared/Whatsappinquirymodal";

/* ─────────────────────────────
   DIGITAL MARKETING PRICING
───────────────────────────── */
export default function DigitalMarketingPricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleInquiry = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const digitalMarketingPricingPlans = [
    {
      name: "Starter Marketing",
      eyebrow: "Basic online presence",
      price: "Rs 20,000",
      period: "/ month",
      description:
        "Best for small businesses that want to build brand visibility and maintain a consistent social media presence.",
      bestFor: "Small businesses, startups, local brands",
      features: [
        "Social media account setup/optimization",
        "8 social media posts per month",
        "Basic content calendar",
        "Caption writing",
        "Hashtag research",
        "Basic engagement support",
        "Monthly performance summary",
      ],
      accent: "from-black to-black",
      bg: "bg-sky-50",
      border: "border-sky-100",
      onCTAClick: () => handleInquiry("Starter Marketing"),
    },
    {
      name: "Growth Marketing",
      eyebrow: "Most popular",
      price: "Rs 45,000",
      period: "/ month",
      description:
        "A complete marketing package focused on brand awareness, content consistency, lead generation, and campaign performance.",
      bestFor: "Consultancies, service businesses, agencies, institutes",
      features: [
        "12–16 social media posts per month",
        "Content strategy planning",
        "Ad campaign setup",
        "Meta ads management",
        "Lead generation campaign",
        "Creative design support",
        "Monthly analytics report",
        "2 revision rounds",
      ],
      accent: "from-[#E01522] to-[#E01522]",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      featured: true,
      onCTAClick: () => handleInquiry("Growth Marketing"),
    },
    {
      name: "Performance Marketing",
      eyebrow: "Advanced growth",
      price: "Custom",
      period: "/ scope",
      description:
        "For businesses that need advanced digital campaigns, conversion tracking, paid ads, SEO, remarketing, and scalable growth strategies.",
      bestFor: "E-commerce, large businesses, high-growth brands",
      features: [
        "Full digital marketing strategy",
        "Meta & Google Ads management",
        "SEO optimization",
        "Conversion tracking setup",
        "Retargeting campaigns",
        "Landing page strategy",
        "Competitor analysis",
        "Priority support & consultation",
      ],
      accent: "from-black to-black",
      bg: "bg-violet-50",
      border: "border-violet-100",
      onCTAClick: () => handleInquiry("Performance Marketing"),
    },
  ];

  return (
    <>
      <section>
        <HeroSection
          eyebrow="Digital marketing pricing packages"
          title="Digital Marketing Solutions for Your Business"
          description="Choose a digital marketing package based on your brand goals, campaign needs, and growth strategy."
          image="/home/web.jpg"
        />
        <PricingSection
          eyebrow="Digital marketing pricing packages"
          eyebrowIcon={Megaphone}
          title="Marketing packages to grow your"
          highlightedText="online presence"
          description="Choose a digital marketing package based on your brand goals, campaign needs, and growth strategy."
          plans={digitalMarketingPricingPlans}
          ctaText="Inquire Now"
          bgClass="bg-slate-50"
          accentColor="emerald"
        />
      </section>

      {/* WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
        whatsappNumber="9779807128557"
      />
    </>
  );
}

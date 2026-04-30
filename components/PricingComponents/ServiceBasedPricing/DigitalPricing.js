"use client";

import { Megaphone } from "lucide-react";
import { PricingSection } from "../shared/Pricingcomponents";
import HeroSection from "../shared/Hero";

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
  },
];

export default function DigitalMarketingPricing() {
  return (
    <>
      <HeroSection
        title="Digital Solutions for Every Business Need"
        image="/home/web.jpg"
      />
      <PricingSection
        eyebrow="Digital marketing pricing packages"
        eyebrowIcon={Megaphone}
        title="Marketing packages to grow your"
        highlightedText="online presence"
        description="Choose a digital marketing package based on your brand goals, campaign needs, and growth strategy."
        plans={digitalMarketingPricingPlans}
        ctaText="Grow My Brand"
        ctaHref="/contact"
        bgClass="bg-slate-50"
        accentColor="emerald"
      />
    </>
  );
}

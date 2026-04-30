"use client";

import { Smartphone } from "lucide-react";
import { PricingSection } from "../shared/Pricingcomponents";
import HeroSection from "../shared/Hero";

/* ─────────────────────────────
   APP DEVELOPMENT PRICING
───────────────────────────── */
const appPricingPlans = [
  {
    name: "Basic App",
    eyebrow: "Starter mobile solution",
    price: "Rs 45,000",
    period: "/ project",
    description:
      "Ideal for simple mobile applications with essential functionality and clean UI for early-stage startups or MVP launches.",
    bestFor: "MVPs, small apps, simple utility apps",
    features: [
      "Single platform (Android or iOS)",
      "Up to 5 screens",
      "Basic UI/UX design",
      "Static or limited dynamic content",
      "API integration (basic)",
      "App deployment support",
      "1 revision round",
    ],
    accent: "from-black to-black",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    name: "Business App",
    eyebrow: "Most popular",
    price: "Rs 90,000",
    period: "/ project",
    description:
      "A robust mobile application with advanced UI, backend connectivity, and essential business features for growth-focused companies.",
    bestFor: "Service apps, booking apps, business platforms",
    features: [
      "Cross-platform (Android + iOS)",
      "Up to 10–12 screens",
      "Modern UI with animations",
      "Backend/API integration",
      "User authentication (login/signup)",
      "Push notifications",
      "Basic admin panel",
      "2 revision rounds",
    ],
    accent: "from-[#E01522] to-[#E01522]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    featured: true,
  },
  {
    name: "Custom App Solution",
    eyebrow: "Advanced solution",
    price: "Custom",
    period: "/ scope",
    description:
      "Fully customized mobile applications tailored to your business logic, including scalable architecture and enterprise-level integrations.",
    bestFor: "E-commerce apps, SaaS apps, enterprise solutions",
    features: [
      "Custom UI/UX design",
      "Scalable backend architecture",
      "Database integration",
      "Advanced authentication & roles",
      "Payment gateway integration",
      "Real-time features (chat, tracking)",
      "Admin dashboard & analytics",
      "Priority support & maintenance",
    ],
    accent: "from-black to-black",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

export default function AppPricing() {
  return (
    <>
      <HeroSection title="App-Based Solutions" image="/home/web.jpg" />
      <PricingSection
        eyebrow="App development pricing packages"
        eyebrowIcon={Smartphone}
        title="Mobile app solutions for every"
        highlightedText="business need"
        description="Select an app development package based on your product vision, required features, and scalability goals."
        plans={appPricingPlans}
        ctaText="Start Your App"
        ctaHref="/contact"
        bgClass="bg-slate-50"
        accentColor="emerald"
      />
    </>
  );
}

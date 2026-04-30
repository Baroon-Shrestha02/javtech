"use client";

import { CircleDollarSign } from "lucide-react";
import { PricingSection } from "../shared/Pricingcomponents";
import HeroSection from "../shared/Hero";

/* ─────────────────────────────
   EXAMPLE: WEB DEVELOPMENT PRICING
───────────────────────────── */
const webPricingPlans = [
  {
    name: "Basic Website",
    eyebrow: "Starter web presence",
    price: "Rs 25,000",
    period: "/ project",
    description:
      "Best for small businesses that need a clean, professional website to showcase services and contact details.",
    bestFor: "Portfolio, company profile, small business website",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic contact form",
      "SEO-friendly structure",
      "WhatsApp/contact button",
      "Basic speed optimization",
      "1 revision round",
    ],
    accent: "from-black to-black",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    name: "Business Website",
    eyebrow: "Most popular",
    price: "Rs 55,000",
    period: "/ project",
    description:
      "A complete business website package with better UI, dynamic sections, CMS-ready structure, and stronger conversion flow.",
    bestFor: "Consultancy, service company, agency, institute",
    features: [
      "Up to 10 pages",
      "Modern animated UI",
      "Dynamic services section",
      "Blog/news-ready structure",
      "Contact form integration",
      "Basic admin/CMS setup",
      "2 revision rounds",
    ],
    accent: "from-[#E01522] to-[#E01522]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    // featuredLabel: "Value For Money",
    featured: true,
  },
  {
    name: "Custom Web App",
    eyebrow: "Advanced solution",
    price: "Custom",
    period: "/ scope",
    description:
      "For businesses that need custom dashboards, booking systems, e-commerce, authentication, or database-driven features.",
    bestFor: "E-commerce, booking system, SaaS, admin dashboard",
    features: [
      "Custom frontend development",
      "Backend/API integration",
      "Database integration",
      "User login/authentication",
      "Admin dashboard",
      "Payment gateway integration",
      "Priority support",
    ],
    accent: "from-black to-black",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

export default function WebPricing() {
  return (
    <section>
      <HeroSection
        title="Web-Based Solutions for Every Business Need"
        image="/home/web.jpg"
      />
      <PricingSection
        eyebrow="Web-based pricing packages"
        eyebrowIcon={CircleDollarSign}
        title="Website packages for every"
        highlightedText="business stage"
        description="Choose a website package based on your business goal, required features, and development scope."
        plans={webPricingPlans}
        ctaText="Get Started"
        ctaHref="/contact"
        bgClass="bg-slate-50"
        accentColor="emerald"
      />
    </section>
  );
}

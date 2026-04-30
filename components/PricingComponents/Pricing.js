"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDollarSign,
  Sparkles,
} from "lucide-react";

const serviceHighlights = [
  "Digital marketing",
  "Branding & identity",
  "Website design",
  "Web/app development",
  "Poster & motion graphics",
  "Campaign support",
];

const plans = [
  {
    name: "Basic",
    eyebrow: "Launch essentials",
    price: "Rs 25,000",
    period: "/ project",
    description:
      "A lean starter package for new businesses that need a clean digital presence and simple launch support.",
    bestFor: "Startups and small businesses",
    features: [
      "Single service focus",
      "Basic brand direction",
      "Landing page or profile setup",
      "Up to 8 social media creatives",
      "Basic SEO setup",
      "One revision round",
      "Launch checklist",
    ],
    accent: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    name: "Advanced",
    eyebrow: "Growth package",
    price: "Rs 55,000",
    period: "/ month",
    description:
      "A balanced package for teams that need consistent content, stronger visibility, and a better conversion flow.",
    bestFor: "Growing brands and service teams",
    features: [
      "Website updates and maintenance",
      "Social media strategy",
      "Up to 16 posts or reels",
      "Performance ad setup",
      "Competitor and audience research",
      "Monthly analytics summary",
      "Two revision rounds",
    ],
    accent: "from-accent2 to-accent",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    featured: true,
  },
  {
    name: "Superior",
    eyebrow: "Complete digital system",
    price: "Custom",
    period: "/ scope",
    description:
      "A full-service package for companies that want JavTech to handle strategy, design, development, content, and campaigns.",
    bestFor: "Established and competitive businesses",
    features: [
      "Complete brand identity system",
      "Custom website or app build",
      "Full social media handling",
      "Motion graphics and campaign assets",
      "Paid ad management",
      "SEO and conversion optimization",
      "Priority support and reporting",
    ],
    accent: "from-violet-500 to-fuchsia-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            <CircleDollarSign className="h-4 w-4" />
            Services-based package pricing
          </div>
          <h2 className="text-4xl font-black leading-tight text-gray-950 md:text-6xl">
            Simple plans for every{" "}
            <span className="logo bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
              stage
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-xl">
            Pick a starting point based on the support you need. Each package
            can be adjusted around your exact service mix, timeline, and goals.
          </p>
        </div>

        <div className="mb-10 grid gap-3 rounded-3xl border border-white bg-white/80 p-4 shadow-sm md:grid-cols-3 lg:grid-cols-6">
          {serviceHighlights.map((service) => (
            <div
              key={service}
              className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-gray-700"
            >
              <BadgeCheck className="h-4 w-4 flex-none text-emerald-500" />
              <span>{service}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border ${plan.border} bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 ${
                plan.featured ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Recommended
                </div>
              )}

              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${plan.bg}`}
              >
                <span
                  className={`bg-gradient-to-r ${plan.accent} bg-clip-text text-2xl font-black text-transparent`}
                >
                  {plan.name.charAt(0)}
                </span>
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-gray-400">
                {plan.eyebrow}
              </p>
              <h3 className="text-3xl font-black text-gray-950">
                {plan.name}
              </h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                {plan.description}
              </p>

              <div className="my-7 border-y border-dashed border-gray-200 py-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-gray-950">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm font-semibold text-gray-500">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">
                  Preferred for {plan.bestFor}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm font-medium leading-6 text-gray-700"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-r ${plan.accent} text-white`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${plan.accent} px-5 py-4 text-base font-black text-white shadow-lg transition hover:scale-[1.02]`}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

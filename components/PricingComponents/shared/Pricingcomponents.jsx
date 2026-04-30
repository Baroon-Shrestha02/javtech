"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";

/* ─────────────────────────────
   PRICING CARD COMPONENT
───────────────────────────── */
function PricingCard({ plan, ctaText = "Get Started", ctaHref = "/contact" }) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-300 hover:border-gray-300 ${
        plan.featured
          ? "border-gray-900 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] scale-[1.05] z-10"
          : "border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]"
      }`}
    >
      {/* Featured ribbon */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            {plan.featuredLabel || "Most Popular"}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          {plan.eyebrow}
        </p>
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          {plan.period && (
            <span className="text-sm font-medium text-gray-500">
              {plan.period}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        {plan.description}
      </p>

      {/* Best For badge */}
      {plan.bestFor && (
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-gray-700">
            {plan.bestFor}
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.accent}`}
            >
              <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        className={`group/btn mt-auto flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
          plan.featured
            ? "bg-accent2    text-white hover:bg-accent2 shadow-lg shadow-accent2/20"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {ctaText}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </Link>
    </article>
  );
}

/* ─────────────────────────────
   PRICING GRID COMPONENT
───────────────────────────── */
function PricingGrid({ plans, ctaText, ctaHref }) {
  const getGridClass = () => {
    const count = plans.length;
    if (count === 1) return "lg:grid-cols-1 max-w-md mx-auto";
    if (count === 2) return "lg:grid-cols-2 max-w-4xl mx-auto";
    if (count === 3) return "lg:grid-cols-3";
    if (count === 4) return "lg:grid-cols-2 xl:grid-cols-4";
    if (count === 5) return "lg:grid-cols-2 xl:grid-cols-3";
    if (count === 6) return "lg:grid-cols-2 xl:grid-cols-3";
    return "lg:grid-cols-2 xl:grid-cols-3";
  };

  return (
    <div className={`grid gap-6 lg:items-center ${getGridClass()}`}>
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          plan={plan}
          ctaText={ctaText}
          ctaHref={ctaHref}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────
   PRICING SECTION COMPONENT
───────────────────────────── */
export function PricingSection({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  highlightedText,
  description,
  plans,
  ctaText = "Get Started",
  ctaHref = "/contact",
  bgClass = "bg-white",
}) {
  return (
    <section className={`${bgClass} py-20 md:py-28`}>
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
              <span className="text-sm font-medium text-gray-700">
                {eyebrow}
              </span>
            </div>
          )}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            {title}{" "}
            {highlightedText && (
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {highlightedText}
              </span>
            )}
          </h2>

          {description && (
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Pricing grid */}
        <PricingGrid plans={plans} ctaText={ctaText} ctaHref={ctaHref} />
      </div>
    </section>
  );
}

/* ─────────────────────────────
   EXPORT INDIVIDUAL COMPONENTS
───────────────────────────── */
export { PricingCard, PricingGrid };

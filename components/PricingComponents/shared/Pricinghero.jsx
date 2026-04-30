"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { useState } from "react";

/* ─────────────────────────────
   BILLING TOGGLE COMPONENT
───────────────────────────── */
function BillingToggle({
  options = ["Monthly", "Yearly"],
  selected,
  onToggle,
  discount,
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="relative inline-flex items-center rounded-full bg-gray-100 p-1">
        {options.map((option, index) => (
          <button
            key={option}
            onClick={() => onToggle(index)}
            className={`relative z-10 px-6 py-2 text-sm font-semibold transition-colors duration-200 rounded-full ${
              selected === index
                ? "text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {option}
          </button>
        ))}

        {/* Sliding background */}
        <div
          className="absolute top-1 bottom-1 rounded-full bg-gray-900 transition-all duration-300 ease-out"
          style={{
            left: selected === 0 ? "4px" : "50%",
            right: selected === 1 ? "4px" : "50%",
          }}
        />
      </div>

      {discount && selected === 1 && (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
          {discount}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────
   FEATURE GRID COMPONENT
───────────────────────────── */
function FeatureGrid({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-4 rounded-xl bg-white/50 border border-gray-100"
        >
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 mt-0.5">
            <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-medium text-gray-700 leading-relaxed">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────
   STATS COMPONENT
───────────────────────────── */
function Stats({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-gray-600 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────
   TRUST BADGES COMPONENT
───────────────────────────── */
function TrustBadges({ badges }) {
  if (!badges || badges.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <span className="text-sm font-medium text-gray-500">Trusted by</span>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="text-gray-400 font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────
   PRICING HERO COMPONENT
───────────────────────────── */
export function PricingHero({
  // Content
  eyebrow,
  title,
  subtitle,
  description,

  // Toggle
  showToggle = false,
  toggleOptions = ["Monthly", "Yearly"],
  defaultToggle = 0,
  onToggleChange,
  discount,

  // Features
  features,

  // Stats
  stats,

  // Trust badges
  trustBadges,

  // Styling
  bgClass = "bg-gradient-to-b from-gray-50 to-white",
  alignment = "center", // "center" or "left"
}) {
  const [selectedToggle, setSelectedToggle] = useState(defaultToggle);

  const handleToggle = (index) => {
    setSelectedToggle(index);
    if (onToggleChange) {
      onToggleChange(index);
    }
  };

  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <section className={`${bgClass} py-16 md:py-24 border-b border-gray-100`}>
      <div className="container mx-auto px-5">
        <div
          className={`max-w-4xl mx-auto flex flex-col ${alignmentClasses[alignment]} gap-8`}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-sm font-medium text-gray-700">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <div className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {subtitle}
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {/* Toggle */}
          {showToggle && (
            <BillingToggle
              options={toggleOptions}
              selected={selectedToggle}
              onToggle={handleToggle}
              discount={discount}
            />
          )}

          {/* Stats */}
          {stats && <Stats stats={stats} />}

          {/* Features */}
          {features && <FeatureGrid features={features} />}

          {/* Trust Badges */}
          {trustBadges && <TrustBadges badges={trustBadges} />}
        </div>
      </div>
    </section>
  );
}

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
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {plan.featuredLabel || "Most Popular"}
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="mb-6">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${plan.bg}`}
        >
          <div
            className={`h-6 w-6 rounded-lg bg-gradient-to-br ${plan.accent}`}
          />
        </div>
      </div>

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
            ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/20"
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
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
              {EyebrowIcon && <EyebrowIcon className="h-4 w-4 text-gray-600" />}
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
export {
  PricingCard,
  PricingGrid,
  PricingHero,
  BillingToggle,
  FeatureGrid,
  Stats,
  TrustBadges,
};

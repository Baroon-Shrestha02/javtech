"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WhatsAppCTASection } from "@/components/SharedComponents/Whatsapp";

/* ─────────────────────────────
   ANIMATION VARIANTS
───────────────────────────── */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: custom.cardDelay + custom.featureIndex * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ─────────────────────────────
   PRICING CARD COMPONENT
───────────────────────────── */
function PricingCard({
  plan,
  ctaText = "Get Started",
  ctaHref = "/contact",
  index = 0,
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const handleClick = (e) => {
    if (plan.onCTAClick) {
      e.preventDefault();
      plan.onCTAClick();
    }
  };

  // Base delay for this card's animations
  const baseDelay = index * 0.15 + 0.5;

  return (
    <motion.article
      ref={cardRef}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex h-full flex-col rounded-2xl border bg-white p-8 ${
        plan.featured
          ? "border-gray-accent2 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] scale-[1.05] z-10"
          : "border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      }`}
    >
      {/* Featured ribbon */}
      {plan.featured && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            {plan.featuredLabel || "Most Popular"}
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      >
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
          {plan.eyebrow}
        </p>
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
      </motion.div>

      {/* Price */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
      >
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
          {plan.period && (
            <span className="text-sm font-medium text-gray-500">
              {plan.period}
            </span>
          )}
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-sm text-gray-600 leading-relaxed mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.35 }}
      >
        {plan.description}
      </motion.p>

      {/* Best For badge */}
      {plan.bestFor && (
        <motion.div
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-gray-700">
            {plan.bestFor}
          </span>
        </motion.div>
      )}

      {/* Features with enhanced stagger */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            className="flex items-start gap-3"
            custom={{
              cardDelay: baseDelay,
              featureIndex: featureIndex,
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={featureVariants}
          >
            <motion.div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.accent}`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
            </motion.div>
            <span className="text-sm text-gray-700 leading-relaxed">
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
          delay: baseDelay + plan.features.length * 0.08 + 0.1,
        }}
      >
        {plan.onCTAClick ? (
          <button
            onClick={handleClick}
            className={`group/btn mt-auto w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
              plan.featured
                ? "bg-accent2/90 text-white hover:bg-accent2 shadow-lg shadow-gray-900/20"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </button>
        ) : (
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
        )}
      </motion.div>
    </motion.article>
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
      {plans.map((plan, index) => (
        <PricingCard
          key={plan.name}
          plan={plan}
          ctaText={ctaText}
          ctaHref={ctaHref}
          index={index}
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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className={`${bgClass} pt-20 md:pt-28`}>
      <div className="container mx-auto px-5">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mx-auto mb-16 max-w-3xl text-center"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          {eyebrow && (
            <motion.div
              className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHeaderInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
            >
              {EyebrowIcon && <EyebrowIcon className="h-4 w-4 text-gray-600" />}
              <span className="text-sm font-medium text-gray-700">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}{" "}
            {highlightedText && (
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {highlightedText}
              </span>
            )}
          </motion.h2>

          {description && (
            <motion.p
              className="mt-6 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Pricing grid */}
        <PricingGrid plans={plans} ctaText={ctaText} ctaHref={ctaHref} />
      </div>
      <section className="max-w-5xl mx-auto mb-6 mt-12 pb-16 ">
        <WhatsAppCTASection />
      </section>
    </section>
  );
}

/* ─────────────────────────────
   EXPORT INDIVIDUAL COMPONENTS
───────────────────────────── */
export { PricingCard, PricingGrid };

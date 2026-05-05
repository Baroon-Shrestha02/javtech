"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs({
  eyebrow = "Why Choose Us?",
  title = "When You Need It Most",
  highlightedWords = ["Need"],
  subtitle = "Expert Digital Solutions",
  subtitleHighlight = "Digital Solutions",
  description = "We combine technical expertise with creative thinking to deliver solutions that drive real results. Every project is handled with precision, transparency, and a commitment to exceeding expectations.",
  image = "/home/why-us.jpg",
  imageAlt = "Why choose us",
  features = [],
  accentColor = "#cc0000",
  ctaText = "View Pricing",
  ctaHref,
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const pathname = usePathname();

  const resolvedFeatures = features.length > 0 ? features : defaultFeatures;

  // Auto-detect pricing link based on current service page
  const pricingMap = {
    "/services/web-development": "/pricing/web-development",
    "/services/app-development": "/pricing/app-development",
    "/services/digital-marketing": "/pricing/digital-marketing",
    "/services/social-media-marketing": "/pricing/digital-marketing",
    "/services/graphic-design": "/pricing/digital-marketing",
    "/services/content-writing": "/pricing/digital-marketing",
  };

  const resolvedCtaHref = ctaHref || pricingMap[pathname] || "/pricing";

  // Render title with highlighted words
  const renderTitle = (text, highlights) => {
    let result = text;
    const parts = [];
    let remaining = result;

    highlights.forEach((word) => {
      const idx = remaining.indexOf(word);
      if (idx !== -1) {
        if (idx > 0)
          parts.push({ text: remaining.slice(0, idx), highlight: false });
        parts.push({ text: word, highlight: true });
        remaining = remaining.slice(idx + word.length);
      }
    });
    if (remaining) parts.push({ text: remaining, highlight: false });

    if (parts.length === 0) return text;

    return parts.map((part, i) =>
      part.highlight ? (
        <span
          key={i}
          className="inline-block px-3 py-1 rounded-lg text-white"
          style={{ backgroundColor: accentColor }}
        >
          {part.text}
        </span>
      ) : (
        <span key={i}>{part.text}</span>
      ),
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-2 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="h-4 w-4 rounded-sm"
                style={{ backgroundColor: accentColor }}
              />
              <span
                className="text-sm font-bold"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="font-black text-gray-900 leading-[1.15] tracking-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {renderTitle(title, highlightedWords)}
              <br />
              {subtitle && (
                <>
                  {subtitleHighlight ? (
                    <>
                      {subtitle.split(subtitleHighlight)[0]}
                      <span
                        className="inline-block px-3 py-1 rounded-lg text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        {subtitleHighlight}
                      </span>
                      {subtitle.split(subtitleHighlight)[1]}
                    </>
                  ) : (
                    subtitle
                  )}
                </>
              )}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {resolvedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                    }}
                  >
                    {/* Icon */}
                    {Icon && (
                      <div className="shrink-0">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border-2"
                          style={{
                            borderColor: `${accentColor}30`,
                            color: accentColor,
                          }}
                        >
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <div
                          className="h-[2px] w-8 mx-auto mt-2 rounded-full opacity-30"
                          style={{ backgroundColor: accentColor }}
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href={resolvedCtaHref}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm md:text-base transition-all hover:gap-4 shadow-lg"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 10px 30px ${accentColor}30`,
                }}
              >
                {ctaText}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   DEFAULT FEATURES (used if none passed)
───────────────────────────── */
import { Zap, TrendingUp, Shield, HeartHandshake } from "lucide-react";

const defaultFeatures = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description: "Solutions focused on measurable business growth.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built with best practices for security and stability.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Ongoing partnership beyond project delivery.",
  },
];

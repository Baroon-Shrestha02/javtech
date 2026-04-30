"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection({
  title = "Default Title",
  image = "/home/digital.jpg",
  subtitle,
  breadcrumbs,
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Split title into words for stagger animation
  const titleWords = title.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[65vh] bg-[#0f0f12] text-white flex flex-col overflow-hidden"
    >
      {/* Background Image with Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0f0f12]/85 via-[#0f0f12]/60 to-[#0f0f12]/90"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0f0f12]/40" />

      {/* Grain texture overlay */}
      <motion.div
        className="absolute inset-0 z-[5] opacity-[0.03] mix-blend-overlay pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-end px-6 pb-16">
        <div className="mx-auto w-full max-w-7xl">
          {/* Breadcrumbs */}
          {breadcrumbs && (
            <motion.div
              className="mb-6 flex items-center gap-2 text-sm text-white/60"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {crumb}
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </span>
              ))}
            </motion.div>
          )}

          {/* Title with word-by-word stagger */}
          <div
            className="font-bold leading-[1] tracking-[-0.03em] overflow-hidden"
            style={{ fontSize: "clamp(34px, 7.5vw, 75px)" }}
          >
            {titleWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block mr-[0.25em]"
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + wordIndex * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.6 + titleWords.length * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Animated underline accent */}
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-white via-white/60 to-transparent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView ? { width: 128, opacity: 1 } : { width: 0, opacity: 0 }
            }
            transition={{
              duration: 0.9,
              delay: 0.8 + titleWords.length * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>
    </section>
  );
}

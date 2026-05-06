"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/SharedComponents/SectionHeader";

/* ─────────────────────────────
   BENTO EXPERTISE GRID

   Layout:
   ┌─────────────┬─────────────┐
   │             │   Card 2    │
   │   Card 1    ├──────┬──────┤
   │   (tall)    │  C3  │  C4  │
   └─────────────┴──────┴──────┘

   Pass 4 cards. First = tall left,
   second = wide right, third & fourth = small bottom-right.
───────────────────────────── */

export default function ExpertiseGrid({
  eyebrow = "OUR SERVICES",
  title = "How Can We Help?",
  description = "From eCommerce and SaaS to applications and design, our team turns bold visions into digital products that inspire and achieve results.",
  cards = [],
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const resolvedCards = cards.length >= 4 ? cards : defaultCards;

  return (
    <section ref={sectionRef} className="px-6 md:px-0">
      <div className="">
        <SectionHeader title={eyebrow} header={title} subheader={description} />
      </div>

      <div className="container mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Card 1 — Tall left */}
          <motion.div
            className="rounded-2xl p-9 text-white flex flex-col justify-between min-h-[440px] row-span-2 hover:-translate-y-1 transition-transform duration-300 overflow-hidden relative"
            style={{ background: resolvedCards[0].gradient }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold leading-snug mb-3">
                {resolvedCards[0].title}
              </h3>
              <div className="w-9 h-[3px] rounded-full bg-white/30 mb-4" />
              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                {resolvedCards[0].description}
              </p>
            </div>

            {resolvedCards[0].image && (
              <div className="flex items-end justify-center pt-6 ">
                <img
                  src={resolvedCards[0].image}
                  alt={resolvedCards[0].title}
                  className="h-[275px] object-contain rounded-xl"
                />
              </div>
            )}

            {resolvedCards[0].icon &&
              (() => {
                const Icon = resolvedCards[0].icon;
                return (
                  <div className="mt-6 flex items-end justify-center opacity-80">
                    <Icon className="w-20 h-20 text-white/30" />
                  </div>
                );
              })()}
          </motion.div>

          {/* Card 2 — Wide top-right */}
          <motion.div
            className="rounded-2xl p-9 text-white flex justify-between items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
            style={{ background: resolvedCards[1].gradient }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="text-2xl font-bold leading-snug mb-3">
                {resolvedCards[1].title}
              </h3>
              <div className="w-9 h-[3px] rounded-full bg-white/30 mb-4" />
              <p className="text-sm text-white/80 leading-relaxed">
                {resolvedCards[1].description}
              </p>
            </div>

            {resolvedCards[1].image && (
              <div className="shrink-0 w-28 md:w-36 flex items-center justify-center">
                <img
                  src={resolvedCards[1].image}
                  alt={resolvedCards[1].title}
                  className="w-full object-contain rounded-xl"
                />
              </div>
            )}
          </motion.div>

          {/* Cards 3 & 4 — Small bottom-right */}
          <div className="grid grid-cols-2 gap-4">
            {resolvedCards.slice(2, 4).map((card, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-7 text-white hover:-translate-y-1 transition-transform duration-300"
                style={{ background: card.gradient }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <h3 className="text-xl font-bold leading-snug mb-3">
                  {card.title}
                </h3>
                <div className="w-9 h-[3px] rounded-full bg-white/30 mb-3" />
                <p className="text-xs text-white/80 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

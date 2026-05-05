"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────
   HORIZONTAL SCROLL SECTION
───────────────────────────── */
export default function HorizontalScrollSection({
  eyebrow = "Featured",
  title = "Our",
  highlightedText = "Services",
  description = "Scroll to explore our complete range of services designed to help your business grow.",
  cards = [],
  // Desktop sizes
  cardWidth = 480,
  gap = 32,
  // Mobile sizes
  mobileCardWidth = 280,
  mobileGap = 16,
}) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !cards.length) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trigger = triggerRef.current;

      if (!track || !trigger) return;

      const setupScroll = () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === trigger) t.kill();
        });

        const totalCards = cards.length;
        const isMobileView = window.innerWidth < 768;
        const currentCardWidth = isMobileView ? mobileCardWidth : cardWidth;
        const currentGap = isMobileView ? mobileGap : gap;
        const totalWidth =
          totalCards * currentCardWidth + (totalCards - 1) * currentGap;
        const viewportWidth = window.innerWidth;
        const padding = isMobileView ? 32 : viewportWidth * 0.06;
        const scrollDistance = totalWidth - viewportWidth + padding * 2;

        if (scrollDistance > 0) {
          gsap.to(track, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      };

      setupScroll();

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", checkMobile);
      ctx.revert();
    };
  }, [cards.length, cardWidth, gap, mobileCardWidth, mobileGap]);

  if (!cards || cards.length === 0) return null;

  const currentCardWidth = isMobile ? mobileCardWidth : cardWidth;
  const currentGap = isMobile ? mobileGap : gap;
  const sidePadding = isMobile ? "1rem" : "6%";

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div
        ref={triggerRef}
        className="relative h-screen overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="container mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-8 md:pb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow && (
                <motion.div
                  className="mb-4 inline-flex items-center gap-2 py-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-md font-extralight uppercase tracking-wider text-[#cc0000]">
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              <h2
                className="font-bold text-gray-900 leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
              >
                {title}{" "}
                {highlightedText && (
                  <span className="bg-gradient-to-r from-[#cc0000] to-[#ff4444] bg-clip-text text-transparent">
                    {highlightedText}
                  </span>
                )}
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 flex items-center">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${currentGap}px`,
              paddingLeft: sidePadding,
              paddingRight: sidePadding,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  width: `${currentCardWidth}px`,
                  flexShrink: 0,
                }}
              >
                <Card card={card} index={index} isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   CARD COMPONENT
───────────────────────────── */
function Card({ card, index, isMobile = false }) {
  return (
    <motion.div
      className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-gray-900 cursor-pointer"
      style={{
        height: isMobile ? "55vh" : "55vh",
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      {card.image && (
        <div className="absolute inset-0">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

      {/* Card Number */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 z-10">
        <div className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full  text-white font-black text-xl md:text-3xl">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Category Badge */}
      {card.category && (
        <div className="absolute top-4 md:top-6 left-4 md:left-6 z-10">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white">
              {card.category}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
        <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
          {card.title}
        </h3>

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
            {card.tags.slice(0, isMobile ? 2 : 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] md:text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        {card.href && (
          <a
            href={card.href}
            className="inline-flex items-center gap-1.5 md:gap-2 text-white font-semibold text-xs md:text-sm group/btn"
          >
            <span className="relative">
              {card.ctaText || "Learn More"}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
            </span>
            <ArrowRight
              size={isMobile ? 14 : 16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </a>
        )}
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-2 ring-transparent group-hover:ring-[#cc0000]/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

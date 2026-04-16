"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const leftCards = [
  {
    origin: "right bottom",
    image: "/home/digital.jpg",
    title: "Moto Gallery",
    category: "UI Design",
  },
  {
    origin: "right center",
    image: "/home/mobile.jpg",
    title: "Floral Studio",
    category: "Branding",
  },
  {
    origin: "right top",
    image: "/home/social.jpg",
    title: "Suzuki Motors",
    category: "Campaign",
  },
];

const rightCards = [
  {
    origin: "left bottom",
    image: "/home/social.jpg",
    title: "Art Gallery",
    category: "Web Design",
  },
  {
    origin: "left center",
    image: "/home/mobile.jpg",
    title: "Food App",
    category: "Mobile UI",
  },
  {
    origin: "left top",
    image: "/home/digital.jpg",
    title: "Realtime Clock",
    category: "Product Design",
  },
];

function ProjectCard({ image, title, category }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/55 transition-colors duration-500" />
    </div>
  );
}

export function OurProjects() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ── Card transforms — unchanged ──
  const leftX1 = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-45%"]);
  const leftR1 = useTransform(scrollYProgress, [0.1, 0.5], [0, -18]);
  const leftX2 = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-35%"]);
  const leftR2 = useTransform(scrollYProgress, [0.2, 0.6], [0, -12]);
  const leftX3 = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-28%"]);
  const leftR3 = useTransform(scrollYProgress, [0.3, 0.7], [0, -6]);

  const rightX1 = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "45%"]);
  const rightR1 = useTransform(scrollYProgress, [0.1, 0.5], [0, 18]);
  const rightX2 = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "35%"]);
  const rightR2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 12]);
  const rightX3 = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "28%"]);
  const rightR3 = useTransform(scrollYProgress, [0.3, 0.7], [0, 6]);

  const leftMotion = [
    { x: leftX1, rotate: leftR1, origin: "right bottom", ...leftCards[0] },
    { x: leftX2, rotate: leftR2, origin: "right center", ...leftCards[1] },
    { x: leftX3, rotate: leftR3, origin: "right top", ...leftCards[2] },
  ];
  const rightMotion = [
    { x: rightX1, rotate: rightR1, origin: "left bottom", ...rightCards[0] },
    { x: rightX2, rotate: rightR2, origin: "left center", ...rightCards[1] },
    { x: rightX3, rotate: rightR3, origin: "left top", ...rightCards[2] },
  ];

  // ── Panel fade ──
  const panelOpacity = useTransform(scrollYProgress, [0.16, 0.3], [0, 1]);

  // ── Clip wipe: inset(0 100% 0 0) → inset(0 0% 0 0) ──
  // Each element wipes left-to-right, staggered by scroll progress window
  const eyebrowOpacity = useTransform(scrollYProgress, [0.18, 0.3], [0, 1]);
  const eyebrowClip = useTransform(
    scrollYProgress,
    [0.18, 0.32],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );

  const line1Clip = useTransform(
    scrollYProgress,
    [0.22, 0.38],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const line1Opacity = useTransform(scrollYProgress, [0.22, 0.34], [0, 1]);

  const line2Clip = useTransform(
    scrollYProgress,
    [0.27, 0.43],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const line2Opacity = useTransform(scrollYProgress, [0.27, 0.39], [0, 1]);

  // Thin rule scales from left after headlines
  const dividerScale = useTransform(scrollYProgress, [0.34, 0.46], [0, 1]);
  const dividerOpacity = useTransform(scrollYProgress, [0.34, 0.44], [0, 1]);

  // Sub lines wipe as well, a beat later
  const sub1Clip = useTransform(
    scrollYProgress,
    [0.36, 0.5],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const sub1Opacity = useTransform(scrollYProgress, [0.36, 0.46], [0, 1]);

  const sub2Clip = useTransform(
    scrollYProgress,
    [0.4, 0.54],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const sub2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative mt-20 py-20 overflow-hidden bg-black"
      >
        <div className="sticky top-0 h-[120vh] w-[75vw] mx-auto">
          {/* Card grid */}
          <div className="h-full grid grid-cols-2">
            <div className="flex flex-col h-full">
              {leftMotion.map((card, i) => (
                <motion.div
                  key={i}
                  style={{
                    x: card.x,
                    rotate: card.rotate,
                    transformOrigin: card.origin,
                  }}
                  className="flex-1 m-2 rounded-xl overflow-hidden"
                >
                  <ProjectCard
                    image={card.image}
                    title={card.title}
                    category={card.category}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col h-full">
              {rightMotion.map((card, i) => (
                <motion.div
                  key={i}
                  style={{
                    x: card.x,
                    rotate: card.rotate,
                    transformOrigin: card.origin,
                  }}
                  className="flex-1 m-2 rounded-xl overflow-hidden"
                >
                  <ProjectCard
                    image={card.image}
                    title={card.title}
                    category={card.category}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center text — clip wipe reveal */}
          <motion.div
            style={{ opacity: panelOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
          >
            {/* Red background panel scales in */}
            {/* <motion.div
              style={{
                scale: useTransform(scrollYProgress, [0.16, 0.34], [0.88, 1]),
              }}
              className="absolute inset-x-[18%] inset-y-[22%] rounded-2xl bg-red-600/90 backdrop-blur-sm -z-10"
            /> */}

            {/* Eyebrow — wipe */}
            <motion.p
              style={{ clipPath: eyebrowClip, opacity: eyebrowOpacity }}
              className="text-xs tracking-[0.35em] uppercase text-white/60 mb-4"
            >
              Selected Work
            </motion.p>

            {/* Line 1 — wipe */}
            <motion.h2
              style={{
                clipPath: line1Clip,
                opacity: line1Opacity,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
              }}
              className="font-black text-center leading-none text-white"
            >
              Turning Dreams
            </motion.h2>

            {/* Line 2 — wipe, slightly delayed */}
            <motion.h2
              style={{
                clipPath: line2Clip,
                opacity: line2Opacity,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
              }}
              className="font-black text-center leading-none text-white/60 mb-5"
            >
              to Reality
            </motion.h2>

            {/* Divider — scales from left */}
            <motion.div
              style={{ scaleX: dividerScale, opacity: dividerOpacity }}
              className="w-10 h-px bg-white/40 mb-5 origin-left"
            />

            {/* Sub line 1 — wipe */}
            <motion.p
              style={{ clipPath: sub1Clip, opacity: sub1Opacity }}
              className="text-white/80 text-sm text-center leading-relaxed"
            >
              Solutions crafted with purpose,
            </motion.p>

            {/* Sub line 2 — wipe */}
            <motion.p
              style={{ clipPath: sub2Clip, opacity: sub2Opacity }}
              className="text-white/80 text-sm text-center leading-relaxed"
            >
              designed to make an impact.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

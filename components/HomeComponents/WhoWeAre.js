"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export function WhoWeAre() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const line1Wipe = useTransform(
    scrollYProgress,
    [0.28, 0.5],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const line2Wipe = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    ["inset(0 0% 0 100%)", "inset(0 0% 0 0%)"],
  );

  const para1Clip = useTransform(
    scrollYProgress,
    [0.3, 0.46],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const para1Opacity = useTransform(scrollYProgress, [0.28, 0.38], [0, 1]);

  const para2Clip = useTransform(
    scrollYProgress,
    [0.4, 0.58],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const para2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  const divScale = useTransform(scrollYProgress, [0.34, 0.46], [0, 1]);
  const divOpacity = useTransform(scrollYProgress, [0.34, 0.44], [0, 1]);

  // Image parallax — subtle upward drift
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const headingStyle = {
    fontSize: "clamp(72px, 13vw, 120px)",
    fontWeight: 900,
    lineHeight: 0.88,
    letterSpacing: "-0.03em",
    fontFamily: "Georgia, serif",
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d0d0d] overflow-hidden min-h-[80vh] flex flex-col justify-center"
    >
      {/* ── Right image with center-to-right vanishing gradient ── */}
      <div className="absolute inset-y-0 right-0 w-[55%] pointer-events-none">
        {/* Image */}
        <motion.div className="absolute inset-0">
          <Image
            src="/Services/DigitalMarketing.jpg"
            alt="JavTech team"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Gradient: left edge (100% opaque black) → right (transparent)
            Sits over the image, vanishes from center of section (50vw) towards right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0d0d0d 0%, #0d0d0d 10%, transparent 70%)",
          }}
        />

        {/* Top + bottom fade so image blends vertically too */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0d0d0d 0%, transparent 20%, transparent 80%, #0d0d0d 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16 py-20">
        {/* Heading */}
        <div className="mb-16">
          {/* LINE 1: WHO — wipes left → right */}
          <div
            className="relative overflow-hidden"
            style={{ lineHeight: 0.88 }}
          >
            <div
              style={{
                ...headingStyle,
                color: "rgba(214,240,232,0.18)",
                userSelect: "none",
              }}
              aria-hidden
            >
              WHO
            </div>
            <motion.div
              style={{
                ...headingStyle,
                color: "#d6f0e8",
                clipPath: line1Wipe,
                position: "absolute",
                top: 0,
                left: 0,
                whiteSpace: "nowrap",
              }}
              aria-hidden
            >
              WHO
            </motion.div>
          </div>

          {/* LINE 2: WE ARE — wipes right → left */}
          <div
            className="relative overflow-hidden"
            style={{ lineHeight: 0.88 }}
          >
            <div
              style={{
                ...headingStyle,
                color: "rgba(214,240,232,0.18)",
                userSelect: "none",
              }}
              aria-hidden
            >
              WE ARE
            </div>
            <motion.div
              style={{
                ...headingStyle,
                color: "#d6f0e8",
                clipPath: line2Wipe,
                position: "absolute",
                top: 0,
                left: 0,
                whiteSpace: "nowrap",
              }}
            >
              WE ARE
            </motion.div>
          </div>

          <h1 className="sr-only">Who We Are</h1>
        </div>

        {/* Body — constrained to left ~55% so it doesn't overlap image */}
        <div
          className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start"
          style={{ maxWidth: "60%" }}
        >
          {/* Left */}
          <div className="overflow-hidden">
            <motion.p style={{ clipPath: para1Clip, opacity: para1Opacity }}>
              <span
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  lineHeight: 1.4,
                  display: "block",
                  color: "rgba(214,240,232,0.82)",
                }}
              >
                As a results-driven agency within the digital world, JavTech
                transcends aesthetics — crafting your vision into a brand that
                leaves a lasting mark.
              </span>
            </motion.p>
          </div>

          {/* Right */}
          <div className="lg:pt-2 flex flex-col gap-6">
            <motion.div
              style={{ scaleX: divScale, opacity: divOpacity }}
              className="hidden lg:block w-12 h-px bg-white/20 origin-left"
            />
            <div className="overflow-hidden">
              <motion.p style={{ clipPath: para2Clip, opacity: para2Opacity }}>
                <span
                  className="text-white/40 leading-relaxed text-sm block"
                  style={{ lineHeight: 1.7 }}
                >
                  We stay current with the latest technology to make your brand
                  a formidable force — delivering exceptional website, mobile,
                  and digital marketing experiences.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

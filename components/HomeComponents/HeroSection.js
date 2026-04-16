"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.min(Math.max(-rect.top / (el.offsetHeight * 0.75), 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillWidth = `${8 + progress * 92}vw`;
  const pillHeight = `${56 + progress * 580}px`;
  const pillRadius = `${28 - progress * 28}px`;
  const pillBottom = `${Math.max(0, 40 - progress * 40)}px`;
  const textOpacity = Math.max(0, 1 - progress * 2.5);
  const textY = progress * -40;
  const btnOpacity = Math.max(0, (progress - 0.5) * 3);
  const labelOpacity = Math.max(0, 1 - progress * 8);

  return (
    <div ref={sectionRef} style={{ height: "280vh" }} className="relative">
      {/* Sticky frame */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#e8ece8]" />
        {/* Hero text */}
        <div
          className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            pointerEvents: progress > 0.4 ? "none" : "auto",
          }}
        >
          {/* Dot */}
          {/* <div className="mb-7 h-3 w-3 rounded-full bg-[#1a1a1a]" /> */}

          <h1
            className="m-0 uppercase leading-[0.9] tracking-[-0.03em] text-accent2"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(52px, 9vw, 130px)",
              fontWeight: 700,
            }}
          >
            BUILD IT ONCE.
            <br />
            BUILD IT RIGHT.
          </h1>

          <p className="mt-7 max-w-[420px] text-[11px] font-semibold uppercase leading-[1.7] tracking-[0.16em] text-[#555]">
            We deliver exceptional web experiences, branding, and digital
            solutions for ambitious companies.
          </p>
        </div>
        {/* Growing pill */}
        <div
          className="absolute left-1/2 z-10 overflow-hidden"
          style={{
            width: pillWidth,
            height: pillHeight,
            borderRadius: pillRadius,
            bottom: pillBottom,
            transform: "translateX(-50%)",
            willChange: "width, height, border-radius",
          }}
        >
          <div className="relative flex h-full w-full items-center justify-center bg-[#111]">
            <video
              src="/home/hero_vid.mp4"
              alt="Work preview"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: 0.15 + progress * 0.85 }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              autoPlay
              muted
              loop
            />
          </div>
        </div>
        CTA buttons
        <div
          className="absolute bottom-10 left-0 right-0 z-20 flex items-end justify-between px-10"
          style={{
            opacity: btnOpacity,
            pointerEvents: progress < 0.6 ? "none" : "auto",
          }}
        >
          <Link
            href="/our-works"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] text-white backdrop-blur-md"
          >
            Explore work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] text-white backdrop-blur-md"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

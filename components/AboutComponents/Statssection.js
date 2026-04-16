"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const stats = [
  { number: "50+", label: "Awards &\nRecognition", dark: true, col: "left" },
  { number: "900+", label: "Projects\nCompleted", dark: true, col: "right" },
  { number: "20+", label: "Creative\nMinds", dark: false, col: "left" },
  { number: "5+", label: "Years of\nExperience", dark: true, col: "right" },
];

const PX_PER_CARD = 40;
const TOTAL_SCROLL_PX = stats.length * PX_PER_CARD;

// How many pixels BEFORE the section top is reached we start animating.
// Positive value = cards start while the header is still visible in viewport.
const EARLY_START_PX = 300;

const cardImages = {
  "50+":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  "900+":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "20+":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  "5+": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
};

function StatCard({ stat, progress }) {
  const rotate = (1 - progress) * (stat.col === "left" ? -45 : 45);
  const opacity = Math.min(1, progress * 1.5);
  const translateY = (1 - progress) * 60;

  const bgColor = stat.dark ? "#1a1a1f" : "#a8d5b5";
  const imgSrc = cardImages[stat.number];

  return (
    <div
      className={`relative flex min-h-[280px] w-full flex-col justify-between rounded-3xl overflow-hidden ${
        stat.dark ? "bg-[#1a1a1f]" : "bg-[#a8d5b5]"
      }`}
      style={{
        transform: `rotate(${rotate}deg) translateY(${translateY}px)`,
        opacity,
        transformOrigin: stat.col === "left" ? "bottom right" : "bottom left",
        willChange: "transform, opacity",
      }}
    >
      {/* Image — left half */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "75%",
        }}
      />

      {/* Gradient overlay: transparent left → solid card bg right */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${bgColor} 60%)`,
        }}
      />

      {/* Content — sits above image & gradient */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 min-h-[280px]">
        <p
          className={`m-0 font-serif font-bold leading-none tracking-[-0.04em] ${
            stat.dark ? "text-white" : "text-accent"
          }`}
          style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
        >
          {stat.number}
        </p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div
            className={`ml-3 h-2 w-2 shrink-0 self-center rounded-full ${
              stat.dark ? "bg-teal-400" : "bg-teal-700"
            }`}
          />
          <p
            className={`m-0 whitespace-pre-line text-[11px] md:text-[22px] font-bold uppercase leading-snug tracking-[0.12em] ${
              stat.dark ? "text-white/50" : "text-black/50"
            }`}
          >
            {stat.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef(null);
  const rawProgress = useRef([0, 0, 0, 0]);
  const smoothed = useRef([0, 0, 0, 0]);
  const rafId = useRef(null);
  const [progresses, setProgresses] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      // Subtract EARLY_START_PX so animation begins that many px before
      // the section top reaches the viewport top — i.e. while the
      // section header is still visible.
      const scrolledPast = -rect.top + EARLY_START_PX;
      rawProgress.current = stats.map((_, i) => {
        const start = i * PX_PER_CARD;
        const end = start + PX_PER_CARD;
        const p = (scrolledPast - start) / (end - start);
        return Math.min(Math.max(p, 0), 1);
      });
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      let changed = false;
      const next = smoothed.current.map((s, i) => {
        const n = lerp(s, rawProgress.current[i], 0.05);
        if (Math.abs(n - s) > 0.0001) changed = true;
        return n;
      });
      if (changed) {
        smoothed.current = next;
        setProgresses([...next]);
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const leftCards = stats.filter((s) => s.col === "left");
  const rightCards = stats.filter((s) => s.col === "right");
  const leftProgresses = [progresses[0], progresses[2]];
  const rightProgresses = [progresses[1], progresses[3]];

  return (
    <>
      <SectionHeader
        title="OUR STORY"
        header="From Passion to Expertise"
        subheader="What started as a shared passion for cutting-edge technology has evolved into a thriving hub of creativity and technical excellence. Our founders, with their combined decades of experience in the tech industry, recognized the need for a company that doesn't just deliver projects, but crafts digital experiences that drive real business growth."
      />
      <section
        ref={sectionRef}
        className="px-5"
        style={{ height: `calc(100vh + ${TOTAL_SCROLL_PX}px)` }}
      >
        <div
          className="sticky top-0 mx-auto max-w-7xl"
          style={{ paddingTop: "20px" }}
        >
          <div className="flex gap-5 items-start overflow-visible">
            <div className="flex flex-1 flex-col gap-5">
              {leftCards.map((stat, i) => (
                <StatCard
                  key={stat.number}
                  stat={stat}
                  progress={leftProgresses[i]}
                />
              ))}
            </div>

            <div
              className="flex flex-1 flex-col gap-5"
              style={{ marginTop: "20vh" }}
            >
              {rightCards.map((stat, i) => (
                <StatCard
                  key={stat.number}
                  stat={stat}
                  progress={rightProgresses[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

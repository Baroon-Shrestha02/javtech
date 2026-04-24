"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const cards = [
  {
    bg: "#c0392b",
    zIndex: 10,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
          We Build Digital Products That Grow With You
        </h2>

        <div className="flex justify-start md:justify-end">
          <img
            src="/logo.png"
            alt="JavTech logo"
            height={80}
            width={80}
            className="bg-white rounded-xl p-2"
          />
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">
            From idea to launch — fast
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            JavTech takes your vision and turns it into a polished, scalable
            product. We handle web, mobile, branding, and everything in between
            — so you can focus on your business.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">
            Built in Kathmandu, serving globally
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            We&apos;re a Kathmandu-based agency delivering world-class software
            and design to startups, SMEs, and growing brands across Nepal and
            beyond.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 border-t border-white/20 pt-4 flex flex-wrap gap-3 items-center">
          <span className="text-white text-xl">⚛</span>
          <span className="text-white font-bold text-lg">~</span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            N
          </span>
          <span className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
            JS
          </span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            TS
          </span>
          <span className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">
            Pg
          </span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            Go
          </span>
        </div>
      </div>
    ),
  },
  {
    bg: "#a93226",
    zIndex: 20,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
          We Deliver. On Time, Every Time.
        </h2>

        <div className="flex justify-start md:justify-end">
          <svg width="160" height="130" viewBox="0 0 200 160" fill="none">
            <ellipse
              cx="140"
              cy="40"
              rx="38"
              ry="22"
              fill="#c9a0dc"
              opacity="0.85"
            />
            <ellipse
              cx="140"
              cy="36"
              rx="38"
              ry="22"
              fill="#b07bd4"
              opacity="0.6"
            />
            <rect
              x="55"
              y="70"
              width="36"
              height="60"
              rx="4"
              fill="#f1948a"
              opacity="0.85"
            />
            <ellipse cx="73" cy="70" rx="18" ry="8" fill="#f5b7b1" />
            <rect
              x="120"
              y="100"
              width="44"
              height="40"
              rx="4"
              fill="#9b7fd4"
              opacity="0.75"
            />
            <polygon
              points="120,100 164,100 156,88 112,88"
              fill="#b99de0"
              opacity="0.75"
            />
            <polygon
              points="164,100 164,140 172,128 172,88"
              fill="#7a5cbf"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
          <div className="bg-white/10 rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-2">
              Weekly progress, zero surprises
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              We ship weekly updates — design, development, or both. You always
              know exactly where your project stands.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-2">
              Clean code, clean handoffs
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Every project is documented, version-controlled, and handed off in
              a way that makes future scaling effortless.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-5">
            <h3 className="text-white font-bold text-base mb-2">
              Transparent pricing, always
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              No hidden fees. We agree on scope, price, and timeline upfront —
              and we stick to it.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: "#922b21",
    zIndex: 30,
    content: (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
            Clients Trust JavTech to Grow Their Business
          </h2>

          <div className="relative h-60 md:h-72">
            <div className="absolute top-0 left-0 w-52 bg-[#f5f5f0] rounded-2xl p-4 shadow-xl z-10">
              <div className="w-9 h-9 rounded-full bg-[#3d3472] flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#fff" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-900">
                Humans for humanity
              </p>
              <p className="text-xs text-gray-500 leading-tight mb-2">
                Coordinator
              </p>
              <span className="text-yellow-400 text-sm">★★★★★</span>
            </div>

            <div className="absolute -top-4 right-0 w-48 bg-[#f5f5f0] rounded-2xl p-4 shadow-xl z-30">
              <div className="w-9 h-9 rounded-full bg-[#d97b1a] flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#fff" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-900">
                Gsonic Electronics
              </p>
              <p className="text-xs text-gray-500 leading-tight mb-2">
                Managing Director
              </p>
              <span className="text-yellow-400 text-sm">★★★★★</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8">
          <div>
            <div className="text-2xl font-extrabold text-white mb-1">10+</div>
            <h3 className="text-white font-bold text-sm mb-1">
              Projects delivered
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Websites, apps, and brand identities — built with precision for
              clients across Nepal and abroad.
            </p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white mb-1">
              4.5 / 5
            </div>
            <h3 className="text-white font-bold text-sm mb-1">
              Average client rating
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Our clients don&apos;t just come back — they refer us.
              Relationships and results are at the core of everything we do.
            </p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white mb-1">24 hr</div>
            <h3 className="text-white font-bold text-sm mb-1">
              Response guarantee
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Reach us on WhatsApp, email, or phone. We respond within 24 hours
              — usually much faster.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

function ParallaxCard({ card, index, totalCards, containerRef }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segmentSize = 1 / totalCards;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - segmentSize), start, end],
    index === 0 ? ["0%", "0%", "0%"] : ["100%", "0%", "0%"],
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        zIndex: card.zIndex,
        position: "sticky",
        top: "80px",
      }}
    >
      <section
        className="rounded-t-3xl px-5 md:px-16 py-12 md:py-16"
        style={{ background: card.bg }}
      >
        {card.content}
      </section>
    </motion.div>
  );
}

export default function Why() {
  const containerRef = useRef(null);

  return (
    <>
      <section>
        <section className="px-4 md:px-10">
          <SectionHeader
            title="Javtech Edge"
            header="Why Choose JavTech?"
            subheader=""
          />
        </section>
      </section>

      <div
        ref={containerRef}
        style={{ height: `${cards.length * 100}vh` }}
        className="relative container mx-auto"
      >
        {cards.map((card, index) => (
          <ParallaxCard
            key={index}
            card={card}
            index={index}
            totalCards={cards.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </>
  );
}

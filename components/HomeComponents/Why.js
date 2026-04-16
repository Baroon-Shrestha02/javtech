"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const cards = [
  {
    bg: "#c0392b",
    zIndex: 10,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
          We Drive Digital Innovation
        </h2>

        <div className="flex justify-center md:justify-end ">
          <Image
            src="/logo.png"
            alt="logo"
            height={100}
            width={100}
            className="bg-white"
          />
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">
            Crafting future-ready software & experiences
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            We help ambitious brands and start-ups turn bold ideas into
            powerful, scalable products that fuel growth and success.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-2">
            Shaping the next era of UX
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Our designs and solutions redefine digital interactions, creating
            intuitive, impactful experiences that set new industry benchmarks.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 border-t border-white/20 pt-4 flex gap-4 items-center">
          <span className="text-white text-xl">⚛</span>
          <span className="text-white text-xl font-bold">~</span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            L
          </span>
          <span className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
            JS
          </span>
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
            N
          </span>
        </div>
      </div>
    ),
  },
  {
    bg: "#a93226",
    zIndex: 20,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
          Delivering Excellence! Fast & Reliably
        </h2>

        <div className="flex justify-end">
          <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
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

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              Lean execution, real results
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              We prioritize action over talk, shipping design and development
              progress every week—on time, every time.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              Turning complexity into clarity
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              We simplify intricate systems into sleek, user-focused solutions
              built for seamless performance.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              Flexible models, effortless onboarding
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              From dedicated teams to expert support, we integrate smoothly into
              your workflows with transparent pricing.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
            Why Clients Love Partnering With Us
          </h2>

          <div className="relative h-72">
            <div className="absolute top-0 left-0 w-56 bg-[#f5f5f0] rounded-2xl p-5 shadow-xl z-10">
              <div className="w-10 h-10 rounded-full bg-[#3d3472] flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#fff" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-900">Rubick Joshi</p>
              <p className="text-xs text-gray-500 leading-tight mb-2">
                Marketing Manager
                <br />
                Community Homestay Network
              </p>
              <span className="text-yellow-400 text-sm">★★★★★</span>
            </div>

            <div className="absolute -top-4 right-0 w-52 bg-[#f5f5f0] rounded-2xl p-5 shadow-xl z-30">
              <div className="w-10 h-10 rounded-full bg-[#d97b1a] flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#fff" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff" />
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-900">Norbu Lama</p>
              <p className="text-xs text-gray-500 leading-tight mb-2">
                Managing Director
                <br />
                Singing Bowl Village Nepal
              </p>
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <p className="text-xs text-gray-400 mt-2">
                Rara Treks Tours & Travels
              </p>
              <span className="text-yellow-400 text-xs">★★★★★</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/15 pt-10">
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              A trusted extension of your team
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Our clients call us their growth partner, and we&apos;re proud to
              be part of their success stories.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              4.9/5 – Rated by industry leaders
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              1,100+ successful projects delivered with creativity, precision,
              and a focus on building lasting relationships.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-2">
              Purpose-driven innovation
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We&apos;re passionate about solving problems that matter—every
              project is crafted with impact in mind.
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
        className="rounded-t-3xl px-6 md:px-16 py-16"
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
      <section className="">
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

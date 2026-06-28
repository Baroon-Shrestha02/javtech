"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const testimonials = [
  {
    quote:
      "JavTech built us a clean, fast eCommerce platform that finally gave GSonic a proper digital presence. Sales have been consistently growing since launch and our customers love the experience.",
    name: "GSonic Team",
    role: "eCommerce Platform",
    company: "GSonic Electronic",
    avatarBg: "GS",
    image: "/clients/gsonic.png",
  },
  {
    quote:
      "Our NGO needed a reliable app to organize events, manage volunteers, and run charity drives — JavTech delivered exactly that. The app has helped us reach more people and make a bigger impact.",
    name: "H4H Team",
    role: "NGO Mobile App",
    company: "Humans for Humanity",
    avatarBg: "HH",
    image: "/clients/HFH.png",
  },
  {
    quote:
      "JavTech understood what an education consultancy needs — trust, clarity, and a professional look. The website they built for us has significantly improved how students and parents perceive us.",
    name: "Abhiyan Team",
    role: "Education Consultancy",
    company: "Abhiyan Education Consultancy",
    avatarBg: "AE",
    image: "/abhiyan.jpeg",
  },
  {
    quote:
      "We wanted our jewellery showcased the way it deserves — rich, elegant, and trustworthy online. JavTech's design captures that perfectly, and customers now browse our collections with real confidence before visiting the store.",
    name: "Vaishno Team",
    role: "Jewellery Showcase Website",
    company: "Vaishno Jewellery",
    avatarBg: "VJ",
    image: "/projects/vaishno.jpeg",
  },
  {
    quote:
      "Selling books online meant we needed search and browsing that just works. JavTech built us a fast, organized store where readers can find exactly what they're looking for in seconds.",
    name: "Bajra Books Team",
    role: "Online Bookstore",
    company: "Bajra Books",
    avatarBg: "BB",
    image: "/projects/bajra.png",
  },
  {
    quote:
      "Hardware shopping online can get messy with so many SKUs and categories. JavTech gave us a platform that keeps everything organized, making it easy for tradespeople and homeowners alike to find the right tools.",
    name: "Sajilo Team",
    role: "Online Hardware Store",
    company: "Sajilo Hardware",
    avatarBg: "SH",
    image: "/projects/sajilo.png",
  },
  {
    quote:
      "As a construction company, we needed a website that reflects the scale and reliability of our work. JavTech delivered a strong, professional site that has helped us win client trust before the first meeting even happens.",
    name: "Raunak Team",
    role: "Construction Company Website",
    company: "Raunak Construction",
    avatarBg: "RC",
    image: "/projects/raunak2.png",
  },
  {
    quote:
      "Curtains are a visual product — customers need to see fabric, texture, and style clearly. JavTech built us a beautiful online store that showcases every design and has made online selling so much easier for us.",
    name: "Cozy Curtains Team",
    role: "Online Curtains Store",
    company: "Cozy Curtains",
    avatarBg: "CC",
    image: "/projects/cozy.png",
  },
  {
    quote:
      "Connecting customers to home services like AC repair and dish washing needed a smooth, reliable app. JavTech built Ghar Sewa to handle bookings end-to-end, and it's made running our service network so much simpler.",
    name: "Ghar Sewa Team",
    role: "Home Services Mobile App",
    company: "Ghar Sewa Nepal",
    avatarBg: "GS",
    image: "/projects/gharsewa.png",
  },
  {
    quote:
      "A digital wallet has to feel instant and completely secure — there's no room for compromise. JavTech built Jagni Pay with exactly that focus, and our users trust the app with their everyday transactions.",
    name: "Jagni Pay Team",
    role: "Mobile Banking / Wallet App",
    company: "Jagni Pay",
    avatarBg: "JP",
    image: "/projects/jagni-pay.jpeg",
  },
];
function Stars({ count }) {
  return (
    <span
      className="text-yellow-400 text-sm tracking-tight"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
      <span className="text-white/20">{"★".repeat(5 - count)}</span>
    </span>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="w-64 sm:w-72 flex-shrink-0 bg-[#f5f5f0] rounded-2xl p-5 shadow-xl mx-3">
      {/* Avatar + title side by side */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 flex-shrink-0">
          {t.image ? (
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs font-bold text-gray-600">
              {t.avatarBg}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">
            {t.name}
          </p>
          <p className="text-xs text-gray-500 leading-tight">{t.role}</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-tight mb-2 line-clamp-2">
        {t.quote}
      </p>
      <Stars count={t.rating} />
    </div>
  );
}

function TestimonialMarquee({ items, direction = "left", duration = 38 }) {
  // Duplicate the row so the loop is seamless
  const row = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } [animation-play-state:running] hover:![animation-play-state:paused] active:![animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {row.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/**
 * OnTimeDeliveryIllustration
 * Replaces the old static, off-theme blob/box SVG.
 * Tells one clear visual story: a clock ticking (on time) while a
 * package arrives with a satisfying bounce + motion trail, then a
 * checkmark confirms delivery. Built with Framer Motion so every
 * piece is genuinely animated, not just dropped on the page.
 */
function OnTimeDeliveryIllustration() {
  return (
    <div className="relative w-[200px] h-[170px] sm:w-[220px] sm:h-[190px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 220 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* soft glow behind the clock */}
        <motion.circle
          cx="150"
          cy="55"
          r="46"
          fill="#ffffff"
          opacity="0.06"
          animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* motion trail behind the package */}
        <motion.g
          animate={{ opacity: [0, 0.5, 0], x: [-14, -4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeOut",
          }}
        >
          <rect
            x="18"
            y="118"
            width="14"
            height="3"
            rx="1.5"
            fill="#fff"
            opacity="0.5"
          />
          <rect
            x="14"
            y="130"
            width="20"
            height="3"
            rx="1.5"
            fill="#fff"
            opacity="0.35"
          />
          <rect
            x="20"
            y="142"
            width="12"
            height="3"
            rx="1.5"
            fill="#fff"
            opacity="0.25"
          />
        </motion.g>

        {/* ---- Package (bounces in + idles) ---- */}
        <motion.g
          initial={{ x: -10, y: -6 }}
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          <rect x="36" y="110" width="64" height="54" rx="6" fill="#7a342b" />
          <rect
            x="36"
            y="110"
            width="64"
            height="54"
            rx="6"
            fill="#ffffff"
            opacity="0.06"
          />
          {/* box flaps / top */}
          <path d="M36 122 L68 108 L100 122 L68 134 Z" fill="#9c4a3e" />
          <path d="M36 122 L68 134 L68 164 L36 152 Z" fill="#86392f" />
          <path d="M100 122 L68 134 L68 164 L100 152 Z" fill="#6f2f27" />
          {/* tape / ribbon */}
          <rect
            x="64"
            y="108"
            width="8"
            height="56"
            fill="#f4c64f"
            opacity="0.9"
          />
          <rect
            x="36"
            y="133"
            width="64"
            height="6"
            fill="#f4c64f"
            opacity="0.85"
          />
        </motion.g>

        {/* ---- Clock face (the "on time" promise) ---- */}
        <g>
          <circle cx="150" cy="55" r="40" fill="#ffffff" opacity="0.97" />
          <circle cx="150" cy="55" r="40" stroke="#7a342b" strokeWidth="3" />
          {/* hour ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (deg) => (
              <line
                key={deg}
                x1="150"
                y1="20"
                x2="150"
                y2={deg % 90 === 0 ? "26" : "24"}
                stroke="#c0392b"
                strokeWidth={deg % 90 === 0 ? 2.5 : 1.5}
                transform={`rotate(${deg} 150 55)`}
              />
            ),
          )}
          {/* hour hand — rotation lives on the <g> wrapper, not the line itself.
              IMPORTANT: the rotation pivot must be set via the SVG
              transform-origin ATTRIBUTE (transform-origin="150px 55px"),
              not the React style prop (style={{ transformOrigin: ... }}).
              Framer Motion writes its own inline transform-origin/transform-box
              onto the style object every frame, which silently overrides a
              style-based origin and re-centers rotation on the wrong point
              (verified by inspecting the live computed transform — the style
              prop got clobbered to 50% 50%, while the attribute survives). */}
          <motion.g
            transform-origin="150px 55px"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <line
              x1="150"
              y1="55"
              x2="150"
              y2="34"
              stroke="#3a2420"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </motion.g>
          {/* minute hand */}
          <motion.g
            transform-origin="150px 55px"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <line
              x1="150"
              y1="55"
              x2="150"
              y2="26"
              stroke="#3a2420"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.g>
          {/* second hand — quick sweep for energy */}
          <motion.g
            transform-origin="150px 55px"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <line
              x1="150"
              y1="55"
              x2="150"
              y2="22"
              stroke="#c0392b"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.g>
          <circle cx="150" cy="55" r="3.5" fill="#c0392b" />
        </g>

        {/* ---- Checkmark badge: pops once package "arrives" ---- */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.15, 1], opacity: [0, 1, 1] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 1.8,
            ease: "easeOut",
          }}
          style={{ originX: "108px", originY: "112px" }}
        >
          <circle cx="108" cy="112" r="14" fill="#27ae60" />
          <circle cx="108" cy="112" r="14" fill="#ffffff" opacity="0.08" />
          <path
            d="M101 112 L106 117 L116 106"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}

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
          <OnTimeDeliveryIllustration />
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
        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight mb-8 md:mb-10">
          Clients Trust JavTech to Grow Their Business
        </h2>

        <div className="-mx-5 md:-mx-16 space-y-5">
          <TestimonialMarquee
            items={testimonials}
            direction="left"
            duration={42}
          />
          <TestimonialMarquee
            items={testimonials.slice().reverse()}
            direction="right"
            duration={48}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 pt-8 mt-10">
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
      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>

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

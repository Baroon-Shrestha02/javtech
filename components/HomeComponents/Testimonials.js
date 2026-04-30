"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const testimonials = [
  {
    quote:
      "JavTech built us a clean, fast eCommerce platform that finally gave GSonic a proper digital presence. Sales have been consistently growing since launch and our customers love the experience.",
    name: "GSonic Team",
    role: "eCommerce Platform",
    company: "GSonic",
    initials: "GS",
    image: "/clients/gsonic.png",
  },
  {
    quote:
      "Our NGO needed a reliable app to organize events, manage volunteers, and run charity drives — JavTech delivered exactly that. The app has helped us reach more people and make a bigger impact.",
    name: "H4H Team",
    role: "NGO Mobile App",
    company: "Humans for Humanity",
    initials: "HH",
    image: "/clients/HFH.png",
  },
  {
    quote:
      "JavTech understood what an education consultancy needs — trust, clarity, and a professional look. The website they built for us has significantly improved how students and parents perceive us.",
    name: "Abhiyan Team",
    role: "Education Consultancy",
    company: "Abhiyan Education Consultancy",
    initials: "AE",
    image: "/abhiyan.jpeg",
  },
];

const gradients = [
  "linear-gradient(145deg, #7f0000, #b71c1c)",
  "linear-gradient(145deg, #8b0000, #c62828)",
  "linear-gradient(145deg, #a71010, #d32f2f)",
  "linear-gradient(145deg, #b71c1c, #e53935)",
  "linear-gradient(145deg, #c62828, #ef5350)",
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.95,
    rotateY: dir > 0 ? 8 : -8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.95,
    rotateY: dir > 0 ? -8 : 8,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  const total = testimonials.length;
  const t = testimonials[current];

  const navigate = (dir) => {
    setAutoplay(false);
    setCurrent(([prev]) => [(prev + dir + total) % total, dir]);
  };

  const goTo = (idx) => {
    setAutoplay(false);
    setCurrent(([prev]) => [idx, idx > prev ? 1 : -1]);
  };

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % total, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, [autoplay, total]);

  return (
    <section className="pb-20">
      <section className="px-4 md:px-10">
        <SectionHeader
          title="Testimonials"
          header="What Our Clients Say"
          subheader="Real feedback from businesses we've helped build, grow, and launch."
        />
      </section>

      <section className="px-4 md:px-10 lg:px-16 overflow-hidden">
        {/* Counter */}
        <div className="flex justify-end mb-6">
          <span className="text-sm text-gray-400 tabular-nums tracking-widest">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[420px]">
          {/* Image side */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                style={{ background: gradients[current % gradients.length] }}
              >
                {/* Client image */}
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.company}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.07]" />
                <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-white/[0.05]" />

                {/* Bottom black overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name / company pinned to bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 z-10 p-5 flex items-end gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-white/60 text-xs">{t.role}</p>
                    <p className="text-white/40 text-xs">{t.company}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-between h-full">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <span
                  className="text-[100px] sm:text-[130px] leading-none font-black select-none block -mb-8"
                  style={{ color: "rgba(183,28,28,0.12)" }}
                >
                  &quot;
                </span>

                <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-gray-900">
                  {t.quote}
                </p>

                <div className="pt-2">
                  <p className="font-bold text-base text-gray-900">{t.name}</p>
                  <p
                    className="text-sm font-semibold mt-0.5"
                    style={{ color: "#c62828" }}
                  >
                    {t.role}
                  </p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-2 flex-1 flex-wrap">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    animate={{
                      width: i === current ? 28 : 10,
                      backgroundColor: i === current ? "#b71c1c" : "#f5c6c6",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2.5 rounded-full border-none cursor-pointer p-0"
                  />
                ))}
              </div>

              <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg border-none cursor-pointer flex-shrink-0"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </motion.button>

              <motion.button
                onClick={() => navigate(1)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 rounded-full text-white flex items-center justify-center border-none cursor-pointer flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #e53935, #ff7043)",
                  boxShadow: "0 4px 18px rgba(229,57,53,0.45)",
                }}
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

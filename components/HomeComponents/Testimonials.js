"use client";

import React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const testimonials = [
  {
    quote:
      "They skillfully turned our heritage into a functional, elegant system. It perfectly showcases our singing bowls, craftsmanship, and values while carefully addressing every requirement.",
    name: "Norbu Lama",
    role: "Managing Director",
    company: "Singing Bowl Village Nepal",
    initials: "NL",
  },
  {
    quote:
      "Working with the team was a seamless experience. They understood our vision immediately and delivered a product that exceeded our expectations on every front.",
    name: "Priya Sharma",
    role: "CEO & Founder",
    company: "TechVentures Pvt. Ltd.",
    initials: "PS",
  },
  {
    quote:
      "The attention to detail and the quality of the final product was outstanding. Our platform has seen a 3x increase in user engagement since the redesign.",
    name: "Rajesh Karmacharya",
    role: "Product Manager",
    company: "FinFlow Solutions",
    initials: "RK",
  },
  {
    quote:
      "Incredibly professional team. They not only built our app but also suggested improvements we hadn't even thought of. Highly recommended for any serious project.",
    name: "Anita Basnet",
    role: "Head of Operations",
    company: "GreenLeaf Logistics",
    initials: "AB",
  },
  {
    quote:
      "From kickoff to delivery, the process was transparent and efficient. The final SaaS platform handles thousands of users effortlessly.",
    name: "Suman Thapa",
    role: "CTO",
    company: "CloudStack Nepal",
    initials: "ST",
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
  enter: (dir) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
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
      setCurrent(([prev, _]) => [(prev + 1) % total, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, [autoplay, total]);
  return (
    <>
      <section className="pb-20">
        <section className="px-4 md:px-10">
          <SectionHeader
            title="Testimonials"
            header="What Our Clients Say"
            subheader="Discover how we’ve helped businesses overcome challenges and achieve lasting success."
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
            {/* ── Image side ── */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: gradients[current % gradients.length] }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.07]" />
                  <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-white/[0.05]" />

                  {/* Initials avatar */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4, ease: "backOut" }}
                    className="relative z-10 flex flex-col items-center gap-4"
                  >
                    <div
                      className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30
                  flex items-center justify-center text-white text-3xl font-bold shadow-xl"
                    >
                      {t.initials}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/70 text-xs">{t.company}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Text side ── */}
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
                  {/* Quote mark */}
                  <span
                    className="text-[100px] sm:text-[130px] leading-none font-black select-none block -mb-8"
                    style={{ color: "rgba(183,28,28,0.12)" }}
                  >
                    &quot;
                  </span>

                  {/* Quote text */}
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-gray-900">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="pt-2">
                    <p className="font-bold text-base text-gray-900">
                      {t.name}
                    </p>
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
                {/* Dots */}
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

                {/* Prev */}
                <motion.button
                  onClick={() => navigate(-1)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center
                shadow-lg border-none cursor-pointer flex-shrink-0"
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                </motion.button>

                {/* Next */}
                <motion.button
                  onClick={() => navigate(1)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-12 h-12 rounded-full text-white flex items-center justify-center
                border-none cursor-pointer flex-shrink-0"
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
    </>
  );
}

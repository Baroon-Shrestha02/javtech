"use client";

import { motion } from "framer-motion";

const whyCards = [
  {
    num: "01",
    title: "Fixed scope, no surprises",
    desc: "Every engagement starts with a clear brief. You know exactly what you're getting before work begins — no hidden fees, no scope creep.",
    numColor: "text-emerald-700",
    numBg: "bg-emerald-50",
  },
  {
    num: "02",
    title: "Fast, iterative delivery",
    desc: "We move in short cycles so you see real progress quickly — not months of silence followed by a big reveal.",
    numColor: "text-violet-700",
    numBg: "bg-violet-50",
  },
  {
    num: "03",
    title: "Owned assets, always",
    desc: "Everything we build is yours — accounts, files, code, and creative. No lock-in, no licensing surprises.",
    numColor: "text-amber-700",
    numBg: "bg-amber-50",
  },
  {
    num: "04",
    title: "Strategy before execution",
    desc: "We research before we design. Every decision is backed by audience data, competitor insight, and market context.",
    numColor: "text-rose-700",
    numBg: "bg-rose-50",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function WhyJavTech() {
  return (
    <div className="container mx-auto my-24 px-6 md:px-0">
      <motion.p
        className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Why JavTech
      </motion.p>

      <motion.h2
        className="mb-4 container text-4xl font-black leading-tight text-gray-950 md:text-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        You&apos;re not buying a package. <br />
        <span className="italic text-accent2">
          You&apos;re getting a partner.
        </span>
      </motion.h2>

      <motion.p
        className="max-w-xl text-base leading-relaxed text-gray-500 md:text-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
      >
        Most agencies sell you a plan and disappear. We stay involved — from
        first strategy call to the day your campaign hits its goals.
      </motion.p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyCards.map((c, i) => (
          <motion.div
            key={c.num}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 3}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${c.numBg} ${c.numColor}`}
            >
              {c.num}
            </div>
            <p className="mb-1.5 text-sm font-bold text-gray-900">{c.title}</p>
            <p className="text-sm leading-relaxed text-gray-500">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

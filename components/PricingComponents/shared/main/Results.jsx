"use client";

import { motion } from "framer-motion";

const results = [
  {
    val: "2–3 wks",
    label: "Avg. time to launch",
    note: "Basic scope, from brief to live",
  },
  { val: "3–5×", label: "Social reach growth", note: "Typical over 3 months" },
  {
    val: "100%",
    label: "Brand consistency",
    note: "Full style system delivered",
  },
  { val: "Most", label: "Clients return", note: "After the first project" },
];

const pills = [
  { text: "Website that actually converts", dot: "bg-emerald-500" },
  { text: "Brand identity people remember", dot: "bg-violet-500" },
  { text: "Content that earns attention", dot: "bg-amber-500" },
  { text: "Ads tied to measurable ROI", dot: "bg-rose-500" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Results() {
  return (
    <div className="container mx-auto my-24">
      <motion.p
        className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Results
      </motion.p>

      <motion.h2
        className="mb-4 max-w-2xl text-4xl font-black leading-tight text-gray-950 md:text-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        What working with us{" "}
        <span className="italic text-amber-600">actually looks like</span>
      </motion.h2>

      <motion.p
        className="mb-8 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
      >
        Across clients in Nepal and beyond — these are the kinds of outcomes we
        aim for from the very first engagement.
      </motion.p>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r, i) => (
          <motion.div
            key={r.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 3}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              {r.label}
            </p>
            <p className="mb-1 text-4xl font-black leading-none text-gray-950">
              {r.val}
            </p>
            <p className="text-xs text-gray-400">{r.note}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {pills.map((p, i) => (
          <motion.div
            key={p.text}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-sm"
          >
            <span className={`h-2 w-2 flex-none rounded-full ${p.dot}`} />
            <span className="text-sm font-semibold text-gray-700">
              {p.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

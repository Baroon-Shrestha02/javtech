"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SectionHeader({ title, header, subheader }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="mx-auto container py-20">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
        {/* Left: eyebrow title */}
        <motion.div
          className="lg:w-48 shrink-0 mb-6 lg:mb-0 lg:pt-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            {title}
          </p>
        </motion.div>

        {/* Right: heading + subheading */}
        <div className="flex-1">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {header}
          </motion.h2>

          {subheader && (
            <motion.p
              className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {subheader}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}

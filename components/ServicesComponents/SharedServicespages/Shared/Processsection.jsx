"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionHeader } from "@/components/SharedComponents/SectionHeader";

export default function ProcessSection({ headerData, steps = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="px-6 md:px-0">
      <div className="container mx-auto">
        {headerData && (
          <SectionHeader
            title={headerData.title}
            header={headerData.header}
            subheader={headerData.subheader}
          />
        )}

        <div>
          {steps.map((step, index) => (
            <ProcessItem
              key={index}
              step={step}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessItem({ step, index, isOpen, onToggle, isInView }) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="container mx-auto grid grid-cols-12 gap-4 md:gap-12 py-4 text-left group"
      >
        <div className="col-span-2 md:col-span-4">
          <span
            className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${
              isOpen ? "text-[#cc0000]" : "text-gray-400"
            }`}
          >
            {step.number}
          </span>
        </div>

        <div className="col-span-10 md:col-span-8">
          <h3
            className={`font-semibold tracking-tight transition-colors duration-300 ${
              isOpen
                ? "text-[#cc0000]"
                : "text-gray-900 group-hover:text-gray-600"
            }`}
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            {step.title}
          </h3>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="grid grid-cols-12 gap-4 md:gap-12 pb-9"
            >
              <div className="col-span-2 md:col-span-4" />

              <div className="col-span-10 md:col-span-8">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 max-w-xl">
                  {step.description}
                </p>

                {step.points?.length > 0 && (
                  <ul className="space-y-2">
                    {step.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2.5 text-sm text-gray-800"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.15 + i * 0.05,
                        }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-900 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

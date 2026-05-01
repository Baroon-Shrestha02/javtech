"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function Accordion({ items, variant = "default" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (variant === "card") {
    return (
      <CardAccordion
        items={items}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
      />
    );
  }

  return (
    <DefaultAccordion
      items={items}
      openIndex={openIndex}
      toggleAccordion={toggleAccordion}
    />
  );
}

/* ─────────────────────────────
   DEFAULT ACCORDION VARIANT
───────────────────────────── */
function DefaultAccordion({ items, openIndex, toggleAccordion }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            className="group border-2 border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{
              boxShadow: isOpen
                ? "0 10px 40px -10px rgba(0,0,0,0.1)"
                : "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-6 text-left flex items-center justify-between group/btn"
            >
              <h3 className="text-base md:text-lg font-semibold leading-snug pr-6 text-gray-900 group-hover/btn:text-[#cc0000] transition-colors duration-200">
                {item.question}
              </h3>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 group-hover/btn:bg-[#cc0000] transition-colors duration-200"
              >
                <ChevronDown
                  className="w-5 h-5 text-gray-600 group-hover/btn:text-white transition-colors duration-200"
                  strokeWidth={2.5}
                />
              </motion.div>
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
                    className="px-6 pb-6 pt-2"
                  >
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────
   CARD ACCORDION VARIANT
───────────────────────────── */
function CardAccordion({ items, openIndex, toggleAccordion }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Gradient border effect */}
            <div
              className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                isOpen
                  ? "bg-gradient-to-r from-[#cc0000] to-[#ff4444] p-[2px]"
                  : "bg-gray-200 p-[1px] group-hover:p-[2px] group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400"
              }`}
            >
              <div className="h-full w-full rounded-2xl bg-white" />
            </div>

            <div className="relative z-10">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4 flex-1">
                  <motion.div
                    animate={{
                      scale: isOpen ? 1 : 0.95,
                      backgroundColor: isOpen ? "#cc0000" : "#f3f4f6",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl mt-1"
                  >
                    <span
                      className={`text-sm font-bold transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  <h3
                    className={`text-base md:text-lg font-bold leading-snug transition-colors duration-300 ${
                      isOpen
                        ? "text-[#cc0000]"
                        : "text-gray-900 group-hover:text-gray-600"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                <motion.div
                  className="flex-shrink-0 mt-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="minus"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Minus
                          className="w-6 h-6 text-[#cc0000]"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus
                          className="w-6 h-6 text-gray-400"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-6 md:px-8 pb-6 pl-[88px] md:pl-[104px]"
                    >
                      <div className="border-l-2 border-gray-200 pl-6">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────
   EXPORT VARIANTS
───────────────────────────── */
export { DefaultAccordion, CardAccordion };

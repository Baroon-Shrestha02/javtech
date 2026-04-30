// Add these imports at the top of your file
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Then replace your section with this:

export function WhatsAppCTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section ref={sectionRef} className="max-w-5xl mx-auto mb-6 mt-12 px-4">
      <motion.div
        className="rounded-2xl bg-[#0f0f12] p-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30 mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Quick chat?
        </motion.p>

        <motion.p
          className="text-sm text-white/70 mb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Prefer talking directly? Message us on WhatsApp and we&apos;ll respond
          fast.
        </motion.p>

        <motion.a
          href="https://wa.me/9779807128557"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#aa0000]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          WhatsApp Us
        </motion.a>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PricingHero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-end rounded-b-4xl text-white overflow-hidden shadow-2xl shadow-slate-500">
      
      {/* Background Image (Next.js optimized) */}
      <Image
        src="/Services/web-design.jpg"
        alt="Pricing Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="container mx-auto pb-16 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          <div className="col-span-3 pl-4">

            <AnimatePresence mode="wait">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Pricing
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                className="text-lg md:text-xl font-light mt-4 max-w-2xl leading-relaxed text-white/90 drop-shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transparent, flexible pricing tailored to fit your brand’s
                unique needs and goals.
              </motion.p>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
}
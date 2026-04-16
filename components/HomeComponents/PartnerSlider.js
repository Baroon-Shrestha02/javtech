"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";

const partners = [
  { name: "HFH", logo: "/HFH.png" },
  { name: "Government", logo: "/gsonic.jpeg" },
  { name: "Realme", logo: "/abhiyan.jpeg" },
  { name: "Gadgetbyte", logo: "/logo.png" },
];

const allPartners = [...partners, ...partners];

export function PartnersSlider() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const isHovered = useRef(false);
  const speed = 1;

  useAnimationFrame(() => {
    if (!trackRef.current || isHovered.current) return;
    xRef.current -= speed;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(xRef.current) >= halfWidth) {
      xRef.current = 0;
    }
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="py-20 bg-white">
      <p className="text-center text-xl md:text-3xl font-bold tracking-widest uppercase mb-10">
        Trusted by Industry Leaders
      </p>

      <div className="relative overflow-hidden">
        {/* Vanishing gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex items-center gap-8 w-max will-change-transform py-4"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center h-20 w-48 shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={250}
                height={100}
                className="object-contain max-h-16 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";

const partners = [
  { name: "HFH", logo: "/HFH.png" },
  { name: "Gsonic", logo: "/gsonic.jpeg" },
  { name: "Abhiyan", logo: "/abhiyan.jpeg" },
  { name: "Javtech", logo: "/logo.png", scale: 1.4 },
  { name: "Vaishno Jewellery", logo: "/projects/vaishno.jpeg", scale: 1.2 },
  { name: "Bajra Books", logo: "/projects/bajra.jpeg" },
  { name: "Sajilo Hardware", logo: "/projects/sajilo.png", scale: 2 },
  { name: "Raunak COnstruction", logo: "/projects/raunak.png" },
  { name: "Cozy Curtains", logo: "/projects/cozy.jpeg" },
  { name: "Ghar Sewa", logo: "/projects/gharsewa.avif" },
  { name: "Jagni Pay", logo: "/projects/jagni-pay.jpeg", scale: 1.4 },
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
              className="flex items-center justify-center h-20 w-40 shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative h-16 w-[140px] flex items-center justify-center"
                style={{ transform: `scale(${partner.scale || 1})` }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="140px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

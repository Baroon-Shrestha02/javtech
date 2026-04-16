"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Entry animation + scroll parallax
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&auto=format&fit=crop&q=80')",
          transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Line Accent */}
        <div
          className="w-24 h-px bg-white/40 mx-auto mb-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        {/* Heading */}
        <h1
          className="font-black leading-[1] tracking-tight mb-6 transition-all duration-1000"
          style={{
            fontSize: "clamp(44px, 7.5vw, 90px)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "200ms",
          }}
        >
          <span className="text-white">Javtech&apos;s</span>
          <br />
          <span className="text-white">Visual Archives</span>
        </h1>
      </div>
    </section>
  );
}

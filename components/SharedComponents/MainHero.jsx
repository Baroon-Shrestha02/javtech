"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/* ─────────────────────────────
   CAROUSEL HERO COMPONENT
───────────────────────────── */
export default function MainHero({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showProgress = true,
  showIndicators = true,
  height = "min-h-[80vh]",
  rounded = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const transitionRef = useRef(false);

  const slideCount = slides.length;

  /* ─────── Navigation ─────── */
  const goToSlide = useCallback(
    (index) => {
      if (transitionRef.current || index === currentIndex) return;
      transitionRef.current = true;

      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setProgress(0);

      setTimeout(() => {
        transitionRef.current = false;
      }, 700);
    },
    [currentIndex],
  );

  const nextSlide = useCallback(() => {
    if (transitionRef.current) return;
    transitionRef.current = true;

    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slideCount);
    setProgress(0);

    setTimeout(() => {
      transitionRef.current = false;
    }, 700);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    if (transitionRef.current) return;
    transitionRef.current = true;

    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
    setProgress(0);

    setTimeout(() => {
      transitionRef.current = false;
    }, 700);
  }, [slideCount]);

  /* ─────── Auto-play ─────── */
  useEffect(() => {
    if (!isPlaying || slideCount <= 1) return;

    const slideTimer = setTimeout(nextSlide, autoPlayInterval);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (autoPlayInterval / 50);
        return prev >= 100 ? 0 : prev + increment;
      });
    }, 50);

    return () => {
      clearTimeout(slideTimer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, currentIndex, autoPlayInterval, nextSlide, slideCount]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section
      className={`relative ${height} flex items-end text-white overflow-hidden ${
        rounded ? "rounded-b-[40px] md:rounded-b-[50px]" : ""
      }`}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.bgImage}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-24 container mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            {currentSlide.eyebrow && (
              <motion.div
                className="mb-4 inline-flex items-center gap-2 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-xs md:text-sm font-extralight uppercase tracking-wider">
                  {currentSlide.eyebrow}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              className="font-black mb-6 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {currentSlide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {currentSlide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

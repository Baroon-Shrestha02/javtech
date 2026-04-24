"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const initialCards = [
  {
    title: "Web Design",
    description:
      "Creating stunning websites for businesses worldwide. Responsive, SEO-optimized, and built to impress.",
    bgImage: "/Services/herosection1.jpg",
    color: "from-blue-600 to-purple-600",
  },
  {
    title: "Digital Marketing",
    description:
      "Our team crafts digital campaigns that convert visitors into loyal customers across all platforms.",
    bgImage: "/Services/one.jpg",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Web & App Development",
    description: "High-quality Web and App Development.",
    bgImage: "/Services/Webdevelopment.jpg",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Branding & Identity",
    description:
      "We create memorable branding systems that define your business presence.",
    bgImage: "/Services/herosection2.jpg",
    color: "from-pink-600 to-rose-600",
  },
];

export default function ServicesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const transitionRef = useRef(false);

  const nextSlide = () => {
    if (transitionRef.current) return;
    transitionRef.current = true;

    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);

    setTimeout(() => {
      transitionRef.current = false;
    }, 600);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const slideInterval = setInterval(nextSlide, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentIndex]);

  const currentCard = initialCards[currentIndex];

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end text-white overflow-hidden rounded-b-[50px]">
      {/* Background */}
      <div className="absolute inset-0">
        {initialCards.map((card, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={card.bgImage}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pb-16 container mx-auto">
        <div key={currentIndex} className="animate-slideUp">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            {currentCard.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {currentCard.description}
          </p>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}

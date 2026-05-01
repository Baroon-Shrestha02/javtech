"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leftCards = [
  {
    image: "/home/digital.jpg",
    title: "Moto Gallery",
    category: "UI Design",
    origin: "right bottom",
  },
  {
    image: "/home/mobile.jpg",
    title: "Floral Studio",
    category: "Branding",
    origin: "right center",
  },
  {
    image: "/home/social.jpg",
    title: "Suzuki Motors",
    category: "Campaign",
    origin: "right top",
  },
];

const rightCards = [
  {
    image: "/home/social.jpg",
    title: "Art Gallery",
    category: "Web Design",
    origin: "left bottom",
  },
  {
    image: "/home/mobile.jpg",
    title: "Food App",
    category: "Mobile UI",
    origin: "left center",
  },
  {
    image: "/home/digital.jpg",
    title: "Realtime Clock",
    category: "Product Design",
    origin: "left top",
  },
];

function ProjectCard({ image, title, category }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      {/* FIX: image now fills the parent properly */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/55 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <p className="text-xs tracking-widest uppercase text-white/70">
          {category}
        </p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export function OurProjects() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const leftCardEls = leftColRef.current.querySelectorAll(".project-card");
      const rightCardEls =
        rightColRef.current.querySelectorAll(".project-card");

      // Master timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Phase 1: cards slide outward + tilt (staggered, bottom card moves most)
      tl.to(
        leftCardEls,
        {
          xPercent: (i) => -(45 - i * 8), // -45, -37, -29
          rotation: (i) => -(18 - i * 6), // -18, -12, -6
          ease: "power2.inOut",
          stagger: 0.08,
        },
        0,
      ).to(
        rightCardEls,
        {
          xPercent: (i) => 45 - i * 8,
          rotation: (i) => 18 - i * 6,
          ease: "power2.inOut",
          stagger: 0.08,
        },
        0,
      );

      // Phase 2: text reveal — clip-path wipe from left to right
      const textEls = textRef.current.querySelectorAll(".reveal");

      gsap.set(textEls, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      });

      tl.to(
        textEls,
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        },
        0.6, // start after cards have begun separating
      );

      // Divider scales from left
      tl.fromTo(
        ".divider-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
        1.0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black my-16"
    >
      <div className="relative h-screen w-[75vw] mx-auto py-10">
        {/* Card grid — explicit height so images fill */}
        <div className="h-full grid grid-cols-2 gap-4">
          {/* LEFT COLUMN */}
          <div ref={leftColRef} className="flex flex-col h-full gap-4">
            {leftCards.map((card, i) => (
              <div
                key={`left-${i}`}
                className="project-card flex-1 min-h-0 rounded-xl overflow-hidden will-change-transform"
                style={{ transformOrigin: card.origin }}
              >
                <ProjectCard {...card} />
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div ref={rightColRef} className="flex flex-col h-full gap-4">
            {rightCards.map((card, i) => (
              <div
                key={`right-${i}`}
                className="project-card flex-1 min-h-0 rounded-xl overflow-hidden will-change-transform"
                style={{ transformOrigin: card.origin }}
              >
                <ProjectCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Center text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 px-4"
        >
          <p className="reveal text-xs tracking-[0.35em] uppercase text-white/60 mb-4">
            Selected Work
          </p>

          <h2
            className="reveal font-black text-center leading-none text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Turning Dreams
          </h2>

          <h2
            className="reveal font-black text-center leading-none text-white/60 mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            to Reality
          </h2>

          <div className="divider-line w-12 h-px bg-white/40 mb-5 origin-left" />

          <p className="reveal text-white/80 text-sm text-center leading-relaxed">
            Solutions crafted with purpose,
          </p>
          <p className="reveal text-white/80 text-sm text-center leading-relaxed">
            designed to make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* Fires once when the element scrolls into view */
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honor reduced-motion / no-IO environments: show immediately
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(el); // animate only once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

/* Wrapper that fades + slides its children up when in view */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg">
      <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
      <p className="mt-2 leading-relaxed text-gray-600">
        {feature.description}
      </p>
      <div className="mt-5 flex flex-1 items-end justify-center overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="max-h-52 w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

export default function WhyWorkWithUs({
  title = "Why Work with Us?",
  highlight = "with Us?",
  subtitle = "Experience a Workplace Where Passion Meets Purpose!",
  accentColor = "#C8262A",
  intro = {
    heading: "Join the Mission to Shape the Future",
    description:
      "Be part of an innovative, mission-driven team focused on equipping the next generation with essential skills that pave the way for success.",
    image: "/career/joinmission.avif",
  },
  features = [
    {
      title: "Drive Growth",
      description:
        "Contribute to national progress by advancing skill development.",
      image: "/career/drivegrowth.avif",
    },
    {
      title: "Unlock Opportunities",
      description: "Grow your own career while opening doors for others.",
      image: "/career/openopportunity.avif",
    },
    {
      title: "Innovative Culture",
      description:
        "Collaborate in a dynamic, creative, and forward-thinking team.",
      image: "/career/innovativeculture.avif",
      wide: true, // spans both columns
    },
  ],
}) {
  // Render the title with the highlighted portion colored
  const renderTitle = () => {
    if (highlight && title.includes(highlight)) {
      const [before, after] = title.split(highlight);
      return (
        <>
          {before}
          <span style={{ color: accentColor }}>{highlight}</span>
          {after}
        </>
      );
    }
    return title;
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            {renderTitle()}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {subtitle}
          </p>
        </Reveal>

        {/* Body */}
        <div className="mt-16 grid grid-cols-1 gap-15 lg:grid-cols-2">
          {/* Left intro column */}
          <Reveal delay={100} className="flex flex-col">
            <h3 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {intro.heading}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              {intro.description}
            </p>
            <div className="mt-10 flex-1">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-full lg:min-h-[320px]">
                <img
                  src={intro.image}
                  alt={intro.heading}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={200 + i * 120}
                className={feature.wide ? "sm:col-span-2" : ""}
              >
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

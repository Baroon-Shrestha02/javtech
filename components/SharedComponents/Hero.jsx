"use client";

import { useEffect, useId } from "react";
import gsap from "gsap";

export default function SplitHero({
  title = "Urbanova",
  tagline = "Built for the streets.\nDesigned to stand out.",
  description = "Urbanova blends urban culture with bold aesthetics — crafted for individuality, confidence, and creative expression.",
  image = "/home/hero.jpg",
  imageAlt = "Hero",
  bg = "bg-[#fafafa]",
}) {
  // Unique ID so multiple instances don't clash
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    const scope = `.split-hero-${uid}`;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Title letters stagger
      gsap.set(`${scope} .sh-letter`, {
        y: "110%",
        opacity: 0,
        rotateX: -50,
      });

      tl.to(`${scope} .sh-letter`, {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.06,
      });

      // 2. Tagline fades up
      tl.fromTo(
        `${scope} .sh-tagline`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.2",
      );

      // 3. Description fades up
      tl.fromTo(
        `${scope} .sh-desc`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4",
      );

      // 4. Image zooms 1.5x → 1x
      tl.fromTo(
        `${scope} .sh-img`,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" },
        "-=0.3",
      );
    });

    return () => ctx.revert();
  }, [uid]);

  // Split tagline into lines for <br/> rendering
  const taglineLines = tagline.split("\n");

  return (
    <div className={`min-h-screen ${bg} flex items-center split-hero-${uid}`}>
      <section className="mx-auto w-full max-w-[1200px] flex flex-col py-10 md:py-14 gap-6 md:gap-8 px-6 md:px-0">
        {/* Title + Text */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Title — letter stagger */}
          <h1
            className="flex overflow-hidden font-black leading-[0.95] tracking-[-0.03em] text-black"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              perspective: "600px",
            }}
          >
            {title.split("").map((char, i) => (
              <span
                key={i}
                className="sh-letter inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Tagline + Description */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
            <p
              className="sh-tagline max-w-[400px] font-bold leading-snug text-black opacity-0"
              style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
            >
              {taglineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < taglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <p
              className="sh-desc max-w-[380px] leading-relaxed text-gray-500 opacity-0"
              style={{ fontSize: "clamp(13px, 1.2vw, 15px)" }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl h-[300px] md:h-[400px]">
          <img
            src={image}
            alt={imageAlt}
            className="sh-img w-full h-full object-cover opacity-0"
          />
        </div>
      </section>
    </div>
  );
}

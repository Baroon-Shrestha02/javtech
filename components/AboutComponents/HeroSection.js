"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const words = ["Convert", "Inspire", "Grow", "Succeed"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen bg-[#0f0f12] text-white flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services/DigitalMarketing.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12]/85 via-[#0f0f12]/60 to-[#0f0f12]/90" />
      </div>

      {/* Top text area */}
      <div className="relative z-10 flex flex-1 items-end px-6 pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <h1
            className="font-bold leading-[1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(44px, 7.5vw, 110px)" }}
          >
            Experiences That
            <br />
            Make You{" "}
            <span>
              {displayed}
              <span
                className="ml-0.5 inline-block w-px animate-[blink_1s_infinite] bg-white/50 align-middle"
                style={{ height: "0.85em" }}
              />
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom sub-content section */}
      <div className="relative z-10 px-6 pb-14 pt-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            We design and develop high-performing websites, mobile apps, and
            digital marketing strategies that help ambitious businesses grow.
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/our-works"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f0f12] transition-opacity hover:opacity-80"
            >
              Explore work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";

const images = [
  "/javtech6.jpeg",
  "/javtech.jpeg",
  "/javtech1.jpeg",
  "/javtech2.jpeg",
  "/javtech3.jpeg",
  "/javtech4.jpeg",
];

// Bento grid spans: 6 images across a 4-col grid
// [wide, tall-wide, normal, normal, wide, normal]
const bentoConfig = [
  { colSpan: "col-span-2", rowSpan: "row-span-2" }, // 0 — big hero
  { colSpan: "col-span-2", rowSpan: "row-span-1" }, // 1 — wide top-right
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 2 — small
  { colSpan: "col-span-1", rowSpan: "row-span-1" }, // 3 — small
  { colSpan: "col-span-2", rowSpan: "row-span-1" }, // 4 — wide bottom
  { colSpan: "col-span-2", rowSpan: "row-span-1" }, // 5 — wide bottom
];

export default function Photo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll on modal open
  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Keyboard navigation
  const handleKey = useCallback(
    (e) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowRight")
        setSelectedImage((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft")
        setSelectedImage((p) => (p - 1 + images.length) % images.length);
      if (e.key === "Escape") setSelectedImage(null);
    },
    [selectedImage],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Ambient light blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className="mb-14 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-4">Our Work</p>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
                Gallery
              </h2>
              <p className="hidden sm:block text-sm  max-w-xs leading-relaxed pb-1">
                A curated collection of our finest creative moments and project
                captures.
              </p>
            </div>
            {/* Thin rule */}
            <div className="mt-8 h-px bg-gradient-to-r from-black/10 via-black/20 to-transparent" />
          </div>

          {/* Bento Grid */}
          <div
            className="grid grid-cols-4 gap-3 auto-rows-[220px] transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "150ms",
            }}
          >
            {images.map((img, i) => {
              const { colSpan, rowSpan } = bentoConfig[i];
              return (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`${colSpan} ${rowSpan} relative overflow-hidden rounded-xl cursor-pointer group bg-white/5`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt={`gallery-${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  />

                  {/* Dark vignette always */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Number tag */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Expand icon — appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm bg-white/10 scale-75 group-hover:scale-100 transition-transform duration-400">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom shine line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div
            className="mt-12 flex justify-center transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "500ms" }}
          >
            <button className="group flex items-center gap-3 px-8 py-3.5 border border-white/10 rounded-full text-sm text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/5">
              View All Photos
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          style={{ animation: "fadeIn 0.25s ease-out" }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-50">
            <span className="font-mono text-xs tracking-widest text-white/30">
              {String(selectedImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setSelectedImage(null)}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full"
            style={{ animation: "scaleIn 0.35s cubic-bezier(0.16,1,0.3,1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src={images[selectedImage]}
                alt={`gallery-${selectedImage + 1}`}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (p) => (p - 1 + images.length) % images.length,
                );
              }}
              className="absolute left-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((p) => (p + 1) % images.length);
              }}
              className="absolute right-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 hover:bg-white/10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Keyboard hints */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-5 text-white/20 text-xs font-mono tracking-widest">
            <span>← PREV</span>
            <span className="text-white/10">·</span>
            <span>NEXT →</span>
            <span className="text-white/10">·</span>
            <span>ESC CLOSE</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}

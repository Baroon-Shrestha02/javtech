"use client";

import { useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <div
      className="relative w-full cursor-pointer overflow-hidden mt-12"
      style={{ height: "80vh" }}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src="/vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Pause / play indicator — fades in briefly on toggle */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: paused ? 1 : 0, background: "rgba(0,0,0,0.35)" }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          {/* Play icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
    </div>
  );
}

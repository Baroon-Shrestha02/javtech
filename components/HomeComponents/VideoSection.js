"use client";

export default function VideoSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Video */}
      <video
        src="/video.MOV"
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(80,0,0,0.55) 60%, rgba(120,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center
        min-h-[100svh] px-4 md:px-10 text-center text-white"
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-300 font-semibold mb-4">
          Your Technology Partner
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
          leading-tight tracking-tight max-w-4xl mb-6 drop-shadow-lg"
        >
          We Build Digital{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(90deg, #ff6b6b, #ff8a80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experiences
          </span>{" "}
          That Matter
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-xl leading-relaxed mb-10">
          From concept to launch — we design and develop intuitive software,
          apps, and platforms your users will love.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="px-8 py-3.5 rounded-full font-bold text-white text-sm
              border-none cursor-pointer tracking-wide transition-all duration-200
              hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(229,57,53,0.5)]"
            style={{
              background: "linear-gradient(135deg, #b71c1c 0%, #e53935 100%)",
              boxShadow: "0 4px 18px rgba(183,28,28,0.4)",
            }}
          >
            Start a Project
          </button>
          <button
            className="px-8 py-3.5 rounded-full font-semibold text-white text-sm
              border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer
              tracking-wide transition-all duration-200 hover:bg-white/20
              hover:-translate-y-1"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// export default function VideoSection() {
//   return (
//     <section
//       className="relative w-full overflow-hidden mt-20"
//       style={{ height: "90vh" }}
//     >
//       <video
//         src="/video.mp4"
//         loop
//         muted
//         autoPlay
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//     </section>
//   );
// }

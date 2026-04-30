"use client";

export default function HeroSection({
  title = "Default Title",
  image = "/home/digital.jpg",
}) {
  return (
    <section className="relative min-h-[65vh] bg-[#0f0f12] text-white flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12]/85 via-[#0f0f12]/60 to-[#0f0f12]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-end px-6 pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <h1
            className="font-bold leading-[1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(34px, 7.5vw, 75px)" }}
          >
            {title}
          </h1>
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

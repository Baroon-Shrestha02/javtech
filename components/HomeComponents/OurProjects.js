"use client";

import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsService from "@/lib/api/services/projects";

// ─── Fallbacks ────────────────────────────────────────────────────────────────
const FALLBACK_PROJECTS = [
  { image: "/home/digital.jpg", category: "Brand Strategy", num: "01" },
  { image: "/home/mobile.jpg", category: "Digital Experience", num: "02" },
  { image: "/home/social.jpg", category: "Motion Design", num: "03" },
  { image: "/home/social.jpg", category: "Mobile App", num: "04" },
  { image: "/home/mobile.jpg", category: "Web Platform", num: "05" },
  { image: "/home/digital.jpg", category: "Social Campaign", num: "06" },
];

const LEFT_ORIGINS = ["right bottom", "right center", "right top"];
const RIGHT_ORIGINS = ["left bottom", "left center", "left top"];

function pick(list, idx) {
  return list[idx % list.length];
}

function buildColumns(projects) {
  if (!projects || projects.length === 0) {
    return {
      left: FALLBACK_PROJECTS.slice(0, 3).map((p, i) => ({
        ...p,
        origin: LEFT_ORIGINS[i],
      })),
      right: FALLBACK_PROJECTS.slice(3, 6).map((p, i) => ({
        ...p,
        origin: RIGHT_ORIGINS[i],
      })),
    };
  }

  const six = Array.from({ length: 6 }, (_, i) => pick(projects, i));

  const toCard = (p, i, origins) => ({
    image: p.thumbnail || p.image || "",
    category: Array.isArray(p.category)
      ? p.category[0] || ""
      : p.category || "",
    num: String(i + 1).padStart(2, "0"),
    origin: origins[i],
  });

  return {
    left: six.slice(0, 3).map((p, i) => toCard(p, i, LEFT_ORIGINS)),
    right: six.slice(3, 6).map((p, i) => toCard(p, i + 3, RIGHT_ORIGINS)),
  };
}

// ─── Single card ─────────────────────────────────────────────────────────────
function ProjectCard({ image, category, num, origin, flex }) {
  return (
    <div className="project-card" style={{ transformOrigin: origin, flex }}>
      {/* image */}
      <div className="card-inner">
        <img src={image} alt={category} className="card-img" />
        <div className="card-overlay" />
      </div>

      {/* index */}
      <span className="card-num">{num}</span>

      {/* category tag */}
      <span className="card-tag">{category}</span>

      {/* subtle border */}
      <div className="card-border" />

      <style>{`
        .project-card {
          position: relative;
          min-height: 0;
          border-radius: 14px;
          overflow: hidden;
          will-change: transform;
        }
        .card-inner {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          overflow: hidden;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-card:hover .card-img {
          transform: scale(1.04);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(10, 10, 10, 0) 40%,
            rgba(10, 10, 10, 0.65) 100%
          );
          pointer-events: none;
        }
        .card-num {
          position: absolute;
          top: 14px;
          left: 16px;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: rgba(245, 242, 237, 0.3);
          font-weight: 500;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.4s 0.1s;
        }
        .card-tag {
          position: absolute;
          bottom: 14px;
          left: 16px;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(184, 149, 106, 0.85);
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s 0.05s, transform 0.4s 0.05s;
        }
        .project-card.is-revealed .card-num { opacity: 1; }
        .project-card.is-revealed .card-tag { opacity: 1; transform: translateY(0); }
        .card-border {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          border: 1px solid rgba(245, 242, 237, 0.07);
          pointer-events: none;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function OurProjects() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const textRef = useRef(null);
  const progRef = useRef(null);

  const [{ left: leftCards, right: rightCards }, setColumns] = useState(() =>
    buildColumns(null),
  );

  // Fetch real projects
  useEffect(() => {
    let active = true;
    projectsService
      .list()
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data)
          ? data
          : (data?.data ?? data?.projects ?? []);
        setColumns(buildColumns(list));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // GSAP scroll animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const leftEls = leftColRef.current.querySelectorAll(".project-card");
      const rightEls = rightColRef.current.querySelectorAll(".project-card");
      const text = textRef.current;

      const eyebrow = text.querySelector(".t-eyebrow");
      const hl1 = text.querySelector(".t-h1");
      const hl2 = text.querySelector(".t-h2");
      const rule = text.querySelector(".t-rule");
      const subs = text.querySelectorAll(".t-sub");
      const cta = text.querySelector(".t-cta");

      // Initial states
      gsap.set([hl1, hl2], {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        scale: 0.96,
      });
      gsap.set([eyebrow, ...subs, cta], { opacity: 0, y: 16 });
      gsap.set(rule, { opacity: 0, scaleX: 0 });

      // Master scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1.3,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progRef.current) {
              progRef.current.style.width = `${self.progress * 100}%`;
            }
            // reveal card meta once columns are spread
            const revealed = self.progress > 0.55;
            [...leftEls, ...rightEls].forEach((c) =>
              c.classList.toggle("is-revealed", revealed),
            );
          },
        },
      });

      // Phase 1 — columns fan outward with per-card depth
      tl.to(
        leftEls,
        {
          xPercent: (i) => -(52 - i * 10), // −52, −42, −32
          rotation: (i) => -(16 - i * 5), // −16, −11, −6
          scale: (i) => 1 - i * 0.015,
          ease: "power2.inOut",
          stagger: 0.06,
        },
        0,
      ).to(
        rightEls,
        {
          xPercent: (i) => 52 - i * 10,
          rotation: (i) => 16 - i * 5,
          scale: (i) => 1 - i * 0.015,
          ease: "power2.inOut",
          stagger: 0.06,
        },
        0,
      );

      // Phase 2 — text reveal with blur-focus effect
      tl.to(
        eyebrow,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.45,
      );

      tl.to(
        hl1,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.6,
      );

      tl.to(
        hl2,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.72,
      );

      tl.to(
        rule,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.65,
          ease: "power2.out",
          transformOrigin: "left center",
        },
        0.9,
      );

      tl.to(
        [...subs],
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.1,
        },
        1.05,
      );

      tl.to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        1.2,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Flex ratios give the columns a balanced but varied height rhythm
  const leftFlex = [1.15, 0.85, 1];
  const rightFlex = [1, 0.85, 1.15];

  return (
    <section
      ref={sectionRef}
      className="projects-section my-16"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Grain texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 30,
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Scroll progress bar */}
      <div
        ref={progRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          width: 0,
          background: "rgba(184,149,106,0.55)",
          zIndex: 25,
          transition: "width 0.05s linear",
        }}
      />

      {/* Card grid */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "min(78vw, 1100px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          padding: "32px 0",
        }}
      >
        {/* Left column */}
        <div
          ref={leftColRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100%",
          }}
        >
          {leftCards.map((card, i) => (
            <ProjectCard key={`L${i}`} {...card} flex={leftFlex[i]} />
          ))}
        </div>

        {/* Right column */}
        <div
          ref={rightColRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100%",
          }}
        >
          {rightCards.map((card, i) => (
            <ProjectCard key={`R${i}`} {...card} flex={rightFlex[i]} />
          ))}
        </div>
      </div>

      {/* Center overlay text */}
      <div
        ref={textRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {/* Eyebrow */}
        <p
          className="t-eyebrow"
          style={{
            fontSize: 10,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "rgba(184,149,106,0.75)",
            marginBottom: 22,
            fontWeight: 500,
          }}
        >
          Selected Work
        </p>

        {/* Main headlines — blur-focus reveal */}
        <h2
          className="t-h1"
          style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "#f5f2ed",
            willChange: "transform, opacity, filter",
          }}
        >
          Turning Dreams
        </h2>

        <h2
          className="t-h2"
          style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            fontWeight: 900,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            color: "rgba(245,242,237,0.28)",
            marginBottom: 0,
            willChange: "transform, opacity, filter",
          }}
        >
          to Reality
        </h2>

        {/* Gold rule */}
        <div
          className="t-rule"
          style={{
            width: 40,
            height: 1,
            background: "rgba(184,149,106,0.55)",
            margin: "26px auto 22px",
            transformOrigin: "left center",
          }}
        />

        {/* Body copy */}
        <p className="t-sub" style={subStyle}>
          Solutions crafted with purpose,
        </p>
        <p className="t-sub" style={subStyle}>
          designed to make an impact.
        </p>

        {/* CTA pill — pointer-events re-enabled */}
        <a
          className="t-cta"
          href="/our-works"
          style={{
            pointerEvents: "auto",
            marginTop: 28,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 22px",
            borderRadius: 100,
            border: "1px solid rgba(184,149,106,0.4)",
            color: "rgba(184,149,106,0.9)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          View all projects
          <span
            style={{ display: "inline-block", transition: "transform 0.3s" }}
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}

const subStyle = {
  fontSize: 13,
  color: "rgba(245,242,237,0.5)",
  textAlign: "center",
  lineHeight: 1.75,
  letterSpacing: "0.04em",
};

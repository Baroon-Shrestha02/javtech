"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * RevealHeading — reusable scroll-reveal heading component
 *
 * Props:
 *   lines: Array of { text: string, dir: "left" | "right" }
 *     dir "left"  → starts at x: +25px, slides left-to-right into place (line 1 style)
 *     dir "right" → starts at x: -25px, slides right-to-left into place (line 2 style)
 *   color?: string  — bright text color (default: "#d6f0e8")
 *   ghostOpacity?: number — dim ghost opacity (default: 0.15)
 *   fontSize?: string — CSS font-size (default: "clamp(72px, 13vw, 180px)")
 *   className?: string — extra classes on the section wrapper
 *   scrollStart?: number — scrollYProgress value where first line starts (default: 0.05)
 *   stagger?: number — scroll gap between each line's animation window (default: 0.07)
 */
export function RevealHeading({
  lines = [],
  color = "#d6f0e8",
  ghostOpacity = 0.15,
  fontSize = "clamp(62px, 13vw, 140px)",
  className = "",
  scrollStart = 0.05,
  stagger = 0.07,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => {
        const windowStart = scrollStart + i * stagger;
        const windowEnd = windowStart + 0.25;

        return (
          <RevealLine
            key={i}
            text={line.text}
            dir={line.dir}
            smooth={smooth}
            windowStart={windowStart}
            windowEnd={windowEnd}
            color={color}
            ghostOpacity={ghostOpacity}
            fontSize={fontSize}
          />
        );
      })}
      <h2 className="sr-only">{lines.map((l) => l.text).join(" ")}</h2>
    </div>
  );
}

function RevealLine({
  text,
  dir,
  smooth,
  windowStart,
  windowEnd,
  color,
  ghostOpacity,
  fontSize,
}) {
  // Clip wipe direction
  // dir "left"  → text starts dimmed on left, bright sweeps left→right (normal wipe)
  // dir "right" → text starts dimmed on right, bright sweeps right→left
  const clipFrom = dir === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
  const clipTo = "inset(0 0% 0 0)";

  // Slide direction
  // dir "left"  → starts offset +25px (right), slides left into 0
  // dir "right" → starts offset -25px (left), slides right into 0
  const xFrom = dir === "left" ? "25px" : "-25px";

  const wipe = useTransform(
    smooth,
    [windowStart, windowEnd],
    [clipFrom, clipTo],
  );
  const x = useTransform(smooth, [windowStart, windowEnd], [xFrom, "0px"]);
  const yGhost = useTransform(
    smooth,
    [windowStart, windowEnd],
    ["30px", "0px"],
  );

  const style = {
    fontSize,
    fontWeight: 900,
    lineHeight: 0.92,
    letterSpacing: "-0.03em",
    fontFamily: "Georgia, serif",
    display: "block",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ overflow: "hidden", paddingBottom: "0.05em" }}>
      {/* Both ghost + bright ride the same x+y slide */}
      <motion.div style={{ x, y: yGhost }} className="relative">
        {/* Ghost */}
        <span
          style={{
            ...style,
            color: `rgba(${hexToRgb(color)}, ${ghostOpacity})`,
          }}
          aria-hidden
        >
          {text}
        </span>
        {/* Bright wipe */}
        <motion.span
          style={{
            ...style,
            color,
            clipPath: wipe,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          aria-hidden
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  );
}

// Helper — convert hex to "r, g, b" string for rgba()
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// ─────────────────────────────────────────────
// USAGE EXAMPLES
// ─────────────────────────────────────────────
//
// 2 lines (WHO WE ARE):
// <RevealHeading
//   lines={[
//     { text: "WHO",    dir: "left"  },
//     { text: "WE ARE", dir: "right" },
//   ]}
// />
//
// 3 lines:
// <RevealHeading
//   lines={[
//     { text: "RECENT", dir: "left"  },
//     { text: "WORK",   dir: "right" },
//     { text: "2025",   dir: "left"  },
//   ]}
//   stagger={0.07}
// />
//
// 4 lines with custom color + smaller font:
// <RevealHeading
//   lines={[
//     { text: "WHAT",  dir: "left"  },
//     { text: "WE",    dir: "right" },
//     { text: "HAVE",  dir: "left"  },
//     { text: "BUILT", dir: "right" },
//   ]}
//   color="#ffffff"
//   fontSize="clamp(48px, 9vw, 130px)"
//   stagger={0.06}
// />
//
// Props reference:
//   lines        — array of { text, dir: "left"|"right" }
//   color        — bright text color  (default "#d6f0e8")
//   ghostOpacity — dim layer opacity  (default 0.15)
//   fontSize     — CSS clamp string   (default "clamp(72px, 13vw, 180px)")
//   scrollStart  — when first line begins animating (0–1, default 0.05)
//   stagger      — scroll gap between each line     (default 0.07)
//   className    — classes on the wrapper div

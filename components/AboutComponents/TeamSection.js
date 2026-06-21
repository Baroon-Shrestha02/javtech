"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import teamService from "@/lib/api/services/team";

/* ---------------------------------------------
   Inline icons
---------------------------------------------- */
function IconMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconGlobe(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconX(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ---------------------------------------------
   Shared animation
---------------------------------------------- */
const slideIn = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/* ---------------------------------------------
   Hover capability
---------------------------------------------- */
function useCanHover() {
  const [can, setCan] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCan(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  return can;
}

/* ---------------------------------------------
   Image with fallback
---------------------------------------------- */
function MemberImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initials = alt
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 3);

    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-gray-100">
        <span className="text-3xl font-bold text-red-600">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ---------------------------------------------
   Leadership
---------------------------------------------- */
function LeadershipGrid({ leaders }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {leaders.map((leader, index) => (
        <motion.article
          key={leader.id}
          className="group"
          variants={slideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
            <MemberImage
              src={leader.img}
              alt={leader.name}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

            <span className="absolute bottom-4 left-5 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
              {leader.role}
            </span>
          </div>

          <div className="pt-5 px-1">
            <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>

            <div className="mt-2 h-0.5 w-10 bg-red-600 rounded-full transition-all duration-500 group-hover:w-20" />

            {leader.quote && (
              <p className="mt-4 text-sm italic text-gray-500 leading-relaxed">
                &ldquo;{leader.quote}&rdquo;
              </p>
            )}

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {leader.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/* ---------------------------------------------
   Social rows
---------------------------------------------- */
function SocialRow({ member, dark = false }) {
  const links = [
    member.email && {
      icon: IconMail,
      label: "Email",
      href: `mailto:${member.email}`,
    },
    member.github && {
      icon: IconGithub,
      label: "GitHub",
      href: member.github,
    },
    member.linkedin && {
      icon: IconLinkedin,
      label: "LinkedIn",
      href: member.linkedin,
    },
    member.website && {
      icon: IconGlobe,
      label: "Website",
      href: member.website,
    },
    member.phone && {
      icon: IconPhone,
      label: "Phone",
      href: `tel:${member.phone}`,
    },
  ].filter(Boolean);

  if (links.length === 0) {
    return (
      <p className={dark ? "text-white/50 text-sm" : "text-gray-400 text-sm"}>
        Social links not available
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.map(({ icon: Icon, label, href }) => {
        const isExternal =
          !href.startsWith("mailto:") && !href.startsWith("tel:");

        const base = dark
          ? "border-white/25 text-white/85 hover:bg-white hover:text-neutral-900 hover:border-white"
          : "border-gray-200 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600";

        return (
          <a
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${base}`}
          >
            <Icon className="w-[18px] h-[18px]" />
          </a>
        );
      })}
    </div>
  );
}

function CardSocialRow({ member }) {
  const links = [
    member.github && {
      icon: IconGithub,
      label: "GitHub",
      href: member.github,
    },
    member.linkedin && {
      icon: IconLinkedin,
      label: "LinkedIn",
      href: member.linkedin,
    },
    member.website && {
      icon: IconGlobe,
      label: "Website",
      href: member.website,
    },
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {links.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

/* ---------------------------------------------
   Team Card
---------------------------------------------- */
const BASE_H = 300;
const OPEN_H = 384;

function TeamCard({ member, offset, canHover, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const active = canHover && hovered;

  return (
    <div
      className="flex-shrink-0 w-[180px] sm:w-[220px]"
      style={{ marginTop: offset }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(member)}
        onHoverStart={() => canHover && setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        aria-label={`Open ${member.name} details`}
        initial={false}
        animate={{ height: active ? OPEN_H : BASE_H }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        whileTap={{ scale: 0.97 }}
        className="relative block w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        style={{ height: BASE_H }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MemberImage
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-neutral-900 p-5 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                className="w-24 h-24 rounded-full overflow-hidden ring-1 ring-white/15 mt-1"
              >
                <MemberImage
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <h4 className="mt-4 text-white text-lg font-bold">
                {member.name}
              </h4>

              <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/40 leading-relaxed">
                / {member.role} /
              </p>

              <p className="mt-3 text-xs text-white/70 leading-relaxed line-clamp-4">
                {member.description}
              </p>

              <CardSocialRow member={member} />

              <span className="mt-auto text-[10px] tracking-[0.2em] uppercase text-red-400">
                View profile
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

/* ---------------------------------------------
   Modal
---------------------------------------------- */
const MODAL_VARIANT = "split";

function SkillTags({ skills, dark = false }) {
  if (!Array.isArray(skills) || skills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`text-xs font-medium rounded-full px-3 py-1 ${
            dark ? "bg-white/10 text-white/80" : "bg-gray-100 text-gray-600"
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function CloseButton({ buttonRef, onClose, light }) {
  return (
    <button
      ref={buttonRef}
      onClick={onClose}
      aria-label="Close"
      className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white ${
        light
          ? "bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm"
          : "bg-black/25 hover:bg-black/45 text-white"
      }`}
    >
      <IconX className="w-[18px] h-[18px]" />
    </button>
  );
}

function SplitPanel({ member, onClose, closeRef }) {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-2 md:h-[560px] max-h-[90vh]"
    >
      <CloseButton buttonRef={closeRef} onClose={onClose} />

      <div className="relative h-80 md:h-[560px] bg-gray-100 shrink-0">
        <MemberImage
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-7 md:p-9 flex flex-col overflow-y-auto md:h-[560px]">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-600">
          {member.role}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-gray-900">{member.name}</h3>

        <div className="mt-3 h-0.5 w-12 bg-red-600 rounded-full" />

        <p className="mt-5 text-gray-600 leading-relaxed">
          {member.description}
        </p>

        <div className="mt-6">
          <SkillTags skills={member.skills} />
        </div>

        <div className="mt-auto pt-8">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
            Connect
          </p>

          <SocialRow member={member} />
        </div>
      </div>
    </motion.div>
  );
}

function OverlayPanel({ member, onClose, closeRef }) {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full max-w-md h-[600px] max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
    >
      <CloseButton buttonRef={closeRef} onClose={onClose} light />

      <MemberImage
        src={member.img}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-400">
          {member.role}
        </p>

        <h3 className="mt-2 text-3xl font-bold">{member.name}</h3>

        <div className="mt-3 h-0.5 w-12 bg-red-500 rounded-full" />

        <p className="mt-4 text-sm text-white/80 leading-relaxed line-clamp-4">
          {member.description}
        </p>

        <div className="mt-5">
          <SkillTags skills={member.skills} dark />
        </div>

        <div className="mt-6">
          <SocialRow member={member} dark />
        </div>
      </div>
    </motion.div>
  );
}

function BannerPanel({ member, onClose, closeRef }) {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full max-w-lg max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col"
    >
      <CloseButton buttonRef={closeRef} onClose={onClose} light />

      <div className="relative h-64 bg-gray-100 shrink-0">
        <MemberImage
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="p-8 flex flex-col gap-5 overflow-y-auto">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-600">
            {member.role}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {member.name}
          </h3>

          <div className="mt-3 h-0.5 w-12 bg-red-600 rounded-full" />
        </div>

        <p className="text-gray-600 leading-relaxed">{member.description}</p>

        <SkillTags skills={member.skills} />

        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
            Connect
          </p>

          <SocialRow member={member} />
        </div>
      </div>
    </motion.div>
  );
}

const PANELS = {
  split: SplitPanel,
  overlay: OverlayPanel,
  banner: BannerPanel,
};

function MemberModal({ member, onClose }) {
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();

    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!mounted) return null;

  const Panel = PANELS[MODAL_VARIANT] || SplitPanel;

  return createPortal(
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${member.name} profile`}
        >
          <Panel member={member} onClose={onClose} closeRef={closeRef} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* ---------------------------------------------
   Marquee
---------------------------------------------- */
const SPEED = 45;
const STAGGER = [0, 56, 24, 64, 12, 44, 32];

function TeamMarquee({ teamMembers }) {
  const trackRef = useRef(null);
  const firstRef = useRef(null);
  const dupeRef = useRef(null);
  const cycleRef = useRef(0);
  const pausedRef = useRef(false);
  const canHover = useCanHover();

  const [selected, setSelected] = useState(null);
  const selectedRef = useRef(null);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const measure = () => {
    if (firstRef.current && dupeRef.current) {
      cycleRef.current =
        dupeRef.current.offsetLeft - firstRef.current.offsetLeft;
    }
  };

  useLayoutEffect(() => {
    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [teamMembers]);

  const wrap = () => {
    const track = trackRef.current;
    const cycle = cycleRef.current;

    if (!track || !cycle) return;

    if (track.scrollLeft >= cycle) {
      track.scrollLeft -= cycle;
    } else if (track.scrollLeft <= 0) {
      track.scrollLeft += cycle;
    }
  };

  useEffect(() => {
    let raf;
    let last = performance.now();

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      const track = trackRef.current;

      if (track && !pausedRef.current && !selectedRef.current && !reduce) {
        track.scrollLeft += SPEED * dt;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const doubled = [...teamMembers, ...teamMembers];
  const n = teamMembers.length;

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        onScroll={wrap}
        className="flex gap-6 overflow-x-auto scrollbar-hide h-[470px] items-start pt-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doubled.map((member, i) => {
          const original = i % n;
          const offset = STAGGER[original % STAGGER.length];
          const setRef = i === 0 ? firstRef : i === n ? dupeRef : null;

          return (
            <div key={`${member.id}-${i}`} ref={setRef}>
              <TeamCard
                member={member}
                offset={offset}
                canHover={canHover}
                onOpen={setSelected}
              />
            </div>
          );
        })}
      </div>

      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

/* ---------------------------------------------
   Data
---------------------------------------------- */
// Map backend TeamMember doc → component shape
function mapMember(m) {
  return {
    id: m._id || m.id,
    name: m.fullName || m.name || "",
    img: m.photo || m.img || "",
    role: m.role || "",
    description: m.description || "",
    quote: m.quote || "",
    email: m.email || "",
    phone: m.phone || "",
    github: m.github || "",
    linkedin: m.linkedin || "",
    website: m.website || "",
    skills: Array.isArray(m.skills) ? m.skills : [],
    section: m.section || "team",
  };
}

function useTeamMembers() {
  const [state, setState] = useState({
    leaders: [],
    team: [],
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    let active = true;
    setState((s) => ({ ...s, loading: true, error: null }));

    teamService
      .listGrouped()
      .then((data) => {
        if (!active) return;

        // Expected: { leaders: [...], team: [...] }
        // Fallback: plain array (filter client-side)
        let leadersRaw = [];
        let teamRaw = [];

        if (Array.isArray(data)) {
          leadersRaw = data.filter((m) => m.section === "leaders");
          teamRaw = data.filter((m) => m.section !== "leaders");
        } else {
          leadersRaw = Array.isArray(data?.leaders) ? data.leaders : [];
          teamRaw = Array.isArray(data?.team) ? data.team : [];
        }

        setState({
          leaders: leadersRaw.map(mapMember),
          team: teamRaw.map(mapMember),
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        if (!active) return;
        setState((s) => ({
          ...s,
          loading: false,
          error: err?.message || "Failed to load team",
        }));
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => load(), [load]);

  return { ...state, reload: load };
}

function TeamLoadingState() {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-28">
        <div className="h-8 w-40 bg-gray-100 rounded mb-10 animate-pulse" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="rounded-2xl bg-gray-100 aspect-[4/5]" />
              <div className="mt-5 h-5 w-2/3 bg-gray-100 rounded" />
              <div className="mt-3 h-4 w-full bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto flex gap-6 overflow-hidden px-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] sm:w-[220px] h-[300px] rounded-2xl bg-gray-100 animate-pulse"
            style={{ marginTop: STAGGER[i % STAGGER.length] }}
          />
        ))}
      </div>
    </>
  );
}

function TeamErrorState({ message, onRetry }) {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 mb-3">
        Couldn&rsquo;t load the team
      </p>

      <p className="text-gray-600 mb-6">{message}</p>

      <button
        onClick={onRetry}
        className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}

/* ---------------------------------------------
   Main Section
---------------------------------------------- */
export default function TeamSection() {
  const {
    leaders,
    team: teamMembers,
    loading,
    error,
    reload,
  } = useTeamMembers();

  const totalCount = leaders.length + teamMembers.length;

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        variants={slideIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-red-600 mb-4">
          Our People
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Expertly driven.
          <br />
          Individually inspired.
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Our leadership and development team works together to build scalable,
          innovative, and future-ready digital solutions.
        </p>
      </motion.div>

      {loading && <TeamLoadingState />}

      {!loading && error && <TeamErrorState message={error} onRetry={reload} />}

      {!loading && !error && totalCount === 0 && (
        <p className="text-center text-gray-400">
          No team members to show yet.
        </p>
      )}

      {!loading && !error && totalCount > 0 && (
        <>
          {leaders.length > 0 && (
            <div className="max-w-6xl mx-auto mb-28">
              <div className="flex items-end justify-between mb-10 px-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Leadership
                </h2>

                <span className="text-sm text-gray-400">
                  {leaders.length} members
                </span>
              </div>

              <LeadershipGrid leaders={leaders} />
            </div>
          )}

          {teamMembers.length > 0 && (
            <div className="relative max-w-[1500px] mx-auto overflow-hidden">
              <span
                aria-hidden
                className="pointer-events-none select-none absolute -top-6 left-0 text-[18vw] leading-none font-bold text-gray-50 z-0"
              >
                team
              </span>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 95px, #f3f3f3 95px, #f3f3f3 96px)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-10 px-2">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-900 border border-gray-900 px-2 py-1">
                    04
                  </span>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Development &amp; Creative
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      The people who bring your project to life.
                    </p>
                  </div>
                </div>

                <TeamMarquee teamMembers={teamMembers} />

                <p className="text-center text-xs text-gray-400 mt-4">
                  Tap a card to view the full profile
                </p>
              </div>
            </div>
          )}
        </>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

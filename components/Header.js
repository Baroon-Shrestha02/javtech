"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Lightbulb, ChevronRight } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/our-works", label: "Our Works" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
];

function NavLink({ href, label, active, layoutId }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors select-none ${
        active ? "text-gray-900" : "text-gray-500 hover:text-gray-800"
      }`}
    >
      {label}

      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 2px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}

      {hovered && !active && (
        <motion.span
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── DEFAULT NAVBAR ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="light-nav"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
          >
            <div className="mx-auto max-w-7xl px-5 flex items-center gap-4 h-[68px]">
              {/* Logo */}
              <Link href="/" className="shrink-0 mr-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  height={36}
                  width={100}
                  className="object-contain"
                />
              </Link>

              {/* Desktop nav */}
              <nav
                className="hidden lg:flex items-center gap-0.5 flex-1 rounded-full px-1.5 py-1.5"
                style={{
                  background: "rgba(243,244,246,0.7)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  width: "fit-content",
                }}
              >
                {links.map(({ href, label }) => (
                  <NavLink
                    key={label}
                    href={href}
                    label={label}
                    active={pathname === href}
                    layoutId="default-pill"
                  />
                ))}
              </nav>

              {/* Desktop right */}
              <div className="hidden lg:flex items-center gap-5 ml-auto shrink-0">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#aa0000] active:scale-95"
                >
                  Got an Idea
                  <Lightbulb size={14} />
                </Link>

                <a
                  href="https://wa.me/9779801816685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group"
                >
                  <MessageCircle
                    size={22}
                    className="text-[#cc0000] transition-transform group-hover:scale-110"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#cc0000] leading-tight">
                      +977-9801816685
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      Sun-Fri, 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="ml-auto lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-800 transition-colors active:scale-95"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── SCROLLED NAVBAR ── */}
      <AnimatePresence>
        {scrolled && (
          <div
            style={{
              position: "fixed",
              top: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "calc(100% - 2rem)",
              maxWidth: "880px",
              zIndex: 50,
            }}
          >
            <motion.div
              key="scrolled-nav"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-full px-3 py-2"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              {/* Logo */}
              <Link href="/" className="shrink-0 mr-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden ring-1 ring-gray-100">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    height={40}
                    width={40}
                    className="rounded-full object-cover"
                  />
                </div>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-0.5 flex-1">
                {links.map(({ href, label }) => (
                  <NavLink
                    key={label}
                    href={href}
                    label={label}
                    active={pathname === href}
                    layoutId="scrolled-pill"
                  />
                ))}
              </nav>

              {/* CTA */}
              <a
                href="https://wa.me/9779801816685"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hidden lg:flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#aa0000] active:scale-95 shrink-0"
              >
                WhatsApp Us
                <MessageCircle size={13} />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="ml-auto lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] flex flex-col"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    height={32}
                    width={90}
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-700 transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
                {links.map(({ href, label }, i) => {
                  const active = pathname === href;
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.055 + 0.08,
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all active:scale-[0.98] ${
                          active
                            ? "text-gray-900 border border-red-100"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800 border border-transparent"
                        }`}
                        style={
                          active
                            ? {
                                background: "rgba(255,255,255,0.9)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                              }
                            : {}
                        }
                      >
                        {label}
                        <ChevronRight
                          size={15}
                          className={`transition-transform ${
                            active
                              ? "text-[#cc0000] translate-x-0.5"
                              : "opacity-30"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#cc0000] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#aa0000] active:scale-95"
                >
                  <Lightbulb size={15} />
                  Got an Idea?
                </Link>
                <a
                  href="https://wa.me/9779801816685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:text-gray-800 active:scale-95"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
                <p className="text-center text-[11px] text-gray-400 mt-1">
                  Sun-Fri, 10:00 AM – 6:00 PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[68px]" />
    </>
  );
}

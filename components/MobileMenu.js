"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-works", label: "Our works" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative flex items-center lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-0"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Toggle menu</span>
        <span className="relative block h-3.5 w-[18px]">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-[18px] rounded-sm bg-foreground transition-all ${
              open ? "top-1.5 translate-y-0 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-[18px] rounded-sm bg-foreground transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-3 block h-0.5 w-[18px] rounded-sm bg-foreground transition-all ${
              open ? "top-1.5 -translate-y-0 -rotate-45" : ""
            }`}
          />
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 border-t border-white/10 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav
              className="mx-auto flex max-w-lg flex-col gap-1 px-5 py-4"
              aria-label="Mobile"
            >
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={href}
                    className="block rounded-[14px] border border-transparent px-4 py-3.5 font-semibold text-foreground hover:border-white/10 hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

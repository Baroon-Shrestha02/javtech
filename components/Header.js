"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  Code2,
  Smartphone,
  Megaphone,
  Search,
  Share2,
  Palette,
  FileText,
  MousePointerClick,
  Layout,
} from "lucide-react";

/* ─────────────────────────────
   SERVICE CATEGORIES
───────────────────────────── */
const serviceCategories = [
  {
    category: "Development",
    description:
      "Creating digital experiences through coding, design, and user interaction principles.",
    items: [
      {
        label: "Website Development",
        description: "Specialized Custom Website Development Services",
        slug: "web-development",
        icon: Code2,
      },
      {
        label: "App Development",
        description: "Building Custom Apps for Seamless User Experience",
        slug: "app-development",
        icon: Smartphone,
      },
    ],
  },
  {
    category: "Marketing",
    description:
      "Promotion of products or services via online channels and strategies.",
    items: [
      {
        label: "Social Media Marketing (SMM)",
        description: "Boost online presence, engage audience",
        slug: "social-media-marketing",
        icon: Share2,
      },
      {
        label: "Graphic Design",
        description: "Bringing Ideas to Visual Life",
        slug: "graphic-design",
        icon: Palette,
      },
      {
        label: "Content Writing & Creation",
        description: "Creating Content that Resonates",
        slug: "content-writing",
        icon: FileText,
      },
      {
        label: "Digital Marketing",
        description: "Designing Digital Paths That Echo with Audiences",
        slug: "digital-marketing",
        icon: Megaphone,
      },
    ],
  },
];

const pricingDropdownItems = [
  {
    label: "Web Development",
    description: "Modern, scalable websites & web apps",
    slug: "web-development",
    icon: Code2,
  },
  {
    label: "App Development",
    description: "Native & cross-platform mobile apps",
    slug: "app-development",
    icon: Smartphone,
  },
  {
    label: "Digital Marketing",
    description: "SEO, social, and growth campaigns",
    slug: "digital-marketing",
    icon: Megaphone,
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-works", label: "Our Works" },
  {
    href: "/services",
    label: "Our Services",
    megaMenu: true,
  },
  {
    href: "/pricing",
    label: "Pricing",
    dropdown: pricingDropdownItems.map((d) => ({
      ...d,
      href: `/pricing/${d.slug}`,
    })),
  },
  { href: "/contact", label: "Contact Us" },
];

const WA_LINK = "https://wa.me/9779807128557";

/* ─────────────────────────────
   MEGA MENU ITEM
───────────────────────────── */
function MegaMenuItem({
  href,
  icon: Icon,
  label,
  description,
  index,
  onClose,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02, duration: 0.15 }}
    >
      <Link
        href={href}
        onClick={onClose}
        className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-200/50 transition-colors duration-150"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 group-hover:bg-accent2 group-hover:text-white transition-colors duration-150">
          <Icon size={18} strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 group-hover:text-accent2 transition-colors duration-150 leading-snug">
            {label}
          </p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────
   DROPDOWN ITEM (for Pricing)
───────────────────────────── */
function DropdownItem({
  href,
  icon: Icon,
  label,
  description,
  index,
  onClose,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.035, duration: 0.15 }}
    >
      <Link
        href={href}
        onClick={onClose}
        className="group flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-red-50/80 transition-colors duration-150"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 group-hover:bg-[#cc0000] group-hover:text-white transition-colors duration-150">
          <Icon size={16} strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-gray-800 group-hover:text-[#cc0000] transition-colors duration-150">
            {label}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────
   NAV LINK COMPONENT
───────────────────────────── */
function NavLink({ href, label, active, dropdown, megaMenu }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const hasDropdown = !!dropdown || megaMenu;

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (hasDropdown) setOpen(true);
  }, [hasDropdown]);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={href}
        className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-all duration-150 select-none
          after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:transition-all after:duration-150
          ${
            active
              ? "text-[#cc0000] after:bg-[#cc0000] after:opacity-100"
              : "text-gray-500 hover:text-gray-900 after:bg-transparent after:opacity-0 hover:after:bg-gray-300 hover:after:opacity-100"
          }`}
      >
        {label}
        {hasDropdown && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-0.5"
          >
            <ChevronDown size={12} />
          </motion.span>
        )}
      </Link>

      {/* Mega Menu for Services */}
      <AnimatePresence>
        {open && megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full -left-[230px] z-50"
            style={{
              paddingTop: "12px",
            }}
          >
            <div
              className="w-[720px] rounded-2xl overflow-hidden border border-gray-100/80"
              style={{
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 50px -12px rgba(0,0,0,0.15)",
              }}
            >
              <div className="grid grid-cols-2 gap-6 p-6">
                {serviceCategories.map((category, catIndex) => (
                  <div key={category.category}>
                    {/* Category Header */}
                    <div className="mb-4 pb-3 border-b border-gray-100">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {category.category}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Category Items */}
                    <div className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <MegaMenuItem
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          icon={item.icon}
                          label={item.label}
                          description={item.description}
                          index={catIndex * 10 + itemIndex}
                          onClose={handleClose}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Link */}
              <Link
                href="/services"
                onClick={handleClose}
                className="flex items-center justify-between px-6 py-3 border-t border-gray-100 text-xs font-medium text-gray-400 hover:text-accent2 hover:bg-gray-50/50 transition-colors duration-150"
              >
                Services Overview
                <ChevronRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Dropdown for Pricing */}
      <AnimatePresence>
        {open && dropdown && !megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 z-50"
            style={{
              paddingTop: "8px",
            }}
          >
            <div
              className="w-[320px] rounded-2xl overflow-hidden border border-gray-100/80"
              style={{
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 50px -12px rgba(0,0,0,0.12)",
              }}
            >
              <div className="p-2">
                {dropdown.map((item, i) => (
                  <DropdownItem
                    key={item.href}
                    index={i}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    description={item.description}
                    onClose={handleClose}
                  />
                ))}
              </div>

              <Link
                href={href}
                onClick={handleClose}
                className="flex items-center justify-between px-5 py-2.5 border-t border-gray-100 text-[11px] font-medium text-gray-400 hover:text-[#cc0000] hover:bg-gray-50/50 transition-colors duration-150"
              >
                {label} Overview
                <ChevronRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────
   HEADER COMPONENT
───────────────────────────── */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

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

  const isActive = (link) => {
    if (link.megaMenu) {
      return pathname.startsWith("/services");
    }
    return (
      pathname === link.href ||
      (link.dropdown && pathname.startsWith(link.href + "/"))
    );
  };

  const renderDesktopNav = () =>
    links.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        label={link.label}
        active={isActive(link)}
        dropdown={link.dropdown}
        megaMenu={link.megaMenu}
      />
    ));

  const allServices = serviceCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      href: `/services/${item.slug}`,
      category: cat.category,
    })),
  );

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="light-nav"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
          >
            <div className="mx-auto max-w-7xl px-5 flex items-center gap-6 h-[68px]">
              <Link href="/" className="shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo"
                  height={36}
                  width={100}
                  className="object-contain"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-2 flex-1">
                {renderDesktopNav()}
              </nav>

              <div className="hidden lg:flex items-center gap-5 ml-auto">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#aa0000] transition-colors"
                >
                  Got an Idea
                  <Lightbulb size={14} />
                </Link>

                <a
                  href={WA_LINK}
                  target="_blank"
                  className="flex items-center gap-2.5"
                >
                  <MessageCircle size={20} className="text-[#cc0000]" />
                  <span className="text-sm font-semibold text-[#cc0000]">
                    +977-9807128557
                  </span>
                </a>
              </div>

              <button
                onClick={() => setMobileOpen(true)}
                className="ml-auto lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500"
              >
                <Menu size={18} />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ───────── SCROLLED NAVBAR ───────── */}
      <AnimatePresence>
        {scrolled && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[920px] z-50">
            <motion.div
              key="scrolled-nav"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="flex items-center gap-4 rounded-2xl px-4 py-2.5"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <Link href="/">
                <img src="/logo.png" className="h-9" alt="Logo" />
              </Link>

              <nav className="hidden lg:flex items-center gap-2 flex-1">
                {renderDesktopNav()}
              </nav>

              <a
                href={WA_LINK}
                target="_blank"
                className="ml-auto hidden lg:flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2 text-sm text-white hover:bg-[#aa0000] transition-colors"
              >
                WhatsApp
                <MessageCircle size={14} />
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="ml-auto lg:hidden"
              >
                <Menu size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/30"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-4 right-4 bottom-4 z-[70] w-[calc(100%-2rem)] max-w-[360px] rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              }}
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100 shrink-0">
                <img src="/logo.png" className="h-8" alt="Logo" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto overscroll-contain">
                {links.map((link) => {
                  const active = isActive(link);
                  const expanded = mobileSubmenu === link.label;

                  if (link.megaMenu) {
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() =>
                            setMobileSubmenu(expanded ? null : link.label)
                          }
                          className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors
                            ${
                              active
                                ? "bg-red-50 text-[#cc0000]"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          {link.label}
                          <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 py-2 flex flex-col gap-1">
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium text-gray-400 hover:bg-gray-50 hover:text-[#cc0000] transition-colors"
                                >
                                  All Services
                                  <ChevronRight size={12} />
                                </Link>
                                {allServices.map((service) => {
                                  const Icon = service.icon;
                                  const subActive = pathname === service.href;
                                  return (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors
                                        ${
                                          subActive
                                            ? "bg-red-50 text-[#cc0000]"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                    >
                                      <Icon size={14} />
                                      <span className="text-xs">
                                        {service.label}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.dropdown) {
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() =>
                            setMobileSubmenu(expanded ? null : link.label)
                          }
                          className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors
                            ${
                              active
                                ? "bg-red-50 text-[#cc0000]"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                          {link.label}
                          <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 py-2 flex flex-col gap-1">
                                <Link
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-medium text-gray-400 hover:bg-gray-50 hover:text-[#cc0000] transition-colors"
                                >
                                  All {link.label}
                                  <ChevronRight size={12} />
                                </Link>
                                {link.dropdown.map((sub) => {
                                  const Icon = sub.icon;
                                  const subActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors
                                        ${
                                          subActive
                                            ? "bg-red-50 text-[#cc0000]"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                    >
                                      <Icon size={14} />
                                      {sub.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors
                        ${
                          active
                            ? "bg-red-50 text-[#cc0000]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {link.label}
                      <ChevronRight size={14} />
                    </Link>
                  );
                })}
              </nav>

              <div className="p-5 border-t border-gray-100 flex flex-col gap-3 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#aa0000] text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                >
                  Got an Idea?
                  <Lightbulb size={14} />
                </Link>

                <a
                  href={WA_LINK}
                  target="_blank"
                  className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[#cc0000] hover:text-[#cc0000] text-sm font-medium text-gray-700 py-3 rounded-xl transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[68px]" />
    </>
  );
}

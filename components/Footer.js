"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-works", label: "Our Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram ↗" },
  { href: "https://linkedin.com", label: "LinkedIn ↗" },
  { href: "https://facebook.com", label: "Facebook ↗" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "#0c0c0e", color: "#fff", fontFamily: "inherit" }}
    >
      {/* ── Top grid ── */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10">
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {/* ── Col 1: Contact info ── */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={100}
              className="h-8 w-auto object-contain bg-white"
              priority
            />

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Mail
              </p>
              <a
                href="mailto:hello@javtech.com"
                className="text-sm transition-colors duration-200 hover:text-white/60"
              >
                javtechinfosys@gmail.com
              </a>
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Phone
              </p>
              <a
                href="tel:+9779807128557"
                className="text-sm transition-colors duration-200 hover:text-white/60"
              >
                +977-9807128557
              </a>
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Location
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                Dhobighat, Kathmandu — Nepal
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-1 mt-auto">
              {socials.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                  }
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Map ── */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Find Us
            </p>
            <div
              className="w-full overflow-hidden"
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                aspectRatio: "4/3",
              }}
            >
              <iframe
                title="JavTech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949046!2d85.29111643515625!3d27.708964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1712000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Col 3: Quick links ── */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Quick Links
            </p>
            <nav className="flex flex-col gap-0.5">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="py-1.5 text-sm transition-colors duration-200 border-b"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
              style={{ background: "#fff", color: "#0c0c0e" }}
            >
              Have a project in mind?
            </Link>
          </div>
        </div>
      </div>

      {/* ── Giant wordmark ── */}
      <div
        className="w-full overflow-hidden select-none"
        style={{ lineHeight: 0.85 }}
        aria-hidden
      >
        <p
          className="font-black uppercase text-center w-full"
          style={{
            fontSize: "clamp(72px, 16vw, 220px)",
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          JAVTECH
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        className="mx-auto max-w-7xl px-5 py-5 flex flex-wrap items-center justify-between gap-3"
      >
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          ©{year} JavTech. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/privacy-policy"
            className="text-xs transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
            }
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
            }
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

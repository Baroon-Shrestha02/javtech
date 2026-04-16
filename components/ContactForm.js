"use client";

import { useState } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const serviceOptions = [
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Application" },
  { id: "social", label: "Social Media Managing" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "ecommerce", label: "eCommerce Development" },
  { id: "branding", label: "Branding / Rebranding" },
  { id: "saas", label: "SaaS Development" },
  { id: "uiux", label: "UI/UX Design" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@javtech.com",
    href: "mailto:hello@javtech.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+977-9807128557",
    href: "tel:+9779807128557",
  },
  {
    icon: MapPin,
    label: "Find us",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com",
  },
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/9779807128557" },
];

const empty = {
  services: [],
  projectDescription: "",
  websiteAddress: "",
  name: "",
  email: "",
  phone: "",
  additionalInfo: "",
};

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) =>
    setForm((p) => ({
      ...p,
      services: p.services.includes(id)
        ? p.services.filter((s) => s !== id)
        : [...p.services, id],
    }));

  const change = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm(empty);
      }, 4000);
    }, 1600);
  };

  const inputClass =
    "w-full rounded-xl border border-[#e8e8e8] bg-white px-4 py-3 text-sm text-[#111] placeholder:text-[#bbb] outline-none transition-colors focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20";

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#0f0f12] px-5 pt-32 pb-20 overflow-hidden">
        {/* Hero image — right side, fades out toward the left */}
        <div
          className="absolute inset-y-0 right-0 w-[55%] pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/contact/hero.avif"
            alt=""
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0f0f12 0%, #0f0f12 10%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
            Get in touch
          </p>
          <h1
            className="font-bold text-white leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            Let&apos;s build
            <br />
            <span className="text-[#cc0000]">something great.</span>
          </h1>
        </div>
      </section>

      {/* ── Main form section ── */}
      <section className="px-5 py-20 bg-[#]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[340px_1fr]">
            {/* Left sidebar */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0f0f12]">
                  Tell us about
                  <br />
                  your project
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#666]">
                  Fill in the form and we&apos;ll get back to you within 24
                  hours. Or just drop us a message on WhatsApp.
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  Follow along
                </p>
                <div className="flex flex-col gap-2">
                  {socials.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-[#333] transition-colors hover:text-[#cc0000]"
                    >
                      <span className="h-px w-4 bg-[#ccc] transition-all group-hover:w-6 group-hover:bg-[#cc0000]" />
                      {label}
                      <ArrowUpRight
                        size={12}
                        className="text-[#aaa] group-hover:text-[#cc0000]"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA card */}
            </div>

            {/* Form card */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/[0.06]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {/* Services */}
                <div>
                  <label className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Services needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(({ id, label }) => {
                      const active = form.services.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggle(id)}
                          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                            active
                              ? "border-[#cc0000] bg-[#cc0000] text-white"
                              : "border-[#e0e0e0] bg-white text-[#555] hover:border-[#cc0000] hover:text-[#cc0000]"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project description */}
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Project description{" "}
                    <span className="text-[#cc0000]">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    value={form.projectDescription}
                    onChange={change}
                    required
                    rows={4}
                    placeholder="Briefly describe what you're looking to build..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Website / Domain (optional)
                  </label>
                  <input
                    type="url"
                    name="websiteAddress"
                    value={form.websiteAddress}
                    onChange={change}
                    placeholder="https://yourwebsite.com"
                    className={inputClass}
                  />
                </div>

                {/* Name / Email / Phone */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      name: "name",
                      label: "Full name",
                      placeholder: "Sara Lamichhane",
                      type: "text",
                      req: true,
                    },
                    {
                      name: "email",
                      label: "Email",
                      placeholder: "sara@example.com",
                      type: "email",
                      req: true,
                    },
                    {
                      name: "phone",
                      label: "Phone (optional)",
                      placeholder: "+977 9807128557",
                      type: "tel",
                      req: false,
                    },
                  ].map(({ name, label, placeholder, type, req }) => (
                    <div key={name}>
                      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                        {label}{" "}
                        {req && <span className="text-[#cc0000]">*</span>}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={change}
                        placeholder={placeholder}
                        required={req}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>

                {/* Additional info */}
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Anything else?
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={form.additionalInfo}
                    onChange={change}
                    rows={3}
                    placeholder="Budget range, timeline, or any other details..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
                      submitted
                        ? "bg-emerald-500 text-white"
                        : "bg-[#cc0000] text-white hover:bg-[#aa0000] active:bg-[#990000]"
                    } disabled:opacity-60`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 size={16} /> Sent! We&apos;ll be in touch.
                      </>
                    ) : submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={15} /> Send message
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/9779807128557"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] px-5 py-3.5 text-sm font-semibold text-[#333] transition-colors hover:border-[#cc0000] hover:text-[#cc0000]"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-6">
        <div className="rounded-2xl bg-[#0f0f12] p-6 flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/30 mb-3">
            Quick chat?
          </p>
          <p className="text-sm text-white/70 mb-5">
            Prefer talking directly? Message us on WhatsApp and we&apos;ll
            respond fast.
          </p>
          <a
            href="https://wa.me/9779807128557"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* ── Map ── */}
      {/* <section className="px-5 pb-20 bg-[#f5f5f2]">
        <div className="mx-auto max-w-7xl">
          <div
            className="overflow-hidden rounded-2xl"
            style={{ height: "320px" }}
          >
            <iframe
              title="JavTech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949046!2d85.29111643515625!3d27.708964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1712000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
}

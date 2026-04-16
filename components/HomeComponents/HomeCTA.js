"use client";

import { ChevronDownIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCTA() {
  return (
    <section className="px-4 md:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left */}
        <div>
          <h2
            className="text-5xl font-extrabold leading-tight tracking-tight mb-5"
            style={{ color: "#7f0000" }}
          >
            Have a Project
            <br />
            in Mind?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            Let&apos;s build something remarkable. Reach out for a free
            consultation and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: <MailIcon />, label: "info@quarkinfotech.com" },
              { icon: <PhoneIcon />, label: "+977-9801816685" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <div className="w-10 h-10 rounded-full border border-red-200 bg-red-50 flex items-center justify-center text-red-700">
                  {item.icon}
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-3xl border border-red-200 bg-white p-9 shadow-[0_4px_32px_rgba(180,30,30,0.08)]">
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold mb-2 text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-red-200 bg-red-50/40 rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 placeholder:text-red-300"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-gray-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-red-200 bg-red-50/40 rounded-xl px-4 py-3 text-sm
                    focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 placeholder:text-red-300"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-gray-800">
                Phone{" "}
                <span className="font-normal text-red-300">(optional)</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 border border-red-200 bg-red-50/40 rounded-xl px-3 py-3 text-sm shrink-0 cursor-pointer">
                  🇳🇵 +977 <ChevronDownIcon className="w-3 h-3 text-gray-400" />
                </div>
                <input
                  type="tel"
                  placeholder="98XXXXXXXX"
                  className="flex-1 border border-red-200 bg-red-50/40 rounded-xl px-4 py-3 text-sm
                      focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 placeholder:text-red-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 text-gray-800">
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more about your project"
                className="w-full border border-red-200 bg-red-50/40 rounded-xl px-4 py-3 text-sm resize-y
                    focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 placeholder:text-red-300"
              />
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                className="px-7 py-3 rounded-full font-bold text-white text-sm
                    shadow-[0_4px_16px_rgba(183,28,28,0.35)] hover:shadow-[0_8px_24px_rgba(183,28,28,0.45)]
                    hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, #b71c1c 0%, #e53935 100%)",
                }}
              >
                Get a Quote
              </button>
              <span className="text-gray-400 text-sm">or</span>
              <button
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold
                    border border-red-600 text-red-700 hover:bg-red-600 hover:text-white
                    transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

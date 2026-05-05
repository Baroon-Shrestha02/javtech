"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Smartphone,
  TrendingUp,
  SearchCheck,
  Palette,
  Send,
} from "lucide-react";

const checkpoints = [
  { icon: Rocket, number: "1", text: "Need a website for your business?" },
  {
    icon: Smartphone,
    number: "2",
    text: "Want a mobile app to reach more users?",
  },
  {
    icon: TrendingUp,
    number: "3",
    text: "Looking to boost your social media?",
  },
  { icon: Palette, number: "4", text: "Need stunning visuals for your brand?" },
];

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const waNumber = "9779807128557";
    let msg = `*New Project Inquiry*\n\n`;
    msg += `*Name:* ${form.name}\n`;
    msg += `*Email:* ${form.email}\n`;
    if (form.phone) msg += `*Phone:* ${form.phone}\n`;
    msg += `\n*Message:*\n${form.message}`;

    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section ref={sectionRef} className=" py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-black text-gray-900 leading-tight tracking-tight italic"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Time Is <span className="text-[#cc0000]">Running</span> Out!
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Don{"'"}t miss the chance to unleash the full potential of your
            business with JavTech{"'"}s digital solutions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Checkpoints */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-5 md:gap-6 max-w-lg mx-auto lg:mx-0">
              {checkpoints.map((item, index) => {
                const Icon = item.icon;
                const isLast =
                  checkpoints.length % 2 !== 0 &&
                  index === checkpoints.length - 1;

                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#cc0000]/20 transition-all ${
                      isLast ? "col-span-2 max-w-[240px] mx-auto" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#cc0000]/20 bg-[#cc0000]/5">
                      <Icon
                        size={26}
                        className="text-[#cc0000]"
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="text-2xl font-black text-gray-900">
                      {item.number}
                    </span>

                    <p className="text-sm text-gray-600 text-center leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3
              className="font-bold text-[#cc0000] italic text-center mb-2"
              style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
            >
              Have A Project In Mind?
            </h3>
            <p className="text-center text-gray-800 font-semibold mb-8">
              Send Us Your Details
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#cc0000]/30 focus-within:border-[#cc0000] transition-all">
                <div className="flex items-center gap-1.5 px-4 py-3.5 bg-gray-50 border-r border-gray-200 shrink-0">
                  <span className="text-sm">🇳🇵</span>
                  <span className="text-sm font-medium text-gray-600">
                    +977
                  </span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project *"
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cc0000]/30 focus:border-[#cc0000] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#cc0000] hover:bg-[#aa0000] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#cc0000]/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Submit Now
              </motion.button>

              {/* Success */}
              {submitted && (
                <motion.p
                  className="text-sm text-green-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Redirecting to WhatsApp...
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

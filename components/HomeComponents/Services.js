"use client";

import React from "react";

import { File, MonitorIcon } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const services = [
  {
    title: "Advanced E-Commerce Development",
    desc: "Build, launch, and grow your online store with our expert eCommerce solutions — optimized for sales and customer experience.",
    size: "main",
  },
  {
    title: "Custom Web & Mobile App Development",
    desc: "We develop high-performance websites and mobile apps with intuitive, secure, and future-ready solutions using React, Laravel, and React Native.",
    size: "wide",
  },
  {
    title: "SaaS Development",
    desc: "From complete SaaS platforms to seamless integrations, we build solutions that automate, optimize, and elevate your business.",
    size: "small",
  },
  {
    title: "UI/UX Design",
    desc: "User experience makes all the difference between a good product and a great one.",
    size: "small",
  },
];

export default function Services() {
  return (
    <>
      <section className="">
        <section className="px-4 md:px-10">
          <SectionHeader
            title="OUR SERVICES"
            header="How Can We Help ?"
            subheader="From eCommerce and SaaS to applications and design, our team turns bold visions into digital products that inspire and achieve results."
          />
        </section>
        <section className="px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Big left card */}
            <div
              className="rounded-2xl p-9 text-white flex flex-col justify-between min-h-[440px]
            hover:-translate-y-1 transition-transform duration-300 row-span-2"
              style={{
                background:
                  "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold leading-snug mb-3">
                  Advanced E-Commerce
                  <br />
                  Development
                </h3>
                <div className="w-9 h-[3px] rounded-full bg-white/30 mb-4" />
                <p className="text-sm text-white/80 leading-relaxed">
                  Build, launch, and grow your online store with our expert
                  eCommerce solutions — optimized for sales and customer
                  experience.
                </p>
              </div>
              {/* Replace with your illustration */}
              <div className="flex items-end justify-center pt-6 opacity-80 ">
                <video
                  src="/services/ser1.mp4"
                  alt="computer"
                  autoPlay
                  loop
                  muted
                  className="h-[150px] mix-blend-color-burn"
                />
              </div>
            </div>

            {/* Top right — wide */}
            <div
              className="rounded-2xl p-9 text-white flex justify-between items-start gap-4
            hover:-translate-y-1 transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold leading-snug mb-3">
                  Custom Web & Mobile App
                  <br />
                  Development
                </h3>
                <div className="w-9 h-[3px] rounded-full bg-white/30 mb-4" />
                <p className="text-sm text-white/80 leading-relaxed">
                  High-performance websites and mobile apps — secure and
                  future-ready using React, Laravel, and React Native.
                </p>
              </div>
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
                <MonitorIcon className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Bottom right — two small cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "SaaS Development",
                  desc: "Platforms to seamless integrations that automate, optimize, and elevate your business.",
                  grad: "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
                },
                {
                  title: "UI/UX Design",
                  desc: "User experience makes all the difference between a good product and a great one.",
                  grad: "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7 text-white hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: s.grad }}
                >
                  <h3 className="text-xl font-bold leading-snug mb-3">
                    {s.title}
                  </h3>
                  <div className="w-9 h-[3px] rounded-full bg-white/30 mb-3" />
                  <p className="text-xs text-white/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

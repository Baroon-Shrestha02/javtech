"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../SharedComponents/SectionHeader";

const services = [
  {
    id: "01",
    title: "Web Development",
    href: "/services/web-development",
    image: "/home/web.jpg",
    description: "Custom websites & web apps built for performance and scale.",
  },
  {
    id: "02",
    title: "Social Media Managing",
    href: "/services/social-media",
    image: "/home/social.jpg",
    description: "Strategy, content, and growth across every major platform.",
  },
  {
    id: "03",
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    image: "/home/social.jpg",
    description: "Data-driven campaigns that convert attention into revenue.",
  },
  {
    id: "04",
    title: "Mobile Application",
    href: "/services/mobile-app",
    image: "/home/mobile.jpg",
    description: "Native and cross-platform apps for iOS and Android.",
  },
];

export function OurServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Our Expertise"
          header="What We Offer"
          subheader="We design and develop intuitive software and apps, creating meaningful experiences across every touchpoint."
        />

        <div className="flex flex-col">
          {services.map((service, i) => {
            const isHovered = hovered === service.id;
            const isOdd = i % 2 === 0;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group block"
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...(i % 2 === 1 && { marginTop: "-4rem" }),
                }}
              >
                <div
                  className="relative flex items-start py-10 "
                  style={{
                    paddingLeft: isOdd ? "0" : "50%",
                  }}
                >
                  {/* Number */}
                  <span
                    className={`mr-5 mt-2 shrink-0 text-xs font-medium transition-colors duration-300 ${
                      isHovered ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {service.id}
                  </span>

                  {/* Hover Image */}
                  <AnimatePresence mode="wait">
                    {isHovered && (
                      <motion.div
                        key={service.id}
                        className="absolute z-10 overflow-hidden rounded-lg"
                        style={{
                          left: isOdd
                            ? "calc(2rem + 20px)"
                            : "calc(50% + 2rem + 20px)",
                          top: "50%",
                          translate: "0 -50%",
                          width: "180px",
                          height: "130px",
                        }}
                        initial={{
                          x: -40,
                          opacity: 0,
                          clipPath: "inset(0 100% 0 0)",
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          clipPath: "inset(0 0% 0 0)",
                        }}
                        exit={{
                          x: -20,
                          opacity: 0,
                          clipPath: "inset(0 100% 0 0)",
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <div className="relative h-full w-full bg-gradient-to-br from-gray-200 to-gray-300">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="180px"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div
                    className="transition-all duration-300"
                    style={{
                      paddingLeft: isHovered ? "200px" : "0",
                      transition: "padding 0.4s cubic-bezier(0.32,0.72,0,1)",
                    }}
                  >
                    <h3
                      className="font-serif leading-tight tracking-[-0.01em]"
                      style={{
                        fontSize: "clamp(28px, 3.5vw, 52px)",
                        fontWeight: 400,
                      }}
                    >
                      {service.title}
                    </h3>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                          className="mt-3 flex items-center gap-3"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black">
                            Discover More
                          </span>

                          <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "easeInOut",
                            }}
                            className="text-sm text-black"
                          >
                            →
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* <div className="border-t border-black/10" /> */}
        </div>
        <div></div>
      </div>
    </section>
  );
}

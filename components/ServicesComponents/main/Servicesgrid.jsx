"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "App Development In Nepal",
    description:
      "Innovative and user-friendly mobile application designed to engage users.",
    image: "/Services/section/mobile.jpg",
    href: "/services/app-development",
  },
  {
    title: "Web Development",
    description:
      "Modern websites and web apps developed according to your business needs.",
    image: "/Services/section/web.png",
    href: "/services/web-development",
  },
  {
    title: "Graphics Designing",
    description:
      "Design eye-catching UI/UX interfaces for effortless user interaction.",
    image: "/Services/section/graphics.webp",
    href: "/services/graphic-design",
  },
  {
    title: "Digital Marketing",
    description:
      "Custom digital marketing solutions for enhanced visibility and growth.",
    image: "/Services/section/digi.avif",
    href: "/services/digital-marketing",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Build a strong online presence and engage with your targeted audience.",
    image: "/Services/ssm/stat.jpg",
    href: "/services/social-media-marketing",
  },
  {
    title: "Content Writing & Creation",
    description:
      "Engaging and meaningful content to connect with your audience.",
    image: "/Services/section/content.jpg",
    href: "/services/content-writing",
  },
];

export default function ServicesGrid() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#cc0000]" />
            <span className="text-sm font-medium text-gray-500">
              Other Services
            </span>
            <div className="h-px w-10 bg-[#cc0000]" />
          </div>

          <h2
            className="font-bold text-gray-900 leading-tight tracking-tight italic"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            One Solution For All Your{" "}
            <span className="text-[#cc0000]">Digital Needs</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 md:gap-y-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <Link href={service.href}>
      <motion.div
        ref={cardRef}
        className="group flex flex-col gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          delay: (index % 4) * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="h-20 w-20 md:h-48 md:w-full "
          whileHover={{ scale: 1.05, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-[#cc0000] transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </Link>
  );
}

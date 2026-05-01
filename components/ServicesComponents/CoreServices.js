"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CoreServicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    subtitle: "We strategize content that converts.",
    description:
      "Our digital marketing services focus on creating data-driven strategies that deliver measurable results. We combine creative content with advanced analytics to build campaigns that not only engage your audience but drive conversions.",
    title2: "What we provide",
    points: [
      "Social media ads and organic posts",
      "Instagram reels and TikTok videos",
      "Email marketing and digital content",
    ],
    image: "/Services/DigitalMarketing.jpg",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Digital Branding",
    subtitle: "Crafting your visual identity.",
    description:
      "We create cohesive brand identities that resonate with your target audience and differentiate you from competitors. Our branding process involves deep market research, competitor analysis, and collaborative design sessions.",
    title2: "What we provide",
    points: [
      "Custom logo design and brand identity",
      "Comprehensive brand guidelines",
      "Strategic color systems and typography",
    ],
    image: "/Services/herosection3.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Web Development",
    subtitle: "Building scalable websites.",
    description:
      "We develop modern, responsive websites that provide exceptional user experiences across all devices. Our development approach emphasizes performance, security, and scalability, ensuring your website can grow with your business.",
    title2: "What we provide",
    points: ["Mobile-first responsive websites", "Custom eCommerce platforms"],
    image: "/Services/Webdevelopment.jpg",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    title: "Motion Graphics",
    subtitle: "Visual content that sells.",
    description:
      "Our video production services specialize in creating engaging short-form content optimized for social media platforms. From concept development to final delivery, we handle every aspect to ensure your content stands out.",
    title2: "What we provide",
    points: [
      "Professional video editing",
      "Custom motion graphics and animations",
    ],
    image: "/Services/poster.jpg",
    gradient: "from-orange-500 to-red-500",
  },
];

const serviceMenu = [
  "Digital marketing strategy",
  "Social media handling",
  "Brand identity design",
  "Website design and development",
  "Mobile app development",
  "Poster and motion graphics",
];

export default function CoreServices() {
  const wrapperRefs = useRef([]);
  const imageRefs = useRef([]);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const ctx = gsap.context(() => {
      if (mediaQuery.matches) {
        // Pin left side titles
        wrapperRefs.current.forEach((el) => {
          if (!el) return;
          ScrollTrigger.create({
            trigger: el,
            start: "top 20%",
            end: "bottom 60%",
            pin: el.querySelector(".left-side"),
            pinSpacing: false,
          });
        });

        // Parallax on images
        imageRefs.current.forEach((img) => {
          if (!img) return;
          gsap.fromTo(
            img,
            { y: 60, scale: 1.1 },
            {
              y: -60,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            },
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto py-20 md:py-32">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="flex items-center justify-center flex-col gap-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#cc0000]/10 border border-[#cc0000]/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Sparkles className="h-4 w-4 text-[#cc0000]" />
          <span className="text-sm font-semibold text-[#cc0000]">
            Core Services
          </span>
        </motion.div>

        <h1
          className="text-center font-bold tracking-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#cc0000] to-[#ff4444] bg-clip-text text-transparent">
            Core{" "}
          </span>
          Services
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl text-center leading-relaxed px-4">
          At JavTech, we craft stunning designs, build powerful websites and
          launch digital campaigns that drive results.
        </p>
      </motion.div>

      <section className="px-4 space-y-32 md:space-y-48">
        {CoreServicesData.map((item, index) => (
          <ServiceSection
            key={item.id}
            item={item}
            index={index}
            wrapperRefs={wrapperRefs}
            imageRefs={imageRefs}
          />
        ))}
      </section>
    </div>
  );
}

function ServiceSection({ item, index, wrapperRefs, imageRefs }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={(el) => {
        wrapperRefs.current[index] = el;
        sectionRef.current = el;
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
    >
      {/* Left - Pinned Title */}
      <div className="left-side relative">
        <motion.div
          className="md:sticky md:top-[25vh] space-y-5 flex flex-col md:items-end items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-black text-xl shadow-2xl`}
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          >
            {String(item.id).padStart(2, "0")}
          </motion.div>

          <h2
            className="font-black text-center md:text-right tracking-tight leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {item.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-500 text-center md:text-right leading-relaxed max-w-md">
            {item.subtitle}
          </p>

          <motion.div
            className={`h-1 w-20 rounded-full bg-gradient-to-r ${item.gradient} hidden md:block`}
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Right - Content */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* Image with parallax */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          ref={(el) => (imageRefs.current[index] = el)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {item.description}
        </p>

        {/* What we provide */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 md:p-8">
          <h4 className="text-xl md:text-2xl font-bold mb-5 flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}
            />
            {item.title2}
          </h4>
          <ul className="space-y-3">
            {item.points.map((pt, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                <div
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}
                >
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {pt}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

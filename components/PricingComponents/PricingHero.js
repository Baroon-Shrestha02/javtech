"use client";

import MainHero from "../SharedComponents/MainHero";
import HeroSection from "./shared/Hero";

export default function PricingHero() {
  const slides = [
    {
      eyebrow: "Web Solutions",
      title: "Web Development",
      description:
        "Creating stunning websites for businesses worldwide. Responsive, SEO-optimized, and built to impress.",
      bgImage: "/Services/herosection1.jpg",
      cta: {
        label: "Explore Web Services",
        href: "/services/web-development",
      },
    },
    {
      eyebrow: "Marketing",
      title: "Digital Marketing",
      description:
        "Our team crafts digital campaigns that convert visitors into loyal customers across all platforms.",
      bgImage: "/Services/one.jpg",
      cta: {
        label: "View Marketing Plans",
        href: "/abhiyan.jpeg",
      },
    },
    {
      eyebrow: "Development",
      title: "Web & App Development",
      description:
        "High-quality Web and App Development with modern technologies and best practices.",
      bgImage: "HFH.png",
      cta: {
        label: "See Our Work",
        href: "/our-works",
      },
    },
    {
      eyebrow: "Branding",
      title: "Branding & Identity",
      description:
        "We create memorable branding systems that define your business presence in the digital world.",
      bgImage: "/Services/herosection2.jpg",
      cta: {
        label: "Learn More",
        href: "/services/branding",
      },
    },
  ];

  return (
    <MainHero
      slides={slides}
      autoPlay={true}
      autoPlayInterval={5000}
      height="min-h-[75vh]"
      rounded={true}
    />
  );
}

"use client";

import MainHero from "../SharedComponents/MainHero";

export default function PricingHero() {
  const slides = [
    {
      eyebrow: "Pricing Plans",
      title: "Web Development Pricing",
      description:
        "Flexible pricing plans for websites and web applications—designed to fit startups, growing businesses, and enterprise needs.",
      bgImage: "/hero/webp.webp",
      cta: {
        label: "View Web Pricing",
        href: "/pricing/web-development",
      },
    },
    {
      eyebrow: "Marketing Packages",
      title: "Digital Marketing Pricing",
      description:
        "Transparent digital marketing packages tailored to your goals, covering SEO, paid ads, and performance campaigns.",
      bgImage: "/hero/digi.png",
      cta: {
        label: "Explore Marketing Packages",
        href: "/pricing/digital-marketing",
      },
    },
    {
      eyebrow: "Design Packages",
      title: "Branding & Design Pricing",
      description:
        "Creative branding and design packages structured to deliver high-impact visuals with clear, scalable pricing options.",
      bgImage: "/hero/brand.webp",
      cta: {
        label: "See Design Packages",
        href: "/pricing/branding",
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

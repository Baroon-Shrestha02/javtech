"use client";

import MainHero from "../../SharedComponents/MainHero";

export default function ServicesHero() {
  const slides = [
    {
      eyebrow: "Web Solutions",
      title: "Web Design",
      description:
        "Creating stunning websites for businesses worldwide. Responsive, SEO-optimized, and built to impress.",
      bgImage: "/hero/web.avif",
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
      bgImage: "/hero/market.jpg",
      cta: {
        label: "View Marketing Plans",
        href: "/abhiyan.jpeg",
      },
    },
    {
      eyebrow: "Branding",
      title: "Branding & Identity",
      description:
        "We create memorable branding systems that define your business presence in the digital world.",
      bgImage: "/hero/brand.png",
      cta: {
        label: "Learn More",
        href: "/services/branding",
      },
    },
  ];

  return (
    <>
      <MainHero
        slides={slides}
        autoPlay={true}
        autoPlayInterval={5000}
        height="min-h-[75vh]"
        rounded={true}
      />
    </>
  );
}

import CoreServices from "@/components/ServicesComponents/CoreServices";
import HorizontalScrollSection from "@/components/ServicesComponents/main/Horizontalscrollsection";
import HowWeWork from "@/components/ServicesComponents/HowWeWork";
import ServicesHero from "@/components/ServicesComponents/main/ServicesHero";
import WhatWeUse from "@/components/ServicesComponents/main/WhatWeUse";
import ServicesGrid from "@/components/ServicesComponents/main/Servicesgrid";
import CTASection from "@/components/ServicesComponents/main/CTA";

export const metadata = {
  title: "Services",
  description:
    "Software development, cloud, UX engineering, and ongoing support — tailored to your product roadmaps.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const cards = [
    {
      category: "Development",
      title: "Web Development",
      description:
        "High-performance, scalable websites built with modern frameworks and optimized for speed, SEO, and user experience.",
      image: "/Services/section/web.png",
      tags: ["React", "Next.js", "SEO"],
      href: "/services/web-development",
      ctaText: "Explore",
    },
    {
      category: "Development",
      title: "App Development",
      description:
        "Robust mobile and web applications tailored to your business needs with seamless performance and intuitive UI/UX.",
      image: "/Services/section/mobile.jpg",
      tags: ["Flutter", "React Native", "API"],
      href: "/services/app-development",
      ctaText: "Explore",
    },
    {
      category: "Marketing",
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your search rankings and drive organic traffic through strategic keyword targeting and technical optimization.",
      image: "/Services/section/seo.avif",
      tags: ["On-Page SEO", "Technical SEO", "Analytics"],
      href: "/services/seo",
      ctaText: "Explore",
    },
    {
      category: "Marketing",
      title: "Social Media Marketing (SMM)",
      description:
        "Build brand awareness and engage your audience with data-driven social media campaigns across major platforms.",
      image: "/Services/section/ssm.jpg",
      tags: ["Instagram", "Facebook", "Ads"],
      href: "/services/smm",
      ctaText: "Explore",
    },
    {
      category: "Marketing",
      title: "Content Writing & Creation",
      description:
        "Compelling and SEO-friendly content that communicates your brand message and converts visitors into customers.",
      image: "/Services/section/content.jpg",
      tags: ["Blogs", "Copywriting", "Brand Voice"],
      href: "/services/content-writing",
      ctaText: "Explore",
    },
    {
      category: "Marketing",
      title: "Graphic Design",
      description:
        "Creative visual assets that enhance your brand identity and deliver impactful communication across digital platforms.",
      image: "/Services/section/graphics.webp",
      tags: ["Branding", "UI Design", "Creatives"],
      href: "/services/graphic-design",
      ctaText: "Explore",
    },
    {
      category: "Marketing",
      title: "Digital Marketing",
      description:
        "End-to-end digital marketing strategies combining SEO, ads, content, and analytics to accelerate business growth.",
      image: "/Services/section/digi.avif",
      tags: ["Strategy", "Funnels", "Performance"],
      href: "/services/digital-marketing",
      ctaText: "Explore",
    },
  ];
  return (
    <main className="">
      <ServicesHero />
      {/* <WhatWeProvide /> */}
      <HorizontalScrollSection
        eyebrow="What We Provide"
        title="Our"
        highlightedText="Strategic Solutions"
        description="Explore our complete range of services designed to help your business grow."
        cards={cards}
        cardWidth={480}
      />
      <WhatWeUse />
      {/* need why choose us? */}
      {/* <ServicesGrid /> */}
      <CTASection />
      {/* <CoreServices /> */}
      {/* <HowWeWork /> */}
    </main>
  );
}

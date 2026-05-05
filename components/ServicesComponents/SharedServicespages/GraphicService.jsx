import SplitHero from "@/components/SharedComponents/Hero";
import React from "react";
import ExpertiseGrid from "./Shared/OurExpertise";
import ProcessSection from "./Shared/Processsection";
import WhyChooseUs from "./Shared/WhyChooseUs";
import CTASection from "../main/CTA";

const graphicsDesignData = {
  headerData: {
    title: "OUR PROCESS",
    header: "Designing Visual Impact",
    subheader:
      "We create visually compelling designs that communicate your brand message effectively.",
  },

  steps: [
    {
      number: "01",
      title: "Brief",
      description:
        "We understand your brand identity, goals, and design requirements.",
      points: ["Requirement gathering", "Brand analysis", "Mood board"],
    },
    {
      number: "02",
      title: "Concept",
      description: "We develop creative concepts aligned with your vision.",
      points: ["Idea generation", "Concept sketches", "Design direction"],
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create high-quality visuals using industry-standard tools.",
      points: ["Logo design", "Social media creatives", "Brand assets"],
    },
    {
      number: "04",
      title: "Refine",
      description: "We revise designs based on feedback to ensure perfection.",
      points: ["Client feedback", "Iterations", "Final adjustments"],
    },
    {
      number: "05",
      title: "Deliver",
      description:
        "We provide final files optimized for digital and print use.",
      points: ["Export formats", "Brand kit delivery", "Usage guidelines"],
    },
  ],
};

export default function GraphicService() {
  return (
    <div>
      <SplitHero
        title="Graphics Designing"
        tagline={"Native performance.\nCross-platform reach."}
        description="Full-stack development, branding, and marketing — all under one roof in Lalitpur, Nepal."
        image="/Services/section/graphics.webp"
      />

      <ExpertiseGrid
        eyebrow="GRAPHICS DESIGNING"
        title="What We Create"
        description="Visual assets that elevate brand identity."
        cards={[
          {
            title: "Brand Identity",
            description: "Logos, color systems, and brand guidelines.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/graphics/brand.avif",
          },
          {
            title: "Social Media Designs",
            description: "Posts, banners, and ad creatives.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/graphics/two.jpg",
          },
          {
            title: "UI/UX Graphics",
            description: "App and web interface design systems.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Print Designs",
            description: "Brochures, flyers, and marketing materials.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />

      <ProcessSection
        headerData={graphicsDesignData.headerData}
        steps={graphicsDesignData.steps}
      />
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Your Brand Needs to Stand Out"
        highlightedWords={["Brand"]}
        subtitle="Creative Visual Solutions"
        subtitleHighlight="Visual Solutions"
        description="We craft compelling visual identities that communicate your brand message and leave a lasting impression."
        image="/Services/why/graph.jpg"
        accentColor="#cc0000"
        features={[
          {
            title: "Creative Excellence",
            description: "Unique designs tailored to your brand.",
          },
          {
            title: "Brand Impact",
            description: "Designs that improve recognition.",
          },
          {
            title: "Consistent Identity",
            description: "Cohesive visuals across all platforms.",
          },
          {
            title: "Client Collaboration",
            description: "We design with your vision in mind.",
          },
        ]}
      />
      <CTASection />
    </div>
  );
}

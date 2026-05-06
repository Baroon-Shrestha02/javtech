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
        "We begin by understanding your brand identity, business goals, and visual requirements to set a clear creative direction.",
      points: [
        "Detailed requirement gathering and stakeholder discussions",
        "Brand analysis, positioning, and visual audit",
        "Mood board creation to define style and direction",
      ],
    },
    {
      number: "02",
      title: "Concept",
      description:
        "We explore creative directions and develop concepts that align with your brand vision and target audience.",
      points: [
        "Creative idea generation and concept exploration",
        "Initial sketches and layout compositions",
        "Design direction aligned with brand strategy",
      ],
    },
    {
      number: "03",
      title: "Design",
      description:
        "We craft high-quality, visually compelling designs using industry-standard tools and modern design principles.",
      points: [
        "Logo design and core brand identity elements",
        "Social media creatives and digital assets",
        "Comprehensive visual systems and brand assets",
      ],
    },
    {
      number: "04",
      title: "Refine",
      description:
        "We iterate and refine designs based on feedback to ensure alignment with your expectations and brand standards.",
      points: [
        "Structured client feedback and review cycles",
        "Multiple iterations for design refinement",
        "Final adjustments for precision and consistency",
      ],
    },
    {
      number: "05",
      title: "Deliver",
      description:
        "We deliver final design assets optimized for both digital and print use, ensuring long-term usability and consistency.",
      points: [
        "Export-ready files in multiple formats and resolutions",
        "Complete brand kit with organized assets",
        "Guidelines for proper usage and consistency",
      ],
    },
  ],
};

export default function GraphicService() {
  return (
    <div>
      <SplitHero
        title="Graphics Designing"
        tagline={"Design - Identity - Impact.\nVisual Excellence."}
        description="We create compelling visual designs and brand identities that communicate your message clearly, strengthen recognition, and elevate your presence across digital and print platforms."
        image="/Services/section/graphics.webp"
      />

      <ExpertiseGrid
        eyebrow="GRAPHICS DESIGNING"
        title="What We Create"
        description="We craft impactful visual assets that strengthen your brand identity, enhance communication, and create lasting impressions across digital and print platforms."
        cards={[
          {
            title: "Brand Identity",
            description:
              "We create distinctive brand identities including logos, color systems, and guidelines that ensure consistency and strong market recognition.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/graphics/brand.avif",
          },
          {
            title: "Social Media Designs",
            description:
              "Eye-catching social media visuals, banners, and ad creatives designed to boost engagement and strengthen your digital presence.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/graphics/two.jpg",
          },
          {
            title: "UI/UX Graphics",
            description:
              "Modern interface designs focused on usability, clarity, and visual consistency across web and mobile platforms.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Print Designs",
            description:
              "High-quality print materials including brochures, flyers, and marketing assets crafted to effectively communicate your brand message.",
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

import React from "react";
import HeroSection from "../Shared/Hero";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";

const contentCreationData = {
  headerData: {
    title: "OUR PROCESS",
    header: "Crafting Engaging Content",
    subheader:
      "We produce compelling content that connects, informs, and converts your audience.",
  },

  steps: [
    {
      number: "01",
      title: "Research",
      description: "We understand your audience, niche, and content goals.",
      points: ["Topic research", "Audience analysis", "Keyword research"],
    },
    {
      number: "02",
      title: "Plan",
      description: "We build a content calendar and strategy.",
      points: ["Content planning", "Platform strategy", "Editorial calendar"],
    },
    {
      number: "03",
      title: "Create",
      description: "We produce high-quality written and visual content.",
      points: ["Blog writing", "Social content", "Scripts & captions"],
    },
    {
      number: "04",
      title: "Optimize",
      description: "We optimize content for SEO and engagement.",
      points: ["SEO optimization", "Editing", "Formatting"],
    },
    {
      number: "05",
      title: "Publish",
      description: "We publish and track performance across platforms.",
      points: ["Publishing", "Distribution", "Performance tracking"],
    },
  ],
};

export default function ContentService() {
  return (
    <div>
      <SplitHero
        title="Content Creation"
        tagline={"Native performance.\nCross-platform reach."}
        description="We write contents based on your content needs, required features, and scalability goals."
        image="/services/section/content.jpg"
      />

      <ExpertiseGrid
        eyebrow="CONTENT WRITING & CREATION"
        title="Content That Converts"
        description="Strategic storytelling for digital growth."
        cards={[
          {
            title: "Blog & Article Writing",
            description: "SEO-friendly long-form content.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
          },
          {
            title: "Website Copywriting",
            description: "High-converting landing page copy.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
          },
          {
            title: "Script Writing",
            description: "Reels, ads, and video storytelling.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Content Strategy",
            description: "Planning and consistency frameworks.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection
        headerData={contentCreationData.headerData}
        steps={contentCreationData.steps}
      />
    </div>
  );
}

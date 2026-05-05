import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import CTASection from "../main/CTA";

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
        image="/Services/section/content.jpg"
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
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Content Defines Your Brand"
        highlightedWords={["Content"]}
        subtitle="Strategic Content Solutions"
        subtitleHighlight="Content Solutions"
        description="We create impactful content that connects with your audience, strengthens your brand voice, and drives conversions."
        image="/Services/why/content.jpg"
        accentColor="#cc0000"
        features={[
          {
            title: "High-Quality Content",
            description: "Well-researched and engaging writing.",
          },
          {
            title: "SEO Optimized",
            description: "Content designed to rank and perform.",
          },
          {
            title: "Brand Voice Consistency",
            description: "Aligned messaging across all channels.",
          },
          {
            title: "Content Strategy",
            description: "Planned for long-term growth.",
          },
        ]}
      />
      <CTASection />
    </div>
  );
}

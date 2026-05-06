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
      description:
        "We analyze your audience, industry, and content objectives to build a strong foundation for impactful content.",
      points: [
        "In-depth topic research and content gap analysis",
        "Target audience behavior and intent analysis",
        "Keyword research aligned with SEO opportunities",
      ],
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We develop a structured content strategy aligned with your brand voice, platforms, and long-term growth goals.",
      points: [
        "Strategic content planning and theme development",
        "Platform-specific content and distribution strategy",
        "Editorial calendar with consistent publishing schedule",
      ],
    },
    {
      number: "03",
      title: "Create",
      description:
        "We produce high-quality, engaging content tailored to your audience and designed to deliver measurable results.",
      points: [
        "SEO-focused blog and article writing",
        "Social media content, captions, and creatives",
        "Script writing for reels, ads, and video content",
      ],
    },
    {
      number: "04",
      title: "Optimize",
      description:
        "We refine and enhance content to maximize visibility, readability, and audience engagement across platforms.",
      points: [
        "On-page SEO optimization and keyword placement",
        "Content editing, proofreading, and quality checks",
        "Formatting for readability and platform performance",
      ],
    },
    {
      number: "05",
      title: "Publish & Analyze",
      description:
        "We publish your content and continuously monitor performance to improve reach, engagement, and conversions.",
      points: [
        "Content publishing across relevant platforms",
        "Distribution and promotion for wider reach",
        "Performance tracking, insights, and optimization",
      ],
    },
  ],
};

export default function ContentService() {
  return (
    <div>
      <SplitHero
        title="Content Creation"
        tagline={"Create - Engage - Influence.\nStrategic Storytelling."}
        description="We craft high-quality content tailored to your brand voice, audience needs, and marketing goals to drive engagement, build trust, and deliver measurable impact."
        image="/Services/section/content.jpg"
      />

      <ExpertiseGrid
        eyebrow="CONTENT WRITING & CREATION"
        title="Content That Converts"
        description="We create strategic, audience-focused content that drives engagement, strengthens brand voice, and converts attention into measurable growth."
        cards={[
          {
            title: "Blog & Article Writing",
            description:
              "We craft SEO-optimized blogs and articles that boost visibility, drive organic traffic, and establish your brand authority.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/cc/cc.webp",
          },
          {
            title: "Website Copywriting",
            description:
              "High-converting website copy designed to engage visitors, communicate value clearly, and turn traffic into customers.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/cc/cpy.avif",
          },
          {
            title: "Script Writing",
            description:
              "Compelling scripts for reels, ads, and videos that capture attention, tell your story, and drive audience engagement.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Content Strategy",
            description:
              "Structured content planning and execution frameworks to ensure consistency, scalability, and long-term brand growth.",
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

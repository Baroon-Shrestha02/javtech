import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import CTASection from "../main/CTA";

const ssmData = {
  headerData: {
    title: "OUR PROCESS",
    header: "Scaling Your Social Presence",
    subheader:
      "We create impactful strategies to grow your brand visibility and engagement across platforms.",
  },

  steps: [
    {
      number: "01",
      title: "Audit",
      description:
        "We assess your current social media presence, performance metrics, and competitive landscape to uncover growth opportunities.",
      points: [
        "Comprehensive profile and content audit",
        "Competitor benchmarking and trend analysis",
        "Audience behavior and engagement insights",
      ],
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We build a data-driven social media strategy aligned with your brand voice, goals, and target audience.",
      points: [
        "Content planning aligned with brand positioning",
        "Platform-specific growth and engagement strategy",
        "Campaign planning with clear objectives and KPIs",
      ],
    },
    {
      number: "03",
      title: "Create",
      description:
        "We produce high-quality, engaging content designed to capture attention and drive meaningful interactions.",
      points: [
        "Creative post designs and visual storytelling",
        "Reels, short-form video, and dynamic content creation",
        "Captions, hashtags, and messaging optimization",
      ],
    },
    {
      number: "04",
      title: "Manage",
      description:
        "We manage your social presence with consistent posting, audience engagement, and community interaction.",
      points: [
        "Content scheduling and publishing across platforms",
        "Active engagement, comments, and DM management",
        "Community building and brand interaction handling",
      ],
    },
    {
      number: "05",
      title: "Optimize & Grow",
      description:
        "We continuously analyze performance and refine strategies to maximize reach, engagement, and conversions.",
      points: [
        "Analytics tracking and performance evaluation",
        "A/B testing for content and campaign improvement",
        "Growth optimization and scaling high-performing content",
      ],
    },
  ],
};

export default function SSMService() {
  return (
    <div>
      <SplitHero
        title="Social Media Marketing"
        tagline={"Engage - Grow - Convert.\nMulti-Platform Impact."}
        description="We craft and manage tailored social media strategies aligned with your brand goals, campaign objectives, and growth roadmap to maximize reach, engagement, and conversions."
        image="/Services/section/ssm.jpg"
      />
      <ExpertiseGrid
        eyebrow="SOCIAL MEDIA MARKETING"
        title="Audience Engagement"
        description="Build a strong digital presence through consistent engagement, targeted content, and data-driven strategies that connect with your audience and drive meaningful growth."
        cards={[
          {
            title: "Content Strategy",
            description:
              "We develop data-driven, platform-specific content strategies to ensure consistent messaging, audience engagement, and long-term brand growth.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/ssm/stat.jpg",
          },
          {
            title: "Account Management",
            description:
              "End-to-end social media management including daily posting, audience engagement, and performance monitoring to maintain a strong online presence.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/ssm/acc.avif",
          },
          {
            title: "Paid Campaigns",
            description:
              "Targeted social media advertising campaigns designed to increase reach, generate leads, and maximize return on ad spend.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Influencer Marketing",
            description:
              "Strategic collaborations with influencers to amplify brand visibility, build trust, and reach highly targeted audiences.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection headerData={ssmData.headerData} steps={ssmData.steps} />
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Engagement Drives Success"
        highlightedWords={["Engagement"]}
        subtitle="Social Growth Specialists"
        subtitleHighlight="Social Growth"
        description="We build and manage social media strategies that increase engagement, visibility, and brand loyalty."
        image="/Services/why/ssm.jpg"
        accentColor="#cc0000"
        features={[
          {
            title: "Consistent Presence",
            description: "Regular, high-quality content delivery.",
          },
          {
            title: "Audience Growth",
            description: "Strategies to expand your reach.",
          },
          {
            title: "Platform Expertise",
            description: "Optimized for each social channel.",
          },
          {
            title: "Community Building",
            description: "Engaging and retaining your audience.",
          },
        ]}
      />
      <CTASection />
    </div>
  );
}

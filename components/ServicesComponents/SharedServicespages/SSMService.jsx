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
        "We evaluate your current social media presence and identify growth opportunities.",
      points: ["Profile audit", "Competitor analysis", "Audience insights"],
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We define content strategy aligned with your brand and business goals.",
      points: ["Content planning", "Platform strategy", "Campaign planning"],
    },
    {
      number: "03",
      title: "Create",
      description:
        "We design high-quality posts, reels, and creatives that resonate with your audience.",
      points: ["Post design", "Video content", "Captions & hashtags"],
    },
    {
      number: "04",
      title: "Manage",
      description:
        "We handle daily posting, engagement, and community management.",
      points: ["Scheduling", "Engagement", "DM management"],
    },
    {
      number: "05",
      title: "Optimize",
      description:
        "We analyze performance and continuously improve your campaigns.",
      points: ["Analytics tracking", "A/B testing", "Growth optimization"],
    },
  ],
};

export default function SSMService() {
  return (
    <div>
      <SplitHero
        title="Social Media Marketing"
        tagline={"Social Media Marketing.\nCross-platform reach."}
        description="Choose a social media marketing package based on your brand goals, campaign needs, and growth strategy."
        image="/services/section/ssm.jpg"
      />
      <ExpertiseGrid
        eyebrow="SOCIAL MEDIA MARKETING"
        title="Audience Engagement"
        description="Build strong digital presence and engagement."
        cards={[
          {
            title: "Content Strategy",
            description: "Platform-specific content planning.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/ssm/stat.jpg",
          },
          {
            title: "Account Management",
            description: "Daily posting and engagement handling.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/ssm/acc.avif",
          },
          {
            title: "Paid Campaigns",
            description: "Targeted social media advertisements.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Influencer Marketing",
            description: "Collaborations to boost brand reach.",
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

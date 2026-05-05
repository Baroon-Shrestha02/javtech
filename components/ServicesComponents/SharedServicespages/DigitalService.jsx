import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import CTASection from "../main/CTA";

const digitalMarketingData = {
  headerData: {
    title: "OUR PROCESS",
    header: "Driving Digital Growth",
    subheader:
      "We combine SEO, ads, and data-driven strategies to maximize your online performance.",
  },

  steps: [
    {
      number: "01",
      title: "Research",
      description: "We identify target audience, keywords, and market trends.",
      points: ["Keyword research", "Market analysis", "Audience targeting"],
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We build a marketing strategy tailored to your business objectives.",
      points: ["Campaign strategy", "Channel selection", "Budget planning"],
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We run campaigns across SEO, Google Ads, and social platforms.",
      points: ["SEO optimization", "Paid ads", "Content distribution"],
    },
    {
      number: "04",
      title: "Analyze",
      description: "We monitor campaign performance using real-time data.",
      points: ["Analytics tracking", "Conversion tracking", "Reporting"],
    },
    {
      number: "05",
      title: "Scale",
      description:
        "We optimize and scale successful campaigns for maximum ROI.",
      points: ["Optimization", "Scaling campaigns", "Performance tuning"],
    },
  ],
};

export default function DigitalService() {
  return (
    <div>
      <SplitHero
        title="Digital Marketing"
        tagline={"Native performance.\nCross-platform reach."}
        description="digital marketing based on your brand goals, campaign needs, and growth strategy."
        image="/Services/section/digi.avif"
      />

      <ExpertiseGrid
        eyebrow="DIGITAL MARKETING"
        title="Growth Solutions"
        description="Data-driven strategies to scale your business."
        cards={[
          {
            title: "SEO Optimization",
            description: "Improve visibility and organic traffic.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
          },
          {
            title: "Paid Advertising",
            description: "Google Ads, Meta Ads campaigns.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
          },
          {
            title: "Analytics & Tracking",
            description: "Performance insights and reporting.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Conversion Optimization",
            description: "Maximize ROI and lead generation.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection
        headerData={digitalMarketingData.headerData}
        steps={digitalMarketingData.steps}
      />
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Growth Is Your Priority"
        highlightedWords={["Growth"]}
        subtitle="Performance Marketing Experts"
        subtitleHighlight="Performance Marketing"
        description="We deliver data-driven marketing strategies designed to maximize ROI and accelerate your business growth."
        image="/Services/why/digi.jpg"
        accentColor="#cc0000"
        features={[
          {
            title: "Data-Driven Strategy",
            description: "Decisions backed by real analytics.",
          },
          {
            title: "ROI Focused",
            description: "Campaigns optimized for maximum returns.",
          },
          {
            title: "Brand Consistency",
            description: "Unified messaging across all channels.",
          },
          {
            title: "Transparent Reporting",
            description: "Clear insights and regular updates.",
          },
        ]}
      />
      <CTASection />
    </div>
  );
}

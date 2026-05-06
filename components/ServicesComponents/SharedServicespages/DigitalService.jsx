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
      description:
        "We analyze your target audience, industry landscape, and search behavior to uncover opportunities for growth.",
      points: [
        "Advanced keyword research and search intent analysis",
        "Market trends and competitor performance evaluation",
        "Audience segmentation and targeting strategy",
      ],
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We create a data-driven marketing strategy aligned with your business goals and campaign objectives.",
      points: [
        "Campaign strategy tailored to business objectives",
        "Channel selection across SEO, paid ads, and social media",
        "Budget allocation and performance forecasting",
      ],
    },
    {
      number: "03",
      title: "Execute",
      description:
        "We launch and manage campaigns across multiple digital channels to drive traffic, leads, and conversions.",
      points: [
        "SEO implementation and on-page optimization",
        "Paid advertising across Google and social platforms",
        "Content distribution and audience engagement",
      ],
    },
    {
      number: "04",
      title: "Analyze",
      description:
        "We track performance using real-time data to measure results and identify areas for improvement.",
      points: [
        "Advanced analytics and campaign performance tracking",
        "Conversion tracking and user behavior insights",
        "Detailed reporting with actionable recommendations",
      ],
    },
    {
      number: "05",
      title: "Optimize & Scale",
      description:
        "We continuously refine and scale high-performing campaigns to maximize ROI and long-term growth.",
      points: [
        "Campaign optimization based on data insights",
        "Scaling successful campaigns for higher returns",
        "Performance tuning and continuous improvement",
      ],
    },
  ],
};

export default function DigitalService() {
  return (
    <div>
      <SplitHero
        title="Digital Marketing"
        tagline={"Reach - Engage - Convert.\nPerformance-Driven Growth."}
        description="We deliver data-driven digital marketing strategies aligned with your brand goals, campaign objectives, and growth roadmap to maximize visibility, leads, and ROI."
        image="/Services/section/digi.avif"
      />

      <ExpertiseGrid
        eyebrow="DIGITAL MARKETING"
        title="Growth Solutions"
        description="We implement data-driven marketing strategies designed to increase visibility, attract qualified leads, and scale your business with measurable results."
        cards={[
          {
            title: "SEO Optimization",
            description:
              "Enhance search rankings and drive consistent organic traffic through technical SEO, keyword strategy, and content optimization.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/section/seo.avif",
          },
          {
            title: "Paid Advertising",
            description:
              "Run targeted Google Ads and Meta campaigns to generate high-quality leads, increase conversions, and maximize ad spend efficiency.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/cc/ads.png",
          },
          {
            title: "Analytics & Tracking",
            description:
              "Gain actionable insights with advanced tracking, data analysis, and performance reporting to support informed decision-making.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Conversion Optimization",
            description:
              "Improve user journeys and conversion rates through A/B testing, UX enhancements, and data-driven optimization strategies.",
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

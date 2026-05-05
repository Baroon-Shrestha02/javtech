import React from "react";
import HeroSection from "../Shared/Hero";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";

const webDevData = {
  headerData: {
    title: "OUR PROCESS",
    header: "Building Modern Web Experiences",
    subheader:
      "From concept to deployment, we craft fast, scalable, and user-centric web solutions.",
  },

  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "We analyze your business goals, audience, and technical requirements to define the project scope.",
      points: [
        "Requirement analysis",
        "Competitor research",
        "Project roadmap",
      ],
    },
    {
      number: "02",
      title: "Design",
      description:
        "We create wireframes and UI/UX designs focused on user engagement and conversion.",
      points: ["Wireframing", "UI/UX design", "Prototype approval"],
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We build responsive, high-performance websites using modern technologies.",
      points: ["Frontend development", "Backend integration", "API setup"],
    },
    {
      number: "04",
      title: "Test",
      description:
        "We ensure your website works flawlessly across devices and browsers.",
      points: [
        "Cross-browser testing",
        "Performance optimization",
        "Bug fixing",
      ],
    },
    {
      number: "05",
      title: "Launch",
      description:
        "We deploy your website and ensure a smooth launch with ongoing support.",
      points: ["Deployment", "SEO basics", "Maintenance"],
    },
  ],
};

export default function WebService() {
  return (
    <div>
      <SplitHero
        title="Web Development"
        tagline={"Web Development.\nCross-platform reach."}
        description="We develop website and web apps based on your brand goals, campaign needs, and growth strategy."
        image="/services/section/web.png"
      />

      <ExpertiseGrid
        eyebrow="WEB DEVELOPMENT"
        title="What We Build"
        description="Full-stack solutions for every business need."
        cards={[
          {
            title: "E-Commerce Stores",
            description: "Shopify, WooCommerce, custom builds.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/web/ec.jpg",
          },
          {
            title: "Web Applications",
            description: "SaaS dashboards, portals, admin panels.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/web/web.png",
          },
          {
            title: "Landing Pages",
            description: "Conversion-optimized single pages.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "CMS Websites",
            description: "WordPress, Sanity, Strapi.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection
        headerData={webDevData.headerData}
        steps={webDevData.steps}
      />
    </div>
  );
}

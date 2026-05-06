import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import CTASection from "../main/CTA";

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
        "We analyze your business objectives, target audience, and technical requirements to define a clear and scalable project scope.",
      points: [
        "Detailed requirement analysis and stakeholder alignment",
        "Competitor research and market positioning insights",
        "Project roadmap, scope definition, and timeline planning",
      ],
    },
    {
      number: "02",
      title: "Design",
      description:
        "We craft intuitive wireframes and high-impact UI/UX designs focused on user engagement and conversion.",
      points: [
        "Wireframing and user journey mapping",
        "Modern UI/UX design with conversion focus",
        "Interactive prototypes and client approval",
      ],
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We build responsive, high-performance websites using modern technologies and scalable architecture.",
      points: [
        "Frontend development with optimized performance",
        "Backend integration and secure functionality",
        "API development and third-party integrations",
      ],
    },
    {
      number: "04",
      title: "Test & Optimize",
      description:
        "We ensure your website performs flawlessly across devices, browsers, and real-world usage scenarios.",
      points: [
        "Cross-browser and cross-device compatibility testing",
        "Performance optimization and speed enhancements",
        "Bug fixing, QA testing, and usability improvements",
      ],
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "We deploy your website smoothly and provide ongoing support to ensure long-term performance and growth.",
      points: [
        "Deployment and go-live process management",
        "Basic SEO setup and performance readiness",
        "Ongoing maintenance, updates, and technical support",
      ],
    },
  ],
};

export default function WebService() {
  return (
    <div>
      <SplitHero
        title="Web Development"
        tagline={"Build - Scale - Perform.\nModern Web Experiences."}
        description="We design and develop high-performance websites and web applications tailored to your brand vision, campaign objectives, and long-term growth strategy."
        image="/Services/section/web.png"
      />

      <ExpertiseGrid
        eyebrow="WEB DEVELOPMENT"
        title="What We Build"
        description="We deliver full-stack web solutions tailored to your business needs—combining modern design, scalable architecture, and high-performance development to help you launch, grow, and succeed online."
        cards={[
          {
            title: "E-Commerce Stores",
            description:
              "We build high-performing e-commerce platforms using Shopify, WooCommerce, and custom solutions to drive sales and deliver seamless shopping experiences.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/web/ec.jpg",
          },
          {
            title: "Web Applications",
            description:
              "Custom web applications including SaaS platforms, dashboards, and admin panels designed for scalability, performance, and business efficiency.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/web/web.png",
          },
          {
            title: "Landing Pages",
            description:
              "Conversion-focused landing pages optimized for speed, user experience, and lead generation to maximize campaign performance.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "CMS Websites",
            description:
              "Flexible CMS-driven websites using WordPress, Sanity, and Strapi, enabling easy content management and long-term scalability.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection
        headerData={webDevData.headerData}
        steps={webDevData.steps}
      />
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Your Website Matters Most"
        highlightedWords={["Website"]}
        subtitle="High-Performance Web Solutions"
        subtitleHighlight="Web Solutions"
        description="We engineer fast, scalable, and secure websites that not only look great but drive measurable business outcomes."
        image="/Services/why/web.webp"
        accentColor="#cc0000"
        features={[
          {
            title: "Optimized Performance",
            description: "Lightning-fast websites with seamless UX.",
          },
          {
            title: "Conversion Focused",
            description: "Designed to generate leads and sales.",
          },
          {
            title: "Secure Architecture",
            description: "Built with modern security standards.",
          },
          {
            title: "Long-Term Support",
            description: "Continuous improvements and maintenance.",
          },
        ]}
      />
      <CTASection />
    </div>
  );
}

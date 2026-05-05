import React from "react";
import SplitHero from "@/components/SharedComponents/Hero";
import ProcessSection from "./Shared/Processsection";
import ExpertiseGrid from "./Shared/OurExpertise";
import WhyChooseUs from "./Shared/WhyChooseUs";
import Pricing from "./Shared/Pricing";
import CTASection from "../main/CTA";

const appProcessData = {
  headerData: {
    title: "OUR PROCESS",
    header: "How We Build Apps",
    subheader:
      "A structured and agile workflow to deliver scalable applications from idea to launch.",
  },

  steps: [
    {
      number: "01",
      title: "Discuss",
      description:
        "We start by understanding your business goals, app idea, target users, required features, and technical expectations.",
      points: ["Requirement gathering", "Goal alignment", "Timeline planning"],
    },
    {
      number: "02",
      title: "Design",
      description:
        "We convert your ideas into wireframes, user flows, and clean UI/UX designs before development starts.",
      points: ["Wireframing", "UI/UX design", "Prototype review"],
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We build the app using scalable frontend, backend, database, and API architecture.",
      points: [
        "Frontend development",
        "Backend development",
        "API integration",
      ],
    },
    {
      number: "04",
      title: "Test",
      description:
        "We test the application for performance, usability, responsiveness, bugs, and real-world usage scenarios.",
      points: ["QA testing", "Bug fixing", "Performance optimization"],
    },
    {
      number: "05",
      title: "Deliver",
      description:
        "We deploy the app, provide launch support, and continue improvements based on feedback.",
      points: ["Deployment", "Launch support", "Maintenance"],
    },
  ],
};

export default function AppService() {
  return (
    <section>
      <SplitHero
        title="App Development"
        tagline={"Native performance.\nCross-platform reach."}
        description="We develop applications based on your product vision, required features, and scalability goals."
        image="/services/section/mobile.jpg"
      />

      <ExpertiseGrid
        eyebrow="APP DEVELOPMENT"
        title="What We Build"
        description="Scalable mobile solutions tailored for modern users."
        cards={[
          {
            title: "iOS & Android Apps",
            description: "Native and cross-platform mobile applications.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/app/mobile2.jpg",
          },
          {
            title: "Cross-Platform Apps",
            description: "Flutter & React Native unified builds.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/app/mobile.jpg",
          },
          {
            title: "UI/UX Design",
            description: "User-focused mobile app interfaces.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "App Maintenance",
            description: "Updates, scaling, and performance optimization.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <ProcessSection
        headerData={appProcessData.headerData}
        steps={appProcessData.steps}
      />
      <WhyChooseUs
        eyebrow="Why Choose Us?"
        title="When Your App Needs to Perform"
        highlightedWords={["App"]}
        subtitle="Scalable Mobile Experiences"
        subtitleHighlight="Mobile Experiences"
        description="We build intuitive, high-performance mobile applications that deliver seamless user experiences across devices."
        image="/Services/why/app.webp"
        accentColor="#cc0000"
        features={[
          {
            title: "Smooth Performance",
            description: "Optimized apps with fast load times.",
          },
          {
            title: "User-Centric Design",
            description: "Focused on engagement and retention.",
          },
          {
            title: "Secure & Stable",
            description: "Robust backend and data protection.",
          },
          {
            title: "Lifecycle Support",
            description: "From launch to scaling and updates.",
          },
        ]}
      />
      <CTASection />
    </section>
  );
}

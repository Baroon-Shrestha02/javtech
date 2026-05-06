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
      title: "Discover",
      description:
        "We begin by understanding your business objectives, target audience, and product vision to define a clear development roadmap.",
      points: [
        "In-depth requirement analysis and stakeholder discussions",
        "Target audience research and market positioning insights",
        "Project roadmap, scope definition, and timeline planning",
      ],
    },
    {
      number: "02",
      title: "Design",
      description:
        "We transform ideas into intuitive user experiences through wireframes, prototypes, and visually engaging UI/UX designs.",
      points: [
        "Detailed wireframing and interactive prototyping",
        "User experience (UX) structure and flow optimization",
        "Modern, visually consistent user interface (UI) design",
      ],
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Our team builds scalable, high-performance applications using modern technologies and robust architecture.",
      points: [
        "Frontend and backend development with clean architecture",
        "Secure API integration and third-party service connections",
        "Database design and scalable system infrastructure setup",
      ],
    },
    {
      number: "04",
      title: "Test & Optimize",
      description:
        "We rigorously test the application to ensure performance, security, and a seamless user experience across all devices.",
      points: [
        "Comprehensive quality assurance and usability testing",
        "Bug fixing, debugging, and continuous refinements",
        "Performance tuning, speed optimization, and responsiveness",
      ],
    },
    {
      number: "05",
      title: "Launch & Scale",
      description:
        "We deploy your application, support the launch, and continuously improve it to support long-term growth.",
      points: [
        "Smooth deployment and go-live process management",
        "Post-launch monitoring, support, and issue resolution",
        "Ongoing updates, feature enhancements, and scalability improvements",
      ],
    },
  ],
};

export default function AppService() {
  return (
    <section className="">
      <SplitHero
        title="App Development"
        tagline={"Build - Launch - Scale.\nSeamless Mobile Experiences."}
        description="We design and develop high-performance mobile applications aligned with your product vision, feature requirements, and long-term scalability goals."
        image="/Services/section/mobile.jpg"
      />

      <ExpertiseGrid
        eyebrow="APP DEVELOPMENT"
        title="What We Build"
        description="We build scalable, high-performance mobile applications tailored for modern users, delivering seamless experiences across platforms and devices."
        cards={[
          {
            title: "iOS & Android Apps",
            description:
              "We build high-performance native and cross-platform mobile apps tailored for seamless user experience across both iOS and Android platforms.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/Services/app/mobile2.jpg",
          },
          {
            title: "Cross-Platform Apps",
            description:
              "Develop once, deploy everywhere. We create efficient cross-platform apps using Flutter and React Native for consistent performance across devices.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/app/mobile.jpg",
          },
          {
            title: "UI/UX Design",
            description:
              "We design intuitive, user-centric interfaces that enhance usability, engagement, and overall mobile app experience.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "App Maintenance",
            description:
              "Ensure long-term performance with regular updates, bug fixes, scalability improvements, and ongoing technical support.",
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

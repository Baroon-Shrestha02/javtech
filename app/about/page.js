"use client";

import CoreValues from "@/components/AboutComponents/CoreValues";
import GlobalStyles from "@/components/AboutComponents/GlobalStyles";
import HeroSection from "@/components/AboutComponents/HeroSection";
import TeamSection from "@/components/AboutComponents/TeamSection";
import WhoWeAre from "@/components/AboutComponents/WhoWeAre";
import { useEffect } from "react";
// import Logo from '@/components/AboutComponents/Logo';
import ServicesSection from "@/components/AboutComponents/ServicesSection";
import ProcessSection from "@/components/AboutComponents/ProcessSection";
import CTASection from "@/components/AboutComponents/CTASection";
import { StatsSection } from "@/components/AboutComponents/Statssection";
import { VideoSection } from "@/components/AboutComponents/VideoSection";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles />

      <main className="overflow-hidden bg-white">
        {/* <Logo /> */}
        <HeroSection />
        {/* <VideoSection /> */}
        {/* <WhoWeAre /> */}
        <StatsSection />
        <TeamSection />
        {/* <CoreValues />
        <ServicesSection /> */}
        {/* <ProcessSection />
        <CTASection /> */}
      </main>
    </>
  );
}

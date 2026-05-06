// import { CtaBand, HeroSection, ServicesPreview } from "@/components/HomeSections";
import HomeCTA from "@/components/HomeComponents/HomeCTA";
import { OurProjects } from "@/components/HomeComponents/OurProjects";
import { OurServices } from "@/components/HomeComponents/OurServices";
import { PartnersSlider } from "@/components/HomeComponents/PartnerSlider";
import Services from "@/components/HomeComponents/Services";
import Testimonials from "@/components/HomeComponents/Testimonials";
import VideoSection from "@/components/HomeComponents/VideoSection";

import { WhoWeAre } from "@/components/HomeComponents/WhoWeAre";
import Why from "@/components/HomeComponents/Why";
import ExpertiseGrid from "@/components/ServicesComponents/SharedServicespages/Shared/OurExpertise";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <VideoSection />
      <PartnersSlider />
      <WhoWeAre />
      <ExpertiseGrid
        eyebrow="Our Services"
        title="How Can We Help You?"
        description="From eCommerce and SaaS to applications and design, our team turns bold visions into digital products that inspire and achieve results."
        cards={[
          {
            title: "Custom Web & Mobile App Development",
            description:
              "We design and develop scalable, high-performance web and mobile applications tailored to your business goals using modern technologies like React, Laravel, and React Native.",
            gradient:
              "linear-gradient(155deg, #6d0000 0%, #a71010 55%, #c0392b 100%)",
            image: "/home/services.png",
          },
          {
            title: "Cross-Platform Apps",
            description:
              "Build once, deploy everywhere. We create efficient cross-platform applications using Flutter and React Native to ensure consistent performance across all devices.",
            gradient:
              "linear-gradient(145deg, #8b0000 0%, #b71c1c 55%, #c62828 100%)",
            image: "/Services/app/mobile.jpg",
          },
          {
            title: "UI/UX Design",
            description:
              "We craft intuitive and visually engaging user interfaces focused on seamless user experience, ensuring higher engagement and satisfaction.",
            gradient:
              "linear-gradient(145deg, #a71010 0%, #c62828 60%, #d32f2f 100%)",
          },
          {
            title: "Digital Marketing",
            description:
              "Drive traffic, generate leads, and grow your brand with data-driven digital marketing strategies including SEO, paid ads, and performance optimization.",
            gradient:
              "linear-gradient(145deg, #c0392b 0%, #d32f2f 55%, #e53935 100%)",
          },
        ]}
      />
      <OurProjects />
      <Why />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}

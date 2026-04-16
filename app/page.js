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

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <VideoSection />
      <PartnersSlider />
      <WhoWeAre />
      <Services />
      <OurProjects />
      <Why />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}

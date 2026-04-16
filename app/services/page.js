import CoreServices from "@/components/ServicesComponents/CoreServices";
import HowWeWork from "@/components/ServicesComponents/HowWeWork";
import ServicesHero from "@/components/ServicesComponents/ServicesHero";

export const metadata = {
  title: "Services",
  description:
    "Software development, cloud, UX engineering, and ongoing support — tailored to your product roadmaps.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="">
      <ServicesHero />
      <CoreServices />
      <HowWeWork />
    </main>
  );
}

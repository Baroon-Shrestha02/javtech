import { Hero } from "@/components/TestimonialComponents/Hero";
import Testimonials from "@/components/TestimonialComponents/Testimonials";

export const metadata = {
  title: "Services",
  description:
    "Software development, cloud, UX engineering, and ongoing support — tailored to your product roadmaps.",
  alternates: { canonical: "/services" },
};

export default function TestimoinalsPage() {
  return (
    <main className="">
      <Hero />
      <Testimonials />
    </main>
  );
}

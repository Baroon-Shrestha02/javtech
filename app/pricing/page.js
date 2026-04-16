import Pricing from "@/components/PricingComponents/Pricing";
import PricingFAQ from "@/components/PricingComponents/PricingFAQ";
import PricingHero from "@/components/PricingComponents/PricingHero";

export const metadata = {
  title: "Pricing",
  description:
    "Flexible engagement models — project-based delivery, dedicated team, or advisory retainers.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="">
      <PricingHero />
      <Pricing />
      <PricingFAQ />
    </main>
  );
}

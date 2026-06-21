import SecurityPricing from "@/components/PricingComponents/ServiceBasedPricing/Security";
import WebPricing from "@/components/PricingComponents/ServiceBasedPricing/WebPricing";

export const metadata = { title: "Cyber Security Pricing" };

export default function security() {
  return (
    <main>
      <SecurityPricing />
    </main>
  );
}

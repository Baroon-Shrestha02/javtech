import DigitalService from "@/components/ServicesComponents/SharedServicespages/DigitalService";

export const metadata = {
  title: "Digital Marketing Services",
  description:
    "Digital marketing services for social campaigns, SEO, paid ads, and measurable growth.",
  alternates: { canonical: "/services/digital-marketing" },
};

export default function DigitalMarketing() {
  return (
    <>
      <DigitalService />
    </>
  );
}

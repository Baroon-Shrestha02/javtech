import AppService from "@/components/ServicesComponents/SharedServicespages/AppService";
import Operations from "@/components/ServicesComponents/SharedServicespages/Operations";

export const metadata = {
  title: "Cloud Security Services",
  description:
    "Mobile app development for MVPs, product dashboards, and scalable app experiences.",
  alternates: { canonical: "/services/app-development" },
};

export default function CloudSecurity() {
  return (
    <>
      <Operations />
    </>
  );
}

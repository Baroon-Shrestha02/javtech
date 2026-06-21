import AppService from "@/components/ServicesComponents/SharedServicespages/AppService";
import CloudSecurity from "@/components/ServicesComponents/SharedServicespages/CloudSecurity";
import { Cloud } from "lucide-react";

export const metadata = {
  title: "Cloud Security Services",
  description:
    "Mobile app development for MVPs, product dashboards, and scalable app experiences.",
  alternates: { canonical: "/services/app-development" },
};

export default function CloudSecurityService() {
  return (
    <>
      <CloudSecurity />
    </>
  );
}

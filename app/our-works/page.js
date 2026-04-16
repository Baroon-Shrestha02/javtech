import { AllProjects } from "@/components/ProjectComponents/AllProjects";
import ProjectsHero from "@/components/ProjectComponents/Hero";

export const metadata = {
  title: "Our works",
  description:
    "Selected case studies and product launches — interfaces, platforms, and internal tools.",
  alternates: { canonical: "/our-works" },
};

const cases = [
  {
    name: "FinSight Analytics",
    desc: "Real-time dashboards & reporting for finance teams.",
  },
  {
    name: "Northwind Commerce",
    desc: "Headless storefront with sub-second LCP globally.",
  },
  {
    name: "Helio Field Ops",
    desc: "Mobile-first operations suite with offline support.",
  },
];

export default function WorksPage() {
  return (
    <main className="">
      <ProjectsHero />
      <AllProjects />
    </main>
  );
}

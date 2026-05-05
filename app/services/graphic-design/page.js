import GraphicService from "@/components/ServicesComponents/SharedServicespages/GraphicService";

export const metadata = {
  title: "Graphic Design Services",
  description: "Graphic design services for businesses and organizations.",
  alternates: { canonical: "/services/graphic-design" },
};

export default function GraphicDesign() {
  return (
    <>
      <GraphicService />
    </>
  );
}

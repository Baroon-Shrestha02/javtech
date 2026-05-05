import ContentService from "@/components/ServicesComponents/SharedServicespages/ContentService";

export const metadata = {
  title: "Content Writing Services",
  description: "Content writing services for businesses and organizations.",
  alternates: { canonical: "/services/content-writing" },
};

export default function ContentWriting() {
  return (
    <>
      <ContentService />
    </>
  );
}

import CareerMain from "@/components/CareerComponents/CareerMain";

export const metadata = {
  title: "Career",
  description:
    "Join JavTech — open roles for engineers and designers who care about craft and ownership.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <main className="section">
      <div className="container-app">
        <h1 className="section-title">Career</h1>
        <p className="lead">
          We hire people who like autonomy, clear communication, and shipping.
        </p>
      </div>

      <CareerMain />
    </main>
  );
}

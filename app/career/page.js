export const metadata = {
  title: "Career",
  description:
    "Join JavTech — open roles for engineers and designers who care about craft and ownership.",
  alternates: { canonical: "/career" },
};

const roles = [
  "Senior Full-stack Engineer (Next.js)",
  "Product Designer (UI/UX)",
  "DevOps / Platform Engineer",
];

export default function CareerPage() {
  return (
    <main className="section">
      <div className="container-app">
        <h1 className="section-title">Career</h1>
        <p className="lead">
          We hire people who like autonomy, clear communication, and shipping. Replace these
          titles with your real openings.
        </p>
        <div className="glass max-w-3xl p-7">
          <h2 className="mt-0 text-xl font-semibold">Open roles</h2>
          <ul className="m-0 list-disc space-y-2 pl-5 leading-relaxed">
            {roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

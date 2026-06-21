import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
  HeartHandshake,
  Rocket,
} from "lucide-react";

const industries = [
  { name: "Banking", Icon: Landmark },
  { name: "Healthcare", Icon: HeartPulse },
  { name: "Education", Icon: GraduationCap },
  { name: "Government", Icon: Building2 },
  { name: "NGOs", Icon: HeartHandshake },
  { name: "Startups", Icon: Rocket },
];

export default function IndustriesWeProtect() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#cc0000]">
            Industries We Protect
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted Across Critical Sectors
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            We deliver tailored security solutions for organizations where data
            protection and uptime are mission-critical.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition-all hover:-translate-y-1 hover:border-[#cc0000]/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#cc0000]/10 transition-colors group-hover:bg-[#cc0000]/20">
                <Icon className="h-7 w-7 text-[#cc0000]" strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-gray-800">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

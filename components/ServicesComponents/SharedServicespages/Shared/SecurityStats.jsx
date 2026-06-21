import { Clock, ShieldCheck, BrainCircuit, Zap, Building2 } from "lucide-react";

const securityStats = [
  { value: "24/7", label: "Security Monitoring", Icon: Clock },
  { value: "99.9%", label: "Threat Detection Accuracy", Icon: ShieldCheck },
  { value: "AI-Powered", label: "Threat Intelligence", Icon: BrainCircuit },
  { value: "Rapid", label: "Incident Response", Icon: Zap },
  { value: "Enterprise-Grade", label: "Security Solutions", Icon: Building2 },
];

export default function SecurityStats() {
  return (
    <section className="bg-gradient-to-br from-[#6d0000] via-[#a71010] to-[#c0392b] py-16 mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {securityStats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-white"
            >
              <Icon className="mb-3 h-8 w-8 text-white/90" strokeWidth={1.5} />
              <span className="text-2xl font-bold tracking-tight md:text-3xl">
                {value}
              </span>
              <span className="mt-1 text-sm text-white/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

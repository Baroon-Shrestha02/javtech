'use client';

export default function ProcessSection() {
  const phases = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business goals, target audience, and technical requirements through comprehensive research.',
      icon: '🔍',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers create intuitive wireframes and interactive prototypes, ensuring perfect alignment before development begins.',
      icon: '🎨',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with continuous testing, regular demos, and your feedback integrated at every sprint cycle.',
      icon: '⚙️',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We deploy your product and provide ongoing support to ensure continued success and optimal performance.',
      icon: '🚀',
    },
  ];

  return (
    <section className="reveal relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] opacity-20"></div>
      
      <div className="container-app relative">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-sm border border-white/20">
            OUR PROCESS
          </div>
          <h2 className="mb-6 text-5xl font-black lg:text-6xl">How We Deliver Excellence</h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            A proven methodology that ensures quality, transparency, and exceptional results
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {phases.map((phase, idx) => (
            <div key={idx} className="group relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="text-7xl font-black text-white/10 transition-all group-hover:text-white/30">
                  {phase.step}
                </div>
                <div className="text-5xl transition-transform group-hover:scale-125">{phase.icon}</div>
              </div>
              <h3 className="mb-4 text-3xl font-black">{phase.title}</h3>
              <p className="text-slate-400 leading-relaxed">{phase.description}</p>
              {idx < 3 && (
                <div className="mt-8 hidden h-1 w-full rounded-full bg-gradient-to-r from-red-500 to-blue-500 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

export default function CoreValues() {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Your success is our success. We work as a true extension of your team, deeply invested in achieving your goals together.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, design aesthetics, and project delivery without any compromise.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🎯',
      title: 'Results',
      description: 'We focus on measurable outcomes that drive real business value, sustainable growth, and exceptional ROI for our clients.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="reveal bg-white py-24">
      <div className="container-app">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
            OUR CORE VALUES
          </div>
          <h2 className="mb-6 text-5xl font-black text-slate-900 lg:text-6xl">
            What Drives Us Forward
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            The principles that guide every decision we make and every solution we deliver
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-50 p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${value.color} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-30`}></div>
              <div className="relative">
                <div className={`mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-4xl shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                  {value.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black text-slate-900">{value.title}</h3>
                <p className="leading-relaxed text-slate-600">{value.description}</p>
              </div>
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${value.color} transition-all duration-500 group-hover:w-full rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
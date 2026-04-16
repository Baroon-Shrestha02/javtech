'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks that deliver exceptional user experiences and performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'Secure & Scalable'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that users love to engage with daily.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and seamless migration services using industry-leading platforms and best practices.',
      features: ['AWS/Azure/GCP', 'DevOps Pipeline', 'Auto-scaling', 'Cost Optimization'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces backed by deep user research and industry-leading design best practices.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and comprehensive analytics.',
      features: ['Shopify Expert', 'WooCommerce', 'Custom Platforms', 'Payment Gateway'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🔧',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and plan for sustainable business growth.',
      features: ['Digital Strategy', 'Tech Audit', 'Roadmap Planning', 'Team Training'],
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="reveal relative overflow-hidden bg-slate-50 py-24">
      <div className="container-app">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-red-500 to-blue-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
            WHAT WE DO
          </div>
          <h2 className="mb-6 text-5xl font-black text-slate-900 lg:text-6xl">
            Comprehensive IT Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            End-to-end technology services tailored to your unique business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <div className={`absolute -right-14 -top-14 h-48 w-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-25`}></div>
              
              <div className="relative">
                <div className={`mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-4xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  {service.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-black text-slate-900">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-600">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                      <span className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} text-white text-xs`}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-6 font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-0 transition-all group-hover:opacity-100 flex items-center`}>
                  Learn More
                  <span className="ml-2">→</span>
                </button>
              </div>
              
              <div className={`absolute bottom-0 left-0 h-2 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-full rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
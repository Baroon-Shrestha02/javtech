"use client";

export default function CTASection() {
  return (
    <section className="reveal relative overflow-hidden bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px] opacity-20"></div>

      <div className="container-app relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-5xl font-black lg:text-6xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mb-12 text-2xl text-white/90">
            Let&apos;s discuss how we can transform your business with
            innovative technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="rounded-full bg-white px-12 py-6 text-xl font-black text-blue-600 shadow-2xl transition-all hover:scale-110 hover:shadow-white/50">
              Get Started Today
            </button>
            <button className="rounded-full border-4 border-white px-12 py-6 text-xl font-black transition-all hover:scale-110 hover:bg-white hover:text-blue-600">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

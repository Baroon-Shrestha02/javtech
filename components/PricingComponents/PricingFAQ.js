"use client";

import Accordion from "../SharedComponents/Accordion";

const faqData = [
  {
    question: "What services does JavTech offer?",
    answer: (
      <div className="space-y-4">
        <p>
          JavTech offers a comprehensive range of digital services including web
          development, mobile application development, UI/UX design, social
          media management, digital marketing, eCommerce development, and SaaS
          development.
        </p>
        <p>
          Whether you need a brand-new website, a scalable web app, or a full
          digital marketing strategy, we tailor every solution to your business
          goals and audience.
        </p>
      </div>
    ),
  },
  {
    question: "How is JavTech different from other digital agencies?",
    answer: (
      <div className="space-y-4">
        <p>
          We combine clean, modern design with solid engineering — your product
          will look great and perform even better. We don&apos;t believe in
          one-size-fits-all solutions; every project gets a dedicated approach,
          transparent communication, and a team that treats your business as
          their own.
        </p>
        <p>
          Based in Kathmandu, Nepal, we bring international-quality work with a
          deep understanding of local markets and the agility of a close-knit
          team.
        </p>
      </div>
    ),
  },
  {
    question: "Do you work with clients outside Nepal?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes — we regularly work with clients across Asia, Europe, Australia,
          and North America. Our team is experienced with remote collaboration
          using tools like Slack, Notion, Figma, and GitHub, and we adapt our
          working hours to fit your time zone.
        </p>
        <p>
          Clear communication and regular progress updates ensure you&apos;re
          always in the loop, no matter where you are in the world.
        </p>
      </div>
    ),
  },
  {
    question: "How much does a project cost?",
    answer: (
      <div className="space-y-4">
        <p>
          Project costs vary based on scope, complexity, and timeline. A simple
          landing page starts at a different range than a full-featured SaaS
          platform. We offer both fixed-price packages and custom quotes
          depending on what you need.
        </p>
        <p>
          After a free discovery call, we provide a detailed proposal covering
          deliverables, timeline, and cost — no hidden fees, no surprises.
        </p>
      </div>
    ),
  },
  {
    question: "How long does it take to complete a project?",
    answer: (
      <div className="space-y-4">
        <p>
          Timelines depend on the project type. A standard business website
          typically takes 2–4 weeks, while a complex web application or mobile
          app may take 6–16 weeks. We always define milestones upfront so you
          know exactly what to expect at each stage.
        </p>
        <p>
          We respect deadlines and communicate proactively if anything changes
          during development.
        </p>
      </div>
    ),
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: (
      <div className="space-y-4">
        <p>
          Absolutely. We love helping startups build from scratch — from MVP
          development and branding to full-scale product launches. We understand
          tight budgets and fast-moving timelines and can adapt our packages
          accordingly.
        </p>
        <p>
          Many of our long-term clients started as early-stage startups. We grow
          with you.
        </p>
      </div>
    ),
  },
  {
    question: "Will my website be mobile-friendly and fast?",
    answer: (
      <div className="space-y-4">
        <p>
          Every website and app we build is fully responsive, optimized for all
          screen sizes, and built with performance in mind. We follow best
          practices for Core Web Vitals, image optimization, caching, and SEO
          from day one.
        </p>
        <p>
          A fast, accessible website isn&apos;t optional — it&apos;s the
          baseline for everything we ship.
        </p>
      </div>
    ),
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. We offer post-launch support and maintenance packages that cover
          bug fixes, content updates, performance monitoring, and feature
          additions. You can choose a monthly retainer or pay-as-you-go
          depending on your needs.
        </p>
        <p>
          We don&apos;t disappear after delivery — we&apos;re invested in your
          long-term success.
        </p>
      </div>
    ),
  },
  {
    question: "Can you redesign my existing website?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes — redesigns are one of our specialties. We audit your current site
          for design, performance, and UX issues, then build something that
          looks modern, converts better, and is easier to maintain.
        </p>
        <p>
          We can also migrate your existing content and preserve your SEO
          rankings during the transition.
        </p>
      </div>
    ),
  },
  {
    question: "How do I get started with JavTech?",
    answer: (
      <div className="space-y-4">
        <p>
          Getting started is simple — reach out through our contact page or
          WhatsApp us directly. We&apos;ll schedule a free discovery call to
          understand your goals, answer your questions, and determine the best
          path forward.
        </p>
        <p>
          From there we&apos;ll send a proposal and, once approved, kick off
          your project with a clear plan and timeline.
        </p>
      </div>
    ),
  },
];

const FAQSection = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 flex flex-col items-center gap-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Got questions?
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0f0f12] md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl text-lg text-gray-500 md:text-xl">
            Everything you need to know about working with JavTech — from
            pricing and timelines to what happens after we launch.
          </p>
        </div>
        <Accordion items={faqData} />
      </div>
    </div>
  );
};

export default FAQSection;

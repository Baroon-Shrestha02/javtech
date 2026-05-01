"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "how-we-share", title: "How We Share Information" },
  { id: "client-data", title: "Client Data and Confidentiality" },
  { id: "data-retention", title: "Data Retention" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "international", title: "International Data Transfers" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

// Offset from top of viewport when scrolling to a section (px)
const SCROLL_OFFSET = 100;

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState(sections[0].id);

  // Track which section is currently in view for the sticky TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler with offset — keeps the section heading
  // from sitting flush against the top of the viewport
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // Update the URL hash without triggering an instant jump
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
  };

  // Honor a hash on initial load (e.g. someone lands via a deep link)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    // Wait one frame so layout has settled
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(hash);
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf7] text-neutral-900 selection:bg-neutral-900 selection:text-[#fafaf7] scroll-smooth">
      {/* Hero */}
      <section className="border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            Privacy <em className="italic font-light text-accent2">Policy</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-700">
            How Javtech Infosys collects, uses, and protects information across
            our website, services, and client engagements.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Last updated
              </p>
              <p className="text-neutral-900">April 29, 2026</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">
                Effective
              </p>
              <p className="text-neutral-900">Immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky TOC */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 pb-4 border-b border-neutral-200">
                Contents
              </p>
              <nav>
                <ol className="space-y-2.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => handleNavClick(e, s.id)}
                        className={`group flex items-baseline gap-3 text-sm transition-colors ${
                          activeId === s.id
                            ? "text-neutral-900"
                            : "text-neutral-500 hover:text-neutral-900"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] tabular-nums transition-colors ${
                            activeId === s.id
                              ? "text-amber-600"
                              : "text-neutral-400"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="lg:col-span-8 xl:col-span-9 max-w-3xl">
            <Intro />

            <Section
              id="information-we-collect"
              number="01"
              title="Information We Collect"
            >
              <SubHeading>Information You Provide</SubHeading>
              <p>
                When you contact us, request a quote, sign a service agreement,
                or onboard as a client, you may share:
              </p>
              <ul>
                <li>Name, job title, and company name</li>
                <li>Business email, phone number, and address</li>
                <li>
                  Project requirements, technical specifications, and business
                  goals
                </li>
                <li>Billing and payment information</li>
                <li>
                  Any other details you choose to share in communications with
                  us
                </li>
              </ul>

              <SubHeading>Information We Collect Automatically</SubHeading>
              <p>
                When you visit javtechinfosys.com, we automatically collect
                technical data such as your IP address, browser type, device
                information, operating system, pages viewed, time spent, and
                referring URLs. This is gathered through cookies and similar
                technologies.
              </p>

              <SubHeading>Client Project Data</SubHeading>
              <p>
                In the course of delivering software development, consulting,
                cloud, or managed IT services, we may access or process data
                belonging to our clients (including their end users). This data
                is handled strictly under the terms of the relevant service
                agreement or Data Processing Agreement (DPA).
              </p>

              <SubHeading>Information from Third Parties</SubHeading>
              <p>
                We may receive information from partners, recruiters,
                lead-generation platforms, or publicly available business
                directories.
              </p>
            </Section>

            <Section
              id="how-we-use"
              number="02"
              title="How We Use Your Information"
            >
              <p>We use your information to:</p>
              <ul>
                <li>
                  Deliver and manage the IT services you have engaged us for
                </li>
                <li>
                  Communicate about projects, proposals, support tickets, and
                  contracts
                </li>
                <li>Process invoices and payments</li>
                <li>Respond to inquiries and provide technical support</li>
                <li>Improve our website, services, and client experience</li>
                <li>
                  Send updates about our services, case studies, or industry
                  insights (you can opt out anytime)
                </li>
                <li>Recruit and evaluate candidates for open positions</li>
                <li>Detect and prevent fraud, security incidents, or misuse</li>
                <li>Comply with legal, tax, and regulatory obligations</li>
              </ul>
              <Callout>We do not sell your personal information.</Callout>
            </Section>

            <Section id="cookies" number="03" title="Cookies and Tracking">
              <p>
                Our website uses cookies to keep the site functional, analyze
                traffic, and improve user experience. The categories we use
                include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies</strong> — required for core site
                  functionality
                </li>
                <li>
                  <strong>Analytics cookies</strong> — help us understand how
                  visitors use our site
                </li>
                <li>
                  <strong>Preference cookies</strong> — remember your settings
                  and choices
                </li>
              </ul>
              <p>
                You can manage or disable cookies through your browser settings.
                Note that disabling some cookies may affect site functionality.
              </p>
            </Section>

            <Section
              id="how-we-share"
              number="04"
              title="How We Share Information"
            >
              <p>
                We share information only when necessary, and only with parties
                bound by appropriate confidentiality and data protection
                obligations:
              </p>
              <ul>
                <li>
                  <strong>Subprocessors and service providers</strong> — cloud
                  hosting (AWS, Azure, Google Cloud), CRM platforms,
                  communication tools, payment processors, and analytics
                  providers
                </li>
                <li>
                  <strong>Project subcontractors</strong> — when a project
                  requires specialized expertise, with prior client consent
                  where applicable
                </li>
                <li>
                  <strong>Legal and regulatory authorities</strong> — when
                  required by law, court order, or to protect our rights,
                  clients, or the public
                </li>
                <li>
                  <strong>Business transfers</strong> — in the event of a
                  merger, acquisition, or sale of assets, with notice to
                  affected parties
                </li>
              </ul>
            </Section>

            <Section
              id="client-data"
              number="05"
              title="Client Data and Confidentiality"
            >
              <p>
                For data we process on behalf of clients, Javtech acts as a{" "}
                <strong>data processor</strong> (or{" "}
                <strong>service provider</strong>, depending on jurisdiction).
                We:
              </p>
              <ul>
                <li>
                  Process client data only on documented instructions from the
                  client
                </li>
                <li>
                  Ensure all team members handling client data are bound by
                  confidentiality
                </li>
                <li>
                  Apply technical and organizational safeguards to protect the
                  data
                </li>
                <li>
                  Notify clients of any data incidents within agreed timeframes
                </li>
                <li>
                  Return or securely delete client data upon contract
                  termination
                </li>
              </ul>
            </Section>

            <Section id="data-retention" number="06" title="Data Retention">
              <p>
                We retain your information only as long as needed to fulfill the
                purposes outlined in this policy, meet contractual obligations,
                or comply with legal requirements such as tax and accounting
                laws. When no longer needed, data is securely deleted or
                anonymized.
              </p>
            </Section>

            <Section id="data-security" number="07" title="Data Security">
              <p>We take security seriously. Our safeguards include:</p>
              <ul>
                <li>
                  Encryption of data in transit (TLS) and at rest where
                  appropriate
                </li>
                <li>
                  Role-based access controls and least-privilege principles
                </li>
                <li>
                  Regular security audits, vulnerability scans, and code reviews
                </li>
                <li>
                  Secure development practices aligned with industry standards
                </li>
                <li>Employee training on data protection and security</li>
                <li>Incident response and business continuity procedures</li>
              </ul>
              <p>
                While we follow strong security practices, no system is 100%
                impenetrable, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" number="08" title="Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict specific types of processing</li>
                <li>Receive your data in a portable format</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:privacy@javtechinfosys.com">
                  privacy@javtechinfosys.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section
              id="international"
              number="09"
              title="International Data Transfers"
            >
              <p>
                Javtech operates globally and works with clients and
                infrastructure across multiple regions. Your information may be
                transferred to and processed in countries other than your own.
                Where required, we use appropriate safeguards such as Standard
                Contractual Clauses (SCCs) to protect international transfers.
              </p>
            </Section>

            <Section id="third-party" number="10" title="Third-Party Links">
              <p>
                Our website and project deliverables may contain links to
                third-party sites or tools. We are not responsible for the
                privacy practices of those services. Please review their privacy
                policies separately.
              </p>
            </Section>

            <Section id="children" number="11" title="Children's Privacy">
              <p>
                Our services are intended for businesses and professionals. We
                do not knowingly collect personal information from children
                under 13 (or under 16 in some regions). If we learn we&apos;ve
                collected such data, we&apos;ll delete it promptly.
              </p>
            </Section>

            <Section id="changes" number="12" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy as our services, technology,
                or legal obligations evolve. The &quot;Last updated&quot; date
                at the top reflects the most recent revision. For material
                changes, we&apos;ll notify you via email or a prominent notice
                on our website.
              </p>
            </Section>

            <Section id="contact" number="13" title="Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or how we handle data, please reach out:
              </p>

              <div className="not-prose mt-8 grid sm:grid-cols-2 gap-6 text-sm">
                <ContactCard
                  label="General Privacy"
                  value="privacy@javtechinfosys.com"
                  href="mailto:privacy@javtechinfosys.com"
                />
                <ContactCard
                  label="Data Protection Officer"
                  value="dpo@javtechinfosys.com"
                  href="mailto:dpo@javtechinfosys.com"
                />
                <ContactCard label="Office" value="Sanepa, Lalitpur, Nepal" />
                <ContactCard label="Phone" value="+977-980-7128557" />
              </div>
            </Section>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4">
          <p className="font-serif text-sm text-neutral-600">
            © {new Date().getFullYear()} Javtech Infosys. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ── Sub components ───────────────────────────────────────────────── */

function Intro() {
  return (
    <div className="mb-16 pb-10 border-b border-neutral-200">
      <p className="font-serif text-2xl md:text-3xl leading-[1.4] text-neutral-800">
        At Javtech Infosys, trust is the foundation of every client relationship
        — and that starts with how we handle your data.
      </p>
      <p className="mt-6 text-neutral-600 leading-relaxed">
        This Privacy Policy explains how we collect, use, and protect
        information when you visit our website, engage our services, or
        otherwise interact with us. By using our services, you agree to the
        practices described here.
      </p>
    </div>
  );
}

function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-amber-600 tabular-nums">
          {number}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-neutral-900">
          {title}
        </h2>
      </div>
      <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-p:text-neutral-700 prose-li:text-neutral-700 prose-li:leading-relaxed prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-strong:font-semibold">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="not-prose mt-8 mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
      {children}
    </h3>
  );
}

function Callout({ children }) {
  return (
    <div className="not-prose my-8 pl-6 border-l-2 border-amber-600">
      <p className="font-serif text-lg italic text-neutral-800 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function ContactCard({ label, value, href }) {
  const content = (
    <div className="p-5 border border-neutral-200 rounded-sm hover:border-neutral-900 transition-colors h-full">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
        {label}
      </p>
      <p className="text-neutral-900 font-medium break-all">{value}</p>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

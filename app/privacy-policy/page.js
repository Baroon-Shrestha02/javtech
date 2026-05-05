"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "scope", title: "Scope of This Policy" },
  { id: "information-collection", title: "Detailed Information Collection" },
  { id: "use-of-information", title: "Strategic Use of Information" },
  { id: "data-storage", title: "Data Storage and Sovereignty" },
  { id: "third-party", title: "Third-Party Disclosures" },
  { id: "cookies", title: "Use of Cookies and Tracking" },
  { id: "your-rights", title: "Your Data Rights & Choices" },
  { id: "external-links", title: "External Links" },
  { id: "updates", title: "Updates to This Policy" },
  { id: "cancellation", title: "Cancellation and Termination" },
  { id: "contact", title: "Contact and Grievance" },
];

const SCROLL_OFFSET = 100;

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState(sections[0].id);

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

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
            Privacy <em className="italic font-light text-[#cc0000]">Policy</em>
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
              <p className="text-neutral-900">May 1, 2026</p>
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
                              ? "text-[#cc0000]"
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

            {/* 1. Scope */}
            <Section id="scope" number="01" title="Scope of This Policy">
              <p>
                This Privacy Policy applies to all visitors of our website,
                clients engaging in our software development services, and any
                individuals interacting with our digital platforms. By accessing
                our services, you acknowledge and agree to the terms described
                herein.
              </p>
            </Section>

            {/* 2. Information Collection */}
            <Section
              id="information-collection"
              number="02"
              title="Detailed Information Collection"
            >
              <p>
                We collect several types of information to provide you with
                high-velocity and pixel-perfect IT solutions:
              </p>

              <SubHeading>Personal Information</SubHeading>
              <p>
                This includes your name, official email address, phone number,
                and address when you fill out our contact or inquiry forms.
              </p>

              <SubHeading>Project & Business Data</SubHeading>
              <p>
                To deliver custom software, we collect project briefs, technical
                specifications, and business logic provided during
                consultations.
              </p>

              <SubHeading>Financial Information</SubHeading>
              <p>
                For billing and payment purposes, we may collect tax
                identification numbers (e.g., PAN/VAT) and transaction records,
                ensuring they are handled through secure, authorized channels.
              </p>
            </Section>

            {/* 3. Use of Information */}
            <Section
              id="use-of-information"
              number="03"
              title="Strategic Use of Information"
            >
              <p>
                Your data is never used for unsolicited purposes. We utilize it
                specifically for:
              </p>

              <SubHeading>Product Development</SubHeading>
              <p>
                To build, test, and deploy the full-stack and application
                solutions you have commissioned.
              </p>

              <SubHeading>Communication & Support</SubHeading>
              <p>
                To provide real-time project updates, technical support, and
                critical notifications regarding your digital infrastructure.
              </p>

              <SubHeading>Marketing & Newsletters</SubHeading>
              <p>
                With your explicit consent, we may send information about new
                technology trends or service updates from Javtech Infosys.
              </p>

              <SubHeading>Legal Compliance</SubHeading>
              <p>
                To meet the regulatory requirements of the Government of Nepal,
                including tax reporting and cybersecurity mandates.
              </p>
            </Section>

            {/* 4. Data Storage */}
            <Section
              id="data-storage"
              number="04"
              title="Data Storage and Sovereignty"
            >
              <SubHeading>Location</SubHeading>
              <p>
                We prioritize storing data on secure servers that comply with
                international security standards while respecting Nepal{"'"}s
                data sovereignty guidelines.
              </p>

              <SubHeading>Retention Period</SubHeading>
              <p>
                We retain your information only as long as necessary to fulfill
                the service contract or as required by Nepali law for auditing
                and record-keeping purposes.
              </p>

              <SubHeading>Security Protocols</SubHeading>
              <p>
                We employ advanced encryption (SSL/TLS), firewalls, and strict
                access controls to ensure your data is protected against
                unauthorized access, alteration, or destruction.
              </p>
            </Section>

            {/* 5. Third Party */}
            <Section
              id="third-party"
              number="05"
              title="Third-Party Disclosures"
            >
              <Callout>
                Javtech Infosys maintains a {'"'}No-Sale{'"'} policy regarding
                your personal data.
              </Callout>

              <p>
                We only share information under the following circumstances:
              </p>

              <SubHeading>Essential Service Providers</SubHeading>
              <p>
                We may share data with trusted third-party partners (such as
                cloud hosting providers or payment gateways) who assist in our
                operations, under strict confidentiality agreements.
              </p>

              <SubHeading>Legal & Law Enforcement</SubHeading>
              <p>
                We will disclose information if compelled by a court order or an
                official request from the Government of Nepal under the
                Electronic Transactions Act.
              </p>
            </Section>

            {/* 6. Cookies */}
            <Section
              id="cookies"
              number="06"
              title="Use of Cookies and Tracking"
            >
              <p>
                Our website utilizes cookies to personalize your experience and
                analyze our traffic. These small files help us remember your
                preferences and improve site performance.
              </p>
              <p>
                You have the option to decline cookies via your browser
                settings; however, this may limit your ability to use certain
                features of our platform.
              </p>
            </Section>

            {/* 7. Your Rights */}
            <Section
              id="your-rights"
              number="07"
              title="Your Data Rights & Choices"
            >
              <p>
                Under the spirit of modern data protection, you have the
                following rights:
              </p>

              <SubHeading>Right to Access</SubHeading>
              <p>
                You may request a summary of the personal data we hold about you
                at any time.
              </p>

              <SubHeading>Right to Correction</SubHeading>
              <p>
                If your information is outdated or incorrect, you can request an
                immediate update to ensure accuracy in our records.
              </p>

              <SubHeading>Right to Erasure</SubHeading>
              <p>
                Upon termination of services, you may request the deletion of
                your personal data, subject to legal data retention
                requirements.
              </p>

              <SubHeading>Withdrawal of Consent</SubHeading>
              <p>
                You may opt-out of marketing communications at any time by
                clicking the {'"'}unsubscribe{'"'} link or contacting us
                directly.
              </p>
            </Section>

            {/* 8. External Links */}
            <Section id="external-links" number="08" title="External Links">
              <p>
                Our website may contain links to external sites. Please be aware
                that Javtech Infosys is not responsible for the privacy
                practices or content of such third-party websites.
              </p>
            </Section>

            {/* 9. Updates */}
            <Section id="updates" number="09" title="Updates to This Policy">
              <p>
                As technology and regulations evolve, so will our policy. We
                reserve the right to modify this document at any time. We
                encourage you to review this page periodically to stay informed
                about how we are protecting your information.
              </p>
            </Section>

            {/* 10. Cancellation */}
            <Section
              id="cancellation"
              number="10"
              title="Cancellation and Termination"
            >
              <p>
                At Javtech Infosys, we prioritize professional commitment and
                clarity in every project lifecycle. This section outlines the
                conditions under which service agreements may be suspended or
                concluded:
              </p>

              <SubHeading>Client-Initiated Cancellation</SubHeading>
              <p>
                You may request to cancel a project or service at any time by
                providing written notice via our official communication
                channels. Please note that any work completed up to the date of
                cancellation, including research, architecture, and development
                hours, will be billed accordingly.
              </p>

              <SubHeading>Company-Initiated Termination</SubHeading>
              <p>
                Javtech Infosys reserves the right to terminate or suspend
                services immediately, without prior notice, if there is a breach
                of our Terms and Conditions, non-payment of agreed fees, or if
                the client engages in activities that violate the Electronic
                Transactions Act of Nepal.
              </p>

              <SubHeading>Project Completion</SubHeading>
              <p>
                A service agreement is considered naturally terminated once the
                final project deliverables are handed over and the execution
                standard is met.
              </p>

              <SubHeading>Effect of Termination</SubHeading>
              <p>
                Upon termination, all licenses granted for the use of our
                proprietary tools may be revoked, and both parties must settle
                any outstanding financial obligations. Any data retained
                following termination will be managed according to our Data
                Retention protocols as outlined in this Privacy Policy.
              </p>

              <SubHeading>Survival of Provisions</SubHeading>
              <p>
                Clauses related to Intellectual Property, Confidentiality, and
                Indemnity shall survive the termination of any agreement to
                ensure continued protection for both the client and the firm.
              </p>
            </Section>

            {/* 11. Contact */}
            <Section id="contact" number="11" title="Contact and Grievance">
              <p>
                If you have any questions, concerns, or grievances regarding
                your privacy, please reach out to us.
              </p>

              <div className="not-prose mt-8 grid sm:grid-cols-2 gap-6 text-sm">
                <ContactCard
                  label="Email"
                  value="info@javtechinfosys.com"
                  href="mailto:info@javtechinfosys.com"
                />
                <ContactCard
                  label="Website"
                  value="javtechinfosys.com"
                  href="https://javtechinfosys.com/"
                />
                <ContactCard label="Address" value="Sanepa, Lalitpur, Nepal" />
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
            &copy; {new Date().getFullYear()} Javtech Infosys. All rights
            reserved.
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
        At Javtech Infosys, we are committed to maintaining the highest
        standards of data integrity and transparency.
      </p>
      <p className="mt-6 text-neutral-600 leading-relaxed">
        Operating as a premier IT firm based in Nepal, we ensure that your
        personal and professional information is handled with the utmost care,
        in strict adherence to the Electronic Transactions Act, 2063 (2006) and
        other prevailing digital governance laws of Nepal. This document
        outlines our comprehensive practices regarding the collection, use,
        protection, and management of your data.
      </p>
    </div>
  );
}

function Section({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-[#cc0000] tabular-nums">
          {number}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-neutral-900">
          {title}
        </h2>
      </div>
      <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-p:text-neutral-700 prose-li:text-neutral-700 prose-li:leading-relaxed prose-a:text-[#cc0000] prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-strong:font-semibold">
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
    <div className="not-prose my-8 pl-6 border-l-2 border-[#cc0000]">
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

import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with JavTech about your product, timeline, and technical goals.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    // <main className="section">
    //   <div className="container-app">
    //     <h1 className="section-title">Contact</h1>
    //     <p className="lead">
    //       Share a few details — wire this form to Formspree, Resend, or your API.
    //     </p>
    //   </div>
    // </main>
    <>
      <ContactForm />
    </>
  );
}

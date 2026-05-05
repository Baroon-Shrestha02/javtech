import React from "react";
import { SectionHeader } from "../../SharedComponents/SectionHeader";
import TechStackSection from "./TechStackSection";

export default function WhatWeUse() {
  return (
    <>
      <section>
        <SectionHeader
          title="What We Use"
          header="Our Tech Stack Expertise"
          subheader="Our experienced team is here to utilize valuable resources efficiently that ensures client satisfaction. We guarantee you that our services will set exceptional growth for your business."
        />
      </section>
      <section>
        <TechStackSection />
      </section>
    </>
  );
}

"use client";

import { SectionHeader } from "../SharedComponents/SectionHeader";

export default function WhoWeAre() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-20">
        <SectionHeader
          title="About Us"
          header="Who Are We"
          subheader="We design and develop intuitive software and apps, creating meaningful experiences across every touchpoint."
        />
      </div>
    </>
  );
}

import React from "react";
import CareerCard from "./Shared/CareerCard";
import { CareerData } from "./Shared/CareerData";
import WhyWorkWithUs from "./WhyWorkWithUs";

export default function CareerMain({ careers = CareerData }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <WhyWorkWithUs />
        <div className="grid justify-items-center gap-10 pt-6 md:grid-cols-2 xl:grid-cols-3">
          {careers.map((job) => (
            <CareerCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

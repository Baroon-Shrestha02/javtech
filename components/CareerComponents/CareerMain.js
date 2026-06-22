"use client";

import React, { useCallback, useEffect, useState } from "react";
import CareerCard from "./Shared/CareerCard";
import CareerModal from "./Shared/CareerModal";
import WhyWorkWithUs from "./WhyWorkWithUs";
import careerService from "@/lib/api/services/career";

function mapCareer(c) {
  const createdAt = c.createdAt ? new Date(c.createdAt) : null;
  const isNew = createdAt
    ? Date.now() - createdAt.getTime() < 14 * 24 * 60 * 60 * 1000 // last 14 days
    : false;

  return {
    id: c._id || c.id,
    title: c.title || "",
    category: c.department || "",
    company: "Javtech InfoSys", // Career has no "company" field — every posting is ours
    pay: c.salaryRange || "Competitive",
    description: c.description || "",
    image: "/company-placeholder.jpg",
    location: c.location || "Work from anywhere",
    timezone: c.experience || "Any timezone",
    hours: c.jobType || "Full Time",
    skills: Array.isArray(c.tags)
      ? c.tags.map((t) => ({ label: t, active: true }))
      : [],
    isNew,
    isClosed: c.status === "Closed",
    deadline: c.deadline,
    applicants: c.applicants ?? 0,
  };
}

function useCareers() {
  const [state, setState] = useState({
    careers: [],
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    let active = true;
    setState((s) => ({ ...s, loading: true, error: null }));

    careerService
      .list()
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data) ? data : [];
        setState({ careers: list.map(mapCareer), loading: false, error: null });
      })
      .catch((err) => {
        if (!active) return;
        setState((s) => ({
          ...s,
          loading: false,
          error: err?.message || "Failed to load careers",
        }));
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => load(), [load]);

  return { ...state, reload: load };
}

function CareersLoadingState() {
  return (
    <div className="grid justify-items-center gap-10 pt-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-[420px] w-full max-w-md animate-pulse rounded-2xl border border-gray-100 bg-gray-50"
        />
      ))}
    </div>
  );
}

function CareersErrorState({ message, onRetry }) {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
        Couldn&rsquo;t load openings
      </p>
      <p className="mb-6 text-gray-600">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}

export default function CareerMain() {
  const { careers, loading, error, reload } = useCareers();
  const [active, setActive] = useState(null); // selected job
  const [mode, setMode] = useState("view"); // "view" | "apply"

  const openView = (job) => {
    setActive(job);
    setMode("view");
  };

  const openApply = (job) => {
    setActive(job);
    setMode("apply");
  };

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <WhyWorkWithUs />

        {loading && <CareersLoadingState />}

        {!loading && error && (
          <CareersErrorState message={error} onRetry={reload} />
        )}

        {!loading && !error && careers.length === 0 && (
          <p className="pt-10 text-center text-gray-400">
            No open positions right now — check back soon.
          </p>
        )}

        {!loading && !error && careers.length > 0 && (
          <div className="grid justify-items-center gap-10 pt-6 md:grid-cols-2 xl:grid-cols-3">
            {careers.map((job) => (
              <CareerCard
                key={job.id}
                job={job}
                onViewJob={openView}
                onApplyJob={openApply}
              />
            ))}
          </div>
        )}
      </div>

      {active && (
        <CareerModal
          job={active}
          mode={mode}
          onClose={() => setActive(null)}
          onApplyClick={() => setMode("apply")}
        />
      )}
    </section>
  );
}

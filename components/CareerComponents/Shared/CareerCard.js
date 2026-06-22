"use client";

import React from "react";
import { MapPin, Clock, Calendar, Check, ArrowUpRight } from "lucide-react";

/* ---- Skill pill ---- */
function SkillTag({ label, active }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        backgroundColor: active ? "#fbe3e2" : "#ededed",
        color: active ? "#9c2226" : "#6b7280",
      }}
    >
      {active && <Check size={13} strokeWidth={3} />}
      {label}
    </span>
  );
}

export default function CareerCard({ job, onViewJob, onApplyJob }) {
  if (!job) return null;

  const {
    company = "Javtech InfoSys",
    category = "",
    isNew = false,
    isClosed = false,
    title = "",
    pay = "Competitive",
    description = "",
    image = "logo.png",
    imageAlt,
    location = "Work from anywhere",
    timezone = "Any timezone",
    hours = "Full Time",
    skills = [],
  } = job;

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border bg-white"
      style={{ borderColor: "#e5e7eb" }}
    >
      {/* Top: thumbnail + headline */}
      <div className="flex gap-3.5 p-3.5">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1.5">
            <span
              className="truncate text-sm font-semibold"
              style={{ color: "#0a0a0a" }}
            >
              {company}
            </span>
            {category && (
              <span className="text-xs" style={{ color: "#9aa0ab" }}>
                · {category}
              </span>
            )}
            {isClosed ? (
              <span
                className="ml-auto rounded-full px-2 py-0.5 text-[11px] font-medium"
                style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
              >
                Closed
              </span>
            ) : (
              isNew && (
                <span
                  className="ml-auto rounded-full px-2 py-0.5 text-[11px] font-medium"
                  style={{ backgroundColor: "#fbe3e2", color: "#9c2226" }}
                >
                  New
                </span>
              )
            )}
          </div>

          <h2
            className="mb-1.5 line-clamp-2 text-[15px] font-bold leading-tight"
            style={{ color: "#111827" }}
          >
            {title}
          </h2>

          <span className="text-sm font-semibold" style={{ color: "#111827" }}>
            {pay}
          </span>
        </div>
      </div>

      {description && (
        <div
          className="line-clamp-4 whitespace-pre-line px-4 text-sm"
          style={{ color: "#4b5563" }}
        >
          {description}
        </div>
      )}

      {/* Meta */}
      <div className="px-3.5">
        <ul
          className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t pt-3 text-xs"
          style={{ color: "#374151", borderColor: "#f0f0f0" }}
        >
          <li className="flex items-center gap-1.5">
            <MapPin size={14} style={{ color: "#6b7280" }} />
            {location}
          </li>
          <li className="flex items-center gap-1.5">
            <Clock size={14} style={{ color: "#6b7280" }} />
            {timezone}
          </li>
          <li className="flex items-center gap-1.5">
            <Calendar size={14} style={{ color: "#6b7280" }} />
            {hours}
          </li>
        </ul>
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 px-3.5 pt-3">
          {skills.map((s) => (
            <SkillTag key={s.label} label={s.label} active={s.active} />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2.5 p-3.5">
        <button
          onClick={() => onViewJob?.(job)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: "#C8262A" }}
        >
          View Job
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => onApplyJob?.(job)}
          disabled={isClosed}
          className="flex-1 rounded-full border-2 py-2.5 text-sm font-semibold transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
          style={{ borderColor: "#0a0a0a", color: "#0a0a0a" }}
        >
          {isClosed ? "Closed" : "Apply Job"}
        </button>
      </div>
    </div>
  );
}

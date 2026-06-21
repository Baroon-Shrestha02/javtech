"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Calendar,
  Check,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";

/* ---- Skill pill ---- */
function SkillTag({ label, active }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
      style={{
        backgroundColor: active ? "#d9edb0" : "#ededed",
        color: active ? "#3f4a2a" : "#6b7280",
      }}
    >
      {active && <Check size={13} strokeWidth={3} />}
      {label}
    </span>
  );
}

export default function JobCard({
  company = "ConsenSys",
  category = "Product",
  isNew = true,
  title = "Project Management of Launch initiative",
  pay = "$15k",
  description = "We're looking for a Senior Frontend Developer to lead the development of fast, accessible, and polished web applications.\n\nYou'll architect reusable component systems, mentor junior developers, and work closely with our design team to ship great user experiences.\n\nResponsibilities:\n- Build and maintain production React / Next.js applications\n- Establish frontend standards, code reviews, and best practices\n- Collaborate with designers and backend engineers on new features\n\nRequirements:\n- Strong experience with React, Next.js, and TypeScript\n- Solid understanding of responsive design and Tailwind CSS\n- Experience with performance optimization and accessibility",
  image = "/company-placeholder.jpg",
  imageAlt,
  location = "Work from anywhere",
  timezone = "EST only",
  hours = "40 hrs/week",
  skills = [
    { label: "Project Management", active: true },
    { label: "Web3", active: true },
    { label: "Agile", active: false },
  ],
  onSave = () => {},
  onViewJob = () => {},
  onApplyJob = () => {},
}) {
  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border bg-white"
      style={{ borderColor: "#e5e7eb" }}
    >
      {/* Top: thumbnail + headline */}
      <div className="flex gap-3.5 p-3.5">
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={image}
            alt={imageAlt || `${company} logo`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1.5">
            <span
              className="truncate text-sm font-semibold"
              style={{ color: "#1e2a78" }}
            >
              {company}
            </span>
            <span className="text-xs" style={{ color: "#9aa0ab" }}>
              · {category}
            </span>
            {isNew && (
              <span
                className="ml-auto rounded-full px-2 py-0.5 text-[11px] font-medium"
                style={{ backgroundColor: "#eef2fb", color: "#5b6fae" }}
              >
                New
              </span>
            )}
          </div>

          <h2
            className="mb-1.5 line-clamp-2 text-[15px] font-bold leading-tight"
            style={{ color: "#111827" }}
          >
            {title}
          </h2>

          <span
            className="text-base font-semibold"
            style={{ color: "#111827" }}
          >
            {pay}
          </span>
        </div>
      </div>
      <div className="line-clamp-4 px-4 ">{description}</div>

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
          onClick={onViewJob}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          View Job
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </button>
        <button
          onClick={onApplyJob}
          className="flex-1 rounded-full border-2 py-2.5 text-sm font-semibold transition hover:bg-gray-50"
          style={{ borderColor: "#0a0a0a", color: "#0a0a0a" }}
        >
          Apply Job
        </button>
      </div>
    </div>
  );
}

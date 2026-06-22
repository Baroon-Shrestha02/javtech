"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, MapPin, Clock, Calendar, Upload, CheckCircle2 } from "lucide-react";
import applicationService from "@/lib/api/services/application";

const MAX_CV_BYTES = 5 * 1024 * 1024; // matches backend's 5MB multer limit
const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function ApplyForm({ job, onSubmitted }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [cv, setCv] = useState(null);
  const [fileError, setFileError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileError("");
    if (!file) return setCv(null);

    if (!ACCEPTED_CV_TYPES.includes(file.type)) {
      setFileError("Only PDF or Word documents are allowed.");
      setCv(null);
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setFileError("File is too large — 5MB max.");
      setCv(null);
      return;
    }
    setCv(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!cv) {
      setFileError("Please attach your CV.");
      return;
    }

    setSubmitting(true);
    try {
      await applicationService.submit({
        careerId: job.id,
        name: form.name,
        email: form.email,
        phone: form.phone,
        coverLetter: form.coverLetter,
        cv,
      });
      onSubmitted();
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
          Full name
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#C8262A]"
            placeholder="Jane Doe"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#C8262A]"
            placeholder="jane@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
        Phone
        <input
          required
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#C8262A]"
          placeholder="+977 98XXXXXXXX"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
        Cover letter{" "}
        <span className="font-normal text-gray-400">(optional)</span>
        <textarea
          rows={4}
          value={form.coverLetter}
          onChange={(e) =>
            setForm((f) => ({ ...f, coverLetter: e.target.value }))
          }
          className="resize-none rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm outline-none focus:border-[#C8262A]"
          placeholder="Tell us why you're a good fit..."
        />
      </label>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-gray-700">CV / Resume</span>
        <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-gray-300 px-3.5 py-3 text-sm text-gray-500 hover:border-[#C8262A] hover:text-[#C8262A]">
          <Upload size={16} />
          {cv ? cv.name : "Upload PDF or Word doc (max 5MB)"}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="hidden"
          />
        </label>
        {fileError && <p className="text-xs text-red-600">{fileError}</p>}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-full py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "#C8262A" }}
      >
        {submitting ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}

function SubmittedState({ onClose }) {
  return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <CheckCircle2 size={40} style={{ color: "#C8262A" }} />
      <h3 className="text-lg font-bold text-gray-900">Application sent</h3>
      <p className="max-w-xs text-sm text-gray-500">
        We&rsquo;ve received your application and emailed you a confirmation.
        Our team will be in touch if your profile matches what we&rsquo;re
        looking for.
      </p>
      <button
        onClick={onClose}
        className="mt-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      >
        Done
      </button>
    </div>
  );
}

export default function CareerModal({ job, mode, onClose, onApplyClick }) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!job) return; // don't touch scroll/focus when nothing is open

    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [job, onClose]);

  if (!mounted || !job) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${job.title} — ${mode === "apply" ? "apply" : "details"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-gray-700 transition hover:bg-[#C8262A]/10 hover:text-[#C8262A]"
        >
          <X size={18} />
        </button>

        {mode === "apply" ? (
          submitted ? (
            <SubmittedState onClose={onClose} />
          ) : (
            <>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
                Apply for
              </p>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                {job.title}
              </h3>
              <div className="mt-6">
                <ApplyForm job={job} onSubmitted={() => setSubmitted(true)} />
              </div>
            </>
          )
        ) : (
          <>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
              {job.category}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-gray-900">
              {job.title}
            </h3>

            <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
              <li className="flex items-center gap-1.5">
                <MapPin size={14} /> {job.location}
              </li>
              <li className="flex items-center gap-1.5">
                <Clock size={14} /> {job.timezone}
              </li>
              <li className="flex items-center gap-1.5">
                <Calendar size={14} /> {job.hours}
              </li>
            </ul>

            <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-gray-600">
              {job.description}
            </p>

            {job.deadline && (
              <p className="mt-4 text-xs text-gray-400">
                Apply before{" "}
                {new Date(job.deadline).toLocaleDateString("en-US", {
                  dateStyle: "long",
                })}
              </p>
            )}

            <button
              onClick={onApplyClick}
              disabled={job.isClosed}
              className="mt-6 w-full rounded-full py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ backgroundColor: "#C8262A" }}
            >
              {job.isClosed ? "This role is closed" : "Apply for this role"}
            </button>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

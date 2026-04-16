import React from "react";

export function SectionHeader({ title, header, subheader }) {
  return (
    <div className="mx-auto max-w-7xl py-20">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
        {/* Left: eyebrow title */}
        <div className="lg:w-48 shrink-0 mb-6 lg:mb-0 lg:pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            {title}
          </p>
        </div>

        {/* Right: heading + subheading */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {header}
          </h2>
          {subheader && (
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
              {subheader}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

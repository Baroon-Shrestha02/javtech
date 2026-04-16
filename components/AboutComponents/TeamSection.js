import React, { useState, useRef } from "react";
import teamData from "./TeamData";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Separate component for the scrollable row
function TeamScrollRow({ teamMembers }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400; // Adjust scroll distance
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <div className="relative group/row">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-red-600 text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover/row:opacity-100 hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-red-600 text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover/row:opacity-100 hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start group/card animate-fadeInScale"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-400 transform hover:scale-105 hover:-translate-y-2 h-full">
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-red-50 to-blue-50">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover/card:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-blue-100">
                        <span class="text-5xl font-bold text-red-600">
                          ${member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    `;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                {/* Role Badge - appears on hover */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/card:translate-y-0">
                  {member.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover/card:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-500">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {member.description}
                </p>

                {/* Bottom gradient line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator hint */}
      <div className="text-center mt-6 text-sm text-gray-400">
        ← Scroll to explore our team →
      </div>
    </div>
  );
}

export default function TeamSection() {
  const leaders = teamData.filter((member) => member.category === "leadership");
  const teamMembers = teamData.filter((member) => member.category === "team");

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20 animate-fadeInUp">
        <div className="inline-block mb-4">
          <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
            Our Team
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Expertly Driven.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
            Individually Inspired.
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Our leadership and development team works together to build scalable,
          innovative, and future-ready digital solutions.
        </p>
      </div>

      {/* ================= LEADERSHIP TEAM ================= */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Visionary leaders architecting the future of digital innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-300 animate-slideInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-red-600">
                    Leadership
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-5 tracking-wide uppercase">
                  {leader.role}
                </p>

                {/* Quote Section */}
                {leader.quote && (
                  <div className="mb-5 pl-4 border-l-4 border-red-600 bg-red-50/50 py-3 pr-3 rounded-r-lg">
                    <p className="text-sm italic text-gray-700 leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DEVELOPMENT TEAM (Netflix-style Scrollable Row) ================= */}
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Development & Creative Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the architects of innovation — the experts who transform your
            digital dreams into reality
          </p>
        </div>

        <TeamScrollRow teamMembers={teamMembers} />
      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-fadeInScale {
          opacity: 0;
          animation: fadeInScale 0.6s ease-out forwards;
        }

        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
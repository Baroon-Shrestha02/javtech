"use client";

import { useState, useRef, useEffect } from "react";

const ALL_TESTIMONIALS = [
  {
    id: 1,
    name: "Leslie Alexander",
    handle: "@marcelosalomao",
    initials: "LA",
    text: "Switching to this tool has made a massive difference in how I manage tasks. It's flexible enough to adapt to my personal needs yet powerful to handle complex projects.",
    date: "Nov 19, 2023",
  },
  {
    id: 2,
    name: "Ralph Edwards",
    handle: "@isabellasava",
    initials: "RE",
    text: "I'm impressed with the analytical features that help me understand where my time goes. The insights provided are invaluable for personal growth and efficiency. Been using it for months.",
    date: "Nov 19, 2023",
  },
  {
    id: 3,
    name: "Cody Fisher",
    handle: "@brunopadilha",
    initials: "CF",
    text: "As a freelancer, I've struggled to find a tool that fits all my needs until now. This app has improved my time management and helped me deliver projects on time.",
    date: "Nov 19, 2023",
  },
  {
    id: 4,
    name: "Kristin Watson",
    handle: "@afonsoinocente",
    initials: "KW",
    text: "Absolutely the best project management software out there. It helps me keep track of deadlines and collaborate with my team effortlessly.",
    date: "Nov 19, 2023",
  },
  {
    id: 5,
    name: "Darrell Steward",
    handle: "@andrebiachi",
    initials: "DS",
    text: "I've been using this tool for months and my productivity has skyrocketed. The interface is intuitive and seamlessly integrates with my workflow. Highly recommend!",
    date: "Nov 19, 2023",
  },
  {
    id: 6,
    name: "Ronald Richards",
    handle: "@izabellarodrigues",
    initials: "RR",
    text: "From the sleek design to the robust features, everything about this tool is made to enhance productivity. It's the central hub for all my work now.",
    date: "Nov 19, 2023",
  },
  {
    id: 7,
    name: "Leslie Alexander",
    handle: "@marcelosalomao",
    initials: "LA",
    text: "Flexible enough to adapt to my personal needs yet powerful for complex projects. Can't imagine going back.",
    date: "Nov 19, 2023",
  },
  {
    id: 8,
    name: "Kristin Watson",
    handle: "@afonsoinocente",
    initials: "KW",
    text: "The best project management software I've used. Keeps me on track and makes collaboration completely effortless day to day.",
    date: "Nov 19, 2023",
  },
  {
    id: 9,
    name: "Darrell Steward",
    handle: "@andrebiachi",
    initials: "DS",
    text: "My productivity has skyrocketed since switching. The interface is intuitive and seamlessly integrates with every tool in my workflow. The improvement has been remarkable.",
    date: "Nov 19, 2023",
  },
];

const PAGE_SIZE = 6;

function SkeletonCard() {
  return (
    <div className="bg-[#fafaf8] border border-[#eeecea] rounded-[14px] p-[22px_22px_18px] overflow-hidden">
      <div className="h-4 w-6 bg-[#eeecea] rounded animate-pulse mb-6" />
      <div className="space-y-2 mb-5">
        <div className="h-3 bg-[#eeecea] rounded animate-pulse w-full" />
        <div className="h-3 bg-[#eeecea] rounded animate-pulse w-5/6" />
        <div className="h-3 bg-[#eeecea] rounded animate-pulse w-4/6" />
      </div>
      <div className="h-px bg-[#eeecea] mb-3.5" />
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#eeecea] animate-pulse shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-3 bg-[#eeecea] rounded animate-pulse w-28" />
          <div className="h-2.5 bg-[#eeecea] rounded animate-pulse w-20" />
        </div>
        <div className="h-2.5 bg-[#eeecea] rounded animate-pulse w-16" />
      </div>
    </div>
  );
}

function TestimonialCard({ item, animDelay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), animDelay * 1000);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animDelay]);

  return (
    <div
      ref={ref}
      className="bg-[#fafaf8] border border-[#eeecea] hover:border-[#E03030]/30 rounded-[14px] p-[22px_22px_18px] relative overflow-hidden transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(18px)",
      }}
    >
      {/* Large decorative quote mark */}
      <span
        className="absolute top-2 left-4 text-[#E03030] select-none pointer-events-none"
        style={{
          fontSize: 72,
          lineHeight: 1,
          opacity: 0.1,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
        }}
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="text-[13px] leading-[1.75] text-[#555552] mb-[18px] pt-7 relative z-10 m-0">
        {item.text}
      </p>

      {/* Divider */}
      <div className="h-px bg-[#eeecea] mb-3.5" />

      {/* Author row */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white border border-[#E03030]/20 flex items-center justify-center text-[10px] font-medium text-[#E03030] shrink-0">
          {item.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-medium text-[#2a2a28] m-0 mb-0.5 leading-none truncate">
            {item.name}
          </p>
          <p className="text-[11px] text-[#aaa9a6] m-0 leading-none">
            {item.handle}
          </p>
        </div>
        <span className="text-[11px] text-[#d0d0cc] shrink-0">{item.date}</span>
      </div>
    </div>
  );
}

function distributeToColumns(items) {
  const cols = [[], [], []];
  items.forEach((item, i) => {
    cols[i % 3].push({ item, positionInCol: Math.floor(i / 3) });
  });
  return cols;
}

export default function Testimonials() {
  const [shown, setShown] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [newIds, setNewIds] = useState(new Set());

  const visibleItems = ALL_TESTIMONIALS.slice(0, shown);
  const columns = distributeToColumns(visibleItems);
  const hasMore = shown < ALL_TESTIMONIALS.length;
  const skeletonColCount = Math.min(PAGE_SIZE, ALL_TESTIMONIALS.length - shown);

  function handleLoadMore() {
    setLoading(true);
    const incoming = ALL_TESTIMONIALS.slice(shown, shown + PAGE_SIZE);
    setTimeout(() => {
      setNewIds(new Set(incoming.map((t) => t.id)));
      setShown((prev) => Math.min(prev + PAGE_SIZE, ALL_TESTIMONIALS.length));
      setLoading(false);
    }, 900);
  }

  return (
    <section className="px-6 py-20 bg-[#f9f9f7]">
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2.5 mb-5">
        <div className="w-8 h-px bg-[#E03030] opacity-50" />
        <span className="text-[11px] tracking-[0.12em] uppercase text-[#E03030] opacity-80">
          Testimonials
        </span>
        <div className="w-8 h-px bg-[#E03030] opacity-50" />
      </div>

      {/* Heading */}
      <h2 className="text-[42px] font-medium text-[#1a1a18] text-center leading-[1.15] mb-4">
        They love us.
        <br />
        <span className="text-[#E03030]">What about you?</span>
      </h2>

      <p className="text-sm text-[#888784] max-w-sm mx-auto mb-8 text-center leading-relaxed">
        Whether you&apos;re tackling complex projects or managing daily tasks,
        our solution adapts to your unique challenges.
      </p>

      <div className="flex gap-3 justify-center flex-wrap mb-14">
        <button className="bg-[#E03030] hover:bg-[#c82828] text-white border-0 rounded-full px-6 py-[11px] text-[13px] cursor-pointer transition-colors duration-200">
          Reach us out now →
        </button>
        <button className="bg-transparent text-[#888784] border border-[#d0d0cc] rounded-full px-6 py-[11px] text-[13px] cursor-pointer">
          Learn more
        </button>
      </div>

      {/* Cards container */}
      <div className="bg-white border border-[#e8e8e4] rounded-[20px] p-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 items-start">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3.5">
              {col.map(({ item, positionInCol }) => (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  animDelay={
                    newIds.has(item.id) ? positionInCol * 0.1 : colIndex * 0.08
                  }
                />
              ))}
              {loading &&
                Array.from({ length: Math.ceil(skeletonColCount / 3) }).map(
                  (_, i) => <SkeletonCard key={`skel-${colIndex}-${i}`} />,
                )}
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-7 pt-6 border-t border-[#eeecea]">
          <span className="text-[12px] text-[#d0d0cc]">
            Showing {Math.min(shown, ALL_TESTIMONIALS.length)} of{" "}
            {ALL_TESTIMONIALS.length} reviews
          </span>
          <button
            onClick={handleLoadMore}
            disabled={loading || !hasMore}
            className={`bg-transparent border border-[#E03030]/30 rounded-full px-6 py-[9px] text-[12px] text-[#E03030] transition-all duration-200 ${
              loading || !hasMore
                ? "opacity-30 cursor-default"
                : "cursor-pointer hover:border-[#E03030]/60 opacity-70 hover:opacity-100"
            }`}
          >
            {loading ? "Loading..." : hasMore ? "Load more" : "All loaded"}
          </button>
        </div>
      </div>
    </section>
  );
}

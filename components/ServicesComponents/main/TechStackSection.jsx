"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

export default function TechStackSection({
  eyebrow = "WHAT WE USE",
  title = "Strategic solutions for your needs",
  description = "Our experienced team is here to utilize valuable resources efficiently that ensures client satisfaction. We guarantee you that our services will set exceptional growth for your business.",
  categories = defaultCategories,
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="container mx-auto px-6">
        {/* Tech Stack Categories */}
        <div className="space-y-0">
          {categories.map((category, index) => (
            <CategoryRow
              key={category.label}
              category={category}
              index={index}
              isLast={index === categories.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryRow({ category, index, isLast }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={rowRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-8 md:py-12 border-t border-gray-200 ${
        isLast ? "border-b" : ""
      } group hover:bg-gray-50/50 transition-colors duration-300`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Left - Number and Label */}
      <div className="lg:col-span-3 flex items-start gap-4">
        {/* Number */}
        <motion.div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 font-bold text-sm group-hover:bg-[#cc0000] group-hover:text-white transition-colors duration-300"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            type: "spring",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Label */}
        <div className="pt-1.5">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#cc0000] transition-colors duration-300">
            {category.label}
          </h3>
          {category.description && (
            <p className="text-sm text-gray-500 mt-1">{category.description}</p>
          )}
        </div>
      </div>

      {/* Right - Tools */}
      <div className="lg:col-span-9">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {category.tools.map((tool, toolIndex) => (
            <ToolItem
              key={tool.name}
              tool={tool}
              index={toolIndex}
              isInView={isInView}
              parentDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ToolItem({ tool, index, isInView, parentDelay }) {
  return (
    <motion.div
      className="group/tool relative flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 rounded-2xl bg-white border border-gray-200 hover:border-[#cc0000]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: parentDelay + 0.3 + index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Icon/Image */}
      {tool.icon && (
        <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center shrink-0">
          {typeof tool.icon === "string" ? (
            <img
              src={tool.icon}
              alt={tool.name}
              className="h-full w-full object-contain transition-transform duration-300 group-hover/tool:scale-110"
            />
          ) : (
            <tool.icon className="h-full w-full text-gray-700 group-hover/tool:text-[#cc0000] transition-colors" />
          )}
        </div>
      )}

      {/* Name */}
      <span className="text-sm md:text-base font-semibold text-gray-800 group-hover/tool:text-[#cc0000] transition-colors duration-300">
        {tool.name}
      </span>

      {/* Hover indicator */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover/tool:ring-[#cc0000]/20 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

const defaultCategories = [
  {
    label: "Frontend",
    description: "User interface technologies",
    tools: [
      { name: "React", icon: "/tech/frontend/react.png" },
      { name: "Next.js", icon: "/tech/frontend/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tech/frontend/tailwind.png" },
      { name: "TypeScript", icon: "/tech/frontend/ts.webp" },
      { name: "Motion", icon: "/tech/frontend/motion.svg" },
      { name: "GSAP", icon: "/tech/frontend/gsap.png" },
    ],
  },
  {
    label: "Backend",
    description: "Server-side technologies",
    tools: [
      { name: "Node.js", icon: "/tech/backend/node.png" },
      { name: "Express", icon: "/tech/backend/express.png" },
    ],
  },
  {
    label: "Database",
    description: "Data storage solutions",
    tools: [
      { name: "MongoDB", icon: "/tech/db/mongo.png" },
      { name: "PostgreSQL", icon: "/tech/db/postgres.png" },
      { name: "MySQL", icon: "/tech/db/sql.png" },
      //   { name: "Redis", icon: "/tech/redis.svg" },
      { name: "Firebase", icon: "/tech/db/firebase.png" },
    ],
  },
  {
    label: "Hosting",
    description: "Cloud and deployment",
    tools: [
      { name: "Vercel", icon: "/tech/hosting/vercel.svg" },
      //   { name: "AWS", icon: "/tech/aws.svg" },
      { name: "Netlify", icon: "/tech/hosting/netlify.webp" },
      { name: "DigitalOcean", icon: "/tech/hosting/digital.svg" },
      { name: "CPanel", icon: "/tech/hosting/cp.webp" },
    ],
  },
  {
    label: "Version Control",
    description: "Code management",
    tools: [
      { name: "Git", icon: "/tech/control/git.png" },
      { name: "GitHub", icon: "/tech/control/github.svg" },
      { name: "GitHub Actions", icon: "/tech/control/actions.svg" },
    ],
  },
  //   {
  //     label: "Project Management",
  //     description: "Workflow and collaboration",
  //     tools: [
  //       { name: "Jira", icon: "/tech/jira.svg" },
  //       { name: "Trello", icon: "/tech/trello.svg" },
  //       { name: "Notion", icon: "/tech/notion.svg" },
  //       { name: "Slack", icon: "/tech/slack.svg" },
  //       { name: "Asana", icon: "/tech/asana.svg" },
  //     ],
  //   },
];

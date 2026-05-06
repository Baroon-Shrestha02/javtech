"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & brief",
    duration: "Week 1",
    image: "/contact.jpg",
    description:
      "We start by understanding your business goals, target audience, and competitive landscape. Through detailed discussions and research, we create a comprehensive brief that aligns our strategy with your vision.",
    points: [
      "Initial consultation and goal setting",
      "Market and competitor research",
      "Audience persona development",
      "Technical requirements gathering",
      "Project roadmap creation",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Design & build",
    duration: "Weeks 2-4",
    image: "/process/design.jpg",
    description:
      "Our design team creates stunning visuals while our developers build the foundation. We work in sprints, showing you progress every week so you can provide feedback and guide the direction.",
    points: [
      "Wireframing and prototyping",
      "Visual design and branding",
      "Development and coding",
      "Weekly progress reviews",
      "Iterative refinements",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Review & refine",
    duration: "Ongoing",
    image: "/process/review.jpg",
    description:
      "Quality assurance is continuous. We test every feature, gather your feedback, and polish every detail. Nothing launches until you're completely satisfied with the result.",
    points: [
      "Comprehensive testing across devices",
      "User experience optimization",
      "Performance and speed testing",
      "Client feedback integration",
      "Final quality checks",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Launch & measure",
    duration: "Day 1+",
    image: "/process/launch.jpg",
    description:
      "Launch day is just the beginning. We monitor performance, track metrics, and continuously optimize based on real user data. Your success is our success, and we're with you for the long haul.",
    points: [
      "Smooth deployment and launch",
      "Analytics and tracking setup",
      "Performance monitoring",
      "Ongoing optimization",
      "Regular reporting and insights",
    ],
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="rounded-[32px] mx-4 md:mx-8 py-12 md:py-20 px-6 md:px-0 my-20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
            HOW WE WORK
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
            A process built for{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              clarity,
            </span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              not chaos
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl">
            Four stages, every engagement — regardless of scope.
          </p>
        </motion.div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden space-y-3">
          {processSteps.map((step, index) => (
            <MobileAccordionItem
              key={step.id}
              step={step}
              index={index}
              isOpen={activeStep === index}
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Desktop: Split Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16">
          {/* Left Side - Bullet Points */}
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                  activeStep === index
                    ? "border-2 border-purple-500/50"
                    : "bg-transparent border-2 border-transparent "
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                {/* Number Badge */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
                    activeStep === index
                      ? "bg-purple-500 text-white scale-110"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3
                    className={`font-bold text-lg transition-colors duration-300 ${
                      activeStep === index ? "text-accent" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Duration Badge */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeStep === index
                      ? "bg-purple-500/20 "
                      : "bg-white text-gray-500"
                  }`}
                >
                  {step.duration}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Content Panel */}
          <div className="sticky top-8 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className=" backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="relative h-80 ">
                  <img
                    src={processSteps[activeStep].image}
                    alt={processSteps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Scrollable Content */}
                <div className="p-8 max-h-96 overflow-y-auto custom-scrollbar">
                  <h3 className="text-2xl font-bold text-black/80 mb-4">
                    {processSteps[activeStep].title}
                  </h3>

                  <p className="text-black/80 text-base leading-relaxed mb-6">
                    {processSteps[activeStep].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      What happens here
                    </h4>
                    {processSteps[activeStep].points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        <p className="text-black/80 text-sm leading-relaxed">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   MOBILE ACCORDION ITEM
───────────────────────────── */
function MobileAccordionItem({ step, index, isOpen, onClick }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Accordion Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        {/* Number Badge */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
            isOpen ? "bg-purple-500 text-white" : "bg-white/10 text-gray-400"
          }`}
        >
          {step.number}
        </div>

        {/* Title and Duration */}
        <div className="flex-1">
          <h3
            className={`font-bold text-base transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}
          >
            {step.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{step.duration}</p>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 mx-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black text-white/20 mb-2">
                      {step.number}
                    </div>
                    <div className="text-lg font-bold text-white/40">
                      {step.title}
                    </div>
                  </div>
                </div>
                {/* Replace with real image */}
                {/* <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover rounded-lg"
                /> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    What happens here
                  </h4>
                  {step.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-purple-400 shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 },
};

const services = [
  {
    title: "Product engineering",
    body: "Web apps, dashboards, and platforms with solid architecture and UX.",
  },
  {
    title: "Cloud & DevOps",
    body: "CI/CD, observability, and reliable releases without heroics.",
  },
  {
    title: "Design systems",
    body: "Consistent UI, accessible components, and documentation your team can trust.",
  },
];

export function HeroSection() {
  return <section className=""></section>;
}

export function ServicesPreview() {
  return <section className=""></section>;
}

export function CtaBand() {
  return <section className=""></section>;
}

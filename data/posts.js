export const posts = [
  {
    slug: "why-performance-matters",
    title: "Why web performance still matters in 2026",
    date: "2026-03-12",
    excerpt:
      "Speed is a feature. Here is how we measure Core Web Vitals and ship fast experiences.",
  },
  {
    slug: "design-systems-at-scale",
    title: "Design systems that teams actually use",
    date: "2026-02-02",
    excerpt:
      "Tokens, components, and governance — practical notes from shipping UI libraries.",
  },
  {
    slug: "securing-apis",
    title: "Securing APIs without slowing delivery",
    date: "2026-01-18",
    excerpt:
      "A pragmatic checklist for auth, rate limits, and observability on public APIs.",
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

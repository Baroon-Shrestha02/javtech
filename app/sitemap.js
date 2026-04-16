import { getAllSlugs, posts } from "@/data/posts";
import { getSiteUrl } from "@/lib/site";

export default function sitemap() {
  const base = getSiteUrl();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/our-works",
    "/blog",
    "/pricing",
    "/career",
    "/contact",
  ];

  const lastMod = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: lastMod,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const blogEntries = getAllSlugs().map((slug) => {
    const post = posts.find((p) => p.slug === slug);
    return {
      url: `${base}/blog/${slug}`,
      lastModified: post?.date ? new Date(post.date) : lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticEntries, ...blogEntries];
}

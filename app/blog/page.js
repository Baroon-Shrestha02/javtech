import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog",
  description:
    "Notes on performance, product engineering, and shipping reliable web experiences.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="section">
      <div className="container-app">
        <h1 className="section-title">Blog</h1>
        <p className="lead">
          Sample posts live in{" "}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-sm text-accent">
            data/posts.js
          </code>{" "}
          — replace with MDX or a CMS later.
        </p>
        <ul className="m-0 grid list-none gap-4 p-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="glass block p-5 transition-colors hover:border-white/20"
              >
                <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
                <p className="m-0 text-sm text-muted">
                  {post.date} · {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

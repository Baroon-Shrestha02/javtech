import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/data/posts";
import { BlogPostJsonLd } from "@/components/BlogPostJsonLd";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${getSiteUrl()}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="section">
      <BlogPostJsonLd post={post} />
      <article className="mx-auto w-[min(720px,92vw)]">
        <p className="mb-2 text-sm text-muted">
          <Link href="/blog" className="text-accent hover:underline">
            ← Blog
          </Link>
          {" · "}
          {post.date}
        </p>
        <h1 className="section-title">{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="glass space-y-4 p-7 leading-loose">
          <p className="mt-0">
            This is placeholder article body. Replace with MDX, CMS content, or rich text from
            your API. The URL, metadata, and JSON-LD are already wired for SEO.
          </p>
          <p className="mb-0">
            Tip: add an <code className="text-accent">og:image</code> per post when you have real
            cover art.
          </p>
        </div>
      </article>
    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-serif text-4xl tracking-wide text-[#d5b15b]">
            MiseIQ
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link
              href="/blog"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              Back to Blog
            </Link>
            <Link
              href="/demo"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto w-full max-w-4xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#112755]">{post.readTime}</p>
        <h1 className="mt-3 text-5xl font-bold leading-tight">{post.title}</h1>

        <img
          src={post.imageUrl}
          alt={post.imageAlt}
          className="mt-8 h-[420px] w-full rounded-lg border border-slate-300 object-cover"
        />

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

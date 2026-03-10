import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-serif text-4xl tracking-wide text-[#d5b15b]">
            MiseIQ
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link
              href="/pricing"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              Pricing
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

      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <h1 className="text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">MiseIQ Blog</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Insights for restaurant owners and operators on margins, labor control, integrations, and smarter
          day-to-day execution.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full border border-slate-300 bg-white transition hover:-translate-y-1 hover:shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                width={1200}
                height={600}
                className="h-52 w-full rounded-t-lg object-cover"
              />
              <CardContent className="p-6">
                <p className="text-sm font-medium text-[#112755]">{post.readTime}</p>
                <h2 className="mt-1 text-2xl font-bold">{post.title}</h2>
                <p className="mt-3 text-slate-700">{post.summary}</p>
                <p className="mt-4 text-sm font-semibold text-[#112755]">Read article →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}

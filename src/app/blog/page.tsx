/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-shell";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[56rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(17,33,59,0.1),_transparent_28%),linear-gradient(180deg,_#10203a_0%,_#172947_56%,_#233657_72%,_#f4efe6_96%)]" />

      <MarketingHeader navItems={[{ label: "Platform", href: "/#platform" }, { label: "Pricing", href: "/pricing" }, { label: "Demo", href: "/demo" }]} />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
              MiseIQ journal
            </p>
            <h1 className="mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#fff7e8] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
              Restaurant finance and operations insights with real operating context
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f2e6d0] md:text-xl">
              Writing for owners, operators, and hospitality finance teams who care about prime cost, labor pressure,
              purchasing discipline, and cleaner decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#c49a56] px-7 text-base font-semibold text-[#11213b] hover:bg-[#d4b27f]"
              >
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#e6d6b8] bg-[#f6eddc] px-7 text-base text-[#11213b] shadow-[0_12px_30px_rgba(17,33,59,0.12)] hover:bg-[#fbf4e8]"
              >
                <Link href="/pricing">Review Pricing</Link>
              </Button>
            </div>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group rounded-[2rem] border border-white/10 bg-[#0d1a31]/82 p-4 shadow-[0_30px_90px_rgba(9,16,30,0.45)] backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.imageAlt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-6 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-[#f3dfbf]/70">Featured article</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{featuredPost.title}</h2>
                <p className="mt-3 text-sm font-medium text-white/60">{featuredPost.readTime}</p>
                <p className="mt-4 text-base leading-8 text-white/76">{featuredPost.summary}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f3dfbf]">Read article</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-20 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Latest writing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
            Practical articles for restaurants that want better margin control
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remainingPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full overflow-hidden rounded-[2rem] border border-[#d9cfbf] bg-white shadow-[0_18px_60px_rgba(17,33,59,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_80px_rgba(17,33,59,0.12)]">
                <img src={post.imageUrl} alt={post.imageAlt} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8e6d38]">{post.readTime}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#11213b]">{post.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[#4f5b6d]">{post.summary}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#11213b]">Read article</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

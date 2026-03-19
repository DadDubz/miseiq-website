/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-shell";
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
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[50rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.16),_transparent_34%),linear-gradient(180deg,_#10203a_0%,_#172947_58%,_#233657_74%,_#f4efe6_96%)]" />

      <MarketingHeader navItems={[{ label: "Back to Blog", href: "/blog" }, { label: "Pricing", href: "/pricing" }, { label: "Platform", href: "/#platform" }]} />

      <article className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
            {post.readTime}
          </p>
          <h1 className="mt-6 text-5xl leading-[1] font-semibold tracking-[-0.04em] text-[#fff7e8] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f2e6d0] md:text-xl">{post.summary}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d9cfbf] bg-white shadow-[0_22px_70px_rgba(17,33,59,0.08)]">
          <img src={post.imageUrl} alt={post.imageAlt} className="h-[440px] w-full object-cover" />

          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.34fr]">
            <div className="space-y-6 text-lg leading-9 text-[#34415a]">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[1.5rem] border border-[#e9decd] bg-[#fbf7f0] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8e6d38]">References</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#24334d]">
                  {post.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#11213b] underline decoration-[#c49a56] underline-offset-4"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b57a]">Next step</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">See how this looks inside MiseIQ</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  The platform is built to turn ideas like these into daily operational and financial visibility.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    asChild
                    className="rounded-full bg-[#c49a56] text-[#11213b] hover:bg-[#d4b27f]"
                  >
                    <Link href="/demo">Book a Demo</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10"
                  >
                    <Link href="/pricing">See Pricing</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </main>
  );
}

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    slug: "reduce-food-cost",
    title: "How to reduce food cost without lowering quality",
    summary:
      "A practical framework for controlling ingredient spend while protecting guest experience and menu consistency.",
    readTime: "6 min read",
    content: [
      "Start with weekly recipe costing using real invoice data, not list prices. Restaurants lose margin when legacy recipe cards do not reflect current vendor pricing.",
      "Pair your recipe costing with a variance routine: compare theoretical usage to actual purchases and waste. The largest gap each week is usually the fastest win.",
      "Use menu contribution margin to decide where to optimize. Raise price, adjust portion, or swap ingredients only on low-contribution items first.",
    ],
  },
  {
    slug: "daily-kpis",
    title: "5 daily restaurant KPIs that predict margin pressure",
    summary:
      "Track these daily indicators to catch financial issues before month-end closes and accounting reports arrive.",
    readTime: "5 min read",
    content: [
      "1) Prime cost percent (food + labor) by daypart. This is your core margin health signal.",
      "2) Comps and voids as a percent of net sales. Rising rates often point to process drift.",
      "3) Purchase price drift on top 20 ingredients. Small changes compound quickly.",
      "4) Overtime and schedule variance by manager. Labor misses are easiest to fix when seen daily.",
      "5) Cash conversion lag between invoices and reconciliations. Delays create hidden risk.",
    ],
  },
  {
    slug: "chart-of-accounts",
    title: "Building a chart of accounts for multi-location operators",
    summary:
      "Structure your chart of accounts so every location reports consistently and leadership gets clean rollups.",
    readTime: "7 min read",
    content: [
      "Use a shared parent-child account structure so every location posts to the same categories.",
      "Separate controllable costs from fixed costs to make operating decisions faster at the store level.",
      "Map POS, payroll, and invoice feeds to canonical account codes and enforce that mapping across locations.",
    ],
  },
];

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
              href="/pricing#demo"
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
          Practical operating and finance playbooks for restaurant owners, GMs, and multi-unit leadership teams.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20">
        {posts.map((post) => (
          <Card key={post.slug} id={post.slug} className="bg-white">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-[#112755]">{post.readTime}</p>
              <h2 className="mt-1 text-2xl font-bold">{post.title}</h2>
              <p className="mt-2 text-slate-700">{post.summary}</p>
              <div className="mt-4 space-y-3 text-slate-700">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

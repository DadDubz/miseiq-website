import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-shell";

const bookingUrl = "https://miseiq.simplybook.me/v2/";

const walkthroughPoints = [
  "How MiseIQ connects POS, invoices, inventory, delivery, occupancy, AP, and cash context",
  "Which metrics matter most for your stores: prime cost, labor %, discount leakage, fee drag, and operating profit direction",
  "Where your current reporting stack is leaving margin blind spots",
  "What rollout would look like by store count, data sources, and team structure",
];

const prepNotes = [
  "Bring one recent example of a reporting or margin question your team had to answer manually.",
  "If you already use POS, accounting, invoice, or inventory tools, we can map those into the conversation.",
  "The booking calendar opens directly below and can also be launched in a new tab if you prefer.",
];

export default function DemoPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(17,33,59,0.1),_transparent_30%),linear-gradient(180deg,_#10203a_0%,_#172947_38%,_#f4efe6_100%)]" />

      <MarketingHeader navItems={[{ label: "Platform", href: "/#platform" }, { label: "Pricing", href: "/pricing" }, { label: "Blog", href: "/blog" }]} />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
              Book a demo
            </p>
            <h1 className="mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#34415a] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
              See how MiseIQ connects restaurant operations to financial control
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1c2b45] md:text-xl">
              This walkthrough is built for owners, operators, and finance-minded restaurant teams who want a clearer
              view of prime cost, purchasing drift, delivery drag, payables, and cash pressure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#c49a56] px-7 text-base font-semibold text-[#11213b] hover:bg-[#d4b27f]"
              >
                <Link href={bookingUrl} target="_blank" rel="noreferrer">
                  Open Calendar in New Tab
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#d7c4a2] bg-[#efe3c8] px-7 text-base text-[#0f1b31] shadow-[0_12px_30px_rgba(17,33,59,0.12)] hover:bg-[#f6ecd8]"
              >
                <Link href="/pricing">Review Pricing</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0d1a31]/82 p-6 shadow-[0_30px_90px_rgba(9,16,30,0.45)] backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3dfbf]/70">What we cover</p>
              <div className="mt-5 space-y-4">
                {walkthroughPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm leading-7 text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-10 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#d9cfbf] bg-white p-4 shadow-[0_18px_60px_rgba(17,33,59,0.06)] md:p-6">
            <div className="flex flex-col gap-4 border-b border-[#eee3d2] px-2 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">Live scheduling</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#11213b]">Choose a demo time</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-[#4f5b6d]">
                  Book directly on the page. If the calendar has trouble loading, use the external booking link.
                </p>
              </div>
              <Button
                asChild
                className="rounded-full bg-[#11213b] text-white hover:bg-[#1c3151]"
              >
                <Link href={bookingUrl} target="_blank" rel="noreferrer">
                  Open External Calendar
                </Link>
              </Button>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#e9decd] bg-[#faf6ee]">
              <iframe
                title="MiseIQ Booking Calendar"
                src={bookingUrl}
                className="h-[760px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[#d9cfbf] bg-white p-7 shadow-[0_18px_60px_rgba(17,33,59,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">Before the call</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#11213b]">Helpful prep</h2>
              <div className="mt-5 space-y-3">
                {prepNotes.map((note) => (
                  <div key={note} className="rounded-2xl border border-[#eee3d2] bg-[#fbf7f0] px-4 py-4 text-sm leading-7 text-[#24334d]">
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] p-7 text-white shadow-[0_24px_80px_rgba(17,33,59,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b57a]">Need another path?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Review pricing first or keep reading</h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                If your team is still evaluating fit, you can review plan structure or explore the blog before booking.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  className="rounded-full bg-[#c49a56] text-[#11213b] hover:bg-[#d4b27f]"
                >
                  <Link href="/pricing">See Pricing</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/blog">Read the Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

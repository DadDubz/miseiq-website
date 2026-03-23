import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-shell";

const currentPlatformPoints = [
  "POS and sales imports",
  "Invoice upload and manual invoice entry",
  "Inventory and menu-margin workflows",
  "Guest traffic and average-check imports",
  "Delivery economics imports and visibility",
  "Occupancy cost imports",
  "Cash inputs, planning, and near-term outlooks",
  "Integration management, alert thresholds, KPI intelligence, and launch-readiness controls",
];

const nextRoadmapPoints = [
  "Deeper accounting and cash visibility",
  "Stronger AP and invoice automation",
  "More advanced forecasting",
  "Richer connector coverage",
  "Stronger multi-unit operating controls",
  "A future resort and hospitality tier for property-level and outlet-level visibility",
  "A planned SynXis path for hospitality and booking-engine environments",
];

const founderHighlights = [
  "16+ years in restaurant and resort operations",
  "Current Head Chef at Canoe Bay Lodge, a Relais & Chateaux property in Wisconsin",
  "Experience across country clubs, banquet operations, independent restaurants, and hospitality cost control",
  "Background in marketing, certifications in marketing and cybersecurity, and continued culinary education",
];

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[60rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(17,33,59,0.1),_transparent_28%),linear-gradient(180deg,_#10203a_0%,_#172947_56%,_#233657_72%,_#f4efe6_96%)]" />

      <MarketingHeader navItems={[{ label: "Platform", href: "/#platform" }, { label: "Pricing", href: "/pricing" }, { label: "Blog", href: "/blog" }]} />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
            About MiseIQ
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#fff7e8] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
            A financial operating system built for restaurant discipline today and broader hospitality control tomorrow
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f2e6d0] md:text-xl">
            MiseIQ is a restaurant finance operating system built to help owners and operators connect daily restaurant
            activity to real financial performance. It is designed for teams who need more than surface-level reporting
            and want a cleaner way to run the business on the numbers that actually matter.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#d8c6a7] bg-white p-7 shadow-[0_18px_60px_rgba(17,33,59,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">What MiseIQ does</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#11213b]">
              Connect daily restaurant activity to the numbers that shape performance
            </h2>
            <p className="mt-4 text-base leading-8 text-[#4f5b6d]">
              Instead of relying on disconnected spreadsheets, delayed reports, and fragmented back-office workflows,
              MiseIQ brings sales, labor, invoices, inventory, guest traffic, delivery economics, occupancy burden,
              cash outlook, and operational risk into one decision surface.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4f5b6d]">
              The result is a more disciplined way to run the business. Teams can move from reacting to reports after
              the fact to managing the financial rhythm of the restaurant as it happens.
            </p>
            <div className="mt-6 grid gap-3">
              {currentPlatformPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[#eee3d2] bg-[#fbf7f0] px-4 py-4 text-sm leading-7 text-[#24334d]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] p-7 text-white shadow-[0_24px_80px_rgba(17,33,59,0.14)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b57a]">Why it matters</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#fff7e8]">
              Most operators already have data. What they do not have is a clean system for acting on it.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#f2e6d0]">
              MiseIQ was built to close that gap. It gives operators a clearer view of where performance is drifting,
              where margin is leaking, and what the team should act on next before those issues turn into larger
              financial problems.
            </p>
            <p className="mt-4 text-base leading-8 text-[#f2e6d0]">
              It is not simply a reporting layer. It is a more structured operating environment for financial control,
              built around the idea of financial mise en place.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ded2be] bg-[#efe7d8] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Now + next</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
              Better restaurant financial visibility now, broader hospitality operating context over time
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4c5668]">
              Today, MiseIQ helps restaurants manage POS performance, invoices, inventory, guest traffic, delivery
              economics, occupancy costs, cash visibility, alerts, and KPI intelligence. Next, the roadmap expands
              toward deeper automation, stronger accounting workflows, more advanced forecasting, and a future resort
              tier for hospitality properties with food-and-beverage operations.
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            {nextRoadmapPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-[#d8c6a7] bg-white px-5 py-4 text-sm leading-7 text-[#24334d] shadow-[0_12px_40px_rgba(17,33,59,0.04)]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] p-7 text-white shadow-[0_24px_80px_rgba(17,33,59,0.14)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b57a]">Founder</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#fff7e8]">Built by an operator who has lived the problem</h2>
            <p className="mt-5 text-base leading-8 text-[#f2e6d0]">
              A founder section is a good fit here because this is a finance-sensitive product for operators. It adds
              trust by showing that the platform is being shaped by real hospitality operating experience rather than
              abstract SaaS assumptions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9cfbf] bg-white p-7 shadow-[0_18px_60px_rgba(17,33,59,0.06)]">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#11213b]">Jagr Hofstedt</h3>
            <p className="mt-4 text-base leading-8 text-[#4f5b6d]">
              Jagr Hofstedt is the Founder and Operator of MiseIQ and a hospitality professional with over 16 years of
              experience in restaurant and resort operations. He currently serves as Head Chef at Canoe Bay Lodge, a
              Relais &amp; Chateaux property in Wisconsin, where he works closely with cost control, menu engineering,
              and kitchen leadership.
            </p>
            <p className="mt-4 text-base leading-8 text-[#4f5b6d]">
              Through his work across independent restaurants, banquet operations, country clubs, and hospitality
              properties, he saw the same challenge repeatedly: operators struggling to clearly understand margins,
              labor performance, and vendor cost changes because the financial picture lived in fragmented systems.
              MiseIQ was created to solve that problem with a more disciplined financial operating system.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {founderHighlights.map((point) => (
                <div key={point} className="rounded-2xl border border-[#eee3d2] bg-[#fbf7f0] px-4 py-4 text-sm leading-7 text-[#24334d]">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2.2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(17,33,59,0.16)] md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b57a]">See the product</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            See how MiseIQ turns restaurant activity into clearer financial decisions
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
            The story matters, but the real proof is in the workflow. Explore the platform or book a walkthrough to
            see how the product fits your operating model.
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
              className="rounded-full border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10"
            >
              <Link href="/#platform">Explore the Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Who It's For", href: "#audience" },
  { label: "Trust", href: "#trust" },
  { label: "Pricing", href: "/pricing" },
];

const heroSignals = [
  "Prime cost visibility",
  "Delivery fee burden tracking",
  "AP aging and cash outlook",
  "Estimated operating profit",
];

const painPoints = [
  "POS reports show sales, but not where margin is leaking.",
  "Invoices, purchasing, labor, and delivery economics live in separate systems and spreadsheets.",
  "Owner reporting arrives after the week or month is already lost.",
  "Teams see activity, but not the financial impact behind discounts, staffing, and purchasing drift.",
];

const howItWorks = [
  {
    step: "01",
    title: "Connect the daily inputs that actually run the business",
    body:
      "Bring in POS sales, invoices, inventory, guest traffic, delivery channel data, occupancy costs, AP profiles, and cash outlooks without stitching together exports by hand.",
  },
  {
    step: "02",
    title: "Turn operating noise into restaurant financial visibility",
    body:
      "MiseIQ translates daily activity into prime cost, labor percent, sales per labor hour, delivery fee burden, discount leakage, AP aging, and estimated operating profit.",
  },
  {
    step: "03",
    title: "Act before margin drift becomes a month-end surprise",
    body:
      "Operators and owners get one place to see what happened, why it happened, and what needs attention next across purchasing, labor, menu margin, and cash.",
  },
];

const pillars = [
  {
    title: "Prime Cost Visibility",
    body: "See labor and cost pressure in one operating view instead of reconciling reports after the fact.",
  },
  {
    title: "Margin Leak Detection",
    body: "Catch discount leakage, delivery drag, purchasing drift, and occupancy burden before they hide inside blended P&L lines.",
  },
  {
    title: "Restaurant-Specific Metrics",
    body: "Track the numbers that actually run a restaurant: labor percent, COGS proxy, sales per labor hour, AP aging, and cash outlook.",
  },
  {
    title: "Connected Operational Data",
    body: "Unify sales, invoices, inventory, guest traffic, delivery, and payables into one serious operating system.",
  },
  {
    title: "Faster Owner Decisions",
    body: "Move from scattered reports to a clear daily and weekly picture of what is helping profit and what is eroding it.",
  },
];

const metricCards = [
  {
    label: "Labor and productivity",
    stat: "Labor % + sales per labor hour",
    body: "Connect staffing performance to financial output, not just scheduled hours.",
  },
  {
    label: "Purchasing pressure",
    stat: "COGS proxy + invoice drift",
    body: "See food cost direction earlier by tying invoices and inventory workflows back to sales.",
  },
  {
    label: "Delivery profitability",
    stat: "Fee burden + channel drag",
    body: "Measure the real cost of off-premise growth instead of accepting top-line delivery sales at face value.",
  },
  {
    label: "Owner readiness",
    stat: "AP aging + cash outlook",
    body: "Make near-term cash and payable decisions with cleaner operating context.",
  },
];

const featureGroups = [
  {
    eyebrow: "Sales and operations intelligence",
    title: "See the numbers that actually run a restaurant",
    body:
      "MiseIQ pulls daily sales, guest traffic, average check, labor-related output, discounts, and operating signals into one command layer so teams can separate noise from real performance.",
    items: [
      "POS imports and integrations",
      "Guest traffic and average check visibility",
      "Operational alerts and intelligence dashboards",
      "KPI targets and benchmarking",
    ],
  },
  {
    eyebrow: "Purchasing and margin control",
    title: "Follow cost movement from invoice to menu margin",
    body:
      "Invoice uploads, manual invoice entry, inventory workflows, and menu-margin analysis give operators a tighter grip on purchasing behavior, theoretical versus actual direction, and item-level pressure.",
    items: [
      "Invoice upload and manual invoice entry",
      "Inventory and menu-margin workflows",
      "COGS proxy and food cost direction",
      "Discount leakage and purchasing drift visibility",
    ],
  },
  {
    eyebrow: "Finance visibility for operators and owners",
    title: "Bridge daily execution with weekly and monthly financial decisions",
    body:
      "Track delivery economics, occupancy burden, AP aging, and near-term cash outlook in the same system used to understand restaurant performance day to day.",
    items: [
      "Delivery-channel economics imports",
      "Occupancy and lease cost tracking",
      "Accounts payable profile syncing",
      "Cash outlook and estimated operating profit",
    ],
  },
];

const audienceCards = [
  {
    title: "Independent owners",
    body: "Get a cleaner grip on prime cost, purchasing, and cash without building another spreadsheet stack.",
  },
  {
    title: "Multi-unit operators",
    body: "Standardize how stores are measured so field leaders and ownership see the same operating and margin picture.",
  },
  {
    title: "GMs and directors of operations",
    body: "Understand what changed in the business this week and where corrective action belongs next.",
  },
  {
    title: "Hospitality finance teams",
    body: "Connect accounting awareness to daily operating drivers instead of waiting for month-end explanations.",
  },
];

const comparisonRows = [
  {
    label: "What data gets connected",
    spreadsheet: "Manual exports, disconnected tabs, inconsistent update habits",
    miseiq: "POS, invoices, inventory, guest traffic, delivery, occupancy, AP, and cash in one operating system",
  },
  {
    label: "What the team can actually see",
    spreadsheet: "Activity snapshots and partial summaries",
    miseiq: "Prime cost direction, margin leaks, fee drag, labor productivity, and owner-level financial context",
  },
  {
    label: "Speed to action",
    spreadsheet: "Weeks of lag and manual reconciliation",
    miseiq: "Daily operational visibility with faster decisions on what to fix next",
  },
  {
    label: "Trust and accountability",
    spreadsheet: "Version-control confusion and limited audit trail",
    miseiq: "Role-aware access, synced source visibility, alerts, and audit-minded workflows",
  },
];

const trustPoints = [
  "Role-based access controls for finance-sensitive restaurant data",
  "Auth-aware system design with audit visibility and security controls",
  "Operational alerts, monitoring direction, and production hardening mindset",
  "Built for teams that treat restaurant financial data as an operating asset, not a loose collection of exports",
];

const finalCtas = [
  { label: "Book a Demo", href: "/demo" },
  { label: "Explore the Platform", href: "#platform" },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(17,33,59,0.1),_transparent_30%),linear-gradient(180deg,_#10203a_0%,_#162947_38%,_#f4efe6_100%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#10203a]/88 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link href="#top" className="flex items-center" aria-label="MiseIQ home">
            <Image
              src="/miseiq-logo.png"
              alt="MiseIQ Financial Mise en Place logo"
              width={190}
              height={90}
              className="h-auto w-[148px] md:w-[182px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            asChild
            className="rounded-full bg-[#c49a56] px-5 text-sm font-semibold text-[#11213b] hover:bg-[#d1ab6f]"
          >
            <Link href="/demo">See MiseIQ in Action</Link>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
              Restaurant finance operating system
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#fff7e8] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
              Financial Mise en Place for Restaurants
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f2e6d0] md:text-xl">
              MiseIQ brings POS sales, invoices, inventory, guest traffic, delivery economics, occupancy costs,
              payables, and cash outlook into one operating system so restaurant teams can spot margin leaks, manage
              prime cost, and make faster owner-level decisions.
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
                <Link href="#platform">Explore the Platform</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm leading-7 text-[#efe2ca]">
              Built for independent owners, multi-unit groups, operators, and finance-minded hospitality teams that
              need more than a sales dashboard.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1a31]/82 p-4 shadow-[0_30px_90px_rgba(9,16,30,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Owner view</p>
                    <h2 className="mt-2 text-2xl font-semibold">Where margin is moving today</h2>
                  </div>
                  <div className="rounded-full border border-[#c49a56]/40 bg-[#c49a56]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3dfbf]">
                    Live operating signals
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {heroSignals.map((signal) => (
                    <div key={signal} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/62">Focused metric</p>
                      <p className="mt-2 text-lg font-semibold">{signal}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-[#c49a56]/25 bg-[#152641] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#f3dfbf]/70">Decision layer</p>
                  <p className="mt-3 text-base leading-7 text-white/78">
                    Understand what happened, why it happened, and what to fix next across labor, purchasing, delivery,
                    discounts, and occupancy without chasing a dozen reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-4 rounded-[2rem] border border-[#d6c7ad] bg-white/72 p-6 shadow-[0_16px_60px_rgba(17,33,59,0.07)] md:grid-cols-4">
          {painPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-[#e8dece] bg-[#fbf7f0] p-5">
              <p className="text-sm leading-7 text-[#34415a]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">The problem</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
            Restaurants do not have a sales visibility problem. They have a financial control problem.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4c5668]">
            Most teams already have reports. What they do not have is one clean system that connects daily operations
            to owner-level decisions about prime cost, purchasing, delivery drag, cash pressure, and operating profit.
          </p>
        </div>
      </section>

      <section id="platform" className="bg-[#11213b] py-16 text-white md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b57a]">How MiseIQ works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Turn daily restaurant data into profit decisions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold tracking-[0.22em] text-[#d6b57a]">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/72">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Core value pillars</p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
            Built for restaurant operators who care about margin, not just activity
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.5rem] border border-[#e4d5bc] bg-[linear-gradient(180deg,#fffdf8_0%,#f7f0e5_100%)] p-6"
            >
              <h3 className="text-xl font-semibold text-[#11213b]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4f5b6d]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#ded2be] bg-[#efe7d8] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Key metrics and outcomes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
              The metrics are restaurant-native because the decisions are, too
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {metricCards.map((metric) => (
              <div key={metric.stat} className="rounded-[1.75rem] border border-[#d8c6a7] bg-white p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">{metric.label}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#11213b]">{metric.stat}</h3>
                <p className="mt-4 text-base leading-8 text-[#4f5b6d]">{metric.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Product coverage</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
            One system across sales, costs, operations, and owner finance visibility
          </h2>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featureGroups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-[#d9cfbf] bg-white p-7 shadow-[0_18px_60px_rgba(17,33,59,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">{group.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#11213b]">{group.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#4f5b6d]">{group.body}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#24334d]">
                {group.items.map((item) => (
                  <li key={item} className="rounded-2xl border border-[#ece3d4] bg-[#fbf7f0] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="audience" className="bg-[#fbf7f0] py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Who it is for</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
              Built for restaurants that have outgrown disconnected tools
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4c5668]">
              MiseIQ fits teams that already use POS, accounting, invoice, and operating systems but still do not have
              one unified financial operating view.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map((card) => (
              <div key={card.title} className="rounded-[1.5rem] border border-[#e4d5bc] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#11213b]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4f5b6d]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">Why it wins</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
            Better than spreadsheets, cleaner than disconnected reporting stacks
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d7cab5] bg-white">
          <div className="grid border-b border-[#e7dccb] bg-[#f8f2e9] md:grid-cols-[0.9fr_1fr_1fr]">
            <div className="p-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#8e6d38]">Category</div>
            <div className="p-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7d6c50]">Spreadsheets and generic dashboards</div>
            <div className="p-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#11213b]">MiseIQ</div>
          </div>

          {comparisonRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid md:grid-cols-[0.9fr_1fr_1fr] ${index !== comparisonRows.length - 1 ? "border-b border-[#eee3d2]" : ""}`}
            >
              <div className="p-5 text-base font-semibold text-[#11213b]">{row.label}</div>
              <div className="p-5 text-sm leading-7 text-[#6b7280]">{row.spreadsheet}</div>
              <div className="p-5 text-sm leading-7 text-[#24334d]">{row.miseiq}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="trust" className="bg-[#11213b] py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b57a]">Security and trust</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Finance-sensitive restaurant data should be handled like finance-sensitive data
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              MiseIQ is designed for operational and financial trust, with role-based controls, audit-minded visibility,
              and production readiness expectations that match the sensitivity of restaurant reporting and cash context.
            </p>
          </div>

          <div className="grid gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-base leading-8 text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2.2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(17,33,59,0.16)] md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b57a]">Call to action</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            The first system your team can use to understand restaurant operations and restaurant financial performance
            together
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
            If your restaurant already has reports but still lacks clear financial control, MiseIQ gives operators,
            finance leaders, and owners one place to see what matters and act faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {finalCtas.map((cta, index) => (
              <Button
                key={cta.label}
                asChild
                size="lg"
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "rounded-full bg-[#c49a56] px-7 text-base font-semibold text-[#11213b] hover:bg-[#d4b27f]"
                    : "rounded-full border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10"
                }
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8ccb9] bg-[#f7f1e7]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#516073] md:flex-row md:items-center md:justify-between md:px-8">
          <p>MiseIQ is restaurant finance software for margin control, operating visibility, and owner-level decisions.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#platform" className="transition hover:text-[#11213b]">
              Platform
            </Link>
            <Link href="/pricing" className="transition hover:text-[#11213b]">
              Pricing
            </Link>
            <Link href="/demo" className="transition hover:text-[#11213b]">
              Book a Demo
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

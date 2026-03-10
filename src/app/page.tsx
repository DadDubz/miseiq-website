import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a Demo", href: "/demo" },
];

const workflowSections = [
  {
    title: "Overview",
    detail: "Daily briefing, top drift drivers, and a prioritized action queue for faster leadership decisions.",
  },
  {
    title: "Operations",
    detail: "Alert triage, ownership workflows, and module-level execution for corrective action follow-through.",
  },
  {
    title: "Data",
    detail: "Integrations, imports, invoice and inventory quality checks, and sync-health visibility in one place.",
  },
  {
    title: "Intelligence",
    detail: "Forecasting, trend analysis, risk scoring, and AI-supported decision guidance for operating teams.",
  },
  {
    title: "Menu Margins",
    detail: "Item-level margin analysis, pricing recommendations, scenario testing, and guided optimization.",
  },
];

const capabilities = [
  "Executive daily briefing with net sales, labor, comps/voids, and risk context",
  "Automated drift detection for sales, labor, and cost anomalies",
  "Prioritized alerts with root-cause context and recommended next actions",
  "Invoice and inventory ingestion with CSV and manual fallback paths",
  "Action workflow tracking with owner, due date, and status controls",
  "Resilient sync architecture with graceful 4XX/5XX handling and backoff on rate limits",
];

const integrationGroups = [
  {
    title: "POS",
    items: ["Square and Clover (OAuth-enabled)", "Toast and SkyTab support paths"],
  },
  {
    title: "Accounting + Inventory",
    items: [
      "QuickBooks and Xero (OAuth-enabled)",
      "Restaurant365, Craftable, and MarketMan connector support",
    ],
  },
  {
    title: "Reliability + Security",
    items: [
      "Webhook support for key revocation/update events",
      "Tenant-aware architecture with migration-safe deployment patterns",
      "Structured API errors, throttled login, CORS and security headers",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#e8eaee] text-[#081a3a]">
      <header className="sticky top-0 z-20 w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Link href="#top" className="flex flex-col leading-tight">
            <span className="font-serif text-5xl tracking-wide text-[#d5b15b]">MiseIQ</span>
            <span className="text-sm font-semibold">Financial Mise en Place</span>
          </Link>
          <nav className="flex gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto w-full max-w-6xl px-6 py-18 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#112755]">AI-assisted restaurant operations platform</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
          One command center for <span className="text-[#112755]">margin, labor, and daily risk</span>
        </h1>
        <p className="mx-auto mt-5 max-w-4xl text-lg text-slate-700">
          MiseIQ connects POS, invoice, inventory, and accounting data to catch operational drift before it becomes a
          profit problem. Instead of chasing reports across disconnected systems, your team gets clear priorities,
          practical recommendations, and a faster path to confident execution.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-[#081a3a] px-6 py-3 text-lg text-white hover:bg-[#112755]">
            <Link href="/demo">Book a Personalized Demo</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#081a3a] px-6 py-3 text-lg text-[#081a3a] hover:bg-[#081a3a]/10">
            <Link href="/pricing">View Plans</Link>
          </Button>
        </div>
      </section>

      <section id="platform" className="mx-auto w-full max-w-6xl px-6 pb-14">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Built around a clean executive workflow</span>
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {workflowSections.map((section) => (
            <Card key={section.title} className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700">{section.detail}</CardContent>
            </Card>
          ))}
        </div>

      <section className="mx-auto w-full max-w-6xl px-6 pb-14">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Key capabilities that reduce operating volatility</span>
        </h2>
        <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
          {capabilities.map((item) => (
            <li key={item} className="rounded-lg border border-slate-300 bg-white p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="integrations" className="mx-auto w-full max-w-6xl px-6 pb-18">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Integrations, security, and deployment readiness</span>
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {integrationGroups.map((group) => (
            <Card key={group.title} className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

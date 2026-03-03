import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [{ label: "Features", href: "#features" }, { label: "Pricing", href: "/pricing" }];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#e8eaee] text-[#081a3a]">
      <header className="sticky top-0 z-10 w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Link href="#top" className="flex flex-col leading-tight">
            <span className="font-serif text-5xl tracking-wide text-[#d5b15b]">MiseIQ</span>
            <span className="text-sm font-semibold">Financial Mise en Place</span>
          </Link>
          <nav className="flex gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-md px-3 py-2 transition hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center">
        <div className="flex w-full justify-center">
          <Image
            src="/dashboard-hero.png"
            alt="MiseIQ dashboard overview"
            width={1050}
            height={560}
            className="rounded-lg border border-slate-300 shadow-lg"
          />
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[#081a3a]">
          <span className="border-l-4 border-[#c9a646] pl-4">The All‑In‑One Brain for Restaurant Operations</span>
        </h1>
        <p className="mt-2 max-w-3xl text-xl text-slate-700">
          MiseIQ ingests vendor invoices, POS exports and inventory counts to normalise your data and turn
          it into actionable insights. Stop managing spreadsheets and start running your restaurant with
          real-time clarity.
        </p>
        <div className="mt-6 flex gap-4">
          <Button asChild className="bg-[#081a3a] px-6 py-3 text-lg text-white hover:bg-[#112755]">
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#081a3a] px-6 py-3 text-lg text-[#081a3a] hover:bg-[#081a3a]/10"
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#081a3a]">
          <span className="border-l-4 border-[#c9a646] pl-4">Comprehensive Operational Insights</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">Automated Data Ingestion</h3>
              <p className="text-slate-700">
                Read invoices, POS exports and inventory counts automatically. Normalize suppliers and items
                into a consistent dataset for reliable reporting.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">Inventory & Cost Management</h3>
              <p className="text-slate-700">
                Reconcile on-hand stock vs expected quantities and receive alerts when product costs drift
                beyond configured thresholds.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">Alerts & AI Briefings</h3>
              <p className="text-slate-700">
                Get daily summaries of sales, costs and labor variance with action-focused recommendations to
                prioritize your day.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">Multi-Tenant Security</h3>
              <p className="text-slate-700">
                Keep each organization isolated with role-based access and secure authentication controls.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">Canonical Data Model</h3>
              <p className="text-slate-700">
                Consolidate vendor aliases and item codes into canonical products for cleaner analysis across
                suppliers.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col bg-white">
            <CardContent className="flex flex-col space-y-4 p-6">
              <h3 className="text-xl font-semibold text-[#081a3a]">POS Sales & Revenue Mix</h3>
              <p className="text-slate-700">
                Import daily POS activity to track sales mix and compare cost-of-goods trends over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-8 text-3xl font-bold text-[#081a3a]">
          <span className="border-l-4 border-[#c9a646] pl-4">Loved by Restaurant Operators</span>
        </h2>
        <div className="space-y-8">
          <blockquote className="mx-auto max-w-3xl italic text-slate-700">
            “MiseIQ alerts saved us thousands when a vendor’s prices spiked overnight. It caught the issue
            before it hit our bottom line.”
          </blockquote>
          <blockquote className="mx-auto max-w-3xl italic text-slate-700">
            “Our managers no longer waste hours reconciling invoices and counts. MiseIQ does the heavy
            lifting so we can focus on our guests.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold text-[#081a3a]">
          <span className="border-l-4 border-[#c9a646] pl-4">What’s Next for MiseIQ</span>
        </h2>
        <p className="mx-auto max-w-3xl text-slate-700">
          Upcoming releases add predictive demand analytics, waste and spoilage tracking, and deeper
          accounting + payroll integrations.
        </p>
      </section>
    </main>
  );
}

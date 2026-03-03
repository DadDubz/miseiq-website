import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Onboarding", href: "#onboarding" },
  { label: "Alerts", href: "#alerts" },
  { label: "Integrations", href: "#integrations" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "POS Import", href: "#pos-import" },
  { label: "Invoices", href: "#invoices" },
  { label: "Inventory", href: "#inventory" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="sticky top-0 z-10 border-b border-[#1d2b4f] bg-[#081a3a] text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#dashboard" className="leading-tight">
            <p className="text-4xl font-serif tracking-wide text-[#d5b15b]">MiseIQ</p>
            <p className="text-sm font-semibold">Financial Mise en Place</p>
          </Link>
          <nav className="hidden items-center gap-2 text-sm font-semibold md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#logout"
              className="ml-2 rounded-md bg-white px-4 py-2 font-bold text-[#081a3a] transition hover:bg-[#ece7d7]"
            >
              Logout
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[2fr_1fr]">
        <section id="dashboard" className="space-y-6">
          <div>
            <h1 className="border-l-4 border-[#c9a646] pl-3 text-5xl font-semibold">Executive Dashboard</h1>
            <p className="mt-3 text-lg text-slate-700">
              Daily operational intelligence with cost, labor, and risk signal prioritization.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-[#c9a646] bg-white">
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">Weekly Drift</p>
                <p className="mt-2 text-xl">7-day sales $31,700 with labor at 31.6%.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">Today&apos;s Immediate Risk</p>
                <p className="mt-2 text-xl">Net sales $4,300 with $290 in comps/voids.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-wide text-slate-500">Yesterday Snapshot</p>
                <p className="mt-2 text-xl">Sales $4,500, comps $165, voids $110.</p>
              </CardContent>
            </Card>
          </div>

          <Card id="intelligence" className="min-h-72 border-[#c9a646] bg-white">
            <CardContent className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">Primary Insight</p>
              <p className="text-4xl font-semibold">
                7-day sales $31,700 with labor at 31.6% of net sales. Focus on top drifts below.
              </p>
              <p className="text-lg text-slate-700">
                Monitor alert flow and execute intelligence modules to convert this summary into
                prioritized actions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#onboarding" className="px-4 py-2 text-lg hover:underline">
                  Setup Guide
                </Link>
                <Link href="#integrations" className="px-4 py-2 text-lg hover:underline">
                  Manage Integrations
                </Link>
                <Button asChild className="bg-[#081a3a] text-white hover:bg-[#112755]">
                  <Link href="#intelligence">Run Intelligence</Link>
                </Button>
                <Button asChild className="bg-[#c9a646] text-[#081a3a] hover:bg-[#b59234]">
                  <Link href="#alerts">Review Alerts</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-4">
          <Card id="alerts" className="bg-white">
            <CardContent className="p-5">
              <h2 className="text-sm uppercase tracking-wide text-slate-500">Immediate Risk</h2>
              <p className="mt-2 text-xl">Today net sales $4,300; immediate risk from $290 comps/voids.</p>
            </CardContent>
          </Card>
          <Card id="pos-import" className="bg-white">
            <CardContent className="p-5">
              <h2 className="text-sm uppercase tracking-wide text-slate-500">POS Import</h2>
              <p className="mt-2 text-xl">Sales $4,500, comps $165, voids $110 synced successfully.</p>
            </CardContent>
          </Card>
          <Card id="invoices" className="bg-white">
            <CardContent className="p-5">
              <h2 className="text-sm uppercase tracking-wide text-slate-500">AI Briefing (Medium)</h2>
              <p className="mt-2 text-xl">Daily briefing for 2026-02-16: sales are below recent trend.</p>
            </CardContent>
          </Card>
        </aside>

        <Card id="onboarding" className="bg-white lg:col-span-1">
          <CardContent className="p-6">
            <h2 className="border-l-4 border-[#c9a646] pl-3 text-3xl font-semibold">Daily AI Briefing</h2>
            <p className="mt-4 text-lg text-slate-700">
              Net sales were $4,300 with labor at 35.6% and $290 in comps/voids. Open alerts today: 1.
            </p>
          </CardContent>
        </Card>

        <Card id="integrations" className="bg-white lg:col-span-1">
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold">Top Recommended Actions</h2>
            <p className="mt-4 rounded-md border bg-slate-100 p-4 text-lg">
              Review vendor contracts and adjust recipe/menu mix.
            </p>
          </CardContent>
        </Card>

        <Card id="inventory" className="bg-white lg:col-span-2">
          <CardContent className="flex items-center justify-between gap-4 p-6">
            <div>
              <h2 className="text-3xl font-semibold">Inventory</h2>
              <p className="mt-2 text-lg text-slate-700">
                Count sessions, depletion alerts, and item cost drift are synced to your live inventory
                controls.
              </p>
            </div>
            <Button asChild className="bg-[#081a3a] text-white hover:bg-[#112755]">
              <Link href="#dashboard">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <footer id="logout" className="border-t border-slate-300 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} MiseIQ</p>
          <Link href="#dashboard" className="font-semibold text-[#081a3a] hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </footer>
    </main>
  );
}

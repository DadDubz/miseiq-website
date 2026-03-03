"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 75,
    yearlyPrice: 720,
    cadence: "/location",
    description: "Great for single-location operators who need ROI visibility fast.",
    features: [
      "Inventory and recipe costing dashboard",
      "POS + invoice ingestion with daily sync",
      "Daily P&L snapshot and variance alerts",
      "Email support and guided onboarding",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 249,
    yearlyPrice: 2390,
    cadence: "/location",
    description: "Built for multi-unit teams that need tighter control and consistency.",
    features: [
      "Everything in Starter",
      "Multi-location rollups and benchmarking",
      "Automated food cost drift + labor trend alerts",
      "Weekly coaching session and priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    cadence: "annual contract",
    description: "For large groups needing custom integrations, governance, and SLA.",
    features: [
      "Everything in Growth",
      "Custom API + data warehouse export",
      "SSO, role policy controls, and audit reporting",
      "Dedicated success manager and implementation team",
    ],
  },
];

const featureGroups = [
  {
    title: "Inventory + Recipe Costing",
    items: [
      "Track ingredient price changes in real time",
      "Compare theoretical vs actual usage and waste",
      "Monitor menu contribution margin by item",
    ],
  },
  {
    title: "POS + Accounting Integrations",
    items: [
      "Connect Toast, Square, Clover, and Revel POS",
      "Sync daily summaries into QuickBooks and Xero",
      "Automate invoice capture and chart-of-accounts mapping",
    ],
  },
  {
    title: "Real-Time P&L + AI Guidance",
    items: [
      "Daily, weekly, and monthly P&L reporting",
      "Labor and comps/voids anomaly detection",
      "AI recommendations for menu engineering and purchasing",
    ],
  },
];

const roiHighlights = [
  "Cut food waste with daily variance visibility",
  "Reduce labor overruns with shift-level trend alerts",
  "Recover margin leakage from invoice and POS mismatches",
];

const caseStudies = [
  {
    brand: "Harbor Kitchen Group",
    result: "Reduced food waste by 14% in 90 days",
    detail: "Used recipe-cost alerts and purchase variance monitoring across 4 locations.",
  },
  {
    brand: "Westline Burgers",
    result: "Improved gross margin by 5.2 points",
    detail: "Balanced labor scheduling with daypart sales trends surfaced by MiseIQ dashboards.",
  },
];

const blogPosts = [
  "How to reduce food cost without lowering quality",
  "5 daily restaurant KPIs that predict margin pressure",
  "Building a chart of accounts for multi-location operators",
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const savingsLabel = useMemo(
    () => (billingCycle === "yearly" ? "Yearly billing includes ~20% savings." : "Switch to yearly and save ~20%."),
    [billingCycle],
  );

  const formatPrice = (plan: (typeof plans)[number]) => {
    if (plan.monthlyPrice === null || plan.yearlyPrice === null) {
      return { value: "Custom", subtext: plan.cadence };
    }

    if (billingCycle === "monthly") {
      return { value: `$${plan.monthlyPrice}`, subtext: `${plan.cadence}/month` };
    }

    return { value: `$${plan.yearlyPrice}`, subtext: `${plan.cadence}/year (2 months free)` };
  };

  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="sticky top-0 z-10 w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-5xl tracking-wide text-[#d5b15b]">MiseIQ</span>
            <span className="text-sm font-semibold">Financial Mise en Place</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-white/10">
              Back to Home
            </Link>
            <Link href="#demo" className="rounded-md bg-white px-4 py-2 text-sm font-bold text-[#081a3a]">
              Book a Demo
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Pricing Plans</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          Built for independent operators and scaling chains that need real-time margin control and easy,
          coach-supported rollout.
        </p>

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center rounded-lg border border-[#081a3a]/20 bg-white p-2">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`w-1/2 rounded-md px-4 py-2 text-sm font-semibold ${
              billingCycle === "monthly" ? "bg-[#081a3a] text-white" : "text-[#081a3a]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`w-1/2 rounded-md px-4 py-2 text-sm font-semibold ${
              billingCycle === "yearly" ? "bg-[#081a3a] text-white" : "text-[#081a3a]"
            }`}
          >
            Yearly
          </button>
        </div>
        <p className="mt-3 text-center text-sm font-medium text-[#112755]">{savingsLabel}</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const pricing = formatPrice(plan);
            return (
              <Card
                key={plan.name}
                className={`flex h-full flex-col bg-white ${plan.featured ? "border-2 border-[#c9a646] shadow-lg" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="text-3xl text-[#081a3a]">{plan.name}</CardTitle>
                  <p className="text-slate-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-[#081a3a]">{pricing.value}</p>
                    <p className="text-sm text-slate-600">{pricing.subtext}</p>
                  </div>
                  <ul className="mb-8 space-y-2 text-slate-700">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <Button className="mt-auto bg-[#081a3a] text-white hover:bg-[#112755]">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Trial"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Detailed Platform Features</span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featureGroups.map((group) => (
            <Card key={group.title} className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Prove ROI at a Glance</span>
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="bg-white">
            <CardContent className="p-6">
              <ul className="space-y-3 text-slate-700">
                {roiHighlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-4">
              <Image
                src="/dashboard-hero.png"
                alt="MiseIQ dashboard showing real-time restaurant metrics"
                width={900}
                height={520}
                className="h-auto w-full rounded-md border border-slate-200"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Client Case Studies</h2>
              <div className="mt-4 space-y-4 text-slate-700">
                {caseStudies.map((study) => (
                  <div key={study.brand}>
                    <p className="font-semibold text-[#081a3a]">{study.brand}</p>
                    <p>{study.result}</p>
                    <p className="text-sm">{study.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Security & Compliance</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• SOC 2-aligned controls and annual penetration testing</li>
                <li>• AES-256 encryption at rest and TLS in transit</li>
                <li>• Role-based access controls with audit-ready logs</li>
                <li>• Secure bank reconciliation workflows and vendor verification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <Card className="bg-white">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold">Built for Independents and Chains</h2>
            <p className="mt-3 text-slate-700">
              Independent restaurants get quick setup and daily coaching to protect cash flow, while regional
              and national groups gain consistent reporting, role-based governance, and scalable playbooks.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="demo" className="mx-auto w-full max-w-6xl px-6 py-10">
        <Card className="border-2 border-[#c9a646] bg-white">
          <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Book a Personalized Demo</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                See how MiseIQ handles your real menu mix, inventory flow, and labor profile in a guided
                30-minute walkthrough.
              </p>
            </div>
            <Button className="bg-[#081a3a] text-white hover:bg-[#112755]">Schedule Demo</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10 pb-20">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Resources for Operators</span>
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post} className="bg-white">
              <CardContent className="p-6">
                <p className="font-semibold">{post}</p>
                <p className="mt-2 text-sm text-slate-600">Educational guide for restaurant finance teams.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

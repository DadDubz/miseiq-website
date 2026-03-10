"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BillingCycle = "monthly" | "yearly";

const optionalSetupFee = 100;

const plans = [
  {
    name: "Operator",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    cadence: "/location",
    description: "For single-location operators who need daily margin control.",
    features: [
      "Executive daily briefing and action queue",
      "POS + invoice ingestion and sync health monitoring",
      "Core drift detection for sales, labor, and costs",
      "Menu margin diagnostics with guided recommendations",
    ],
  },
  {
    name: "Multi-Unit",
    monthlyPrice: 379,
    yearlyPrice: 3790,
    cadence: "/location",
    description: "For growing groups standardizing performance across stores.",
    features: [
      "Everything in Operator",
      "Cross-location trend analysis and risk scoring",
      "Workflow ownership tracking by manager and due date",
      "Scenario lab for pricing and margin decisions",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    cadence: "annual contract",
    description: "For brands requiring custom rollout, controls, and governance.",
    features: [
      "Everything in Multi-Unit",
      "Custom integration planning and staged migration runbooks",
      "Advanced tenant-aware controls and deployment support",
      "Dedicated implementation and success partnership",
    ],
  },
];

const platformAreas = [
  {
    title: "Operations Intelligence",
    items: [
      "Automated anomaly detection with root-cause context",
      "Prioritized alerts with next-best-action suggestions",
      "Daily risk visibility to reduce operating volatility",
    ],
  },
  {
    title: "Menu + Margin Tools",
    items: [
      "Item-level margin visibility and opportunity scoring",
      "Basic and advanced menu item builder experiences",
      "Scenario modeling before pricing changes go live",
    ],
  },
  {
    title: "Integration Ecosystem",
    items: [
      "Square, Clover, QuickBooks, and Xero OAuth workflows",
      "Support paths for Toast, SkyTab, Restaurant365, Craftable, and MarketMan",
      "Webhook and reconnect utilities for ongoing sync reliability",
    ],
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const savingsLabel = useMemo(
    () =>
      billingCycle === "yearly"
        ? "Yearly billing includes ~17% savings (about 2 months free)."
        : "Switch to yearly and save ~17%.",
    [billingCycle],
  );

  const formatPrice = (plan: (typeof plans)[number]) => {
    if (plan.monthlyPrice === null || plan.yearlyPrice === null) {
      return { value: "Custom", subtext: plan.cadence };
    }

    if (billingCycle === "monthly") {
      return { value: `$${plan.monthlyPrice}`, subtext: `${plan.cadence}/month` };
    }

    return { value: `$${plan.yearlyPrice}`, subtext: `${plan.cadence}/year` };
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
            <Link
              href="/blog"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Blog
            </Link>
            <Link
              href="/demo"
              className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Pricing built for real restaurant workflows</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          Built to be affordable without being &quot;cheap software&quot;: if MiseIQ helps you recover $500+ in margin per
          month, these plans are designed to deliver a clear return.
        </p>

             <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Pricing built for real restaurant workflows</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          From independent operators to multi-unit brands, choose a plan that helps your team protect
          margin and execute faster with less noise.
          Straightforward monthly pricing that stays affordable while supporting high-impact operational outcomes.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-sm font-medium text-[#112755]">
          Current rates: Operator $100/month and Multi-Unit $300/month.
        </p>

        <p className="mt-6 text-center text-sm text-slate-600">
          Optional white-glove onboarding is available for a one-time <strong>${optionalSetupFee}</strong> fee to
          professionally configure recipes, menu items, and essential account setup.
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
        <p className="mt-3 text-center text-sm text-slate-600">{savingsLabel}</p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {plans.map((plan) => {
          const price = formatPrice(plan);

          return (
            <Card
              key={plan.name}
              className={`bg-white ${plan.featured ? "border-2 border-[#c9a646] shadow-lg" : "border border-slate-300"}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-slate-700">{plan.description}</p>
                <p className="mt-4 text-4xl font-bold text-[#081a3a]">{price.value}</p>
                <p className="text-sm text-slate-600">{price.subtext}</p>
                <p className="mt-1 text-sm font-medium text-[#112755]">
                  Optional white-glove onboarding: +${optionalSetupFee} one-time
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-[#c9a646]">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full bg-[#081a3a] text-white hover:bg-[#112755]">
                  <Link href="/demo">{plan.name === "Enterprise" ? "Talk to Sales" : "Start with a Demo"}</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20" id="features">
        <h2 className="text-3xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">What every plan is designed to support</span>
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {platformAreas.map((group) => (
            <Card key={group.title} className="bg-white">
              <CardHeader>
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

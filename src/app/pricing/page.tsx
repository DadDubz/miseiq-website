"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MarketingFooter, MarketingHeader } from "@/components/marketing-shell";

type BillingCycle = "monthly" | "yearly";

const plans = [
  {
    name: "Operator",
    monthlyPrice: 129,
    yearlyPrice: 1290,
    cadence: "/location",
    onboardingFee: 100,
    description: "For single-location operators who want daily margin control without adding another reporting mess.",
    features: [
      "POS, invoice, and sales intelligence in one operating view",
      "Prime cost direction, labor pressure, and discount leakage visibility",
      "Daily alerts and KPI targets for owner and GM decision-making",
      "Menu-margin and purchasing workflows for tighter cost control",
    ],
  },
  {
    name: "Multi-Unit",
    monthlyPrice: 329,
    yearlyPrice: 3290,
    cadence: "/location",
    onboardingFee: 200,
    description: "For growing restaurant groups standardizing financial operating control across stores.",
    features: [
      "Everything in Operator",
      "Cross-location comparison for labor, margin, and operating drift",
      "Shared visibility for operators, directors, and finance leadership",
      "Benchmarking and workflow coordination across locations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    cadence: "annual contract",
    onboardingFee: 300,
    description: "For brands that need rollout planning, governance, and a more tailored operating model.",
    features: [
      "Everything in Multi-Unit",
      "Custom rollout planning and data-source implementation support",
      "Advanced controls, governance, and enterprise readiness",
      "Dedicated partnership for onboarding, migration, and expansion",
    ],
  },
];

const valuePoints = [
  "No per-seat pricing or bloated software bundles",
  "Per-location pricing that matches how restaurant groups scale",
  "Onboarding that increases by tier at $100 per location",
  "Built for operators who care about margin, not vanity analytics",
];

const includedAreas = [
  {
    title: "Financial control",
    body: "Prime cost visibility, labor percent, COGS proxy, discount leakage, delivery drag, AP aging, and cash outlook in one system.",
  },
  {
    title: "Connected restaurant data",
    body: "POS sales, invoices, inventory, guest traffic, occupancy, delivery channel economics, and payables context without spreadsheet stitching.",
  },
  {
    title: "Operator-ready execution",
    body: "Alerts, KPI targets, benchmarking, and workflow visibility so teams can act on what changed instead of reviewing numbers too late.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const savingsLabel = useMemo(
    () =>
      billingCycle === "yearly"
        ? "Yearly billing includes about two months free."
        : "Switch to yearly billing for the strongest rate.",
    [billingCycle],
  );

  const formatPrice = (plan: (typeof plans)[number]) => {
    if (plan.monthlyPrice === null || plan.yearlyPrice === null) {
      return { value: "Custom", subtext: plan.cadence };
    }

    if (billingCycle === "monthly") {
      return {
        value: `$${plan.monthlyPrice}`,
        subtext: `${plan.cadence}/month`,
      };
    }

    return {
      value: `$${plan.yearlyPrice}`,
      subtext: `${plan.cadence}/year`,
    };
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f4efe6] text-[#11213b]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,154,86,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(17,33,59,0.1),_transparent_30%),linear-gradient(180deg,_#10203a_0%,_#172947_40%,_#f4efe6_100%)]" />

      <MarketingHeader navItems={[{ label: "Platform", href: "/#platform" }, { label: "Blog", href: "/blog" }, { label: "Demo", href: "/demo" }]} />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#d6b57a]/45 bg-[#f4e7cb]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f5324] shadow-[0_8px_30px_rgba(17,33,59,0.12)]">
              Pricing
            </p>
            <h1 className="mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#0f1b31] md:text-7xl [font-family:Georgia,'Times_New_Roman',serif]">
              Pricing built for serious restaurant operators
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1c2b45] md:text-xl">
              Clear per-location pricing for teams that need stronger financial control across operations, purchasing,
              delivery, and owner visibility. No vague platform bundles. No generic analytics upsell.
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
                className="rounded-full border-[#d7c4a2] bg-[#efe3c8] px-7 text-base text-[#0f1b31] shadow-[0_12px_30px_rgba(17,33,59,0.12)] hover:bg-[#f6ecd8]"
              >
                <Link href="/#platform">Explore the Platform</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0d1a31]/82 p-6 shadow-[0_30px_90px_rgba(9,16,30,0.45)] backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-[#f3dfbf]/70">Pricing notes</p>
              <div className="mt-5 space-y-4">
                {valuePoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm leading-7 text-white/78">{point}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/62">
                Current published rates: Operator at $129 per location per month, Multi-Unit at $329 per location per
                month, with annual equivalents available for teams that want the strongest rate.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-md items-center justify-center rounded-full border border-[#d7c4a2] bg-[#fbf7f0] p-2 shadow-[0_14px_40px_rgba(17,33,59,0.08)]">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`w-1/2 rounded-full px-4 py-3 text-sm font-semibold ${
              billingCycle === "monthly" ? "bg-[#11213b] text-white" : "text-[#11213b]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`w-1/2 rounded-full px-4 py-3 text-sm font-semibold ${
              billingCycle === "yearly" ? "bg-[#11213b] text-white" : "text-[#11213b]"
            }`}
          >
            Yearly
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-[#5b6475]">{savingsLabel}</p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-16 md:px-8 xl:grid-cols-3">
        {plans.map((plan) => {
          const price = formatPrice(plan);

          return (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-[1px] ${
                plan.featured
                  ? "bg-[linear-gradient(180deg,rgba(196,154,86,1),rgba(196,154,86,0.25))]"
                  : "bg-[linear-gradient(180deg,rgba(217,207,191,1),rgba(217,207,191,0.4))]"
              }`}
            >
              <div className="h-full rounded-[calc(2rem-1px)] bg-white p-7 shadow-[0_18px_60px_rgba(17,33,59,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8e6d38]">{plan.name}</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b]">{price.value}</h2>
                    <p className="mt-2 text-sm text-[#5b6475]">{price.subtext}</p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-[#d8b983] bg-[#fbf2df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e6d38]">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-base leading-8 text-[#4f5b6d]">{plan.description}</p>
                <p className="mt-4 rounded-2xl border border-[#e9decd] bg-[#fbf7f0] px-4 py-3 text-sm font-medium text-[#24334d]">
                  White-glove onboarding: +${plan.onboardingFee}/location one-time
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-[#eee3d2] bg-[#fcfaf5] px-4 py-4 text-sm leading-7 text-[#24334d]">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full rounded-full bg-[#11213b] text-white hover:bg-[#1c3151]"
                >
                  <Link href="/demo">{plan.name === "Enterprise" ? "Talk to Sales" : "See MiseIQ in Action"}</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-y border-[#ded2be] bg-[#efe7d8] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6d38]">What plans are built to support</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#11213b] md:text-5xl">
              Every tier is designed around restaurant financial operations, not surface-level reporting
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {includedAreas.map((area) => (
              <div key={area.title} className="rounded-[1.75rem] border border-[#d8c6a7] bg-white p-7">
                <h3 className="text-2xl font-semibold text-[#11213b]">{area.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#4f5b6d]">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2.2rem] border border-[#d7c4a2] bg-[linear-gradient(135deg,#11213b_0%,#1d3152_100%)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(17,33,59,0.16)] md:px-10 md:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6b57a]">Need the right fit?</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            We can walk through the right tier based on store count, workflows, and rollout needs
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
            The fastest way to understand fit is a short product walkthrough with your operating model in mind.
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
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

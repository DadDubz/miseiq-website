import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$99",
    cadence: "/location/month",
    description: "Great for single-location operators who need visibility fast.",
    features: [
      "Invoice + POS data ingestion",
      "Daily AI operational briefing",
      "Core dashboard and alerts",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$249",
    cadence: "/location/month",
    description: "Built for multi-unit teams that need deeper control.",
    features: [
      "Everything in Starter",
      "Multi-location rollups",
      "Advanced variance + drift alerts",
      "Inventory counting workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual contract",
    description: "For larger groups needing tailored integrations and governance.",
    features: [
      "Everything in Growth",
      "Custom integrations + API access",
      "Dedicated onboarding",
      "SLA + account manager",
      "Security and compliance review",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="sticky top-0 z-10 w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-5xl tracking-wide text-[#d5b15b]">MiseIQ</span>
            <span className="text-sm font-semibold">Financial Mise en Place</span>
          </Link>
          <Link href="/" className="rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-white/10">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Pricing Plans</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          Choose the subscription tier that fits your operation. All plans include onboarding guidance and
          access to the MiseIQ intelligence platform.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
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
                  <p className="text-4xl font-bold text-[#081a3a]">{plan.price}</p>
                  <p className="text-sm text-slate-600">{plan.cadence}</p>
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
          ))}
        </div>
      </section>
    </main>
  );
}

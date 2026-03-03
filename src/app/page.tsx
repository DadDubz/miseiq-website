import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Landing page for the MiseIQ website.
 *
 * This component lays out a full marketing page highlighting the
 * product’s capabilities: an eye‑catching hero section, a features
 * overview, social proof, pricing call‑to‑action, and a roadmap
 * teaser. Feel free to swap in your own images or adjust the copy
 * as your product evolves. The design uses Tailwind utility
 * classes for consistent spacing, typography and responsive
 * behaviour.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top navigation bar styled like the app */}
      <header className="w-full bg-blue-900 text-white border-b-4 border-yellow-500 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="MiseIQ logo" width={40} height={40} className="dark:invert" />
            <span className="text-xl font-bold tracking-wide">MiseIQ</span>
          </div>
          {/* Simple navigation placeholder */}
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-yellow-400">Features</a>
            <a href="#" className="hover:text-yellow-400">Pricing</a>
            <a href="#" className="hover:text-yellow-400">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-6 text-center flex flex-col items-center gap-6">
        {/* Replace the src below with a hero dashboard screenshot located in your public folder */}
        <div className="w-full flex justify-center">
          <Image
            src="/dashboard-hero.png"
            alt="MiseIQ dashboard overview"
            width={800}
            height={450}
            className="rounded-lg shadow-lg border dark:invert"
          />
        </div>
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-blue-900 dark:text-white">
          <span className="border-l-4 border-yellow-500 pl-4">
            The All‑In‑One Brain for Restaurant Operations
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          MiseIQ ingests vendor invoices, POS exports and inventory counts to
          normalise your data and turn it into actionable insights. Stop managing
          spreadsheets and start running your restaurant with real‑time clarity.
        </p>
        <div className="mt-8 flex gap-4">
          <Button className="px-6 py-3 text-lg bg-blue-900 text-white hover:bg-blue-800">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="px-6 py-3 text-lg border-blue-900 text-blue-900 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section className="w-full max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900 dark:text-white">
          <span className="border-l-4 border-yellow-500 pl-4">
            Comprehensive Operational Insights
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Automated Data Ingestion
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our ingestion service reads your raw invoices, POS exports and
                manual inventory counts. It maps vendor products to your own
                catalogue using canonical vendors, items and aliases so you get
                consistent data—regardless of supplier naming conventions.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Inventory & Cost Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Track inventory items across your organisation with row‑level
                security (RLS). Create count sessions to reconcile on‑hand stock
                versus expected quantities, and receive alerts when product
                costs drift beyond your configured thresholds.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Alerts & AI‑Generated Briefings
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                An alert feed notifies you of cost drift, labour variance,
                sales anomalies and other exceptions. Each morning you’ll
                receive an AI‑generated briefing summarising the previous
                day’s sales, costs and labour performance, complete with
                suggestions on where to focus next.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Multi‑Tenant Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All your data stays private through Postgres RLS. Each
                organisation is isolated, and user roles (OWNER, MANAGER,
                etc.) are enforced with hashed passwords and JWT tokens. You
                maintain control over who sees what.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Canonical Data Model
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vendor item codes and aliases are normalised to canonical
                products. This provides consistent reporting across suppliers
                and prevents data silos.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 space-y-4 flex flex-col">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                POS Sales & Revenue Mix
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Daily POS sales are imported and normalised. See your
                revenue, sales mix and cost‑of‑goods comparisons across
                days to understand trends and optimise pricing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-white">
          <span className="border-l-4 border-yellow-500 pl-4">
            Loved by Restaurant Operators
          </span>
        </h2>
        <div className="space-y-8">
          {/* Replace these with real testimonials once available */}
          <blockquote className="text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto">
            “MiseIQ alerts saved us thousands when a vendor’s prices spiked
            overnight. It caught the issue before it hit our bottom line.”
          </blockquote>
          <blockquote className="text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto">
            “Our managers no longer waste hours reconciling invoices and
            counts. MiseIQ does the heavy lifting so we can focus on our
            guests.”
          </blockquote>
        </div>
      </section>

      {/* Pricing & Call‑to‑Action */}
      <section className="w-full max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-white">
          <span className="border-l-4 border-yellow-500 pl-4">
            Simple Pricing
          </span>
        </h2>
        <p className="mb-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Pay per location or scale up with volume-based plans. Start with a
          30‑day free trial—no credit card required.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          {/* Standard plan */}
          <Card className="flex flex-col md:w-1/3 border-2 border-blue-900 dark:border-blue-900">
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white">
                Standard
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Perfect for single locations. Includes invoice and POS ingestion,
                basic alerts and daily AI briefings.
              </p>
              <Button className="mt-auto bg-blue-900 text-white hover:bg-blue-800">
                Try It Free
              </Button>
            </CardContent>
          </Card>
          {/* Growth plan */}
          <Card className="flex flex-col md:w-1/3 border-2 border-blue-900 dark:border-blue-900">
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white">
                Growth
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                For multi‑unit groups. Adds multi‑location dashboards, custom
                alert thresholds and priority support.
              </p>
              <Button className="mt-auto bg-blue-900 text-white hover:bg-blue-800">
                Get Started
              </Button>
            </CardContent>
          </Card>
          {/* Enterprise plan */}
          <Card className="flex flex-col md:w-1/3 border-2 border-blue-900 dark:border-blue-900">
            <CardContent className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white">
                Enterprise
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tailored solutions for large chains. Includes API access,
                dedicated account management and custom integrations.
              </p>
              <Button className="mt-auto bg-blue-900 text-white hover:bg-blue-800">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="w-full max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-white">
          <span className="border-l-4 border-yellow-500 pl-4">
            What’s Next for MiseIQ
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We’re continuously evolving. Upcoming releases will add predictive
          analytics to forecast demand, waste and spoilage tracking to reduce
          shrinkage, and deeper integrations with accounting and payroll
          systems. Stay tuned!
        </p>
      </section>
    </main>
  );
}
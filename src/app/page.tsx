import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Pricing", href: "/pricing" },
<<<<<<< codex/update-website-design-for-branding-y6eyud
  { label: "Book a Demo", href: "/demo" },
=======
  { label: "Book a Demo", href: "/pricing#demo" },
>>>>>>> main
  { label: "Blog", href: "/blog" },
];

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
          MiseIQ ingests invoices, POS, and inventory in real time so operators can protect margin, reduce
          labor surprises, and make faster calls with confidence.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-[#081a3a] px-6 py-3 text-lg text-white hover:bg-[#112755]">
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#081a3a] px-6 py-3 text-lg text-[#081a3a] hover:bg-[#081a3a]/10"
          >
            <Link href="/pricing#features">See Platform Features</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-8 text-3xl font-bold text-[#081a3a]">
          <span className="border-l-4 border-[#c9a646] pl-4">Loved by Restaurant Operators</span>
        </h2>
        <div className="space-y-8">
          <blockquote className="mx-auto max-w-3xl italic text-slate-700">
            “MiseIQ alerts saved us thousands when a vendor&apos;s prices spiked overnight. It caught the issue
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
          <span className="border-l-4 border-[#c9a646] pl-4">What&apos;s Next for MiseIQ</span>
        </h2>
        <p className="mx-auto max-w-3xl text-slate-700">
          Upcoming releases add predictive demand analytics, waste and spoilage tracking, deeper accounting
          automation, and coaching workflows for independent restaurants and scaling chains.
        </p>
      </section>
    </main>
  );
}

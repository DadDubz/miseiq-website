import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const demoBookingUrl = "https://calendly.com";
const demoEmail = "demo@miseiq.com";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#e8eaee] text-[#081a3a]">
      <header className="w-full border-b border-[#1b2a4a] bg-[#081a3a] py-4 text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-serif text-4xl tracking-wide text-[#d5b15b]">
            MiseIQ
          </Link>
          <div className="flex gap-2 text-sm font-semibold">
            <Link
              href="/pricing"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              Blog
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Book a Personalized Demo</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          We&apos;ll walk through your actual restaurant workflows, margins, and reporting needs in a focused
          30-minute session.
        </p>

        <Card className="mx-auto mt-10 max-w-4xl border-2 border-[#c9a646] bg-white">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Choose a demo time</h2>
              <p className="mt-2 max-w-xl text-slate-700">
                Use your booking calendar below. If calendar access fails for any reason, use the direct email
                option and we&apos;ll schedule manually.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#081a3a] text-white hover:bg-[#112755]">
                <Link href={demoBookingUrl} target="_blank" rel="noreferrer">
                  Open Calendar
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#081a3a] text-[#081a3a]">
                <Link
                  href={`mailto:${demoEmail}?subject=${encodeURIComponent("MiseIQ demo request")}&body=${encodeURIComponent("Hi MiseIQ team,%0D%0A%0D%0AI would like to schedule a demo.%0D%0ACompany:%0D%0ALocations:%0D%0APreferred day/time:%0D%0A%0D%0AThanks!")}`}
                >
                  Email to Book
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <Card className="bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold">How to connect your real calendar</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Create your booking page in Calendly, Cal.com, or Google Appointment Schedule.</li>
              <li>Replace the `demoBookingUrl` constant in this file with your real booking URL.</li>
              <li>Set your real team inbox in `demoEmail` for a reliable fallback.</li>
              <li>If you want inline scheduling, embed your provider&apos;s iframe in this section.</li>
            </ol>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

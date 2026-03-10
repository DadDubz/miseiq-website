import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const bookingUrl = "https://miseiq.simplybook.me/v2/";

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

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-center text-5xl font-bold">
          <span className="border-l-4 border-[#c9a646] pl-4">Book a Personalized Demo</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-700">
          You can schedule directly on this page. If the calendar has trouble loading, use the fallback button to open
          it in a new tab.
        </p>

        <Card className="mx-auto mt-10 max-w-5xl border-2 border-[#c9a646] bg-white">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Choose a demo time</h2>
                <p className="mt-2 max-w-xl text-slate-700">
                  Use the live SimplyBook calendar below to reserve your preferred time.
                </p>
              </div>
              <Button asChild className="bg-[#081a3a] text-white hover:bg-[#112755]">
                <Link href={bookingUrl} target="_blank" rel="noreferrer">
                  Open Calendar in New Tab
                </Link>
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-300 bg-slate-50">
              <iframe
                title="MiseIQ Booking Calendar"
                src={bookingUrl}
                className="h-[760px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-[#081a3a] text-[#081a3a] hover:bg-[#081a3a]/10">
                <Link href={bookingUrl} target="_blank" rel="noreferrer">
                  Calendar not loading? Open it directly
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20">
        <Card className="bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold">Booking setup notes</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Current booking URL: <Link href={bookingUrl} target="_blank" rel="noreferrer" className="underline">{bookingUrl}</Link></li>
              <li>If your booking URL changes, update the `bookingUrl` constant at the top of this page.</li>
              <li>Keep the fallback button so visitors can still book if iframe embedding is blocked.</li>
            </ol>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

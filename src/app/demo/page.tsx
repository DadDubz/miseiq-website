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
          Choose a time directly below. If the embedded calendar doesn&apos;t load in your browser, use the
          fallback button to open it in a new tab.
        </p>

        <Card className="mx-auto mt-10 border-2 border-[#c9a646] bg-white">
          <CardContent className="p-4 md:p-6">
            <iframe
              src={bookingUrl}
              title="MiseIQ demo booking calendar"
              className="h-[950px] w-full rounded-md border border-slate-300"
              loading="lazy"
            />
            <div className="mt-4 flex justify-center">
              <Button asChild className="bg-[#081a3a] text-white hover:bg-[#112755]">
                <Link href={bookingUrl} target="_blank" rel="noreferrer">
                  Open Calendar in New Tab
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

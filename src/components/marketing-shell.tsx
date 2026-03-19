import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

type MarketingHeaderProps = {
  navItems?: NavItem[];
  primaryCta?: {
    label: string;
    href: string;
  };
};

const defaultNavItems: NavItem[] = [
  { label: "Platform", href: "/#platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const defaultCta = {
  label: "Book a Demo",
  href: "/demo",
};

export function MarketingHeader({
  navItems = defaultNavItems,
  primaryCta = defaultCta,
}: MarketingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#10203a]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center" aria-label="MiseIQ home">
          <Image
            src="/miseiq-logo.png"
            alt="MiseIQ Financial Mise en Place logo"
            width={190}
            height={90}
            className="h-auto w-[148px] md:w-[182px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="rounded-full bg-[#c49a56] px-5 text-sm font-semibold text-[#11213b] hover:bg-[#d1ab6f]"
        >
          <Link href={primaryCta.href}>{primaryCta.label}</Link>
        </Button>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#d8ccb9] bg-[#f7f1e7]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#516073] md:flex-row md:items-center md:justify-between md:px-8">
        <p>MiseIQ is restaurant finance software for margin control, operating visibility, and owner-level decisions.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/#platform" className="transition hover:text-[#11213b]">
            Platform
          </Link>
          <Link href="/pricing" className="transition hover:text-[#11213b]">
            Pricing
          </Link>
          <Link href="/blog" className="transition hover:text-[#11213b]">
            Blog
          </Link>
          <Link href="/demo" className="transition hover:text-[#11213b]">
            Book a Demo
          </Link>
        </div>
      </div>
    </footer>
  );
}

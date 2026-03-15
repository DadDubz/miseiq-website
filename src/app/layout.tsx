import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiseIQ | Financial Mise en Place for Restaurants",
  description:
    "MiseIQ is an AI-assisted restaurant operations platform that unifies POS, invoice, inventory, and accounting data into one command center for margin, labor, and daily risk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

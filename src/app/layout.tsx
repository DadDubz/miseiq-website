import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiseIQ | Financial Mise en Place for Restaurants",
  description:
    "MiseIQ is a restaurant finance operating system that unifies POS sales, invoices, inventory, guest traffic, delivery economics, occupancy costs, payables, and cash outlook into one platform for prime cost visibility and margin control.",
  keywords: [
    "restaurant finance software",
    "restaurant prime cost software",
    "restaurant profit analytics",
    "restaurant operations analytics",
    "restaurant invoice and inventory software",
    "restaurant margin management",
    "restaurant financial dashboard",
    "hospitality finance platform",
  ],
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiseIQ | Executive Intelligence",
  description: "MiseIQ executive dashboard and operations intelligence landing page.",
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

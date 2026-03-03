import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function MiseIQHome() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-800">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Mise IQ</h1>
        <p className="text-lg mb-6 max-w-2xl">
          Mise IQ is your restaurant’s financial assistant. Get real-time insights
          into margin drift, labor cost, food cost, invoice trends, and more — all
          in one easy-to-use dashboard. Designed for independent restaurants and
          growing chains who want to improve profitability and make smarter
          decisions every day.
        </p>
        <div className="flex gap-4 mb-12">
          <Link href="https://app.miseiq.com/login">
            <Button>Log In</Button>
          </Link>
          <Link href="https://app.miseiq.com/register">
            <Button variant="outline">Create Account</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>AI-powered daily financial briefings</li>
                <li>Alerts for sales dips, labor drift, food cost spikes</li>
                <li>Invoice tracking and vendor price change detection</li>
                <li>Multi-location support</li>
                <li>Inventory variance tracking</li>
                <li>Visual dashboards for COGS, labor %, and prime cost</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Subscription</h2>
              <p className="mb-2">
                Start your 30-day free trial and experience how Mise IQ can save
                you time and money.
              </p>
              <ul className="list-disc ml-5 mb-4">
                <li>$59/month per location</li>
                <li>No setup fees</li>
                <li>Cancel anytime</li>
              </ul>
              <Button>Subscribe Now</Button>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About the App</h2>
          <p className="max-w-3xl mb-4">
            Mise IQ was built by a team of developers and restaurant professionals
            to give operators real-time visibility into their bottom line. Rather
            than wait for a monthly P&L, you get a live pulse on what's driving or
            hurting your profits — with suggestions you can act on.
          </p>
          <p className="max-w-3xl">
            Whether you're managing one busy location or scaling to multiple
            stores, Mise IQ gives you the tools to stay in control of costs and
            maximize profitability every day.
          </p>
        </section>

        <footer className="mt-20 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mise IQ. All rights reserved.
        </footer>
      </section>
    </main>
  );
}

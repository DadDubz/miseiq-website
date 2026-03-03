import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 bg-white dark:bg-black">
      <Card className="w-full max-w-2xl text-center">
        <CardContent>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/logo.png" // replace with your logo path if available
              alt="MiseIQ Logo"
              width={80}
              height={80}
              className="dark:invert"
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to MiseIQ
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empowering restaurants with real-time financial clarity.
            </p>
            <div className="flex gap-4">
              <Button>
                Get Started
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
            {/*
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Subscription Plans</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
            </div>

            <div className="mt-6">
              <a href="/login" className="text-blue-600 underline dark:text-blue-400">
                Login / Sign Up
              </a>
            </div>
            */}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
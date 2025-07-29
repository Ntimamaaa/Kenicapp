import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Users, Rocket } from "lucide-react";
import Link from "next/link";

export default function HowToRegisterPage() {
  return (
    <div className="bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            How to Register Your .KE Domain
          </h1>
          <p className="text-lg text-muted-foreground">
            Follow these three simple steps to secure your online identity.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 md:hidden" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2">Step One</h3>
            <p className="text-muted-foreground mb-4 flex-grow mt-4">
              Use the search box to find out if your chosen domain name is available to buy.
            </p>
            <Button asChild variant="outline">
              <Link href="/whois">Search Now</Link>
            </Button>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2">Step Two</h3>
            <p className="text-muted-foreground mb-4 flex-grow mt-4">
              Register your domain name with one of our accredited registrars.
            </p>
            <Button asChild variant="outline">
              <Link href="/registrars/licensed">View Registrars</Link>
            </Button>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2">Step Three</h3>
            <p className="text-muted-foreground mb-4 flex-grow mt-4">
              Buy your domain to get started and build your online presence.
            </p>
            <Button asChild variant="outline">
              <Link href="/registrars/licensed">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

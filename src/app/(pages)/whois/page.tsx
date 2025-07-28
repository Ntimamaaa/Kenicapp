
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DomainChecker } from "@/components/domain-checker";

export default function WhoisPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const domainQuery = searchParams.get("domain");
  const fromDeleted = searchParams.get("from") === "deleted-domains";


  const [isLoading, setIsLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (domainQuery) {
      setDomain(domainQuery);
      setIsLoading(true);
      // Simulate API call for checking domain availability
      const timer = setTimeout(() => {
        setIsAvailable(Math.random() > 0.5); // Randomly available or not
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
        setIsLoading(false);
    }
  }, [domainQuery]);

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
       {fromDeleted && (
        <Button variant="outline" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Deleted Domains
        </Button>
      )}
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
          WhoIs Domain Checker
        </h1>
        <p className="text-lg text-muted-foreground">
          Check the availability of any .KE domain instantly.
        </p>
      </div>

      <div className="my-8">
        <DomainChecker />
      </div>

      {domainQuery && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Results for: <span className="text-primary">{domain}</span>
            </CardTitle>
            <CardDescription>
              This is a simulated check. In a real application, this would
              query a live WhoIs database.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-16">
            {isLoading ? (
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-lg">Checking availability...</p>
              </div>
            ) : isAvailable ? (
              <div className="flex flex-col items-center gap-4 text-green-600">
                <CheckCircle className="h-16 w-16" />
                <p className="text-2xl font-bold">
                  Congratulations! {domain} is available!
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-red-600">
                <XCircle className="h-16 w-16" />
                <p className="text-2xl font-bold">Sorry, {domain} is taken.</p>
              </div>
            )}
          </CardContent>
          {!isLoading && (
            <CardFooter className="flex justify-center">
              {isAvailable && (
                <Button size="lg" asChild>
                  <Link href="/registrars/licensed">
                    Register with a Licensed Registrar
                  </Link>
                </Button>
              )}
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  );
}

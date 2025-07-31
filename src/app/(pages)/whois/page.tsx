
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
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

function WhoisPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const domainQuery = searchParams.get("domain");

  const [isLoading, setIsLoading] = useState(false);
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

  const fromDeleted = searchParams.get("from") === 'deleted-domains';

  return (
    <div className="flex-1">
        <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full z-[-2]">
                <video
                    src="/videos/globevideo.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]"></div>
             <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        WhoIs Domain Checker
                    </h1>
                    <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
                        Check the availability of any .KE domain instantly.
                    </p>
                    <div className="my-8 w-full max-w-2xl">
                        <DomainChecker />
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-background">
            <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
                 {domainQuery && (
                    <>
                        <Button variant="outline" onClick={() => router.back()} className="mb-8">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
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
                    </>
                )}
                 {!domainQuery && !fromDeleted &&(
                     <div className="text-center text-muted-foreground p-8">
                        <p>Enter a domain name above to check its availability.</p>
                    </div>
                 )}
                 {fromDeleted && !domainQuery && (
                     <div className="text-center text-muted-foreground p-8">
                        <p>No domain specified. Go back to the deleted domains list to select one.</p>
                         <Button variant="outline" onClick={() => router.back()} className="mt-4">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>
                 )}
            </div>
        </div>
    </div>
  )
}


export default function WhoisPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WhoisPageContent />
    </Suspense>
  );
}


"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, ArrowLeft, TrendingUp, Key, Ruler, Star, Check } from "lucide-react";
import Link from "next/link";
import { DomainChecker } from "@/components/domain-checker";
import { Progress } from "@/components/ui/progress";

function WhoisPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const domainQuery = searchParams.get("domain");

  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [domain, setDomain] = useState("");
  const [estimatedValue, setEstimatedValue] = useState(0);
  const [valueReasons, setValueReasons] = useState<string[]>([]);
  const [hasInput, setHasInput] = useState(false);


  const estimateDomainValue = (name: string) => {
    setHasInput(name.length > 0);
    if (name.length < 3) {
      setEstimatedValue(0);
      setValueReasons([]);
      return;
    }
    
    let score = 1500; // Base value in KES
    const reasons: string[] = [];

    // Length
    if (name.length <= 5) {
      score += 3000;
      reasons.push("Short length (5 chars or less)");
    } else if (name.length <= 8) {
      score += 1500;
      reasons.push("Concise length (6-8 chars)");
    }

    // Extension
     if (name.endsWith('.co.ke')) {
      score += 2000;
      reasons.push("Popular .co.ke extension");
    } else if (name.endsWith('.ke')) {
        score += 1000;
        reasons.push("Broad .ke extension");
    } else if (name.endsWith('.or.ke')) {
        score += 1500;
        reasons.push("Common .or.ke extension");
    } else if (name.endsWith('.go.ke') || name.endsWith('.ac.ke')) {
        score += 500;
        reasons.push("Official/Academic extension");
    }

    // Keywords
    const premiumKeywords = ["shop", "market", "tech", "pay", "cash", "bank", "credit", "art", "news", "kenya"];
    const containsPremium = premiumKeywords.some(kw => name.includes(kw));
    if (containsPremium) {
      score += 2500;
      reasons.push("Contains a premium keyword");
    }

    // Hyphens & Numbers
    if (name.includes('-')) score -= 1000;
    else reasons.push("No hyphens");
    
    if (/\d/.test(name)) score -= 500;
    else reasons.push("No numbers");

    setEstimatedValue(Math.max(1000, score));
    setValueReasons(reasons);
  };


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

  const fromAISuggester = searchParams.get("from") === 'ai-suggester';
  
  return (
    <div className="flex-1">
         <section className="w-full pt-24 pb-20 md:pb-24 lg:pb-32 bg-background">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  WhoIs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Domain Checker</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Check the availability of any .KE domain instantly.
                </p>
                <div className="w-full max-w-lg">
                    <DomainChecker onValueChange={estimateDomainValue} />
                </div>
                 <Button asChild variant="link">
                    <Link href="/registrars/licensed">
                        Or browse licensed registrars
                    </Link>
                </Button>
              </div>
              <div className="relative w-full h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-2xl">
                 <video
                    src="/videos/globe3.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-secondary">
            <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
                 {fromAISuggester ? (
                     <Button asChild variant="outline" className="mb-8">
                        <Link href="/#ai-suggester">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to AI Suggester
                        </Link>
                    </Button>
                 ) : (
                    <Button asChild variant="outline" className="mb-8">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back to Home
                        </Link>
                    </Button>
                 )}

                {!domainQuery && (
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2">
                                <TrendingUp className="text-primary"/>
                                Domain Value Estimate
                            </CardTitle>
                            <CardDescription>
                                This is an estimate based on common valuation factors.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {!hasInput ? (
                             <div className="text-center text-muted-foreground p-8">
                                <p>Enter a domain to estimate its value.</p>
                             </div>
                           ) : (
                            <>
                               <div className="text-center">
                                    <p className="text-muted-foreground">Approximate Value</p>
                                    <p className="font-bold text-3xl text-primary">
                                        KES {estimatedValue.toLocaleString()}
                                    </p>
                               </div>
                               <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground pt-4 border-t">
                                {valueReasons.map(reason => (
                                    <div key={reason} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>{reason}</span>
                                    </div>
                                ))}
                               </div>
                            </>
                           )}
                        </CardContent>
                    </Card>
                )}
                 {domainQuery && (
                    <>
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

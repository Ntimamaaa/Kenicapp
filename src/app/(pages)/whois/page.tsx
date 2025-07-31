
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
  const [showEstimator, setShowEstimator] = useState(false);

  const estimateDomainValue = (name: string) => {
    if (name.length < 3) {
      setShowEstimator(false);
      setEstimatedValue(0);
      setValueReasons([]);
      return;
    }
    
    setShowEstimator(true);
    let score = 0;
    const reasons: string[] = [];

    // Length
    if (name.length <= 5) {
      score += 30;
      reasons.push("Short length (5 chars or less)");
    } else if (name.length <= 8) {
      score += 15;
      reasons.push("Concise length (6-8 chars)");
    }

    // Extension
    if (name.endsWith('.ke')) {
        score += 10;
        reasons.push("Broad .ke extension");
    }
    if (name.endsWith('.co.ke')) {
      score += 20;
      reasons.push("Popular .co.ke extension");
    }
    if (name.endsWith('.go.ke') || name.endsWith('.ac.ke')) {
        score += 5;
        reasons.push("Official/Academic extension");
    }
     if (name.endsWith('.or.ke')) {
        score += 15;
        reasons.push("Common .or.ke extension");
    }

    // Keywords
    const premiumKeywords = ["shop", "market", "tech", "pay", "cash", "bank", "credit", "art", "news", "kenya"];
    const containsPremium = premiumKeywords.some(kw => name.includes(kw));
    if (containsPremium) {
      score += 25;
      reasons.push("Contains a premium keyword");
    }

    // Hyphens
    if (name.includes('-')) {
        score -= 10;
    } else {
        reasons.push("No hyphens");
    }
    
    // Numbers
    if (/\d/.test(name)) {
        score -= 5;
    } else {
        reasons.push("No numbers");
    }

    score = Math.max(0, Math.min(100, score));
    setEstimatedValue(score);
    setValueReasons(reasons);
  };


  useEffect(() => {
    if (domainQuery) {
      setDomain(domainQuery);
      setIsLoading(true);
      setShowEstimator(false);
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
  
  const valueColor = useMemo(() => {
    if (estimatedValue > 70) return "text-green-500";
    if (estimatedValue > 40) return "text-yellow-500";
    return "text-red-500";
  }, [estimatedValue]);

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
                        <DomainChecker onValueChange={estimateDomainValue} />
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-background">
            <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
                <Button asChild variant="outline" className="mb-8">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back to Home
                  </Link>
                </Button>
                {showEstimator && !domainQuery && (
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
                           <Progress value={estimatedValue} />
                           <p className="text-right font-bold text-lg">
                                Potential Value: <span className={valueColor}>{estimatedValue}%</span>
                           </p>
                           <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            {valueReasons.map(reason => (
                                <div key={reason} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>{reason}</span>
                                </div>
                            ))}
                           </div>
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
                 {!domainQuery && !showEstimator && (
                     <div className="text-center text-muted-foreground p-8">
                        <p>Enter a domain name above to check its availability.</p>
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

    
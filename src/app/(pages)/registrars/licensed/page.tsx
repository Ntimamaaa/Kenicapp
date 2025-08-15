
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail, Phone, Search, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import registrars from "@/lib/data/registrars.json";

const INITIAL_VIEW = 9;
const INCREMENT = 9;

export default function LicensedRegistrarsPage() {
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VIEW);

  const filteredRegistrars = registrars.filter((registrar) =>
    registrar.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const visibleRegistrars = filteredRegistrars.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + INCREMENT);
  }

  return (
    <div className="flex-1">
      <section className="w-full pt-16 pb-20 md:pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Licensed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.KE Registrars</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Choose from our network of accredited partners to register and manage your .KE domain.
              </p>
              <div className="w-full max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for a registrar..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="pl-10 text-base h-12 bg-card"
                  />
                </div>
                 <Button asChild variant="link" className="mt-2">
                    <Link href="/whois">
                        Or check domain availability
                    </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <video
                src="/videos/buildings.mp4"
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
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleRegistrars.map((registrar) => (
              <Card key={registrar.name} className="flex flex-col bg-card">
                <CardHeader className="items-center">
                  <div className="relative w-40 h-20 mb-4">
                      <Image src="https://placehold.co/200x100.png" alt={`${registrar.name} Logo`} layout="fill" objectFit="contain" data-ai-hint={registrar.hint}/>
                  </div>
                  <CardTitle className="text-center text-xl">{registrar.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-green-600 pt-2">
                    <CheckCircle className="h-4 w-4" /> Accredited Registrar
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm text-center text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{registrar.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${registrar.email}`} className="hover:underline">{registrar.email}</a>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={registrar.website} target="_blank">
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {visibleCount < filteredRegistrars.length ? (
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" onClick={handleViewMore}>
                <ArrowDown className="mr-2 h-5 w-5" />
                View More
              </Button>
            </div>
          ) : filteredRegistrars.length > 0 && visibleCount >= filteredRegistrars.length ? (
             <div className="mt-12 text-center text-muted-foreground">
                <p>You've reached the end of the list.</p>
            </div>
          ) : null}

          {filteredRegistrars.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
              No registrars found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

    
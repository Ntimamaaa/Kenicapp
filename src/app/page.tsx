
"use client";

import { DomainChecker } from '@/components/domain-checker';
import { DomainSuggester } from '@/components/domain-suggester';
import { PartnersMarquee } from '@/components/partners-marquee';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ChartNoAxesColumnIncreasing, Globe, Rocket, Search, Users, Sparkles, Star, LayoutDashboard, WandSparkles, FileText, Divide, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PageAnchorNav } from '@/components/layout/page-anchor-nav';

const features = [
    { title: 'AI Suggestions', description: 'Get creative, available domain names based on your keywords.', icon: Sparkles, href: '#ai-suggester' },
    { title: 'Real-Time WHOIS', description: 'Check domain availability instantly with our live search tool.', icon: Search, href: '/whois' },
    { title: 'Registrar Comparison', description: 'Find the perfect accredited registrar to fit your needs.', icon: Users, href: '/registrars/licensed' },
    { title: 'Domain Valuation', description: 'Estimate the value of any .KE domain with our smart tool.', icon: TrendingUp, href: '/whois' },
    { title: 'One-Click Branding', description: 'Generate a logo and branding kit for your new domain.', icon: WandSparkles, href: '#', disabled: true },
    { title: 'Management Dashboard', description: 'Manage all your domain settings in one place.', icon: LayoutDashboard, href: '#', disabled: true },
    { title: 'Deleted Domains', description: 'Browse and catch recently expired .KE domains.', icon: FileText, href: '/domains/deleted' },
    { title: 'Domain Statistics', description: 'Explore live trends and data from the .KE namespace.', icon: ChartNoAxesColumnIncreasing, href: '/domains/stats' },
];

export default function Home() {
  const extensions = [
    '.ke',
    '.co.ke',
    '.or.ke',
    '.ne.ke',
    '.go.ke',
    '.me.ke',
    '.mobi.ke',
    '.info.ke',
    '.sc.ke',
    '.ac.ke',
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animatedSectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      
      cardsRef.current.forEach(card => {
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
        }
      });
    };
    
    const statsSection = document.getElementById('stats-section-interactive');
    if (statsSection) {
      statsSection.addEventListener('pointermove', handleMouseMove);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
             entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animatedSectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (statsSection) {
        statsSection.removeEventListener('pointermove', handleMouseMove);
      }
       animatedSectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col">
      <PageAnchorNav />
      <main className="flex-1">
        <section id="hero" className="w-full pt-16 pb-20 md:pb-24 lg:pb-32 bg-background">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.KE Domain</span> Awaits
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Search, register, and manage your .KE domains with powerful tools for your online identity.
                </p>
                <div className="w-full max-w-lg">
                    <DomainChecker />
                </div>
                 <p className="text-xs text-muted-foreground">
                    Search for your domain.
                </p>
              </div>
              <div className="relative w-full h-[250px] lg:h-[300px] rounded-xl overflow-hidden shadow-2xl">
                 <video
                    src="/videos/globevideo.mp4"
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

        <div>
          <section id="how-to-register" ref={(el) => (animatedSectionsRef.current[0] = el)} className="w-full py-12 md:py-24 lg:py-32 bg-secondary animated-section">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
              <div className="space-y-4 text-center mb-16">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  How to Register Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.KE Domain</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Follow these three simple steps to secure your online identity.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 md:hidden" />
                <div className="relative grid gap-12 md:grid-cols-3">
                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8 pt-0">
                        <div className="flex flex-col items-center">
                          <Badge className="bg-primary hover:bg-primary text-primary-foreground -translate-y-4 text-sm">Step 1</Badge>
                          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            <Search className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="font-headline text-xl font-bold mb-2">Check Name</h3>
                          <p className="text-muted-foreground mb-6 text-sm flex-grow min-h-[40px]">
                            Use the search box to find out if your chosen domain name is available.
                          </p>
                          <Button variant="outline" asChild><Link href="/whois">Search Now</Link></Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8 pt-0">
                        <div className="flex flex-col items-center">
                          <Badge className="bg-primary hover:bg-primary text-primary-foreground -translate-y-4 text-sm">Step 2</Badge>
                          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            <Users className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="font-headline text-xl font-bold mb-2">Choose Registrar</h3>
                          <p className="text-muted-foreground mb-6 text-sm flex-grow min-h-[40px]">
                            Register your domain with one of our accredited registrars.
                          </p>
                          <Button variant="outline" asChild><Link href="/registrars/licensed">View Registrars</Link></Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <CardContent className="p-8 pt-0">
                        <div className="flex flex-col items-center">
                          <Badge className="bg-primary hover:bg-primary text-primary-foreground -translate-y-4 text-sm">Step 3</Badge>
                          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            <Rocket className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="font-headline text-xl font-bold mb-2">Buy &amp; Go Live</h3>
                          <p className="text-muted-foreground mb-6 text-sm flex-grow min-h-[40px]">
                             Launch your brand, secure your domain, and go live today.
                          </p>
                          <Button variant="outline" asChild><Link href="/registrars/licensed">Get Started</Link></Button>
                        </div>
                      </CardContent>
                    </Card>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section id="extensions" ref={(el) => (animatedSectionsRef.current[1] = el)} className="w-full py-12 md:py-24 lg:py-32 animated-section">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Domain Extensions</span>
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a wide range of .KE extensions to suit every need.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {extensions.map((ext) => (
                    <Badge
                      key={ext}
                      variant="outline"
                      className="text-lg font-medium py-2 px-4 border-2 border-primary/50 text-primary"
                    >
                      {ext}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section id="stats-section-interactive" ref={(el) => (animatedSectionsRef.current[2] = el)} className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground relative overflow-hidden animated-section">
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="flex flex-col items-center justify-center space-y-12 text-center">
                      <div className="space-y-4">
                          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl flex items-center justify-center gap-3 text-foreground">
                              Powering Kenya's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Identity</span>
                          </h2>
                          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          A vibrant and growing digital landscape for Kenya.
                          </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                          <Card className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                               <div className="absolute -bottom-16 -right-16">
                                  <Globe className="w-48 h-48 text-primary/5 opacity-50 group-hover:text-primary/10 transition-colors duration-500 rotate-12"/>
                              </div>
                              <CardHeader>
                                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 inline-block mb-4">
                                       <Globe className="h-8 w-8 text-white" />
                                  </div>
                                  <CardTitle className="text-4xl font-bold text-foreground">110,000+</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">Registered Domains</p>
                              </CardContent>
                              <CardFooter>
                                  <Button variant="link" asChild><Link href="/domains/value-prop">Learn More</Link></Button>
                              </CardFooter>
                          </Card>

                           <Card className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                               <div className="absolute -bottom-16 -right-16">
                                  <FileText className="w-48 h-48 text-primary/5 opacity-50 group-hover:text-primary/10 transition-colors duration-500 rotate-12"/>
                              </div>
                              <CardHeader>
                                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 inline-block mb-4">
                                       <FileText className="h-8 w-8 text-white" />
                                  </div>
                                  <CardTitle className="text-4xl font-bold text-foreground">10+</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">Top Level Domains</p>
                              </CardContent>
                              <CardFooter>
                                  <Button variant="link" asChild><Link href="#extensions">View TLDs</Link></Button>
                              </CardFooter>
                          </Card>

                          <Card className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                              <div className="absolute -bottom-16 -right-16">
                                  <Users className="w-48 h-48 text-primary/5 opacity-50 group-hover:text-primary/10 transition-colors duration-500 rotate-12"/>
                              </div>
                              <CardHeader>
                                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 inline-block mb-4">
                                       <Users className="h-8 w-8 text-white" />
                                  </div>
                                  <CardTitle className="text-4xl font-bold text-foreground">500+</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">Accredited Registrars</p>
                              </CardContent>
                              <CardFooter>
                                  <Button variant="link" asChild><Link href="/registrars/licensed">Find a Registrar</Link></Button>
                              </CardFooter>
                          </Card>
                      </div>
                  
                   <Link href="/domains/stats?from=home">
                    <Button size="lg" variant="outline" className="flex items-center gap-2">
                        <ChartNoAxesColumnIncreasing className="h-5 w-5"/>
                        View Detailed Statistics
                    </Button>
                  </Link>
                  </div>
              </div>
          </section>
        </div>

        <div>
          <section
            id="features"
            ref={(el) => (animatedSectionsRef.current[3] = el)}
            className="w-full py-12 md:py-24 lg:py-32 animated-section"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">
                    Key Features
                  </div>
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                    Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.KE Domains</span>
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From real-time checks to AI-powered suggestions, we provide a
                    comprehensive suite of tools for your domain needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-2 border-t border-l mt-12 md:grid-cols-4">
                  {features.map((feature) => {
                      const Comp = feature.disabled ? 'div' : Link;
                      return (
                          <Comp
                              key={feature.title}
                              href={feature.href}
                              className={cn(
                                  "group relative flex h-64 flex-col justify-between border-b border-r p-6 overflow-hidden transition-colors",
                                  feature.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                              )}
                          >
                              <div className="absolute inset-0 bg-gradient-to-br from-[#7E42FC] to-[#8541FC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"/>
                              <div className="relative z-10">
                                  <feature.icon className="h-8 w-8 text-primary mb-4 transition-colors duration-300 group-hover:text-white" />
                                  <h3 className="font-headline text-lg font-semibold transition-colors duration-300 group-hover:text-white">{feature.title}</h3>
                                  <p className="text-sm text-muted-foreground mt-2 hidden transition-colors duration-300 group-hover:block group-hover:text-white/80">
                                      {feature.description}
                                  </p>
                              </div>
                              <div className="relative z-10 flex justify-end">
                                  <ArrowRight className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                              </div>
                          </Comp>
                      );
                  })}
              </div>
            </div>
          </section>
        </div>

        <div>
           <section id="ai-suggester" ref={(el) => (animatedSectionsRef.current[4] = el)} className="w-full py-12 md:py-24 lg:py-32 animated-section bg-secondary">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 px-4 md:px-6 text-center">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Unleash Creativity with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Domain Suggester</span>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
                  Don't just search. Discover. Enter a few keywords and let our AI
                  find the perfect, available domain for you.
                </p>
                <DomainSuggester />
              </div>
            </div>
          </section>
        </div>

        <div>
          <section id="partners" ref={(el) => (animatedSectionsRef.current[5] = el)} className="w-full py-12 md:py-24 lg:py-32 animated-section">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <div className="space-y-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Partners &amp; Collaborators</span></h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We are proud to work with a diverse range of organizations to build a better digital Kenya.
                        </p>
                    </div>
                    <PartnersMarquee />
                </div>
              </div>
          </section>
        </div>

        <div>
          <section id="cta" ref={(el) => (animatedSectionsRef.current[6] = el)} className="w-full py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground animated-section">
              <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="mx-auto max-w-3xl space-y-6">
                  <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Get Started?</span>
                  </h2>
                  <p className="text-lg text-primary-foreground/80 md:text-xl">
                    Your new .KE domain is just a few clicks away. Find it, register
                    it, and start building your online presence today.
                  </p>
                  <Link href="/registrars/licensed"
                      className="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary-foreground/20 rounded-md group mt-4 text-base"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-accent rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-accent rounded group-hover:-ml-4 group-hover:-mb-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-accent rounded-md group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          View Licensed Registrars
                      </span>
                  </Link>
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}


"use client";

import { DomainChecker } from '@/components/domain-checker';
import { DomainSuggester } from '@/components/domain-suggester';
import { PartnersMarquee } from '@/components/partners-marquee';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ChartNoAxesColumnIncreasing, Globe, Rocket, Search, Users, Sparkles, Star, LayoutDashboard, WandSparkles, FileText } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

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
    
    return () => {
      if (statsSection) {
        statsSection.removeEventListener('pointermove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-[-2]">
            <video
              src="/globevideo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 animate-fade-in-up">
              <div className="flex flex-col items-center justify-center space-y-6">
                   <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    Your Perfect .KE Domain Awaits
                  </h1>
                  <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
                    Discover, register, and manage your .KE domains with ease. Our
                    powerful tools and AI assistant make finding your online
                    identity simple and fast.
                  </p>
                  <div className="w-full max-w-2xl bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <DomainChecker />
                  </div>
                  <p className="text-xs text-white/70">
                      Get started by searching for your dream domain name.
                  </p>
              </div>
          </div>
        </section>

        <section id="how-to-register" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="space-y-4 text-center mb-12 animate-fade-in-up">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                How to Register Your .KE Domain
              </h2>
              <p className="text-lg text-muted-foreground">
                Follow these three simple steps to secure your online identity.
              </p>
            </div>

            <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 md:hidden" />
              <div className="relative flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Step One</h3>
                <p className="text-muted-foreground mb-4 flex-grow mt-4">
                  Use the search box to find out if your chosen domain name is available to buy.
                </p>
                <Link href="/whois">
                  <Button variant="outline">Search Now</Button>
                </Link>
              </div>

              <div className="relative flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Step Two</h3>
                <p className="text-muted-foreground mb-4 flex-grow mt-4">
                  Register your domain name with one of our accredited registrars.
                </p>
                 <Link href="/registrars/licensed">
                    <Button variant="outline">View Registrars</Button>
                </Link>
              </div>

              <div className="relative flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-lg">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Step Three</h3>
                <p className="text-muted-foreground mb-4 flex-grow mt-4">
                  Buy your domain to get started and build your online presence.
                </p>
                <Link href="/registrars/licensed">
                  <Button variant="outline">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="extensions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Explore Our Domain Extensions
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

        <section id="stats-section-interactive" className="w-full py-12 md:py-24 lg:py-32 bg-[#111] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-12 text-center animate-fade-in-up">
                <div className="space-y-2">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    .KE Domain Statistics
                    </h2>
                    <p className="max-w-[900px] text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A vibrant and growing digital landscape for Kenya.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl stats-cards-container">
                    <div ref={el => cardsRef.current[0] = el} className="stat-card relative rounded-lg border border-primary/20 bg-black/20 p-6 shadow-lg backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                            <CardTitle className="text-base font-medium text-neutral-200">.KE Domains</CardTitle>
                            <Globe className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0 pt-2">
                            <div className="text-4xl font-bold">110,000+</div>
                            <p className="text-xs text-neutral-400">registered globally</p>
                        </CardContent>
                    </div>
                     <div ref={el => cardsRef.current[1] = el} className="stat-card relative rounded-lg border border-primary/20 bg-black/20 p-6 shadow-lg backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                            <CardTitle className="text-base font-medium text-neutral-200">Top Level Domains</CardTitle>
                            <FileText className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0 pt-2">
                            <div className="text-4xl font-bold">10+</div>
                            <p className="text-xs text-neutral-400">extensions available</p>
                        </CardContent>
                    </div>
                     <div ref={el => cardsRef.current[2] = el} className="stat-card relative rounded-lg border border-primary/20 bg-black/20 p-6 shadow-lg backdrop-blur-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 p-0">
                            <CardTitle className="text-base font-medium text-neutral-200">Registrars</CardTitle>
                            <Users className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0 pt-2">
                            <div className="text-4xl font-bold">500+</div>
                            <p className="text-xs text-neutral-400">accredited partners</p>
                        </CardContent>
                    </div>
                </div>
                <Link href="/domains/stats?from=home">
                    <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent text-white border-white hover:bg-white hover:text-black">
                        <ChartNoAxesColumnIncreasing className="h-5 w-5"/>
                        View Detailed Statistics
                    </Button>
                </Link>
                </div>
            </div>
        </section>


        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need for .KE Domains
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From real-time checks to AI-powered suggestions, we provide a
                  comprehensive suite of tools for your domain needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
               <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '200ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Sparkles className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> AI Suggestions </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow"> <p> Get creative, available domain names based on your keywords. Use smart filters for short, catchy, or brandable options. </p> </CardContent>
                <CardFooter>
                  <Link href="#ai-suggester" className="w-full">
                    <Button className="w-full" variant="outline">Try AI Suggester</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '300ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Search className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> Real-Time WHOIS </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow"> <p> Instantly check the availability and get detailed public info for any .KE domain, including owner and expiry date. </p> </CardContent>
                <CardFooter>
                  <Link href="/whois" className="w-full">
                    <Button className="w-full" variant="outline">Check a Domain</Button>
                  </Link>
                </CardFooter>
              </Card>
               <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '400ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> Registrar Comparison </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow"> <p> Easily compare pricing and services from over 500 accredited .KE domain registrars to find the best fit for you. </p> </CardContent>
                 <CardFooter>
                  <Link href="/registrars/licensed" className="w-full">
                    <Button className="w-full" variant="outline">Find a Registrar</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '500ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> Domain Valuation Tool </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-muted-foreground"> Estimate the market value of any domain based on length, keywords, TLD, and current trends. <Badge variant="secondary" className="ml-2">Coming Soon</Badge> </div>
                </CardContent>
                 <CardFooter> <Button className="w-full" variant="outline" disabled>Learn More</Button> </CardFooter>
              </Card>
              <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '600ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <WandSparkles className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> One-Click Branding Kit </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   <div className="text-muted-foreground"> Instantly generate a logo, brand colors, and social media handle ideas right after you register your new domain. <Badge variant="secondary" className="ml-2">Coming Soon</Badge> </div>
                </CardContent>
                <CardFooter> <Button className="w-full" variant="outline" disabled>Learn More</Button> </CardFooter>
              </Card>
               <Card className="animate-fade-in-up flex flex-col group" style={{ animationDelay: '700ms' }}>
                <CardHeader className="flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <LayoutDashboard className="h-6 w-6 text-chart-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="font-headline text-xl"> Management Dashboard </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   <div className="text-muted-foreground"> Track, renew, transfer, and manage all your domains from one simple and intuitive dashboard. <Badge variant="secondary" className="ml-2">Coming Soon</Badge> </div>
                </CardContent>
                <CardFooter> <Button className="w-full" variant="outline" disabled>Learn More</Button> </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="ai-suggester" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3 animate-fade-in-up">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unleash Creativity with our AI Domain Suggester
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just search. Discover. Enter a few keywords and let our AI
                find the perfect, available domain for you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <DomainSuggester />
            </div>
          </div>
        </section>

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-8 text-center animate-fade-in-up">
                  <div className="space-y-2">
                      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Partners &amp; Collaborators</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          We are proud to work with a diverse range of organizations to build a better digital Kenya.
                      </p>
                  </div>
                  <PartnersMarquee />
              </div>
            </div>
        </section>

        <section className="w-full py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="mx-auto max-w-3xl space-y-6 animate-fade-in-up">
                <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-primary-foreground/80 md:text-xl">
                  Your new .KE domain is just a few clicks away. Find it, register
                  it, and start building your online presence today.
                </p>
                <Link href="/registrars/licensed">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 text-base font-semibold hover:bg-accent hover:text-accent-foreground"
                  >
                    View Licensed Registrars
                  </Button>
                </Link>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}

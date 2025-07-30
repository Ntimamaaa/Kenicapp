
import { DomainChecker } from '@/components/domain-checker';
import { DomainSuggester } from '@/components/domain-suggester';
import { PartnersMarquee } from '@/components/partners-marquee';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Search, Rocket, FileText, Users, Globe, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-2]">
          <video
            src="/videos/herovideo.mp4"
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
          <div className="space-y-4 text-center mb-12">
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

      <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-12 text-center animate-fade-in-up">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                .KE Domain Statistics
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A vibrant and growing digital landscape for Kenya.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">.KE Domains</CardTitle>
                    <Globe className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">110,000+</div>
                    <p className="text-xs text-muted-foreground">registered globally</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Top Level Domains</CardTitle>
                    <FileText className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">10+</div>
                    <p className="text-xs text-muted-foreground">extensions available</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Registrars</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold">500+</div>
                    <p className="text-xs text-muted-foreground">accredited partners</p>
                </CardContent>
              </Card>
            </div>
             <Button asChild size="lg" variant="outline" className="flex items-center gap-2">
                <Link href="/domains/stats?from=home">
                    <BarChart className="h-5 w-5"/>
                    View Detailed Statistics
                </Link>
            </Button>
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
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  Domain Checker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Instantly check the availability of any .KE domain with our
                  real-time search.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Stuck for ideas? Use our AI tool to generate creative and
                  available domain names.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">
                  WhoIs Lookup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Access public registration data for any .KE domain with our
                  comprehensive WhoIs service.
                </p>
              </CardContent>
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
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base font-semibold hover:bg-accent hover:text-accent-foreground"
              >
                <Link href="/registrars/licensed">View Licensed Registrars</Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  );
}

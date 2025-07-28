
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, CheckCircle, Award, Users, BookOpen, TrendingUp, History, Building, Heart, Zap, ShieldCheck } from 'lucide-react';
import Link from "next/link";

export default function AboutPage() {
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  return (
    <div className="bg-secondary flex-1">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">About KeNIC</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your partner in navigating the .KE domain landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                    <History className="text-primary"/>
                    Our History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  KeNIC is the manager and administrator of Kenya's country code top-level domain—.ke. As the ccTLD registry operator, KeNIC plays a pivotal role in Kenya's internet ecosystem and digital economy.
                </p>
                <p>
                   KeNIC oversees a namespace that has seen 20% domain growth since 2017, reflecting Kenya's gradual digital development. With high internet penetration, KeNIC operates in one of Africa's most developed digital markets. The enabling presence of internet exchange points, government backing for e-services, and innovation hubs provide a supportive environment.
                </p>
                {isHistoryExpanded && (
                    <div className="space-y-4">
                        <p>As the sole .ke registry operator, KeNIC possesses specialized expertise in reliable management of domain name systems. The WHOIS database of registration details is also a unique asset.</p>
                        <p>KeNIC collaborates across the internet industry to promote .ke domain visibility and adoption. Key partnerships include government agencies, financial institutions, tech hubs and industry forums.</p>
                        <p>Factors like expanding internet access, digitization policies, and a supportive ecosystem position KeNIC to promote .ke domains as a leading African ccTLD registry.</p>
                        <p>Kenya ranks 3rd in Africa in domain uptake analysis based on registered domains and local hosting metrics. With 85% internet penetration, Kenya is a continental leader in digital advancement.</p>
                        <p>IANA delegated .ke administration to Dr. Shem Ochuocho in 1993, succeeded by KeNIC's 2000 formation as a non-profit entity under Kenyan law to manage Kenya's internet presence.</p>
                        <p>As manager of Kenya's secure .ke namespace, KeNIC aims to operate an efficient registry aligned with global standards. Strategic priorities include opening .ke globally, improving domain registration experience, partnerships and talent development for sustainable growth.</p>
                        <p>KeNIC offers a range of products and services, including comprehensive registry services, registrar accreditation, DNSSEC implementation, and the introduction of the Second-Level Domain Name Space, providing flexibility and customization for businesses and individuals within the .KE domain space. Continually investing in technical infrastructure enhancements, KeNIC ensures the reliability and security of the .KE domain registry, upholding its commitment to providing a stable and trustworthy platform for .KE domain name registration and management.</p>
                        <p>In conclusion, KeNIC's role as the manager and administrator of .KE domains in Kenya is pivotal in shaping the nation's internet ecosystem and contributing to its digital economy growth. Through strategic partnerships, technical capabilities, and a diverse range of products and services, KeNIC remains at the forefront of promoting a secure, reliable, and inclusive online presence for businesses, organizations, and individuals across Kenya's digital landscape.</p>
                    </div>
                )}
                <Button variant="link" className="p-0 h-auto" onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}>
                    {isHistoryExpanded ? "Read Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                       <Building className="text-primary"/>
                        Who We Are Today
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        The core mandate of KeNIC is to manage and administer a secure and reliable .KE domain. Guided by this mandate KeNIC deploys the 3R Model of domain management. We are responsible of licensing Registrars and facilitating them to register, renew and transfer domain name to the end users. This is to create a cost-effective environment for the growth of .KE
                    </p>
                    <ul className="space-y-2 pl-4 list-disc">
                        <li><span className="font-semibold">The Registry:</span> KeNIC as the registry plays the role of managing all dot KE domains.</li>
                        <li><span className="font-semibold">The Registrar:</span> This is an accredited company or organization that is allowed to sell .ke domain names to the end user. This responsibility of selling the .KE domains is delegated to the registrars by KeNIC, the registry.</li>
                        <li><span className="font-semibold">The Registrant:</span> This refers to all .KE domain end users including institutions, businesses and individuals.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                    <TrendingUp className="text-primary"/>
                    KeNIC Vision For The Future
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  KeNIC was established with the vision of bringing the Kenyan Internet technology up to global standards and to promote Internet and its services in the country on a large scale. As a registry, our efforts are geared towards ensuring our technological infrastructure supports the efficient administration of the .KE domain and development of the internet ecosystem in Kenya by providing the name service for all .KE
                </p>
                 <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <aside className="md:col-span-2 space-y-6 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="text-primary"/>
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                A Trusted Domain Name Registry that Secures Your Online Identity.
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="text-primary"/>
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                To Provide Accessible and Reliable Domain Services that Protect Everyone’s Online Identity.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="text-primary"/>
                  Our Core Values
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-3"><Heart className="text-primary h-5 w-5"/> Excellence First</p>
                  <p className="flex items-center gap-3"><Zap className="text-primary h-5 w-5"/> Innovation Driven</p>
                  <p className="flex items-center gap-3"><ShieldCheck className="text-primary h-5 w-5"/> Integrity Unshakeable</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

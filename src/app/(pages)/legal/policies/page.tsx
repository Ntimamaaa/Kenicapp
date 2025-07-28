
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Phone, Shield } from "lucide-react";
import Link from "next/link";

const policies = [
  {
    value: "item-1",
    title: "Registrar Accreditation Agreement",
    content: "This document outlines the terms and conditions for becoming a licensed .KE registrar, including rights, responsibilities, and operational requirements. It ensures that all registrars adhere to KeNIC's standards for providing domain registration services to the public.",
  },
  {
    value: "item-2",
    title: "Alternate Dispute Resolution Policy",
    content: "This policy details the procedures for resolving disputes between domain name holders and third parties over the registration and use of .KE domain names. It provides a framework for fair and efficient resolution outside of court.",
  },
  {
    value: "item-3",
    title: "Second Level Domains Policy",
    content: "This policy governs the registration and use of second-level domains (e.g., yourname.ke). It defines the rules, eligibility criteria, and lifecycle of these domains within the .KE namespace.",
  },
  {
    value: "item-4",
    title: "Third Level Domains Policy",
    content: "This policy covers the rules for third-level domains under specific second-level categories (e.g., yourname.co.ke, yourname.or.ke). It specifies the purpose and restrictions for each category.",
  },
  {
    value: "item-5",
    title: "WHOIS Policy",
    content: "This policy describes the public directory service (WhoIs) for .KE domains. It outlines what information is collected during registration, what is made publicly available, and how the data is managed to balance transparency and privacy.",
  },
    {
    value: "item-6",
    title: "Data and Information Sharing Policy",
    content: "This policy outlines how KeNIC collects, uses, stores, and shares data related to domain registrations. It is committed to protecting the privacy of registrants while complying with legal requirements and ensuring the stability of the .KE namespace.",
    },
];

export default function PoliciesPage() {
  return (
    <div className="bg-secondary flex-1">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            KeNIC Policies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our official policies and regulations governing the .KE namespace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                    <FileText className="text-primary"/>
                    Policy Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {policies.map((policy) => (
                    <AccordionItem key={policy.value} value={policy.value}>
                      <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                        {policy.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {policy.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
          <aside className="md:col-span-1 space-y-6 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span className="text-muted-foreground">+254 715 275 483</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary"/>
                     <a href="mailto:info@kenic.or.ke" className="text-muted-foreground hover:underline">info@kenic.or.ke</a>
                 </div>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Shield/>
                        Domain Disputes
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-primary-foreground/80 mb-4">
                        Information on resolving domain name disputes.
                    </p>
                    <Button asChild variant="secondary" className="w-full">
                        <Link href="/legal/disputes">Learn More</Link>
                    </Button>
                </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

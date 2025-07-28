
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

const disputeDocuments = [
  {
    value: "item-1",
    title: "Dispute Lodging Form 001",
    content: "This is the official form to initiate a domain name dispute. It must be filled out completely and submitted to KeNIC to begin the ADR process.",
  },
  {
    value: "item-2",
    title: "Dispute Response Form 002",
    content: "This form is used by the domain name holder (the respondent) to reply to a dispute complaint that has been filed against them.",
  },
  {
    value: "item-3",
    title: "Domain Dispute Process",
    content: "This document provides a comprehensive overview of the entire Alternative Dispute Resolution (ADR) process, from filing a complaint to the final decision.",
  },
  {
    value: "item-4",
    title: ".KE Domain Name Cycle",
    content: "Understand the lifecycle of a .KE domain name, including registration, renewal, expiration, and deletion phases, which can be relevant to dispute cases.",
  },
  {
    value: "item-5",
    title: "KeNIC Certified Arbitrators",
    content: "A list of independent and certified arbitrators who are qualified to hear and decide on .KE domain name disputes.",
  },
];

export default function DomainDisputesPage() {
  return (
    <div className="bg-secondary flex-1">
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Domain Disputes
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find resources and forms for resolving .KE domain name disputes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-2xl">
                    <Shield className="text-primary"/>
                    Dispute Resolution Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {disputeDocuments.map((doc) => (
                    <AccordionItem key={doc.value} value={doc.value}>
                      <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                        {doc.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {doc.content}
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
                        <FileText/>
                        KeNIC Policies
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-primary-foreground/80 mb-4">
                        View our official policies and regulations.
                    </p>
                    <Button asChild variant="secondary" className="w-full">
                        <Link href="/legal/policies">View Policies</Link>
                    </Button>
                </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Globe } from "lucide-react";
import Link from "next/link";


const usefulLinks = [
  { name: "ICANN", href: "#" },
  { name: "AFTLD", href: "#" },
  { name: "CA (Communication Authority of Kenya)", href: "#" },
  { name: "ICTA", href: "#" },
  { name: "KICTANET", href: "#" },
  { name: "KENET", href: "#" },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">Resources</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of materials, downloads, and important links.
          </p>
      </div>

      <Tabs defaultValue="dns" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="dns" className="py-2">DNS &amp; DNSSEC Material</TabsTrigger>
          <TabsTrigger value="downloads" className="py-2">Downloads</TabsTrigger>
          <TabsTrigger value="links" className="py-2">Useful Links</TabsTrigger>
          <TabsTrigger value="payment" className="py-2">Payment Details</TabsTrigger>
        </TabsList>
        <TabsContent value="dns" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>DNS &amp; DNSSEC Material</CardTitle>
                <CardDescription>Learn about the Domain Name System and DNS Security Extensions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <p className="text-muted-foreground mb-4">Kenya Network Information Centre (KeNIC) conducted a technical registrar training on 10th and 11th April 2019. The training covered the following exercises:</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Introduction to Domain Name System (DNS)</li>
                        <li>DNS Configuration</li>
                        <li>Introduction to Domain Name System Security Extensions (DNSSEC)</li>
                        <li>DNSSEC Configuration using BIND</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h4 className="font-semibold">Downloads</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Button asChild variant="outline" className="justify-start">
                            <Link href="#">
                                <Download className="mr-2 h-4 w-4" />
                                Introduction to DNS
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="justify-start">
                             <Link href="#">
                                <Download className="mr-2 h-4 w-4" />
                                DNS Fundamentals
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="justify-start">
                            <Link href="#">
                                <Download className="mr-2 h-4 w-4" />
                                DNS Configuration Labs
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="justify-start">
                            <Link href="#">
                                <Download className="mr-2 h-4 w-4" />
                                Introduction to DNSSEC
                            </Link>
                        </Button>
                         <Button asChild variant="outline" className="justify-start">
                             <Link href="#">
                                <Download className="mr-2 h-4 w-4" />
                                DNSSEC configuration using bind
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="downloads" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>Downloads</CardTitle>
                <CardDescription>Find downloadable documents, forms, and resources.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-4">
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2024
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2023
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2022
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2021
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2020
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start">
                        <Link href="#">
                            <Download className="mr-2 h-4 w-4" />
                            Financial Statement 2019
                        </Link>
                    </Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="links" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Useful Links</CardTitle>
                <CardDescription>A collection of helpful links to external resources and partner organizations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {usefulLinks.map((link) => (
                        <Button asChild variant="outline" className="justify-between h-auto py-3 items-center" key={link.name}>
                            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div className="flex items-center">
                                     <Globe className="mr-3 h-5 w-5 text-primary"/>
                                    <span className="font-semibold text-base">{link.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">Go To Website</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Information on how to make payments to KeNIC.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Our payment details will be provided here shortly.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

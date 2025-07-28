
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Globe, CreditCard, Banknote, Smartphone, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


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
                        <Button asChild variant="outline" className="justify-start h-auto p-0" key={link.name}>
                            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4">
                                <div className="flex items-center">
                                     <Globe className="mr-3 h-5 w-5 text-primary"/>
                                    <span className="font-semibold text-base">{link.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>Go To Website</span>
                                    <ExternalLink className="h-4 w-4"/>
                                </div>
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
            <CardContent className="space-y-10">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                        <div className="relative w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                            <Image src="https://placehold.co/300x160.png" alt="Credit Card" layout="fill" objectFit="contain" data-ai-hint="credit card payment" className="rounded-lg"/>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><CreditCard className="text-primary"/>Credit Card Payments</h3>
                        <p className="text-muted-foreground mb-4">If you wish to use a credit card to make payments, log into the Registrar Panel and follow the links. Credit card payments reflect in your account immediately. We urge you to use this service for any urgent payments.</p>
                        <p className="text-sm text-muted-foreground italic"><span className="font-semibold">Refund Policy:</span> Please note that payments can ONLY be re‑allocated or refunded for a period of up to 30 days from the date of payment</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                     <div className="md:col-span-1">
                        <div className="relative w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                            <Image src="https://placehold.co/300x160.png" alt="Bank Transfer" layout="fill" objectFit="contain" data-ai-hint="bank transfer" className="rounded-lg"/>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                         <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><Banknote className="text-primary"/>EFT or Direct Deposit</h3>
                        <p className="text-muted-foreground mb-4">If you wish to make payment via EFT/RTGS/Cash Deposit or Cheque please use the banking details provided below.</p>
                        <div className="bg-secondary p-4 rounded-lg text-sm space-y-2">
                            <p><span className="font-semibold">Bank:</span> NCBA</p>
                            <p><span className="font-semibold">Account Name:</span> Kenya Network Information Centre</p>
                            <p><span className="font-semibold">Account Number:</span> 6634930017</p>
                            <p><span className="font-semibold">Bank Branch:</span> Upperhill Branch</p>
                            <p><span className="font-semibold">Swift Code:</span> CBAFKENX</p>
                            <p><span className="font-semibold">Reference:</span> (Your Registrar Name/Code)</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Use the Registrar's name in the reference section in order for us to allocate the payment to your account. Please send proof of payment to billing@kenic.or.ke</p>
                        <p className="text-sm font-semibold text-destructive mt-2">NOTE: We do not accept Post-dated Cheques</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                     <div className="md:col-span-1">
                        <div className="relative w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                           <Image src="https://placehold.co/300x160.png" alt="iPay" layout="fill" objectFit="contain" data-ai-hint="mobile payment" className="rounded-lg"/>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><Smartphone className="text-primary"/>iPay</h3>
                        <p className="text-muted-foreground mb-4">If you wish to make payment via iPay, follow the process below. For both Mpesa and Airtel money Customers:</p>
                        <ul className="list-decimal pl-6 text-muted-foreground space-y-1 mb-4">
                            <li>Enter Business No. <strong>510800</strong></li>
                            <li>Enter Account No. <strong>KENIC</strong></li>
                            <li>Enter the amount you wish to top up.</li>
                            <li>Log into your registrar panel and confirm the payment using the Mpesa/Airtel money confirmation code.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">iPay payments reflect in your account immediately. We urge you to use this service for any urgent payments.</p>
                    </div>
                </div>

                 <div className="grid md:grid-cols-3 gap-8 items-start">
                     <div className="md:col-span-1">
                        <div className="relative w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                            <Image src="https://placehold.co/300x160.png" alt="M-PESA" layout="fill" objectFit="contain" data-ai-hint="mobile money" className="rounded-lg"/>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2"><Smartphone className="text-primary"/>Mobile Banking (M-PESA)</h3>
                        <p className="text-muted-foreground mb-4">If you wish to make payment via M-PESA (for Safaricom users), follow the process below.</p>
                        <ul className="list-decimal pl-6 text-muted-foreground space-y-1 mb-4">
                           <li>On your Mpesa menu, Click on Lipa Na Mpesa.</li>
                           <li>Select Pay Bill</li>
                           <li>Enter business No. <strong>502100</strong></li>
                           <li>Enter Account No. (enter your registrar code. E.g. KNC)</li>
                           <li>Enter the amount you wish to top up.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">Mpesa payments reflect in your account immediately. We urge you to use this service for any urgent payments</p>
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

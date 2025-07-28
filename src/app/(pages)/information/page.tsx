
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export default function InformationPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">Information</h1>
          <p className="text-lg text-muted-foreground">
            Find important information and documents about KeNIC.
          </p>
      </div>

      <Tabs defaultValue="charter" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
          <TabsTrigger value="charter" className="py-2">KeNIC Service Charter</TabsTrigger>
          <TabsTrigger value="tenders" className="py-2">KeNIC Tenders</TabsTrigger>
          <TabsTrigger value="certificates" className="py-2">Certificates</TabsTrigger>
        </TabsList>
        <TabsContent value="charter" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>KeNIC Service Charter</CardTitle>
                <CardDescription>Our commitment to service excellence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <div className="relative w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                            <Image src="https://placehold.co/300x200.png" alt="Service Charter" layout="fill" objectFit="contain" data-ai-hint="document charter" className="rounded-lg p-4"/>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <p className="text-muted-foreground">KeNIC always strives to offer the best services to its customers / clients and to foster closer relationships with them from wherever they are. The service charter is a manifestation of our commitment to rendering the best services as well as providing ways of communicating with our clients. Its a promise to provide high quality and consistent .KE service.</p>
                        <Button asChild>
                            <Link href="#">
                                KeNIC Service Charter <ExternalLink className="ml-2 h-4 w-4"/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tenders" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>KeNIC Tenders</CardTitle>
                <CardDescription>Procurement opportunities at KeNIC.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>There are no open tenders at the moment. Please check back later.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certificates" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Certificates</CardTitle>
                <CardDescription>Our official certifications and accreditations.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Information about our certificates will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

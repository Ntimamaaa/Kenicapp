
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>The KeNIC Service Charter will be available here soon.</p>
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

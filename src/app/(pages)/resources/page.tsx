
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Informational material about DNS and DNSSEC will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="downloads" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>Downloads</CardTitle>
                <CardDescription>Find downloadable documents, forms, and resources.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>No downloads are available at the moment. Please check back later.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="links" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Useful Links</CardTitle>
                <CardDescription>A collection of helpful links to external resources.</CardDescription>
            </Header>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Useful links will be listed here soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Information on how to make payments to KeNIC.</CardDescription>
            </Header>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Our payment details will be provided here shortly.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

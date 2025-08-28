
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6 pt-24 md:pt-32">
      <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">News & Events</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest happenings from KeNIC.
          </p>
      </div>

      <Tabs defaultValue="updates" className="w-full">
        <div className="w-full overflow-x-auto">
          <TabsList className="h-auto">
            <TabsTrigger value="updates" className="py-2">News & Updates</TabsTrigger>
            <TabsTrigger value="blog" className="py-2">Blog & Articles</TabsTrigger>
            <TabsTrigger value="events" className="py-2">Events</TabsTrigger>
            <TabsTrigger value="trainings" className="py-2">Trainings</TabsTrigger>
            <TabsTrigger value="newsletter" className="py-2">Newsletter</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="updates" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>News & Updates</CardTitle>
                <CardDescription>The latest news and announcements from KeNIC.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>No new updates at the moment. Check back soon!</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="blog" className="mt-8">
          <Card>
            <CardHeader>
                <CardTitle>Blog & Articles</CardTitle>
                <CardDescription>Insights and articles from our team.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Our blog is coming soon. Stay tuned for insightful articles!</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Events</CardTitle>
                <CardDescription>Join us at our upcoming events.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>There are no upcoming events scheduled. Please check again later.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trainings" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Trainings</CardTitle>
                <CardDescription>Enhance your skills with our training programs.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Information about our training sessions will be available here soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="newsletter" className="mt-8">
           <Card>
            <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Subscribe to our newsletter for regular updates.</CardDescription>
            </CardHeader>
            <CardContent className="text-center p-16 text-muted-foreground">
                <p>Our newsletter is launching soon. Sign up to be the first to know!</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

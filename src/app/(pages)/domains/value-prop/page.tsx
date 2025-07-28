import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, DollarSign, CheckCircle, Shield, Lock, Globe } from "lucide-react";

const valueProps = [
  {
    title: "Accessibility",
    description: "To enhance business competitiveness it is imperative to have an online presence; somewhere where customers can easily access your products and services, and hopefully promote E-commerce. As the custodian of the .KE domain in Kenya, KeNIC is making the online access of businesses possible through registration of your .KE domain.",
    icon: Accessibility
  },
  {
    title: "Affordability",
    description: ".KE domain name reduces promotion and advertising costs since the business name is also the Internet Identity. It also improves the company’s promotion chances and site visibility. Few search engines will accept any sites without their own domain name.",
    icon: DollarSign
  },
  {
    title: "Frequency of Availability",
    description: "The ease/probability of acquiring the easy to remember .KE name is greater than acquiring any other namespace - with up to 80% probability. It also improves the company’s promotion chances and site visibility. Few search engines will accept any sites without their own domain name.",
    icon: CheckCircle
  },
  {
    title: "Protecting your Brand Online",
    description: "In today’s World, corporations are at risk of cyber-attacks posed through cyber-squatting, hacking, domain hijacking and intellectual property theft. Ideal it has now become for scammers to try and use good brands to divert and drive traffic to their website, thus threatening to substantially devalue your brand customer base with potentially counterfeit and grey market sales. Kenya Network Information Centre; (KeNIC) a not-for profit organization charged with the management and administration of the .KE domain, is at the forefront of ensuring corporates protect themselves from fraudsters and hijackers thus fully maximizing their brand’s potential. With the little formal policy to protect brands from the risk and costs of image, identity and reputation theft, KeNIC has taken the initiative to raise awareness on importance of brand protection and enable corporates such as to secure their brands online through registration of .KE domain names",
    icon: Shield
  },
  {
    title: "Security",
    description: "Today, many small, medium and large-sized companies are taking the step to secure their online presence. This is because of the imposing risk of domain hacking and theft of intellectual property rights. As the official custodian of the .ke domain name in Kenya, KeNIC is encouraging Businesses to protect their brands from cyber threats and crimes through registration of their .KE brand names",
    icon: Lock
  },
  {
    title: "Uniquely Kenyan",
    description: "Domain Names are a unique identity on the Internet, however, a .KE domain name, unlike other generic domain names like .com, provides an identity that is a distinct association to Kenya. Therefore the .KE namespace has the added advantage of providing not only a globally recognized Internet Identity but also an association with one's country",
    icon: Globe
  }
]

export default function ValuePropositionPage() {
  return (
    <div className="bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Why Choose a .KE Domain?
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the unique advantages of securing your digital identity with a .KE domain.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

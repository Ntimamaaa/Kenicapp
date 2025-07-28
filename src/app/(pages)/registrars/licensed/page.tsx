import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const registrars = [
  {
    name: "Safaricom PLC",
    logo: "https://placehold.co/200x100.png",
    description: "Leading telecommunications provider in Kenya offering robust domain services.",
    website: "#",
    hint: "telecom logo"
  },
  {
    name: "Kenya Web Experts Ltd",
    logo: "https://placehold.co/200x100.png",
    description: "Specializing in web hosting and domain registration with excellent support.",
    website: "#",
    hint: "web hosting"
  },
  {
    name: "Host Pinnacle Kenya",
    logo: "https://placehold.co/200x100.png",
    description: "Affordable and reliable hosting solutions for businesses of all sizes.",
    website: "#",
    hint: "hosting logo"
  },
  {
    name: "Truehost Africa",
    logo: "https://placehold.co/200x100.png",
    description: "Pan-African cloud service provider offering a wide range of web services.",
    website: "#",
    hint: "cloud service"
  },
  {
    name: "EAC Directory Company Ltd",
    logo: "https://placehold.co/200x100.png",
    description: "Your partner for digital presence in the East African Community.",
    website: "#",
    hint: "business directory"
  },
  {
    name: "Sasahost Limited",
    logo: "https://placehold.co/200x100.png",
    description: "Empowering businesses online with reliable web hosting and domain names.",
    website: "#",
    hint: "tech company"
  },
];

export default function LicensedRegistrarsPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Licensed .KE Registrars
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose from our network of accredited partners to register and manage
            your .KE domain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {registrars.map((registrar) => (
            <Card key={registrar.name} className="flex flex-col">
              <CardHeader className="items-center">
                 <div className="relative w-40 h-20 mb-4">
                     <Image src={registrar.logo} alt={`${registrar.name} Logo`} layout="fill" objectFit="contain" data-ai-hint={registrar.hint}/>
                 </div>
                <CardTitle className="text-center">{registrar.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="h-4 w-4" /> Accredited Registrar
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-center text-muted-foreground">
                  {registrar.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={registrar.website} target="_blank">
                    Visit Website
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

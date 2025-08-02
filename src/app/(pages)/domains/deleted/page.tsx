
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Flame, ShoppingBag, Landmark, Code, Leaf, Calendar, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const deletedDomains = [
    { name: "classic-kenya.ke", deletionDate: "2024-05-20", category: "Tourism" },
    { name: "safari-deals.ke", deletionDate: "2024-05-19", category: "Tourism" },
    { name: "nairobi-market.ke", deletionDate: "2024-05-19", category: "E-commerce" },
    { name: "tech-innovate.ke", deletionDate: "2024-05-18", category: "Tech" },
    { name: "digital-mombasa.ke", deletionDate: "2023-12-17", category: "Tech" },
    { name: "coffee-exports.ke", deletionDate: "2023-11-17", category: "E-commerce" },
    { name: "tourism-magic.ke", deletionDate: "2023-10-16", category: "Tourism" },
    { name: "my-great-site.ke", deletionDate: "2023-09-15", category: "General" },
    { name: "archive-kenya.ke", deletionDate: "2022-08-10", category: "General" },
    { name: "old-school.ke", deletionDate: "2022-07-22", category: "General" },
    { name: "vintage-vibes.ke", deletionDate: "2022-06-01", category: "E-commerce" },
    { name: "past-glory.ke", deletionDate: "2021-01-05", category: "General" },
    { name: "agri-tech.ke", deletionDate: "2024-05-21", category: "Tech" },
    { name: "kenya-crafts.ke", deletionDate: "2024-05-22", category: "E-commerce" },
    { name: "maasai-market.ke", deletionDate: "2024-05-23", category: "Tourism" },
];

const categories = [
    { name: "All", icon: null },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Tourism", icon: Landmark },
    { name: "Tech", icon: Code },
    { name: "General", icon: Leaf },
];

const years = ["All", ...Array.from(new Set(deletedDomains.map(d => new Date(d.deletionDate).getFullYear()))).sort((a,b) => b-a).map(String)];

export default function DeletedDomainsPage() {
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredDomains = deletedDomains.filter((domain) => {
      const matchesText = domain.name.toLowerCase().includes(filter.toLowerCase());
      const matchesCategory = selectedCategory === "All" || domain.category === selectedCategory;
      const matchesYear = selectedYear === "All" || new Date(domain.deletionDate).getFullYear().toString() === selectedYear;
      return matchesText && matchesCategory && matchesYear;
  });

  return (
    <div className="flex-1 bg-background">
        <section className="w-full py-20 lg:py-32">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                 <Link href="#" className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20 mb-6">
                    <span>Pro Tip: Short, brandable names are often found here!</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tighter text-foreground mb-6">
                    Deleted Domains
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10">
                    Find your next digital asset. Recently expired domains are a goldmine of opportunities waiting to be discovered. Explore the list to catch valuable names as they become available.
                </p>
                <div className="flex items-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/whois">
                           Check a Name
                        </Link>
                    </Button>
                     <Button asChild variant="link" size="lg">
                        <Link href="/domains/value-prop">
                            <span>Why a .KE Domain?</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

      <div className="bg-secondary">
        <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="text-center">
                    <CardContent className="p-4">
                        <p className="text-3xl font-bold text-primary">27</p>
                        <p className="text-sm text-muted-foreground">Domains Deleted Today</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="p-4">
                        <p className="text-3xl font-bold text-primary">{deletedDomains.length}</p>
                        <p className="text-sm text-muted-foreground">Total Available</p>
                    </CardContent>
                </Card>
            </div>

            <div className="my-8 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        placeholder="Search for keywords like 'safari', 'market', 'tech'..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="pl-10 text-base h-12"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {categories.map(({ name, icon: Icon }) => (
                            <Button 
                                key={name} 
                                variant={selectedCategory === name ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(name)}
                                className="flex items-center gap-2"
                            >
                                {Icon && <Icon className="h-4 w-4" />}
                                {name}
                            </Button>
                        ))}
                    </div>
                     <div className="flex flex-wrap items-center justify-center gap-2">
                        {years.map(year => (
                            <Button
                                key={year}
                                variant={selectedYear === year ? 'default' : 'outline'}
                                onClick={() => setSelectedYear(year)}
                                className="flex items-center gap-2"
                            >
                                {year !== "All" && <Calendar className="h-4 w-4" />}
                                {year}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain Name</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead>Deletion Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDomains.map((domain, index) => (
                    <>
                      <TableRow key={domain.name}>
                        <TableCell className="font-medium">{domain.name}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge variant="outline">{domain.category}</Badge>
                        </TableCell>
                        <TableCell>{domain.deletionDate}</TableCell>
                        <TableCell className="text-right">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/whois?domain=${domain.name}&from=deleted-domains`}>
                              Check Availability
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                      {index % 4 === 2 && (
                         <TableRow className="bg-primary/5 hover:bg-primary/10">
                            <TableCell colSpan={4} className="p-0">
                               <div className="p-4 flex items-center gap-4">
                                    <Flame className="h-8 w-8 text-primary flex-shrink-0"/>
                                    <div>
                                        <p className="font-bold text-primary">Hot Opportunity: <span className="text-foreground">{domain.name}</span></p>
                                        <p className="text-sm text-muted-foreground">This domain is short and contains a high-value keyword, making it great for SEO.</p>
                                    </div>
                               </div>
                            </TableCell>
                         </TableRow>
                      )}
                    </>
                  ))}
                </TableBody>
              </Table>
              {filteredDomains.length === 0 && (
                <div className="text-center p-8 text-muted-foreground">
                  No domains found matching your filter.
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

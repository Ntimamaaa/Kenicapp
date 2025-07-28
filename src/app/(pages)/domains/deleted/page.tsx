
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
import { Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const deletedDomains = [
    { name: "classic-kenya.ke", deletionDate: "2024-05-20" },
    { name: "safari-deals.ke", deletionDate: "2024-05-19" },
    { name: "nairobi-market.ke", deletionDate: "2024-05-19" },
    { name: "tech-innovate.ke", deletionDate: "2024-05-18" },
    { name: "digital-mombasa.ke", deletionDate: "2023-12-17" },
    { name: "coffee-exports.ke", deletionDate: "2023-11-17" },
    { name: "tourism-magic.ke", deletionDate: "2023-10-16" },
    { name: "my-great-site.ke", deletionDate: "2023-09-15" },
    { name: "archive-kenya.ke", deletionDate: "2022-08-10" },
    { name: "old-school.ke", deletionDate: "2022-07-22" },
    { name: "vintage-vibes.ke", deletionDate: "2022-06-01" },
    { name: "past-glory.ke", deletionDate: "2021-01-05" },
];

const availableYears = [
    ...new Set(deletedDomains.map((d) => new Date(d.deletionDate).getFullYear())),
].sort((a, b) => b - a);


export default function DeletedDomainsPage() {
  const [filter, setFilter] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredDomains = deletedDomains.filter((domain) => {
      const matchesText = domain.name.toLowerCase().includes(filter.toLowerCase());
      const matchesYear = selectedYear ? new Date(domain.deletionDate).getFullYear() === selectedYear : true;
      return matchesText && matchesYear;
  });

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
          Deleted Domains
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse a list of recently deleted .KE domains that may be available for registration.
        </p>
      </div>

      <div className="my-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Filter domains..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 text-base"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Button 
                variant={!selectedYear ? 'default' : 'outline'} 
                onClick={() => setSelectedYear(null)}
            >
                All
            </Button>
            {availableYears.map(year => (
                <Button 
                    key={year} 
                    variant={selectedYear === year ? 'default' : 'outline'}
                    onClick={() => setSelectedYear(year)}
                >
                    {year}
                </Button>
            ))}
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Domain Name</TableHead>
              <TableHead>Deletion Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDomains.map((domain) => (
              <TableRow key={domain.name}>
                <TableCell className="font-medium">{domain.name}</TableCell>
                <TableCell>{domain.deletionDate}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/whois?domain=${domain.name}`}>
                      Check Availability
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
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
  );
}

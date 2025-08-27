
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Edit, ExternalLink, Globe, PlusCircle, Power, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const domains = [
    { name: "mybusiness.co.ke", registrar: "Safaricom", status: "Active", expiry: "2025-08-15" },
    { name: "portfolio.me.ke", registrar: "Truehost", status: "Active", expiry: "2024-12-22" },
    { name: "techblog.ke", registrar: "HostPinnacle", status: "Expiring Soon", expiry: "2024-07-30" },
    { name: "mycharity.or.ke", registrar: "Kenya Web Experts", status: "Active", expiry: "2025-02-10" },
];

export default function DashboardPage() {
    return (
        <div className="flex-1 bg-secondary">
            <div className="container mx-auto max-w-7xl py-24 px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@johndoe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-headline text-3xl font-bold">Welcome Back, John!</h1>
                            <p className="text-muted-foreground">Here's what's happening with your domains.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                            <Badge className="ml-2">3</Badge>
                        </Button>
                        <Button variant="outline">
                            <User className="mr-2 h-4 w-4" />
                           Account
                        </Button>
                         <Button variant="destructive-outline" asChild>
                            <Link href="/login">
                                <Power className="mr-2 h-4 w-4" />
                                Logout
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">My Domains</CardTitle>
                            <Globe className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{domains.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Total registered domains
                            </p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground">
                                Domain expiring in the next 30 days
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                             <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                                Verified
                             </div>
                            <p className="text-xs text-muted-foreground">
                                Your account is secure and up-to-date
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <div>
                            <CardTitle className="font-headline text-2xl">My Registered Domains</CardTitle>
                            <CardDescription>Manage your portfolio of .KE domains.</CardDescription>
                        </div>
                        <Button asChild>
                           <Link href="/whois">
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Register New Domain
                           </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Domain Name</TableHead>
                                        <TableHead className="hidden md:table-cell">Registrar</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="hidden md:table-cell">Expiry Date</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {domains.map((domain) => (
                                        <TableRow key={domain.name}>
                                            <TableCell className="font-medium">{domain.name}</TableCell>
                                            <TableCell className="hidden md:table-cell">{domain.registrar}</TableCell>
                                            <TableCell>
                                                <Badge variant={domain.status === 'Active' ? 'default' : 'destructive'} className={cn(domain.status === 'Active' ? 'bg-green-600' : '')}>
                                                    {domain.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">{domain.expiry}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="outline" size="sm" asChild>
                                                   <Link href="#">
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Manage
                                                   </Link>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

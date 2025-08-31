
"use client";

import { useState, Suspense, type ElementType } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  Sector
} from "recharts";
import { Users, Globe, TrendingUp, Package, GanttChartSquare, RefreshCw, PlusCircle, ArrowLeft, Briefcase, Server, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const genericDomainData = [
    { name: "co.ke", value: 100186 },
    { name: "or.ke", value: 2080 },
    { name: "ke", value: 6831 },
    { name: "me.ke", value: 208 },
    { name: "info.ke", value: 129 },
    { name: "mobi.ke", value: 26 },
    { name: "ne.ke", value: 66 },
];

const restrictedDomainData = [
    { name: "ac.ke", value: 1394 },
    { name: "sc.ke", value: 1018 },
    { name: "go.ke", value: 863 },
]

const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--primary))",
    "hsl(var(--accent))",
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-headline text-lg">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};


interface BlobStatCardProps {
    title: string;
    value: string;
    description: string;
    icon: ElementType;
    animationDelay: string;
}

function BlobStatCard({ title, value, description, icon: Icon, animationDelay }: BlobStatCardProps) {
    return (
        <div className="blob-card animate-fade-in-up" style={{ animationDelay }}>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob-card__content">
                <div className="p-6 h-full flex flex-col justify-between text-white">
                    <Icon className="w-10 h-10 mb-4 text-white/80" />
                    <div>
                        <p className="text-4xl font-bold drop-shadow-lg">{value}</p>
                        <h3 className="text-lg font-semibold drop-shadow-md">{title}</h3>
                        <p className="text-sm text-white/80 drop-shadow-md">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatsPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fromHome = searchParams.get('from') === 'home';

    const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  const onPieLeave = () => {
    setActiveIndex(null);
  }

  const onLegendEnter = (props: any) => {
      const index = genericDomainData.findIndex(d => d.name === props.value);
      setActiveIndex(index);
  }
  const onLegendLeave = () => {
    setActiveIndex(null);
  }

  return (
    <div className="flex-1">
        <section className="w-full pt-24 pb-20 md:pb-24 lg:pb-32 bg-background">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  .KE Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Statistics</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Live insights and trends from the .KE domain namespace.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                    src="/placeholder.svg"
                    alt="Domain Stats Illustration"
                    width={400}
                    height={400}
                    className="w-full max-w-md rounded-xl shadow-2xl"
                    data-ai-hint="data analytics"
                />
              </div>
            </div>
          </div>
        </section>
        
        <div className="bg-secondary">
            <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
                {fromHome && (
                    <Button variant="outline" onClick={() => router.back()} className="mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                   <BlobStatCard
                        title="Total Domains"
                        value="112,801"
                        description="All registered .KE domains"
                        icon={Globe}
                        animationDelay="200ms"
                   />
                    <BlobStatCard
                        title="Licensed Registrars"
                        value="512"
                        description="Accredited partners"
                        icon={Briefcase}
                        animationDelay="400ms"
                   />
                   <BlobStatCard
                        title="Generic Domains"
                        value="109,526"
                        description="e.g. .co.ke, .or.ke"
                        icon={Server}
                        animationDelay="600ms"
                   />
                   <BlobStatCard
                        title="Restricted Domains"
                        value="3,275"
                        description="e.g. .ac.ke, .go.ke"
                        icon={Shield}
                        animationDelay="800ms"
                   />
                </div>

                <div className="grid gap-8 lg:grid-cols-2 mb-8">
                    <Card className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><PlusCircle className="text-primary"/>New Domains</CardTitle>
                            <CardDescription>Domains registered recently</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="grid grid-cols-2 text-center">
                                <div className="p-4 border-r border-transparent">
                                    <p className="text-sm text-muted-foreground">Last 24 Hours</p>
                                    <p className="text-3xl font-bold">98</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-muted-foreground">Last 30 Days</p>
                                    <p className="text-3xl font-bold">4,275</p>
                                </div>
                        </div>
                        </CardContent>
                    </Card>
                    <Card className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><RefreshCw className="text-primary"/>Domain Renewals</CardTitle>
                            <CardDescription>Domains renewed recently</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="grid grid-cols-2 text-center">
                                <div className="p-4 border-r border-transparent">
                                    <p className="text-sm text-muted-foreground">Last 24 Hours</p>
                                    <p className="text-3xl font-bold">118</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-muted-foreground">Last 30 Days</p>
                                    <p className="text-3xl font-bold">4,785</p>
                                </div>
                        </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <Card className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
                        <CardHeader>
                        <CardTitle className="font-headline">
                            Generic Domain Distribution
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={genericDomainData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        innerRadius={60}
                                        fill="hsl(var(--primary))"
                                        dataKey="value"
                                        activeIndex={activeIndex ?? undefined}
                                        activeShape={renderActiveShape}
                                        onMouseEnter={onPieEnter}
                                        onMouseLeave={onPieLeave}
                                    >
                                        {genericDomainData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} 
                                            className={cn(
                                                "transition-opacity",
                                                activeIndex !== null && activeIndex !== index ? "opacity-30" : "opacity-100"
                                            )}
                                        />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))'}} formatter={(value, name) => [value.toLocaleString(), name]}/>
                                    <Legend wrapperStyle={{color: 'hsl(var(--foreground))'}} onMouseEnter={onLegendEnter} onMouseLeave={onLegendLeave} />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card className="animate-fade-in-up" style={{animationDelay: '800ms'}}>
                        <CardHeader>
                        <CardTitle className="font-headline">
                            Restricted Domain Distribution
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={restrictedDomainData} layout="vertical" margin={{ left: 10, right: 30}}>
                                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{fill: 'hsl(var(--accent))', opacity: 0.5}} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))'}}/>
                                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={30}>
                                    {restrictedDomainData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}

export default function DomainStatsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StatsPageContent />
        </Suspense>
    )
}

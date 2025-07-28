"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Users, Globe, TrendingUp, Package, GanttChartSquare, RefreshCw, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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

const COLORS = ["#060842", "#007BFF", "#28a745", "#ffc107", "#17a2b8", "#6f42c1", "#dc3545"];

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


export default function DomainStatsPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeRestrictedIndex, setActiveRestrictedIndex] = useState<number | null>(null);


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
    <div className="bg-secondary flex-1">
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
            .KE Domain Statistics
            </h1>
            <p className="text-lg text-muted-foreground">
            Live insights and trends from the .KE domain namespace.
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                Total Domains
                </CardTitle>
                <Globe className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">112,801</div>
                <p className="text-xs text-muted-foreground">
                All registered .KE domains
                </p>
            </CardContent>
            </Card>
            <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                Licensed Registrars
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">512</div>
                <p className="text-xs text-muted-foreground">
                Accredited partners
                </p>
            </CardContent>
            </Card>
             <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Generic Domains</CardTitle>
                <GanttChartSquare className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">109,526</div>
                <p className="text-xs text-muted-foreground">e.g. .co.ke, .or.ke</p>
            </CardContent>
            </Card>
            <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Restricted Domains</CardTitle>
                <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">3,275</div>
                <p className="text-xs text-muted-foreground">e.g. .ac.ke, .go.ke</p>
            </CardContent>
            </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><PlusCircle className="text-primary"/>New Domains</CardTitle>
                    <CardDescription>Domains registered recently</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="rounded-lg bg-background p-4">
                            <p className="text-sm text-muted-foreground">Last 24 Hours</p>
                            <p className="text-3xl font-bold">98</p>
                        </div>
                         <div className="rounded-lg bg-background p-4">
                            <p className="text-sm text-muted-foreground">Last 30 Days</p>
                            <p className="text-3xl font-bold">4,275</p>
                        </div>
                   </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><RefreshCw className="text-primary"/>Domain Renewals</CardTitle>
                    <CardDescription>Domains renewed recently</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="rounded-lg bg-background p-4">
                            <p className="text-sm text-muted-foreground">Last 24 Hours</p>
                            <p className="text-3xl font-bold">118</p>
                        </div>
                         <div className="rounded-lg bg-background p-4">
                            <p className="text-sm text-muted-foreground">Last 30 Days</p>
                            <p className="text-3xl font-bold">4,785</p>
                        </div>
                   </div>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
            <Card>
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
                                fill="#8884d8"
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
                            <Tooltip formatter={(value, name) => [value.toLocaleString(), name]}/>
                            <Legend onMouseEnter={onLegendEnter} onMouseLeave={onLegendLeave} />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                <CardTitle className="font-headline">
                    Restricted Domain Distribution
                </CardTitle>
                </CardHeader>
                <CardContent>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={restrictedDomainData} layout="vertical" margin={{ left: 10, right: 30}}>
                        <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis type="category" dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))'}}/>
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
  );
}

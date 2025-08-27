
"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, Briefcase, Newspaper, Search, Users, Shield, FileText, Download, Star, BookOpen, Scale, Moon, Sun, Info, UserPlus, LayoutDashboard, Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import { ScrollArea } from '../ui/scroll-area';
import { useSettings } from '../settings-drawer';

const navItems = [
  {
    title: '.KE Domains',
    subItems: [
      { title: 'Domain Statistics', href: '/domains/stats', description: 'View trends and statistics of the .KE namespace.', icon: Users },
      { title: 'Deleted Domains', href: '/domains/deleted', description: 'Browse recently deleted and available domains.', icon: Download },
      { title: 'Domain Checker', href: '/whois', description: 'Quickly check if a domain is available.', icon: Search },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Policies', href: '/legal/policies' },
  { title: 'Registrars', href: '/registrars/licensed' },
  { title: 'WhoIs', href: '/whois' },
  { title: 'Dashboard', href: '/dashboard'},
  { title: 'News', href: '/news' },
  { title: 'Careers', href: '/careers' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-foreground" prefetch={false}>
    <Globe className="h-7 w-7" />
    <span className="font-headline text-xl font-bold tracking-tight">
      KeNIC
    </span>
  </Link>
);


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setOpen: setSettingsOpen } = useSettings();
  
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
            <Logo/>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {item.subItems.map((component) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                icon={component.icon}
                              >
                                {component.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.href!}>
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)}>
                <Settings />
                <span className="sr-only">Settings</span>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/signup">Register</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="py-6">
                    <Logo />
                </div>
                <ScrollArea className="flex-1">
                    <div className="flex flex-col space-y-2 pr-6">
                    {navItems.map((item) => (
                        <div key={item.title}>
                            {item.subItems ? (
                                <div className="flex flex-col space-y-1">
                                    <p className="font-headline px-4 pt-2 font-semibold text-foreground">{item.title}</p>
                                    {item.subItems.map((sub) => (
                                        <MobileLink key={sub.href} href={sub.href} onOpenChange={setIsOpen}>
                                            {sub.title}
                                        </MobileLink>
                                    ))}
                                </div>
                            ) : (
                                <MobileLink href={item.href!} onOpenChange={setIsOpen}>
                                    {item.title}
                                </MobileLink>
                            )}
                        </div>
                    ))}
                    </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function MobileLink({ children, href, disabled, onOpenChange }: MobileLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        pathname === href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
        { 'text-muted-foreground/70': disabled }
      )}
      onClick={() => onOpenChange?.(false)}
    >
      {children}
    </Link>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, href, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50',
            className
          )}
          {...props}
        >
            <div className="flex items-center gap-3">
                <div className="bg-background/70 p-2 rounded-md">
                    <Icon className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </div>
            </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

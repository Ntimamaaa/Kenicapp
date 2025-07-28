"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, Briefcase, Newspaper, Search, Users, Shield, FileText, Download, Star, BookOpen, Scale } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
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

const navItems = [
  {
    title: '.KE Domains',
    subItems: [
      { title: 'How To Register', href: '/domains/how-to-register', description: 'Step-by-step guide to registering your domain.', icon: BookOpen },
      { title: 'Domain Statistics', href: '/domains/stats', description: 'View trends and statistics of the .KE namespace.', icon: Users },
      { title: 'Value Proposition', href: '/domains/value-prop', description: 'Why choosing a .KE domain is the best for you.', icon: Star },
      { title: 'Deleted Domains', href: '/domains/deleted', description: 'Browse recently deleted and available domains.', icon: Download },
      { title: 'Domain Checker', href: '/whois', description: 'Quickly check if a domain is available.', icon: Search },
    ],
  },
  {
    title: 'Discover KeNIC',
    subItems: [
      { title: 'About Us', href: '/about', description: 'Learn about our mission, vision, and values.', icon: Users },
      { title: 'KeNIC Team', href: '/team', description: 'Meet the people behind KeNIC.', icon: Users },
      { title: 'Partnerships', href: '/partners', description: 'Our network of trusted partners.', icon: Users },
    ],
  },
  {
    title: 'Legal & Policy',
    subItems: [
        { title: 'KeNIC Policies', href: '/legal/policies', description: 'Read our official policies and regulations.', icon: Shield },
        { title: 'Domain Disputes', href: '/legal/disputes', description: 'Information on resolving domain name disputes.', icon: Scale },
    ]
  },
  {
    title: 'Registrars',
    subItems: [
        { title: 'Licensed Registrars', href: '/registrars/licensed', description: 'Find an accredited registrar to manage your domain.', icon: Users },
        { title: 'Become a Registrar', href: '/registrars/become', description: 'Join our network of licensed registrars.', icon: Briefcase },
    ]
  },
  { title: 'WhoIs', href: '/whois' },
  { title: 'News', href: '/news' },
  { title: 'Careers', href: '/careers' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" prefetch={false}>
    <Globe className="h-7 w-7 text-primary" />
    <span className="font-headline text-xl font-bold tracking-tight">
      KeNIC
    </span>
  </Link>
);


export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
            <Logo />
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
                      <Link href={item.href!} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
            <Button className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">Register</Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="py-6">
                    <Logo />
                </div>
                <div className="flex flex-col space-y-2">
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
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50',
            className
          )}
          {...props}
        >
            <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </div>
            </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

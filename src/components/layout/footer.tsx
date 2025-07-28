import { Globe } from 'lucide-react';
import Link from 'next/link';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 2.1-.5.6-1.3.9-2.1.9h-1c-1.1 0-2.1-.5-2.8-1.2l-6.6-6.6c-.6-.6-1.2-1.2-1.8-1.8-1.2-1.2-2.3-2.3-3.1-3.5.5-.5 1.1-1 1.7-1.5.6-.5 1.3-1 2-1.5s1.3-.9 2-1.2c.7-.3 1.4-.5 2.1-.5.7 0 1.4.2 2 .5.6.3 1.2.7 1.7 1.2.5.5 1 1.1 1.4 1.7.5.6.9 1.3 1.2 2 .2.7.3 1.4.3 2.1 0 .7-.2 1.4-.5 2.1-.3.6-.7 1.2-1.2 1.7-.5.5-1.1 1-1.7 1.4-.6.5-1.3.9-2 1.2-.7.3-1.4.5-2.1.5h-1c-1.1 0-2.1-.5-2.8-1.2l-6.6-6.6" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold">
                KeNIC
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your partner in navigating the .KE domain landscape.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            <div className="space-y-4">
              <h4 className="font-headline font-semibold">.KE Domains</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How To Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="/domains/stats"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Domain Statistics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/domains/deleted"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Deleted Domains
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whois"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Domain Checker
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-semibold">Discover KeNIC</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    KeNIC Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registrars/licensed"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Licensed Registrars
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} KeNIC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

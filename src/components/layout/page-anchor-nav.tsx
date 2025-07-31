
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'how-to-register', title: 'How to Register' },
  { id: 'extensions', title: 'Extensions' },
  { id: 'stats-section-interactive', title: 'Statistics' },
  { id: 'features', title: 'Features' },
  { id: 'ai-suggester', title: 'AI Suggester' },
  { id: 'partners', title: 'Partners' },
  { id: 'cta', title: 'Get Started' },
];

export function PageAnchorNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.8) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.unobserve(el);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for sticky header height
        behavior: 'smooth',
      });
    }
  };

  if (pathname !== '/') {
    return null;
  }

  return (
    <nav
      className={cn(
        'sticky top-16 z-40 w-full bg-background/90 backdrop-blur-sm transition-all duration-300',
        'shadow-md',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-12 items-center justify-center overflow-x-auto">
          <div className="flex items-center space-x-6">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={cn(
                  'whitespace-nowrap text-sm font-medium transition-colors hover:text-primary',
                  activeSection === section.id
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

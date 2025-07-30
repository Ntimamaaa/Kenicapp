
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const partners = [
  { name: 'TIBS', logo: '/partners/TIBS.png', hint: 'TIBS logo' },
  { name: 'Zoho', logo: '/partners/Zoho.png', hint: 'Zoho logo' },
  { name: 'ICANN', logo: '/partners/ICANN.png', hint: 'ICANN logo' },
  { name: 'AfTLD', logo: '/partners/AfTLD.png', hint: 'AfTLD logo' },
  { name: 'Communications Authority of Kenya', logo: '/partners/CA.png', hint: 'CA Kenya logo' },
  { name: 'ICT Authority', logo: '/partners/ICTA.png', hint: 'ICTA logo' },
  { name: 'Eveminet', logo: '/partners/Eveminet.png', hint: 'Eveminet logo' },
  { name: 'Elimu', logo: '/partners/Elimu.png', hint: 'Elimu Holdings logo' },
];

export function PartnersMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-[200%] animate-marquee">
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-48 mx-4 flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={158}
              height={48}
              className="object-contain dark:brightness-0 dark:invert"
              data-ai-hint={partner.hint}
            />
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"
      ></div>
    </div>
  );
}

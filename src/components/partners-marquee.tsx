
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const partners = [
  { name: 'KENET', logo: '/images/partners/kenet.png', hint: 'Kenet logo' },
  { name: 'Zoho', logo: '/images/partners/zoho.png', hint: 'Zoho logo' },
 { name: 'ICANN', logo: '/images/partners/icann.png', hint: 'ICANN logo' },
 { name: 'AfTLD', logo: '/images/partners/aftld.png', hint: 'AfTLD logo' },
 { name: 'Eldohub', logo: '/images/partners/eldohub.png', hint: 'eldo logo' },
 { name: 'ICT Authority', logo: '/images/partners/ictauthority.png', hint: 'ICTA logo' },
 { name: 'Eveminet', logo: '/images/partners/eveminet.png', hint: 'Eveminet logo' },
 { name: 'Elimu', logo: '/images/partners/elimu.png', hint: 'Elimu Holdings logo' },
  { name: 'TESPOK', logo: '/images/partners/tespok.png', hint: 'TESPOK logo' },
  { name: 'Thika Institute', logo: '/images/partners/thikainst.png', hint: 'Thika Institute logo' },
 { name: 'afralti', logo: '/images/partners/afralti.png', hint: 'afralti logo' },
 { name: 'blue', logo: '/images/partners/blue.png', hint: 'blue logo' },
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

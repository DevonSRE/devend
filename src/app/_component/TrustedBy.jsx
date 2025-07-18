'use client';

import Image from "next/image";


const trustedBy = [
  { id: 1, title: 'DEAN', subtitle: 'Clients', image: '/images/dean.org.ng.png' },
  { id: 2, title: 'PCNGi', subtitle: 'Clients', image: '/images/pcngi.png' },
  { id: 3, title: 'FEMADEC Group', subtitle: 'Clients', image: '/images/femadec-group.png' },
  { id: 5, title: 'PPDC', subtitle: 'Clients', image: '/images/ppdc.png' },
  { id: 4, title: 'Devon', subtitle: 'Clients', image: '/images/devon.png' },
];

export function TrustedBy() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex-1 h-0.5 bg-[#211434]/10"></div>
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#211434] px-4">
            Trusted By
          </h3>
          <div className="flex-1 h-0.5 bg-[#211434]/10"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center relative">
          <div className="absolute w-full h-0.5 bg-[#211434]/10 -bottom-2"></div>
          {trustedBy.map((item) => (
            <div key={item.title} className="p-1">
              <Image
                src={item.image}
                alt={item.title}
                height={80}
                width={160}
                className="mx-auto aspect-video object-contain"
              />
              {/*<h4 className="text-lg font-semibold mb-2 text-[#211434]">{item.title}</h4>
              <p className="text-sm text-[#211434]/70">{item.subtitle}</p>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

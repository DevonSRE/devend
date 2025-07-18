'use client';

import { Logos3 } from "@/components/blocks/logos3";
// import Image from "next/image";


/*
const trustedBy = [
  { id: 1, title: 'DEAN', subtitle: 'Clients', image: '/images/dean.org.ng.png' },
  { id: 2, title: 'PCNGi', subtitle: 'Clients', image: '/images/pcngi.png' },
  { id: 3, title: 'FEMADEC Group', subtitle: 'Clients', image: '/images/femadec-group.png' },
  { id: 5, title: 'PPDC', subtitle: 'Clients', image: '/images/ppdc.png' },
  { id: 4, title: 'Devon', subtitle: 'Clients', image: '/images/devon.png' },
];
*/

const trustedByData = {
  heading: "",
  isHeader: false,
  logos: [ // add to the list. 7 items triggers carousel effect
    {
      id: "logo-1",
      description: "DEAN",
      image: "/images/dean.org.ng.png",
      className: "h-auto w-16",
    },
    {
      id: "logo-2",
      description: "PCNGi",
      image: "/images/pcngi.png",
      className: "h-auto w-24",
    },
    {
      id: "logo-3",
      description: "FEMADEC Group",
      image: "/images/femadec-group.png",
      className: "h-auto w-28",
    },
    {
      id: "logo-4",
      description: "PPDC",
      image: "/images/ppdc.png",
      className: "h-auto w-28",
    },
    {
      id: "logo-5",
      description: "Devon",
      image: "/images/devon.png",
      className: "h-auto w-24",
    },
  ],
};

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
        <div className="relative">
          <div className="absolute w-full h-0.5 bg-[#211434]/10 -bottom-2"></div>
          {/* trustedBy.map((item) => (
            <div key={item.title} className="p-1">
              <Image
                src={item.image}
                alt={item.title}
                height={80}
                width={160}
                className="mx-auto aspect-video object-contain"
              />
            </div>
          )) */}
          <Logos3 {...trustedByData} />
        </div>
      </div>
    </section>
  );
}

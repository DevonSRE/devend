"use client"

import { Logos3 } from "@/components/blocks/logos3"

const trustedByData = {
  heading: "",
  isHeader: false,
  logos: [
    { id: "logo-1", description: "DEAN", image: "/images/dean.org.ng.png", className: "h-auto w-16" },
    { id: "logo-2", description: "PCNGi", image: "/images/pcngi.png", className: "h-auto w-24" },
    { id: "logo-3", description: "FEMADEC Group", image: "/images/femadec-group.png", className: "h-auto w-28" },
    { id: "logo-4", description: "PPDC", image: "/images/ppdc.png", className: "h-auto w-28" },
    { id: "logo-5", description: "Devon", image: "/images/devon.png", className: "h-auto w-24" },
  ],
}

export function TrustedBy() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex-1 h-0.5 bg-[#211434]/10" />
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#211434] px-4">
            Trusted By
          </h3>
          <div className="flex-1 h-0.5 bg-[#211434]/10" />
        </div>
        <div className="relative">
          <div className="absolute w-full h-0.5 bg-[#211434]/10 -bottom-2" />
          <Logos3 {...trustedByData} />
        </div>
      </div>
    </section>
  )
}

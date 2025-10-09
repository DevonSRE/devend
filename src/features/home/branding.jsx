import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    id: 1,
    title: "DEAN",
    description: "",
    image: "/images/branding/dean.png",
    slug: "dean",
    isWide: true,
  },
  {
    id: 2,
    title: "Logistics Services",
    description: "",
    image: "/images/branding/femadec.png",
    slug: "femadec",
    isWide: false,
  },
  {
    id: 3,
    title: "PPDC",
    description: "",
    image: "/images/branding/ppdc.png",
    slug: "ppdc",
    isWide: false,
  },
  {
    id: 4,
    title: "PCNGI",
    description: "",
    image: "/images/branding/pcngi.png",
    slug: "pcngi",
    isWide: true,
  },
];

export const Branding = () => {
  return (
    <div className="flex flex-col items-start py-8 sm:py-12 md:py-16 lg:py-20 geist-font px-4 sm:px-6 md:px-8 lg:px-10 animate-fadeIn bg-[rgb(33,20,52)] text-white">
      <div className="text-start mb-6 sm:mb-8 md:mb-10 animate-slideUp max-w-[90%] lg:max-w-6xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
          Our Branding Footprint with Leading Names
        </h2>
        <p className="text-xs md:text-sm mt-3 sm:mt-4 text-white/60">
          At Development Endeavours LTD, we take pride in helping businesses
          define and amplify their identify. Over the years, we&apos;ve
          collaborated with a diverse range of brands across industries,
          creating memorable and impactful branding solutions.
        </p>
      </div>

      <div className="w-full max-w-[90%] lg:max-w-6xl mx-auto flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <div className="w-full md:w-[55%]">
            <BrandingCard brand={brands[0]} />
          </div>
          <div className="w-full md:w-[45%]">
            <BrandingCard brand={brands[1]} />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <div className="w-full md:w-[45%]">
            <BrandingCard brand={brands[2]} />
          </div>
          <div className="w-full md:w-[55%]">
            <BrandingCard brand={brands[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate ServiceCard component for cleaner code
const BrandingCard = ({ brand }) => (
  <div className="relative group overflow-hidden rounded-lg sm:rounded-xl animate-scaleIn hover:scale-[1.02] transition-transform duration-300 h-[300px] md:h-[400px]">
    <div className="absolute inset-0">
      <Image
        src={brand.image}
        alt={brand.title}
        fill
        sizes={
          brand.isWide
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 800px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 600px"
        }
        className="object-cover"
        priority={brand.id <= 2}
      />
    </div>

    <div className="hidden absolute inset-0 bg-gradient-to-t from-[rgba(33,20,52,0.8)] via-[rgba(33,20,52,0.4)] to-transparent">
      <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
        <h3
          className={`text-lg sm:text-xl md:text-2xl ${brand.isWide ? "lg:text-3xl" : ""} font-bold text-white`}
        >
          {brand.title}
        </h3>
        <p
          className={`text-white/90 text-xs sm:text-sm md:text-base ${brand.isWide ? "md:text-lg max-w-[80%]" : "max-w-[90%]"} line-clamp-2 mt-1 sm:mt-2`}
        >
          {brand.description}
        </p>
      </div>
    </div>

    <div className="hidden absolute inset-0 bg-[#2A1C51] opacity-0 group-hover:opacity-95 transition-opacity duration-300 items-center justify-center">
      <Link
        href={brand.slug}
        className="text-white text-base sm:text-lg font-semibold tracking-wider flex items-center gap-2 group/link hover:scale-110 transition-transform duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
      >
        <span>Learn More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </div>
);

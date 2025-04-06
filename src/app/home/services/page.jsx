'use client'
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Event Management",
      description: "Stakeholder's meeting and charity event, Educational Seminars, Retreat and Workshops, Corporate Conferences and product and business Launches, Wedding, Birthdays, and so on",
      image: "/event-management.png",
      slug: "/services/event-management"
    },
    {
      id: 2,
      title: "Logistics Services",
      description: "Car hire, fleet management and dispatch services, Flight booking, Executive airport pickups, Hotel Reservation, and so on",
      image: "/logistic.png",
      slug: "/services/logistic"
    },
    {
      id: 3,
      title: "Catering Services",
      description: "Customised Menus for every occasion, High quality, Hygienic and Tasty Meals and Bakery and Onsite and Off-site Catering Services.",
      image: "/catering-service.png",
      slug: "/services/catering-service"
    },
    {
      id: 4,
      title: "Affordable Homes",
      description: "Stakeholder's meeting and charity event, Educational Seminars, Retreat and Workshops, Corporate Conferences and product and business Launches, Wedding, Birthdays, and so on",
      image: "/stakeholder-home.png",
      slug: "/services"
    }
  ];

  return (
    <div className="flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20 text-[#211434] geist-font px-4 sm:px-6 md:px-8 lg:px-10 animate-fadeIn">
      <div className="text-center mb-6 sm:mb-8 md:mb-10 animate-slideUp max-w-[90%] md:max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Services Tailored For You
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-[#211434]/80">
          We offer a range of services tailored to your specific needs. Let us
          help you create an event that leaves a lasting impression.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-[90%] lg:max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative group overflow-hidden rounded-lg sm:rounded-xl animate-scaleIn hover:scale-[1.02] transition-transform duration-300`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="aspect-[16/10] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                className="object-cover"
                priority={index < 2} // Prioritize loading first two images
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(33,20,52,0.8)] via-[rgba(33,20,52,0.4)] to-transparent">
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base line-clamp-2 mt-1 sm:mt-2 max-w-[90%]">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#2A1C51] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
              <Link
                href={service.slug}
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
        ))}
      </div>
    </div>
  );
};

export default Services;

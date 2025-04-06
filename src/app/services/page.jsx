import Link from "next/link";
import eventImgOne from "../../../public/event_one.png";
import eventImgThree from "../../../public/event_three.png";
import eventImgTwo from "../../../public/event_two.png";
import Footer from "../home/footer/page";
import Image from "next/image";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center max-w-[660px] mx-auto">
          <h2 className="text-[#211434] text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Your Event,
            <br />
            Our Expertise
          </h2>
          <p className="mt-6 text-sm md:text-base text-[#211434]/80 max-w-[540px] mx-auto">
            We deliver a complete event management experience by combining
            personalized planning, diverse catering options, and reliable
            logistics, ensuring every client&apos;s dream becomes a reality
            without hassle.
          </p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="bg-[#211434] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 max-w-2xl text-center mx-auto">
            Full-Service Management:
            <br /> Let Us Handle Everything.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                "Wedding Ceremony",
                "Celebrating a Milestone/Birthday",
                "Private Party",
                "Gala Dinners",
                "Product Launch",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="bg-[#EDCC19] w-8 h-0.5"></div>
                  <p className="text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "NGOs Fundraising Events",
                "Corporate Events",
                "Conferences",
                "Gala Dinners",
                "Awareness Campaigns",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="bg-[#EDCC19] w-8 h-0.5"></div>
                  <p className="text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Details Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#211434] font-semibold mb-12 text-center">
          Event Management That Works For You
        </h2>

        <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
          {/* Event Management Card */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={eventImgOne}
                alt="An image of a beautifully decorated table with chandeliers"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2A1C51] w-8 h-0.5"></div>
                <h3 className="font-semibold text-lg text-[#211434]">Events Management</h3>
              </div>
              <p className="text-sm md:text-base text-[#211434]/80 mb-6">
                We don't just plan events; we craft them. From the ground up, we
                create bespoke experiences with unique lighting, captivating
                décor, and hand-built elements that leave a lasting impression.
                Let's bring your vision to life.
              </p>
              <div className="text-center md:text-left">
                <Link href="/contact">
                  <button className="bg-[#2A1C51] text-white px-8 py-3 rounded-md text-sm hover:bg-[#3b2259] transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Catering Service Card */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2 md:pt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#DF3836] w-8 h-0.5"></div>
                <h3 className="font-semibold text-lg text-[#211434]">Catering Service</h3>
              </div>
              <p className="text-sm md:text-base text-[#211434]/80 mb-6">
                We collaborate with you to create a customized menu that
                reflects your unique style and preferences. From elegant plated
                dinners to vibrant buffet spreads, we deliver impeccable service
                and unforgettable flavors.
              </p>
              <div className="text-center md:text-left">
                <Link href="/contact">
                  <button className="bg-[#2A1C51] text-white px-8 py-3 rounded-md text-sm hover:bg-[#3b2259] transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={eventImgTwo}
                alt="An image of a beautifully decorated table with chandeliers"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Logistics Services Card */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={eventImgThree}
                alt="An image of a beautifully decorated table with chandeliers"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#EDCC19] w-8 h-0.5"></div>
                <h3 className="font-semibold text-lg text-[#211434]">Logistics Services</h3>
              </div>
              <p className="text-sm md:text-base text-[#211434]/80 mb-6">
                We understand that every event has unique logistical needs. We
                work closely with you to develop customized solutions, from
                efficient transportation and secure warehousing to on-site
                support and seamless coordination.
              </p>
              <div className="text-center md:text-left">
                <Link href="/contact">
                  <button className="bg-[#2A1C51] text-white px-8 py-3 rounded-md text-sm hover:bg-[#3b2259] transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

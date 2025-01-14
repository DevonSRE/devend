import eventImgOne from "../../../public/event_one.png";
import eventImgThree from "../../../public/event_three.png";
import eventImgTwo from "../../../public/event_two.png";
import Footer from "../home/footer/page";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div className="flex justify-center text-[#211434] my-8">
        <div className="mt-6 text-center md:max-w-[660px] max-w-[350px]">
          <h2 className="md:text-6xl text-4xl leading-normal font-semibold">
            Your Event,
            <br />
            Our Experise
          </h2>
          <p className="mt-6 text-sm px-4">
            We deliver a complete event management experience by combining
            personalized planning, diverse catering options, and reliable
            logistics, ensuring every client&apos;s dream becomes a reality
            without hassle.
          </p>
        </div>
      </div>

      <div className="bg-[#211434] text-white md:px-36 px-4 py-20">
        <div className="pl-4">
          <h2 className="md:text-3xl text-2xl leading-normal font-semibold mb-10">
            Full-Service Management:
            <br /> Let Us Handle Everything.
          </h2>

          <div className="md:grid grid-cols-2 gap-3">
            <div className="pl-4">
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Wedding Ceremony</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Celebrating a Milestone/Birthday</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Private Party</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Gala Dinners</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Product Launch</p>
              </div>
            </div>
            <div className="pl-4">
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>NGOs Fundraising Events</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Corporate Events</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Conferences</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Gala Dinners</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="bg-[#EDCC19] p-0.5 rotate-90"></div>
                <p>Awareness Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Management */}
      <div className="flex justify-center text-[#211434]">
        <div className="max-w-[920px] my-10 px-4">
          <h2 className="md:text-3xl text-2xl leading-normal font-semibold mb-10">
            Event Management That Works For You
          </h2>

          {/* First Image */}
          <div className="md:flex gap-3 mb-16">
            <Image
              src={eventImgOne}
              alt="An image of a beautifully decorated table with chandeliers"
              className="w-[450px] rounded-md"
            />

            <div className="md:mt-32 mt-8">
              <div className="flex gap-3 mb-3">
                <div className="bg-[#2A1C51] p-0.5"></div>
                <p className="font-semibold text-lg">Events Management</p>
              </div>
              <p className="text-sm">
                We don't just plan events; we craft them. From the ground up, we
                create bespoke experiences with unique lighting, captivating
                décor, and hand-built elements that leave a lasting impression.
                Let's bring your vision to life.
              </p>
              <button className="bg-[#2A1C51] text-white text-sm px-12 py-3 rounded-lg mt-5">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Second Image */}
          <div className="md:flex gap-3 mb-16">
            <div className="md:mt-32 mb-4 md:mb-0">
              <div className="flex gap-3 mb-3">
                <div className="bg-[#DF3836] p-0.5"></div>
                <p className="font-semibold text-lg">Catering Service</p>
              </div>
              <p className="text-sm">
                We collaborate with you to create a customized menu that
                reflects your unique style and preferences. From elegant plated
                dinners to vibrant buffet spreads, we deliver impeccable service
                and unforgettable flavors.
              </p>
              <button className="bg-[#2A1C51] text-white text-sm px-12 py-3 rounded-lg mt-5">
                Get a Quote
              </button>
            </div>

            <Image
              src={eventImgTwo}
              alt="An image of a beautifully decorated table with chandeliers"
              className="w-[450px] rounded-md"
            />
          </div>

          {/* Third Image */}
          <div className="md:flex gap-3 mb-16">
            <Image
              src={eventImgThree}
              alt="An image of a beautifully decorated table with chandeliers"
              className="w-[450px] rounded-md"
            />

            <div className="md:mt-32 mt-8">
              <div className="flex gap-3 mb-3">
                <div className="bg-[#EDCC19] p-0.5"></div>
                <p className="font-semibold text-lg">Logistics Services</p>
              </div>
              <p className="text-sm">
                We understand that every event has unique logistical needs. We
                work closely with you to develop customized solutions, from
                efficient transportation and secure warehousing to on-site
                support and seamless coordination.
              </p>
              <button className="bg-[#2A1C51] text-white text-sm px-12 py-3 rounded-lg mt-5">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

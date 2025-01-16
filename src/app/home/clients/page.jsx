import Image from "next/image";
import coupleImgTwo from "../../../../public/couple_img_two.png";
import Link from "next/link";

const Clients = () => {
  return (
    <>
      <div className="flex justify-center mt-20 text-[#211434] md:px-6 px-4">
        <div className="mt-2 max-w-[1000px]">
          <div className="flex gap-6">
            <div className="">
              <div className="max-w-[300px] mb-4">
                <p className="md:text-3xl text-2xl font-semibold">
                  Hear From Our Happy Clients
                </p>
              </div>

              <div className="border border-[#cccccc] p-5 md:p-8 rounded-xl bg-white relative md:-mr-24 z-10">
                <div className="flex justify-end gap-1">
                  <div className="bg-[#2A1C51] px-5 py-0.5 rounded-lg"></div>
                  <div className="rounded-full bg-[#CCCCCC] p-0.5"></div>
                  <div className="rounded-full bg-[#CCCCCC] p-0.5"></div>
                </div>
                <h4 className="text-lg md:text-2xl font-semibold text-[#211434]">
                  Nothing But Exceptional
                </h4>
                <p className="max-w-[580px] mt-3 text-[#211434]">
                  Working with Devend was an absolute pleasure. From the initial
                  consultation to the final execution, their team was incredibly
                  professional, creative, and attentive to detail. They truly
                  brought our vision for our wedding to life, exceeding our
                  expectations in every way. The food was exceptional, the
                  logistics were seamless, and the overall experience was
                  unforgettable. We highly recommend their services to anyone
                  planning a special event.
                </p>
                <p className="text-left mt-4 font-semibold text-[#211434]">~ Mr & Mrs. Adebayo</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={coupleImgTwo}
                alt="An image of a couple"
                width={600}
                height={100}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      
      </div>

      {/* Experience */}
      <div className="border-t border-[#ccc] my-8"></div>
      
      <div className="flex justify-center text-[#211434] px-4">
        <div className="text-center ">
          <p className="md:text-4xl text-3xl font-semibold">Let's Create an Unforgettable Experience</p>
          <p className="mt-3 text-sm max-w-[650px] text-center">Plan your next event with ease. Our team handles every detail, from delicious catering and seamless logistics to personalized touches that make your celebration truly unforgettable.</p>

          <div className="hidden md:flex justify-center gap-4">
            <Link href="/services">
              <button className="bg-[#FAF7FE] border border-[#211434] text-[#211434] text-sm font-semibold px-10 py-3 rounded-lg mt-5">
                See Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#2A1C51] text-white text-sm px-12 py-3 rounded-lg mt-5">
                Get a Quote
              </button>
            </Link>
          </div>


          {/* Mobile Buttons */}
          <div className="md:hidden">
            <div>
              <Link href="/contact">
                <button className="bg-[#2A1C51] text-white text-sm px-14 py-3 rounded-lg mt-5">
                  Get a Quote
                </button>
              </Link>
            </div>
            <div>
              <Link href="/services">
                <button className="bg-[#FAF7FE] border border-[#211434] text-[#211434] text-sm font-semibold px-10 py-3 rounded-lg mt-5">
                  See Our Services
                </button>
              </Link>
            </div>
          </div>
          

        </div>
      </div>

      <div className="border-t border-[#ccccc] my-8"></div>
    </>
  );
};

export default Clients;

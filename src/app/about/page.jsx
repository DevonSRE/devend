import Image from "next/image";
import groupImg from "../../../public/group_img.png";
import uniqueImg from "../../../public/unique_img.png";
import Footer from "../home/footer/page";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="flex justify-center text-[#211434] mt-8">
        <div className="mt-6 text-center md:max-w-[660px] max-w-[350px]">
          <h2 className="md:text-6xl text-4xl leading-normal font-semibold">
            The Development Endeavours Difference
          </h2>
          <p className="mt-6 text-sm px-4">
            We deliver a complete event management experience by combining
            personalized planning, diverse catering options, and reliable
            logistics, ensuring every client&apos;s dream becomes a reality
            without hassle.
          </p>

          <Image
            src={groupImg}
            alt="A group of people standing and sitting"
            className="my-4"
          />
        </div>
      </div>

      <div className="bg-[#211434] py-6 md:py-10 px-4 text-center flex justify-center mt-4">
        <div>
          <div className="max-w-[900px]">
            <h3 className="text-white text-2xl md:text-4xl">Our Vision</h3>
            <p className="text-[#ccc] my-3 text-sm">
              To be Nigeria&apos;s most trusted and innovative event management
              and catering company, recognized for creating unforgettable
              experiences while delivering excellence in logistics solutions.
            </p>
            <div className="border-t border-[#ccc] my-8"></div>
          </div>

          <div className="max-w-[900px]">
            <h3 className="text-white text-2xl md:text-4xl">Our Mission</h3>
            <p className="text-[#ccc] my-3 text-sm">
              To transform clients&apos; unique ideas into seamless, memorable
              events by offering high-quality catering, cutting-edge event
              planning, and efficient logistics services, while staying ahead of
              industry trends and exceeding expectations.
            </p>
            <div className="border-t border-[#ccc] my-8"></div>
          </div>

          <div className="flex justify-center max-w-[900px] text-[#ccc] my-3">
            <div className="flex gap-10">
              <div className="grid grid-rows gap-4">
                <p className="md:text-[40px] text-[28px] text-2xl font-semibold">
                  200 <span className="text-white">+</span>
                </p>
                <p className="text-sm">Successful Events</p>
              </div>

              <div className="grid grid-rows gap-4">
                <p className="md:text-[40px] text-[28px] text-2xl font-semibold">
                  2 <span className="text-white">+</span>
                </p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>

            <div className="border-t border-[#ccc] my-8"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-[#211434] mt-10">
        <div className="text-center">
          <div className="grid grid-cols-3 my-2">
            <div className="border-t border-[#ccc] mt-2"></div>
            <div className="text-sm">Trusted By</div>
            <div className="border-t border-[#ccc] mt-2"></div>
          </div>

          <div className="flex gap6 my-6 md:space-x-60">
            <div>
              <p className="font-semibold">CORPORATE</p>
              <p>Clients</p>
            </div>

            <div>
              <p className="font-semibold">NON-PROFIT ORGANIZATIONS</p>
              <p>Clients</p>
            </div>

            <div className="hidden md:block">
              <p className="font-semibold">PERSONAL</p>
              <p>Clients</p>
            </div>
          </div>
          <div className="border-t border-[#ccc] my-8"></div>
        </div>
      </div>

      <div className="md:flex justify-center text-[#211434] my-8 px-4">
        <div className="md:flex md:space-x-10">
          <Image
            src={uniqueImg}
            className="mb-10 md:w-2/4 md:mb-0 px-1 md:h-[600px] h-[400px]"
          />

          <div className="md:py-2">
            <h3 className="text-2xl md:text-4xl font-semibold mb-6">
              What Makes Us Unique
            </h3>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">
                Tailored Experience
              </h4>
              <p className="text-sm mt-2">
                Every event reflects the client's unique tastes and preferences.
              </p>
              <div className="border-t border-[#ccc] my-5"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">Customizable Menus</h4>
              <p className="text-sm mt-2">
                Catering solutions crafted to accommodate diverse dietary needs
                and cultural nuances.
              </p>
              <div className="border-t border-[#ccc] my-5"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">
                Tailored Experience
              </h4>
              <p className="text-sm mt-2">
                Every event reflects the client's unique tastes and preferences.
              </p>
              <div className="border-t border-[#ccc] my-5"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">
                Industry Innovation
              </h4>
              <p className="text-sm mt-2">
                We leverage modern trends and technology to enhance the event
                experience.
              </p>
              <div className="border-t border-[#ccc] my-5"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">
                Reliability and Efficiency
              </h4>
              <p className="text-sm mt-2">
                A streamlined approach to logistics ensures everything is
                executed seamlessly.
              </p>
              <div className="border-t border-[#ccc] my-5"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-sm">
                Client-Centered Approach
              </h4>
              <p className="text-sm mt-2">
                {" "}
                Personalized attention and strong relationships remain our
                hallmark.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="border-t border-[#ccc] my-8"></div>

      <div className="flex justify-center text-[#211434]">
        <div className="text-center ">
          <p className="md:text-4xl text-3xl font-semibold">
            Let's Create an Unforgettable Experience
          </p>
          <p className="mt-3 text-sm max-w-[650px] text-center">
            Plan your next event with ease. Our team handles every detail, from
            delicious catering and seamless logistics to personalized touches
            that make your celebration truly unforgettable.
          </p>

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

      <Footer />
    </div>
  );
};

export default About;

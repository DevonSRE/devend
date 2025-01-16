import Link from "next/link";
import storiesImgOne from "../../../public/stories_one.png";
import storiesImgTwo from "../../../public/stories_two.png";
import Footer from "../home/footer/page";
import Image from "next/image";

const Stories = () => {
  return (
    <div>
      <div className="flex justify-center text-[#211434] my-8">
        <div className="mt-6 text-center md:max-w-[660px] max-w-[350px]">
          <h2 className="md:text-6xl text-4xl leading-normal font-semibold">
            Success Stories
          </h2>
          <p className="mt-6 text-sm px-4">
            Discover how DevEnd has helped clients achieve their vision and
            elevate their events.
          </p>
        </div>
      </div>

      <div className="flex justify-center text-[#211434] mt-10">
        <div className="px-4 max-w-[900px]">
          <div className="md:grid grid-cols-2 gap-4">
            <div className="mb-4 md:mb-0">
              <Image src={storiesImgOne} alt="An image of a couple" />
              <p className="mb-4 font-semibold text-lg mt-6">
                Nothing but Execeptional
              </p>
              <p className="text-sm mb-4">
                Working with Devend was an absolute pleasure. From the initial
                consultation to the final execution, their team was incredibly
                professional, creative, and attentive to detail. They truly
                brought our vision for our wedding to life, exceeding our
                expectations in every way. The food was exceptional, the
                logistics were seamless, and the overall experience was
                unforgettable. We highly recommend their services to anyone
                planning a special event.
              </p>
              <p className="mb-1 font-medium">Mr & Mrs. Adebayo</p>
              <p className="text-sm">2023</p>
            </div>

            <div>
              <Image
                src={storiesImgTwo}
                alt="An image of a group of people listening to a TED talk"
              />
              <p className="mb-4 font-semibold text-lg mt-6">Resounding</p>
              <p className="text-sm mb-4">
                TechCon 2024 was a resounding success. The conference was hailed
                as a game-changer in the tech industry, exceeding all
                expectations. DevEnd showed experience, had resources, and
                expertise to handle every aspect of the event, from concept to
                completion.
              </p>
              <p className="mb-1 font-medium">TechCon Conference 2024</p>
              <p className="text-sm">Abuja,2024</p>
            </div>
          </div>

          <div className="md:grid grid-cols-2 gap-4 mt-10">
            <div className="mb-4 md:mb-0">
              <Image src={storiesImgOne} alt="An image of a couple" />
              <p className="mb-4 font-semibold text-lg mt-6">
                Nothing but Execeptional
              </p>
              <p className="text-sm mb-4">
                Working with Devend was an absolute pleasure. From the initial
                consultation to the final execution, their team was incredibly
                professional, creative, and attentive to detail. They truly
                brought our vision for our wedding to life, exceeding our
                expectations in every way. The food was exceptional, the
                logistics were seamless, and the overall experience was
                unforgettable. We highly recommend their services to anyone
                planning a special event.
              </p>
              <p className="mb-1 font-medium">Mr & Mrs. Adebayo</p>
              <p className="text-sm">2023</p>
            </div>

            <div>
              <Image
                src={storiesImgTwo}
                alt="An image of a group of people listening to a TED talk"
              />
              <p className="mb-4 font-semibold text-lg mt-6">Resounding</p>
              <p className="text-sm mb-4">
                TechCon 2024 was a resounding success. The conference was hailed
                as a game-changer in the tech industry, exceeding all
                expectations. DevEnd showed experience, had resources, and
                expertise to handle every aspect of the event, from concept to
                completion.
              </p>
              <p className="mb-1 font-medium">TechCon Conference 2024</p>
              <p className="text-sm">Abuja,2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="border-t border-[#ccc] my-8"></div>

      <div className="flex justify-center text-[#211434] px-4">
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

export default Stories;

import Link from "next/link"
import TestimonialCarousel from "@/app/_component/TestimonialCarousel"

const Clients = () => {
  return (
    <>
      <div className="flex justify-center mt-20 text-[#211434] md:px-6 px-4">
        <div className="mt-2 max-w-[1000px]">
          <div className="flex gap-6">
            <div className="text-center flex flex-col items-center">
              <div className="max-w-fit mb-4">
                <p className="md:text-3xl text-2xl font-semibold text-center">Hear From Our Happy Clients</p>
              </div>
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ccc] my-8" />

      <div className="flex justify-center text-[#211434] px-4">
        <div className="text-center">
          <p className="md:text-4xl text-3xl font-semibold">Let&apos;s Create an Unforgettable Experience</p>
          <p className="mt-3 text-sm max-w-[650px] text-center">Plan your next event with ease. Our team handles every detail, from delicious catering and seamless logistics to personalized touches that make your celebration truly unforgettable.</p>

          <div className="hidden md:flex justify-center gap-4">
            <Link href="/services">
              <button className="bg-[#FAF7FE] border border-[#211434] text-[#211434] text-sm font-semibold px-10 py-3 rounded-lg mt-5">See Our Services</button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#2A1C51] text-white text-sm px-12 py-3 rounded-lg mt-5">Get a Quote</button>
            </Link>
          </div>

          <div className="md:hidden">
            <div>
              <Link href="/contact">
                <button className="bg-[#2A1C51] text-white text-sm px-14 py-3 rounded-lg mt-5">Get a Quote</button>
              </Link>
            </div>
            <div>
              <Link href="/services">
                <button className="bg-[#FAF7FE] border border-[#211434] text-[#211434] text-sm font-semibold px-10 py-3 rounded-lg mt-5">See Our Services</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ccccc] my-8" />
    </>
  )
}

export default Clients

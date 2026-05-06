import Link from "next/link"
import Footer from "../home/footer/page"
import Image from "next/image"
import { testimonials } from "@/lib/constants"

const Stories = () => {
  return (
    <div>
      <div className="flex justify-center text-[#211434] my-8">
        <div className="mt-6 text-center md:max-w-[660px] max-w-[350px]">
          <h2 className="md:text-6xl text-4xl leading-normal font-semibold">Success Stories</h2>
          <p className="mt-6 text-sm px-4">Discover how DevEnd has helped clients achieve their vision and elevate their events.</p>
        </div>
      </div>

      <div className="flex justify-center text-[#211434] my-10">
        <div className="px-4 max-w-[900px]">
          <div className="md:grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((item) => (
              <div className="mb-4 md:mb-0" key={item.id}>
                {item.image && <Image src={item.image} alt={item.author} height={210} width={200} />}
                <p className="mb-4 font-semibold text-lg mt-6">{item.author}</p>
                <p className="text-sm mb-4 italic">{item.quote}</p>
                <p className="mb-1 text-xs">{item.author}</p>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
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
            <div><Link href="/contact"><button className="bg-[#2A1C51] text-white text-sm px-14 py-3 rounded-lg mt-5">Get a Quote</button></Link></div>
            <div><Link href="/services"><button className="bg-[#FAF7FE] border border-[#211434] text-[#211434] text-sm font-semibold px-10 py-3 rounded-lg mt-5">See Our Services</button></Link></div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ccccc] my-8" />
      <Footer />
    </div>
  )
}

export default Stories

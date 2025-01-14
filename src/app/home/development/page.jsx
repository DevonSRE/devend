import Image from 'next/image'
import groupImg from '../../../../public/group_img.png'
import Link from 'next/link';

const Development = () => {
  return (
    <div className=' flex justify-center md:bg-[#211434] md:mt-20 mt-10 geist-font'>
      <div className='md:px-20 relative'>
        <Image src={groupImg} alt='A group of people standing and sitting' className="w-screen h-[600px] object-cover"/>

        {/* Text Overlay */} 
        <div className="absolute inset-0 ml-4 md:ml-20 pt-14 md:pt-10 md:pb-4 md:px-8 px-6 md:max-w-[540px] max-w-[350px] bg-[#211434BF] text-white">
          <h1 className="text-2xl md:text-4xl font-semibold">The Development Endeavours Difference</h1>

          <p className='text-[#cccccc] mt-8 text-sm max-w-[400px] tracking-wide leading-relaxed'>
            We are passionate about creating unforgettable experiences.  We have been a leading event management and catering company in Nigeria, transforming clients' visions into reality. Learn more on how we can help you create an unforgettable experience.
          </p>

          <Link href="/about">
            <button className='px-8 py-3 text-[#211434] bg-[#EDCC19] text-sm font-semibold rounded-md mt-8'>
              Learn More
            </button>
          </Link>

          <div className="border-t border-[#ccccc] my-8"></div>

          <div className='flex gap-10'>
            <div className="grid grid-rows gap-2">
              <p className="md:text-[48px] text-[28px] text-2xl font-semibold">200 +</p>
              <p className="text-sm md:font-medium">Successful Events</p>
            </div>

            <div className="grid grid-rows gap-2">
              <p className="md:text-[48px] text-[28px] text-2xl font-semibold">2 +</p>
              <p className="text-sm md:font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Development;

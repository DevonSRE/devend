import Image from 'next/image';
import tableImg from '../../../../public/table_img.png';
import guestImg from '../../../../public/guest_img.png';
import coupleImg from '../../../../public/couple_img.png';
import mobileTableImg from '../../../../public/mobile_table.png';
import mobileGuestImg from '../../../../public/mobile_guest.png';
import mobileCoupleImg from '../../../../public/mobile_couple.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='text-[#191919] geist-font'>
        <div className='mt-10'>
            <div className='flex justify-center '>
                <div className='mt-6 text-center md:max-w-[800px] max-w-[350px]'>
                    <h2 className='md:text-6xl text-4xl leading-normal font-semibold'>Creating Unforgettable Experiences</h2>
                    <p className='mt-6 text-sm text-[#211434]'>Event Planning & Catering with a Touch of Excellence</p>
                </div>

            </div>
            <div className='flex justify-center mt-4 -mb-8'>
                <Link href="/contact">
                    <button className='text-white text-sm px-14 py-3 bg-[#2A1C51] rounded-md my-6'>
                        Plan My Event
                    </button>
                </Link>
            </div>

            <div className='hidden md:flex gap-5 justify-center'>
                <div>
                    <Image src={tableImg} width={300} height={150} alt="An image of a beautifully decorated table"/>
                </div>
                <div className='mt-14'>
                    <Image src={guestImg} width={300} height={150} alt="A picture of guests in an event"/>
                </div>
                <div>
                    <Image src={coupleImg} width={300} height={150} alt="An image of a happy couple"/>
                </div>
            </div>

        </div>

        {/* Mobile View */}
        <div className='md:hidden flex gap-5 mt-10'>
            <div>
                <Image src={mobileTableImg} width={300} height={150} alt="An image of a beautifully decorated table"/>
            </div>
            <div className='mt-16'>
                <Image src={mobileGuestImg} width={400} height={150} alt="A picture of guests in an event"/>
            </div>
            <div>
                <Image src={mobileCoupleImg} width={300} height={150} alt="An image of a happy couple"/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero;

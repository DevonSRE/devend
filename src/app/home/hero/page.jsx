'use client'
import Image from 'next/image';
import heroImage from '../../../../public/hero-image.png';
import Link from 'next/link';

const Home = () => {
  const services = [
    {
      id: "01",
      name: "Event Management",
      link: "/services/event-management"
    },
    {
      id: "02",
      name: "Logistics Services",
      link: "/services/logistic"
    },
    {
      id: "03",
      name: "Catering Services",
      link: "/services/catering-service"
    }
  ];

  return (
    <div className='text-[#191919] geist-font'>
      <div className='relative'>
        <div className='w-full h-screen md:h-[85vh] lg:h-[90vh] relative'>
          <Image
            src={heroImage}
            alt="Setting the Benchmark for Service Delivery"
            className='object-cover'
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className='absolute inset-0 bg-gradient-to-t from-white from-0% via-white/80 via-40% to-transparent to-70%'></div>

        <div className='absolute bottom-0 left-0 w-full pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-10 lg:px-20'>
          <div className='flex flex-col lg:flex-row justify-between w-full gap-8 md:gap-12'>
            <div className='lg:max-w-[700px] animate-fadeIn'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[rgb(33,20,52)]/90'>
                Setting the Benchmark for Service Delivery
              </h2>
              <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#191919]/80 max-w-[90%]'>
                Experience Excellence in Event Management, Logistics, and Catering.
              </p>

              <div className='mt-6 sm:mt-8'>
                <Link href="/contact">
                  <span className='inline-block text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-5 bg-[#2A1C51] rounded-md hover:bg-[#3c2875] transition-colors'>
                    Book an Appointment
                  </span>
                </Link>
              </div>
            </div>

            <div className='w-full lg:w-96 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg animate-slideUp'>
              <h3 className='font-medium mb-4 text-sm sm:text-base text-[#191919]/70'>Our Services</h3>
              <div className='space-y-4'>
                {services.map((service) => (
                  <div
                    key={service.id}
                    className='border-b border-gray-200 pb-4 group'
                  >
                    <Link
                      href={service.link}
                      className='flex justify-between items-center group-hover:translate-x-1 transition-transform duration-300'
                    >
                      <div className='flex items-center gap-3'>
                        <span className='text-gray-400 text-base sm:text-lg'>{service.id}</span>
                        <span className='text-lg sm:text-xl font-semibold text-black/80'>{service.name}</span>
                      </div>
                      <div className='text-gray-400 text-xl font-bold group-hover:text-black transition-colors duration-300'>
                        →
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

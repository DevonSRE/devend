'use client'
import Image from "next/image";
import groupImg from "../../../public/group_img.png";
import uniqueImg from "../../../public/about-us-cropped.png";
import Footer from "../home/footer/page";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const executives = [
    {
      id: 1,
      name: "Olivia Christian",
      title: "Co-Founder & CEO",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-1.png"
    },
    {
      id: 2,
      name: "Michael Warren",
      title: "Co-Founder & COO",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-2.png"
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      title: "Director of Events",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-4.png"
    },
    {
      id: 4,
      name: "David Chen",
      title: "Head of Logistics",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-3.png"
    },
    {
      id: 5,
      name: "Amara Johnson",
      title: "Creative Director",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-1.png"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Finance Director",
      description: "A well detailed information about the executive, possible active role in the company.",
      image: "/exec-5.png"
    }
  ];

  return (
    <div>
      <div className="flex justify-center text-[#211434] mt-8">
        <div className="mt-6 pt-6 pb-16 text-center md:max-w-[660px] max-w-[350px]">
          <h2 className="md:text-6xl text-4xl leading-normal font-semibold">
            The Development Endeavours Difference
          </h2>
          <p className="mt-6 text-sm px-4">
            We deliver a complete event management experience by combining
            personalized planning, diverse catering options, and reliable
            logistics, ensuring every client&apos;s dream becomes a reality
            without hassle.
          </p>
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

      <div className="flex justify-center text-[#211434] my-10">
        <div className="text-center">
          <div className="text-center w-full">
            <div className="text-sm font-serif">Trusted By</div>
          </div>

          <div className="flex gap-6 px-6 my-6 md:space-x-60">
            <div>
              <p className="font-semibold text-lg font-serif">CORPORATE</p>
              <p>Clients</p>
            </div>

            <div>
              <p className="font-semibold text-lg font-serif">NON-PROFIT ORGANIZATIONS</p>
              <p>Clients</p>
            </div>

            <div className="hidden md:block">
              <p className="font-semibold text-lg font-serif">PERSONAL</p>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center text-[#211434] my-8 px-4">
        <div className="md:flex md:space-x-10">
          <div className="mb-10 md:w- md:mb-0 px-1 md:h-[600px] h-[400px] overflow-hidden">
            <Image
              src={uniqueImg}
              alt="An image of a beautifully decorated table"
              className="object-cover w-full h-full rounded-md"
              width={800}
              height={600}
            />
          </div>

          <div className="md:py-2 space-y-5  flex flex-col">
            <h3 className="text-2xl md:text-4xl font-semibold mb-2">
              What Makes Us Unique
            </h3>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">
                Tailored Experience
              </h4>
              <p className="text-sm mt-2">
                Every event reflects the client's unique tastes and preferences.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Customizable Menus</h4>
              <p className="text-sm mt-2">
                Catering solutions crafted to accommodate diverse dietary needs
                and cultural nuances.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">
                Tailored Experience
              </h4>
              <p className="text-sm mt-2">
                Every event reflects the client's unique tastes and preferences.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">
                Industry Innovation
              </h4>
              <p className="text-sm mt-2">
                We leverage modern trends and technology to enhance the event
                experience.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">
                Reliability and Efficiency
              </h4>
              <p className="text-sm mt-2">
                A streamlined approach to logistics ensures everything is
                executed seamlessly.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">
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

      {/* Executives Section */}
      <div className="py-16 px-4 md:px-10">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#211434] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Executive Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {executives.map((exec, index) => (
              <motion.div
                key={exec.id}
                className="relative group overflow-hidden rounded-xl h-96"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={exec.image}
                  alt={exec.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(33,20,52,0.8)] to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{exec.name}</h3>
                    <p className="text-white/90 text-sm mt-1">{exec.title}</p>
                    <p className="text-white/70 text-xs line-clamp-2 mt-2">{exec.description}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#2A1C51] flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{exec.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{exec.title}</p>
                  <p className="text-white/80 text-sm max-w-xs text-center mb-6 px-4">{exec.description}</p>

                  <div className="flex space-x-6">
                    <motion.a
                      href="#"
                      className="text-white hover:text-white/80"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7Z"></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-white/80"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-white hover:text-white/80"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64532 15.4065 6.18639 16.6159 8.0199 16.6491C6.53953 17.8118 4.70211 18.4426 2.82239 18.4399C2.49411 18.4399 2.16466 18.4218 1.84062 18.3845C3.69614 19.6209 5.9085 20.2727 8.18933 20.269C15.9323 20.269 20.1396 13.8866 20.1396 8.36111C20.1396 8.1803 20.1353 7.9995 20.1278 7.82208C20.9563 7.2225 21.6518 6.48048 22.2125 5.65605Z"></path>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

export default About;

'use client'

import { useRef, useState } from "react"
import Image from "next/image"
import uniqueImg from "../../../public/about-us-cropped.png"
import Footer from "../home/footer/page"
import Link from "next/link"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BoardMember {
  id: string
  imageUrl: string
  name: string
  designation: string
  description: string
}

interface TeamMember extends BoardMember {
  socialLinks: {
    linkedin: string
  }
}

const boardMembers: BoardMember[] = [
  {
    id: '1',
    imageUrl: '/images/board/chairman.png',
    name: 'Chibuzor Ekwekwo',
    designation: 'Board Chairman',
    description: 'Chibuzor Ekwekwo is a legal professional with over 24 years of experience spanning litigation, corporate law, and legal consultancy. In the last decade, he has focused on regulatory reforms, corporate management, and institutional development, working with international agencies, governments, private firms, and civil society organizations in Nigeria. He holds an MBA in Management, a Postgraduate Degree in Anti-Corruption Studies, and an MSc in Public Procurement Management for Sustainable Development from the University of Turin, Italy. He is also an American Certified PPP Practitioner and serves on the Governing Board of Rhema University, operating primarily from Abuja.',
  },
  {
    id: '2',
    imageUrl: '/images/board/member.png',
    name: 'Obiora Chukwumba',
    designation: 'Board Member',
    description: 'Obiora Chukwumba is a seasoned and versatile media professional with a strong track record in newspaper and magazine production, wire reporting, broadcast content creation, and file regulation. He began his media career with African Concord and has since built a diverse portfolio across multiple media platforms. Obiora holds a Mass Communication degree from the Institute of Management and Technology (IMT), Enugu, an M.Sc in Mass Communication from Benue State University, Makurdi, and a PhD in Media Arts from the University of Abuja.',
  },
  {
    id: '3',
    imageUrl: '/images/board/director.jpg',
    name: 'Lucy James Abagi',
    designation: 'Board Director & Chief Executive Officer (PPDC)',
    description: 'Lucy James Abagi is the Board Director and Chief Executive Officer of the Public and Private Development Centre (PPDC), where she provides visionary leadership to advance governance, transparency, and accountability across Africa. Before becoming CEO, she served as Director of Partnerships and Innovation, strengthening strategic collaborations across sectors and leading teams in business development, innovation, and technology. Her extensive background in program development, stakeholder engagement, and strategic partnerships has been vital in expanding PPDC\'s reach and impact. Prior to joining PPDC, Lucy was the Director of Programs at Connected Development (CODE), where she led the Follow the Money campaign, mobilizing $5 million in donor funding and positively impacting over 4 million lives in rural communities across nine African countries. She holds an MBA and brings deep expertise in managing large-scale initiatives, driving donor-funded programs, and implementing accountability systems. Lucy remains committed to fostering sustainable development and social impact across the continent.',
  }
]

const team: TeamMember[] = [
  {
    id: '1',
    imageUrl: '/images/team/ify.png',
    name: 'Ifunanya Okeke Esq',
    designation: 'CEO Development Endeavours',
    description: 'Ifunanya Okeke is a law graduate from Babcock University, Ogun State, with a diploma in Criminology and Security Studies. She is an associate of the Chartered Institute of Arbitrators UK - Nigeria and the Institute of Chartered Secretaries and Administrators. She is also trained by the United Nations Office on Drugs and Crime (UNODC).',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/ifunanya-okeke/' },
  },
  {
    id: '2',
    imageUrl: '/images/team/meshach.jpg',
    name: 'Meshach Auta Bulusson',
    designation: 'ACA, BSc, Head of Finance',
    description: 'Meshach Auta Bulusson is a first-class graduate from Federal University Dutsinma, with a strong academic foundation in accounting and finance. He is an Associate Chartered Accountant (ACA), committed to continuous professional development and excellence in the financial sector.',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/meshach-bulusson-aca' },
  },
  {
    id: '3',
    imageUrl: '/images/team/vivian.jpg',
    name: 'Vivian Daniel-Nwaoriara',
    designation: 'ACIPM, BSc, Head of Human Resources',
    description: 'Vivian Daniel-Nwaorisara holds a Bachelor of Science degree in Business Management from the Rivers State University of Science and Technology. With a professional commitment to growth and excellence, she is a dedicated member of the Chartered Institute of Personnel Management (CIPM).',
    socialLinks: { linkedin: 'http://linkedin.com/in/vivian-nwaorisara' },
  },
  {
    id: '4',
    imageUrl: '/images/team/sonia.jpg',
    name: 'Sonia Yusuf',
    designation: 'Head of Program/Event',
    description: 'Sonia Yusuf is a dynamic and results-oriented development professional with over 8 years of experience in grant writing, program management, project implementation, and event coordination. Her career is rooted in driving social impact through innovative, well-structured programs and partnerships.',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/sonia-yusuf-867ba4123/' },
  },
  {
    id: '5',
    imageUrl: '/images/team/shedrach.jpg',
    name: 'John Shedrach',
    designation: 'Head of Logistics',
    description: 'John Shedrach Tukura is a seasoned transport and logistics professional with over a decade of experience supporting public, private, and nonprofit organizations. He is known for his calm, efficient, and strategic approach to logistics operations.',
    socialLinks: { linkedin: 'https://www.linkedin.com/in/shedrack-john-25b7ab271/' },
  }
]

const About = () => {
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
          <div className="mb-10 md:mb-0 px-1 md:h-[600px] h-[400px] overflow-hidden">
            <Image
              src={uniqueImg}
              alt="An image of a beautifully decorated table"
              className="object-cover w-full h-full rounded-md"
              width={800}
              height={600}
            />
          </div>

          <div className="md:py-2 space-y-5 flex flex-col">
            <h3 className="text-2xl md:text-4xl font-semibold mb-2">
              What Makes Us Unique
            </h3>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Tailored Experience</h4>
              <p className="text-sm mt-2">Every event reflects the client&apos;s unique tastes and preferences.</p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Customizable Menus</h4>
              <p className="text-sm mt-2">
                Catering solutions crafted to accommodate diverse dietary needs and cultural nuances.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Tailored Experience</h4>
              <p className="text-sm mt-2">Every event reflects the client&apos;s unique tastes and preferences.</p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Industry Innovation</h4>
              <p className="text-sm mt-2">
                We leverage modern trends and technology to enhance the event experience.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Reliability and Efficiency</h4>
              <p className="text-sm mt-2">
                A streamlined approach to logistics ensures everything is executed seamlessly.
              </p>
              <div className="border-t border-[#ccc] my-2"></div>
            </div>

            <div className="text-left">
              <h4 className="mb-1 font-semibold text-lg">Client-Centered Approach</h4>
              <p className="text-sm mt-2">
                Personalized attention and strong relationships remain our hallmark.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Board of Directors */}
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
            Meet our Board of Directors
          </motion.h2>

          <div className="w-full max-w-6xl mx-auto">
            <BoardMembersList cards={boardMembers} />
          </div>
        </motion.div>
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

          <TeamMembersList cards={team} />
        </motion.div>
      </div>

      <div className="border-t border-[#ccc] my-8"></div>

      <div className="flex justify-center text-[#211434] px-4">
        <div className="text-center">
          <p className="md:text-4xl text-3xl font-semibold">
            Let&apos;s Create an Unforgettable Experience
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
  )
}

export default About


const TeamMembersList = ({ cards }: { cards: TeamMember[] }) => {
  const [selectedCard, setSelectedCard] = useState<TeamMember | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleCardClick = (card?: TeamMember) => {
    if (card) {
      setSelectedCard(card)
      dialogRef.current?.showModal()
    } else {
      setSelectedCard(null)
      dialogRef.current?.close()
    }
  }

  return (
    <div className="gap-6 justify-center flex flex-wrap w-full overflow-hidden">
      {cards.map((card) => (
        <Card
          key={card.id}
          className={cn("w-96 border-none shadow-none", "group hover:bg-brand", "transition-all")}
          onClick={() => handleCardClick(card)}
        >
          <CardContent className="p-6">
            <div className="rounded-md overflow-hidden h-[372px] w-full">
              <Image
                src={card.imageUrl}
                alt={card.name}
                height={200}
                width={100}
                className={cn("transition-all duration-200", "w-full h-full object-center object-cover", "group-hover:scale-105")}
              />
            </div>
          </CardContent>

          <CardFooter className="group-hover:text-white transition-all flex flex-col gap-2 items-start">
            <div>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription className="group-hover:text-white text-base">{card.designation}</CardDescription>
            </div>
            <div className="text-white text-sm group-hover:text-brand-light font-medium flex items-center gap-2">
              Read More <ArrowRightIcon size={16} />
            </div>
          </CardFooter>
        </Card>
      ))}

      <dialog
        ref={dialogRef}
        className={cn(
          "bg-white rounded-lg overflow-hidden relative py-16 px-8",
          "fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
          "w-[80%] max-w-[900px] h-[90%] max-h-[520px]",
        )}
      >
        <Button
          title="close"
          size="icon"
          variant="ghost"
          className="absolute top-4 right-6"
          onClick={() => handleCardClick()}
        >
          <XIcon size={18} />
        </Button>

        <div className="w-full h-full flex gap-8">
          <Card className={cn("border-none shadow-none", "w-64")}>
            <CardContent className="p-0 pb-6">
              <div className="rounded-md overflow-hidden h-72 w-full">
                {selectedCard && (
                  <Image
                    src={selectedCard.imageUrl}
                    alt={selectedCard.name}
                    height={200}
                    width={100}
                    className={cn("transition-all duration-200", "w-full h-full object-center object-cover")}
                  />
                )}
              </div>
            </CardContent>

            <CardFooter className="p-0 group-hover:text-white transition-all flex flex-col gap-2 items-start">
              <div>
                <CardTitle className="text-lg">{selectedCard?.name}</CardTitle>
                <CardDescription className="group-hover:text-white text-base">{selectedCard?.designation}</CardDescription>
              </div>
              <div className="text-brand text-sm group-hover:text-brand-light font-medium flex items-center gap-2">
                <a target="_blank" href={selectedCard?.socialLinks.linkedin}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg>
                </a>
              </div>
            </CardFooter>
          </Card>

          <div className="flex-1 h-full w-full flex flex-col gap-6">
            <p className="text-xl text-neutral-500 font-semibold capitalize">Background &amp; Education</p>
            <p className="text-sm text-start">{selectedCard?.description}</p>
          </div>
        </div>
      </dialog>
    </div>
  )
}


const BoardMembersList = ({ cards }: { cards: BoardMember[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  const variants: Variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -20 },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  }

  const textContentVariants = {
    visible: {
      minWidth: '180px',
      rotate: '-90deg',
      position: 'absolute' as const,
      bottom: '60px',
      left: -45,
      transition: { duration: 0.2 },
    },
    hidden: {
      maxWidth: '100%',
      rotate: '0deg',
      transition: { duration: 0.2 },
    },
  }

  const textVariants = {
    visible: { width: '100%', whiteSpace: 'wrap' as const },
    hidden: { width: '100%', whiteSpace: 'normal' as const },
  }

  return (
    <div className="gap-6 justify-between flex w-full overflow-hidden">
      {cards.map((card) => {
        const isActive = activeId === card.id
        return (
          <Card
            key={card.id}
            className={cn(
              "relative transition-all duration-300 ease-in-out cursor-pointer group",
              "border-0 shadow-none",
              isActive ? "w-[70%]" : activeId ? "w-[15%]" : "w-[100%]",
              "h-[400px] overflow-hidden",
            )}
            onClick={() => toggleCard(card.id)}
          >
            <Card
              className={cn(
                "transition-all w-[370px] h-[400px]",
                "overflow-hidden relative",
                "border-none shadow-none",
                "before:absolute before:bg-gradient-to-b before:from-black/30 before:to-black/70 before:z-10",
                "before:top-0 before:left-0 before:right-0 before:bottom-0 before:h-50 before:w-50",
              )}
            >
              <Image
                src={card.imageUrl}
                alt={card.name}
                height={200}
                width={100}
                className={cn("inset-0 w-full h-full object-cover", !isActive && "absolute")}
              />
            </Card>

            <motion.div
              variants={textContentVariants}
              animate={activeId ? (isActive ? "hidden" : "visible") : "hidden"}
              className={cn("absolute bottom-2 left-2 text-white p-2 rounded z-20")}
            >
              <motion.div variants={textVariants} className="font-bold">{card.name}</motion.div>
              <motion.div variants={textVariants} className="text-sm">{card.designation}</motion.div>
            </motion.div>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="modal"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 1 }}
                  className="absolute top-0 right-0 w-[400px] h-full bg-white shadow-xl z-10 p-4 overflow-auto text-justify"
                >
                  <p className="text-sm text-gray-700">{card.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        )
      })}
    </div>
  )
}

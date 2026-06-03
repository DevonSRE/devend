"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CategoryImages } from "./getBrandImages";

interface BrandClientProps {
  categories: CategoryImages[];
}

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const BRAND_VALUES = [
  {
    title: "Clear Identity",
    description:
      "The brand is easy to recognise and holds together well across different materials.",
  },
  {
    title: "Practical Use",
    description:
      "These pieces are designed for real use on shirts, campaign items, and public-facing materials.",
  },
  {
    title: "Room to Grow",
    description:
      "The direction is simple enough to stay consistent and flexible enough to grow over time.",
  },
];

const BRAND_SERVICES = [
  "Identity application",
  "Campaign materials",
  "Branded apparel",
  "Presentation mockups",
];

const INITIAL_FORM: FormState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};

const ENQUIRY_EMAIL = "info@dev-end.org";
const ENQUIRY_PHONES = ["0803 493 8139"];

function getImageLabel(image: string) {
  return image
    .replace(/\.[a-zA-Z]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface ImageGridItem {
  category: string;
  filename: string;
}

interface ImageGridProps {
  items: ImageGridItem[];
  cart: (ImageGridItem & { quantity: number })[];
  onToggleCart: (item: ImageGridItem, e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ImageGrid({ items, cart, onToggleCart }: ImageGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const isInCart = cart.some(
          (cartItem) => cartItem.category === item.category && cartItem.filename === item.filename
        );
        return (
          <motion.div
            key={`${item.category}/${item.filename}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Math.min((index % 3) * 0.04, 0.12) }}
            whileHover={{ y: -6 }}
            className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#211434]/5 hover:border-transparent bg-white shadow-[0_10px_35px_-10px_rgba(33,20,52,0.03)] hover:shadow-[0_25px_60px_-15px_rgba(33,20,52,0.12)] transition-all duration-300 cursor-pointer"
          >
            <div className="p-4 pb-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#F7F2E7]">
                <Image
                  src={`/brand/${item.category}/${item.filename}`}
                  alt={getImageLabel(item.filename)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority={index < 3}
                />
              </div>
            </div>
            <div className="flex flex-grow flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1C51]/55">
                    {capitalize(item.category)}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#EDCC19]/15 px-3 py-0.5 text-xs font-bold text-[#2A1C51]">
                    Mockup
                  </span>
                </div>
                <h3 className="mt-3.5 text-base font-semibold leading-snug text-[#211434]">
                  {getImageLabel(item.filename)}
                </h3>
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t border-[#211434]/5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-semibold text-[#211434]/50">
                    Status
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="inline-flex items-center text-xs font-bold text-emerald-600">
                      In Stock
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => onToggleCart(item, e)}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 md:py-2.5 text-xs font-bold transition-all duration-300 ${
                    isInCart
                      ? "bg-[#EDCC19] text-[#211434] border border-[#EDCC19] hover:bg-[#d8b813]"
                      : "bg-[#2A1C51] text-white border border-[#2A1C51] hover:bg-[#3B2259] active:scale-95 shadow-[0_4px_12px_rgba(42,28,81,0.1)] hover:shadow-[0_8px_20px_rgba(42,28,81,0.25)]"
                  }`}
                >
                  {isInCart ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.116 60.116 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  all: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 transition-transform group-hover:scale-110 shrink-0">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  cups: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 transition-transform group-hover:scale-110 shrink-0">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  notebooks: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 transition-transform group-hover:scale-110 shrink-0">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
      <path d="M6 14h10" />
    </svg>
  ),
  shirts: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 transition-transform group-hover:scale-110 shrink-0">
      <path d="M20.38 3.46L16 6.14V2H8v4.14L3.62 3.46a2 2 0 0 0-2.71.83l-1.3 2.25a2 2 0 0 0 .81 2.7l3.6 2.16v8.6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.6l3.6-2.16a2 2 0 0 0 .81-2.7l-1.3-2.25a2 2 0 0 0-2.71-.83z" />
    </svg>
  )
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BrandClient({ categories }: BrandClientProps) {
  const allImages = categories.flatMap((cat) =>
    cat.images.map((filename) => ({ category: cat.category, filename }))
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [cart, setCart] = useState<(ImageGridItem & { quantity: number })[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [flyingItems, setFlyingItems] = useState<{ id: string; src: string; startX: number; startY: number }[]>([]);

  const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  function toggleCart(item: ImageGridItem, e?: React.MouseEvent<HTMLButtonElement>) {
    let startX = 0;
    let startY = 0;
    let hasCoords = false;

    if (e) {
      const rect = e.currentTarget.closest(".group")?.querySelector("img")?.getBoundingClientRect();
      startX = rect ? rect.left + rect.width / 2 : e.clientX;
      startY = rect ? rect.top + rect.height / 2 : e.clientY;
      hasCoords = true;
    }

    setCart((current) => {
      const exists = current.some(
        (i) => i.category === item.category && i.filename === item.filename
      );
      if (exists) {
        return current.filter(
          (i) => !(i.category === item.category && i.filename === item.filename)
        );
      } else {
        if (hasCoords) {
          const id = Math.random().toString(36).substring(2, 9);
          setFlyingItems((prev) => [
            ...prev,
            {
              id,
              src: `/brand/${item.category}/${item.filename}`,
              startX,
              startY,
            },
          ]);
          setTimeout(() => {
            setFlyingItems((prev) => prev.filter((f) => f.id !== id));
          }, 800);
        }
        return [...current, { ...item, quantity: 1 }];
      }
    });
  }

  function updateQuantity(item: ImageGridItem, delta: number) {
    setCart((current) =>
      current
        .map((i) => {
          if (i.category === item.category && i.filename === item.filename) {
            return { ...i, quantity: i.quantity + delta };
          }
          return i;
        })
        .filter((i) => i.quantity > 0)
    );
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          message: form.message,
          service: "Gov-Shop Hub",
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json().catch(() => null);
        throw new Error(
          errorResponse?.error || "Failed to send your enquiry. Please try again."
        );
      }

      setSuccess(true);
      setForm(INITIAL_FORM);
      toast.success("Enquiry sent successfully.");

      window.setTimeout(() => {
        setModalOpen(false);
        setSuccess(false);
      }, 1800);
    } catch (error) {
      toast.error("Failed to send enquiry.", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFCF4] text-[#211434]">
      <section className="relative overflow-hidden border-b border-[#211434]/10 bg-[linear-gradient(180deg,_#fffef9_0%,_#fff8ea_100%)] py-16 md:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(237,204,25,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(42,28,81,0.14),_transparent_34%)]" />
        <div className="absolute -left-16 top-28 h-40 w-40 rounded-full bg-[#EDCC19]/20 blur-3xl" />
        <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-[#2A1C51]/10 blur-3xl" />

        {/* Curved Background Collage Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-[2/1] z-0 overflow-hidden rounded-t-full pointer-events-none select-none bg-gradient-to-t from-[#EDCC19]/10 via-[#F7F2E7]/30 to-transparent shadow-[0_-15px_35px_-15px_rgba(237,204,25,0.15)]">
          <div className="grid h-full grid-cols-4 grid-rows-2 gap-1.5 p-1.5">
            {[
              "/brand/shirts/Mockup shirts - justice no be privilege blue.png",
              "/brand/cups/Mockup cups - beta life by design.png",
              "/brand/notebooks/Mockup notebooks - think. act. change..png",
              "/brand/shirts/Mockup SHirts-Accountability_White_ Roundneck.jpg",
              "/brand/shirts/Mockup SHirts-Accountability_Black_ Roundneck.jpg",
              "/brand/cups/Mockup cups - built different!.png",
              "/brand/notebooks/Mockup notebooks - ideas change system.png",
              "/brand/shirts/Mockup shirts - beta life by design.png",
            ].map((src, index) => {
              const isCenter = index === 1 || index === 2 || index === 5 || index === 6;
              if (isCenter) {
                return <div key={`empty-${index}`} className="w-full h-full" />;
              }
              return (
                <div key={src} className="relative w-full h-full overflow-hidden rounded-lg bg-white border border-[#211434]/5 pointer-events-auto opacity-[0.05] md:opacity-[0.14] hover:opacity-[0.8] transition-all duration-300 hover:scale-[1.04] cursor-pointer shadow-sm">
                  <Image
                    src={src}
                    alt={`Mockup Background ${index + 1}`}
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 w-full lg:px-40 px-6 mx-auto text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#2A1C51]/70 justify-center">
            <span className="inline-block h-px w-10 bg-[#EDCC19]" />
            Gov-Shop Hub Collection
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#211434]">
            Gov-Shop Hub
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base leading-7 text-[#211434]/75 md:text-lg">
            Explore and acquire our official Gov-Shop Hub branded assets and campaign merchandise. Add items directly to your enquiry cart to proceed with booking or purchase enquiries.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-[#2A1C51] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#3B2259] hover:scale-105 active:scale-95"
            >
              Direct Enquiry
            </button>
            <a
              href="#visual-library"
              className="rounded-full border border-[#211434]/15 bg-white px-8 py-3.5 text-sm font-semibold text-[#211434] transition-all hover:border-[#211434]/30 hover:bg-[#FFF6DD] hover:scale-105 active:scale-95"
            >
              Browse Collection
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EDCC19] text-[#211434] py-8 border-b border-[#211434]/10">
        <div className="w-full lg:px-40 px-6 mx-auto">
          <div className="grid gap-x-4 gap-y-6 grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-[#211434] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6">
                  <rect x="2" y="3" width="15" height="13" rx="2" />
                  <polygon points="17 8 22 8 22 13 17 13 17 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">Affordable Delivery</h4>
                <p className="text-[10px] sm:text-xs text-[#211434]/80 mt-0.5 leading-snug">Reliable & cost-effective logistics</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-[#211434] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6">
                  <path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18-3H3m18 3H3m10 4h-4a2 2 0 0 0-2 2v2m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">Premium Quality</h4>
                <p className="text-[10px] sm:text-xs text-[#211434]/80 mt-0.5 leading-snug">Top-tier materials and printing</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-[#211434] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6">
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                  <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
                  <path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6h-4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">Secure Payment</h4>
                <p className="text-[10px] sm:text-xs text-[#211434]/80 mt-0.5 leading-snug">Safe and verified checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20 text-[#211434] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 sm:h-6 sm:w-6">
                  <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 7.4 3.2M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">Direct Support</h4>
                <p className="text-[10px] sm:text-xs text-[#211434]/80 mt-0.5 leading-snug">Direct helpline and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visual-library" className="w-full lg:px-40 px-6 mx-auto py-14 md:py-20">
        {allImages.length > 0 ? (
          <Tabs defaultValue="all">
            <TabsList className="mb-8 md:mb-12 flex items-center justify-start md:justify-center gap-3 bg-transparent p-0 w-full h-auto overflow-x-auto scrollbar-none flex-nowrap -mx-6 px-6 md:mx-0 md:px-0">
              <TabsTrigger
                value="all"
                onClick={(e) => e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })}
                className="group rounded-full bg-white px-5 py-3 md:px-10 md:py-4 text-sm md:text-lg font-bold tracking-wide text-[#211434] data-[state=active]:bg-[#2A1C51] data-[state=active]:text-white transition-all duration-300 hover:bg-[#EDCC19]/25 hover:text-[#2A1C51] hover:scale-[1.03] active:scale-95 shadow-sm data-[state=active]:shadow-md data-[state=active]:shadow-[#2A1C51]/15 inline-flex items-center gap-2 shrink-0"
              >
                {categoryIcons.all}
                <span>All</span>
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-[#EDCC19]/30 px-2.5 py-0.5 text-xs md:text-sm font-bold text-[#2A1C51] group-data-[state=active]:bg-white/20 group-data-[state=active]:text-white">
                  {allImages.length}
                </span>
              </TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.category}
                  value={cat.category}
                  onClick={(e) => e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })}
                  className="group rounded-full bg-white px-5 py-3 md:px-10 md:py-4 text-sm md:text-lg font-bold tracking-wide text-[#211434] data-[state=active]:bg-[#2A1C51] data-[state=active]:text-white transition-all duration-300 hover:bg-[#EDCC19]/25 hover:text-[#2A1C51] hover:scale-[1.03] active:scale-95 shadow-sm data-[state=active]:shadow-md data-[state=active]:shadow-[#2A1C51]/15 inline-flex items-center gap-2 shrink-0"
                >
                  {categoryIcons[cat.category.toLowerCase()]}
                  <span>{capitalize(cat.category)}</span>
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-[#EDCC19]/30 px-2.5 py-0.5 text-xs md:text-sm font-bold text-[#2A1C51] group-data-[state=active]:bg-white/20 group-data-[state=active]:text-white">
                    {cat.images.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <ImageGrid items={allImages} cart={cart} onToggleCart={toggleCart} />
            </TabsContent>

            {categories.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <ImageGrid
                  items={cat.images.map((filename) => ({ category: cat.category, filename }))}
                  cart={cart}
                  onToggleCart={toggleCart}
                />
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="rounded-[28px] border border-dashed border-[#211434]/20 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold">No brand images found yet.</p>
            <p className="mt-3 text-sm text-[#211434]/65">
              Add image files to subdirectories inside <code>public/brand</code> and they will appear here automatically.
            </p>
          </div>
        )}
      </section>

        <section className="bg-[#211434] py-14 text-white md:py-20">
          <div className="w-full lg:px-40 px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                  A Closer Look
                </p>
                <h2 className="mt-3.5 text-2xl font-bold leading-tight md:text-3xl text-white">
                  What stands out in the work
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                  The strongest part of the Gov-Shop Hub materials is that they
                  stay readable, direct, and easy to recognise. Even on simple
                  merchandise pieces, the identity still feels steady and clear.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                {BRAND_VALUES.map((value) => (
                  <div key={value.title} className="flex flex-col">
                    <div className="mb-4 h-0.5 w-10 bg-[#EDCC19]" />
                    <h3 className="text-lg font-bold text-white tracking-wide">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full lg:px-40 px-6 mx-auto py-16 md:py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2A1C51]/60">
              Contact
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#211434]">
              Need more information?
            </h2>
            <p className="mt-4 text-sm md:text-base leading-7 text-[#211434]/70">
              If you have a question about Gov-Shop Hub, contact the team directly. Send an email to{" "}
              <a className="font-bold text-[#2A1C51] hover:underline" href={`mailto:${ENQUIRY_EMAIL}`}>
                {ENQUIRY_EMAIL}
              </a>{" "}
              or call us at{" "}
              <a className="font-bold text-[#2A1C51] hover:underline" href={`tel:${ENQUIRY_PHONES[0].replace(/[^\d+]/g, "")}`}>
                {ENQUIRY_PHONES[0]}
              </a>.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="rounded-full bg-[#2A1C51] px-10 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(42,28,81,0.15)] hover:shadow-[0_18px_40px_rgba(42,28,81,0.3)] hover:-translate-y-0.5 hover:bg-[#3B2259] active:scale-98 transition-all duration-300"
              >
                Open Enquiry Form
              </button>
            </div>
          </div>
        </section>

      {modalOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[#211434]/55 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-xl rounded-[28px] border border-[#211434]/10 bg-[#FFFCF4] p-6 shadow-[0_40px_100px_-50px_rgba(33,20,52,0.65)] md:p-8 my-auto">
              <div className="flex items-start justify-between gap-6 border-b border-[#211434]/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2A1C51]/55">
                    Gov-Shop Hub Enquiry
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#211434]">
                    Send an enquiry
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#211434]/70">
                    Use the form below or contact the team directly at{" "}
                    <a
                      href={`mailto:${ENQUIRY_EMAIL}`}
                      className="font-semibold text-[#2A1C51]"
                    >
                      {ENQUIRY_EMAIL}
                    </a>
                    . You can also call{" "}
                    <a
                      href={`tel:${ENQUIRY_PHONES[0].replace(/[^\d+]/g, "")}`}
                      className="font-semibold text-[#2A1C51]"
                    >
                      {ENQUIRY_PHONES[0]}
                    </a>{" "}
                    if that is easier.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="rounded-full bg-white p-2 text-[#211434] shadow-sm hover:shadow hover:bg-[#FFF6DD] active:scale-95 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              {success ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDCC19]/25 text-[#2A1C51]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="mt-5 text-xl font-semibold text-[#211434]">
                    Enquiry received
                  </p>
                  <p className="mt-2 text-sm text-[#211434]/65">
                    Thank you. Someone will respond shortly.
                  </p>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="firstname"
                      required
                      placeholder="First name"
                      value={form.firstname}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-base md:text-sm text-[#211434] outline-none transition focus:border-[#2A1C51] focus:ring-1 focus:ring-[#2A1C51]"
                    />
                    <input
                      type="text"
                      name="lastname"
                      required
                      placeholder="Last name"
                      value={form.lastname}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-base md:text-sm text-[#211434] outline-none transition focus:border-[#2A1C51] focus:ring-1 focus:ring-[#2A1C51]"
                    />
                  </div>

                  <div className="grid gap-4">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-base md:text-sm text-[#211434] outline-none transition focus:border-[#2A1C51] focus:ring-1 focus:ring-[#2A1C51]"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-base md:text-sm text-[#211434] outline-none transition focus:border-[#2A1C51] focus:ring-1 focus:ring-[#2A1C51]"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#2A1C51] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B2259]"
                  >
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </>
      )}

      {cart.length > 0 && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="fixed bottom-[92px] right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#2A1C51] px-5 py-3 md:px-6 md:py-3.5 text-white shadow-[0_20px_40px_rgba(42,28,81,0.25)] hover:shadow-[0_25px_50px_rgba(42,28,81,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#3B2259]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="h-5 w-5 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.116 60.116 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="text-sm font-bold tracking-wide">Enquiry Cart</span>
          <span className="flex h-5.5 min-w-[22px] items-center justify-center rounded-full bg-[#EDCC19] px-1.5 text-xs font-black text-[#211434]">
            {totalQuantity}
          </span>
        </button>
      )}

      {cartOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-[#211434]/55 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 md:inset-y-4 md:right-4 z-50 flex w-full md:max-w-[390px] flex-col rounded-none md:rounded-3xl bg-[#FFFCF4] shadow-[0_30px_100px_rgba(33,20,52,0.22)] border-l md:border border-[#211434]/5 transition-all duration-300 animate-in slide-in-from-right">
            <div className="flex items-center justify-between border-b border-[#211434]/5 p-6">
              <div>
                <h3 className="text-xl font-bold text-[#211434]">Enquiry Cart</h3>
                <p className="text-xs text-[#211434]/60">
                  {totalQuantity} {totalQuantity === 1 ? "item" : "items"} selected
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="rounded-full bg-white p-2 text-[#211434] shadow-sm hover:shadow hover:bg-[#FFF6DD] active:scale-95 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.category}-${item.filename}`}
                  className="flex gap-4 rounded-2xl bg-white p-3.5 shadow-[0_8px_30px_-5px_rgba(33,20,52,0.03)] border border-[#211434]/5 hover:shadow-[0_15px_40px_-8px_rgba(33,20,52,0.06)] hover:border-[#211434]/10 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-20 overflow-hidden rounded-xl bg-[#F7F2E7] flex-shrink-0">
                    <Image
                      src={`/brand/${item.category}/${item.filename}`}
                      alt={getImageLabel(item.filename)}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#2A1C51]/60">
                        {capitalize(item.category)}
                      </span>
                      <h4 className="text-sm font-semibold text-[#211434] line-clamp-1">
                        {getImageLabel(item.filename)}
                      </h4>
                    </div>
                    
                    <div className="mt-2.5 flex items-center justify-between gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-[#211434]/5 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, -1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-white text-[#211434]/70 hover:text-[#211434] active:scale-90 transition-all duration-150"
                          aria-label="Decrease quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#211434]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-white text-[#211434]/70 hover:text-[#211434] active:scale-90 transition-all duration-150"
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>

                      {/* Delete Icon Button */}
                      <button
                        type="button"
                        onClick={() => toggleCart(item)}
                        aria-label="Remove item"
                        className="rounded-lg p-1.5 text-[#211434]/40 hover:text-red-500 hover:bg-red-50 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4.5 w-4.5">
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#211434]/5 p-6 pb-9 md:pb-6 space-y-3 bg-white md:rounded-b-3xl">
              <button
                type="button"
                onClick={() => {
                  const itemsText = cart
                    .map((item) => `- ${capitalize(item.category)}: ${getImageLabel(item.filename)} (Qty: ${item.quantity})`)
                    .join("\n");
                  setForm((current) => ({
                    ...current,
                    message: `Hello,\n\nI am interested in enquiring about the following Gov-Shop Hub mockups:\n${itemsText}\n\nPlease provide more details on these assets.`,
                  }));
                  setCartOpen(false);
                  setModalOpen(true);
                }}
                className="w-full rounded-xl bg-[#2A1C51] py-3.5 text-center text-sm font-bold text-white shadow-[0_4px_12px_rgba(42,28,81,0.15)] hover:shadow-[0_8px_20px_rgba(42,28,81,0.3)] transition-all duration-200 hover:bg-[#3B2259] active:scale-98"
              >
                Proceed to Enquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setCart([]);
                  toast.success("Enquiry Cart cleared");
                }}
                className="w-full rounded-xl bg-transparent py-3 text-center text-sm font-bold text-[#211434]/60 transition-all duration-200 hover:text-[#211434] hover:bg-[#211434]/5 active:scale-98"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}

      {/* Flying Items Overlay Animation */}
      {flyingItems.map((flying) => (
        <motion.div
          key={flying.id}
          initial={{
            position: "fixed",
            left: flying.startX - 48,
            top: flying.startY - 48,
            width: 96,
            height: 96,
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 9999,
            opacity: 0.9,
            scale: 1,
            boxShadow: "0 10px 30px rgba(33,20,52,0.18)",
            pointerEvents: "none",
          }}
          animate={{
            left: typeof window !== "undefined" ? window.innerWidth - 120 : 1000,
            top: typeof window !== "undefined" ? window.innerHeight - 120 : 800,
            width: 24,
            height: 24,
            opacity: 0.15,
            scale: 0.2,
            rotate: 240,
          }}
          transition={{
            duration: 0.75,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <div className="relative h-full w-full bg-[#F7F2E7]">
            <Image
              src={flying.src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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
const ENQUIRY_PHONES = ["+234 (0) 803 493 8139", "+234 (0) 707 480 7461"];

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

function ImageGrid({ items }: { items: ImageGridItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={`${item.category}/${item.filename}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-[24px] border border-[#211434]/10 bg-white shadow-[0_25px_70px_-45px_rgba(33,20,52,0.55)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F2E7]">
            <Image
              src={`/brand/${item.category}/${item.filename}`}
              alt={getImageLabel(item.filename)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211434]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="flex items-start justify-between gap-4 p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A1C51]/55">
                {capitalize(item.category)}
              </p>
              <h3 className="mt-2 text-base uppercase font-semibold leading-6 text-[#211434]">
                {getImageLabel(item.filename)}
              </h3>
            </div>
            <span className="rounded-full bg-[#FFF5D5] px-3 py-1 text-xs font-semibold text-[#2A1C51]">
              Mockup
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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
      <section className="relative overflow-hidden border-b border-[#211434]/10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(237,204,25,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(42,28,81,0.14),_transparent_34%),linear-gradient(180deg,_#fffef9_0%,_#fff8ea_100%)]" />
        <div className="absolute -left-16 top-28 h-40 w-40 rounded-full bg-[#EDCC19]/20 blur-3xl" />
        <div className="absolute right-0 top-16 h-56 w-56 rounded-full bg-[#2A1C51]/10 blur-3xl" />

        <div className="relative container mx-auto grid gap-12 px-4 pb-16 pt-14 md:px-6 md:pb-20 md:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#2A1C51]/70">
              <span className="h-px w-10 bg-[#EDCC19]" />
              Gov-Shop Hub
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Gov-Shop Hub
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#211434]/75 md:text-lg">
              This page gives a closer look at the Gov-Shop Hub brand and a few
              sample mockups. If you would like more information, send an email
              or use the enquiry form below.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="rounded-md bg-[#2A1C51] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3B2259]"
              >
                Make an Enquiry
              </button>
              <Link
                href="/contact"
                className="rounded-md border border-[#211434]/15 bg-white px-7 py-3 text-sm font-semibold text-[#211434] transition-colors hover:border-[#211434]/30 hover:bg-[#FFF6DD]"
              >
                Talk to the Team
              </Link>
            </div>

            {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: images.length, label: "Mockups on display" },
                { value: ENQUIRY_PHONES.length, label: "Phone lines" },
                { value: "1", label: "Contact email" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#211434]/10 bg-white/80 p-5 shadow-[0_20px_60px_-48px_rgba(33,20,52,0.55)] backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-[#2A1C51]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[#211434]/65">{item.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="rounded-[28px] border border-[#211434]/10 bg-white p-6 shadow-[0_30px_80px_-52px_rgba(33,20,52,0.55)]">
            <div className="flex items-center justify-between border-b border-[#211434]/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2A1C51]/60">
                  Focus Areas
                </p>
                <h2 className="mt-2 text-2xl font-semibold">What this includes</h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-[#EDCC19]/25" />
            </div>

            <div className="mt-6 space-y-4">
              {BRAND_SERVICES.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-2xl bg-[#FFFCF4] px-4 py-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2A1C51] text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium text-[#211434]/80">{service}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#211434] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                Enquiries
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Questions about Gov-Shop Hub can be sent to{" "}
                <a className="font-semibold text-[#EDCC19]" href={`mailto:${ENQUIRY_EMAIL}`}>
                  {ENQUIRY_EMAIL}
                </a>
                , and the team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2A1C51]/60">
              Visual Library
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Selected Gov-Shop Hub applications and merchandise mockups
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#211434]/70 md:text-base">
            These samples show how the identity works in practical formats,
            especially on apparel and campaign materials.
          </p>
        </div>

        {allImages.length > 0 ? (
          <Tabs defaultValue="all">
            <TabsList className="mb-8 flex flex-wrap gap-1 bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="rounded-full border border-[#211434]/15 bg-white px-5 py-2 text-sm font-medium text-[#211434] data-[state=active]:border-[#2A1C51] data-[state=active]:bg-[#2A1C51] data-[state=active]:text-white"
              >
                All
                <span className="ml-1.5 rounded-full bg-[#EDCC19]/30 px-1.5 py-0.5 text-xs font-semibold text-[#2A1C51] data-[state=active]:bg-white/20 data-[state=active]:text-white">
                  {allImages.length}
                </span>
              </TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.category}
                  value={cat.category}
                  className="rounded-full border border-[#211434]/15 bg-white px-5 py-2 text-sm font-medium text-[#211434] data-[state=active]:border-[#2A1C51] data-[state=active]:bg-[#2A1C51] data-[state=active]:text-white"
                >
                  {capitalize(cat.category)}
                  <span className="ml-1.5 rounded-full bg-[#EDCC19]/30 px-1.5 py-0.5 text-xs font-semibold text-[#2A1C51] data-[state=active]:bg-white/20 data-[state=active]:text-white">
                    {cat.images.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <ImageGrid items={allImages} />
            </TabsContent>

            {categories.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <ImageGrid
                  items={cat.images.map((filename) => ({ category: cat.category, filename }))}
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                A Closer Look
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                What stands out in the work
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                The strongest part of the Gov-Shop Hub materials is that they
                stay readable, direct, and easy to recognise. Even on simple
                merchandise pieces, the identity still feels steady and clear.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {BRAND_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="mb-5 h-1.5 w-14 rounded-full bg-[#EDCC19]" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:px-6 md:py-20">
        <div className="rounded-[32px] border border-[#211434]/10 bg-[linear-gradient(135deg,_rgba(255,249,232,0.95),_rgba(255,255,255,0.98))] px-6 py-10 shadow-[0_30px_90px_-60px_rgba(33,20,52,0.5)] md:px-10 md:py-12">
          <div className="grid gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2A1C51]/60">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Need more information?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#211434]/72 md:text-base">
                If you have a question about Gov-Shop Hub, send an email to{" "}
                <a className="font-semibold text-[#2A1C51]" href={`mailto:${ENQUIRY_EMAIL}`}>
                  {ENQUIRY_EMAIL}
                </a>
                . You can also call either of the numbers below or send a
                message with the form.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#211434]/10 bg-white px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A1C51]/60">
                    Email
                  </p>
                  <a
                    href={`mailto:${ENQUIRY_EMAIL}`}
                    className="mt-2 block text-sm font-semibold text-[#211434]"
                  >
                    {ENQUIRY_EMAIL}
                  </a>
                </div>
                {ENQUIRY_PHONES.map((phone) => (
                  <div
                    key={phone}
                    className="rounded-2xl border border-[#211434]/10 bg-white px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A1C51]/60">
                      Phone
                    </p>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="mt-2 block text-sm font-semibold text-[#211434]"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-start">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full max-w-sm rounded-xl bg-[#2A1C51] px-6 py-4 text-center text-base font-semibold text-white shadow-[0_22px_45px_-22px_rgba(33,20,52,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#3B2259] hover:shadow-[0_28px_60px_-24px_rgba(33,20,52,0.78)]"
                >
                  Open Enquiry Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[#211434]/55 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl rounded-[28px] border border-[#211434]/10 bg-[#FFFCF4] p-6 shadow-[0_40px_100px_-50px_rgba(33,20,52,0.65)] md:p-8">
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
                    </a>
                    {" "}or{" "}
                    <a
                      href={`tel:${ENQUIRY_PHONES[1].replace(/[^\d+]/g, "")}`}
                      className="font-semibold text-[#2A1C51]"
                    >
                      {ENQUIRY_PHONES[1]}
                    </a>
                    if that is easier.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="rounded-full border border-[#211434]/10 bg-white p-2 text-[#211434] transition-colors hover:bg-[#FFF6DD]"
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
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-sm text-[#211434] outline-none transition focus:border-[#2A1C51]/30 focus:ring-2 focus:ring-[#EDCC19]/25"
                    />
                    <input
                      type="text"
                      name="lastname"
                      required
                      placeholder="Last name"
                      value={form.lastname}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-sm text-[#211434] outline-none transition focus:border-[#2A1C51]/30 focus:ring-2 focus:ring-[#EDCC19]/25"
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
                      className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-sm text-[#211434] outline-none transition focus:border-[#2A1C51]/30 focus:ring-2 focus:ring-[#EDCC19]/25"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message here."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#211434]/10 bg-white px-4 py-3 text-sm text-[#211434] outline-none transition focus:border-[#2A1C51]/30 focus:ring-2 focus:ring-[#EDCC19]/25"
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
    </div>
  );
}

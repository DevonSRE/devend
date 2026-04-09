import type { Metadata } from "next";
import { getBrandImages } from "./getBrandImages";
import BrandClient from "./BrandClient";

export const metadata: Metadata = {
  title: "Gov-Shop Hub | Devend",
  description:
    "Gov-Shop Hub branding showcase and enquiry page for brand details, contact information, and direct enquiries.",
};

export default async function BrandPage() {
  const images = await getBrandImages();
  return <BrandClient images={images} />;
}

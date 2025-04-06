import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  metadataBase: process.env.NODE_ENV === 'production'
    ? new URL('ttps://www.dev-end.org')
    : new URL('http://localhost:3000'),
  title: "Devend | Premier Event Management & Logistics Services",
  description: "Creating unforgettable experiences with expert event planning, logistics, and catering services. Specializing in corporate events, weddings, and executive travel solutions.",
  keywords: [
    "event management",
    "corporate events",
    "wedding planning",
    "logistics services",
    "catering services",
    "executive travel",
    "event planning Nigeria",
    "corporate event management",
    "luxury events",
    "event logistics",
    "professional event planners",
    "corporate catering",
    "event coordination",
    "business events",
    "conference planning"
  ],
  authors: [{ name: "Devend" }],
  creator: "Devend",
  publisher: "Devend",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dev-end.org",
    site_name: "Devend",
    title: "Devend - Premier Event Management & Logistics Services",
    description: "Creating unforgettable experiences with expert event planning, logistics, and catering services.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Devend Events and Logistics",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

  },


  category: "Event Management and Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistSans.variable}  antialiased`}
      >
        <header>
          <Navbar />
        </header>
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}

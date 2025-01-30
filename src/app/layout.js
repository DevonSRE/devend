import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
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
  title: "Devend",
  description: "Creating unforgettable experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistSans.variable}  antialiased`}
      >
        <header>
          <Navbar/>
        </header>
        {children}

        <Toaster richColors/>
      </body>
    </html>
  );
}

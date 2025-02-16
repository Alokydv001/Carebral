import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../app/globals.css"; // Make sure this path is correct
import Header from "../components/header"; // FIXED IMPORT PATH ✅
import HeroSection from "@/components/HeroSection";
import DoctorsSection from "@/components/DoctorSection";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "health care",
  description: "Top-tier mental healthcare services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <HeroSection/>
        <DoctorsSection/>
        <WhyChooseUs/>
        <Testimonials/>
        <CallToAction/>
        <FAQ/>
      <Footer/>
        {children}
      </body>
    </html>
  );
}

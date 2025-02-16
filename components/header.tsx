

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image Component
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/vector.png" // ✅ Place your logo inside the public folder (e.g., public/logo.png)
            alt="Talkiatry Logo"
            width={100} // ✅ Adjust width
            height={50} // ✅ Adjust height
            priority // ✅ Ensures the logo loads fast
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/insurance" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Insurance</Link>
          <Link href="/psychiatrists" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Our Psychiatrists</Link>
          <Link href="/help-center" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Help Center</Link>
          <Link href="/refer" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Refer a Patient</Link>
          <Link href="/careers" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Careers</Link>

          {/* Treatment Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTreatmentOpen(true)}
            onMouseLeave={() => setTreatmentOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
              Treatment <FiChevronDown />
            </button>
            {treatmentOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-40">
                <Link href="/treatment/depression" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">Depression</Link>
                <Link href="/treatment/anxiety" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">Anxiety</Link>
                <Link href="/treatment/adhd" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">ADHD</Link>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <Link href="/login" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Patient Log In</Link>
          <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
            Care Chat
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto flex flex-col space-y-4 text-center">
            <Link href="/insurance" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Insurance</Link>
            <Link href="/psychiatrists" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Our Psychiatrists</Link>
            <Link href="/help-center" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Help Center</Link>
            <Link href="/refer" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Refer a Patient</Link>
            <Link href="/careers" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Careers</Link>

            {/* Mobile Treatment Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentOpen(true)}
              onMouseLeave={() => setTreatmentOpen(false)}
            >
              <button className="flex items-center justify-center gap-1 hover:text-blue-500 transition-all duration-300 ease-in-out">
                Treatment <FiChevronDown />
              </button>
              {treatmentOpen && (
                <div className="bg-white shadow-md rounded-lg w-40 mx-auto mt-2">
                  <Link href="/treatment/depression" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">Depression</Link>
                  <Link href="/treatment/anxiety" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">Anxiety</Link>
                  <Link href="/treatment/adhd" className="block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out">ADHD</Link>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <Link href="/login" className="hover:text-blue-500 transition-all duration-300 ease-in-out">Patient Log In</Link>
            <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Care Chat
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

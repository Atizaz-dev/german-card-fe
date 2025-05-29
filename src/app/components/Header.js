"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/img/logo.jpg";
import arrowDown from "@assets/img/Arrow-down-short.svg";
import vectorPng from "@assets/img/Vector.png";
import vectorSvg from "@assets/img/Vector.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* ... your topbar here ... */}


      {/* Desktop menu - hide on small screens */}
      <div className="hidden md:flex justify-between pt-[15px] flex-wrap gap-4 text-black text-base font-semibold">
        {/* Your dropdown groups here */}
        {/* ... keep your existing dropdowns here ... */}
      </div>
      <nav
        className="bg-white px-4 md:px-[120px] py-[40px] flex flex-col"
        aria-label="Main navigation"
      >
        <div className="flex justify-between w-full items-center mb-2">
          <a href="#" aria-label="GermanCard Home">
            <Image
              src={logo}
              alt="GermanCard Logo"
          
              className="w-[180px] h-auto"
            />
          </a>
          <div className="flex items-center gap-3 hidden sm:hidden md:flex lg:flex ">
            <div className="bg-[#FFEFB1] text-black text-xs font-bold px-3 py-1 rounded flex items-center gap-2">
              <Image
                src={vectorSvg}
                className="w-[14px] h-auto"
                alt="Phone icon"
              />
              <p>Call now +49 (0) 221 670 69 0</p>
            </div>
          </div>
          <button
            className="block sm:block md:hidden lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between pt-[15px] flex-wrap gap-4 text-black text-base font-semibold">
          <div className="flex flex-wrap gap-[10px]">
            {/* Dropdown 1 */}
            <div className="dropdown relative group hidden sm:hidden md:flex lg:flex ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[14px] font-semibold" aria-expanded="false" aria-haspopup="true">
                Plastic cards
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden pt-5 py-2 w-48 z-10 group-hover:block">      
              <div className="bg-white shadow-lg rounded ">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div></div>
            </div>

            {/* Dropdown 2 */}
            <div className="dropdown relative group hidden sm:hidden md:flex lg:flex ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[14px] font-semibold" aria-expanded="false" aria-haspopup="true">
                Organic cards
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden pt-5 py-2 w-48 z-10 group-hover:block">      
              <div className="bg-white shadow-lg rounded">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
              </div>
            </div>

            {/* Dropdown 3 */}
            <div className="dropdown relative group hidden sm:hidden md:flex lg:flex ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[14px] font-semibold" aria-expanded="false" aria-haspopup="true">
                RFID/Chip cards
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden pt-5 py-2 w-48 z-10 group-hover:block">      
              <div className="bg-white shadow-lg rounded">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[10px] hidden sm:hidden md:flex lg:flex">
            {/* Dropdown 4 */}
            <div className="dropdown relative group ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[13px] font-medium" aria-expanded="false" aria-haspopup="true">
                Special formats
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
            </div>

            {/* Dropdown 5 */}
            <div className="dropdown relative group ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[13px] font-medium" aria-expanded="false" aria-haspopup="true">
                Personalization
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
            </div>

            {/* Dropdown 6 */}
            <div className="dropdown relative group ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[13px] font-medium" aria-expanded="false" aria-haspopup="true">
                Printer & Accessories
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
            </div>

            {/* Dropdown 7 */}
            <div className="dropdown relative group  ">
              <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[13px] font-medium" aria-expanded="false" aria-haspopup="true">
                Service
                <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
              </button>
              <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
              </div>
            </div>
            <button
              className=""
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Modal menu for small screens */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#00000087] z-50 flex flex-col items-end h-vh md:hidden sm:flex lg:hidden flex"
          role="dialog"
          aria-modal="true"
        >

          <div className="bg-white w-full max-w-xs p-6 pt-12 h-full">
            <div className="flex justify-end">
              <button
                className="mb-4"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Here put your nav links in a vertical stack for mobile */}
            <nav className="flex flex-col gap-4">
              {/* Dropdown 1 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-semibold" aria-expanded="false" aria-haspopup="true">
                  Plastic cards
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>

              {/* Dropdown 2 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-semibold" aria-expanded="false" aria-haspopup="true">
                  Organic cards
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>

              {/* Dropdown 3 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-semibold" aria-expanded="false" aria-haspopup="true">
                  RFID/Chip cards
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>
              {/* Dropdown 4 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-medium" aria-expanded="false" aria-haspopup="true">
                  Special formats
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>

              {/* Dropdown 5 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-medium" aria-expanded="false" aria-haspopup="true">
                  Personalization
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>

              {/* Dropdown 6 */}
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-medium" aria-expanded="false" aria-haspopup="true">
                  Printer & Accessories
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>
              <div className="dropdown relative group">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors text-[16px] font-medium" aria-expanded="false" aria-haspopup="true">
                  Service
                  <Image src="/assets/img/Arrow-down-short (1).svg" alt="" width={10} height={10} className="ml-1" aria-hidden="true" />
                </button>
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded pt-3 py-2 w-48 z-10 group-hover:block">
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 1</span></Link>
                  <Link href="#"><span className="block px-4 py-2 hover:bg-gray-100">Option 2</span></Link>
                </div>
              </div>
            </nav>

          </div>

          {/* Click outside closes menu */}
          <div
            className="flex-grow"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
}

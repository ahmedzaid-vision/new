// components/Header.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: any) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="relative px-8 border-b py-3 bg-[#ebebeb6b] "
      ref={headerRef}
    >
      {/* <SearchBa           r /> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="">
          <Image
            src={logo}
            alt="Square Contracting Logo"
            width={100}
            height={100}
          />
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-white mb-5 ">
          <Link href="/"  className="text-[20px]">
            Home
          </Link>
          <Link href="/" className="text-[20px]">
            About
          </Link>
          <Link href="/" className="flex items-center gap-1 text-[20px]">
            <div> Projects</div>
            <div className="text-[16px]">
              <VscTriangleDown />
            </div>
          </Link>
          <Link href="/" className="text-[20px]">
            Contact Us
          </Link>
          <button>
            <FaSearch />
          </button>
        </nav>

        {/* toggleMenu  */}
        <div className="text-2xl block md:hidden cursor-pointer   ">
          <div
            className={`${menuOpen ? "hidden" : "block text-white"} mb-6`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineMenu />
          </div>
          <div
            className={`${menuOpen ? "block" : "hidden"} relative z-40 mb-6`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineClose />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? " scale-x-100" : " scale-x-0"
          } absolute right-0 top-0 bg-white w-[300px] duration-300 h-[100vh] shadow-lg transition-transform transform origin-top-right z-30`}
        >
          <div className="mt-28 p-4 flex flex-col">
            <div className="border-b pb-1">
              <Link href="#home" className="text-[20px] py-3">
                Home
              </Link>
            </div>
            <div className="border-b pb-1">
              <Link href="#about" className="text-[20px] py-3 ">
                About
              </Link>
            </div>
            <div className="border-b pb-1">
              <Link href="#projects" className="text-[20px] py-3">
                Projects
              </Link>
            </div>
            <div className="border-b pb-1">
              <Link href="#contact" className="text-[20px] py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// components/Header.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import logo1 from "../../public/logo.png";
import logo2 from "../../public/square-logo.png";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar";
import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // handleClickOutside
  const handleClickOutside = (event: any) => {
    if (headerRef.current){
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // TestHover
  const TestHover = () => {
    setHoverActive(true);
    console.log("Test hover");
  };

  // handleScroll
  const handleScroll = (event: any) => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header
      className={` px-8 border-b py-3 bg-[#ebebeb6b] fixed  w-full z-50 ${
        scrolled ? "bg-white  top-0" : "  md:top-[48px]"
      }`}
      ref={headerRef}
    >
      {/* <SearchBar /> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="">
          {scrolled ? (
            <Image
              src={logo2}
              alt="Square Contracting Logo"
              width={100}
              height={100}
              className="w-[60px] "
            />
          ) : (
            <Image
              src={logo1}
              alt="Square Contracting Logo"
              width={100}
              height={100}
              className=""
            />
          )}
        </Link>
        {/* Navigation Links */}
        <nav className={`hidden md:flex items-center gap-10 text-white text-[11px] font-bold mb-5 ${scrolled ? "text-[#252525] mb-0 " : "text-white "} ` }>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className=" ">
            Peb Applications
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1  relative"
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
          >
            <div> Projects</div>
            <div className="text-[16px]">{/* <VscTriangleDown /> */}</div>
            {/* <Menu onHover={hoverActive} /> */}
          </Link>
          <Link href="/" className="text-[11px]">
            Contact Us
          </Link>
          <button>
            <FaSearch />
          </button>
        </nav>

        {/* toggleMenu  */}
        <div className="text-2xl block md:hidden cursor-pointer ">
          <div
            className={` ${scrolled ? "text-[#252525] mb-1 " : "text-white mb-6"}  ${menuOpen ? "hidden" : "block text-white"} `}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineMenu />
          </div>
          <div
            className={` ${menuOpen ? "block" : "hidden"} relative z-40 mb-0`}
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
          <div className="mt-28 p-4 flex flex-col text-[11px] font-bold ">
            <div className="border-b mb-2 pb-2">
              <Link href="#home" className=" py-3 text-[11px] font-bold">
                Home
              </Link>
            </div>
            <div className="border-b mb-2 pb-2">
              <Link href="#about" className=" ">
                Peb Applications
              </Link>
            </div>
            <div className="border-b mb-2 pb-2">
              <Link href="#projects" className=" ">
                Projects
              </Link>
            </div>
            <div className="border-b  mb-2 pb-2 ">
              <Link href="#contact" className="">
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

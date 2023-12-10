// components/Footer.jsx
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-8 px-8"
      style={{
        backgroundImage: `url('/footer-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row  justify-between">
        {/* Column 1: Logo and Text */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Image src="/logo.png" alt="Your Logo" width={100} height={100} />
          <p className="mt-2 text-left md:text-center">Square Contracting</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="mb-7 md:mb-0 ">
          <div className="text-xl mb-3  text-white  ">Site Map </div>
          <ul className="flex flex-col gap-3 font-sans">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <div className="text-xl mb-3">Contact</div>
          <p className="mb-2 flex items-center font-sans">
            <FiMail className="mr-2" />
            Email: info@example.com
          </p>
          <p className="mb-2 flex items-center font-sans">
            <FiPhone className="mr-2" />
            Phone: +123 456 7890
          </p>
          <p className="flex items-center font-sans">
            <FiMapPin className="mr-2" />
            Location: Your Company Location
          </p>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-12 text-center font-sans ">
        <p className="">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

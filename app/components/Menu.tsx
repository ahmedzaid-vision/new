import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

function Menu({ onHover } : {onHover: boolean}) {
  return (
    <div
      className={`h-[330px]  w-[200px] bg-white opacity-0  transition  duration-700  ${
        onHover ? "opacity-100 translate-y-[30px]   " : "opacity-0"
      }
     absolute top-[20px] -left-[108px] border-t-[5px]  border-t-[#005826] transform    `}
    >
      <div className=" w-full  text-right  ">
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full border-b  pb-1 px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        <div className="w-full  px-3 text-black opacity-75">
          <Link href="#contact" className="py-3  text-[16px]">
             Custome Menu
          </Link>
        </div>
        
        
       
      </div>
    </div>
  );
}

export default Menu;

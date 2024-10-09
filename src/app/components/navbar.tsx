"use client"

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
const [isOpen,setIsopen] = useState<boolean>(false)

function handelIsopen() {
     setIsopen(!isOpen) 
     
}

  return (
 
          //big screen
    <nav className="bg-green-500 p-3 md:w-full lg:w-full w-full fixed top-0 z-50">
      <div className="countainer mx-auto flex justify-between items-center">
        <div className="text-yellow-50 font-extrabold text-xl ml-[50px]">
          <Link href="/">HF <span className="text-sm font-thin">Healthy food</span>
          </Link>
        </div>
     
{/* hameburger */}

<div className="lg:hidden md:hidden ">
          <button onClick={handelIsopen} className="text-white focus:outline-none">
            {isOpen ? (
              <RxCross2   className="w-6 h-6" /> // Close icon
            ) : (
              <RxHamburgerMenu  className="w-6 h-6" />  // Hamburger icon
            )}
          </button>
        </div>
       

         {/* /link for lg screen */}
<div className="hidden lg:block md:block">
        <div className="flex justify-center items-center text-yellow-50 gap-8 mr-[200px]  font-semibold ">
         
         <Link href="/about" className="relative  after:content-[''] after:block after:bg-blue-400  after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-[70px]">About</Link>
         <Link href="/blog" className= "relative  after:content-[''] after:block after:bg-blue-400  after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-[70px] ">Blog</Link>
         <Link href="contact" className="relativeafter:content-[''] after:block after:bg-blue-400  after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-[70px] ">Contact</Link>
        </div>
      </div>
      </div>
      {/* small screen */}
{isOpen && (
      <div className="lg:hidden mt-4 bg-transparent">
        
        <Link href="/about"  className=" text-yellow-50 block py-2  hover:underline hover:decoration-blue-400">About</Link>
        <Link href= "/blog"  className=" text-yellow-50 block py-2 hover:underline hover:decoration-blue-400">Blog</Link>
        <Link href="/contact"  className=" text-yellow-50 block py-2 hover:underline hover:decoration-blue-400">Contact</Link>
      
      </div> )}
    </nav>

   

  );

};




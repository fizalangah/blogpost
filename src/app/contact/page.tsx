import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Link from "next/link"
import Navbar from "../components/navbar";
export default function Contactpage() {
  return (
    <div>
  <Navbar/>
<div className=" flex justify-center items-center text-center mt-[100px] ">
        <h1 className="text-4xl text-yellow-50 font-bold">Let's Get In Touch</h1>
      </div>

      <div className="flex justify-center items-center mt-[20px]">
        {/* Left side text */}
        <div className="bg-green-700 md:p-7 p-5 flex justify-center items-center text-yellow-50 md:gap-x-24 gap-y-10 text-2xl flex-col lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] h-[300px] w-[300px]">
          <Link href="mailto:fizalangah2001@gmail.com"><SiGmail /> Gmail</Link>
          <Link href="https://www.linkedin.com/in/fiza-langah-33543b2b7"><FaLinkedin /> LinkedIn</Link>
          <Link href="https://github.com/fizalangah"><FaGithub /> GitHub</Link>
        </div>
      </div>
    </div>
  )
}

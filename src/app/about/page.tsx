
import Image from "next/image"
import Navbar from "../components/navbar"
export default function Aboutpage() {
  return (
    <div className="flex flex-col text-white justify-center items-center lg:mt-[100px] md:[60px] mt-[100px] mb-5">

        <Navbar/>
    <div className=" flex  justify-center items-center text-center ">
    <h1 className=" lg:text-4xl text-2xl  font-bold text-black">About Me!</h1>
       
          {/* ///image */}
      {/* <div className="h-[150px] w-[150px]  rounded-full overflow-hidden">
        <Image
          src="/img4.jpeg"
          alt="profile pic"
          height={200}
          width={200}
          className="object-cover"
        />
      </div> */}

    
    </div>

    <div className="lg:w-[800px] md:w-[600px] w-[300px] lg:h-[300px] md:h-[300px] border-blue-50 border-2 rounded-xl mt-[10px] p-4 bg-green-700">
      <p className="text-center mt-[10px] sm:text-sm lg:text-xl lg:mt-[50px]">
        Hi, I'm Fiza Langah, a passionate front-end developer with a knack for
        creating visually engaging and highly functional web applications. My
        expertise lies in using modern tools and technologies like React,
        Next.js, Tailwind CSS, and TypeScript to bring ideas to life on the
        web.
      </p>
      <p className="text-center mt-[10px]">
        I have a strong focus on user experience and responsive design,
        ensuring that every project I work on is optimized for performance and
        accessibility. Whether it's building dynamic single-page applications
        or crafting pixel-perfect user interfaces, I thrive on turning complex
        problems into simple, elegant solutions.
      </p>
    </div>

        

        </div>

  )
}

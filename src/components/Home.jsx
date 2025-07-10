import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center mt-7 text-center text-white"
    >
      <div className="relative z-10 max-w-[85%] mx-auto font-inter flex flex-col items-center space-y-5 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          I'm <span className="text-[#fe5617]">Prasanna Kumar V</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold flex gap-2 justify-center">
          <span className="text-[#fe5617]">I'm a</span>
          <Typewriter
            words={["Full Stack Developer.", "MERN Stack Developer."]}
            loop={5}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl">
          A passionate MERN stack developer with 6+ months of hands on
          experience, focused on creating user-friendly, scalable web
          applications with clean code, responsive design, and a commitment to
          continuous learning.
        </p>

        <div className="flex flex-col md:flex-row md:gap-6 text-lg md:text-xl font-semibold items-center justify-center space-y-3 md:space-y-0">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-[#fe5617]" size={20} />
            <span>Bengaluru</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#fe5617]" size={20} />
            <span>9380114929</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#fe5617]" size={20} />
            <span>vprasannakumar2716@gmail.com</span>
          </div>
        </div>

        <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold text-white hover:bg-[#e04f14] transition">
          <a
            href="https://drive.google.com/file/d/1uVTuLgC46VN3yN8oquLmE_m7177c_5ey/view?usp=drivesdk"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

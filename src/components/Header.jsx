import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
      <div className="relative z-10 max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter text-white">
        {/* Logo (Left) */}
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/JnPdwRpN/logo.png"
            alt="Logo"
            className="h-[60px] w-[60px] rounded-full shadow-lg object-cover filter sepia "
          />
        </div>

        {/* Nav Center */}
        <nav className="hidden lg:flex flex-1 justify-center items-center text-[14px] font-semibold">
          <ul className="flex items-center gap-8">
            <Link to="home" smooth={true} duration={500} offset={-70}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:-translate-y-1">
                Home
              </li>
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:-translate-y-1">
                About
              </li>
            </Link>
            <Link to="project" smooth={true} duration={500} offset={-50}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:-translate-y-1">
                Project
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-40}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:-translate-y-1">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Social Icons (Right) */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-5">
          <a
            href="https://github.com/prasanna-27167896"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-kumar-v-594213218"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/_.prasanna_kumar.__/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-all duration-500 ease-in text-[#fe5617]"
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] flex flex-col items-center justify-center gap-10 z-40">
          <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="hover:text-[#fe5617] cursor-pointer">Home</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="hover:text-[#fe5617] cursor-pointer">About</li>
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="hover:text-[#fe5617] cursor-pointer">Project</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-40}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="hover:text-[#fe5617] cursor-pointer">Contact</li>
            </Link>
          </ul>

          {/* Mobile Social Icons */}
          <div className="flex gap-5 mt-5">
            <a
              href="https://github.com/prasanna-27167896"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fe5617]"
            >
              <FaGithub size={29} />
            </a>
            <a
              href="https://www.linkedin.com/in/prasanna-kumar-v-594213218"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fe5617]"
            >
              <FaLinkedin size={29} />
            </a>
            <a
              href="https://www.instagram.com/_.prasanna_kumar.__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fe5617]"
            >
              <FaInstagram size={29} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

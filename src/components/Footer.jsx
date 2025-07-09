import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white py-8">
      <div className="relative z-10 max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-3">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} PK. All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/prasanna-27167896"
            className="hover:text-[#fe5617]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasanna-kumar-v-594213218"
            className="hover:text-[#fe5617]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/_.prasanna_kumar.__/"
            className="hover:text-[#fe5617]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

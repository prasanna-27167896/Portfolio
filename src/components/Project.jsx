import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tickzy from "../assets/Tickzy.png";
import Todo from "../assets/Todo.png";
import Book from "../assets/Book.png";
import Weather from "../assets/Weather.png";
import Travel from "../assets/Travel.png";
import Music from "../assets/Music.png";
import Diet from "../assets/Diet.png";
import Carousal from "../assets/Image-Carousal.png";
import Calculator from "../assets/Calculator.png";
import Portfolio from "../assets/Portfolio.png";
import Movie from "../assets/Movie.png";
import BioInsta from "../assets/Bio-Insta.png";

const projects = [
  // {
  //   title: "Tickzy AI Agent with JWT Auth",
  //   image: Tickzy,
  //   description:
  //     "AI-powered ticketing system with secure JWT authentication and intelligent automation using Inngest and the Gemini API.",
  //   techStack: [
  //     "React.js",
  //     "Tailwind",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Inngest",
  //     "Node Mailer",
  //     "Gemini API",
  //   ],
  //   liveLink: "https://tickzy-ai-agent.netlify.app/",
  //   githubLink: "https://github.com/prasanna-27167896/AI-Agent",
  // },
  {
    title: "Full Stack Todo App",
    image: Todo,
    description:
      "Full Stack Todo App with CRUD functionality using React and a backend for data persistence..",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Postman"],
    liveLink: "https://biosta.netlify.app/",
    githubLink: "https://github.com/yourusername/movie-app",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "Personal portfolio showcasing projects, skills, and experience, built with React and a responsive design.",
    techStack: ["React.js", "Tailwind CSS"],
    liveLink: "https://biosta.netlify.app/",
    githubLink: "https://github.com/yourusername/movie-app",
  },
  {
    title: "BioInsta with JWT Authentication",
    image: BioInsta,
    description:
      "AI-based platform built with React.js that enhances Instagram user bios using the Gemini API.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "JWT",
    ],
    liveLink: "https://bio-insta-ai.netlify.app",
    githubLink: "https://github.com/prasanna-27167896/project-27",
  },
  {
    title: "Weather App",
    image: Weather,
    description:
      "Weather App built with React that displays real-time data using the Open-Meteo API.",
    techStack: ["React.js", "open-meteo API"],
    liveLink: "https://weather-app-fore-cast.netlify.app/",
    githubLink: "https://github.com/prasanna-27167896/Weather-App-Project",
  },
  {
    title: "Movie Rating App",
    image: Movie,
    description:
      "Movie Rating App built with React using the OMDB API to search, rate, and view detailed movie information.",
    techStack: ["React.js", "omdb API"],
    liveLink: "https://movie-rating-usepopcorn.netlify.app/",
    githubLink: "https://github.com/prasanna-27167896/Movie-App",
  },
  {
    title: "AI Travel and Food Planner",
    image: Travel,
    description:
      "AI-powered Travel and Food Planner that suggests personalized itineraries and meals using the Gemini API for intelligent recommendations.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "https://prasanna-27167896.github.io/ai-planner/",
    githubLink: "https://github.com/prasanna-27167896/ai-planner",
  },
  {
    title: "Book Store Cart",
    image: Book,
    description:
      "Book Store app with cart functionality, built using React, that allows users to browse, filter, and add books to their cart.",
    techStack: ["React.js", "Tailwind CSS"],
    liveLink: "https://book-store-cart.netlify.app/",
    githubLink: "https://github.com/prasanna-27167896/Book-Store",
  },
  {
    title: "Music Player",
    image: Music,
    description:
      "Responsive music UI with play, pause, and track navigation features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://prasanna-27167896.github.io/Music-player-app/",
    githubLink: "https://github.com/prasanna-27167896/Music-player-app",
  },
  {
    title: "AI Diet Planner",
    image: Diet,
    description:
      "AI Diet Planner that generates personalized meal plans using the Gemini API for smart nutritional recommendations.",
    techStack: ["HTML", "CSS", "JavaScript", "Gemini API"],
    liveLink: "https://prasanna-27167896.github.io/diet-planner/",
    githubLink: "https://github.com/prasanna-27167896/diet-planner",
  },
  {
    title: "Image Carousal",
    image: Carousal,
    description:
      "Image Carousel to showcase multiple images with smooth sliding effects.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://prasanna-27167896.github.io/image-slider-Project/",
    githubLink: "https://github.com/prasanna-27167896/image-slider-Project",
  },
  {
    title: "Advanced Calculator",
    image: Calculator,
    description:
      "Advanced Calculator with support for complex operations and a user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://prasanna-27167896.github.io/Web_Calculator/",
    githubLink: "https://github.com/prasanna-27167896/Web_Calculator",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="project" className=" text-white py-12 px-4">
      <div className="max-w-6xl mx-auto font-inter">
        <h2 className="text-4xl font-bold text-center text-[#fe5617] mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-bold text-[#fe5617] mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#fe5617] text-white text-xs px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-between text-sm text-[#fe5617] font-semibold">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt size={14} /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#fe5617] font-semibold underline hover:text-white"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;

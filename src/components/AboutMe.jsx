import React from "react";
import { TypeAnimation } from "react-type-animation";
import strawHat from "../assets/straw-hat.png";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center p-6"
    >
      <div className="text-center max-w-3xl">
        <TypeAnimation
          sequence={["Watashi no namae wa", 2000, "My name is"]}
          wrapper="span"
          speed={1}
          className="inline-block text-2xl sm:text-3xl italic font-thin mb-4 text-primary"
          preRenderFirstString={true}
        />

        <p className="block w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary text-center mb-4">
          Yuvrajsinh{" "}
          <span className="relative inline-block">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 lg:w-14">
              <img src={strawHat} alt="straw hat" className="straw-hat" />
            </span>
            D.
          </span>{" "}
          Chauhan,
        </p>

        <p className="text-lg sm:text-xl mb-4 text-secondary">
          Frontend Enthusiast |{" "}
          <span className="relative inline-block">
            <span className="weeb-text">Weeb</span>
          </span>
        </p>

        <p className="text-base sm:text-lg md:text-xl text-primary mb-4">
          Graduated with{" "}
          <span className="font-bold">B.Tech in Computer Engineering</span> from
          Birla Vishvakarma Mahavidhyalaya
        </p>

        <p className="text-base sm:text-lg md:text-xl text-primary mb-4">
          Since January 2024, I've worked as a Software Engineer Intern at
          Rapidops and was promoted to Junior Software Engineer in August. I
          have a strong foundation in{" "}
          <span className="font-bold text-[#61DBFB]">React</span> and{" "}
          <span className="font-bold text-[#f0db4f]">JavaScript</span>.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-primary mb-4">
          Additionally, I work part-time as a Marketing Manager at P. N. Group
          of Education, which includes P. N. Classes and P. N. Institute.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary hover:text-[#61DBFB] hover:font-extrabold hover:text-2xl duration-300">
            <ReactLogo className="w-6 sm:w-8 h-6 sm:h-8" />
            React
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary">
            |
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary hover:text-[#f0db4f] hover:font-extrabold hover:text-2xl duration-300">
            <Javascript className="w-6 sm:w-8 h-6 sm:h-8" />
            JavaScript
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary">
            |
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary hover:text-[#007acc] hover:font-extrabold hover:text-2xl duration-300">
            <Typescript className="w-5 sm:w-6 h-5 sm:h-6" />
            TypeScript
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary">
            |
          </li>
          <li className="flex items-center gap-2 text-base sm:text-lg text-primary hover:text-[#38bdf8] hover:font-extrabold hover:text-2xl duration-300">
            <Tailwindcss className="w-5 sm:w-6 h-5 sm:h-6" />
            Tailwind
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

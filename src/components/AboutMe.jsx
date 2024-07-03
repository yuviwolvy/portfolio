import React from "react";
import { TypeAnimation } from "react-type-animation";
import strawHat from "../assets/straw-hat.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <div className="text-center max-w-3xl">
        <TypeAnimation
          sequence={["Watashi no namae wa", 2500, "My name is"]}
          wrapper="span"
          speed={1}
          className="inline-block text-3xl italic font-thin mb-4 text-primary "
          preRenderFirstString={true}
        />

        <p className="block w-full text-8xl font-bold text-primary text-center mb-4">
          Yuvrajsinh{" "}
          <span className="relative inline-block">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img src={strawHat} alt="straw hat" className="straw-hat" />
            </span>
            D.
          </span>{" "}
          Chauhan,
        </p>
        <p>
          Since January 2024 till date, working as a Software Engineer Intern at
          Rapidops. With a strong foundation in{" "}
          <span className="font-bold">React</span> and{" "}
          <span className="font-bold">JavaScript</span>, Passionate about
          creating engaging and efficient web applications.
        </p>
        <p className="text-lg text-secondary mb-4">
          I graduated with a{" "}
          <span className="font-bold">B.Tech in Computer Engineering</span> from
          Birla Vishvakarma Mahavidhyalaya
        </p>
        <p className="text-lg text-secondary mb-4">
          Apart from coding, I am an avid anime enthusiast.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

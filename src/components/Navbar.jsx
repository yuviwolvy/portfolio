import React from "react";

const Navbar = () => {
  return (
    <nav className="text-primary p-4 shadow-md fixed top-0 w-full z-10">
      <ul className="flex justify-around">
        <li>
          <a href="#about" className="hover:text-accent hover:font-bold">
            About me
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-accent hover:font-bold">
            My Work
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent hover:font-bold">
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

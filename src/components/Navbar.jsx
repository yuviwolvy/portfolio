import React from "react";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector("nav").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="text-primary p-4 shadow-md fixed top-0 w-full z-10 bg-bgColor">
      <ul className="flex justify-around">
        <li>
          <a
            href="#about-me"
            onClick={(e) => handleScroll(e, "about-me")}
            className="hover:text-accent hover:font-bold"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#my-work"
            onClick={(e) => handleScroll(e, "my-work")}
            className="hover:text-accent hover:font-bold"
          >
            My Work
          </a>
        </li>
        <li>
          <a
            href="#contact-me"
            onClick={(e) => handleScroll(e, "contact-me")}
            className="hover:text-accent hover:font-bold"
          >
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

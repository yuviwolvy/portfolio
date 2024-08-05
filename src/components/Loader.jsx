import React from "react";

const Loader = ({ imageSrc, isLoading }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full items-center justify-center bg-white z-50 transition-opacity duration-500 hidden md:flex ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={imageSrc} alt="Loading..." className="w-48 h-48 animate-spin" />
    </div>
  );
};

export default Loader;

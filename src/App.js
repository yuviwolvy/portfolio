import { useState, useEffect } from "react";

import AboutMe from "./components/AboutMe";
import GitRepos from "./components/GitRepos";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Loader from "./components/Loader";
import loadingImage from "./assets/image2.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Loader imageSrc={loadingImage} isLoading={isLoading} />
      {
        <main
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Navbar />
          <AboutMe />
          <GitRepos />
          <ContactMe />
        </main>
      }
    </>
  );
}

export default App;

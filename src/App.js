import AboutMe from "./components/AboutMe";
import GitRepos from "./components/GitRepos";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-screen"> */}
      <AboutMe />
      {/* </div> */}
      {/* <div className="min-h-screen"> */}
      <GitRepos />
      <ContactMe />
      {/* </div> */}
    </>
  );
}

export default App;

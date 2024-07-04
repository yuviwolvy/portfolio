import AboutMe from "./components/AboutMe";
import GitRepos from "./components/GitRepos";
import Navbar from "./components/Navbar";
import aot from "./assets/aot.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <AboutMe />
      </div>
      <div className="min-h-screen">
        <GitRepos />
      </div>
    </>
  );
}

export default App;

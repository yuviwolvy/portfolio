import AboutMe from "./components/AboutMe";
import GitRepos from "./components/GitRepos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-screen"> */}
      <AboutMe />
      {/* </div> */}
      {/* <div className="min-h-screen"> */}
      <GitRepos />
      {/* </div> */}
    </>
  );
}

export default App;

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <AboutMe />
      </div>
    </>
  );
}

export default App;

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <AboutMe />
      </div>
    </>
  );
}

export default App;

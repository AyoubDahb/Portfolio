import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background wrapper */}
      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;

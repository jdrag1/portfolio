import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-200 selection:text-slate-900">
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
  
}

export default App
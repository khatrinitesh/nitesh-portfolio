import useLenis from "./hooks/useLenis";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  useLenis();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <Header />
      {/* main */}
      <main>
        <Hero onProjects={scrollToProjects} />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

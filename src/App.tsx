import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { ExportPDF } from "./components/ExportPDF";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <div className=" min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <ExportPDF />
        <Footer />
      </div>
    </>
  );
}

export default App;

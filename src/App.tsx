import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { ExportPDF } from "./components/ExportPDF";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navar";
import PortfolioGallery from "./components/PortfolioGallery";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <PortfolioGallery />
        <Contact />
        <ExportPDF />
        <Footer />
      </main>
    </>
  );
}

export default App;

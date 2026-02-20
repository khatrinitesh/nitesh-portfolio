import { About } from "./components/About";
import BackToTop from "./components/BackToTop";
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
      <div className="relative">
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
      </div>
      <BackToTop />
    </>
  );
}

export default App;

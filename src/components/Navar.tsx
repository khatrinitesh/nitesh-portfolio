import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/navigation";
import { Images } from "../utils/assets";
import { Sling as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isOpen, setOpen] = useState(false);
  const navbarHeight = 80;

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = activeSection;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top - navbarHeight;
          const bottom = rect.bottom - navbarHeight;

          if (top <= 0 && bottom > 0) {
            current = item.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.offsetTop - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={Images.adsmnLogo}
          alt="Profile"
          className="w-12 h-12 rounded-full object-contain"
        />

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`duration-200 delay-75 cursor-pointer font-poppins font-semibold transition ${
                activeSection === item.id
                  ? "text-[#cbde31]"
                  : "text-white hover:text-[#cbde31]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#fff" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#51591d] backdrop-blur-md px-6 pb-6">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                id={item.id}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer font-poppins font-semibold transition ${
                  activeSection === item.id
                    ? "text-[#cbde31]"
                    : "text-white hover:text-indigo-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

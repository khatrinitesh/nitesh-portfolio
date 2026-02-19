import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/navigation";
import { Images } from "../utils/assets";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const navbarHeight = 80;

  // Scroll spy for active section
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
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll + update activeSection immediately on click
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.offsetTop - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
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

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              href={`#${item.id}`}
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
    </nav>
  );
};

import { Sling as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/navigation";
import { Images } from "../utils/assets";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setOpen] = useState(false);

  const navbarHeight = 80;

  // =========================
  // Scroll Spy
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight + 100;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);

        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Smooth Scroll
  // =========================
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActiveSection(id);
      setOpen(false);
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

        {/* Desktop Menu */}
        <div className="hidden space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative cursor-pointer font-poppins text-sm font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#cbde31]"
                  : "text-white hover:text-[#cbde31]"
              }`}
            >
              {item.label}

              {/* Active Indicator */}
              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#cbde31]" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#fff" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-[#51591d] px-6 pb-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-poppins text-base font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#cbde31]"
                    : "text-white hover:text-[#cbde31]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

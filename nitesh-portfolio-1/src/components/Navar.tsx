import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

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
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090b18]/85 backdrop-blur-xl">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <img
          src={Images.adsmnLogo}
          alt="Nitesh Khatri"
          className="w-12 h-12 rounded-full object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative cursor-pointer font-poppins text-sm font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-violet-300"
                  : "text-slate-200 hover:text-violet-200"
              }`}
            >
              {item.label}

              {/* Active Indicator */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-violet-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={23}
            color="#c4b5fd"
            label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-x-0 bottom-0 top-20 z-40 cursor-default bg-[#050610]/75 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#101225]/95 px-6 pb-7 pt-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`border-b border-white/5 py-4 text-left font-poppins text-base font-semibold transition-colors last:border-b-0 ${
                      activeSection === item.id
                        ? "text-violet-300"
                        : "text-slate-200 hover:text-violet-200"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

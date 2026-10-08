import { Menu, X } from "lucide-react";

import { useState } from "react";

const navItems = [
  {
    label: "About",
    id: "about",
  },

  {
    label: "Skills",
    id: "skills",
  },

  {
    label: "Experience",
    id: "experience",
  },

  {
    label: "Projects",
    id: "projects",
  },

  {
    label: "Contact",
    id: "contact",
  },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080808]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8">
        {/* Logo */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-bold text-black transition duration-300 group-hover:bg-[#ff66e6]">
            NK
          </span>

          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            NITESH KHATRI
          </span>
        </button>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-white/55 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile button */}

        <button
          type="button"
          onClick={() => setMobileMenu((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          md:hidden
          ${mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="border-t border-white/10 bg-[#080808] px-5 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="block w-full border-b border-white/10 py-4 text-left text-lg text-white/80 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

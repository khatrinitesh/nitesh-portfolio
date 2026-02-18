export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="font-bold text-white text-xl">Nitesh Khatri</h1>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="text-white hover:text-indigo-400 transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-indigo-400 transition"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-white hover:text-indigo-400 transition"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-white hover:text-indigo-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

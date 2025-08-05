import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.svg" alt="SalesMaster Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">SalesMaster</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex gap-8">
          {["benefits", "pricing", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition duration-200">
            Login
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

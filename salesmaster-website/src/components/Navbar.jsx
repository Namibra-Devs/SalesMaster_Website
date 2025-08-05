import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/images/salesmaster-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMenuOpen(prev => !prev);
    
    // Reset animation lock after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const navItems = [
    { id: "benefits", label: "Benefits" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
          {/* Logo + Typewriter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="SalesMaster Logo" className="h-13 w-13" />
            <div
              className="text-xl font-bold text-black-600 tracking-wide font-mono inline-flex min-w-[14ch] overflow-hidden whitespace-nowrap"
              style={{ lineHeight: "1.5" }}
            >
              <Typewriter
                words={["SalesMaster"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative group text-gray-700 text-lg font-medium transition cursor-pointer hover:text-blue-600"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="relative overflow-hidden px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:text-white transition duration-300 cursor-pointer group">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
            </button>
            <button className="relative overflow-hidden px-6 py-2 rounded-full bg-blue-600 text-white hover:text-blue-600 transition duration-300 cursor-pointer group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-[70]">
            <button
              onClick={toggleMenu}
              disabled={isAnimating}
              className="text-3xl text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110 disabled:opacity-50"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Animated Circular Menu Overlay (Mobile Only) */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Circular Menu */}
            <motion.div
              key="circle-menu"
              initial={{ 
                scale: 0, 
                x: "calc(100vw - 2rem)", 
                y: "1rem",
                borderRadius: "50%" 
              }}
              animate={{ 
                scale: 1, 
                x: 0, 
                y: 0,
                borderRadius: "0%",
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  borderRadius: { delay: 0.3, duration: 0.3 }
                }
              }}
              exit={{ 
                scale: 0, 
                x: "calc(100vw - 2rem)", 
                y: "1rem",
                borderRadius: "50%",
                transition: {
                  duration: 0.5,
                  ease: [0.55, 0.06, 0.68, 0.19],
                  borderRadius: { duration: 0.2 }
                }
              }}
              className="fixed inset-0 bg-white z-[60] md:hidden flex items-center justify-center"
              style={{
                transformOrigin: "calc(100vw - 2rem) 1rem"
              }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: { delay: 0.5, duration: 0.3 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  rotate: 90,
                  transition: { duration: 0.2 }
                }}
                onClick={toggleMenu}
                className="absolute top-6 right-6 z-[70] w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 shadow-lg"
              >
                <HiX className="text-2xl text-gray-700" />
              </motion.button>

              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.3 }
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center justify-center text-center"
              >
                {/* Navigation Items */}
                <ul className="space-y-8 mb-12">
                  {navItems.map(({ id, label }, index) => (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.5 + (index * 0.1), 
                          duration: 0.3 
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20,
                        transition: { 
                          delay: (navItems.length - index - 1) * 0.05,
                          duration: 0.2 
                        }
                      }}
                    >
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
                      >
                        {label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.8, duration: 0.3 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 20,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col gap-4 w-64"
                >
                  <button className="w-full py-3 px-6 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 font-medium">
                    Login
                  </button>
                  <button className="w-full py-3 px-6 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 font-medium">
                    Get Started
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
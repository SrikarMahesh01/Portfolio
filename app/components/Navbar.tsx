"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "phd-guidance", "responsibilities", "publications", "awards", "academic-enrichment"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👤" },
    { name: "Experience", href: "#experience", icon: "💼" },
    { name: "Education", href: "#education", icon: "🎓" },
    { name: "PhD Guidance", href: "#phd-guidance", icon: "📚" },
    { name: "Responsibilities", href: "#responsibilities", icon: "🛠️" },
    { name: "Publications", href: "#publications", icon: "📄" },
    { name: "Awards", href: "#awards", icon: "🏆" },
    { name: "Academic Enrichment", href: "#academic-enrichment", icon: "📖" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile and small tablets */}
      <nav className="hidden lg:block fixed top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 w-[96%] sm:w-[98%] max-w-[95rem] z-50 transition-all duration-300">
        <div className="bg-gray-900/85 backdrop-blur-sm rounded-2xl sm:rounded-3xl md:rounded-full shadow-lg border border-gray-800/50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
              {/* Left side - Name */}
              <div className="flex-shrink-0 mr-4 sm:mr-6 md:mr-8">
                <Link 
                  href="#home" 
                  className={`text-sm sm:text-base lg:text-lg font-bold text-white truncate transition-all duration-300 ${
                    currentSection === "home" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Dr. K P N V Satya Sree
                </Link>
              </div>
              
              {/* Right side - Navigation */}
              <div className="flex flex-grow justify-end">
                <div className="flex items-center justify-end space-x-2 lg:space-x-3 xl:space-x-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-2 lg:px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-white hover:text-blue-400 hover:bg-gray-800/50 transition-all whitespace-nowrap ${
                        currentSection === link.href.substring(1) ? "bg-gray-800/50 text-blue-400" : ""
                      }`}
                    >
                      <span className="hidden lg:inline">{link.name}</span>
                      <span className="lg:hidden">{link.name.length > 12 ? link.name.split(' ')[0] : link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Menu Button - Shows on mobile and landscape mobile/tablets */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed bottom-20 right-6 z-50 bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800/90 text-white p-3 rounded-full shadow-lg border border-gray-700/50 transition-all duration-300"
        aria-label="Toggle mobile menu"
        suppressHydrationWarning
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Mobile Navigation Tray - Shows on mobile and landscape mobile/tablets */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            className="fixed bottom-0 right-0 w-96 max-w-[95vw] h-auto max-h-[85vh] bg-gray-900/95 backdrop-blur-md rounded-tl-2xl shadow-2xl border-l border-t border-gray-700/50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-center p-4 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
            </div>

            {/* Mobile Menu Links */}
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    // Enhanced smooth scrolling for mobile
                    const targetId = link.href;
                    if (targetId && targetId.startsWith('#')) {
                      const targetElement = document.querySelector(targetId);
                      if (targetElement) {
                        const navbarHeight = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
                        
                        // Use smoother scrolling with better mobile support
                        setTimeout(() => {
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }, 100); // Small delay for mobile menu animation to complete
                      }
                    }
                  }}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-all duration-200 ${
                    currentSection === link.href.substring(1)
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 
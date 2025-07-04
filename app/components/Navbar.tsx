"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "PhD Guidance", href: "#phd-guidance" },
    { name: "Responsibilities", href: "#responsibilities" },
    { name: "Publications", href: "#publications" },
    { name: "Awards", href: "#awards" },
    { name: "Academic Enrichment", href: "#academic-enrichment" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-[95rem] z-50 transition-all duration-300">
      <div className="bg-gray-900/85 backdrop-blur-sm rounded-full shadow-lg border border-gray-800/50">
        <div className="max-w-[95rem] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Name */}
            <div className="flex-shrink-0 mr-8">
              <Link 
                href="#home" 
                className={`text-base lg:text-lg font-bold text-white truncate transition-all duration-300 ${
                  currentSection === "home" ? "opacity-0" : "opacity-100"
                }`}
              >
                Dr. K P N V Satya Sree
              </Link>
            </div>
            
            {/* Right side - Navigation */}
            <div className="hidden md:flex flex-grow justify-end">
              <div className="flex items-center justify-end space-x-3 lg:space-x-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-white hover:text-blue-400 hover:bg-gray-800/50 transition-all whitespace-nowrap ${
                      currentSection === link.href.substring(1) ? "bg-gray-800/50 text-blue-400" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-blue-400 hover:bg-gray-800/50 focus:outline-none"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out mt-2 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-gray-900/85 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-800/50 px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-full text-sm font-medium text-white hover:text-blue-400 hover:bg-gray-800/50 transition-all ${
                currentSection === link.href.substring(1) ? "bg-gray-800/50 text-blue-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
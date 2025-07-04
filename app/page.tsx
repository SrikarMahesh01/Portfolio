"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import PhDGuidance from "./sections/PhDGuidance";
import Responsibilities from "./sections/Responsibilities";
import Publications from "./sections/Publications";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Nptel from "./sections/Nptel";
import DotPattern from "./components/DotPattern";
import AcademicEnrichment from "./sections/AcademicEnrichment";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling to the HTML element
    document.documentElement.classList.add("scroll-smooth");
    
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Add offset for the fixed navbar
            const navbarHeight = 80; // Increased navbar height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navbar is fixed and always black */}
      <Navbar />
      
      {/* Hero section with dark background */}
      <div className="relative bg-gray-900 text-gray-100">
        <Hero />
      </div>
      
      {/* Alternating section backgrounds with increased spacing */}
      <div className="relative bg-gray-100">
        <DotPattern isDark={false} />
        <About />
      </div>
      
      <div className="relative bg-gray-900">
        <DotPattern isDark={true} />
        <Experience />
      </div>
      
      <div className="relative bg-gray-100">
        <DotPattern isDark={false} />
        <Education />
      </div>
      
      <div className="relative bg-gray-900">
        <DotPattern isDark={true} />
        <PhDGuidance />
      </div>
      
      <div className="relative bg-gray-100">
        <DotPattern isDark={false} />
        <Responsibilities />
      </div>
      
      <div className="relative bg-gray-900">
        <DotPattern isDark={true} />
        <Publications />
      </div>
      
      <div className="relative bg-gray-100">
        <DotPattern isDark={false} />
        <Nptel />
      </div>
      
      <div className="relative bg-gray-900">
        <DotPattern isDark={true} />
        <Awards />
      </div>
      
      <div className="relative bg-gray-100">
        <DotPattern isDark={false} />
        <AcademicEnrichment />
      </div>
      
      <div className="bg-gray-100">
        <Contact />
      </div>
      
      <div className="bg-gray-900">
        <Footer />
      </div>
    </main>
  );
}

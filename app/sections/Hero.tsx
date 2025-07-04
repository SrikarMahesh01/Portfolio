"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import DotPattern from "../components/DotPattern";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-40 pb-8 md:pt-52 md:pb-8 min-h-screen flex flex-col justify-between">
      <DotPattern isDark={true} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Dr. K P N V <span className="text-blue-400">Satya Sree</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              Professor & HOD of AI
            </h2>
            <p className="text-gray-300 mb-10 text-xl leading-relaxed">
              With over 23 years of experience in teaching Computer Science & Engineering subjects,
              specializing in Artificial Intelligence, Machine Learning, and Data Mining.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="relative px-10 py-4 text-lg font-medium rounded-full text-white overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition duration-300 ease-in-out"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-700 transition duration-300 ease-in-out"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Contact Me
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-blue-400">
              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  KS
                </div>
              ) : (
                <Image 
                  src="/profile-photo.jpg" 
                  alt="Dr. K P N V Satya Sree" 
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 10%'
                  }}
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-auto mb-2 flex justify-center">
        <motion.a 
          href="#about"
          className="text-gray-300 hover:text-blue-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-label="Scroll to About section"
        >
          <FaArrowDown className="animate-bounce text-2xl" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 
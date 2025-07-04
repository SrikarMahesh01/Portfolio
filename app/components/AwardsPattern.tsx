"use client";

import { motion } from "framer-motion";
import { FaMedal, FaTrophy } from "react-icons/fa";

const AwardsPattern = () => {
  // Create arrays of items for different rows
  const rows = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="absolute w-full" style={{ top: `${(100 / rows.length) * rowIndex}%` }}>
          <motion.div
            className="absolute flex items-center space-x-8 opacity-5"
            style={{
              left: "-100%",
              width: "200%", // Double width to ensure seamless loop
            }}
            animate={{
              x: ["0%", "50%"] // Move by 50% (which is the full screen due to double width)
            }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
              delay: rowIndex * -7,
            }}
          >
            {/* Repeat icons enough times to fill double width */}
            {Array.from({ length: 20 }, (_, iconIndex) => (
              <div 
                key={iconIndex} 
                className="flex items-center space-x-8"
              >
                <FaTrophy 
                  className={`text-gray-800 w-12 h-12 transform ${
                    rowIndex % 2 === 0 ? "rotate-12" : "-rotate-12"
                  }`}
                />
                <FaMedal 
                  className={`text-gray-800 w-12 h-12 transform ${
                    rowIndex % 2 === 0 ? "-rotate-12" : "rotate-12"
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AwardsPattern; 
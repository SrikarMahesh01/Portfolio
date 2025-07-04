"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const PhDGuidance = () => {
  const phd = {
    student: {
      name: "V.Sai Priya",
      position: "Asst Professor, Srinivasa Engg College, Amalapuram",
      university: "Annamalai University",
      status: "SUBMITTED",
      guidePosition: "Co-Guide",
      period: "2016 to 2023"
    },
    monograms: [
      "Classification of breast cancer data using enhanced supervised ML in LAMBERT",
      "Enhanced Secure communication AODV routing protocol in MANETS"
    ]
  };

  return (
    <section id="phd-guidance" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">PhD Guidance</h2>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PhD Student Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/75 backdrop-blur-sm rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-blue-500 text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Current PhD Scholar</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700"><span className="font-medium">Name:</span> {phd.student.name}</p>
              <p className="text-gray-700"><span className="font-medium">Position:</span> {phd.student.position}</p>
              <p className="text-gray-700"><span className="font-medium">University:</span> {phd.student.university}</p>
              <p className="text-gray-700"><span className="font-medium">Status:</span> {phd.student.status}</p>
              <p className="text-gray-700"><span className="font-medium">Guide Position:</span> {phd.student.guidePosition}</p>
              <p className="text-gray-700"><span className="font-medium">Period:</span> {phd.student.period}</p>
            </div>
          </motion.div>

          {/* Monograms */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/75 backdrop-blur-sm rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FaBook className="text-blue-500 text-2xl mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Monograms</h3>
            </div>
            <ul className="space-y-4">
              {phd.monograms.map((monogram, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-blue-500 mr-3 mt-1.5">•</span>
                  <p className="text-gray-700">{monogram}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhDGuidance; 
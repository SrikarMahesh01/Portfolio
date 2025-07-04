"use client";

import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaLaptopCode, FaLanguage } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-28 pb-20 bg-gray-100 text-gray-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/75 backdrop-blur-sm p-8 rounded-3xl shadow-md relative z-10"
          >
            <div className="flex items-center mb-5">
              <FaUser className="text-blue-600 text-2xl mr-4" />
              <h3 className="text-3xl font-semibold text-gray-900">Professional Profile</h3>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              I am Dr. K P N V Satya Sree, a Professor and Head of Department for Artificial Intelligence
              at Usha Rama College of Engineering and Technology. With over 23 years of experience in the
              teaching field, I have developed expertise in various Computer Science & Engineering subjects.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              My areas of specialization include Artificial Intelligence and Neural Networks, Computer Vision,
              Machine Learning, Deep Learning Techniques, Cyber Security, Block Chain & Technology, IoT, Data Warehousing & Data Mining,
              and Advanced Operating Systems.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am passionate about guiding students and researchers in the field of AI and Computer Science,
              contributing to academic growth through research publications, and staying at the forefront of
              technological advancements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div className="bg-white/75 backdrop-blur-sm p-8 rounded-3xl shadow-md">
              <div className="flex items-center mb-5">
                <FaUser className="text-blue-600 text-2xl mr-4" />
                <h4 className="text-2xl font-semibold text-gray-900">Personal Info</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li><span className="font-medium">Name:</span> <span className="text-base">K P N V Satya Sree</span></li>
                <li className="text-lg"><span className="font-medium">Age:</span> 45</li>
                <li className="text-lg"><span className="font-medium">Nationality:</span> Indian</li>
                <li className="text-lg"><span className="font-medium">Location:</span> India</li>
              </ul>
            </div>

            <div className="bg-white/75 backdrop-blur-sm p-8 rounded-3xl shadow-md">
              <div className="flex items-center mb-5">
                <FaGraduationCap className="text-blue-600 text-2xl mr-4" />
                <h4 className="text-2xl font-semibold text-gray-900">Education</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li><span className="font-medium">PhD:</span> Computer Science & Engineering</li>
                <li><span className="font-medium">M.E:</span> Computer Science</li>
                <li><span className="font-medium">B Level:</span> Master&apos;s Diploma in Computer Applications</li>
              </ul>
            </div>

            <div className="bg-white/75 backdrop-blur-sm p-8 rounded-3xl shadow-md">
              <div className="flex items-center mb-5">
                <FaLaptopCode className="text-blue-600 text-2xl mr-4" />
                <h4 className="text-2xl font-semibold text-gray-900">Expertise</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Data Mining</li>
                <li>Computer Vision</li>
              </ul>
            </div>

            <div className="bg-white/75 backdrop-blur-sm p-8 rounded-3xl shadow-md">
              <div className="flex items-center mb-5">
                <FaLanguage className="text-blue-600 text-2xl mr-4" />
                <h4 className="text-2xl font-semibold text-gray-900">Languages</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li><span className="font-medium">Telugu:</span> Native</li>
                <li><span className="font-medium">English:</span> Fluent</li>
                <li><span className="font-medium">Hindi:</span> Fluent</li>
                <li><span className="font-medium">Tamil:</span> Basic</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
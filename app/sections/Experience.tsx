"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "Sep 2017 - Present",
      title: "Professor",
      company: "Usha Rama College of Engineering and Technology",
      location: "Gannavaram, India",
      description: "Handling All the Computer Science & Engineering subjects (like Artificial Intelligence and Neural Networks, Computer Vision, Machine Learning, Deep Learning Techniques, Cyber Security, IOT, Data ware Housing & Data Mining, Advanced operating systems.)",
    },
    {
      id: 2,
      period: "August 2011 - Sep 2017",
      title: "Associate Professor",
      company: "Vignan's Nirula Institute of Technology and Science for Women",
      location: "Guntur, India",
      description: "Handled All the Computer Science & Engineering subjects (like Artificial Intelligence, Computer organization and its architectures, Data Warehouse and Data mining, Neural Networks, Security of Databases and Auditing, C& Data Structures, Hadoop and Big Data, Simulation & Modeling, DBMS and Hadoop lab.",
    },
    {
      id: 3,
      period: "December 2009 - July 2011",
      title: "Associate Professor",
      company: "Nalanda Institute of Engineering & Technology",
      location: "Guntur, India",
      description: "Handled All the Computer Science & Information Technology Subjects (like Microsoft Office, Artificial Intelligence, Computer graphics, Operating systems, Computer organization and its architectures, Computer Networks, Unix & Shell Programming, DBMS.",
    },
    {
      id: 4,
      period: "July 2007 - Nov 2008",
      title: "Associate Professor",
      company: "ASR College of Engineering",
      location: "Tanuku, India",
      description: "Handled All the Computer Science & Information Technology Subjects (like Microsoft Office, Artificial Intelligence, Computer graphics, Operating systems, Computer organization and its architectures, Computer Networks, Unix & Shell Programming, DBMS.",
    },
    {
      id: 5,
      period: "Aug 2002 - June 2007",
      title: "Associate Professor",
      company: "Godavari Institute of Engineering & Technology",
      location: "Rajahmundry, India",
      description: "Handled All the Computer Science & Information Technology Subjects (like Microsoft Office, RDBMS, Artificial Intelligence, Computer graphics, Operating systems, Computer organization and its architectures, Computer Networks, Unix & Shell Programming, Distributed Systems, C & Data structures). Also handled Computer Laboratories and served as Internal Placement Officer & Coordinating Placement Activities.",
    },
    {
      id: 6,
      period: "June 2001 - July 2002",
      title: "Lecturer",
      company: "ASR College of Engineering",
      location: "Kovvur, India",
      description: "Handled All the Computer Science & Information Technology Subjects (like Microsoft Office, Micro Processors & Its Architectures (8085 & 86), RDBMS, Computer Networks, Operating Systems, C & Data structures). Also handled Computer Laboratories.",
    },
  ];

  return (
    <section id="experience" className="pt-24 pb-16 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-800/75 backdrop-blur-sm p-6 rounded-3xl shadow-md">
                      <div className="flex items-center mb-2">
                        <FaBriefcase className="text-blue-400 text-xl mr-3" />
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaBuilding className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <FaCalendarAlt className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-400">{exp.period}</p>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
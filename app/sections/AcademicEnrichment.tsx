"use client";

import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const AcademicEnrichment = () => {
  const workshops = {
    coordinated: [
      {
        id: 1,
        title: "Machine Learning and IoT",
        description: "Faculty Development Program (FDP) at URCET in Association with E&ICT Academy by NIT, Warangal",
        date: "19th November 2017 to 24th November 2017",
        location: "Gannavaram, Andhra Pradesh, INDIA"
      },
      {
        id: 2,
        title: "Python programming with Industry Perspective",
        description: "Short Term Course conducted by E & ICT Academy, Indian Institute of Technology, Jaipur",
        date: "December 02-06, 2019"
      },
      {
        id: 3,
        title: "Advanced Emerging Trends in CSE&IT",
        description: "AICTE – ISTE online Induction/Refresher Programs in 3 Slots with Rs 3,00,000/- grant",
        slots: [
          "SLOT – 1: Jan 18th to Jan 23rd 2021 (one week)",
          "SLOT – II: Feb 23rd to Mar 1st 2021 (one week)",
          "SLOT – III: Mar 23rd to Mar 28th 2021 (one week)"
        ]
      },
      {
        id: 4,
        title: "Nanosensors and Devices",
        description: "Short Term Course (Online Mode) Organized by Applied Science Department, NITTTR Chandigarh",
        date: "22nd to 26th Aug 2022"
      }
    ],
    aicteProjects: [
      {
        id: 1,
        title: "SPICES Grant for Technozola",
        amount: "1,00,000/-",
        description: "Received grant from AICTE - Scheme for Promoting Interests, Creativity and Ethics among Students for student Association",
        date: "Jul 2021"
      },
      {
        id: 2,
        title: "MODROBS Grant",
        amount: "7,27,667/-",
        description: "Received grant in aid from AICTE under Modernization and Removal of Obsolescence scheme",
        period: "May 2020 to Nov 2022"
      }
    ],
    attended: {
      sttp: [
        {
          id: 1,
          title: "Python Programming with Industry Perspective",
          organizer: "E & ICT Academy, Indian Institute of Technology, Jaipur",
          date: "December 02-06, 2019"
        },
        {
          id: 2,
          title: "Introduction to Programming: A Pedagogical Approach",
          organizer: "E & ICT Academy, Indian Institute of Technology, Kanpur",
          date: "June 17-22, 2019"
        },
        {
          id: 3,
          title: "Block Chain and its applications",
          organizer: "E & ICT Academy, Indian Institute of Technology, Jaipur",
          date: "10-15, 2020"
        },
        {
          id: 4,
          title: "Linux Applications in Engineering Education",
          organizer: "NITTTR Chandighar",
          date: "27-01 MAY, 2020"
        },
        {
          id: 5,
          title: "NN and CNN",
          organizer: "NITTTR Chandighar",
          date: "11-16 MAY 2020"
        },
        {
          id: 6,
          title: "Quantam Computing and Machine learning",
          organizer: "JNTUA",
          date: "30-11-2020 to 05-12-2020"
        },
        {
          id: 7,
          title: "Large Language Models in Artificial Intelligence",
          organizer: "Andhra Pradesh Information Technology Academy & Blackbuck Engineers Pvt Ltd",
          date: "04 Oct 2023 - 07 Oct 2023"
        }
      ],
      fdp: [
        {
          id: 1,
          title: "Including Universal Human values in Technical Education",
          type: "AICTE- Universal Human Value",
          date: "14th - 18th, DEC 2020"
        },
        {
          id: 2,
          title: "AICTE-UHV REFRESHER Part 1",
          date: "7th - 11th FEB 2022"
        },
        {
          id: 3,
          title: "AICTE-UHV II REFRESHER Part 2",
          date: "15th - 20th May 2023"
        }
      ],
      atal: [
        {
          id: 1,
          title: "Deep Learning Using Convolutional Networks and Sequence Models",
          organizer: "Rao Bahadur Y.Mahabaleswarappa Engineering College",
          date: "Nov 23rd – 27th 2020"
        },
        {
          id: 2,
          title: "Artificial Intelligence",
          organizer: "Gandhi Institute For Technology (GIFT)",
          date: "Jun 21st – 25th 2021"
        },
        {
          id: 3,
          title: "AI – Natural Language Processing",
          organizer: "University College Of Engineering Kakinada (A)",
          date: "Nov 29th – Dec 3rd 2021"
        },
        {
          id: 4,
          title: "Data Analysis Tools & Techniques for Text and Speech Analytics",
          organizer: "LAKIREDDY BALI REDDY COLLEGE OF ENGINEERING",
          date: "Nov 14th – 25th 2022"
        },
        {
          id: 5,
          title: "CNN and GAN",
          organizer: "Sir C R Reddy college of Engineering, Eluru",
          date: "Dec 11th – 16th 2023"
        },
        {
          id: 6,
          title: "Sustainable Practices in Energy and Environment Sector",
          organizer: "D Y Patil International University",
          date: "Dec 16th – 21st 2024"
        },
        {
          id: 7,
          title: "Advanced Computing Redefined: Exploring AI, Quantum Computing and Cyber Security Synergies",
          organizer: "SHREEYASH PRATISHTHAN'S, SHREEYASH COLLEGE OF ENGINEERING & TECHNOLOGY",
          date: "Nov 25th – 30th 2024"
        },
        {
          id: 8,
          title: "Block Chain-Enabled IoT Networks with AI-Driven Automation",
          organizer: "Velagapudi Ramakrishna Siddhartha Engineering College",
          date: "Dec 2nd – 7th 2024"
        },
        {
          id: 9,
          title: "AI and Quantum Computing: The Future of Intelligent System",
          organizer: "BHARAT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
          date: "Dec 9th - 14th 2024"
        }
      ]
    }
  };

  return (
    <section id="academic-enrichment" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Academic Enrichment</h2>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Coordinated Workshops Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <FaChalkboardTeacher className="text-blue-500 mr-3" />
            Coordinated Funded Workshop/FDP's/STTP's
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.coordinated.map((workshop) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/75 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{workshop.title}</h4>
                <p className="text-gray-600 mb-2">{workshop.description}</p>
                {workshop.slots ? (
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    {workshop.slots.map((slot, index) => (
                      <li key={index} className="mb-1">{slot}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-gray-500">{workshop.date}</p>
                    {workshop.location && (
                      <p className="text-gray-500 italic">{workshop.location}</p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* AICTE Funded Projects Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <FaProjectDiagram className="text-blue-500 mr-3" />
            AICTE Funded Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.aicteProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/75 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h4>
                <p className="text-blue-600 font-semibold mb-2">₹{project.amount}</p>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-gray-500">{project.date || project.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshops Attended Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-gray-800 flex items-center"
          >
            <FaGraduationCap className="text-blue-500 mr-3" />
            Workshops Attended
          </motion.h3>

          {/* STTP Section */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-700">Short Term Training Programs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.attended.sttp.map((sttp) => (
                <motion.div
                  key={sttp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                >
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">{sttp.title}</h5>
                  <p className="text-gray-600 mb-2">{sttp.organizer}</p>
                  <p className="text-gray-500">{sttp.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FDP Section */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-gray-700">Faculty Development Programmes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.attended.fdp.map((fdp) => (
                <motion.div
                  key={fdp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                >
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">{fdp.title}</h5>
                  {fdp.type && <p className="text-gray-600 mb-2">{fdp.type}</p>}
                  <p className="text-gray-500">{fdp.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ATAL FDP Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-700">ATAL FDPs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.attended.atal.map((atal) => (
                <motion.div
                  key={atal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                >
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">{atal.title}</h5>
                  <p className="text-gray-600 mb-2">{atal.organizer}</p>
                  <p className="text-gray-500">{atal.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicEnrichment; 
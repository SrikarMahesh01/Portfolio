"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import AwardsPattern from "../components/AwardsPattern";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Governor's Award - National Award for Excellence in Teaching",
      organization: "Global Research Academy",
      year: "2017",
      description: "Supported by ministry of education.",
      icon: "trophy",
    },
    {
      id: 2,
      title: "Award of excellence in research",
      organization: "IEI from Vijayawada chapter",
      year: "2018",
      description: "",
      icon: "medal",
    },
    {
      id: 3,
      title: "BEST TEACHER from Ideal Teaching Awards Programme",
      organization: "Ideal Teaching Awards Programme",
      year: "2022",
      description: "Under the category \"Best Professor in Artificial Intelligence of the Year Award\".",
      icon: "trophy",
    },
    {
      id: 4,
      title: "BEST Performing SPOC- All India",
      organization: "EduSkills Connect '22- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Interships",
      year: "2022",
      description: "",
      icon: "certificate",
    },
    {
      id: 5,
      title: "Educator Excellence Award (BluePrism – Robotics Process Automation)",
      organization: "EduSkills Connect '22- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Internships",
      year: "2022",
      description: "",
      icon: "certificate",
    },
    {
      id: 6,
      title: "BEST Performing SPOC- All India",
      organization: "EduSkills Connect '23- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Interships",
      year: "2023",
      description: "",
      icon: "certificate",
    },
    {
      id: 7,
      title: "Educator Excellence Award (BluePrism – Robotics Process Automation)",
      organization: "EduSkills Connect '23- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Internships",
      year: "2023",
      description: "",
      icon: "certificate",
    },
    {
      id: 8,
      title: "Women Leadership Award",
      organization: "EduSkills Connect '23- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Internships",
      year: "2023",
      description: "",
      icon: "trophy",
    },
    {
      id: 9,
      title: "Best Outreach and Brand Promotion award",
      organization: "EduSkills Connect '23- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Internships",
      year: "2023",
      description: "",
      icon: "medal",
    },
    {
      id: 10,
      title: "Best Student Mentorship and Development Award",
      organization: "AIMER (Artificial Intelligence Medical and Engineering Researchers Society)",
      year: "2024",
      description: "Awarded on March 2nd, 2024 from AIMER Society",
      icon: "medal",
    },
    {
      id: 11,
      title: "Jyestha Acharya Award",
      organization: "Bharat Education Excellence Award",
      year: "2024",
      description: "Awarded on May 16th 2024",
      icon: "trophy",
    },
    {
      id: 12,
      title: "BEST Performing SPOC- All India",
      organization: "EduSkills Connect '24- NextGen Skill Annual Conclave from AICTE – EDUSKILLS Virtual Interships",
      year: "2024",
      description: "",
      icon: "certificate",
    },
    {
      id: 13,
      title: "MangoDB Academic Distinguished Mentor",
      organization: "MangoDB in Association with ICT academy",
      year: "2024",
      description: "",
      icon: "certificate",
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return <FaTrophy className="text-yellow-500 text-xl sm:text-2xl flex-shrink-0" />;
      case "medal":
        return <FaMedal className="text-blue-500 text-xl sm:text-2xl flex-shrink-0" />;
      case "certificate":
        return <FaCertificate className="text-green-500 text-xl sm:text-2xl flex-shrink-0" />;
      default:
        return <FaTrophy className="text-yellow-500 text-xl sm:text-2xl flex-shrink-0" />;
    }
  };

  return (
    <section id="awards" className="relative pt-24 pb-16 bg-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <AwardsPattern />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Awards & Achievements</h2>
          <div className="w-24 h-1.5 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/75 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative z-10">
                <div className="flex items-start mb-4 gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(award.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight break-words">{award.title}</h3>
                    <p className="text-gray-600 mb-1 text-sm sm:text-base break-words">{award.organization}</p>
                    <p className="text-blue-500 font-medium text-sm sm:text-base">{award.year}</p>
                  </div>
                </div>
                {award.description && (
                  <p className="text-gray-700 text-xs sm:text-sm mt-auto leading-relaxed break-words">{award.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 
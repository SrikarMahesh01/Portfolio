import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Dr. K P N V Satya Sree</h3>
            <p className="text-sm mt-1 text-gray-300">Professor & HOD of AI </p>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="mailto:satyasreekpnv@gmail.com" 
              className="text-gray-300 hover:text-blue-400"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </Link>
            <Link 
              href="tel:+919032798749" 
              className="text-gray-300 hover:text-blue-400"
              aria-label="Phone"
            >
              <FaPhone size={20} />
            </Link>
            <Link 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Dr. K P N V Satya Sree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
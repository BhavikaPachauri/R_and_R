import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of medical services including emergency care, primary care, specialized treatments, surgical procedures, diagnostic services, and preventive healthcare programs."
    },
    {
      question: "Do I need to make an appointment?",
      answer: "Yes, for most services we recommend scheduling an appointment to ensure you receive timely care. However, our emergency department is available 24/7 for urgent medical needs."
    },
    {
      question: "Do you accept walk-in appointments?",
      answer: "Yes, we accept walk-in patients for urgent care services. However, scheduled appointments are preferred to minimize waiting times."
    },
    {
      question: "Can I book an emergency appointment?",
      answer: "Our emergency department is available 24/7. For emergencies, you can come directly to the hospital without an appointment. For urgent but non-emergency cases, call our emergency hotline."
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we offer telemedicine services for select consultations. You can book an online consultation through our website or by calling our helpline."
    },
    {
      question: "What is the cost of a consultation?",
      answer: "Consultation costs vary depending on the type of service and specialist. Please contact our billing department or check our website for detailed pricing information."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 lg:py-20 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
  
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-[#1a365d] bg-blue-100 rounded-full">
              Healthcare Support
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-[#1a365d] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Find answers to common questions about our services and healthcare solutions
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-3 sm:space-y-4" data-aos="fade-right">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center group-hover:bg-blue-50/50 transition-colors duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl group-hover:text-[#1a365d] transition-colors duration-300 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-blue-100 rounded-full p-1.5 sm:p-2 group-hover:bg-blue-200 transition-colors duration-300 flex-shrink-0"
                    >
                      {activeIndex === index ? (
                        <FaMinus className="text-[#1a365d] w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <FaPlus className="text-[#1a365d] w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-50/50 to-red-50/50">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
  
            <div className="md:col-span-1 space-y-4 sm:space-y-6 lg:flex flex-col hidden" data-aos="fade-left">
              <div className="bg-gradient-to-br from-[#1a365d] via-blue-800 to-purple-300 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 sm:w-7 h-6 sm:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Need Help?</h3>
                </div>
                <p className="mb-4 sm:mb-6 text-blue-100 text-sm sm:text-base leading-relaxed">Our team is here to answer all your questions and provide the assistance you need.</p>
                <Link to="/contact" className="w-full flex justify-center bg-white/10 backdrop-blur-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 shadow-lg border border-white/20 text-sm sm:text-base">
                  Contact Us
                </Link>
              </div>
  
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#1a365d] rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-6 sm:w-7 h-6 sm:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">24/7 Emergency</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Our dedicated emergency team is available around the clock to provide immediate care when you need it most.</p>
                <a href="tel:9050201111" className="inline-flex items-center text-[#1a365d] font-semibold hover:text-blue-700 transition-colors duration-300 group text-sm sm:text-base">
                  <span>Call Emergency</span>
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Faqs;
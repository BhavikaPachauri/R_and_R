import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does R&R Hospital provide?",
      answer:
        "R&R Hospital offers multi-specialty healthcare services, including emergency care, critical care, surgery, diagnostics, preventive health check-ups, and specialty treatments.",
    },
    {
      question: "Where is R&R Hospital located?",
      answer: (
        <p>
          The hospital is conveniently located at{" "}
          <b>23, Churu Road, Basant Vihar, Jhunjhunu, Rajasthan 333001</b>,
          easily accessible by road and public transport.
        </p>
      ),
    },
    {
      question: "What are the hospital’s visiting hours?",
      answer: (
        <p>
          Visiting hours vary by department, but typically visitors are allowed
          between <b>4:00 PM – 6:00 PM</b> . Emergency and ICU visits follow
          special rules.
          <b>We need to confirm the visit at the right time</b>
        </p>
      ),
    },
    {
      question: "Does R&R Hospital have a 24/7 emergency department?",
      answer: (
        <p>
          Yes, our Emergency Department is open{" "}
          <b>24 hours a day, 7 days a week</b>, equipped with advanced
          facilities and experienced doctors.
        </p>
      ),
    },
    {
      question: "How can I book an appointment at R&R Hospital?",
      answer:
        "You can book appointments via our hospital website, helpline number, or directly at the reception desk.",
    },
    {
      question: "Does the hospital accept health insurance?",
      answer:
        "R&R Hospital has tie-ups with leading insurance providers and supports cashless treatment facilities. Patients are advised to confirm with our billing desk.",
    },
    {
      question:
        "Are there specialized doctors available for complex treatments?",
      answer:
        "Absolutely. We have highly qualified specialists across cardiology, neurology, oncology, orthopedics, pediatrics, and more.",
    },
    {
      question: "What facilities are available for admitted patients?",
      answer:
        "Our hospital provides general wards, semi-private and private rooms with modern amenities and 24/7 nursing care, and cafeteria services.",
    },
    {
      question: "Does R&R Hospital have diagnostic and pharmacy services?",
      answer:
        <p>Yes, we have a <b>(fully equipped diagnostic center)</b> and in-house pharmacy, both available round the clock.</p>,
    },
    {
      question: "How can I contact R&R Hospital for emergencies?",
      answer: (
        <p>
          You can reach our emergency helpline at: <b>9773319919</b>, available
          24/7 for immediate assistance.
        </p>
      ),
    },
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
            Find answers to common questions about our services and healthcare
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div
            className="md:col-span-2 space-y-3 sm:space-y-4"
            data-aos="fade-right"
          >
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
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div
            className="md:col-span-1 space-y-4 sm:space-y-6 lg:flex flex-col hidden"
            data-aos="fade-left"
          >
            {/* <div className="bg-gradient-to-br from-[#1a365d] via-blue-800 to-purple-300 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl transition-transform duration-300 hover:scale-105">
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
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Need Help?
                </h3>
              </div>
              <p className="mb-4 sm:mb-6 text-blue-100 text-sm sm:text-base leading-relaxed">
                Our team is here to answer all your questions and provide the
                assistance you need.
              </p>
              <Link
                to="/contact"
                className="w-full flex justify-center bg-white/10 backdrop-blur-lg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 shadow-lg border border-white/20 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div> */}

            {/* <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-100 transition-transform duration-300 hover:scale-105">
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
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">
                  24/7 Emergency
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Our dedicated emergency team is available around the clock to
                provide immediate care when you need it most.
              </p>
              <a
                href="tel: 9773319919"
                className="inline-flex items-center text-[#1a365d] font-semibold hover:text-blue-700 transition-colors duration-300 group text-sm sm:text-base"
              >
                <span>Call Emergency</span>
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

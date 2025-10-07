import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBone,
  FaXRay,
  FaStethoscope,
  FaPills,
  FaUserNurse,
  FaSyringe,
  FaProcedures,
  FaTooth,
  FaRunning,
  FaArrowRight, 
} from "react-icons/fa";

const SpecializationDetail = () => {
  const navigate = useNavigate();
  const departments = [
    {
      name: "General Surgery",
      icon: <FaSyringe className="w-8 h-8 text-white" />,
      description:
        "Comprehensive surgical care with advanced techniques for safe and faster recovery.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&h=400&fit=crop",
    },
    {
      name: "Orthopaedics",
      icon: <FaBone className="w-8 h-8 text-white" />,
      description:
        "Expert treatment for bone, joint, and spine conditions with personalized rehabilitation.",
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/sn0LVu0NaY.webp",
    },
    {
      name: "Radiology",
      icon: <FaXRay className="w-8 h-8 text-white" />,
      description:
        "Accurate diagnostic imaging using advanced MRI, CT, and ultrasound technology.",
      image:
        "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RtTvnBYjvc.webp",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 lg:py-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="relative xl:max-w-[1298px] mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h3 className="text-sm md:text-base font-medium text-[#1a365d] tracking-[0.3em] uppercase mb-2">
            OUR SPECIALIZATION
          </h3>

          <div className="mb-4">
            <h4 className="text-[#1a365d] lg:text-4xl md:text-3xl sm:text-2xl text-[28px] leading-none max-w-3xl mx-auto font-bold mb-1">
              Expert Care <span className="text-[#1a365d]">in Every Field</span>
            </h4>

            <p className="text-gray-600 sm:text-xl text-[16px] font-medium max-w-4xl mx-auto leading-normal mt-2">
              From orthopaedics to paediatrics and women’s health, our
              specialists and modern facilities ensure complete care for every
              stage of life.
            </p>
          </div>
        </div>

        {/* Specialization cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {departments.map((dept, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() =>
                navigate(`/speciality/${dept.name.replace(/\s+/g, "").toLowerCase()}`)
              }
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative flex flex-col h-[420px]"
            >
              {/* Card top image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-emerald-900/50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-75"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card content */}
              <div className="p-6 relative bg-gradient-to-b from-white to-gray-50/30 flex-grow flex flex-col">
                <div className="absolute -top-8 right-6 w-14 h-14 bg-white rounded-xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    {dept.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1a365d] mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                  {dept.description}
                </p>
                <div className="flex items-center text-[#1a365d] text-base font-medium">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Read more button */}
        <div className="text-center mt-12">
          <Link
            to="/speciality"
            className="inline-flex items-center gap-2 px-6 py-4 bg-[#2D546F] text-white rounded-2xl font-bold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <span>Read More</span>
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecializationDetail;

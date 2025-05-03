import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaLanguage, FaAward, FaStethoscope } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
      }}
      data-aos="fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0]/10 to-[#a6f863]/10 rounded-t-2xl" />
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1d55b0] to-[#a6f863] rounded-full blur opacity-50" />
              <img
                src={doctor.doc_image}
                alt={`Doctor: ${doctor.doc_name}`}
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                data-aos="zoom-in"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-1 hover:text-[#1d55b0] transition-colors">
            {doctor.doc_name}
          </h3>
          <p className="text-[#1d55b0] text-md font-medium text-center mb-4 bg-gradient-to-r from-[#1d55b0] to-[#a6f863] bg-clip-text text-transparent">
            {doctor.doc_profile}
          </p>

          <div className="space-y-3 mb-6 bg-gray-50/50 p-4 rounded-xl">
            {doctor.specialization && (
              <div className="flex items-center text-gray-600 hover:text-[#1d55b0] transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow mr-3">
                  <FaStethoscope className="text-[#1d55b0] text-sm" />
                </div>
                <span className="text-sm">{doctor.specialization}</span>
              </div>
            )}
            {doctor.consultation && (
              <div className="flex items-center text-gray-600 hover:text-[#1d55b0] transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow mr-3">
                  <FaClock className="text-[#1d55b0] text-sm" />
                </div>
                <span className="text-sm">{doctor.consultation}</span>
              </div>
            )}
            {doctor.languages && (
              <div className="flex items-center text-gray-600 hover:text-[#1d55b0] transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow mr-3">
                  <FaLanguage className="text-[#1d55b0] text-sm" />
                </div>
                <span className="text-sm">{doctor.languages.join(", ")}</span>
              </div>
            )}
            {doctor.achievements && (
              <div className="flex items-center text-gray-600 hover:text-[#1d55b0] transition-colors group">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow mr-3">
                  <FaAward className="text-[#1d55b0] text-sm" />
                </div>
                <span className="text-sm">{doctor.achievements}</span>
              </div>
            )}
          </div>
          <Link
            to="/bookappointment"
            className="block w-full py-3 px-6 text-center text-white rounded-xl font-medium 
                     transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative group"
            style={{
              background: "linear-gradient(135deg, #1d55b0 0%, #a6f863 100%)",
            }}
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0] to-[#88cc52] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;

import React from "react";
import { Link } from "react-router-dom";

const DoctorHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 lg:py-20 py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#1d55b0] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#6ed54e] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="xl:max-w-[1293px] px-3 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d55b0]/5 to-[#6ed54e]/5 px-4 py-2 rounded-full border border-[#6ed54e]/20">
                <div className="w-2 h-2 bg-[#6ed54e] rounded-full animate-pulse"></div>
                <span className="text-[#1d55b0] font-medium">
                  Expert Medical Team
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Meet Our <span className="text-[#1d55b0]">Super Specialist</span>{" "}
              <br />
              <span className="text-[#6ed54e]">Doctors</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Our team of highly qualified and experienced doctors is dedicated to providing you with the best medical care and treatment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919050201111"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:px-8 px-6 sm:py-3.5 py-2.5 bg-[#1d55b0] text-white rounded-lg font-semibold hover:bg-[#1d55b0]/90 
                  transition-all duration-300 shadow-lg shadow-[#1d55b0]/20 hover:shadow-xl hover:shadow-[#1d55b0]/30 sm:text-base text-sm"
                aria-label="Chat with us on WhatsApp"
              >
                WhatsApp Us
              </a>
              <Link
                to="/bookappointment"
                className="sm:px-8 px-6 sm:py-3.5 py-2.5 bg-[#6ed54e] text-white rounded-lg font-semibold hover:bg-[#6ed54e]/90 
                  transition-all duration-300 shadow-lg shadow-[#6ed54e]/20 hover:shadow-xl hover:shadow-[#6ed54e]/30 sm:text-base text-sm"
                aria-label="Request an appointment"
              >
                Request an Appointment
              </Link>
            </div>
          </div>
          <div className="relative lg:h-[450px]" data-aos="fade-left">
            <div className="relative z-10 h-full">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/n19HGDen4P.webp"
                alt="Medical Professionals"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1d55b0] to-[#6ed54e] rounded-2xl transform lg:translate-x-4 lg:translate-y-4 -z-10 opacity-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHeader;

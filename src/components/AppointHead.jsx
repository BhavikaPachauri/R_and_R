import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AppointHead = () => {
  return (
    <div
      className="bg-gradient-to-br from-white via-[#6ed54e]/5 to-[#1d55b0]/5 lg:py-20 py-16"
      data-aos="fade-up"
    >
      <div className="xl:max-w-[1293px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
              <img
                src="./RR-Doctor.webp"
                alt="Doctor Appointment"
                className="w-full h-full object-cover"
                style={{ filter: "blur(0.5px) brightness(0.92)" }}
              />
            </div>
          </div>
          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div>
              <h3 className="text-sm md:text-base font-medium text-[#1a365d] tracking-[0.3em] uppercase mb-2">
                APPOINTMENT
              </h3>
              <h4 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] leading-tight sm:mb-4 mb-2">
                Schedule an appointment
                <br />
                <span className="text-[#1a365d]">with a Specialist</span>
              </h4>
              <p className="text-gray-600 text-lg mb-8">
                Consult our super specialist doctors for expert guidance. Book your appointment today for personalized care.
              </p>
            </div>

            <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0" />
                 <span className="text-gray-600">
                   <span className="font-semibold">Quick Appointments:</span> Book instantly with hassle-free scheduling
                 </span>
               </div>
               <div className="flex items-center gap-3">
                 <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0" />
                 <span className="text-gray-600">
                   <span className="font-semibold">Super Specialists:</span> Access highly qualified and trusted doctors
                 </span>
               </div>
               <div className="flex items-center gap-3">
                 <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0" />
                 <span className="text-gray-600">
                   <span className="font-semibold">Comprehensive Care:</span> Personalized guidance at every step
                 </span>
               </div>
             </div>

            <a
              href="#appointmentform"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white rounded-lg hover:shadow-lg hover:shadow-[#1d55b0]/20 transition-all duration-300 mt-8 font-semibold text-lg"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointHead;

import React from "react";

const AboutHeader = () => {
  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 lg:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#1a365d] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-[#6ed54e] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <div className="md:pl-8" data-aos="fade-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-red-500 p-0.5">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 md:h-7 w-6 md:w-7 text-[#1a365d]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-[#1a365d]">
                  Excellence in Healthcare
                </h4> 
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                R&R Hospital in Jhunjhunu  stands as a beacon of
                excellence in healthcare. As a leading multi-specialty hospital,
                we combine advanced medical technology with compassionate care
                to serve the community of Jhunjhunu and surrounding regions.
              </p>
             
              <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-4 border-l-2 border-[#1d55b0]">
                Our advanced facility blends next-generation medical technology with an expert team of healthcare professionals, providing exceptional patient care and superior treatment results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
               <div className="p-4 md:p-5 bg-white/90 rounded-xl shadow-md">
                 <div className="text-[#1a365d] font-semibold text-lg md:text-xl mb-2">
                   All-in-One Care
                 </div>
                 <div className="text-gray-600 text-sm md:text-base">
                   Doctors from different fields working together for your health
                 </div>
               </div>
               <div className="p-4 md:p-5 bg-white/90 rounded-xl shadow-md">
                 <div className="text-[#1a365d] font-semibold text-lg md:text-xl mb-2">
                   Latest Tools
                 </div>
                 <div className="text-gray-600 text-sm md:text-base">
                   Modern machines and equipment for quick and accurate treatment
                 </div>
               </div>
             </div>

            </div>
          </div>
          <div className="relative group" data-aos="fade-right">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0]/20 to-[#6ed54e]/20 rounded-2xl transform rotate-6 scale-105 transition-transform group-hover:rotate-3"></div> */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="./R-and-R Hospital.webp"
                alt="R&R Hospital Facilities"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;

import React from "react";

const AppointBanner = () => {
  return (
    <>
      <div className="bg-[#1a365d] py-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>

        <div className="xl:max-w-[1293px] mx-auto px-3 flex flex-col md:flex-row justify-between items-center max-md:text-center text-white relative z-10">
          <div className="space-y-2">
            <h2 className="sm:text-[32px] text-[24px] font-bold text-white">
              Book Your Appointment Today!
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Experience exceptional healthcare with our expert team
            </p>
          </div>

          <div className="flex flex-row gap-4 mt-5 md:mt-0">
            <a
              href="tel: 8432755555"
              className="bg-white text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 
                shadow-lg hover:shadow-xl hover:-translate-y-1 transform flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.257 1.13a11.042 11.042 0 005.516 5.516l1.13-1.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call for Enquiry
            </a>
            <a
              href="mailto:contact@rrmhospitals.com"
              className="bg-white text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 
                shadow-lg hover:shadow-xl hover:-translate-y-1 transform flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointBanner;

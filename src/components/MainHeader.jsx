import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#6ed54e]/5 to-[#1d55b0]/5 flex items-center lg:py-20 py-16">
      <div className="xl:max-w-[1293px] px-3 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div
            className="sm:space-y-5 space-y-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1d55b0]/5 to-[#6ed54e]/5 px-4 py-2 rounded-full border border-[#6ed54e]/20">
                <div className="w-2 h-2 bg-[#6ed54e] rounded-full animate-pulse"></div>
                <span className="text-[#1d55b0] font-medium">
                  Top-Notch Medical Care
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Excellence in <span className="text-[#1d55b0]">Care,</span>{" "}
              <br />
              Every Step of <span className="text-[#6ed54e]">the Way</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              We are committed to providing you with the best medical and
              healthcare services to help you live healthier and happier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="sm:px-8 px-6 sm:py-3.5 py-2.5 bg-[#1d55b0] text-white rounded-lg font-semibold hover:bg-[#1d55b0]/90 
                  transition-all duration-300 shadow-lg shadow-[#1d55b0]/20 hover:shadow-xl hover:shadow-[#1d55b0]/30 sm:text-base text-sm"
              >
                Explore
              </Link>
              <Link
                to="/contact"
                className="sm:px-8 px-6 sm:py-3.5 py-2.5 bg-[#6ed54e] text-white rounded-lg font-semibold hover:bg-[#6ed54e]/90 
                  transition-all duration-300 shadow-lg shadow-[#6ed54e]/20 hover:shadow-xl hover:shadow-[#6ed54e]/30 sm:text-base text-sm"
              >
                Apply
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0]/10 to-[#6ed54e]/10 rounded-xl"></div>
              <div className="relative sm:p-5 p-2 flex items-center gap-4">
                <div className="flex-1 text-center sm:px-4 px-2 border-r-2 border-[#6ed54e]/20">
                  <div className="text-lg font-semibold text-[#1d55b0]">
                    Expert Care
                  </div>
                  <div className="text-sm text-gray-600">24/7 Available</div>
                </div>
                <div className="flex-1 text-center sm:px-4 px-2">
                  <div className="text-lg font-semibold text-[#6ed54e]">
                    Quick Response
                  </div>
                  <div className="text-sm text-gray-600">
                    Emergency Services
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative lg:h-[450px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative z-10 h-full">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/yjkRr0N1bG.webp"
                alt="Medical Professional"
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

export default MainHeader;

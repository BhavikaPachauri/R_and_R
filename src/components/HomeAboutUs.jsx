import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeAboutUs = () => {
  return (
    <section className="lg:py-20 py-16">
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="aboutushome"
      >
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#2D546F] mb-1">About Us</h2>
          <div className="w-20 h-1 bg-[#E31F26] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="relative z-10">
              <img
                src="./R-and-R Hospital.png"
                alt="Image representing the values and vision of R&R Hospital"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#2D546F]">25+</p>
                    <p className="text-sm text-gray-600">Expert Doctors</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#E31F26]">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#2D546F] rounded-lg"></div> */}
            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#E31F26] rounded-lg"></div> */}
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="sm:space-y-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2D546F]">
                Welcome to R&R Hospital, Your Trusted Healthcare Partner
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  R&R Multispeciality Hospital is one ofthe most trusted healthcare institutions in jhunjhunu, built with the vision of delivering quality treatment with care compassion & commitment. With highly qualified medical specialists, modern infrastructure, and advanced medical technology. Our mission is to provide affordable health services-Patients first.
                </p>
                {/* <p className="text-gray-600 leading-relaxed">
                  Our state-of-the-art facility is equipped with modern medical
                  infrastructure and staffed by experienced healthcare
                  professionals. We are committed to providing accessible,
                  high-quality healthcare services to all members of our
                  community, upholding the values of care, excellence, and
                  dedication.
                </p> */}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#2D546F]  text-white rounded-2xl font-bold shadow-lg transform transition-all duration-300 ease-in-out hover:from-[#E31F26] hover:to-[#2D546F] hover:scale-105 hover:shadow-xl"
              >
                <span>Read More</span>
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;

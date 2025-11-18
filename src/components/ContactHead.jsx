import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactHead = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#6ed54e]/5 to-[#1d55b0]/5 lg:py-20 py-16">
      <div className="absolute top-10 left-10 text-blue-900">
        <div className="flex gap-2">
          <span className="text-2xl">✦</span>
          <span className="text-3xl">✦</span>
          <span className="text-xl">✦</span>
        </div>
      </div>

      <div className="xl:max-w-[1293px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100"
              data-aos="fade-up"
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RZFHWOmG2b.webp"
                alt="Hospital Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-sm md:text-base font-medium text-[#1a365d] tracking-[0.3em] uppercase mb-2">
                CONTACT US
              </h3>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] leading-tight sm:mb-4 mb-2">
                Get in Touch
                <br />
                <span className="text-[#1a365d]">with Us Today</span>
              </h4>
              <p className="text-gray-600 text-lg mb-8">
                Your health is our priority. Connect with us for appointments,
                questions, or support anytime.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:: 8432755555"
                className="flex items-center gap-3 group hover:text-[#1a365d] transition-colors"
                aria-label="Call : 8432755555"
                data-aos="fade-up"
              >
                <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0 group-hover:text-[#1d55b0] transition-colors" />
                <span className="text-gray-600 group-hover:text-[#1d55b0]">
                  <span className="font-semibold">Phone:</span> : 8432755555, 8432655555
                </span>
              </a>
              <a
                href="mailto:contact@rrmhospitals.com"
                className="flex items-center gap-3 group hover:text-[#1a365d] transition-colors"
                aria-label="Email contact@rrmhospitals.com"
                data-aos="fade-up"
              >
                <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0 group-hover:text-[#1a365d] transition-colors" />
                <span className="text-gray-600 group-hover:text-[#1d55b0]">
                  <span className="font-semibold">Email:</span>{" "}
                  contact@rrmhospitals.com
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/HgNAV1dBbFzCJi4j9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:text-[#1d55b0] transition-colors"
                aria-label="Open location in Google Maps"
                data-aos="fade-up"
              >
                <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0 group-hover:text-[#1a365d] transition-colors" />
                <span className="text-gray-600 group-hover:text-[#1a365d]">
                  <span className="font-semibold">Location:</span> 23, Churu
                  Road, Basant Vihar, Jhunjhunu, Rajasthan 333001
                </span>
              </a>
              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaCheckCircle className="text-blue-950 text-xl flex-shrink-0" />
                <span className="text-gray-600">
                  <span className="font-semibold">Hours:</span> 24/7 Emergency
                  Care Available
                </span>
              </div>
            </div>
            <a
              href="tel: 8432755555"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a365d] text-white rounded-lg hover:shadow-lg hover:shadow-[#1d55b0]/20 transition-all duration-300 mt-8"
              data-aos="fade-up"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHead;

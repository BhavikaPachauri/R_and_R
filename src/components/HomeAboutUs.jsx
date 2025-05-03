import React from "react";
import { Link } from "react-router-dom";

const HomeAboutUs = () => {
  return (
    <>
      <div
        className="relative xl:max-w-[1298px] px-3 mx-auto lg:py-20 sm:py-16 py-12"
        id="aboutushome"
      >
        <h3
          className="mx-auto text-[#1d55b0] lg:text-[48px] md:text-[40px] sm:text-[32px] text-[28px] font-bold leading-[1.2] text-center mb-12"
          data-aos="fade-down"
        >
          About Us
        </h3>

        <div className="flex flex-wrap lg:flex-row flex-col lg:items-center items-start gap-12 lg:gap-16">
          <div
            className="lg:w-[48%] w-[95%] mx-auto relative group"
            data-aos="fade-right"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0]/10 via-[#6ed54e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ONLYVbShaa.webp"
                alt="Image representing the values and vision of BYN Hospital"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 rounded-2xl shadow-lg"
              />

              <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                <span className="text-[#1d55b0] text-sm font-semibold">
                  Multi-Specialty Care
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                <span className="text-[#6ed54e] text-sm font-semibold">
                  Serving Bhiwani
                </span>
              </div>
            </div>
          </div>

          <div
            className="lg:w-[45%] w-full relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#1d55b0] to-[#6ed54e]"></div>
            <div className="lg:space-y-6 space-y-4 pl-4">
              <h4
                className="text-[#1d55b0] text-2xl lg:text-[26px] font-bold leading-[1.3] lg:text-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Welcome to BYN Hospital, Your Trusted Healthcare Partner
              </h4>
              <p
                className="text-gray-600 text-base lg:text-[16px] font-medium tracking-[0.02em] leading-[1.6] lg:text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Baba Yogi Neta Nath Hospital in Bhiwani stands as a beacon of
                excellence in healthcare. As a leading multi-specialty hospital,
                we combine advanced medical technology with compassionate care
                to serve the community of Bhiwani and surrounding regions.
              </p>
              <p
                className="text-gray-600 text-base lg:text-[16px] font-medium tracking-[0.02em] leading-[1.6] lg:text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Our state-of-the-art facility is equipped with modern medical
                infrastructure and staffed by experienced healthcare
                professionals. We are committed to providing accessible,
                high-quality healthcare services to all members of our
                community, upholding the values of care, excellence, and
                dedication.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-white rounded-lg hover:shadow-lg hover:shadow-[#1d55b0]/20 transition-all duration-300 mt-2"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;

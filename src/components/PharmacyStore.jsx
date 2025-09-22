import React from "react";
import { FaTruck, FaCheckCircle, FaPhone } from "react-icons/fa";

const PharmacyStore = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#F8F8F8] to-white">
      <div className="xl:max-w-[1293px] mx-auto px-3 lg:py-20 sm:py-16 py-10">
        <div className="max-w-[1074px] mx-auto">
          <div className="text-center mb-6 sm:mb-8" data-aos="fade-down">
            <h3 className="lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#000000] leading-tight font-semibold mb-2 sm:mb-3">
              R&R Hospital Pharmacy Store
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Your trusted partner for quality medicines and healthcare products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="relative h-[180px] sm:h-[250px] rounded-[19px] overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/b8PGp9AhEY.webp"
                alt="R&R Hospital Pharmacy Store"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                <h4 className="text-base sm:text-lg text-white font-semibold">
                  Well-Stocked Pharmacy
                </h4>
              </div>
            </div>

            <div className="relative h-[180px] sm:h-[250px] rounded-[19px] overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/eElxtP3yJA.webp"
                alt="R&R Hospital Pharmacy Store"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                <h4 className="text-base sm:text-lg text-white font-semibold">
                  Professional Service
                </h4>
              </div>
            </div>

            <div className="relative h-[180px] sm:h-[250px] rounded-[19px] overflow-hidden group" data-aos="fade-up" data-aos-delay="300">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/RcLKoo8jHV.webp"
                alt="R&R Hospital Pharmacy Store"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
                <h4 className="text-base sm:text-lg text-white font-semibold">
                  Quality Products
                </h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[19px] p-4 sm:p-6 shadow-lg" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-[#1a365d]">
                  Get Medicines at Your Doorstep!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  We now offer a fully stocked Pharmacy Store with exclusive
                  benefits just for you
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#1a365d]/5 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a365d] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm sm:text-base text-[#1a365d]">
                          Flat 10%–20% Discount
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          On a wide range of medicines
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a365d]/5 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaTruck className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a365d] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm sm:text-base text-[#1a365d]">
                          Free Home Delivery
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Within city limits
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a365d]/5 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a365d] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm sm:text-base text-[#1a365d]">
                          Fast & Reliable Service
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Hassle-free experience
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a365d]/5 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a365d] mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm sm:text-base text-[#1a365d]">
                          Trusted by Doctors
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Recommended by our in-house doctors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a365d]/10 to-[#1a365d]/5 rounded-lg p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-[#1a365d] mb-4">
                    Order Your Medicines Now
                  </h5>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1a365d]/20 p-2 rounded-full">
                          <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a365d]" />
                        </div>
                        <div>
                          <p className="text-lg sm:text-xl font-bold text-[#1a365d]">
                            +91-91665 61893
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            (Available 9 AM – 9 PM, All Days)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Your health is our priority – stay home, stay safe, and
                        let us bring your medicines to you!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <a
                    href="tel:+919166561893"
                    className="w-full bg-[#1a365d] flex justify-center items-center text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#1a365d]/90 transition-colors duration-300 text-sm"
                  >
                    Place Your Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyStore;

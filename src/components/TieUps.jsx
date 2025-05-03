import React, { useState } from "react";

const TieUps = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="xl:max-w-[1293px] mx-auto px-3 py-16">
        <h3
          className="lg:text-[54px] md:text-[54px] sm:text-[36px] text-[30px] text-center text-black lg:leading-[83px] leading-none font-semibold"
          data-aos="fade-down"
        >
          Our Tie-ups
        </h3>

        <div className="mt-10">
          <div
            className="flex flex-wrap justify-between items-center sm:pt-5 pt-7 lg:gap-0 md:gap-10 sm:gap-9 gap-5"
            data-aos="fade-up"
          >
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/iamWXAxZbI.webp"
                alt="Bhamashah Yojana Healthcare Partnership"
                className="h-auto w-auto aspect-square cursor-pointer"
              />
            </div>
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/92AasBovTB.webp"
                alt="Ex-Servicemen Contributory Health Scheme (ECHS)"
                className="h-auto w-auto aspect-square cursor-pointer"
              />
            </div>
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="500">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QoBhKtQE6q.webp"
                alt="Third Party Administrators (TPAs)"
                className="h-auto w-full aspect-square cursor-pointer bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-white rounded-lg hover:shadow-lg hover:shadow-[#1d55b0]/20 transition-all duration-300 mt-2"
            data-aos="fade-up"
          >
            {showDetails ? "Hide Details" : "More Details"}
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
          </button>
        </div>
        {showDetails && (
          <div className="mt-8 px-4 sm:px-0" data-aos="fade-up">
            <h4 className="text-[24px] sm:text-[32px] font-semibold text-center mb-6 sm:mb-8">
              TPA Empanelment Status
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 max-w-[1000px] mx-auto">
              <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-[#1d55b0]/20">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl text-green-500">
                      ✅
                    </span>
                  </div>
                  <h5 className="text-[20px] sm:text-[24px] font-semibold text-[#1d55b0]">
                    Empanelled TPAs
                  </h5>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Raksha TPA",
                    "Heritage Health TPA",
                    "Health India TPA",
                    "Vidal Health TPA",
                    "Universal Sompo Gen. Health Insurance TPA",
                    "MD India TPA",
                    "Family Health Insurance Plan Ltd. (FHPL)",
                    "Cholamandalam Gen. Health Insurance TPA",
                    "Tata AIG Health Insurance TPA",
                    "Niva Bupa Health Insurance TPA",
                    "Care Health Insurance TPA",
                  ].map((tpa, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[14px] sm:text-[16px] text-[#4a4949]"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1d55b0]"></span>
                      {tpa}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TieUps;

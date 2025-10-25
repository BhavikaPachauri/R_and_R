import React from "react";

const TieUps = () => {
  return (
    <>
   
      <div className="bg-[url('./Frame1.png')] bg-no-repeat bg-bgfull" id="tieups">
        <div className="xl:max-w-[910px] mx-auto px-3 py-16">
          <h3
            className="xl:text-[64px] lg:text-[58px]  md:text-[54px] sm:text-[36px] text-[30px] text-center text-[#ffffff] lg:leading-[83px] leading-none font-semibold"
            data-aos="fade-down"
          >
            Our Tie-ups
          </h3>
          <div
            className="flex flex-wrap justify-between items-center sm:pt-10 pt-7 lg:gap-0 md:gap-10 sm:gap-9 gap-5"
            data-aos="fade-up"
          >
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/iamWXAxZbI.webp"
                 alt="PmJay Healthcare Partnership for Affordable Medical Care"
                className="h-auto w-auto"
              />
            </div>
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="400">
                 <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QoBhKtQE6q.webp"
                alt="Railway Healthcare Partnership for Better Patient Access"
                className="h-auto w-auto"
              />
            </div>
            <div className="w-[26.33%]" data-aos="zoom-in" data-aos-delay="500">
               <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/92AasBovTB.webp"
                alt="Coe Healthcare Collaboration for Enhanced Medical Services"
                className="h-auto w-auto"
              />
             
            </div>
          </div>
          <div
            className="mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="text-base font-semibold rounded-full mt-7 transition-all text-[#61ADF8] bg-white px-6 py-2.5 border border-[#61ADF8] hover:shadow-gradient ease-linear duration-300">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TieUps;
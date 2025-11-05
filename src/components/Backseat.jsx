import React from "react";

const Backseat = () => {
  return (
    <>
      <div className="bg-gradient-to-t to-[#B7E6FF] from-white">
        <div className="absolute  w-full"></div>
        <div className="xl:max-w-[1293px] mx-auto px-3 md:pt-5">
          <div className="flex justify-between flex-wrap max-md:gap-8 max-sm:gap-5">
            <div className="md:w-[31.23%] sm:w-[40%] w-[60%] mx-auto">
              <img
                src="./Doctor1.png"
                alt="A young woman holding documents, symbolizing health and responsibility" className="h-auto"
              />
            </div>
            <div
              className="lg:w-[60%] md:w-[65%] w-full md:mt-36 relative"
              data-aos="fade-up"
            >
              <h1 className="xl:text-[64px] lg:text-[58px] md:text-[50px] lg:max-w-[640px] max-md:text-center sm:text-[36px] text-[30px] text-[#214169] lg:leading-[65px] leading-none font-semibold">
                Don’t Let Your Health Take A Backseat!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backseat;
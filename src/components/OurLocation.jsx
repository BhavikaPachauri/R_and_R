import React from "react";

const OurLocation = () => {
  return (
    <>
        <div
          className="xl:max-w-[1293px] mx-auto px-3 lg:py-20 sm:py-16 py-14"
          id="location"
        >
          <h2
            className="md:text-[48px] sm:text-[36px] text-[26px] text-black leading-[75%] font-semibold tracking-tight lg:mb-10 mb-7 text-center"
            data-aos="fade-up"
          >
            Our Location
          </h2>
          <div
            className="border-4 border-[#1a365d] rounded-xl overflow-hidden relative"
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/20 via-[#4a90e2]/10 to-[#1a365d]/20 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.177650640736!2d76.04619997529201!3d28.709947075622587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39125f984597a7f5%3A0x700110909603a20f!2sBaba%20Yogi%20Neta%20Nath%20Hospital%20%26%20Nursing%20College!5e1!3m2!1sen!2sin!4v1745994802961!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="xl:h-[505px] lg:h-[380px] sm:h-[300px] h-[200px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </>
  );
};

export default OurLocation;

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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.9548016623344!2d75.38284!3d28.133438599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391338f9bfffffff%3A0x974f9a7254458cba!2sR%26R%20Multispeciality%20Hospital!5e1!3m2!1sen!2sin!4v1758698843905!5m2!1sen!2sin" 
             width="100%"
             height="100%"
             allowFullScreen=""
             loading="lazy"
             className="xl:h-[505px] lg:h-[380px] sm:h-[300px] h-[200px]"
             referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    </>
  );
};

export default OurLocation;

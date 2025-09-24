import React from "react";

const FindUsHere = () => {
  return (
    <>
      <div
        className="bg-wavesBackground bg-no-repeat bg-bgfull pb-16 border-b"
        id="location"
      >
        <div className="xl:max-w-[1293px] mx-auto px-3">
          <h2
            className="xl:text-[64px] lg:text-[58px]  md:text-[54px] text-center sm:text-[36px] text-[30px] text-[#55728D] lg:leading-[83px] leading-none font-semibold mb-4"
            data-aos="fade-down"
          >
            Find Us Here
          </h2>
          <div data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.943741186203!2d74.95644858138454!3d30.181601010019637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39172df37ba25415%3A0x5c49522cb8b764e9!2sKrishna%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1734509215463!5m2!1sen!2sin"
              width="100%"
              border="0"
              height="100%"
              allowFullScreen=""
              className="lg:rounded-[34px] rounded-md xl:h-[505px] lg:h-[380px] sm:h-[300px] h-[200px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUsHere;
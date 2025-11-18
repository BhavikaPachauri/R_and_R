import React from "react";

const NabhCert = () => {
  return (
    <section className="lg:py-20 py-16">
      <div className="xl:max-w-[1293px] px-3 mx-auto">
        <h2
          className="md:text-[48px] sm:text-[36px] text-[26px] text-black font-bold tracking-tight lg:hidden text-center mb-6"
          data-aos="fade-down"
        >
          NABH Accreditation
        </h2>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div
            className="w-full lg:w-[40%] flex justify-center"
            data-aos="fade-left"
          >
            <a
              href="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/PJB6y9FQWB.pdf"
              target="_blank"
              className="group hover:scale-95 transition-all duration-300"
              rel="noopener noreferrer"
            >
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/K1lIGqKieG.webp"
                alt="NABH Accreditation"
                className="w-full lg:max-w-[250px] max-w-[70%] mx-auto"
              />
            </a>
          </div>

          <div className="w-full lg:w-[60%] text-justify" data-aos="fade-right">
            <h2 className="md:text-[48px] sm:text-[36px] text-[26px] text-black font-bold tracking-tight lg:flex hidden">
              NABH Accreditation
            </h2>
            <div className="space-y-2">
              <p className="text-[#4A5568] text-[16px] font-medium tracking-[2%] leading-[150%]">
                Quality and Safety are at the heart of everything we do. Our NABH accreditation reflects our commitment to international standards of patient safety, ethical practices, and clinical excellence. This recognition ensures that every patient who walks through our doors receives reliable, transparent, and world-class care.
              </p>
              {/* <p className="text-[#4A5568] text-[16px] font-medium tracking-[2%] leading-[150%]">
                R&R Multispecialty  Hospital Jhunjhunui is certified by the
                National Accreditation Board for Hospitals and Healthcare
                Providers (NABH), ensuring the highest standards in patient
                safety, infection control, administration, and infrastructure.
              </p> */}
              {/* <p className="text-[#4A5568] text-[16px] font-medium tracking-[2%] leading-[150%]">
                NABH accreditation consists of over 500 stringent objective
                elements that align with international standards such as JCI,
                HAS (France), NCQA (USA), and more. This certification enhances
                the global credibility of our healthcare services.
              </p>
              <p className="text-[#4A5568] text-[16px] font-medium tracking-[2%] leading-[150%]">
                At R&R Multispecialty  Hospital, we prioritize patient-centered care through
                skilled healthcare professionals and advanced diagnostic &amp;
                therapeutic care. Our NABH certification is a testament to our
                commitment to excellence.
              </p> */}
            </div>

            <div
              className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-blue-50 px-4 py-2 rounded-full text-[#1a365d] font-medium text-sm hover:bg-blue-100 transition-colors duration-300">
                Patient Safety
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full text-[#1a365d] font-medium text-sm hover:bg-blue-100 transition-colors duration-300">
                Quality Care
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full text-[#1a365d] font-medium text-sm hover:bg-blue-100 transition-colors duration-300">
                International Standards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NabhCert;

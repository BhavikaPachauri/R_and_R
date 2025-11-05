import React, { useState } from "react";

const TieUps = () => {
  const [showTPA, setShowTPA] = useState(false);

  return (
    <section
      id="tieups"
      className="bg-[url('./Frame1.png')] bg-no-repeat bg-cover bg-center py-16"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h3
          className="text-white font-semibold leading-tight mb-10
          xl:text-[64px] lg:text-[58px] md:text-[48px] sm:text-[36px] text-[28px]"
          data-aos="fade-down"
        >
          Our Tie-ups
        </h3>

        {/* Tie-up Logos */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center"
          data-aos="fade-up"
        >
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/iamWXAxZbI.webp"
              alt="PmJay Healthcare Partnership"
              className="w-[250px] sm:w-[280px] h-auto object-contain"
            />
          </div>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QoBhKtQE6q.webp"
              alt="Railway Healthcare Partnership"
              className="w-[250px] sm:w-[280px] h-auto object-contain"
            />
          </div>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/92AasBovTB.webp"
              alt="Coe Healthcare Collaboration"
              className="w-[250px] sm:w-[280px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Enquire Now Button */}
        <div data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={() => setShowTPA(!showTPA)}
            className="text-base font-semibold rounded-full mt-10 transition-all
              text-[#61ADF8] bg-white px-8 py-3 border border-[#61ADF8]
              hover:shadow-[0_0_15px_rgba(97,173,248,0.5)] ease-linear duration-300"
          >
           {showTPA ? <a>Hide Details</a>  : <a>More Details</a>}
          </button>
        </div>

        {/* Conditional Render for TPA Empanelment */}
        {showTPA && (
          <div className="mt-10">
            <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-6 text-white">
              TPA Empanelment Status
            </h1>
            <div
              className="bg-white p-8 sm:p-10 mt-6 space-y-5 rounded-lg shadow-lg text-gray-700 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-lg font-medium text-left">✅ Empanelled TPAs</h2>
              <ul
                className="list-disc marker:text-blue-700 text-left 
                 space-y-4 sm:space-y-1 
                 px-3 sm:px-6 md:px-8 
                 text-sm sm:text-base 
                 grid grid-cols-1  gap-x-10"
              >
                <li>FHPL</li>
                <li>VIPUL MEDCORP</li>
                <li>ERICSON TPA</li>
                <li>AMUL DUDH SAGAR TPA</li>
                <li>PARAMOUNT TPA</li>
                <li>Aditya Birla Health Insurance Company Limited</li>
                <li>BAJAJ ALLIANZ</li>
                <li>Bandhan Life Insurance Ltd.</li>
                <li>Bharti AXA</li>
                <li>Cholamandalam General Insurance Co Ltd.</li>
                <li>Future Generali India Insurance Company Ltd.</li>
                <li>Future Generali India Life Insurance Co. Ltd.</li>
                <li>Go Digit General Insurance Ltd.</li>
                <li>HDFC Ergo Health Insurance Ltd.</li>
                <li>HDFC Ergo General Insurance Company Limited</li>
                <li>HDFC Life Insurance Company Limited</li>
                <li>ICICI Lombard</li>
                <li>IFFCO Tokio General Insurance Company Ltd.</li>
                <li>Kotak Mahindra General Insurance Co. Ltd.</li>
                <li>Kotak Mahindra General Insurance Company Limited</li>
                <li>L&T General Insurance Company Limited</li>
                <li>Liberty General Insurance Company Limited</li>
                <li>Magma HDI General Insurance Company Limited</li>
                <li>ManipalCigna Health Insurance Company Limited</li>
                <li>Max Bupa</li>
                <li>
                  Max Life Insurance Company National Insurance Company Ltd.
                </li>
                <li>Navi General Insurance Ltd.</li>
                <li>Niva Bupa Health Insurance Co. Ltd.</li>
                <li>Raheja QBE General Insurance Company Limited</li>
                <li>Reliance General Insurance Co. Ltd.</li>
                <li>Royal Sundaram General Insurance Co. Ltd.</li>
                <li>SBI General Insurance Company Ltd.</li>
                <li>Shriram General Insurance Co</li>
                <li>Tata AIG General Insurance Company Ltd.</li>
                <li>The New India Assurance Company Ltd.</li>
                <li>The Oriental Insurance Company Ltd.</li>
                <li>United India Insurance Company Ltd.</li>
                <li>Universal Sompo General Insurance Company Ltd.</li>
                <li>Zuno General Insurance Limited</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TieUps;

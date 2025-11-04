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
            Enquire Now
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
              data-aos-delay="700"
            >
              <h2 className="text-lg font-medium">✅ Empanelled TPAs</h2>
              <ul className="list-disc list-inside marker:text-blue-700 text-left space-y-2">
                <li>Raksha TPA</li>
                <li>Heritage Health TPA</li>
                <li>Health India TPA</li>
                <li>Vidal Health TPA</li>
                <li>Universal Sompo Gen. Health Insurance TPA</li>
                <li>MD India TPA</li>
                <li>Family Health Insurance Plan Ltd. (FHPL)</li>
                <li>Cholamandalam Gen. Health Insurance TPA</li>
                <li>Tata AIG Health Insurance TPA</li>
                <li>Niva Bupa Health Insurance TPA</li>
                <li>Care Health Insurance TPA</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TieUps;

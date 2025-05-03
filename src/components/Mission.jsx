import { FaCogs, FaBullseye, FaAward } from "react-icons/fa";

export default function Mission() {
  return (
    <>
      <div className="bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 lg:py-20 py-16" id="Mission">
        <div className="xl:max-w-[1293px] px-3 mx-auto">
          <h4
            className="md:text-[48px] sm:text-[36px] text-[26px] text-[#1d55b0] font-semibold tracking-tight md:mb-10 mb-6 text-center relative"
            data-aos="fade-up"
          >
            Mission, Vision & Values
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1d55b0]/10 to-[#6ed54e]/10 flex items-center justify-center">
                <FaCogs className="text-[#1d55b0] text-4xl" />
              </div>
              <h3 className="lg:text-[24px] text-[18px] font-semibold text-[#1d55b0] my-1">
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide exceptional Multi-Super Specialty
                care, prioritizing patient well-being and excellence while
                embracing social responsibility.
              </p>
            </div>
            <div
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1d55b0]/10 to-[#6ed54e]/10 flex items-center justify-center">
                <FaBullseye className="text-[#1d55b0] text-4xl" />
              </div>
              <h3 className="lg:text-[24px] text-[18px] font-semibold text-[#1d55b0] my-1">
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to lead in Multi-Super Specialty care by
                transforming patient experiences with innovation, compassion,
                and a commitment to community health.
              </p>
            </div>
            <div
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1d55b0]/10 to-[#6ed54e]/10 flex items-center justify-center">
                <FaAward className="text-[#1d55b0] text-4xl" />
              </div>
              <h3 className="lg:text-[24px] text-[18px] font-semibold text-[#1d55b0] my-1">
                Core Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our core values highlight patient care, excellence, integrity,
                and compassion, along with innovation, teamwork, and a
                commitment to health equity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import {
  FaProcedures,
  FaAmbulance,
  FaBaby,
  FaXRay,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";

export default function OurServices() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 lg:py-20 py-16">
      <div className="xl:max-w-[1298px] px-6 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d]">
            Our Services
          </h2>
          <div className="w-28 h-1 bg-[#E31F26] mx-auto my-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#1a365d]">R&R Multispeciality Hospital</span>, we provide
            comprehensive healthcare under one roof, ensuring convenience, quality, and safety.
          </p>
        </div>

        {/* Service Highlights */}
        <div
          className="bg-white shadow-md rounded-2xl p-8 border border-gray-100"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-[#1a365d] mb-6">
            What We Offer
          </h3>
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-gray-700">
            <li className="flex items-start gap-3">
              <FaAmbulance className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  24×7 Emergency & Trauma Care:
                </span>{" "}
                Immediate response with fully equipped emergency units and ambulance services.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaStethoscope className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Advanced Operation Theatres:
                </span>{" "}
                Modular OTs equipped with modern technology for safe and precise surgeries.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHospital className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Critical Care Units (ICU):
                </span>{" "}
                Specialized care with advanced monitoring and life support.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaXRay className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Radiology & Diagnostics:
                </span>{" "}
                State-of-the-art MRI, CT (Outsource), Ultrasound, and X-ray facilities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaProcedures className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Pathology & Laboratory Services:
                </span>{" "}
                NABL-standard labs ensuring accurate and reliable test reports.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaHospital className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Pharmacy & Blood Bank:
                </span>{" "}
                In-house pharmacy and outsourced blood bank available 24×7.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaBaby className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Preventive Health Check-ups:
                </span>{" "}
                Complete health packages to detect risks early and promote wellness.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaProcedures className="text-[#E31F26] mt-1" size={20} />
              <span>
                <span className="font-semibold text-[#1a365d]">
                  Insurance & Cashless Facility:
                </span>{" "}
                Partnerships with leading insurance providers for hassle-free patient experience.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

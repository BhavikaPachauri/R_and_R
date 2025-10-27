import {
  FaProcedures,
  FaAmbulance,
  FaBaby,
  FaXRay,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";

export default function OurServices() {
  const services = [
    {
      icon: <FaAmbulance size={30} />,
      title: "24×7 Emergency",
      desc: "Immediate response with fully equipped emergency units and ambulance services.",
    },
    {
      icon: <FaStethoscope size={30} />,
      title: "Advanced Operation Theatres",
      desc: "Modular OTs equipped with modern technology for safe and precise surgeries.",
    },
    {
      icon: <FaHospital size={28} />,
      title: "Critical Care Units (ICU)",
      desc: "Specialized care with advanced monitoring and life support.",
    },
    {
      icon: <FaXRay size={30} />,
      title: "Radiology & Diagnostics",
      desc: "State-of-the-art MRI, CT (Outsource), Ultrasound, and X-ray facilities.",
    },
    {
      icon: <FaProcedures size={30} />,
      title: "Pathology & Laboratory Services",
      desc: "NABL-standard labs ensuring accurate and reliable test reports.",
    },
    {
      icon: <FaHospital size={28} />,
      title: "Pharmacy & Blood Bank",
      desc: "In-house pharmacy and outsourced blood bank available 24×7.",
    },
    {
      icon: <FaBaby size={30} />,
      title: "Preventive Health Check-ups",
      desc: "Complete health packages to detect risks early and promote wellness.",
    },
    {
      icon: <FaProcedures size={30} />,
      title: "Insurance & Cashless Facility",
      desc: "Partnerships with leading insurance providers for hassle-free patient experience.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 lg:py-20 py-16">
      <div className="xl:max-w-[1298px] px-6 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d]">
            Our Services
          </h2>
          <div className="w-28 h-1 bg-[#E31F26] mx-auto my-3 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#1a365d]">
              R&R Multispeciality Hospital
            </span>
            , we provide comprehensive healthcare under one roof, ensuring
            convenience, quality, and safety.
          </p>
        </div>

        {/* Service Highlights */}
        <div data-aos="fade-up">
          <h3 className="text-3xl text-center font-semibold text-[#1a365d] mb-10">
            What We Offer
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start gap-4 border border-gray-100 
                hover:shadow-lg hover:border-[#E31F26]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E31F26]/10 text-[#E31F26] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#1a365d] group-hover:text-[#E31F26] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

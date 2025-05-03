import {
  FaProcedures,
  FaAmbulance,
  FaBaby,
  FaXRay,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaProcedures size={40} className="text-primary" />,
    title: "Deluxe Rooms",
    description: "Comfortable and well-equipped deluxe rooms for patients.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/sNTPMisMMC.webp",
  },
  {
    icon: <FaAmbulance size={40} className="text-primary" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with quick response time.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/YSaFNUEHl0.webp",
  },
  {
    icon: <FaBaby size={40} className="text-primary" />,
    title: "NICU",
    description: "Specialized Neonatal Intensive Care Unit for newborns.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Vip0tNe6g0.webp",
  },
  {
    icon: <FaXRay size={40} className="text-primary" />,
    title: "Digital X-Ray",
    description: "Advanced digital X-ray facilities for accurate diagnosis.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FHsVsRXMwX.webp",
  },
  {
    icon: <FaHospital size={40} className="text-primary" />,
    title: "ICU",
    description:
      "Intensive Care Unit with state-of-the-art monitoring systems.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BdLHg2Woxi.webp",
  },
  {
    icon: <FaStethoscope size={40} className="text-primary" />,
    title: "Modular OT",
    description: "Modern and fully-equipped modular operation theatres.",
    image:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BdLHg2Woxi.webp",
  },
];

export default function OurServices() {
  return (
    <div className="xl:max-w-[1298px] mx-auto px-3 lg:py-20 py-16">
    <div
      className="text-center lg:mb-16 sm:mb-10 mb-8"
      data-aos="fade-down"
    >
      <h2 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[28px] font-bold text-gray-900 sm:mb-4">
        Our Services
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We provide comprehensive healthcare services with modern facilities
        and experienced medical professionals.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative h-56 sm:h-48 lg:h-52 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6 relative">
            <div className="absolute -top-10 left-6 bg-white rounded-2xl p-3 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

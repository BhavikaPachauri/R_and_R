import {
  FaHospital,
  FaHeartbeat,
  FaProcedures,
  FaAmbulance,
  FaMicroscope,
  FaBed,
} from "react-icons/fa";

export default function Facilities() {
  const facilities = [
    {
      icon: <FaBed size={26} />,
      title: "Spacious NABH-standard Patient Rooms",
      desc: "General, Semi-private, Private & Deluxe rooms designed for comfort and safety.",
    },
    {
      icon: <FaAmbulance size={26} />,
      title: "24×7 Emergency & Ambulance",
      desc: "Immediate response and rapid transfer with fully equipped emergency services.",
    },
    {
      icon: <FaMicroscope size={26} />,
      title: "Advanced Imaging & Diagnostics",
      desc: "Modern MRI, CT (Outsource), Ultrasound, and X-ray for accurate results.",
    },
    {
      icon: <FaHospital size={26} />,
      title: "Pharmacy & Blood Bank",
      desc: "In-house pharmacy and outsourced blood bank available 24×7.",
    },
    {
      icon: <FaHospital size={26} />,
      title: "Comfort & Convenience",
      desc: "Comfortable waiting lounges, hygienic cafeteria, and ample parking for families.",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20"
      id="facilities"
    >
      <div className="max-w-[1280px] px-6 mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="./Surgical Team Working.jpeg"
              alt="Operation Theatre"
              className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              State-of-the-Art Operation Theatres
            </h2>
            <div className="w-20 h-1 bg-[#E31F26] mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our hospital is equipped with modular operation theatres designed
              for maximum safety and efficiency. With modern anesthesia systems,
              advanced surgical tools, and international sterilization
              protocols, we ensure that every surgery is performed with the
              highest precision and safety standards.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Critical Care Unit
            </h2>
            <div className="w-20 h-1 bg-[#E31F26] mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our critical care unit (ICU) is designed to handle life-threatening
              conditions with advanced monitoring systems, ventilators, and
              round-the-clock care. From adults with complex illnesses, our
              dedicated team of intensivists and nurses ensure personalized,
              continuous attention.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="./ICU.jpg"
              alt="ICU"
              className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-4">
            Infrastructure & Facilities
          </h2>
          <div className="w-20 h-1 bg-[#E31F26] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            At{" "}
            <span className="font-semibold text-[#1a365d]">
              R&R Multispeciality Hospital
            </span>
            , patients experience holistic care supported by world-class
            infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-md 
                hover:shadow-2xl hover:-translate-y-1 hover:border-[#E31F26]/40 transition-all duration-300 group"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full 
                  bg-[#E31F26]/10 text-[#E31F26] mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#1a365d] mb-2 group-hover:text-[#E31F26] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

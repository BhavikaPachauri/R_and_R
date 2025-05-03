import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import DepartData from "../common/DepartData";
import AppointBanner from "../AppointBanner";
import ServiceSlider from "../common/ServiceSlider";

const SpecialityPage = () => {
  const { name } = useParams();
  const speciality = DepartData[name?.toLowerCase()] || {
    title: "Specialization",
    description: "Details about this specialization will be available soon.",
    highlights: {},
    doctors: [],
    testimonials: [],
    faqs: [],
  };

  return (
    <>
      <NavBar />
      <div
        className="relative w-full sm:h-[400px] h-[300px] flex items-center justify-center text-white text-5xl font-bold bg-cover bg-center"
        style={{
          backgroundImage: `url(https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/HqvA154Vsg.webp)`,
          backgroundAttachment: "fixed",
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d55b0] via-[#1d55b0]/90 to-[#6ed54e] opacity-85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
        <h2 className="text-[40px] md:text-[56px] font-bold leading-tight text-white z-10 text-center px-4 drop-shadow-lg">
          {speciality.title}
        </h2>
      </div>
      <div className="relative" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 rounded-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d55b0]/10 via-transparent to-transparent"></div>
        <div className="xl:max-w-[1293px] mx-auto px-3 py-16 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {speciality.description}
            </p>
            {Object.keys(speciality.highlights || {}).length > 0 && (
              <ul className="grid md:grid-cols-2 gap-8 mt-12">
                {Object.entries(speciality.highlights || {}).map(
                  ([title, description], index) => (
                    <li
                      key={index}
                      className="text-lg bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:scale-105"
                      data-aos="fade-up"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-2xl">
                          {title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {description}
                      </p>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <ServiceSlider />
      {speciality.doctors.length > 0 && (
        <div className="relative" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d55b0]/10 via-transparent to-transparent"></div>
          <div className="xl:max-w-[1293px] mx-auto px-3 py-16">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-center mb-12">
                Meet Our Experts
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {speciality.doctors.map((doctor, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-8 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2"
                    data-aos="fade-up"
                  >
                    {doctor.image ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] rounded-full blur-md opacity-30"></div>
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-40 h-40 rounded-full object-cover border-4 border-white mb-6 shadow-md relative z-10"
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] rounded-full blur-md opacity-30"></div>
                        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mb-6 shadow-md relative z-10">
                          <svg
                            className="w-20 h-20 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] mt-4">
                      {doctor.name}
                    </h3>
                    <p className="text-[#1d55b0] font-semibold text-lg mt-2">
                      {doctor.designation}
                    </p>
                    {doctor.experience && (
                      <p className="text-gray-600 mt-2">{doctor.experience}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ServiceSlider />
      {speciality.testimonials.length > 0 && (
        <div className="relative" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d55b0]/10 via-transparent to-transparent"></div>
          <div className="xl:max-w-[1293px] mx-auto px-3 py-16">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-center mb-12">
                What Our Patients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {speciality.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-8 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <div className="flex items-center mb-4">
                      <svg
                        className="w-12 h-12 text-[#1d55b0]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] font-semibold mt-6 text-lg">
                      - {testimonial.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <AppointBanner />
      {speciality.faqs.length > 0 && (
        <div className="relative" data-aos="fade-up">
          <div className="xl:max-w-[1293px] mx-auto px-3 py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#1d55b0]/5 to-[#6ed54e]/5 rounded-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1d55b0]/10 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d55b0] to-[#6ed54e] text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {speciality.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <h3 className="font-bold text-2xl">{faq.question}</h3>
                    <p className="text-lg text-gray-700 mt-4">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SpecialityPage;

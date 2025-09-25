import React, { useState } from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultDoctor = {
    doc_name: "Dr. Sarah Johnson",
    doc_profile: "Cardiologist Specialist",
    doc_image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    specialization: "Cardiovascular Surgery",
    consultation: "30 min consultation",
    languages: ["English", "Spanish", "French"],
    achievements: "15+ Years Experience",
    rating: 4.9,
    totalReviews: 324,
    location: "New York Medical Center",
    availability: "Available Today",
    doc_details:
      "Highly skilled cardiologist with expertise in complex cardiovascular surgeries.",
  };

  // merge default + props
  const docData = { ...defaultDoctor, ...doctor };

  return (
    <div
      className="p-5 bg-gray-100 rounded-[16px] shadow-md hover:shadow-lg transition-all duration-300 ease-linear group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Doctor Image */}
      <img
        src={docData.doc_image}
        alt={`Expert Doctor: ${docData.doc_name} providing specialized medical care`}
        className="mb-4 w-full h-56 rounded-[13px] shadow-doctorimg group-hover:scale-[1.02] transition-all duration-300 ease-linear"
        data-aos="zoom-in"
      />

      {/* Doctor Info */}
      <div>
        <h3
          className="text-[#3E4958] text-[18px] font-semibold text-center"
          data-aos="fade-left"
        >
          {docData.doc_name}
        </h3>
        <p
          className="text-[#61ADF8] text-[14px] italic text-center"
          data-aos="fade-left"
        >
          {docData.doc_profile}
        </p>
        <p
          className="text-[#747474] text-[14px] font-medium text-center leading-[127%] my-3"
          dangerouslySetInnerHTML={{ __html: docData.doc_details }}
          data-aos="fade-up"
        ></p>

        {/* Appointment Button */}
        <Link
          to="/bookappointment"
          className="group text-white bg-[#1a365d] group-hover:scale-105 transition-all duration-300 ease-linear text-[16px] px-[27px] py-1 font-semibold rounded-[76px] flex justify-center items-center mx-auto  mb-2 gap-[14px]"
          data-aos="zoom-in"
        >
          Get Appointment
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/YjOq51xI62.png"
            alt="Arrow icon indicating the action to book appointment"
            width={7}
            height={11}
            className="group-hover:translate-x-1 transition-all duration-300 ease-linear"
          />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

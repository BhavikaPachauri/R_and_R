import React, { useState } from "react";
import DoctorCard from "./common/DoctorCard";
import dummyData from "./common/CardData";
import { useNavigate } from "react-router-dom";

const BynDoctor = () => {
  const navigate = useNavigate();
  const [doctors] = useState(dummyData);

  const handleProductClick = (doctor) => {
    console.log("Doctor clicked:", doctor);
  };

  return (
    <>
      <div className="bg-[#639e51]">
        <div className="text-sm text-gray-600 xl:max-w-[1293px] mx-auto px-3 py-3">
          <span
            className="text-[#ffffff] font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >
            HOME
          </span>
          <span className="mx-2 text-white">&gt;</span>
          <span className="font-medium text-white underline">OUR DOCTORS</span>
        </div>
      </div>

      <div className="xl:max-w-[1293px] mx-auto px-3 sm:py-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              doctor={doctor}
              onProductClick={handleProductClick}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BynDoctor;

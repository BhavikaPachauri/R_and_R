import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#F7F8F9] via-white to-[#E31F26]/5 flex items-center lg:py-20 py-16">
      <div
        className="absolute -left-32 -top-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-br from-[#1a365d]/30 via-[#1a365d]/10 to-[#E31F26]/10 rounded-full blur-2xl z-0 animate-blob"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute right-0 top-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-br from-[#E31F26]/30 via-[#1a365d]/10 to-white/0 rounded-full blur-2xl z-0 animate-blob animation-delay-2000"
        style={{ animationDuration: "12s" }}
      ></div>
      <div
        className="absolute left-1/3 bottom-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-gradient-to-br from-[#1a365d]/20 via-[#E31F26]/10 to-white/0 rounded-full blur-2xl z-0 animate-blob animation-delay-4000"
        style={{ animationDuration: "14s" }}
      ></div>
      <div className="absolute -left-32 -top-32 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-br from-[#1a365d]/20 via-[#1a365d]/10 to-[#E31F26]/10 rounded-full blur-2xl z-0"></div>
      <div className="xl:max-w-[1293px] px-4 sm:px-6 md:px-8 mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 lg:flex-row flex-col-reverse gap-6 md:gap-8 items-center">
          <div
            className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-[34px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1a365d] drop-shadow-md">
              <span className="bg-[#1a365d] bg-clip-text text-transparent">
               Delivering Excellence
              </span>{" "}
               in
              <br />
              <span className="bg-[#1a365d] bg-clip-text text-transparent">
               Healthcare
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At R&R Multispeciality Hospital, Jhunjhunu, we bring together compassionate medical professionals, advanced technology, and patient-focused care. Our goal is to deliver reliable, ethical, and world-class healthcare services to the people of Jhunjhunu and beyond. Whether it’s a routine consultation or a complex surgical procedure, we are here for you 24×7.
              <br></br>
              <br></br>
              <b>Quick Access:</b>
              <br></br>
              •	Book an Appointment with expert doctors
              <br></br>
              •	Find a Doctor by speciality
              <br></br>
              •	24×7 Emergency Helpline for urgent medical support
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2">
              <Link
                to="/bookappointment"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#1a365d] text-white rounded-2xl font-bold shadow-lg hover:from-[#E31F26] hover:to-[#1a365d] hover:scale-105 transition-all duration-300 text-base"
              >
                Appointments
              </Link>
              <a
                href="https://youtu.be/YmNuqdrKB-8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-white border-2 border-[#1a365d]/20 text-[#1a365d] rounded-2xl font-bold shadow-md hover:bg-[#1a365d] hover:text-white hover:scale-105 transition-all duration-300 text-base"
              >
                <FaPlay className="text-[#1a365d] group-hover:text-white" />
                Watch Video
              </a>
            </div>
          </div>
          <div
            className="relative flex justify-center items-center min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[500px] w-full mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="absolute right-0 bottom-0 w-[90%] h-[80%] md:w-[420px] md:h-[420px] bg-gradient-to-br from-[#E31F26]/60 via-[#E31F26]/10 to-transparent rounded-full blur-2xl z-0" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[370px] h-[340px] sm:h-[380px] md:h-[440px] bg-white rounded-[40px] shadow-2xl z-10" />
            <img
              src="./Nurse.jpeg"
              alt="Medical Professional"
              className="relative z-20 w-[180px] sm:w-[220px] md:w-[300px] h-[240px] sm:h-[300px] md:h-[400px] object-cover mx-auto"
            />
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/80 backdrop-blur-md rounded-xl shadow px-4 sm:px-6 py-2 sm:py-3 flex items-center z-30 border border-[#1a365d]/10">
              <span className="text-[#1a365d] font-bold text-xl sm:text-2xl mr-1 drop-shadow">
                24/7
              </span>
              <span className="text-[#E31F26] font-medium text-sm sm:text-base drop-shadow">
                Service
              </span>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/80 backdrop-blur-md rounded-xl shadow px-3 sm:px-4 py-2 flex items-center z-30 border border-[#1a365d]/10">
              <span className="text-[#1a365d] font-medium text-xs sm:text-sm mr-2 drop-shadow hidden sm:inline">
                Our Professionals
              </span>
              <div className="flex -space-x-2 mr-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar1"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar2"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar3"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/46.jpg"
                  alt="avatar4"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow"
                />
              </div>
              <span className="bg-white text-[#1a365d] text-xs font-bold px-2 py-1 rounded-full shadow">
                30+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

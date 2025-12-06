import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/Navbar";
import Specialization from "../Specialization";
import AppointBanner from "../AppointBanner";
import BookAnAppo from "../BookAnAppo";
import SEO from "../common/SEO";

const Specialityfrontpage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="Medical Specialities | R&R Multispecialty Hospital Jhunjhunu"
        description="Explore our comprehensive range of medical specialities at R&R Multispecialty Hospital in Jhunjhunu. From cardiology to orthopedics, we provide expert care across all specialties."
        keywords="Medical specialities Jhunjhunu, Hospital departments, Medical services, Speciality care Jhunjhunu, Healthcare specialties"
      />
      <NavBar />
      <div className="overflow-x-hidden">
        <div className="bg-gray-100">
          <Specialization />
        </div>
        {/* <AppointBanner /> */}
        {/* <BookAnAppo/> */}
        <Footer />
      </div>
    </>
  );
};

export default Specialityfrontpage;

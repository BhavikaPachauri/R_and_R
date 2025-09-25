import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import BynDoctor from "../BynDoctor";
import NavBar from "../common/Navbar";
import DoctorHeader from "../DoctorHeader";
import AppointBanner from "../AppointBanner";
import MedicalExperts from "../MedicalExperts";

const FindPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <MedicalExperts />
        {/* <DoctorHeader /> */}
        <AppointBanner/>
        <BynDoctor />
        <Footer />
      </div>
    </>
  );
};

export default FindPage;

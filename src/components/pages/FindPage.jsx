import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import BynDoctor from "../BynDoctor";
import NavBar from "../common/Navbar";
import DoctorHeader from "../DoctorHeader";
import AppointBanner from "../AppointBanner";
import MedicalExperts from "../MedicalExperts";
import SEO from "../common/SEO";

const FindPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="Find a Doctor | R&R Multispecialty Hospital Jhunjhunu"
        description="Find experienced and qualified doctors at R&R Multispecialty Hospital in Jhunjhunu. Browse our medical experts across various specialties and book an appointment with the best doctors."
        keywords="Find doctor Jhunjhunu, Best doctors Jhunjhunu, Medical specialists Jhunjhunu, Doctor appointment Jhunjhunu, Expert doctors"
      />
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

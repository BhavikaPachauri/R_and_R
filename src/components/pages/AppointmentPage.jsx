import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import BookAnAppo from "../BookAnAppo";
import NavBar from "../common/Navbar";
import AppointHead from "../AppointHead";
import AppointBanner from "../AppointBanner";
import SEO from "../common/SEO";

const AppointmentPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="Book an Appointment | R&R Multispecialty Hospital Jhunjhunu"
        description="Book your appointment online at R&R Multispecialty Hospital in Jhunjhunu. Easy online booking for consultations with expert doctors. Schedule your visit today."
        keywords="Book appointment Jhunjhunu, Online appointment booking, Hospital appointment, Medical consultation booking, Doctor appointment online"
      />
      <NavBar />
      <div className="overflow-x-hidden">
        <AppointHead />
        {/* <AppointBanner /> */}
        <BookAnAppo />
        <Footer />
      </div>
    </>
  );
};

export default AppointmentPage;

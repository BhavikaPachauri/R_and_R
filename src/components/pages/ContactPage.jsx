import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import ContactHead from "../ContactHead";
import ContactInfo from "../ContactInfo";
import OurLocation from "../OurLocation";
import NavBar from "../common/Navbar";
import AppointBanner from "../AppointBanner";
import ServiceSlider from "../common/ServiceSlider";

const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <ContactHead />
        <ServiceSlider/>
        <ContactInfo />
        <ServiceSlider/>  
        <OurLocation />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import ContactHead from "../ContactHead";
import ContactInfo from "../ContactInfo";
import OurLocation from "../OurLocation";
import NavBar from "../common/Navbar";
import AppointBanner from "../AppointBanner";
import ServiceSlider from "../common/ServiceSlider";
import Backseat from "../Backseat";
import SEO from "../common/SEO";


const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <SEO
        title="Contact Us | R&R Multispecialty Hospital Jhunjhunu"
        description="Get in touch with R&R Multispecialty Hospital in Jhunjhunu. Find our contact information, address, phone number, and location. We're here to help with all your healthcare needs."
        keywords="Contact R&R Hospital, Hospital contact Jhunjhunu, Hospital address Jhunjhunu, Hospital phone number, Medical consultation Jhunjhunu"
      />
      <NavBar />
      <div className="overflow-x-hidden">
        {/* <ContactHead /> */}
        <Backseat />
        {/* <ServiceSlider/> */}
        <ContactInfo />
        {/* <ServiceSlider/>   */}
        <OurLocation />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;

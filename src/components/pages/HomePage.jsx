import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import MainHeader from "../MainHeader";
import OurServices from "../OurServices";
import HomeAboutUs from "../HomeAboutUs";
import Department from "../SpecializationDetail";
import TieUps from "../TieUps";
import NavBar from "../common/Navbar";
import NabhCert from "../NabhCert"; 
import ServiceSlider from "../common/ServiceSlider";
import CategorySection from "../CategorySection";
import SEO from "../common/SEO";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="R&R Multispecialty Hospital Jhunjhunu | Best Hospital in Jhunjhunu"
        description="R&R Multispecialty Hospital is a leading healthcare provider in Jhunjhunu, offering advanced medical treatments, state-of-the-art facilities, and expert doctors. Book your appointment today."
        keywords="Best Hospital in Jhunjhunu, Multi-speciality hospital Jhunjhunu, Top hospital in Jhunjhunu, R&R Multispecialty Hospital, Healthcare Jhunjhunu, Medical services Jhunjhunu, Hospital near me"
      />
      <NavBar />
      <div className="overflow-x-hidden">
        <MainHeader />
        <HomeAboutUs />
        <ServiceSlider />
        <OurServices />
        {/* <ServiceSlider /> */}
        <NabhCert />
        {/* <Department /> */}
        <CategorySection/>
        <TieUps />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

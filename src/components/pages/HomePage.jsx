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

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <MainHeader />
        <HomeAboutUs />
        <ServiceSlider />
        <OurServices />
        {/* <ServiceSlider /> */}
        <NabhCert />
        <Department />
        <TieUps />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import AboutHeader from "../AboutHeader";
import BestServices from "../Mission";
import WhyChooseUs from "../WhyChooseUs";
import NavBar from "../common/Navbar";
import AppointBanner from "../AppointBanner";
import ServiceSlider from "../common/ServiceSlider";
import Faqs from "../Faqs";
import Facilities from "../Facilities";
const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <AboutHeader />
        <AppointBanner />
        <BestServices />
        <ServiceSlider />
        <Facilities/>
        <WhyChooseUs />
        {/* <ServiceSlider /> */}
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

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
import SEO from "../common/SEO";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="About Us | R&R Multispecialty Hospital Jhunjhunu"
        description="Learn about R&R Multispecialty Hospital's mission, vision, and commitment to providing exceptional healthcare services in Jhunjhunu. Discover our state-of-the-art facilities and expert medical team."
        keywords="About R&R Hospital, Hospital mission Jhunjhunu, Healthcare facilities Jhunjhunu, Medical team Jhunjhunu, Hospital history"
      />
      <NavBar />
      <div className="overflow-x-hidden">
        <AboutHeader />
        <AppointBanner />
        <BestServices />
        <ServiceSlider />
        <Facilities/>
        <WhyChooseUs />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

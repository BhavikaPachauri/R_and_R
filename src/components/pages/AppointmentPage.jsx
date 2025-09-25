import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import BookAnAppo from "../BookAnAppo";
import NavBar from "../common/Navbar";
import AppointHead from "../AppointHead";
import AppointBanner from "../AppointBanner";

const AppointmentPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
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

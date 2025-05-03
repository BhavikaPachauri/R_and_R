import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/Navbar";
import Specialization from "../Specialization";
import AppointBanner from "../AppointBanner";
import BookAnAppo from "../BookAnAppo";
const Specialityfrontpage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <div className="bg-gray-100">
          <Specialization />
        </div>
        <AppointBanner />
        <BookAnAppo/>
        <Footer />
      </div>
    </>
  );
};

export default Specialityfrontpage;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/Navbar";
import TermsAndConditions from "../common/TermsAndConditions";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <TermsAndConditions />
        <Footer />
      </div>
    </>
  );
};

export default Terms;

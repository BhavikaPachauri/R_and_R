import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/Navbar";
import TermsAndConditions from "../common/TermsAndConditions";
import SEO from "../common/SEO";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SEO
        title="Terms and Conditions | R&R Multispecialty Hospital Jhunjhunu"
        description="Read the terms and conditions for using R&R Multispecialty Hospital services in Jhunjhunu. Understand our policies and guidelines."
        keywords="Terms and conditions, Hospital policies, Medical services terms"
        noindex={true}
      />
      <NavBar />
      <div className="overflow-x-hidden">
        <TermsAndConditions />
        <Footer />
      </div>
    </>
  );
};

export default Terms;

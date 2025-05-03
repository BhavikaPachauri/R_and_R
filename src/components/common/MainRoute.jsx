import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FindPage from "../pages/FindPage";
import ContactPage from "../pages/ContactPage";
import AppointmentPage from "../pages/AppointmentPage";
import Specialityfrontpage from "../pages/Specialityfrontpage";
import SpecialityPage from "../pages/SpecialityPage";
import Terms from "../pages/Terms";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speciality" element={<Specialityfrontpage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/bookappointment" element={<AppointmentPage />} />
        <Route path="/speciality/:name" element={<SpecialityPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default MainRoute;

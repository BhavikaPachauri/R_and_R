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

import CategoryGalleryPage from "../pages/CategoryGalleryPage";

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
        
        {/* Category Gallery Routes */}
        <Route path="/achivements" element={<CategoryGalleryPage />} />
        <Route path="/army-day" element={<CategoryGalleryPage />} />
        <Route path="/candle-march" element={<CategoryGalleryPage />} />
        <Route path="/cricket" element={<CategoryGalleryPage />} />
        <Route path="/dandu-gram" element={<CategoryGalleryPage />} />
        <Route path="/dhanoori-gram" element={<CategoryGalleryPage />} />
        <Route path="/esic-hyundai" element={<CategoryGalleryPage />} />
        <Route path="/esic-hospital" element={<CategoryGalleryPage />} />
        <Route path="/independence-day" element={<CategoryGalleryPage />} />
        <Route path="/labour-day" element={<CategoryGalleryPage />} />
        <Route path="/malsasar" element={<CategoryGalleryPage />} />
        <Route path="/mangalam" element={<CategoryGalleryPage />} />
        <Route path="/nabh" element={<CategoryGalleryPage />} />
        <Route path="/nua" element={<CategoryGalleryPage />} />
        <Route path="/prestigious" element={<CategoryGalleryPage />} />
        <Route path="/rammandir" element={<CategoryGalleryPage />} />
        <Route path="/republic" element={<CategoryGalleryPage />} />
        <Route path="/republic-camp" element={<CategoryGalleryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default MainRoute;

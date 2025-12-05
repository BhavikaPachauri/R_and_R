import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import GalleryPage from "../common/GalleryPage";
import { categoryData } from "../common/categoryData";

function CategoryGalleryPage() {
  const location = useLocation();
  const route = location.pathname;
  const data = categoryData[route];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return <GalleryPage title={data.title} images={data.images} />;
}

export default CategoryGalleryPage;


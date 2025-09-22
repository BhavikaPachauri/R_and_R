import React from "react";
import { galleryImages } from "./common/GalleryData";
import { Link } from "react-router-dom";

const renderGalleryImages = (galleryImages, limit = null) => {
  const imagesToRender = limit ? galleryImages.slice(0, limit) : galleryImages;

  return imagesToRender.map((image, index) => (
    <div
      key={index}
      className={`${image.className} group relative overflow-hidden rounded-[7px] transition-all duration-300 ease-linear`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>
    </div>
  ));
};

const Gallery = () => {
  return (
    <div className="bg-[#F8F8F8] lg:py-20 sm:py-16 py-14">
      <div className="max-w-[1272px] mx-auto px-4" id="gallery">
        <h3
          className="lg:text-[54px] md:text-[54px] sm:text-[36px] text-[30px] text-center text-black lg:leading-[83px] leading-none font-semibold mb-7"
          data-aos="fade-down"
        >
          Gallery
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {renderGalleryImages(galleryImages, 4)}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/gallery"
            className="text-white inline-block text-[16px] font-medium px-7 py-2.5 bg-[#1a365d] rounded-lg hover:bg-white hover:border-[#1a365d] border-2 transition-all duration-300 ease-linear hover:shadow-shabtn border-solid border-transparent hover:text-[#1a365d]"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

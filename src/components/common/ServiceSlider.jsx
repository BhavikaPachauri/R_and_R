import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const services = [
    {
      title: "General Surgery",
    },
    {
      title: "Orthopaedics",
    },
    {
      title: "Radiology",
    },
    
    {
      title: "Urology",
    },
    {
      title: "General Medicine",    
    },
    {
     title: "Physiotherapy",
    },
    {
      title: "Gynecology",
    },
  ];

  return (
    <div className="w-full bg-[#1a365d]">
      <div className="max-w-[1920px]">
        <Slider {...settings} className="service-slider">
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center text-white">
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-nowrap">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSlider;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBanner from "./TopBanner";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Specialities", path: "/speciality" },
    { label: "Find Doctor", path: "/find" },
    { label: "Contact", path: "/contact" },
    { label: "Book Appointment", path: "/bookappointment" },
  ];

  return (
    <>
      {/* <TopBanner /> */}
      <div className="bg-white shadow-lg sticky top-0 z-[1000] w-full">
        <nav className="flex justify-between items-center xl:max-w-[1293px] mx-auto px-4 py-3 bg-white">
          <a href="/" className="flex items-center">
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/fswifKNBvK.webp"
              alt="R&R Hospital Logo"
              width={120}
              className="w-[150px] h-auto"
            />
          </a>
          <ul className="hidden md:flex xl:gap-[31px] md:gap-[17px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`sm:text-[16px] text-[14px] transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#E31F26] font-bold"
                      : "text-[#000] font-medium hover:text-[#E31F26]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="w-[30px] h-[22px] flex flex-col justify-between items-end cursor-pointer md:hidden z-50"
          >
            <span
              className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></span>
            <span
              className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></span>
          </div>
        </nav>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white shadow-md flex flex-col items-center py-5 transition-transform duration-500 ease-in-out z-[60] ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <div className="flex justify-between items-center px-3 mb-3 w-full">
            <a href="/">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/fswifKNBvK.webp"
                alt="R&R Hospital Logo"
                width={100}
              />
            </a>
            <div
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="w-[30px] h-[22px] flex flex-col justify-between items-end cursor-pointer md:hidden"
            >
              <span
                className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                  isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              ></span>
              <span
                className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`transition-all duration-300 bg-[#2D546F] w-full h-[3px] rounded ${
                  isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              ></span>
            </div>
          </div>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block py-3 text-lg font-medium ${
                isActive(item.path)
                  ? "text-[#2D546F]"
                  : "text-[#000] hover:text-[#E31F26]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;

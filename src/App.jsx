import "./App.css";
import React, { useEffect, useState } from "react";
import MainRoute from "./components/common/MainRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  // ======================back-to-top===================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };

  const [backToTop, setbackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);

  // -----------------------aos------------------------
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <MainRoute />
      <button
        className={`${
          backToTop
            ? "fixed updown_ani h-[35px] bg-white w-[35px] z-40 rounded-full bottom-[2%] right-[8px] cursor-pointer flex justify-center items-center shadow-gradient"
            : "hidden"
        }`}
        onClick={() => top()}
      >
        <svg
          width="18"
          height="15"
          viewBox="0 0 26 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.19 0.557381L0.308986 12.6898C0.110645 12.8923 0 13.1612 0 13.4409C0 13.7206 0.110645 13.9895 0.308986 14.192L0.322411 14.205C0.418563 14.3035 0.5343 14.3819 0.662582 14.4355C0.790864 14.4891 0.929008 14.5167 1.06861 14.5167C1.20822 14.5167 1.34636 14.4891 1.47464 14.4355C1.60292 14.3819 1.71866 14.3035 1.81481 14.205L13.0022 2.7801L24.1852 14.205C24.2813 14.3035 24.3971 14.3819 24.5254 14.4355C24.6536 14.4891 24.7918 14.5167 24.9314 14.5167C25.071 14.5167 25.2091 14.4891 25.3374 14.4355C25.4657 14.3819 25.5814 14.3035 25.6776 14.205L25.691 14.192C25.8894 13.9895 26 13.7206 26 13.4409C26 13.1612 25.8894 12.8923 25.691 12.6898L13.81 0.557381C13.7055 0.450681 13.5798 0.365736 13.4406 0.307695C13.3014 0.249655 13.1515 0.219727 13 0.219727C12.8485 0.219727 12.6986 0.249655 12.5594 0.307695C12.4202 0.365736 12.2945 0.450681 12.19 0.557381Z"
            fill="url(#paint0_linear_963_3942)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_963_3942"
              x1="13"
              y1="0.219727"
              x2="13"
              y2="14.5167"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#59833C" />
              <stop offset="1" stopColor="#59833C" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </>
  );
}

export default App;

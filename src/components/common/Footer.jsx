import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const FooterList = ({ title, links }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedLinks = showAll ? links : links.slice(0, 6);

  return (
    <div className="w-[40%] md:w-auto">
      <ul className="flex flex-col gap-1">
        <li className="text-[24px] font-semibold text-[#1a365d] leading-[142%]">
          {title}
        </li>
        {displayedLinks.map(({ label, path }, index) => (
          <li key={index}>
            <Link
              to={path}
              className="text-[16px] text-[#1a365d]/80 hover:text-[#1a365d] font-medium leading-[180%] transition-all duration-300 ease-linear 
                relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          </li>
        ))}
        {!showAll && links.length > 6 && (
          <li>
            <button
              onClick={() => setShowAll(true)}
              className="text-[16px] text-[#1a365d] hover:text-[#1a365d]/90 font-medium leading-[180%] flex items-center group"
            >
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const SocialIcon = ({ href, imgSrc, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="hover:-translate-y-2 transition-transform duration-300 border-2 border-blue-800 rounded-full"
  >
    <img src={imgSrc} alt={alt} width={38} height={38} />
  </a>
);

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const socialLinks = [
    // {
    //   href: "https://www.facebook.com/bynhospital/",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QWIxMPX7x3.webp",
    //   alt: "Facebook logo - R&R Hospital Jhunjhunui official page",
    // },
    // {
    //   href: "https://x.com/bynhospital",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/uTkrkLzxWI.webp",
    //   alt: "Twitter logo - R&R Hospital Jhunjhunui profile",
    // },
    // {
    //   href: "https://www.instagram.com/bynhospital",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DtdWsOI7yl.webp",
    //   alt: "Instagram logo - R&R Hospital Jhunjhunui profile",
    // },
    // {
    //   href: "https://www.linkedin.com/company/shri-babayogi-netanath-hospital-research-centre/?originalSubdomain=in",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Kv71EQxbM2.webp",
    //   alt: "LinkedIn logo - R&R Hospital Jhunjhunui profile",
    // },
  ];

  const servicesLinks = [
    { label: "General Surgery", path: "/speciality/general surgery" },
    { label: "Orthopaedics", path: "/speciality/orthopaedics" },
    { label: "Radiology", path: "/speciality/radiology" },
    { label: "Gynecology", path: "/speciality/gynecology" },
    { label: "General Medicine", path: "/speciality/general medicine" },
    { label: "Urology", path: "/speciality/urology" },
    { label: "Dental", path: "/speciality/dental" },
    { label: "Physiotherapy", path: "/speciality/physiotherapy" },
  ];

  const patientLinks = [
    { label: "About Us", path: "/about" },
    { label: "Find Doctor", path: "/find" },
    { label: "Book Appointment", path: "/bookappointment" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className=" text-[#1a365d] rounded-tr-[30px] rounded-tl-[30px]">
      <div className="xl:max-w-[1293px] mx-auto px-3 lg:pt-16 pt-10">
        <div className="flex flex-wrap justify-between items-start lg:pb-10 pb-5 border-b border-solid border-[#2d4a7c] gap-7">
          <div className="w-full xl:w-[23%]">
            <img
              src="./R-and-R-logo.webp"
              alt="R&R Hospital Logo"
              width={180}
              className="md:max-w-[220px] max-w-[150px] h-auto bg-white rounded-sm"
            />
            <p className="text-[#1a365d]/80 text-[16px] font-medium leading-[164%] xl:max-w-[331px] my-7">
              Expert care in every specialty at R&R Hospital, Jhunjhunu.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>

          <FooterList title="Specialities" links={servicesLinks} />

          <FooterList title="For Patients" links={patientLinks} />

          <div className="w-full xl:w-[25%] lg:w-[40%]">
            <ul className="flex flex-col gap-2">
              <li className="text-[24px] font-semibold text-[#1a365d] leading-[142%]">
                Contact Us
              </li>
              <li>
                <a
                  href="tel:8432755555"
                  className="flex items-center gap-3 text-[16px] text-[#1a365d]/80 hover:text-[#1a365d] transition-all duration-300 ease-linear font-medium leading-[180%]"
                >
                  <FaPhoneAlt size={20} />
                  8432755555
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@rrmhospitals.com"
                  className="flex items-center gap-3 text-[16px] text-[#1a365d]/80 hover:text-[#1a365d] transition-all duration-300 ease-linear font-medium leading-[180%]"
                >
                  <MdEmail size={20} />
                  contact@rrmhospitals.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-start gap-3 text-[16px] text-[#1a365d]/80 hover:text-[#1a365d] transition-all duration-300 ease-linear font-medium leading-[150%]"
                  href="https://maps.app.goo.gl/HgNAV1dBbFzCJi4j9"
                  target="_blank"
                >
                  {" "}
                  <FaLocationDot size={25} />
                  23, Churu Road, Basant Vihar, Jhunjhunu, Rajasthan 333001
                </a>
              </li>
              <li className="text-[16px] text-[#1a365d]/80 font-medium leading-[180%]">
                Our Support and Sales team is available 24×7, 365 days a year to
                answer your queries.
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 flex flex-wrap justify-between items-center gap-5">
          <p className="text-[#1a365d]/80 text-[15px] font-medium text-center max-sm:mx-auto">
            Copyrights &copy; {year} RR Hospital | Reserved
          </p>
          <p className="text-[#1a365d]/80 text-[15px] max-sm:mx-auto font-medium">
            <Link
              to="/terms"
              className="hover:text-[#1a365d] transition-colors duration-300"
            >
              Terms of Use
            </Link>{" "}
            |{" "}
            <Link
              to="/privacy"
              className="hover:text-[#1a365d] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

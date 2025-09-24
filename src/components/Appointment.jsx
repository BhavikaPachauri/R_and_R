import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  BlueCallIcon,
  BlueLocationIcon,
  BlueMailIcon,
  InstaLogo,
  UtubeLogo,
  FaceBookLogo,
} from "./Icons";

const Appointment = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .min(2, "Must be at least 2 characters"),
      lastName: Yup.string()
        .required("Last Name is required")
        .min(2, "Must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Please select a subject"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("https://api.plusdistribution.in/pdpl/sakshi/send-email", values);
        alert("Message submitted successfully!");
        resetForm();
      } catch (error) {
        alert("Failed to send message. Please try again.");
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div
      className="flex flex-col-reverse lg:flex-row gap-8 p-4 max-w-7xl mx-auto lg:py-16 py-14"
      data-aos="fade-up"
    >
      <div
        className="lg:w-[42%] bg-cardgradient from-blue-100 via-blue-50 to-white lg:p-10 p-5 rounded-lg shadow-lg"
        data-aos="fade-right"
      >
        <h2 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-semibold text-[#55728D] leading-none tracking-tighter mb-1">
          Contact Information
        </h2>
        <p className="text-[#646464] md:mb-16 mb-7">Write your queries to start a chat!</p>
        <div className="flex flex-col lg:gap-10 gap-5">
          <a href="tel:0164-5122000" className="flex items-center gap-4">
            <BlueCallIcon />
            <span className="text-[#646464] text-[16px]">0164-5122000</span>
          </a>
          <a href="mailto:info@krishnasuperspecialityhospital.com" className="flex items-center gap-4">
            <BlueMailIcon />
            <span className="text-[#646464] text-[16px]">info@krishnasuperspecialityhospital.com</span>
          </a>
          <a
            target="_blank"
            href="https://google.com/maps/place/Krishna+Super+Speciality+Hospital/@30.1815524,74.9613678,17z/data=!3m1!4b1!4m6!3m5!1s0x39172df37ba25415:0x5c49522cb8b764e9!8m2!3d30.1815524!4d74.9613678!16s%2Fg%2F11vhnd6nbb?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-start gap-4"
          >
            <BlueLocationIcon />
            <span className="text-[#646464] text-[16px]">
              Near D- Mart, Mansa Road, <br className="lg:flex hidden" />
              Bathinda, Punjab 151001
            </span>
          </a>
        </div>
        <div className="flex gap-4 lg:mt-40 md:mt-20 mt-10">
          <a
            href="https://www.facebook.com/krishnasuperspeciality"
            target="_blank"
          >
            <FaceBookLogo />
          </a>
          <a
            href="https://www.instagram.com/krishnasuperspecialityhospital/"
            target="_blank"
          >
            <InstaLogo />
          </a>
          <a
            href="https://www.youtube.com/@KrishnaSuperSpecialityHospital"
            target="_blank"
          >
            <UtubeLogo />
          </a>
        </div>
      </div>
      <div
        className="lg:w-[56%] bg-white p-6 rounded-lg shadow-lg"
        data-aos="fade-left"
      >
        <form
          className="lg:mt-[116px] mt-10"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                className="block text-base font-normal text-[#8D8D8D]"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className={`outline-0 mt-1 block w-full placeholder:text-[#8D8D8D] border-b border-[#848484] ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-base font-normal text-[#8D8D8D]"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className={`outline-0 mt-1 block w-full placeholder:text-[#8D8D8D] border-b border-[#848484] ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-10 mt-5">
            <div>
              <label
                className="block text-base font-normal text-[#8D8D8D]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`outline-0 mt-1 block w-full placeholder:text-[#8D8D8D] border-b border-[#848484] ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-base font-normal text-[#8D8D8D]"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className={`outline-0 mt-1 block w-full placeholder:text-[#8D8D8D] border-b border-[#848484] ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : ""
                }`}
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">
                  {formik.errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="lg:mt-10 mt-5">
            <label
              className="block text-sm font-medium text-[#383838]"
              htmlFor="subject"
            >
              Select Subject
            </label>
            <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
              {["Heart Pain", "Joint Pain", "Breathing uneasiness", "Knee pain", "Fever", "Health checkup", "Anything Else"].map((subject, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`subject-${index}`}
                    name="subject"
                    value={subject}
                    checked={formik.values.subject === subject}
                    onChange={() => formik.setFieldValue("subject", subject)}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor={`subject-${index}`} className="ml-2 text-[12px] text-black">
                    {subject}
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-red-500 text-sm">{formik.errors.subject}</p>
            )}
          </div>
          <div className="lg:mt-10 mt-5">
            <label
              className="block text-base font-medium text-[#8D8D8D]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="1"
              placeholder="Write your message..."
              className={`mt-1 outline-none placeholder:text-[#8D8D8D] block w-full border-b border-[#848484] ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>
          <div className="flex justify-end lg:mt-20 mt-10">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-[#61ADF8] rounded-[76px] hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
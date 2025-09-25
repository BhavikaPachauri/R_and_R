import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BookAnAppo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    speciality: Yup.string().required("Speciality is required"),
    query: Yup.string().required("Query is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      speciality: "",
      query: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      const appointmentData = { ...values, code: "pdpl" };

      try {
        const response = await axios.post(
          "https://api.plusdistribution.in/pdpl/sakshi/sparsh-appointment-email",
          appointmentData
        );

        if (response.status === 200) {
          alert("Form Submitted, Team will contact you soon.");
          resetForm();
        } else {
          alert("Failed to book the appointment. Please try again.");
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const isFormIncomplete = Object.values(formik.values).some(value => !value);

  const inputClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all";
  const errorIcon = (
    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div id="appointmentform" className="bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 lg:py-20 py-16">
      <div className="max-w-6xl mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start" >
          <div data-aos="fade-right" className="bg-white/70 backdrop-blur-sm shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute bottom-0 left-0 right-0 h-1 "></div>
            <div className="mb-6 lg:mb-8">
              {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-900 text-white rounded-full text-xs sm:text-sm font-semibold shadow-md">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  BOOK AN APPOINTMENT
                </span>
              </div> */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Appointment
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Schedule Your Medical Visit Today
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    className={inputClasses}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      {errorIcon}
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number *"
                    className={inputClasses}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      {errorIcon}
                      {formik.errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className={inputClasses}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    {errorIcon}
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div className="relative">
                <select
                  name="speciality"
                  className={`${inputClasses} appearance-none cursor-pointer text-gray-500`}
                  value={formik.values.speciality}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled hidden>Select Speciality *</option>
                  <option value="Cardiac Care">Cardiac Care</option>
                  <option value="Laparoscopy">Laparoscopy</option>
                  <option value="Endoscopy">Endoscopy</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Hernia">Hernia</option>
                  <option value="Plastic Surgery">Plastic Surgery</option>
                  <option value="Gallbladder">Gallbladder</option>
                  <option value="Piles">Piles</option>
                  <option value="Fistula">Fistula</option>
                  <option value="Fracture">Fracture</option>
                  <option value="Critical Care">Critical Care</option>
                  <option value="Spine Surgery">Spine Surgery</option>
                  <option value="Orthopaedics">Orthopaedics</option>
                  <option value="Urology">Urology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Gynecology">Gynecology</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="query"
                  placeholder="Special Requests or Notes *"
                  className={`${inputClasses} resize-none`}
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="3"
                ></textarea>
                {formik.errors.query && formik.touched.query && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    {errorIcon}
                    {formik.errors.query}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium rounded-lg transition-all duration-300 ${
                  isSubmitting || isFormIncomplete
                    ? "bg-[#1a365d] hover:opacity-90 shadow-lg hover:shadow-xl cursor-not-allowed"
                    : "bg-[#1a365d] hover:opacity-90 shadow-lg hover:shadow-xl"
                }`}
                disabled={isSubmitting || isFormIncomplete}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    Book an Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
          <div data-aos="fade-left">
            <div className="bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute bottom-0 left-0 right-0 h-1 "></div>
              <div className="h-[300px] sm:h-[400px] lg:h-[430px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.9548016623344!2d75.38284!3d28.133438599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391338f9bfffffff%3A0x974f9a7254458cba!2sR%26R%20Multispeciality%20Hospital!5e1!3m2!1sen!2sin!4v1758699102411!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-white via-blue-50/10 to-transparent">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Visit R&R Hospital
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-700 flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm sm:text-base leading-relaxed">
                      23, Churu Road, Basant Vihar, Jhunjhunu, Rajasthan 333001
                    </span>
                  </p>
                  <p className="text-gray-700 flex items-start gap-2 sm:gap-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base leading-relaxed">
                      Open 24 hours • OPD: 9:00 AM - 2:00 PM
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnAppo;

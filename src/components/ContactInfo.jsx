import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

// Common input styles
const inputStyles = {
  base: "w-full p-2.5 sm:p-3 bg-gray-50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#1d55b0] focus:border-[#1d55b0] transition-all duration-300 text-sm sm:text-base",
  error: "border-red-500",
  normal: "border-gray-200",
};

// Common label styles
const labelStyles =
  "block text-gray-700 font-medium text-xs sm:text-sm mb-1 sm:mb-1.5";

// Common error message styles
const errorStyles = "text-red-500 text-xs sm:text-sm mt-1";

const SocialIcon = ({ href, imgSrc, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="hover:scale-110 transition"
  >
    <img
      src={imgSrc}
      alt={alt}
      width={38}
      height={38}
      className="w-8 h-8 sm:w-[38px] sm:h-[38px]"
    />
  </a>
);

const ContactInfo = () => {
  const [submitting, setSubmitting] = useState(false);

  const socialLinks = [
    // {
    //   href: "https://www.facebook.com/bynhospital/",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QWIxMPX7x3.webp",
    //   alt: "Facebook logo - R&R Multispecialty  Hospital Jhunjhunui official page",
    // },
    // {
    //   href: "https://x.com/bynhospital",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/uTkrkLzxWI.webp",
    //   alt: "Twitter logo - R&R Multispecialty  Hospital Jhunjhunui profile",
    // },
    // {
    //   href: "https://www.instagram.com/bynhospital",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DtdWsOI7yl.webp",
    //   alt: "Instagram logo - R&R Multispecialty  Hospital Jhunjhunui profile",
    // },
    // {
    //   href: "https://www.linkedin.com/company/shri-babayogi-netanath-hospital-research-centre/?originalSubdomain=in",
    //   imgSrc:
    //     "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Kv71EQxbM2.webp",
    //   alt: "LinkedIn logo - R&R Multispecialty  Hospital Jhunjhunui profile",
    // },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
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
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      try {
        await axios.post(
          "https://api.plusdistribution.in/pdpl/sakshi/sparsh-contact-email",
          values
        );
        alert("Message submitted successfully!");
        resetForm();
      } catch (error) {
        alert("Failed to send message. Please try again.");
        console.error("Error sending email:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const renderFormField = (name, label, type = "text") => (
    <div>
      <label className={labelStyles}>{label}</label>
      {type === "textarea" ? (
        <textarea
          rows="3"
          className={`${inputStyles.base} ${
            formik.touched[name] && formik.errors[name]
              ? inputStyles.error
              : inputStyles.normal
          }`}
          {...formik.getFieldProps(name)}
        />
      ) : (
        <input
          type={type}
          className={`${inputStyles.base} ${
            formik.touched[name] && formik.errors[name]
              ? inputStyles.error
              : inputStyles.normal
          }`}
          {...formik.getFieldProps(name)}
        />
      )}
      {formik.touched[name] && formik.errors[name] && (
        <p className={errorStyles}>{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="lg:py-20 py-16">
      <div className="max-w-[1293px] mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div
            className="bg-[#1a365d] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl"
            data-aos="fade-right"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/qbpxDGvWvU.webp"
                    alt="phone icon"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Phone Number
                  </p>
                  <p className="flex">
                     <a
                    href="tel:8432755555"
                    className="text-lg sm:text-xl font-medium hover:text-white/90 transition"
                  >
                    8432755555
                  </a>
                  <span className="pe-1 mt-1">,</span>
                   <a
                    href="tel:8432655555"
                    className="text-lg sm:text-xl font-medium hover:text-white/90 transition"
                  >
                    8432655555
                  </a>
                  </p>
                 
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gUhCLr2Jfp.webp"
                    alt="Mail icon"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white/80 text-xs sm:text-sm">
                    Email Address
                  </p>
                  <a
                    href="mailto:contact@rrmhospitals.com"
                    className="text-lg sm:text-xl font-medium hover:text-white/90 transition break-all"
                  >
                    contact@rrmhospitals.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/sCWaUmu21C.webp"
                    alt="Location icon"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white/80 text-xs sm:text-sm">
                    Our Location
                  </p>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.9548016623344!2d75.38284!3d28.133438599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391338f9bfffffff%3A0x974f9a7254458cba!2sR%26R%20Multispeciality%20Hospital!5e1!3m2!1sen!2sin!4v1758698843905!5m2!1sen!2sin"
                    target="_blank"
                    className="text-base sm:text-lg lg:text-xl font-medium hover:text-white/90 transition break-words"
                  >
                    23, Churu Road, Basant Vihar, Jhunjhunu, Rajasthan 333001
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              {/* <p className="text-white/80 text-sm mb-2 sm:mb-3">
                Follow us on social media
              </p> */}
              <div className="flex gap-2 sm:gap-2.5">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} {...link} />
                ))}
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl border border-gray-100"
            data-aos="fade-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1a365d] mb-4 sm:mb-6">
              Send us a Message
            </h3>

            <form
              onSubmit={formik.handleSubmit}
              noValidate
              className="space-y-3 sm:space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {renderFormField("firstName", "First Name")}
                {renderFormField("lastName", "Last Name")}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {renderFormField("email", "Email", "email")}
                {renderFormField("phone", "Phone Number", "tel")}
              </div>

              {renderFormField("message", "Message", "textarea")}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#1a365d] text-white rounded-lg hover:shadow-lg hover:shadow-[#1d55b0]/20 transition-all duration-300 mt-2 disabled:cursor-not-allowed text-sm sm:text-base"
                  disabled={submitting || !formik.isValid || !formik.dirty}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

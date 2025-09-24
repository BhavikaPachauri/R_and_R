import React, { useEffect } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white px-4 py-10 sm:p-8 rounded-lg shadow-lg w-full md:max-w-md lg:max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-xl font-bold text-[#1d55b0] text-center">
          Get expert health advice now!
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-700 mb-4">
          Drop your details, and our health specialists will guide you.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            className="w-full border rounded-md px-3 py-2 sm:py-3"
            required
          />
          <input
            type="tel"
            placeholder="Mobile number"
            className="w-full border rounded-md px-3 py-2 sm:py-3"
            required
          />
          <textarea
            placeholder="Query"
            className="w-full border rounded-md px-3 py-2 h-20 sm:h-28"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#1d55b0] text-white py-2 sm:py-3 rounded-md font-medium hover:bg-[#4b6a33] transition duration-300"
          >
            Submit Your Query
          </button>
        </form>
        <div className="mt-4 text-center md:flex flex-col hidden">
          <a
            href="https://wa.me/918426969269"
            target="_blank"
            className="text-sm sm:text-base text-gray-700"
          >
            <span className="font-bold">WhatsApp:</span> +91-0000000000
          </a>
          <a
            href="mailto:rrhospital@gmail.com"
            className="text-sm sm:text-base text-gray-700 block"
          >
            <span className="font-bold">Email:</span> rrhospital@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;

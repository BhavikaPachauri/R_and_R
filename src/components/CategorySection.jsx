import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategorySection() {
  const items = [
    { title: "ACHIVEMENTS", img: "./assets/ACHIVEMENTS/ACHIVEMENTS 2.jpg", link: "/achivements" },
    { title: "ARMY DAY CELEBRATION", img: "./assets/ARMY DAY CELEBRATION/ARMY DAY CELEBRATION 1.jpg", link: "/army-day" },
    { title: "CANDLE MARCH", img: "./assets/CANDLE MARCH/CANDLE MARCH 1.jpg", link: "/candle-march" },
    { title: "CRICKET SPONSERSHIP", img: "./assets/CRICKET SPONSERSHIP/CRICKET SPONSERSHIP 1.jpg", link: "/cricket" },
    { title: "DANDU GRAM PANCHAYAT CAMP", img: "./assets/DANDU GRAM PANCHAYAT CAMP/DANDU GRAM PANCHAYAT CAMP 1.jpg", link: "/dandu-gram" },
    { title: "DHANOORI GRAM PANCHAYAT CAMP", img: "./assets/DHANOORI GRAM PANCHAYAT CAMP/DHANOORI GRAM PANCHAYAT CAMP 4.jpg", link: "/dhanoori-gram" },
    { title: "ESIC CAMP MARUDHAR HYUNDAI", img: "./assets/ESIC CAMP MARUDHAR HYUNDAI/ESIC CAMP MARUDHAR HYUNDAI 1.jpg", link: "/esic-hyundai" },
    { title: "ESIC CAMP RR HOSPITAL", img: "./assets/ESIC CAMP RR HOSPITAL/ESIC CAMP RR HOSPITAL.jpg", link: "/esic-hospital" },
    { title: "INDEPENDANCE DAY CELEBRATION", img: "./assets/INDEPNDANCE DAY CELEBRATION/INDEPNDANCE DAY CELEBRATION  5.jpg", link: "/independence-day" },
    { title: "LABOUR DAY CAMP", img: "./assets/LABOUR DAY CAMP/LABOUR DAY CAMP 1.jpg", link: "/labour-day" },
    { title: "MALSASAR CAMP", img: "./assets/MALSASAR CAMP/MALSASAR CAMP 1.jpg", link: "/malsasar" },
    { title: "MANGALAM SOCIETY CAMP", img: "./assets/MANGALAM SOCIETY CAMP/MANGALAM SOCIETY CAMP 1.jpg", link: "/mangalam" },
    { title: "NABH ASSESSMENT TEAM", img: "./assets/NABH ASSESSMENT TEAM/NABH ASSESSMENT TEAM 1.jpg", link: "/nabh" },
    { title: "NUA CAMP", img: "./assets/NUA CAMP/NUA CAMP 1.jpg", link: "/nua" },
    { title: "PRESTIGIOUS TEAM", img: "./assets/PRESTIGIOUS TEAM/PRESTIGIOUS TEAM 1.jpg", link: "/prestigious" },
    { title: "RAMMANDIR PRAN PRATISHTHA CAMP", img: "./assets/RAMMANDIR PRAN PRATISHTA CAMP/RAMMANDIR PRAN PRATISHTA CAMP 1.jpg", link: "/rammandir" },
    { title: "REPUBLIC DAY", img: "./assets/Republic Day/rr-festival1.jpeg", link: "/republic" },
    { title: "REPUBLIC DAY CAMP", img: "./assets/REPUBLIC DAY CAMP/REPUBLIC DAY CAMP 1.jpg", link: "/republic-camp" },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(items.length); // Show ALL items at once
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">
          Our Categories
        </h2>

        {/* Show only limited items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>

                <Link
                  to={item.link}
                  className="block mt-3 w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Only show Load More once */}
        {visibleCount < items.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategorySection;

import React from "react";

function CategorySection() {
  const items = [
    {
      title: "Camps",
      img: "/assets/camp.jpg",
      link: "/camp",
    },
    {
      title: "Function",
      img: "/assets/Functions.jpg",
      link: "/function",
    },
    {
      title: "Festival",
      img: "/assets/Festival.jpg",
      link: "/festival",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>

                <a
                  href={item.link}
                  className="block mt-3 w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;

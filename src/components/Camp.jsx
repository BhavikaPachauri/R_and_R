import React, { useState } from "react";
import NavBar from "./common/Navbar";
import Footer from "./common/Footer";

function Camp() {
  const [selectedImage, setSelectedImage] = useState(null);

  const festivalImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      title: "Diwali Celebration"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      title: "Music Festival"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      title: "Holi Festival"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
      title: "Cultural Dance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      title: "Night Concert"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      title: "Food Festival"
    }
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <NavBar/>
   
        <header className="py-8 px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black">
            Camps Gallery
          </h1>
        </header>

        {/* Gallery Grid */}
        <section className="px-4 md:px-12 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivalImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-4 w-full">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeImage}
          >
            {/* Image Container */}
            <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Close Button - Inside Image at Top Right */}
              <button
                className="absolute top-2 right-2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-black/80 transition z-10"
                onClick={closeImage}
              >
                &times;
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  {selectedImage.title}
                </h2>
              </div>
          
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        `}</style>
      </div>
    <Footer/>
    </>
  );
}

export default Camp;
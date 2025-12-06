import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import SEO from "../common/SEO";

// Map route names to folder names
const categoryMap = {
  "achivements": "ACHIVEMENTS",
  "army-day": "ARMY DAY CELEBRATION",
  "candle-march": "CANDLE MARCH",
  "cricket": "CRICKET SPONSERSHIP",
  "dandu-gram": "DANDU GRAM PANCHAYAT CAMP",
  "dhanoori-gram": "DHANOORI GRAM PANCHAYAT CAMP",
  "esic-hyundai": "ESIC CAMP MARUDHAR HYUNDAI",
  "esic-hospital": "ESIC CAMP RR HOSPITAL",
  "independence-day": "INDEPNDANCE DAY CELEBRATION",
  "labour-day": "LABOUR DAY CAMP",
  "malsasar": "MALSASAR CAMP",
  "mangalam": "MANGALAM SOCIETY CAMP",
  "nabh": "NABH ASSESSMENT TEAM",
  "nua": "NUA CAMP",
  "prestigious": "PRESTIGIOUS TEAM",
  "rammandir": "RAMMANDIR PRAN PRATISHTA CAMP",
  "republic": "Republic Day",
  "republic-camp": "REPUBLIC DAY CAMP",
};

// Generate image paths based on folder name and actual file structure
const getImagePaths = (folderName, categoryKey) => {
  const images = [];
  
  // Handle special case for "Republic Day" folder
  if (folderName === "Republic Day") {
    for (let i = 1; i <= 8; i++) {
      images.push(`./assets/Republic Day/rr-festival${i}.jpeg`);
    }
    return images;
  }

  // Map category keys to their actual image counts and naming patterns
  const imageCounts = {
    "achivements": 3,
    "army-day": 3,
    "candle-march": 2,
    "cricket": 1,
    "dandu-gram": 7,
    "dhanoori-gram": 5,
    "esic-hyundai": 4,
    "esic-hospital": 1,
    "independence-day": 19,
    "labour-day": 5,
    "malsasar": 6,
    "mangalam": 4,
    "nabh": 1,
    "nua": 8,
    "prestigious": 3,
    "rammandir": 5,
    "republic-camp": 6,
  };

  const count = imageCounts[categoryKey] || 20;
  
  for (let i = 1; i <= count; i++) {
    // Try different number formats based on actual file naming
    let imagePath = `./assets/${folderName}/${folderName} ${i}.jpg`;
    
    // Handle special cases with double spaces
    if (categoryKey === "independence-day" && i < 10) {
      imagePath = `./assets/${folderName}/${folderName}  ${i}.jpg`; // Double space for single digits
    } else if (categoryKey === "dandu-gram" && i === 6) {
      imagePath = `./assets/${folderName}/${folderName}  ${i}.jpg`; // Double space
    }
    
    images.push(imagePath);
  }
  
  return images;
};

const CategoryGalleryPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get category from params or from pathname
    const categoryKey = category || location.pathname.replace("/", "");
    const folderName = categoryMap[categoryKey];
    
    if (!folderName) {
      navigate("/");
      return;
    }

    // Get image paths for this category
    const imagePaths = getImagePaths(folderName, categoryKey);
    setImages(imagePaths);
    setLoadedImages([]); // Reset loaded images when category changes
  }, [category, location.pathname, navigate]);

  const categoryKey = category || location.pathname.replace("/", "");
  const folderName = categoryMap[categoryKey] || "";
  const pageTitle = folderName.replace(/\s+/g, " ");

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  if (!folderName) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${pageTitle} | R&R Multispecialty Hospital Jhunjhunu`}
        description={`View our ${pageTitle} gallery at R&R Multispecialty Hospital in Jhunjhunu. See photos from our events and activities.`}
        keywords={`${pageTitle}, Hospital events Jhunjhunu, R&R Hospital gallery, Medical events`}
      />
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <header className="py-8 px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black">
            {pageTitle}
          </h1>
        </header>

        {/* Gallery Grid */}
        <section className="px-4 md:px-12 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((imageSrc, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openImage(imageSrc)}
              >
                <img
                  src={imageSrc}
                  alt={`${pageTitle} - Image ${index + 1}`}
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.target.parentElement.style.display = "none";
                  }}
                  onLoad={() => {
                    // Track successfully loaded images
                    if (!loadedImages.includes(imageSrc)) {
                      setLoadedImages(prev => [...prev, imageSrc]);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-4 w-full">
                    Image {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeImage}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt={pageTitle}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl font-bold hover:bg-black/80 transition z-10"
                onClick={closeImage}
              >
                &times;
              </button>
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
      <Footer />
    </>
  );
};

export default CategoryGalleryPage;


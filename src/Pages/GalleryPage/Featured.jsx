import React, { useState, useRef, useEffect } from "react";
import { Booking, LeftDubleArow, RightDubleArow } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

export default function GallerySection() {
  const allImages = [
    "/Featured/Featured1-min.jpg", "/Featured/Featured1gallery-min.jpg", "/Featured/Featured2-min.jpg",
    "/Featured/Featured3-min.jpg", "/Featured/Featured4gallery-min.jpg", "/Featured/Featured6gallery-min.jpg",
    "/Featured/Featured7-min.jpg", "/Featured/Featured7gallery-min.jpg", "/Featured/Featured8-min.jpg",
    "/Featured/Featured8gallery-min.jpg", "/Featured/Featured9gallery-min.jpg", "/Featured/Featured10gallery-min.jpg",
    "/Featured/Featured11gallery-min.jpg", "/Featured/Featured12gallery-min.jpg", "/Featured/Featured13gallery-min.jpg",
    "/Featured/Featured14gallery-min.jpg", "/Featured/Featured15gallery-min.jpg", "/Featured/Featured15-min.jpg",
    "/Featured/Featured16gallery-min.jpg", "/Featured/Featured17gallery-min.jpg", "/Featured/Featured19gallery-min.jpg",
    "/Featured/Featured20gallery-min.jpg", "/Featured/Featured21gallery-min.jpg", "/Featured/Featured22gallery-min.jpg",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  // Mobile swipe
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const touchStartX = useRef(0);

  // Prevent background scroll when popup/modal is open
  useEffect(() => {
    document.body.style.overflow = popupOpen || selectedImageIndex !== null ? "hidden" : "auto";
  }, [popupOpen, selectedImageIndex]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const prevSlide = () =>
    setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
  const nextSlide = () =>
    setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);

  return (
    <div className="flex flex-col items-center gap-5 py-10 md:px-10 lg:px-20">
      {/* Top Heading */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[240px] md:w-[290px] lg:w-[430px] 2xl:w-[570px]">
          <div className="relative flex justify-center items-center w-[50%] rounded-sm h-[35px] md:h-[45px] xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
            <h1 className="cursor-pointer absolute left-2 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[240px] md:w-[290px] lg:w-[430px] 2xl:w-[570px]">
              Featured Gallery Section
            </h1>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full justify-items-center p-2">
        {allImages.slice(0, 12).map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-full rounded-sm cursor-pointer transition-all duration-300"
            onClick={() => handleImageClick(index)}
          >
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-sm" />
            {index === 11 && (
              <div
                onClick={(e) => { e.stopPropagation(); setPopupOpen(true); }}
                className="absolute inset-0 flex items-center justify-center text-white font-bold cursor-pointer rounded-sm"
                style={{ backgroundColor: "rgba(128,128,128,0.8)" }}
              >
                <span className="text-3xl relative z-10">+10</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Text & Button */}
      <h1 className="text-[#4D2A11] text-center text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-semibold">
        Want to experience this beauty in real life?
      </h1>
      <button className="flex bg-gray-300/20 items-center gap-2 p-0.5 pr-4 font-semibold text-xs lg:text-sm xl:text-lg text-[#67491C] rounded-full border border-[#67491C] cursor-pointer">
        <Booking className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[50px] 2xl:w-[50px] bg-[#D49736] rounded-full" />
        <Link to="/Booking" onClick={() => window.scrollTo(0, 0)}>Book Your Stay</Link>
      </button>

      {/* Popup Grid */}
      {popupOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-5">
          <div className="relative backdrop:blur-[4px] rounded-lg w-full h-full p-5 flex gap-3">
            <div className="grid grid-cols-4 gap-2 overflow-y-auto h-full w-full pr-2">
              {allImages.map((img, idx) => (
                <div key={idx} className="cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover rounded-sm"
                    onClick={() => handleImageClick(idx)}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-2 right-1 bg-[#4D2A11] text-white rounded-full px-1.5 py-0.1 md:px-3 md:py-1 text-lg font-bold hover:bg-opacity-100 z-50">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Center Carousel (when image clicked) */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          style={{ overflow: "hidden" }}
        >
          <div
            className="relative w-full h-[400px] md:h-[500px] xl:h-[520px] 2xl:h-[900px] flex items-center justify-center"
            onTouchStart={(e) => {
              setIsDragging(true);
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
              if (!isDragging) return;
              const moveX = e.touches[0].clientX - touchStartX.current;
              setTranslateX(moveX);
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              setIsDragging(false);
              if (translateX < -50) nextSlide();
              else if (translateX > 50) prevSlide();
              setTranslateX(0);
            }}
            onWheel={(e) => e.stopPropagation()}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {[-1, 0, 1].map((offset) => {
              const index = (selectedImageIndex + offset + allImages.length) % allImages.length;
              const isCenter = offset === 0;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500 rounded-lg overflow-hidden
                    ${isCenter
                      ? "z-30 h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[800px] w-full scale-100"
                      : "z-20 h-[300px] md:h-[350px] lg:h-[420px] xl:h-[470px] 2xl:h-[750px] w-[70px] md:w-[300px] lg:w-[480px] xl:w-[1100px] 2xl:w-[2200px] scale-90 blur-[4px]"
                    }`}
                  style={{
                    transform:
                      isCenter
                        ? `translateX(${translateX}px)`
                        : offset === -1
                        ? `translateX(calc(-20% + ${translateX / 2}px))`
                        : `translateX(calc(20% + ${translateX / 2}px))`,
                  }}
                >
                  <img
                    src={allImages[index]}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>

          {/* Large screen arrows */}
          <div className="hidden lg:flex justify-between items-center w-full absolute top-1/2 transform -translate-y-1/2 px-10 z-50 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="text-white bg-[#67491C]/70 flex rounded-full px-3 py-1 hover:bg-[#67491C]/80 transition"
            >
              <LeftDubleArow className="lg:h-8 lg:w-5 xl:h-11 xl:w-8 2xl:h-18 2xl:w-14" />
            </button>
            <button
              onClick={nextSlide}
              className="text-white text-center justify-text text-3xl bg-[#67491C]/70 rounded-full px-3 py-1 hover:bg-[#67491C]/80 transition"
            >
              <RightDubleArow className="lg:h-8 lg:w-5 xl:h-11 xl:w-8 2xl:h-18 2xl:w-14" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-1 md:top-3 2xl:top-6 right-[10px] md:right-5 lg:right-8 2xl:right-15 text-white text-2xl font-bold bg-[#67491C] rounded-full w-5 md:w-8 h-5 md:h-8 2xl:h-15 2xl:w-15 flex items-center justify-center hover:bg-[#4D2A11]/80 p-5 z-50"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

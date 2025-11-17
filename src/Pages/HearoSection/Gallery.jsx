import { useState } from "react";
import { Link } from "react-router-dom";

export default function ImageSlider() {
  const images = [
    "/Gallery/Gallery3-min.jpg",
    "/Gallery/Gallery2-min.jpg",
    "/Gallery/Gallery1-min.jpg",
    "/Gallery/Galler-4-min.jpg",
    "/Gallery/Galler-5-min.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(images[(index + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="w-full flex flex-col items-center gap-7 py-4 overflow-hidden">
      {/* Heading */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[90px] md:w-[100px] lg:w-[150px] 2xl:w-[200px]">
          <div className="relative flex justify-center items-center w-[50%] rounded-sm h-[30px] md:h-[40px] lg:h-[50px] 2xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
            <h1 className="cursor-pointer absolute left-2 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[160px] md:w-[350px] lg:w-[550px] 2xl:w-[700px]">
              <Link to="Gallery">Gallery</Link>
            </h1>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute z-20 top-1/2 -translate-y-1/2 left-2 xl:left-4 2xl:left-10"
        >
          {/* SVG omitted for brevity */}
        </button>

        {/* 🟢 Images with finger-follow swipe */}
        <div
          className="flex justify-center items-center gap-[2%] w-full overflow-hidden"
          onTouchStart={(e) => {
            if (window.innerWidth < 1024) {
              setIsDragging(true);
              setTouchStartX(e.touches[0].clientX);
            }
          }}
          onTouchMove={(e) => {
            if (!isDragging || window.innerWidth >= 1024) return;
            const moveX = e.touches[0].clientX - touchStartX;
            setTranslateX(moveX); // ⭐ Finger follow
          }}
          onTouchEnd={() => {
            if (window.innerWidth < 1024) {
              setIsDragging(false);
              if (translateX < -50) nextSlide();
              else if (translateX > 50) prevSlide();
              setTranslateX(0);
            }
          }}
        >
          {getVisibleImages().map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[30%] h-[150px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[600px] overflow-hidden rounded-lg shadow-lg select-none"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease-in-out", // ⭐ Smooth snap
              }}
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute z-20 top-1/2 -translate-y-1/2 right-2 xl:right-4 2xl:right-10"
        >
          {/* SVG omitted for brevity */}
        </button>
      </div>
    </div>
  );
}

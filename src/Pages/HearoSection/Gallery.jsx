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

  // 🟢 Smooth Swipe (with Infinite Loop)
  const handleTouchStart = (e) => {
    if (window.innerWidth < 1024) {
      setIsDragging(true);
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || window.innerWidth >= 1024) return;
    const moveX = e.touches[0].clientX - touchStartX;
    setTranslateX(moveX);
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 1024) {
      setIsDragging(false);

      if (translateX < -50) nextSlide(); // swipe left
      else if (translateX > 50) prevSlide(); // swipe right

      setTranslateX(0);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-7 py-4 overflow-hidden">
      {/* Heading */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[90px] md:w-[100px] lg:w-[150px] 2xl:w-[200px]">
          <div className="relative flex justify-center items-center w-[50%] rounded-sm h-[30px] md:h-[40px] lg:h-[50px] 2xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
            <h1 className="cursor-pointer absolute inset-0 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[160px] md:w-[350px] lg:w-[550px] 2xl:w-[700px]">
              <Link to="Gallery">Gallery</Link>
            </h1>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative w-full flex justify-center items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow (only for large screens) */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute z-20 top-1/2 -translate-y-1/2 left-2 xl:left-4 2xl:left-10"
        >
          <svg
            className="lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="59.5"
              y="59.5"
              width="59"
              height="59"
              rx="29.5"
              transform="rotate(180 59.5 59.5)"
              fill="#67491C"
              fillOpacity="0.9"
            />
            <rect
              x="59.5"
              y="59.5"
              width="59"
              height="59"
              rx="29.5"
              transform="rotate(180 59.5 59.5)"
              stroke="white"
            />
            <path d="M40.4999 30H20.0833" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M27.6667 38.1666L19.5 30L27.6667 21.8333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 🟢 Images (infinite + smooth swipe) */}
        <div
          className="flex justify-center items-center gap-[2%] w-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {getVisibleImages().map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[30%] h-[150px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[600px] overflow-hidden rounded-lg shadow-lg select-none"
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

        {/* Right Arrow (only for large screens) */}
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute z-20 top-1/2 -translate-y-1/2 right-2 xl:right-4 2xl:right-10"
        >
          <svg
            className="lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="-0.5"
              width="59"
              height="59"
              rx="29.5"
              transform="matrix(1 0 0 -1 0 59)"
              fill="#67491C"
              fillOpacity="0.9"
            />
            <rect
              x="0.5"
              y="-0.5"
              width="59"
              height="59"
              rx="29.5"
              transform="matrix(1 0 0 -1 0 59)"
              stroke="white"
            />
            <path d="M19.5 30H39.9166" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M32.3333 38.1666L40.5 30L32.3333 21.8333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

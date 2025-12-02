import React, { useState, useRef } from "react";

const images = [
  "/MainGallery/Gallery Scroll1-min.jpg",
  "/MainGallery/Gallery Scroll2-min.jpg",
  "/MainGallery/Gallery Scroll4-min.jpg",
  "/MainGallery/Gallery Scroll5-min.jpg",
  "/MainGallery/Gallery Scroll6-min.jpg",
  "/MainGallery/Gallery Scroll7-min.jpg",
  "/MainGallery/Gallery Scroll8-min.jpg",
  "/MainGallery/Depth 7, Frame 3-min.jpg",
  "/MainGallery/Gallery Scroll9.jpg",
  "/MainGallery/Gallery Scroll10-min.jpg",
];

export default function CenterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  // ⭐ NEW: smooth slide offset
  const [slideX, setSlideX] = useState(0);

  const touchStartX = useRef(0);
  const total = images.length;

  // ⭐ UPDATED (smooth slide)
  const prevSlide = () => {
    setSlideX(80);
    setTimeout(() => setCurrentIndex((currentIndex - 1 + total) % total), 100);
    setTimeout(() => setSlideX(0), 120);
  };

  const nextSlide = () => {
    setSlideX(-80);
    setTimeout(() => setCurrentIndex((currentIndex + 1) % total), 100);
    setTimeout(() => setSlideX(0), 120);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX - touchStartX.current;
    setDragX(moveX * 0.7);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragX < -50) nextSlide();
    else if (dragX > 50) prevSlide();
    setDragX(0);
  };

  const getVisibleImages = () => {
    let visible = [];
    for (let offset = -2; offset <= 2; offset++) {
      let index = (currentIndex + offset + total) % total;
      visible.push({ src: images[index], offset });
    }
    return visible;
  };

  return (
    <div className="flex flex-col items-center md:gap-2 pt-5">
      <p className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl p-2 md:p-5">
        Explore breathtaking views, unique traditions, and unforgettable moments from the heart of Kalash Valley.
      </p>

      <div className="relative w-full overflow-hidden flex flex-col items-center">
        <div
          className="flex justify-center items-center w-full 
            h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[600px]
            gap-3 md:gap-4 lg:gap-5 xl:gap-8
            md:overflow-x-auto lg:overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleImages().map(({ src, offset }, i) => {
            let scale = 0.6;
            if (offset === 0) scale = 1.1;
            else if (Math.abs(offset) === 1) scale = 1;
            else if (Math.abs(offset) === 2) scale = 0.9;

            return (
              <div
                key={i}
                className="relative h-[90%] w-[50%] md:h-[80%] md:w-[20%] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer"
                style={{
                  // ⭐ UPDATED: smooth slide + drag
                  transform: `translateX(${slideX + dragX * 0.9}px) scale(${scale})`,
                  zIndex: offset === 0 ? 10 : 2,
                  transition: isDragging ? "none" : "transform 0.30s ease",
                }}
              >
                <img src={src} alt={`img-${i}`} className="w-full h-full object-cover" />
                {offset !== 0 && <div className="absolute inset-0 bg-white opacity-30"></div>}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex justify-center gap-2 p-5">
          <button
            onClick={prevSlide}
            className="px-4 py-2 text-white bg-[#67491C] bg-opacity-90 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 text-white bg-[#67491C] bg-opacity-90 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

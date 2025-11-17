import React, { useState, useEffect, useRef } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTranslate, setDragTranslate] = useState(0);

  const touchStartX = useRef(0);
  const startIndex = useRef(0);
  const total = images.length;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + total) % total);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % total);

  const handleImageClick = (offset) => {
    if (offset !== 0) {
      setCurrentIndex((currentIndex + offset + total) % total);
    } else {
      setIsModalOpen(true);
    }
  };

  const getVisibleImages = () => {
    let visible = [];
    for (let offset = -2; offset <= 2; offset++) {
      let index = (currentIndex + offset + total) % total;
      visible.push({ src: images[index], offset });
    }
    return visible;
  };

  // 🟢 Smooth Finger-Follow
  const handleTouchStart = (e) => {
    if (window.innerWidth < 1024) {
      setIsDragging(true);
      touchStartX.current = e.touches[0].clientX;
      startIndex.current = currentIndex;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || window.innerWidth >= 1024) return;
    const moveX = e.touches[0].clientX - touchStartX.current;
    setDragTranslate(moveX); // ⭐ Direct follow finger, no delay
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 1024) {
      setIsDragging(false);

      if (dragTranslate < -50) nextSlide();
      else if (dragTranslate > 50) prevSlide();

      setDragTranslate(0);
    }
  };

  return (
    <div className="flex flex-col items-center md:gap-2 pt-5">
      <p className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl p-2 md:p-5">
        Explore breathtaking views, unique traditions, and unforgettable moments from the heart of Kalash Valley.
      </p>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden flex flex-col items-center">
        <div
          className="flex justify-center items-center w-full 
            h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[600px]
            gap-3 md:gap-4 lg:gap-5 xl:gap-8
            md:overflow-x-auto lg:overflow-hidden
          "
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
                className={`relative h-[90%] w-[50%] md:h-[80%] md:w-[20%] rounded-sm overflow-hidden flex-shrink-0 cursor-pointer`}
                style={{
                  transform: `translateX(${dragTranslate}px) scale(${scale})`,
                  zIndex: offset === 0 ? 10 : 2,
                  transition: isDragging ? "none" : "transform 0.3s ease", // ⭐ No delay during drag
                }}
                onClick={() => handleImageClick(offset)}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600/50 backdrop-blur-[4px] flex justify-center items-center z-50">
          <div className="flex items-center justify-center relative w-[80%] md:h-[460px] xl:h-[550px] 2xl:h-[950px] rounded-lg ">
            <img
              src={images[currentIndex]}
              alt="Enlarged"
              className="w-full h-[400px] md:h-[450px] xl:h-[500px] 2xl:h-[900px] rounded-lg "
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 xl:top-7 right-0 text-white text-2xl font-bold bg-[#67491C]/70 border rounded-full w-10 h-10 2xl:w-15 2xl:h-15 flex items-center justify-center hover:bg-opacity-99"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

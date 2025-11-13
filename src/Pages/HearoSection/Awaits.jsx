import { useState, useEffect } from "react";
export default function Awaits() {
  const images = [
    { src: "/Awaits/awaits1-min.jpg", title: "Bashali (Maternity Home)", text: "Bashali is an important part of Kalasha culture — a traditional women’s house where women stay during menstruation and childbirth, observing ancient customs and spiritual practices that honor purity, renewal, and community wisdom." },
    { src: "/Awaits/awaits2-min.jpg", title: "Kundurik", text: "Kundurik is a Kalash tradition where wooden effigies are carved to honor brave ancestors. Placed at the village entrance during the Gandaw ritual, these figures symbolize courage and cultural heritage" },
    { src: "/Awaits/awaits3-min.jpg", title: "Temple", text: "The temple is a sacred sanctuary devoted to the goddess Jestak, who symbolizes family and domestic harmony in Kalasha tradition. It stands as a place where rituals nurture unity and love within families." },
    { src: "/Awaits/awaits4-min.jpg", title: "Community", text: "Community living is a core value of the Kalasha people, built on cooperation, respect, and shared responsibility. Families support one another through daily life and festivals, preserving harmony and a strong sense of identity within the valleys they call home." },
    { src: "/Awaits/awaits5-min.jpg", title: "Cemetery", text: "The Kalash cemetery culture reflects the community’s unique beliefs about life, death, and the afterlife. The Kalasha see death not as an end but as a natural stage of existence, honoring it through rituals that express reverence, continuity, and acceptance." },
    { src: "/Awaits/awaits6-min.jpg", title: "Ancient architecture", text: "The architecture of a Kalash house reflects the people’s deep bond with nature and community. Built from local materials to suit the mountain terrain, each home tells a story of heritage, harmony, and everyday life." },
    { src: "/Awaits/awaits7-min.jpg", title: "Kalashadur Museum", text: "It was built by a Greek volunteer in 2001. The museum showcases a collection reflecting the culture and history of the Kalash people, along with the traditions of communities across the wider Hindu Kush region." },
  ];
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[(index + i) % images.length]);
    }
    return visible;
  };
  const handleTouchStart = (e) => {
    if (window.innerWidth < 768) setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (window.innerWidth < 768) setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (window.innerWidth < 768) {
      if (touchStartX - touchEndX > 50) nextSlide();
      if (touchEndX - touchStartX > 50) prevSlide();
    }
  };
  // Dots for mobile (count = total images)
  const renderDots = () => {
    if (window.innerWidth >= 768) return null;
    return (
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full cursor-pointer"
            style={{ backgroundColor: i === index ? "#D49736" : "#C4C4C4" }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col items-center gap-5 p-2 mb-5 md:mb-10">
      {/* heading */}
            <div className="w-full flex items-center justify-center">
             <div className="w-[288px] md:w-[370px] lg:w-[570px] 2xl:w-[720px]">
              <div className="relative flex justify-center items-center rounded-sm w-[50%] h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
               <h1 className="absolute left-2 md:left-3 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[280px] md:w-[350px] lg:w-[550px] 2xl:w-[700px]">
                 What awaits beyond the Villa
               </h1>
              </div>
             </div>
            </div>
      {/* Slider */}
      <div
        className="relative w-full flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {/* Left Button for md+ */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute z-20 top-1/2 -translate-y-1/2 left-2">
            <svg
            className="lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
            viewBox="0 0 60 60 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="59.5"
              y="59.5"
              width="59"
              height="59"
              rx="29.5"
              transform="rotate(180 59.5 59.5)"
              fill="#67491C"
              fillOpacity="0.9"/>
            <rect
              x="59.5"
              y="59.5"
              width="59"
              height="59"
              rx="29.5"
              transform="rotate(180 59.5 59.5)"
              stroke="white"/>
            <path d="M40.4999 30H20.0833" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M27.6667 38.1666L19.5 30L27.6667 21.8333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Images */}
        <div className="flex justify-center items-start gap-4 w-full overflow-hidden p-2">
          {getVisibleImages().map((img, i) => (
            <div key={i} className="flex flex-col justify-cente items-center w-full md:w-[30%] h-auto md:h-[500px] p-2 overflow-hidden shadow-lg gap-2">
              <img src={img.src} alt={`Slide ${i}`} className="w-full h-[200px] overflow-y-hidden" />
              <h1 className="text-lg font-bold text-center">{img.title}</h1>
              <p className="text-sm text-center">{img.text}</p>
            </div>
          ))}
        </div>
        {/* Right Button for md+ */}
        <button
          onClick={nextSlide}
          className="hidden md:block absolute z-20 top-1/2 -translate-y-1/2 right-2">
          <svg
            className="lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="-0.5"
              width="59"
              height="59"
              rx="29.5"
              transform="matrix(1 0 0 -1 0 59)"
              fill="#67491C"
              fillOpacity="0.9"/>
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
              strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Dots only on mobile */}
      {renderDots()}
    </div>
  );
}

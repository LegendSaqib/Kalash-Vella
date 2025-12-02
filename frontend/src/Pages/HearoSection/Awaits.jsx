import { useState, useEffect } from "react";
import { LeftDubleArow, RightDubleArow } from "../../assets/icons/icons";

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
  const [isMoving, setIsMoving] = useState(false); // ✅ added

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

  // ✅ Updated touch handlers
  const handleTouchStart = (e) => {
    if (window.innerWidth < 768) {
      setTouchStartX(e.touches[0].clientX);
      setIsMoving(false);
    }
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth < 768) {
      setTouchEndX(e.touches[0].clientX);
      setIsMoving(true);
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 768) {
      if (!isMoving) return; // ✅ Prevent single touch click from changing slide
      if (touchStartX - touchEndX > 50) nextSlide();
      else if (touchEndX - touchStartX > 50) prevSlide();
    }
  };

  const renderDots = () => {
    if (window.innerWidth >= 768) return null;
    return (
      <div className="flex gap-2">
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
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Button for md+ */}
        <button
          onClick={prevSlide}
          className="bg-[#67491C] border border-white hidden md:block absolute z-20 md:top-50 xl:top-1/2 -translate-y-1/2 left-2 rounded-full p-2">
          <LeftDubleArow className="rounded-full md:w-[20px] md:h-[20px] xl:w-[35px] xl:h-[35px] 2xl:w-[70px] 2xl:h-[70px]"/>
        </button>

        {/* Images */}
        <div className="flex justify-center items-start gap-4 w-full overflow-hidden p-2">
          {getVisibleImages().map((img, i) => (
            <div key={i} className="flex flex-col justify-cente items-center w-full md:w-[35%] h-auto md:h-[500px] xl:h-[700px] 2xl:h-[900px] p-2 overflow-hidden shadow-lg gap-2 xl:gap-4 2xl:gap-6">
              <img src={img.src} alt={`Slide ${i}`} className="w-full h-[300px] md:h-[200px] lg:h-px] xl:h-[400px] 2xl:h-[600px] overflow-y-hidden rounded-lg"/>
              <h1 className="text-lg font-bold text-center lg:text-lg xl:text-2xl 2xl:text-4xl">{img.title}</h1>
              <p className="text-sm text-center lg:text-lg xl:text-xl 2xl:text-2xl">{img.text}</p>
            </div>
          ))}
        </div>

        {/* Right Button for md+ */}
        <button
          onClick={nextSlide}
          className="bg-[#67491C] border border-white hidden md:block absolute z-20 md:top-50 xl:top-1/2 -translate-y-1/2 right-2 rounded-full p-2">
          <RightDubleArow className="rounded-full md:w-[20px] md:h-[20px] xl:w-[35px] xl:h-[35px] 2xl:w-[70px] 2xl:h-[70px]"/>
        </button>
      </div>

      {/* Dots only on mobile */}
      {renderDots()}
    </div>
  );
}

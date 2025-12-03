import React, { useRef, useState } from "react";

const data = [
  { name: "David Mclean", rating: 4, text: "They’re proactive, creative, and genuinely committed to helping local businesses succeed. Working with them felt like having a true partner who understands our goals.", img: "/Testominals/Testominals1-min.jpg" },
  { name: "Wilson M.", rating: 5, text: "Rick and the team made us feel seen from the very beginning. The level of personal support and attention we received was unlike anything we’ve experienced.", img: "/Testominals/Testominals2-min.jpg" },
  { name: "Daniel M", rating: 3, text: "The best design and customer service we’ve ever had. They lead with heart, put the community first, and treat every project like it matters.", img: "/Testominals/Testominals3-min.jpg" },
  { name: "jack L", rating: 4, text: "The best design and customer service we’ve ever had. They lead with heart, put the community first, and treat every project like it matters.", img: "/Testominals/Testominals4-min.jpg" },
  { name: "McLean", rating: 5, text: "They’re proactive, creative, and genuinely committed to helping local businesses succeed. Working with them felt like having a true partner who understands our goals.", img: "/Testominals/Testominals5-min.jpg" },
  { name: "Wonton", rating: 4, text: "They’re proactive, creative, and genuinely committed to helping local businesses succeed. Working with them felt like having a true partner who understands our goals.", img: "/Testominals/Testominals6-min.jpg" },
  { name: "Stephen", rating: 3, text: "Rick and the team made us feel seen from the very beginning. The level of personal support and attention we received was unlike anything we’ve experienced.", img: "/Testominals/Testominals7-min.jpg" },
  { name: "Michael", rating: 4, text: "They’re proactive, creative, and genuinely committed to helping local businesses succeed. Working with them felt like having a true partner who understands our goals.", img: "/Testominals/Testominals8-min.jpg" },
  { name: "John", rating: 5, text: "Rick and the team made us feel seen from the very beginning. The level of personal support and attention we received was unlike anything we’ve experienced.", img: "/Testominals/Testominals9-min.jpg" },
];

export default function ContinuousScroll() {
  const [items, setItems] = useState([...data]);
  const scrollRef = useRef(null);
  const total = items.length;

  const scrollAmount = 300; // ek click par kitna scroll ho

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      // last item se wrap
      setItems((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      // first item se wrap
      setItems((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first];
      });
    }
  };

  return (
    <div className="p-5 pb-10 relative mt-5">
      <div className="w-full flex items-center justify-center">
        <div className="relative flex justify-center items-center md:w-[12%] xl:w-[9%] 2xl:w-[6%] rounded-sm md:h-[45px] xl:h-[50px] 2xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
          <h1 className="absolute left-3 text-[#4D2A11] md:text-2xl lg:text-4xl 2xl:text-5xl font-bold">
            Testominals
          </h1>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative mt-10">
        {/* LG aur bari screens ke buttons */}
        <button
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#67491C] text-white px-4 py-2 rounded-full"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <button
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#67491C] text-white px-4 py-2 rounded-full"
          onClick={scrollRight}
        >
          &gt;
        </button>

        <div
          ref={scrollRef}
          className="md:h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px] flex items-center gap-5 px-7 xl:px-15 overflow-x-auto lg:overflow-x-hidden scroll-smooth"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="md:h-[170px] xl:h-[200px] 2xl:h-[320px] relative border border-gray-300 rounded-lg py-5 px-2 flex flex-col items-center"
              style={{
                flex: "0 0 calc((100% - 10px)/4)",
                minWidth: 0,
                marginRight: index === items.length - 1 ? "5px" : "0",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute -top-6 xl:-top-9 rounded-full border-2 border-gray-300 md:w-12 md:h-12 xl:w-18 xl:h-18 object-cover"
              />
              <h1 className="mt-2 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold">
                {item.name}
              </h1>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? "text-yellow-400" : "text-gray-700"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.405 2.475a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.405-2.475a1 1 0 00-1.176 0l-3.405 2.475c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.025 9.397c-.784-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-5 mt-5">
        <h1 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11] text-center md:h-[25px] lg:h-[30px]">
          Plan Your Kalash Valley Adventure
        </h1>
        <p className="md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl text-[#3F3F3F] text-center mb-5 px-2">
          Get in touch with our team to customize your tour and create a memorable experience.
        </p>
        <button className="flex items-center gap-2 md:px-2 md:py-1 lg:px-3 lg:py-2 2xl:px-4 2xl:py-3 font-semibold text-[10px] lg:text-xs 2xl:text-xl bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] text-white rounded-full">
          Contact us
        </button>
      </div>
    </div>
  );
}

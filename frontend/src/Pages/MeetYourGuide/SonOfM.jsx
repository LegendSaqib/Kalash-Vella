import React from "react";
import { Link } from "react-router-dom";
import { Booking } from "../../assets/icons/icons"; // apka Booking icon yahan se import hota hai

export default function GuideSection() {
  return (
    <>
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 p-5 xl:p-10">
      {/* Left Image */}
      <div className="w-full md:w-[50%] bg-amber-300 ">
        <img
          src="/MYG/SOM-min.jpg"
          alt="Guide"
          className="object-cover xl: w-full"
        />
      </div>
      {/* Right Text */}
      <div className="w-full md:w-[50%] flex flex-col gap-5">
        <p className="text-gray-700 leading-relaxed md:mb-4 text-xs lg:text-xl xl:text-2xl 2xl:text-4xl text-center">
          Shoaib Akhtar grew up right here in Bumburet Valley — surrounded by the
          mountains, festivals, and stories that make the Kalash culture so
          alive. As the son of your hosts at Kalash Villa, he’s been welcoming
          guests since he was old enough to carry tea trays and tell stories
          around the fire.
          <br />
          He later earned a Bachelor’s degree in Journalism, which only deepened
          his love for storytelling. Now, he blends that skill with his roots —
          guiding travelers through the valley he calls home, sharing the
          history, myths, and everyday life of his people with warmth and
          honesty. When you walk the trails with Shoaib, you don’t just see the
          valley — you feel it. Every stop has a story, every path a bit of
          laughter, and by the end, most guests say they’ve found not just a
          guide, but a friend.
        </p>
      </div>
    </div>
        {/* Button */}
        <div className="md:mt-5 flex flex-col gap-5 justify-center items-center px-5 md:px-0 pb-5">
            <p className="text-[#4D2A11] text-sm md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-center font-bold">Ready to explore Kehlash Valley with our expert guides?</p>
          <button className="flex items-center gap-2 bg-gray-300/20 p-1 pr-4 font-semibold text-xs md:text-sm text-[#67491C] rounded-full border border-[#67491C] hover:bg-[#f9f2ec] transition cursor-pointer">
            <Booking className="h-[20px] md:h-[25px] lg:h-[30px] xl:h-[40px] 2xl:h-[50px] bg-[#D49736] rounded-full"/>
            <Link to="/Booking">Book Your Stay</Link>
          </button>
        </div>
    </>
  );
}

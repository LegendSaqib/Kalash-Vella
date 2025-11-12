import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Booking } from "../assets/icons/icons";
import Logo from "./Logo";

const Navigation = (props) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  // ✅ Close menu on outside click (including clicking the hamburger icon again)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <div className="z-80 backdrop:blur-[2px] flex bg-gray-900 items-center gap-2 w-full h-[50px] md:h-[100px] md:py-5 px-2 md:px-5 2xl:py-20">
        <div className="flex items-center justify-end md:justify-center w-[33%] md:w-[15%] md:static absolute top-[10px] right-5">
          <Logo />
        </div>

        <div className="w-[33%] md:w-[70%] flex items-center justify-end ">
          {/* Hamburger button */}
          <button
            ref={buttonRef}
            className="md:hidden flex items-center absolute left-5 top-[15px] z-100"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>

          {/* Navigation Links */}
          <ul
            ref={navRef}
            className={`bg-white/70 z-100 backdrop-blur-[2px] absolute flex-col items-center font-semibold text-white w-full py-5 lg:px-2 top-[50px] left-0
                        md:static md:bg-transparent md:flex md:flex-row gap-2 2xl:gap-15 md:items-center md:justify-center transition transform duration-200
                        ${open ? "flex" : "hidden"}`}
          >
            <button className="md:hidden z-80 flex items-center gap-2 p-1 pr-2 xl:pr-6 font-semibold text-sm md:text-[10px] lg:text-xs 2xl:text-lg text-[#956928] rounded-full border border-[#B8822C] hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] hover:text-white">
              <Booking className="h-[28px] lg:h-[40px] xl:h-[40px] 2xl:h-[60px] bg-[#D49736] rounded-full" />
              <Link to="/Booking" onClick={() => setOpen(false)}>
                Book Your Stay
              </Link>
            </button>

            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/"
                onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/About"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/Gallery"
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/MeetYourGuide"
                onClick={() => setOpen(false)}
              >
                Meet Your Guide
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/RandPricing"
                onClick={() => setOpen(false)}
              >
                Room & Pricing
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] rounded-lg border border-transparent hover:border-white hover:text-white text-black md:text-white md:text-[10px] lg:text-sm xl:text-lg 2xl:text-2xl p-2"
                to="/ContectUs"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-end md:w-[15%]">
          <button className="hidden z-100 md:flex bg-gradient-to-b from-[#4D2A11]/50 via-[#B36228]/50 to-[#4D2A11]/50 md:items-center gap-2 p-1 pr-2 xl:pr-6 font-semibold text-[8px] lg:text-xs 2xl:text-lg  text-[#FFDAC0] rounded-full border border-[#FFFFFF] ">
            <Booking className="md:h-[25px] lg:h-[40px] xl:h-[40px] 2xl:h-[60px] bg-[#D49736]/30 rounded-full" />
            <Link to="Booking">Book Your Stay</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;

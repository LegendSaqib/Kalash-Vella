import { Link } from "react-router-dom";
import { RightArow, Location, Call, Message, FaceBook, Instagram, Whatsapp, ColorLocation } from "../assets/icons/icons";

const Footer = () => {
    return (
        <>
        <div className="bg-[#1F0D00] w-full flex flex-col md:flex-row items-center gap-5 p-2 py-10 md:py-0 lg:p-10 xl:p-15 2xl:p-30">
            <div className="w-full md:w-[30%]">
                <div className="flex flex-col gap-2 2xl:gap-5 justify-center items-center ">
                    <div className="w-[90px] md:w-[50px] lg:w-[70px] xl:w-[90px] 2xl:w-[150px] ">
                        <img src="/Vector.png" alt="" />
                    </div>                                 
                    <p className="text-white text-sm md:text-[8px] lg:text-[10px] xl:text-sm 2xl:text-2xl text-center md:text-justify px-10 md:px-0">
                        Kalash Villa is a serene guesthouse nestled in the heart of Bumburat Valley , surrounded by the scenic peaks of the Hindukush mountains. It offers a peaceful retreat where guests can experience the rich Kalasha culture, stunning landscapes and the warmth of genuine local hospitality.
                    </p>
                </div>
            </div>

            {/* Quick Links */}
            <div className="w-full md:w-[30%] text-white flex items-center flex-col">
                <div className="flex flex-col gap-5 items-center md:items-start md:gap-2 ">
                    <h1 className="text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl underline font-semibold xl:font-bold">Quick Links</h1>
                    <ul className="text-white flex flex-col items-center md:items-start gap-2">
                        <Link to="../" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Home</Link>
                        <Link to="/About" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">About Us</Link>
                        <Link to="/Gallery" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Gallery</Link>
                        <Link to="/MeetYourGuide" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Meet Your Guide</Link>
                        <Link to="/RandPricing" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Room & Pricing</Link>
                        <Link to="/Booking" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Booking</Link>
                        <Link to="/ContectUs" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl cursor-pointer">Contect Us</Link>
                    </ul>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="relative w-full md:w-[40%] h-[300px] md:h-[250px] flex justify-center flex-col gap-2 text-white bg-[url('/Vector.png')] bg-contain bg-no-repeat bg-right">
                <div className="absolute inset-0 bg-[#1F0D00]/90 flex flex-col items-center md:items-start justify-center gap-5 md:gap-2 xl:gap-5 text-white ">
                    <h1 className="text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl underline font-semibold xl:font-bold">Contect Us</h1>
                    <div className="flex flex-col items-center md:items-start gap-5 md:gap-2 xl:gap-5">
                        <ul className="text-white flex flex-col items-center md:items-start gap-5 md:gap-2 xl:gap-5 ">
                            <li className="flex items-center ">
                                <a className="flex flex-col md:flex-row items-center md:items-start gap-2 xl:gap-5 cursor-pointer text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl hover:text-blue-700" href="https://www.google.com/maps/place/KalashVilla/@35.6997042,71.6840444,17z/data=!3m1!4b1!4m6!3m5!1s0x38db45d044e6c64d:0x3b24deb5df2e02b6!8m2!3d35.6997042!4d71.6840444!16s%2Fg%2F11sn41cw46?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                                    <Location/>Bumburet Valley Kalash, Chitral District, Pakistan
                                </a>
                            </li>
                            <li className="flex items-center gap-2 md:gap-5 cursor-pointer text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl hover:text-blue-700 ">
                                <a href="tel:+923285816459" className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                                    <Call /> +92 328 5816459
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a className="flex flex-col md:flex-row items-center gap-2 md:gap-5 cursor-pointer text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl hover:text-blue-700 " href="mailto:pharan.kalash@gmail.com">
                                    <Message/> pharan.kalash@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex">
                            <ul className="flex gap-5 md:gap-2 xl:gap-5 items-center ">
                                <li><FaceBook/></li>
                                <li> 
                                    <a href="https://www.instagram.com/kalash_villa?igsh=MWJpdzJsc3hnYWMwZg%3D%3D&utm_source=qr ">
                                        <Instagram/>
                                    </a>
                                </li>
                                <li>
                                   <a href="https://wa.me/+923285816459" target="_blank" rel="noopener noreferrer">                                       
                                        <Whatsapp/>
                                   </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/maps/place/KalashVilla/@35.6997042,71.6840444,17z/data=!3m1!4b1!4m6!3m5!1s0x38db45d044e6c64d:0x3b24deb5df2e02b6!8m2!3d35.6997042!4d71.6840444!16s%2Fg%2F11sn41cw46?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">
                                        <ColorLocation/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;

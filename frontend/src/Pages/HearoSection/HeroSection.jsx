import { Link } from "react-router-dom"
import Intro from "./Intro"
import Experience from "./Experience"
import ImageSlider from "./Gallery"
import Awaits from "./Awaits"
const HeroSection = () => {
    return (
        <>
        <div className="bg-[url('/HomeBg-min.jpg')] bg-cover h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[1000px] bg-right md:bg-center bg-no-repeat w-full">
          <div className="bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-gray-900/0 h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] w-full z-10">
              <div className="w-full flex flex-col gap-3 md:gap-2 justify-center items-center pt-20 md:pt-30 lg:pt-40 xl:pt-50 2xl:pt-60">
                <div className=" bg-[#724A2F]/40 rounded-lg w-[250px] md:w-[300px] lg:w-[500px] xl:w-[900px] 2xl:w-[1000px] md:p-2 lg:p-4 xl:p-6">
                  <h1 className="text-white text-center font-bold text-lg md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl ">Welcome to Kalash Villa</h1>
                </div>
                <p className="text-white text-[10px] md:text-sm lg:text-lg 2xl:text-4xl md:py-5 text-justify">Rooted in culture, surrounded by nature</p>
               <button className="flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-2 2xl:px-4 2xl:py-3 font-semibold text-[10px] lg:text-xs 2xl:text-xl bg-gradient-to-b from-[#4D2A11] via-[#B36228] to-[#4D2A11] hover:bg-gradient-to-b hover:from-[#3b200d] hover:via-[#e2660e] hover:to-[#3b200d] text-white rounded-sm border border-white">
                <Link to="/Booking"> Book Your Stay</Link></button>
              </div>         
           </div>
        </div>
        <Intro/> 
        <ImageSlider/>
        <Experience/>
        <Awaits/>
        </>
    )
}
export default HeroSection
import Step1 from "./Step1"
import Step2 from "./Step2"
const BookingMain = () => {
    return (
        <>
        <div className="relative bg-[url('/BookingBg.jpg')] bg-cover h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[1000px] bg-center bg-no-repeat w-full">
          <div className="bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900/0 h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-2 justify-center items-center">
                <div className=" bg-[#724A2F]/30 rounded-lg w-[200px] md:w-[300px] lg:w-[500px] xl:w-[900px] 2xl:w-[1000px] p-2 lg:p-4 xl:p-6">
                  <h1 className="text-white text-center font-bold text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl ">Booking</h1>
                </div>
              </div>         
           </div>
        </div>
        <Step1/>
        <Step2/>
        </>
    )
}
export default BookingMain
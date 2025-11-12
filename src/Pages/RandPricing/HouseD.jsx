import { Car, Culture, OrangeLocation, Stay } from "../../assets/icons/icons"

const HouseD = () => {
    return (
        <>
        <div className="w-full flex flex-col md:gap-5 items-center pt-10 md:pb-10">
          <div className="w-full flex items-center justify-center">
            <div className="w-[140px] md:w-[215px] lg:w-[252px] 2xl:w-[335px] border-2 border-transparent border-l-[#B36228] rounded-lg ">
               <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] w-[50%] md:h-[45px] lg:h-[50px] 2xl:h-[60px]">
                 <h1 className="absolute inset-0 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold w-[135px] md:w-[210px] lg:w-[250px] 2xl:w-[330px] ">House Details</h1>
               </div>
            </div>
          </div>
         <div className="w-full flex flex-col-reverse md:flex-row gap-2 lg:gap-4 md:p-5">            
           <div className="w-full md:w-[50%] flex flex-col justify-center py-5 md:p-0 px-5 2xl:gap-5 ">
             <h1 className="md:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-[#724A2F] text-center md:text-start">
               Kalash Villa — A Retreat Rooted in Tradition
             </h1>
             <p className="text-sm lg:text-lg xl:text-2xl 2xl:text-4xl py-2  text-center md:text-start">
               Nestled deep within the Kalash Valley, Kalash Villa blends rustic charm with modern comfort — a place where culture, nature, and serenity embrace you.
             </p>
             <h1 className="md:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-[#724A2F] text-center md:text-start">
               Experience Authentic Kalasha Living
             </h1>
             {/* 👇 Ye part change kiya gaya hai */}
             <ul className="list-disc p-2 xl:p-5 pl-10 xl:pl-15 text-sm lg:text-lg xl:text-2xl 2xl:text-4xl xl:space-y-5">
               <li>Hand-crafted Wooden Rooms</li>
               <li>Attach Bathrooms with Hot Showers</li>
               <li>Delicious Meals</li>
               <li>Guided Scenic Tours by Locals</li>
             </ul>
             <p className="text-[#3F3F3F] md:text-xs lg:text-lg xl:text-2xl 2xl:text-4xl text-center md:text-start font-semibold mt-2">
               Limited rooms available — reserve your spot today.
             </p>
           </div>
            <div className="w-full md:w-[50%] relative rounded-lg p-5">
              <img className="rounded-lg 2xl:w-[100%] " src="/RandPpics/RandP1-min.jpg" alt="imag here" />
            </div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-4 2xl:gap-6 items-center justify-items-center-center w-full px-5 xl:p-8 2xl:px-10">
                <div className="bg-gradient-to-b from-[#CD9138] to-[#67491C] p-[2px] rounded-lg">
                  <div className="bg-white flex flex-col gap-2 2xl:gap-5 items-center justify-center rounded-lg p-2">
                   <Stay className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"/>
                    <h1 className="font-bold text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl">Comfortable Stays</h1>
                    <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl text-center ">Traditional rooms with modern comfort.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#CD9138] to-[#67491C] p-[2px] rounded-lg">
                  <div className="bg-white flex flex-col gap-2 2xl:gap-5 items-center justify-center rounded-lg p-2">
                     <OrangeLocation className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"/>
                    <h1 className="font-bold text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl">Tour Guides</h1>
                    <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl text-center">Local experts sharing Kehlash culture.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#CD9138] to-[#67491C] p-[2px] rounded-lg">
                  <div className="bg-white flex flex-col gap-2 2xl:gap-5 items-center justify-center rounded-lg p-2">
                    <Car className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"/>
                    <h1 className="font-bold text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl">Travel Assistance</h1>
                    <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl text-center xl:px-10 2xl:px-20 ">Full tour and transport support.</p>
                  </div> 
                </div>
                <div className="bg-gradient-to-b from-[#CD9138] to-[#67491C] p-[2px] rounded-lg">
                  <div className="bg-white flex flex-col gap-2 2xl:gap-5 items-center justify-center rounded-lg p-2">
                    <Culture className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]"/>
                    <h1 className="font-bold text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl">Cultural Experiences</h1>
                    <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-4xl text-center">Festivals, traditions, and nature trails.</p>
                  </div>
                </div>
         </div>
         {/* last Pricing Details Heading */}
         <div className="w-full flex flex-col gap-5 items-center justify-center p-5">
            <div className="rounded-sm pl-2 md:pl-5 py-2 border-2 border-transparent border-l-[#B36228] border-b-[#B36228] border-t-[#B36228] ">
                <h1 className="font-bold text-sm lg:text-lg xl:text-xl 2xl:text-4xl">Pricing Details</h1>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl xl:rounded-2xl border border-[#67491C] p-5 xl:p-10 ">
                <h1 className="text-[#4D2A11] text-xs lg:text-sm xl:text-lg 2xl:text-2xl font-bold ">PKR 12,000 / night</h1>
                <h1 className="text-[#956928] text-[10px] lg:text-xs xl:text-sm 2xl:text-lg font-bold ">Includes:</h1>
                <p className="text-xs lg:text-sm xl:text-lg 2xl:text-2xl text-center ">Breakfast, lunch & dinner — all home-cooked with love</p>
            </div>
         </div>
        </div>
        </>
    )
}

export default HouseD
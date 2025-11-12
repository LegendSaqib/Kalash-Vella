const Experience = () => {
    return (
        <div className="w-full flex flex-col gap-7 items-center justify-center p-2 md:p-10">
            <div className="w-full flex items-center justify-center">
             <div className="w-[250px] md:w-[300px] lg:w-[420px] 2xl:w-[550px]">
              <div className="relative flex justify-center items-center rounded-sm w-[50%] h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
               <h1 className="absolute left-1 md:left-3 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[230px] md:w-[350px] lg:w-[550px] 2xl:w-[700px]">
                 Experience & Activities
               </h1>
              </div>
             </div>
            </div>
            {/* 6 div for h1 and p */}
            <div className="w-full grid grid-cols-2 place-items-center md:grid-cols-3 gap-1 md:gap-5">
                <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Kalash Culture & Traditions</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Experience centuries-old customs and the vibrant life of the Kalash people.</p>
                </div>
                <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Kalash Music & Dance</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Feel the heartbeat of the valley through traditional music and dance.</p>
                </div>
                <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Kalash Food Experience</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Taste authentic Kalash flavors crafted from fresh local ingredients.</p>
                </div>
                 <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Relaxation & Reflection</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Unwind by streams, gaze at the stars, and soak in the valley’s serenity.</p>
                </div>    
                <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Hiking & Nature Walks</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Wander mountain trails and discover breathtaking views at every turn.</p>
                </div>    
                <div className="bg-[url('/Frame459-min(1).png')] bg-center bg-contain bg-no-repeat flex flex-col md:gap-2 2xl:gap-10 items-center justify-center h-[130px] w-[150px] md:w-full md:h-[200px] xl:h-[350px] 2xl:h-[500px] text-white md:px-3 2xl:p-20 py-10">
                    <h1 className="text-[10px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl font-bold text-[#4D2A11]">Festival & Event Visits</h1>
                    <p className="text-[9px] md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl px-5 text-center text-gray-700">Celebrate colorful festivals and lively local events when the season is right.</p>
                </div> 
            </div>              
            {/* 6 div for h1 and p close here */}
        </div>
    )
}

export default Experience
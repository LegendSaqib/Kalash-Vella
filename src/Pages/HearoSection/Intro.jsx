const Intro = () => {
    return (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-5 px-2 md:px-10">
        <div className="w-full flex items-center justify-center">
         <div className="w-[120px] md:w-[160px] lg:w-[220px] 2xl:w-[280px]">
          <div className="relative flex justify-center items-center w-[50%] rounded-sm h-[30px] md:h-[45px] xl:h-[50px] 2xl:h-[60px] border-2 border-transparent border-t-[#B36228] border-l-[#B36228] border-b-[#B36228]">
           <h1 className="absolute inset-0 left-1 md:left-3 text-[#4D2A11] text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold w-[180px] md:w-[350px] lg:w-[550px] 2xl:w-[700px]">
            Quick Intro
           </h1>
          </div>
         </div>
        </div>
            <div className="w-full flex flex-col md:flex-row gap-2 xl:gap-5">
                <div className="flex flex-col items-center md:items-start md:flex-row w-full md:w-[50%] border border-gray-300 p-2 xl:p-5 gap-3 xl:gap-5 rounded-sm">
                    <div className="w-full md:w-[45%] lg:w-[35%] p-5 md:p-0">
                        <img className="rounded-sm w-full h-[200px] md:h-auto" src="/Intro1-min.jpg" alt="imag here" />
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-[55%] lg:w-[65%] 2xl:px-5">
                        <h1 className="text-lg md:text-[11px] lg:text-sm xl:text-2xl 2xl:text-3xl font-bold">About Kalash Villa</h1>
                        <p className="text-[#3F3F3F] text-[15px] md:text-[9px] lg:text-xs xl:text-lg 2xl:text-2xl text-center md:text-start">Tucked in the heart of Bumburet valley, Kalash Villa is a peaceful retreat where nature and culture embrace. With mountain streams nearby and the warmth of Kalash hospitality all around, it offers a perfect blend of comfort and tradition. Whether you come to explore or simply breathe in the valley’s calm, Kalash Villa welcomes you with the true spirit of the mountains.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-[50%] border border-gray-300 p-2 xl:p-5 gap-3 xl:gap-5 rounded-sm">
                    <div className="w-full md:w-[45%] lg:w-[35%] p-5 md:p-0">
                        <img className="rounded-sm w-full h-[200px] md:h-auto" src="/intro2-min.jpg" alt="imag here" />
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-1 w-full md:w-[55%] lg:w-[65%] 2xl:px-5">
                        <h1 className="text-lg md:text-[11px] lg:text-sm xl:text-2xl 2xl:text-3xl font-bold">About Kalash & Bumburet Valley</h1>
                        <p  className="text-[#3F3F3F] text-[15px] md:text-[9px] lg:text-xs xl:text-lg 2xl:text-2xl text-center md:text-start">Home to the vibrant Kalash people, Bumburet Valley is the largest and most lively of the three Kalash valleys — a living story of color, faith, and harmony with nature. Surrounded by snow-capped peaks and lush greenery, it’s a place where ancient traditions blend with the calm of mountain life. The Kalash community’s joyful festivals, hand-carved wooden homes, and heartfelt hospitality make every visit a journey into culture, connection, and timeless beauty.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
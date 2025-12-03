const MeetYourHost = () => {
    return (
        <>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
            <div className="w-full flex items-center justify-center">
            <div className="w-[160px] md:w-[240px] lg:w-[280px] 2xl:w-[370px]">
             <div className="border-2 border-transparent border-l-[#B36228] rounded-lg ">
               <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] md:h-[45px] w-[50%] lg:h-[55px] 2xl:h-[80px] flex items-center">
                <h1 className="absolute left-2 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold w-[155px] md:w-[230px] lg:w-[275px] 2xl:w-[365px] ">Meet Your Host</h1>
               </div>
              </div>
            </div>
            </div>
              <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-4">            
                    <div className="w-full md:w-[50%] relative rounded-lg">
                        <img className="rounded-lg 2xl:w-[100%] " src="/Hostpic.jpg" alt="imag here" />
                    </div>
                <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
                    <h1 className=" md:text-sm lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-[#724A2F] ">IRAN BIBI</h1>
                    <p className="text-[10px] lg:text-sm xl:text-lg  2xl:text-2xl py-2 text-justify"> <em className="hidden md:inline-block text-transparent" > iran bibi </em>Has been the heart and soul of Kalash Villa for over a decade. What began as a small family guesthouse has grown into a home that welcomes travelers from around the world — all guided by her kindness, care, and deep pride in Kalasha heritage.For the past 10 years, she’s opened her doors not just to guests, but to stories, laughter, and friendships that cross borders. In 2024, her dedication was recognized with the World Tourism Award, honoring her work in sharing the beauty of Kalash culture and helping travelers experience it with authenticity and respect. Every meal, every smile, every story told by the fire carries a touch of her warmth. To stay at Kalash Villa is to feel the love and effort she’s poured into this little haven in the valley. </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MeetYourHost
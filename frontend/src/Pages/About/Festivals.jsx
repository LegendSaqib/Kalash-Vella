const Festivals = () => {
    return (
        <>

        <div className="w-full flex flex-col items-center md:p-5">
            <div className="w-full flex items-center justify-center">
           <div className=" flex items-center w-[195px] md:w-[290px] lg:w-[340px] 2xl:w-[460px] border-2 border-transparent border-l-[#B36228] rounded-lg ">
               <div className="relative flex border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] md:h-[45px] w-[50%] lg:h-[50px] 2xl:h-[60px]">
                <h1 className="absolute left-2 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold w-[200px] md:w-[350px] lg:w-[400px] xl:w-[500px]  2xl:w-[800px]">Festivals of Kalasha</h1>
               </div>
            </div>
            </div>
            <div className="flax items-center justify-center py-5 md:px-10 2xl:p-10 ">
                <p className="text-xs md:text-sm lg:text-xl 2xl:text-4xl text-center">Life in Bumburet moves to the rhythm of its festivals — vibrant celebrations that mark the passing seasons and the spirit of the Kalash people. Each one is a blend of music, dance, color, and ancient tradition, passed down for generations.  </p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-2 2xl:gap-5">
              <div className="w-full md:w-[33%] flex flex-col items-center border border-[#956928]">
                  <img className="w-full" src="/festival1-min.jpg" alt="imag here" />
                  <h1 className="text-[#67491C] lg:text-lg 2xl:text-4xl font-bold p-2">Winter Festival</h1>
                  <h1 className="font-bold lg:text-lg 2xl:text-4xl">Chaumos</h1>
                  <p className="text-[10px] lg:text-sm 2xl:text-2xl p-2 md:p-5 text-center">December brings Chaumos, the most sacred and spectacular of all. It marks the end of the year and the beginning of a new one, with twelve days of rituals, feasts, bonfires, and music. The valley glows with torches, laughter, and prayers for peace and prosperity.</p>
              </div>
              <div className="w-full md:w-[33%] flex flex-col items-center border border-[#956928]">
                  <img className="w-full" src="/festval2-min.jpg" alt="imag here" />
                  <h1 className="text-[#67491C] lg:text-lg 2xl:text-4xl font-bold p-2">Harvest Festival</h1>
                  <h1 className="font-bold lg:text-lg 2xl:text-4xl ">Uchau</h1>
                  <p className="text-center text-[10px] lg:text-sm 2xl:text-2xl p-2 md:p-5">In August, Uchal celebrates the harvest of wheat and barley. Villagers wear their finest clothes, sing traditional songs, and dance late into the night. It’s a time of gratitude — a lively tribute to the bounty of the land.</p>
              </div>
              <div className="w-full md:w-[33%] flex flex-col items-center border border-[#956928]">
                  <img className="w-full" src="/festival3-min.jpg" alt="imag here" />
                  <h1 className="text-[#67491C] lg:text-lg 2xl:text-4xl font-bold p-2">Spring Festival</h1>
                  <h1 className="font-bold  lg:text-lg 2xl:text-4xl ">Joshi (Chilimjusht)</h1>
                  <p className="text-center text-[10px] lg:text-sm 2xl:text-2xl p-2 md:p-5">Held in May, Chilimjusht welcomes the arrival of spring. Families decorate their homes with wildflowers, share dairy dishes, and thank the gods for new life and growth. It’s the season of joy, renewal, and community.</p>
              </div>
            </div>
        </div>
        </>
    )
}

export default Festivals
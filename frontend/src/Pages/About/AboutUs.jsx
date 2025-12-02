import Festivals from "./Festivals"
import MeetYourHost from "./MeetYourHost"
const AboutUs = () => {
    return (
        <>
        <div className="relative bg-[url('/Aboutbg-min.jpg')] bg-cover h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[1000px] md:bg-center bg-no-repeat w-full">
          <div className="bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900/0 h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] w-full">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#724A2F]/40 rounded-lg w-[200px] md:w-[300px] lg:w-[500px] xl:w-[900px] 2xl:w-[1000px] p-2 lg:p-4 xl:p-6">
                  <h1 className="text-white text-center font-bold md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl ">About Us</h1>
                </div>
              </div>         
           </div>
        </div>
        <div className="flex flex-col items-center px-4 md:px-10">
           <div>
            <h1 className="pt-5 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center">Live the Kalash Way — Not Just a Stay</h1>
            <p className=" text-xs md:text-sm lg:text-lg 2xl:text-4xl py-5 text-center">Kalash Villa is more than a stay — it’s a reflection of the Kalash way of life, where tradition and hospitality meetin the quiet beauty of Bumburet Valley. Our family has lived here for generations, carrying forward stories,customs, and a deep love for these mountains. We built Kalash Villa to share that world with others —a place wheretravelers can rest, learn, and connect with the culture that makes this valley so unique.
               Every detail, from the handcrafted woodwork to the meals prepared with local ingredients, is part of who we are. Guests don’t just visit; they experience the rhythm of Kalash life — its colors, its kindness, and its calm.Staying here means feeling at home in the valley we call our own. Simple comfort, genuine warmth, and the quiet charm of mountain living — that’s what Kalash Villa is all about.</p>
           </div>
           <MeetYourHost/>
           <Festivals/>
        </div>
        </>
    )
}

export default AboutUs
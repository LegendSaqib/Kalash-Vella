import React from "react";
import { Required } from "../../assets/icons/icons";

export default function Step2() {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center p-5 xl:px-10 2xl:px-20 bg-white">
      <div className="border-b border-b-gray-600 border-2 border-transparent w-full flex items-center justify-center">
        <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4">
          Step 2
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:px-5 ">
        {/* Left Section */}
      <div className="flex flex-col gap-2 md:pr-6">
        <div className="w-full flex items-center justify-center">
          <div className="border-2 border-transparent border-l-[#B36228] rounded-lg ">
            <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] w-[100px] md:h-[40px] md:w-[100px] lg:h-[45px] lg:w-[120px] 2xl:h-[53px] 2xl:w-[150px] flex items-center">
              <h1 className="absolute left-2 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold  w-[200px] md:w-[200px] lg:w-[250px] 2xl:w-[300px]">Review your Trip</h1>
            </div>
          </div>
        </div>
          <div className="space-y-2 text-gray-800">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Full Name: </strong> Jalil ahmed</p>
           <div className="flex gap-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Email:</strong> Jalilahmed65@gmail.com</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Phone:</strong> 0321-9876554</p>
           </div>
           <div className="flex gap-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Check-in Date:</strong> November 25, 2025</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Check-out Date:</strong> November 30, 2025</p>
           </div>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Num of Rooms:</strong> 1 Day</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Price of Days & Rooms:</strong> Price Rs: 12,000</p>
           <div className="flex gap-5 border-t border-gray-400 mt-5 pt-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Your Guide Required:</strong> Yes</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Number of days:</strong> 1 day</p>
           </div>
           <div className="flex gap-5 border-b border-gray-400 mb-5 pb-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Tour Guide Service:</strong>Price Rs: 3,500</p>
           </div>
            <p className="font-bold flex flex-col gap-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Total Amount: <span className="text-[#67491C] text-xs lg:text-sm xl:text-lg 2xl:text-xl ">Rs. 16,500</span></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:pl-6 flex flex-col gap-2">
          <div className="w-full flex items-center justify-center">
            <div className="border-2 border-transparent border-l-[#B36228] rounded-lg ">
             <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] w-[100px] md:h-[40px] md:w-[140px] lg:h-[45px] lg:w-[155px] 2xl:h-[53px] 2xl:w-[200px] flex items-center">
              <h1 className="absolute left- text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold w-[200px] md:w-[270px] lg:w-[350px] 2xl:w-[400px]">Bank Transfer Details</h1>
             </div>
            </div>
          </div>
          <div className="space-y-2 text-gray-800 text-xs lg:text-sm xl:text-lg 2xl:text-xl">
            <p className="flex flex-col gap-2 text-[#67491C] text-sm lg:text-lg xl:text-xl 2xl:text-2xl "><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Account Title:</strong> SHOAIB AKHTAR</p>
            <p className="flex flex-col gap-2 text-[#67491C] text-sm lg:text-lg xl:text-xl 2xl:text-2xl "><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Bank Name:</strong> FAYSAL BANK Limited</p>
           <div className="flex gap-5">
             <p className="flex flex-col gap-2 text-[#67491C] text-xs lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Account No:</strong> 3465301000001052</p>
             <p className="flex flex-col gap-2 text-[#67491C] text-xs lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">IBAN:</strong> PK29FAYS3465301000001052</p>
           </div> 
            <p className="text-[10px] lg:text-xs xl:text-sm 2xl:text-xl text-gray-600 mt-2">
              After completing your transfer, please upload your transaction receipt or screenshot below.Once you upload, our verification team will confirm your payment within 2–4 hours.You’ll receive a confirmation message via Email or WhatsApp from our official Kalash Valley support team.
            </p>

            {/* Upload Proof */}
            <div className="mt-3">
              <label className="block text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-bold mb-1">
                Upload Payment Proof
              </label>
              <input
                type="file"
                className="w-full border border-gray-400 rounded p-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
              />
              <p className="text-red-500 text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-1 flex gap-2 items-center">
                <Required className="h-[10px]"/> Receipt is required</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-around gap-3 mt-5 w-full">
              <button className="w-full bg-[#67491C] text-white px-5 py-2 rounded-full hover:bg-[#4D2A11] transition">
                Submit
              </button>
              <button className="w-full bg-[#67491C] text-white px-5 py-2 rounded-full hover:bg-[#4D2A11] transition">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

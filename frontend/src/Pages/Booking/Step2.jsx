import React from "react";
import axios from "axios";
import { Required } from "../../assets/icons/icons";
export default function Step2({ setStep, formData, setFormData }) {
  const handleBack = () =>
  {
    setStep(1);
  }
  // frontend example
const handleSubmit = async () => {
  const formDataToSend = new FormData();

  // Step1 + Step2 data
  formDataToSend.append("fullName", formData.fullName);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("checkIn", formData.checkIn);
  formDataToSend.append("checkOut", formData.checkOut);
  formDataToSend.append("rooms", formData.rooms);
  formDataToSend.append("adults", formData.adults);
  formDataToSend.append("days", formData.days);
  formDataToSend.append("guideRequired", formData.guideRequired);
  formDataToSend.append("total", formData.total);

  // Image from Step2
  if (formData.image) {
    formDataToSend.append("image", formData.image);
  }
  console.log("envi",import.meta.env.VITE_APP_API_DOMAIN)
  try {
  const response = await fetch(`${import.meta.env.VITE_APP_API_DOMAIN}/booking`, {
    method: "POST",
    body: formDataToSend,
  });

  const result = await response.json();
  alert("Booking submitted successfully!");
  console.log(result);
} catch(err)
{
  console.error(err);
}
};
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
    <div className="min-h-screen flex flex-col gap-5 items-center p-5 xl:px-10 2xl:px-20 bg-white">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4">
          Step 2
        </h2>
      </div>
        <div className="w-full h-[4px] rounded-full bg-amber-700">
          <div className="w-[0%] bg-gray-300 rounded-full h-[4px] "></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:px-5 ">
        {/* Left Section */}
      <div className="flex flex-col gap-2 md:pr-6">
          <div className="w-full flex items-center justify-center">
            <div className="w-[180px] md:w-[220px] lg:w-[270px] 2xl:w-[320px]">
             <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] border-l-[#B36228] rounded-sm h-[35px] w-[50%] md:h-[40px] lg:h-[45px] 2xl:h-[53px] flex items-center">
              <h1 className="absolute left-2 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold w-[165px] md:w-[200px] lg:w-[250px] 2xl:w-[300px]">Review your Trip</h1>
             </div>
            </div>
          </div>
          <div className="space-y-2  text-gray-800 rounded-2xl pt-4" style={{ boxShadow: '4px 4px 15px rgba(0,0,0,0.4)' }}>
            <p className="flex  flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Full Name: </strong> {formData.fullName}</p>
           <div className="flex gap-5 justify-around">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Email:</strong> {formData.email}</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Phone:</strong> {formData.phone}</p>
           </div>
           <div className="flex gap-5 justify-around">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Check-in Date:</strong> {formData.checkIn}</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Check-out Date:</strong> {formData.checkOut}</p>
           </div>
           <div className="flex gap-5    justify-between ">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Num of Rooms:</strong> {formData.rooms}</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Adults</strong> {formData.adults}</p>
           </div>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Price of Days & Rooms:</strong>{formData.totalRoomPrice.toLocaleString()}</p>
           <div className="flex gap-5 border-t border-gray-400 mt-5 pt-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Your Guide Required:</strong> {formData.guideRequired}</p>
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Number of days:</strong> {formData.days}</p>
           </div>
           <div className="flex gap-5 border-b border-gray-400 mb-5 pb-5">
            <p className="flex flex-col gap-2 text-[#67491C]text-sm lg:text-lg xl:text-xl 2xl:text-2xl"><strong className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-black">Tour Guide Service:</strong>{formData.guidePrice.toLocaleString()}</p>
           </div>
            <p className="font-bold flex flex-col gap-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Total Amount: <span className="text-[#67491C] text-xs lg:text-sm xl:text-lg 2xl:text-xl ">{formData.total.toLocaleString()}</span></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:pl-6 flex flex-col gap-2">
          <div className="w-full flex items-center justify-center">
            <div className=" w-[210px] md:w-[280px] lg:w-[360px] 2xl:w-[410px]">
             <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] border-l-[#B36228] rounded-sm h-[35px] w-[50%] md:h-[40px] lg:h-[45px] 2xl:h-[53px] flex items-center">
              <h1 className="absolute left-2 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold w-[200px] md:w-[270px] lg:w-[350px] 2xl:w-[400px]">Bank Transfer Details</h1>
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
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="w-full border border-gray-400 rounded p-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
              />
              <p className="text-red-500 text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-1 flex gap-2 items-center">
                <Required className="h-[10px]"/> Receipt is required</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-around gap-3 mt-5 w-full">
              <button 
              onClick={handleBack}
              className="w-full bg-[#67491C] text-white px-5 py-2 rounded-full hover:bg-[#4D2A11] transition">
                Back
              </button>
              <button
              onClick={handleSubmit}
              className="w-full bg-[#67491C] text-white px-5 py-2 rounded-full hover:bg-[#4D2A11] transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

import React, { useState } from "react";
import { Required } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
export default function Step1() {
  const [step, setStep] = useState(1); // Added step state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    rooms: "",
    adults: "",
    guideRequired: "No",
    days: "",
  });

  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Dynamic Price Calculation ---
  const roomPricePerDay = 2000;
  const totalRoomPrice =
    (formData.rooms && formData.days
      ? formData.rooms * formData.days * roomPricePerDay
      : 0);
  const guidePrice = formData.guideRequired === "Yes" ? 3500 : 0;
  const total = totalRoomPrice + guidePrice;

  // --- Validation Fields ---
  const requiredFields = [
    "fullName",
    "email",
    "phone",
    "checkIn",
    "checkOut",
    "rooms",
    "adults",
    "days",
  ];

  const handleNext = (e) => {
    e.preventDefault();
    setShowErrors(true);

    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length === 0) {
      setStep(2); // Move to Step 2
      // You can handle submission in Step 2
    }
  };

  const renderError = (field) => {
    if (showErrors && !formData[field]) {
      return (
        <h1 className="flex items-center text-red-700 text-[10px] gap-2 mt-1">
          <Required className="md:h-[15px] md:w-[15px]" />
          This field is required.
        </h1>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col gap-2 md:gap-5 md:items-center bg-whit py-2 md:py-10 px-5 xl:px-10">
      {/* Step Heading */}
      <div className="w-full flex items-center justify-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-medium md:mb-2">Step {step}</h2>
      </div>

      {/* --- Progress Line --- */}
      <div className="w-full px-5 md:mb-4">
        <div className="w-full h-1 bg-gray-300 rounded-full relative">
          <div
            className="h-1 rounded-full absolute top-0 transition-all duration-500"
            style={{
              width: step === 1 ? "50%" : "50%",
              left: step === 1 ? "0" : "50%",
              backgroundColor: "#B36228",
            }}
          ></div>
        </div>
      </div>

      {/* Main Title */}
      <div className="border-2 border-transparent border-l-[#B36228] rounded-lg ">
          <div className="relative border-2 border-transparent border-t-[#B36228] border-b-[#B36228] rounded-bl-sm rounded-tl-sm h-[35px] w-[150px] md:h-[45px] md:w-[230px] lg:h-[50px] lg:w-[280px] 2xl:h-[60px] 2xl:w-[370px] flex items-center">
            <h1 className="absolute left-2 text-lg md:text-3xl lg:text-4xl 2xl:text-5xl font-bold w-[270px] md:w-[420px] lg:w-[520px] 2xl:w-[700px] ">Book Your Stay at Kalash Villa</h1>
          </div>
      </div>

      {/* Form Section */}
      <form className="w-full flex flex-col gap-5 md:px-5 xl:px-10">
        {/* --- Basic Info --- */}
        <div className="grid md:grid-cols-3 gap-2">
          {["fullName", "email", "phone"].map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                {field === "fullName"
                  ? "Full Name"
                  : field === "email"
                  ? "Email Address"
                  : "Phone"}
              </label>
              <input
                name={field}
                onChange={handleChange}
                className="w-full border border-gray-300 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl rounded-md px-2 py-1 focus:outline-[#B36228]"
                placeholder={
                  field === "fullName"
                    ? "Name"
                    : field === "email"
                    ? "Email"
                    : "Phone"
                }
              />
              {renderError(field)}
            </div>
          ))}
        </div>

        {/* --- Dates --- */}
        <div className="grid md:grid-cols-4 gap-5">
          {["checkIn", "checkOut"].map((field, i) => (
            <div key={i} className="flex flex-col gap-2">
              <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                {field === "checkIn" ? "Check-In Date" : "Check-Out Date"}
              </label>
              <input
                type="date"
                name={field}
                onChange={handleChange}
                className="w-full text-gray-400 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl border border-gray-300 rounded-md px-2 py-1 focus:outline-[#B36228]"/>
              {renderError(field)}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">Number of Rooms</label>
            <select
              name="rooms"
              onChange={handleChange}
              className="w-full text-gray-400 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl border border-gray-300 rounded-md px-2 py-1 focus:outline-[#B36228]"
            >
              <option value="">Select</option>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
            </select>
            {renderError("rooms")}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">Adults</label>
            <select
              name="adults"
              onChange={handleChange}
              className="w-full text-gray-400 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl border border-gray-300 rounded-md px-2 py-1 focus:outline-[#B36228]"
            >
              <option value="">Select</option>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
            {renderError("adults")}
          </div>
        </div>

        {/* --- Guide Section --- */}
        <div className="grid md:grid-cols-1 gap-5">
          <div>
            <h1 className="font-bold md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Price of Days & Rooms</h1>
            <h1 className="text-[#915824] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl ">
              Price Rs: {totalRoomPrice || 0}
            </h1>
          </div>

          <div>
            <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold">
              Tour Guide Required
            </label>
            <div className="flex items-center gap-5 mt-2">
              <label className="md:text-xs lg:text-sm xl:text-lg 2xl:text-xl flex items-center gap-1">
                <input
                  type="radio"
                  name="guideRequired"
                  value="Yes"
                  checked={formData.guideRequired === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="md:text-xs lg:text-sm xl:text-lg 2xl:text-xl flex items-center gap-1">
                <input
                  type="radio"
                  name="guideRequired"
                  value="No"
                  checked={formData.guideRequired === "No"}
                  onChange={handleChange}/>
                No
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">Number of Days</label>
            <select
              name="days"
              onChange={handleChange}
              className="w-[30%] border border-gray-300 md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl rounded-md p-1 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
            </select>
            {renderError("days")}
          </div>

          <div>
            <h1 className="font-bold md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Tour Guide Service</h1>
            <h1 className="text-[#915824] md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
              Price Rs: {guidePrice ? "3,500" : "0"}
            </h1>
          </div>
        </div>

        {/* --- Table --- */}
        <div className="rounded-sm md:mt-6">
          <table className="w-full md:w-[70%] rounded-lg border-collapse">
            <thead>
              <tr className="text-left md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-[#434342]">
                <th className="p-3 border border-gray-400">Items</th>
                <th className="p-3 border border-gray-400">Quantity</th>
                <th className="p-3 border border-gray-400">Total</th>
              </tr>
            </thead>
            <tbody>
              {totalRoomPrice > 0 && (
                <tr className=" md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  <td className="p-3 border border-gray-400">
                    Price of Rooms & Days
                  </td>
                  <td className="p-3 border border-gray-400">
                    {formData.rooms || 1}
                  </td>
                  <td className="p-3 border border-gray-400">
                    {totalRoomPrice.toLocaleString()}
                  </td>
                </tr>
              )}
              {guidePrice > 0 && (
                <tr className=" md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  <td className="p-3 border border-gray-400">
                    Tour Guide Service
                  </td>
                  <td className="p-3 border border-gray-400">1</td>
                  <td className="p-3 border border-gray-400">3,500</td>
                </tr>
              )}
              <tr className="font-semibold md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                <td className="p-3 border border-gray-400">Total</td>
                <td className="p-3 border border-gray-400"></td>
                <td className="p-3 border border-gray-400">
                  {total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Next Button --- */}
        <div className="flex md:mt-5">
          <button
            className="bg-[#4D2A11] hover:bg-[#B36228] text-white md:text-xs lg:text-sm xl:text-lg 2xl:text-xl px-8 xl:px-12 xl:py-2 py-1 rounded-full">
                Next
          </button>
        </div>
      </form>
    </div>
  );
}

import { Required } from "../../assets/icons/icons";
import React, { useState } from "react";
const ContectUsMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "This field is required.";
    if (!formData.lastName) newErrors.lastName = "This field is required.";
    if (!formData.phone) newErrors.phone = "This field is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
    }
  };
  return (
    <>
      {/* 🔹 Hero Section */}
      <div className="relative bg-[url('/ContectUs/ContectUsBg-min.jpg')] bg-cover h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[1000px] bg-center bg-no-repeat w-full">
        <div className="bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900/0 h-full w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-2 justify-center items-center">
            <div className="bg-[#724A2F]/30 rounded-lg w-[200px] md:w-[300px] lg:w-[500px] xl:w-[900px] 2xl:w-[1000px] p-2 lg:p-4 xl:p-6">
              <h1 className="text-white text-center font-bold text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* 🔹 Content Section */}
      <div className="flex flex-col items-center justify-center gap-5 p-5 xl:px-10 2xl:px-20">
        <p className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl max-w-5xl">
          We're here to help! Reach out to us with any questions or inquiries
          about Kalash Valley tours.
        </p>
        {/* 🔹 Image + Form */}
        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-2 items-center justify-center">
          {/* Left Image */}
          <div className="w-full md:w-[60%] ">
            <img
              src="/ContectUs/ContectUs1-min.jpg"
              alt="contact"
              className="rounded-2xl w-full h-auto"/>
          </div>
          {/* Right Form */}
          <div className="w-full md:w-[40%] rounded-xl border border-[#67491C] p-5 ">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="flex flex-col md:gap-1 lg:gap-2">
                  <label className="block font-medium md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700">
                    First Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="👤 First Name"
                      className="w-full border border-gray-300 rounded-full pl-5 pr-3 py-2 lg:py-2 focus:outline-none md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg"/>
                  </div>
                  {errors.firstName && (
                    <p className="flex gap-2 items-center text-red-500 md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg mt-1">
                      <Required className="h-[10px] "/> This field is required.
                    </p>
                  )}
                </div>
                {/* Last Name */}
                <div className="flex flex-col md:gap-1 lg:gap-2">
                  <label className="block font-medium md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="👤 Last Name"
                      className="w-full border border-gray-300 rounded-full pl-5 pr-3 py-2 focus:outline-none md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg"/>
                  </div>
                  {errors.lastName && (
                    <p className="flex gap-2 items-center text-red-500 md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg mt-1">
                      <Required className="h-[10px] "/> This field is required.
                    </p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col md:gap-1 lg:gap-2">
                <label className="block font-medium md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="📧 Email Address"
                    className="w-full border border-gray-300 rounded-full pl-5 pr-2 py-2 focus:outline-none md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg"/>
                </div>
                <p className="text-[#B36228] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg mt-1">(optional)</p>
              </div>
              {/* Phone */}
              <div className="flex flex-col md:gap-1 lg:gap-2">
                <label className="block font-medium md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700">
                  Phone Number
                </label>
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="PK 0000-0000-000"
                    className="w-full border border-gray-300 rounded-full pl-5 pr-3 py-2 focus:outline-none md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg"/>
                </div>
                {errors.phone && (
                  <p className="flex gap-2 items-center text-red-500 md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg mt-1">
                    <Required className="h-[10px] "/> This field is required.
                  </p>
                )}
              </div>
              {/* Message */}
              <div className="flex flex-col md:gap-1 lg:gap-2">
                <label className="block font-medium md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg"/>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#4D2A11] md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-white py-2 rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContectUsMain;

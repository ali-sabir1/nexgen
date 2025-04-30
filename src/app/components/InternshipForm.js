"use client";
import React, { useState } from "react";

export default function InternshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    program: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isDegreeValid, setIsDegreeValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "name") {
      setIsNameValid(e.target.value.length > 0);
    }
    if (e.target.name === "degree") {
      setIsDegreeValid(e.target.value.length > 0);
    }
    if (e.target.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(e.target.value));
    }
    if (e.target.name === "phone") {
      const phoneRegex = /^[0-9]*$/;
      setIsPhoneValid(
        formData.name.length > 0 && phoneRegex.test(e.target.value)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTouched(true);
    setIsLoading(true);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isDegreeValid) {
      setStatus(3);
    } else {
      const response = await fetch("/api/internshipmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(1);
      } else {
        setStatus(2);
      }
      setFormData({ name: "", phone: "", email: "", degree: "", program: "" });
      setIsTouched(false);
      setIsNameValid(false);
      setIsEmailValid(false);
      setIsPhoneValid(false);
      setIsDegreeValid(false);
    }
    setIsLoading(false);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Wait for 2 seconds
    await delay(4000);
    setStatus(0);
  };

  return (
    <div>
      <form className="space-y-5 lg:space-y-7" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Name{" "}
            {!isNameValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] 
              ${
                !isNameValid && isTouched ? "border-red-500" : "border-gray-300"
              }`} // Conditional border
            placeholder="Your Name"
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Email{" "}
            {!isEmailValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] 
              ${
                !isEmailValid && isTouched
                  ? "border-red-500"
                  : "border-gray-300"
              }`} // Conditional border
            placeholder="Your Email"
            onChange={handleChange}
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Phone Number{" "}
            {!isPhoneValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <div className="inline-flex w-full space-x-2">
            <span
              className={`w-14 text-lg lg:text-sm font-semibold mt-1 py-3 pl-4 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] focus:border-[#38b6ff]`}
            >
              +92
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] 
                ${
                  !isPhoneValid && isTouched
                    ? "border-red-500"
                    : "border-gray-300"
                }`} // Conditional border
              placeholder="Your Phone Number"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Degree Input */}
        <div>
          <label
            htmlFor="degree"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Degree{" "}
            {!isDegreeValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] 
              ${
                !isDegreeValid && isTouched
                  ? "border-red-500"
                  : "border-gray-300"
              }`} // Conditional border
            placeholder="Your Current Degree"
            onChange={handleChange}
          />
        </div>

        {/* Program Input */}
        <div>
          <label
            htmlFor="program"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Program{" "}
          </label>
          <select
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff]`}
            onChange={handleChange}
            value={formData.program}
            name="program"
          >
            <option value="webdev">Web Development</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        {/* Status Message */}
        {status !== 0 &&
          ((status === 1 && (
            <p className="text-xl font-semibold text-[#38b6ff]">
              Message sent successfully!
            </p>
          )) ||
            (status === 2 && (
              <p className="text-xl font-semibold text-red-500">
                Failed to send message.
              </p>
            )) ||
            (status === 3 && (
              <p className="text-xl font-semibold text-red-500">
                Please fill the required fields correctly before submitting.
              </p>
            )))}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="text-xl lg:text-lg font-medium px-6 py-3 lg:py-2 bg-[#38b6ff] text-white rounded-md hover:bg-[#051d40]"
            disabled={isLoading}
          >
            {isLoading && <span>Submitting...</span>}
            {!isLoading && <span>Submit</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

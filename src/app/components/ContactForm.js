"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "name") {
      setIsNameValid(e.target.value.length > 0);
    }
    if (e.target.name === "message") {
      setIsMessageValid(e.target.value.length > 0);
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

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      setStatus(3);
    } else {
      const response = await fetch("/api/email", {
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
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsTouched(false);
      setIsNameValid(false);
      setIsEmailValid(false);
      setIsPhoneValid(false);
      setIsMessageValid(false);
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
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c5a84c] 
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
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c5a84c] 
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
              className={`w-14 text-lg lg:text-sm font-semibold mt-1 py-3 pl-4 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c5a84c] focus:border-[#c5a84c]`}
            >
              +1
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c5a84c] 
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

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-xl  lg:text-base font-medium text-black"
          >
            Message{" "}
            {!isMessageValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            rows="10"
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c5a84c] 
              ${
                !isMessageValid && isTouched
                  ? "border-red-500"
                  : "border-gray-300"
              }`} // Optional red border for empty message
            placeholder="Your Message"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Status Message */}
        {status !== 0 &&
          ((status === 1 && (
            <p className="text-xl font-semibold text-[#c5a84c]">
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

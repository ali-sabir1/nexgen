"use client";
import React, { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "webdev",
    resume: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isResumeValid, setIsResumeValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0];
      const isPDF = file && file.type === "application/pdf";
      setFormData({ ...formData, resume: file });
      setIsResumeValid(isPDF);
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name") {
      setIsNameValid(value.length > 0);
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]*$/;
      setIsPhoneValid(formData.name.length > 0 && phoneRegex.test(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTouched(true);
    setIsLoading(true);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isResumeValid) {
      setStatus(3);
      setIsLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    const response = await fetch("/api/careermail", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setStatus(1);
    } else {
      setStatus(2);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "webdev",
      resume: null,
    });
    setIsTouched(false);
    setIsNameValid(false);
    setIsEmailValid(false);
    setIsPhoneValid(false);
    setIsResumeValid(false);
    setIsLoading(false);

    await new Promise((resolve) => setTimeout(resolve, 4000));
    setStatus(0);
  };

  return (
    <div>
      <form className="space-y-5 lg:space-y-7" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-xl lg:text-base font-medium text-black"
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
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] ${
              !isNameValid && isTouched ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Name"
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl lg:text-base font-medium text-black"
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
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] ${
              !isEmailValid && isTouched ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your Email"
            onChange={handleChange}
          />
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xl lg:text-base font-medium text-black"
          >
            Phone Number{" "}
            {!isPhoneValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <div className="inline-flex w-full space-x-2">
            <span className="w-14 text-lg lg:text-sm font-semibold mt-1 py-3 px-2 border border-gray-400 rounded-md shadow-sm">
              +92
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] ${
                !isPhoneValid && isTouched
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Your Phone Number"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Position Input */}
        <div>
          <label
            htmlFor="position"
            className="block text-xl lg:text-base font-medium text-black"
          >
            Position
          </label>
          <select
            className="text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff]"
            onChange={handleChange}
            value={formData.position}
            name="position"
          >
            <option value="webdev">Wordpress Developer</option>
            <option value="businessdeveloper">Business Developer</option>
            <option value="seo">SEO Executive</option>
            <option value="marketing">Marketing Manager</option>
          </select>
        </div>

        {/* Resume Upload Input */}
        <div>
          <label
            htmlFor="resume"
            className="block text-xl lg:text-base font-medium text-black"
          >
            Upload Resume (PDF){" "}
            {!isResumeValid && isTouched && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            className={`text-lg lg:text-sm mt-1 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38b6ff] ${
              !isResumeValid && isTouched ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
          />
        </div>

        {/* Status Message */}
        {status !== 0 && (
          <p
            className={`text-xl font-semibold ${
              status === 1 ? "text-[#38b6ff]" : "text-red-500"
            }`}
          >
            {status === 1 && "Message sent successfully!"}
            {status === 2 && "Failed to send message."}
            {status === 3 &&
              "Please fill the required fields correctly before submitting."}
          </p>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="text-xl lg:text-lg font-medium px-6 py-3 lg:py-2 bg-[#38b6ff] text-white rounded-md hover:bg-[#051d40]"
            disabled={isLoading}
          >
            {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

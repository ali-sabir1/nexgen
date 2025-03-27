import React from "react";
import DividerOpen from "./dividerOpen";
import DividerClose from "./dividerClose";

export default function HowItWorks() {
  const BookingFeature = ({ icon, title, text }) => {
    return (
      <div className="text-center md:px-10 lg:px-8 py-5">
        <div className="grid items-center justify-center py-5">
          <img
            src={`/svgs/${icon}.svg`}
            alt="Custom Icon"
            width="50"
            height="50"
          />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-[#38b6ff] pb-2 md:pb-5 lg:pb-2">
          {title}
        </h2>
        <p className="text-md md:text-lg lg:text-sm text-white">{text}</p>
      </div>
    );
  };
  return (
    <div>
      <DividerOpen top="white" bottom="[#051d40]" />
      <div className="bg-[#051d40]">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl text-[#38b6ff] text-center font-semibold pt-16">
            How it Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 pt-8 pb-14">
          <BookingFeature
            icon="code"
            title="Effortless Development"
            text="With our experienced team and agile methodologies, turning your ideas into powerful software is just a few steps away."
          />
          <BookingFeature
            icon="server"
            title="Deploy with Confidence"
            text="Our scalable and secure infrastructure ensures smooth deployment and high availability for your applications."
          />
          <BookingFeature
            icon="rocket"
            title="Accelerate Your Growth"
            text="Leverage cutting-edge technologies and automation to optimize your business processes and stay ahead in the digital era."
          />
          <BookingFeature
            icon="bstar"
            title="Your Feedback Matters"
            text="We'd love to hear about your experience! Your feedback helps us ensure we're providing the highest level of service."
          />
        </div>
      </div>
      <DividerClose />
    </div>
  );
}

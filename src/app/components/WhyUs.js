import React from "react";
import DividerOpen from "./dividerOpen";

export default function WhyUs() {
  const Tags = ({ icon, title, text }) => {
    return (
      <div className="grid text-left  py-5 lg:py-3 md:px-5 lg:px-10">
        <div className="inline-flex items-center">
          <img
            src={`/svgs/${icon}.svg`}
            alt="Custom Icon"
            width="40"
            height="40"
            fill="black"
          />
          <p className="text-lg lg:text-lg text-black font-semibold pl-2">
            {title}
          </p>
        </div>
        <div>
          <p className="text-md md:text-lg lg:text-sm text-black font-medium">
            {text}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#38b6ff]">
      <DividerOpen />

      <div className="pt-10">
        <h2 className="px-7 lg:px-20 text-center text-3xl md:text-4xl lg:text-4xl font-semibold">
          <span className="text-black">Why select</span>{" "}
          <span className="text-white">NexGen</span>{" "}
          <span className="text-black">Solutions?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-7 pb-10 px-7 items-start">
          <Tags
            icon="diamond"
            title="Custom Software Solutions"
            text="Crafting unique, high-performance software tailored to your business needs."
          />
          <Tags
            icon="reliable"
            title="Reliability and Efficiency"
            text="Building scalable and secure applications that meet your specific requirements."
          />
          <Tags
            icon="secure"
            title="Data Security and Protection"
            text="Ensuring your data is secure with the latest security protocols and practices."
          />
          <Tags
            icon="pricing"
            title="Transparent Pricing, No Surprises"
            text="Providing clear, upfront pricing with no hidden fees, ensuring value for your investment."
          />
          <Tags
            icon="happy"
            title="Client-Centric Approach"
            text="We prioritize your vision, delivering solutions that align with your business goals."
          />
          <Tags
            icon="handshake"
            title="Seamless Collaboration"
            text="Working closely with you to create software that fits seamlessly into your workflow."
          />
          <Tags
            icon="cheersblk"
            title="Scalable Solutions"
            text="Building software that grows with your business, adapting to your evolving needs."
          />
          <Tags
            icon="affordable"
            title="Affordable Services, Uncompromised Quality"
            text="High-quality development at prices that fit within your budget, without compromising the work quality."
          />
          <Tags
            icon="choices"
            title="Wide Range of Services"
            text="Whether it’s Web Development, Mobile App Development, SEO, Marketing or Custom Solutions web provide you everything under one roof."
          />
          <Tags
            icon="exclusive"
            title="Exclusive Support & Maintenance"
            text="Providing ongoing support and maintenance to ensure your software runs smoothly long-term."
          />
        </div>
      </div>
      <DividerOpen top="[#38b6ff]" bottom="white" />
    </div>
  );
}

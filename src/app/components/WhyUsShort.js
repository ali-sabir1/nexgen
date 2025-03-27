import React from "react";
import DividerOpen from "./dividerOpen";

export default function WhyUsShort({
  title,
  icon1,
  h1,
  c1,
  icon2,
  h2,
  c2,
  icon3,
  h3,
  c3,
  icon4,
  h4,
  c4,
}) {
  const Tags = ({ icon, title, text }) => {
    return (
      <div className="grid text-left  py-5 md:px-5 lg:px-10">
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
        <div className="pl-2">
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
          <span className="text-black">{title}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-7 pb-10 px-7 items-start">
          <Tags icon={icon1} title={h1} text={c1} />
          <Tags icon={icon2} title={h2} text={c2} />
          <Tags icon={icon3} title={h3} text={c3} />
          <Tags icon={icon4} title={h4} text={c4} />
        </div>
      </div>
      <DividerOpen top="[#38b6ff]" bottom="white" />
    </div>
  );
}

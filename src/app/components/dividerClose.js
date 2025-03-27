import React from "react";

const DividerClose = () => (
  <div className={`bg-white relative `}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2600 131.1"
      preserveAspectRatio="none"
      className="w-full h-[80px]"
    >
      <path
        className={`fill-current text-[#051d40]`}
        d="M0 0L2600 0 2600 69.1 0 0z"
      ></path>
      <path
        className={`fill-current text-[#051d40] opacity-50`}
        d="M0 0L2600 0 2600 69.1 0 69.1z"
      ></path>
      <path
        className={`fill-current text-[#051d40] opacity-25`}
        d="M2600 0L0 0 0 130.1 2600 69.1z"
      ></path>
    </svg>
  </div>
);

export default DividerClose;

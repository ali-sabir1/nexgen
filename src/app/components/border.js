import React from "react";
import { FaDesktop } from "react-icons/fa";

export default function Border() {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow border-t-4 border-[#051d40]"></div>
      <div className="mx-2">
        <FaDesktop className="text-md text-[#051d40]" />
      </div>
      <div className="flex-grow border-t-4 border-[#051d40]"></div>
    </div>
  );
}

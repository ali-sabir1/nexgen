import Link from "next/link";
import React from "react";

export default function Content({ p1a, p1b }) {
  return (
    <div className="lg:pr-20">
      <p className="text-md md:text-lg lg:text-base font-medium pt-5 lg:pt-10 md:pt-6">
        <span>{p1a}</span>

        <span className="text-[#38b6ff] font-semibold">
          <Link href="/">NexGen </Link>
        </span>
        <span>{p1b}</span>
      </p>
    </div>
  );
}

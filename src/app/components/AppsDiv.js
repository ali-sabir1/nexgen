import Image from "next/image";
import React from "react";

export default function AppsDiv({ image, title, data, link }) {
  return (
    <main>
      <div className="lg:p-10 py-10 p-5">
        <div
          className="hidden relative bg-cover bg-center bg-no-repeat w-full h-[50vh] lg:h-[36vw] lg:flex justify-end items-center text-white hover:shadow-2xl shadow-black"
          style={{ backgroundImage: `url(/images/${image}.webp)` }}
        >
          <div className="w-1/2 text-left px-14">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-sm py-5">{data}</p>
            <div className="py-5">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white font-medium bg-transparent hover:bg-gray-600 rounded-lg px-6 py-3 transition-all mt-1 border-2"
              >
                VISIT WEBSITE
              </a>
            </div>
          </div>
        </div>
        <div className="lg:hidden  text-black hover:shadow-2xl shadow-black">
          <div>
            <Image
              src={`/images/${image}.webp`}
              alt="Mobile App Development Technologies"
              width={200}
              height={200}
              quality={70}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-gray-300 p-5">
            <h2 className="text-3xl font-medium">{title}</h2>
            <p className="text-sm font-medium py-5">{data}</p>
            <div className="py-5">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-black font-medium bg-transparent hover:bg-gray-400 rounded-lg px-6 py-3 transition-all mt-1 border-2 border-black"
              >
                VISIT WEBSITE
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

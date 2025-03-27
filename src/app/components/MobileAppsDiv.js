import Image from "next/image";
import React from "react";

export default function MobileAppsDiv({ image, title, data, link1, link2 }) {
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
            <div className="py-5 space-x-5 inline-flex">
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-lg text-white font-medium bg-black hover:shadow-2xl rounded-lg px-6 py-3 transition-all mt-1"
              >
                <img
                  src={`/svgs/apple.svg`}
                  alt="Custom Icon"
                  width="40"
                  height="40"
                />
                <div className="pl-5">
                  <p className="text-xs">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-lg text-white font-medium bg-black hover:shadow-2xl rounded-lg px-6 py-3 transition-all mt-1"
              >
                <img
                  src={`/svgs/playstore.svg`}
                  alt="Custom Icon"
                  width="40"
                  height="40"
                />
                <div className="pl-5">
                  <p className="text-xs">Download on the</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
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
          <div className="bg-gray-300 pb-10">
            <h2 className="text-3xl font-medium px-2 pt-2">{title}</h2>
            <p className="text-sm font-medium py-5 px-2">{data}</p>
            <div className="py-5 text-center space-y-5">
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-lg text-white font-medium bg-black hover:shadow-2xl rounded-lg px-6 py-3 transition-all mt-1"
              >
                <img
                  src={`/svgs/apple.svg`}
                  alt="Custom Icon"
                  width="40"
                  height="40"
                />
                <div className="pl-5">
                  <p className="text-xs">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-lg text-white font-medium bg-black hover:shadow-2xl rounded-lg px-6 py-3 transition-all mt-1"
              >
                <img
                  src={`/svgs/playstore.svg`}
                  alt="Custom Icon"
                  width="40"
                  height="40"
                />
                <div className="pl-5">
                  <p className="text-xs">Download on the</p>
                  <p className="text-xl font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

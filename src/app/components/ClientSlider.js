"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  "/images/client1.webp",
  "/images/client2.webp",
  //   "/images/client3.webp",
  "/images/client4.webp",
  //   "/images/client5.webp",
  //   "/images/client6.webp",
  //   "/images/client7.webp",
  "/images/client8.webp",
  //   "/images/client9.webp",
  "/images/client10.webp",
  "/images/client11.webp",
];

export default function ClientSlider() {
  return (
    <div className="w-full py-6 bg-[#051d40]">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={client}
              alt={`Client ${index + 1}`}
              className="w-24 h-24 object-contain mx-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

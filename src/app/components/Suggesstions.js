import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Suggesstions({
  img1,
  keyword1,
  title1,
  link1,
  img2,
  keyword2,
  title2,
  link2,
  img3,
  keyword3,
  title3,
  link3,
  img4,
  keyword4,
  title4,
  link4,
  img5,
  keyword5,
  title5,
  link5,
  img6,
  keyword6,
  title6,
  link6,
}) {
  const Model = ({ image, keywords, title, link }) => {
    return (
      <Link
        href={link}
        className="grid mb-10 lg:mb-16 md:mx-5 lg:mx-5 hover:scale-90 bg-[#38b6ff] rounded-b-3xl transition-transform duration-300"
      >
        <Image
          src={`/images/${image}.webp`}
          alt={keywords}
          width={200}
          height={200}
          quality={50}
          className="w-full h-auto"
        />
        <h3 className="text-xl lg:text-xl font-semibold text-[#051d40] text-center py-4 lg:py-5">
          {title}
        </h3>
      </Link>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-10 pt-10">
      <Model image={img1} keywords={keyword1} title={title1} link={link1} />
      <Model image={img2} keywords={keyword2} title={title2} link={link2} />
      <Model image={img3} keywords={keyword3} title={title3} link={link3} />
      <Model image={img4} keywords={keyword4} title={title4} link={link4} />
      <Model image={img5} keywords={keyword5} title={title5} link={link5} />
      <Model image={img6} keywords={keyword6} title={title6} link={link6} />
    </div>
  );
}

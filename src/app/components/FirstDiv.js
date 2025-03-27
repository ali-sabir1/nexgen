import Link from "next/link";

export default function FirstDiv({ word1, word2, sentence }) {
  return (
    <div className="pt-36 md:pt-80 lg:pt-36">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold text-center">
          <span className="text-white">{word1}</span>{" "}
          <span className="text-[#38b6ff]">{word2}</span>
        </h1>
        <p className="hidden md:block text-md md:text-xl lg:text-base text-center pt-2 px-5 md:pt-4 md:px-16 lg:px-44 lg:pt-4">
          {sentence}
        </p>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-10 text-center">
        <Link
          href="/contact"
          className="text-lg md:text-4xl lg:text-2xl text-white font-semibold bg-[#38b6ff] hover:bg-[#38b] rounded-2xl px-6 py-3 transition-all mt-1"
        >
          Get Free Consultation
        </Link>
      </div>
    </div>
  );
}

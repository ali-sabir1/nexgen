import Link from "next/link";
import CareerForm from "../components/CareerForm";

export default function Contact() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10">
        <div className="lg:pr-20">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold pr-10 md:pr-10 lg:pr-0">
            <span className="text-black">Grow Your Career with</span>{" "}
            <span className="text-[#38b6ff]">NexGen Solutions</span>{" "}
            <span className="text-black">– Join Our Professional Team</span>
          </h1>
          <p className="text-md md:text-lg lg:text-base font-medium pt-5 lg:pt-10 md:pt-6">
            <span className="text-[#38b6ff] font-semibold">
              <Link href="/">NexGen Solutions</Link>
            </span>
            <span>
              , a leading software development company based in Lahore, is
              actively seeking skilled and passionate professionals to become
              part of our dynamic team. We offer exciting opportunities for
              career growth in software development, digital marketing, SEO,
              UI/UX design, and more empowering you to thrive in a fast-evolving
              digital world.
            </span>
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            Whether you’re building scalable software solutions, designing
            intuitive user interfaces, leading marketing campaigns, or
            optimizing websites for peak performance, your role at NexGen
            Solutions will challenge and inspire you. Our work environment
            promotes collaboration, creativity, and the use of the latest tools
            and technologies to deliver real impact.
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            We believe that every professional deserves a workplace that
            supports learning, innovation, and excellence. At NexGen Solutions,
            we’re dedicated to helping you achieve your full potential while
            contributing meaningfully to cutting-edge projects that shape the
            digital future.
          </p>
        </div>
        <div>
          <CareerForm />
        </div>
      </div>
    </main>
  );
}

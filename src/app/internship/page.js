import Link from "next/link";
import InternshipForm from "../components/InternshipForm";

export default function Contact() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10">
        <div className="lg:pr-20">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold pr-10 md:pr-10 lg:pr-0">
            <span className="text-black">Kickstart Your Career with</span>{" "}
            <span className="text-[#38b6ff]">NexGen Solutions</span>{" "}
            <span className="text-black">– Unpaid Internship Program</span>
          </h1>
          <p className="text-md md:text-lg lg:text-base font-medium pt-5 lg:pt-10 md:pt-6">
            <span className="text-[#38b6ff] font-semibold">
              <Link href="/">NexGen Solutions</Link>
            </span>
            <span>
              , a leading software development company based in Lahore, offers
              an exciting unpaid internship program for students and recent
              graduates eager to gain real-world experience in the digital
              industry. Our program provides hands-on training in software
              development, marketing, SEO, and website building, helping you
              develop the skills that matter most in today’s competitive
              landscape.
            </span>
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            Whether you're learning to write clean, efficient code, building
            user-friendly websites, crafting effective marketing campaigns, or
            optimizing digital content for search engines, our internship
            program is designed to challenge and empower you. You'll gain
            exposure to modern tools and technologies while building a strong
            foundation for your future career.
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            We believe there’s nothing more valuable for emerging professionals
            than practical, hands-on experience. At NexGen Solutions, we’re
            committed to helping you grow, learn, and succeed in a supportive,
            innovation-driven environment.
          </p>
        </div>
        <div>
          <InternshipForm />
        </div>
      </div>
    </main>
  );
}

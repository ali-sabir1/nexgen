import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FirstDiv from "../components/FirstDiv";

export default function Contact() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]">
        <div className="relative bg-[url('/images/contact.webp')] bg-cover bg-bottom h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-[#051d40] opacity-70 z-0"></div>
          <div className="relative z-10">
            <FirstDiv word1="Contact" word2="Us" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10">
        <div className="lg:pr-20">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold pr-10 md:pr-10 lg:pr-0">
            <span className="text-black">Cutting-Edge Software Solutions</span>{" "}
            <span className="text-[#38b6ff]">- NexGen Solutions</span>
          </h1>
          <p className="text-md md:text-lg lg:text-base font-medium pt-5 lg:pt-10 md:pt-6">
            <span className="text-[#38b6ff] font-semibold">
              <Link href="/">NexGen Solutions </Link>
            </span>
            <span>
              is a leading software development company based in Lahore. Our
              expertise lies in delivering cutting-edge digital solutions,
              including custom software development, web applications, and
              mobile apps. We cater to businesses of all sizes, ensuring they
              have the technology needed to thrive in a competitive digital
              landscape.
            </span>
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            There’s a commitment to excellence in our development process. Our
            team consists of highly skilled engineers, designers, and project
            managers who bring years of experience and a passion for innovation.
            We focus on precision, efficiency, and scalability, ensuring that
            every project is tailored to meet the unique needs of our clients.
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            The technology stack at NexGen Solutions includes the latest
            advancements in JavaScript frameworks, cloud computing, AI-driven
            applications, and blockchain solutions. Our development process
            ensures high-performance applications with user-friendly interfaces,
            secure architectures, and seamless functionality.
          </p>
          <p className="text-md md:text-lg lg:text-base font-medium pt-3 lg:pt-5 md:pt-4">
            And is there anything more essential to a business than reliable
            software solutions? It’s the backbone of your digital presence. You
            can expect a dedicated development team, a client-focused approach,
            and top-tier technological expertise to bring your project to life
            and help your business grow.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import FirstDiv from "../components/FirstDiv";
import Content from "../components/Content";
import Link from "next/link";
import DividerOpen from "../components/dividerOpen";
import QnA from "../components/QnA";

export default function AboutUs() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]">
        <div className="relative bg-[url('/images/about.webp')] bg-cover bg-center h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-[#051d40] opacity-70 z-0"></div>
          <div className="relative z-10">
            <FirstDiv
              word1="About"
              word2="Us"
              sentence="NexGen Solutions is a leading software development company based in New Jersey, founded in 2017. We specialize in delivering cutting-edge software solutions, including custom web applications, mobile apps, enterprise software, and AI-driven platforms. With a strong focus on innovation and customer satisfaction, we serve clients across the United States and globally, helping businesses streamline operations, enhance user experiences, and achieve digital transformation."
            />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#051d40] text-center pb-5">
          Our Story
        </h2>
        <p className="text-center text-gray-600 font-medium px-10 lg:px-60">
          Mike & James started NexGen in the Fall of 2017 after receiving
          questions about how to build mobile apps from individuals in their
          network.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 pb-10 md:pb-14 md:pt-4 md:px-14 lg:pb-14 lg:pt-5 lg:px-14 space-y-10 lg:space-y-0">
          <div className="lg:pl-28 md:pt-10">
            <Image
              src={`/images/founders.webp`}
              alt="Mobile App Development"
              width={200}
              height={200}
              quality={70}
              className="w-full h-auto lg:w-64"
            />
          </div>
          <div className="lg:pr-20">
            <p className="text-gray-600 text-md md:text-lg lg:text-base font-medium md:pt-7">
              <span>
                As startup founders themselves, they had learned about the
                struggles of finding a dev team and building a product. When it
                came to launching their first mobile app, they quickly realized
                there was a huge disparity in the development world. US
                developers are insanely skilled but typically way out of reach
                for most small businesses like themselves. When it comes to
                outsourcing though, there’s a lot of fear, stress, and anxiety
                when it comes to finding the right team abroad. Because of their
                past experience interviewing international development teams,
                they realized a huge missing piece was adequate communication.
                By resolving some of those issues, they were able to identify
                very talented individuals abroad who had the same passion for
                learning and skill development as Dave and Phil. To this day our
                Hybrid team of US-based project managers coupled with global
                developer talent helps ensure{" "}
              </span>

              <span className="text-[#38b6ff] font-semibold">
                <Link href="/">NexGen </Link>
              </span>
              <span>
                can bring your idea to life without compromising on quality or
                value.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <DividerOpen />
        <div className="pt-10 bg-[#38b6ff]">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#051d40] text-center pb-5">
            Our Thought
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-5 pb-10 md:pb-14 md:pt-4 md:px-14 lg:pb-14 lg:pt-5 lg:px-14 space-y-10 lg:space-y-0">
            <div className="lg:pl-16">
              <p className="text-black text-md md:text-lg lg:text-base font-medium pt-7">
                <span>At </span>
                <span className="text-white font-semibold">
                  <Link href="/">NexGen</Link>
                </span>
                <span>
                  , we believe that technology should be a tool for empowerment,
                  not a barrier to innovation. Too often, great ideas are left
                  unrealized due to the high costs of development or the
                  challenges of finding the right team. We see a future where
                  businesses of all sizes can access world-class development
                  talent without compromising on quality, efficiency, or
                  affordability.
                </span>
                <span>
                  We believe in leveraging the latest technologies to build
                  scalable, future-proof applications while maintaining
                  affordability without compromising quality. Our commitment to
                  transparency, communication, and long-term partnerships allows
                  us to build trust with our clients and deliver products that
                  exceed expectations. At NexGen, our goal is simple: to help
                  you turn your vision into reality, one line of code at a time.
                </span>
              </p>
              <p className="text-black text-md md:text-lg lg:text-base font-medium pt-5">
                Our approach is built on trust, collaboration, and innovation.
                We understand the struggles that startups and businesses face
                when building digital products, which is why we focus on clear
                communication, strategic planning, and cutting-edge technology
                to bring ideas to life. By bridging the gap between expert
                project management and global development talent, we ensure that
                every project is executed with precision and passion. At NexGen,
                we don’t just build software—we build solutions that drive
                success.
              </p>
            </div>
            <div className="lg:pl-10 md:pt-10">
              <Image
                src={`/images/thought.webp`}
                alt="Mobile App Development"
                width={200}
                height={200}
                quality={70}
                className="w-full h-auto lg:w-full"
              />
            </div>
          </div>
        </div>
        <DividerOpen top="[#38b6ff]" bottom="[#051d40]" />
        <div className="pt-10 bg-[#051d40]">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#38b6ff] text-center pb-5">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-5 pb-10 md:pb-14 md:pt-4 md:px-14 lg:pb-14 lg:pt-5 lg:px-14 space-y-10 lg:space-y-0">
            <div className="lg:pr-16">
              <Image
                src={`/images/mission.webp`}
                alt="Mobile App Development"
                width={200}
                height={200}
                quality={100}
                className="w-full h-auto lg:w-full"
              />
            </div>
            <div className="lg:pr-20">
              <p className="text-white text-md md:text-lg lg:text-base font-medium md:pt-10">
                <span>At </span>
                <span className="text-[#38b6ff] font-semibold">
                  <Link href="/">NexGen</Link>
                </span>
                <span>
                  , we are driven by a vision to empower businesses and
                  entrepreneurs by making high-quality software development
                  accessible, efficient, and transparent. We aim to bridge the
                  gap between innovation and execution, ensuring that every
                  idea—big or small—has the opportunity to succeed. By combining
                  top-tier US project management with skilled global development
                  talent, we create a seamless collaboration that delivers
                  exceptional results.
                </span>
              </p>
              <p className="text-white text-md md:text-lg lg:text-base font-medium pt-5">
                We believe in leveraging the latest technologies to build
                scalable, future-proof applications while maintaining
                affordability without compromising quality. Our commitment to
                transparency, communication, and long-term partnerships allows
                us to build trust with our clients and deliver products that
                exceed expectations. At NexGen, our goal is simple: to help you
                turn your vision into reality, one line of code at a time.
              </p>
            </div>
          </div>
        </div>
        <DividerOpen top="[#051d40]" bottom="white" />
      </div>
      <div className="pt-10 pb-7">
        <QnA
          q1="What is NexGen and what do you do?"
          a1="NexGen is a software development company founded in 2017 to help businesses and entrepreneurs turn their ideas into reality. We specialize in mobile app development, custom software solutions, and digital transformation services."
          q2="How is NexGen different from other software development companies?"
          a2="We operate on a hybrid model, combining US-based project managers with skilled global developers. This ensures high-quality development, cost efficiency, and seamless communication throughout the project lifecycle."
          q3="What types of software development services do you offer?"
          a3="Our services include mobile app development, web development, custom software solutions, AI & machine learning integration, and cloud-based applications."
          q4="How does NexGen ensure quality when working with global developers?"
          a4="We carefully vet our global development team and maintain strong communication channels to ensure quality and consistency. Our US-based project managers oversee every project to ensure it meets our high standards."
          q5="Can NexGen help startups with limited budgets?"
          a5="Yes! We understand the challenges startups face and offer cost-effective solutions without compromising quality. Our hybrid model allows us to deliver top-tier software at a fraction of traditional development costs."
          q6="What industries do you serve?"
          a6="We work with businesses across various industries, including technology startups, e-commerce, healthcare, finance, education, and logistics, providing tailored software solutions."
          q7="How long does it take to develop a mobile app with NexGen?"
          a7="The timeline depends on project complexity. A simple app may take 2-3 months, while a more complex solution can take 6+ months. We provide detailed project timelines after the initial consultation."
          q8="Does NexGen offer post-launch support and maintenance?"
          a8="Yes! We provide ongoing support, maintenance, and updates to ensure your software remains secure, efficient, and up-to-date with the latest technology."
          q9="Can I request a free consultation?"
          a9="Absolutely! We offer free consultations to discuss your project requirements. Visit our website to schedule a call with our team."
          q10="How can I get started with NexGen?"
          a10="Simply reach out to us via email at info@nexgensolutions.tech or fill out the contact form on our website. Our team will connect with you to discuss your project needs and next steps."
        />
      </div>
    </main>
  );
}

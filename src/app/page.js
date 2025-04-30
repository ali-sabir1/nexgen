import Link from "next/link";
import Divider from "./components/divider";
import HowItWorks from "./components/HowItWorks";
import Suggesstions from "./components/Suggesstions";
import WhyUs from "./components/WhyUs";
import QnA from "./components/QnA";
import Border from "./components/border";
import ReviewScroller from "./components/ReviewScroller";
import ClientSlider from "./components/ClientSlider";
import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]">
        <div className="relative bg-[url('/images/cover.webp')] bg-cover bg-top h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-[#38b6ff] opacity-20 z-0"></div>
          <div className="relative z-10">
            <h1 className="text-white text-xl md:text-5xl font-bold pt-20 px-5 md:pt-32 lg:pt-24 md:px-20">
              We Build Quality Mobile Apps & Websites for Businesses
            </h1>
            <p className="text-gray-400 text-base md:text-xl font-medium px-5 md:px-20 md:pr-36 md:pt-5">
              By combining US-based project managers & talented global
              developers we bring your idea to life without compromising on
              quality or value.
            </p>
            <div className="pt-10 md:pt-16 lg:pt-16 text-center space-x-5 lg:space-x-10">
              <Link
                href="/web-app-development"
                className="text-lg md:text-2xl lg:text-2xl text-white font-semibold bg-transparent hover:bg-[#38b] rounded-lg px-6 py-3 transition-all mt-1 border-2"
              >
                Our Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-lg md:text-2xl lg:text-2xl text-white font-semibold bg-[#38b6ff] hover:bg-[#38b] rounded-lg px-6 py-3 transition-all mt-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ClientSlider />
      <Divider bg="white" />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10 lg:space-y-0">
        <div className="lg:pl-10">
          <Image
            src={`/images/mdev.webp`}
            alt="Mobile App Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-5">
            Mobile App Development
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Problem-Focused Design
          </h1>
          <Content
            p1a="We help align your vision with the problem that currently exists in the market. A critical mistake many founders make is falling in love with their products instead of the problem. We are here to ensure that doesn’t happen. Whether you have a simple idea or an extremely complex one, our team at "
            p1b="can handle it."
          />
          <div className="pt-10 lg:pr-10">
            <Image
              src={`/images/mtechs.webp`}
              alt="Mobile App Development Technologies"
              width={200}
              height={200}
              quality={70}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10 lg:space-y-0">
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold">
            Web Development & Design
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            User-Driven Development
          </h1>
          <Content
            p1a="The design may sound simple, but we live in a world where consumers make decisions in microseconds. You need a partner who understands the psychology behind why people use products. Our team at We help align your vision with the problem that currently exists in the market. A critical mistake many founders make is falling in love with their products instead of the problem. We are here to ensure that doesn’t happen. Whether you have a simple idea or an extremely complex one, our team at "
            p1b="focuses early on to ensure we keep the user as the focal point for the project."
          />
          <div className="pt-10 lg:pr-10">
            <Image
              src={`/images/wtechs.webp`}
              alt="Mobile App Development Technologies"
              width={200}
              height={200}
              quality={70}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="lg:pl-24 lg:pt-10">
          <Image
            src={`/images/wdev.webp`}
            alt="Mobile App Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
      </div>
      <Border />
      <div className="text-center pt-5">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#051d40] text-center pb-5">
          Our Work
        </h2>
        <p className="text-gray-500 font-medium px-10 lg:px-32">
          Too many times a development team never crosses the finish line
          because of challenges faced along the way. Our focus during
          development is to ensure every project of ours goes live and launches.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-5 lg:px-32">
          <div>
            <h3 className="text-[#051d40] text-xl lg:text-2xl font-semibold pt-5">
              TEAM MEMBERS
            </h3>
            <p className="text-[#38b6ff] text-3xl lg:text-5xl font-semibold">
              10+
            </p>
          </div>
          <div>
            <h3 className="text-[#051d40] text-xl lg:text-2xl font-semibold pt-5">
              PAST PROJECTS
            </h3>
            <p className="text-[#38b6ff] text-3xl lg:text-5xl font-semibold">
              95+
            </p>
          </div>
          <div>
            <h3 className="text-[#051d40] text-xl lg:text-2xl font-semibold pt-5">
              LAUNCHED PROJECTS
            </h3>
            <p className="text-[#38b6ff] text-3xl lg:text-5xl font-semibold">
              100%
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-10 md:py-16 text-center lg:space-x-10 items-center justify-center">
          <Link
            href="/mobile-app-development"
            className="text-lg md:text-2xl lg:text-2xl text-white bg-[#051d40] hover:bg-[#38b6ff] hover:text-[#051d40] font-semibold rounded-lg px-6 py-3 transition-all mt-1 mb-5 "
          >
            View Mobile Apps
          </Link>
          <Link
            href="/web-app-development"
            className="text-lg md:text-2xl lg:text-2xl text-white bg-[#051d40] hover:bg-[#38b6ff] hover:text-[#051d40] font-semibold rounded-lg px-6 py-3 transition-all mt-1 mb-5"
          >
            View Websites
          </Link>
        </div>
      </div>
      <HowItWorks />
      <div className="pt-10">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#051d40] text-center pb-5">
          Our Services
        </h2>
        <Suggesstions
          img1="wad"
          keyword1="Website Developement"
          title1="Website Developement"
          link1="/web-app-development"
          img2="mad"
          keyword2="Mobile App Development"
          title2="Mobile App Development"
          link2="/mobile-app-development"
          img3="softdev"
          keyword3="Custom Software Development"
          title3="Custom Software Development"
          link3="/software-development"
          img4="blockchain"
          keyword4="Blockchain Solutions"
          title4="Blockchain Solutions"
          link4="/blockchain-solutions"
          img5="ecom"
          keyword5="E-Commerce Development"
          title5="E-Commerce Development"
          link5="/e-commerece"
          img6="marketing"
          keyword6="MARKETING SERVICES"
          title6="Marketing Services"
          link6="/marketing-services"
        />
      </div>
      <WhyUs />
      <div className="pt-10">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-black text-center pb-5">
          Client Testimonials
        </h2>
        <ReviewScroller />
      </div>
      <Border />
      <QnA
        q1="How Can I Contact Support?"
        a1="In NexGen Solutions, our dedicated support team is available to assist you. You can reach us 24/7 via email at info@nexgensolutions.tech or by filling out the contact form on our website. For urgent inquiries, you can also call our helpline."
        q2="What Services Does NexGen Solutions Provide?"
        a2="We specialize in custom software development, web & mobile app development, blockchain solutions, AI & machine learning, and digital marketing services, including SEO, social media marketing, and PPC advertising."
        q3="Do You Offer Custom Software Development?"
        a3="Yes, we provide tailored software solutions based on your business requirements. Whether it's a web application, mobile app, or enterprise-level software, we ensure scalable and efficient solutions."
        q4="How Long Does It Take to Develop a Website or Mobile App?"
        a4="The development timeline varies depending on project complexity. A basic website can take 2-4 weeks, whereas a fully functional mobile app may take 2-6 months. We provide project timelines after initial consultation."
        q5="Can You Help Improve My Website’s Search Rankings?"
        a5="Yes, our SEO experts implement data-driven strategies to enhance your website's visibility, improve rankings, and drive organic traffic. We offer keyword optimization, technical SEO, and content marketing services."
        q6="Do You Provide Cloud-Based Software Solutions?"
        a6="Yes, we develop and deploy cloud-based software using AWS, Google Cloud, and Azure. Our solutions ensure scalability, security, and high availability for businesses of all sizes."
        q7="What Industries Do You Serve?"
        a7="We work with businesses across various industries, including e-commerce, healthcare, finance, education, real estate, and logistics. Our solutions are tailored to meet industry-specific needs."
        q8="Can You Help with E-Commerce Development?"
        a8="Yes, we specialize in e-commerce website and app development using platforms like Shopify, WooCommerce, and custom solutions with Next.js and React. We ensure seamless user experience and secure payment gateways."
        q9="Do You Provide Ongoing Support & Maintenance?"
        a9="Yes, we offer post-launch support, security updates, and regular maintenance services to ensure your software or website remains optimized and secure."
        q10="Can I Request a Free Consultation?"
        a10="Absolutely! You can book a free consultation with our experts to discuss your project needs. Visit our website to schedule a call or fill out our inquiry form."
      />
    </main>
  );
}

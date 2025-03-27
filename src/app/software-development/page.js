import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FirstDiv from "../components/FirstDiv";
import Image from "next/image";
import Content from "../components/Content";
import WhyUsShort from "../components/WhyUsShort";
import QnA from "../components/QnA";

export default function Contact() {
  return (
    <main>
      <div className="pt-20 bg-[#051d40]">
        <div className="relative bg-[url('/images/softdev.webp')] bg-cover bg-center h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-[#051d40] opacity-70 z-0"></div>
          <div className="relative z-10">
            <FirstDiv word1="Custom Software Development" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10 lg:space-y-0">
        <div className="lg:pl-10 lg:pt-10">
          <Image
            src={`/images/sdev.webp`}
            alt="Custom Software Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-5">
            Custom Software Development
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Scalable & Efficient Solutions
          </h1>
          <Content
            p1a="Every business has unique challenges that off-the-shelf software can’t always solve. That’s why we specialize in creating custom software solutions tailored to your needs. Whether it's automating workflows, integrating complex systems, or building enterprise-grade applications, our team at "
            p1b="ensures your software is efficient, scalable, and future-proof. We focus on delivering high-quality solutions that align with your vision while solving real business problems."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-0 lg:pb-10 lg:px-14 space-y-10 lg:space-y-0">
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-4">
            DevOps
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Seamless Integration & Deployment
          </h1>
          <Content
            p1a="In today’s fast-paced digital world, efficiency and reliability are key to successful software development. Our DevOps solutions ensure smooth collaboration between development and operations teams, automating workflows, optimizing infrastructure, and improving deployment speed. Whether you're scaling applications, implementing CI/CD pipelines, or enhancing security, our team at "
            p1b="helps you achieve a robust and agile development process."
          />
        </div>
        <div className="lg:pl-24">
          <Image
            src={`/images/devops.webp`}
            alt="Mobile App Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
      </div>
      <WhyUsShort
        title="for Software Development?"
        icon1="exclusive"
        h1="Tailored Solutions for Your Business"
        c1="Crafting high-performance software designed specifically to meet your unique business needs."
        icon2="businessman"
        h2="Scalable & Future-Proof"
        c2="Developing software that evolves with your business, ensuring long-term scalability and adaptability."
        icon3="clock"
        h3="CI/CD Implementation"
        c3="Ensuring faster, reliable, and secure software delivery with continuous integration and deployment."
        icon4="handshake"
        h4="End-to-End Development & Support"
        c4="From ideation to deployment and maintenance, we provide comprehensive software solutions."
      />
      <div className="pt-10 pb-7">
        <QnA
          q1="What is NexGen’s approach to custom software development?"
          a1="At NexGen, we take a problem-solving approach, designing software tailored to your specific business needs. We focus on scalability, security, and performance to ensure long-term success."
          q2="What types of custom software solutions does NexGen build?"
          a2="We develop enterprise applications, automation tools, CRM systems, AI-powered solutions, cloud-based platforms, and more, depending on your business needs."
          q3="How does NexGen ensure scalability in custom software?"
          a3="We design software architectures that support growth, using microservices, cloud-native solutions, and modular development for seamless scalability."
          q4="Can NexGen integrate third-party tools and APIs into custom software?"
          a4="Yes! We specialize in integrating various APIs, payment gateways, ERP systems, and third-party tools to enhance your software’s capabilities."
          q5="How do you handle security in custom software development?"
          a5="We follow strict security protocols, including data encryption, secure authentication, role-based access control, and regular security audits."
          q6="Do you provide post-launch support for custom software?"
          a6="Yes! We offer ongoing support, bug fixes, updates, and maintenance to ensure your software remains secure and efficient."
          q7="What is NexGen’s approach to DevOps?"
          a7="Our DevOps approach focuses on automation, CI/CD pipelines, cloud infrastructure management, and seamless collaboration between development and operations teams."
          q8="What DevOps tools and technologies does NexGen use?"
          a8="We use Kubernetes, Docker, Terraform, Jenkins, GitHub Actions, AWS, Azure, and other leading DevOps tools to optimize deployment and infrastructure."
          q9="Can NexGen implement CI/CD pipelines for my project?"
          a9="Absolutely! We design and implement automated CI/CD pipelines to streamline development, testing, and deployment processes."
          q10="How can I get started with NexGen for custom software or DevOps services?"
          a10="Simply contact us at info@nexgensolutions.tech or fill out the contact form on our website. We’ll schedule a consultation to discuss your requirements and the best approach for your project."
        />
      </div>
    </main>
  );
}

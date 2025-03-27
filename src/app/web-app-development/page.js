import Image from "next/image";
import Content from "../components/Content";
import AppsDiv from "../components/AppsDiv";
import QnA from "../components/QnA";

export default function WebAppDevelopment() {
  return (
    <main>
      <div className="pt-20">
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
        <AppsDiv
          image="bluesea"
          title="BLUE SEA"
          data="Headquartered in New Jersey, Blue Sea Products was established in 2005 and has developed from its humble beginnings in shrimp products into a world-class vertically integrated seafood company."
          link="https://www.blueseaproducts.com"
        />
        <AppsDiv
          image="dynasty"
          title="DYNASTY TRADES IN 5"
          data="Dynasty Trades in 5 is an online community where you can chat strategy live with other fantasy players, podcasters, and industry leaders. Have a trade question? Post it on the community Chatter and get feedback from your peers and experts. Download today to join this active community and start building dynasties!"
          link="https://dynastytradesin5.com/"
        />
        <AppsDiv
          image="robertryan"
          title="ROBERT RYAN"
          data="Robert Ryan Catering & Design has been a premier caterer in the Philadelphia area since 1992 – creating unique and memorable events in our exclusive venues, historic mansions, outdoor farms, museums, private residences, and tented backyards in Chester County, Montgomery County, Delaware County, Philadelphia, and beyond!"
          link="https://robertryancatering.com/"
        />
        <AppsDiv
          image="vonparismoving"
          title="VON PARIS MOVING"
          data="With over a century of local and long distance moving and storage experience, Von Paris leads the way among moving companies and has established an impeccable reputation for honesty, integrity and outstanding quality service."
          link="https://www.vonparis.com/"
        />
        <AppsDiv
          image="kellotime"
          title="KELLO TIME"
          data="Kello allows organizations to effectively plan, prepare, and manage projects & project assignees as needed. A fully integrated individual and group-managed timekeeping system that enables employees to enter their time in weekly or monthly intervals. The Kello system seamlessly enables leadership and project managers to plan and calculate staff capacity, tracking and managing organizational needs months in advance of vacation, sabbaticals, and high volume timeframes for the organization."
          link="https://app.kellotime.com/login"
        />
        <AppsDiv
          image="clarityadvisors"
          title="CLARITY ADVISORS"
          data="Need expert advice on planning for retirement, building wealth by investing, buying a home or managing debt? You came to the right place. No matter where you are in your life, Clarity Advisor is dedicated to helping you and your family manage the complexities around your money."
          link="https://clarityadvisor.com/"
        />
        <AppsDiv
          image="ichiban"
          title="ICHIBAN"
          data="Ichiban is a family operated authentic Japanese and Korean Restaurant. We take pride in our quality of food and freshness. We have over 60 designer sushi rolls to dazzle your appetite. They are not only delicious, but also very attractive in presentation. We also feature various Korean dishes, including home made noodle to stimulate your taste buds."
          link="https://ichibanri.com/"
        />
        <AppsDiv
          image="dipolematerials"
          title="DIPOLE MATERIALS"
          data="Dipole Materials and their team of experts are here to custom manufacture nanofibers for you. Our extensive team has been working in the nanofiber space for many years. We focus on bringing nanofibers to a larger market by identifying specific areas for commercialization"
          link="https://www.dipolematerials.com/"
        />
        <div className="pt-10 pb-7">
          <QnA
            q1="What is NexGen’s approach to web app development?"
            a1="At NexGen, we take a strategic approach to web app development by focusing on scalability, performance, and user experience. We leverage the latest technologies to build secure, high-performing web applications tailored to your business needs."
            q2="What technologies do you use for web app development?"
            a2="We use a variety of modern technologies, including React, Next.js, Node.js, TypeScript, Python, and cloud platforms like AWS and Firebase. Our team selects the best stack based on your project requirements."
            q3="How long does it take to develop a web application?"
            a3="The timeline varies based on complexity. A simple web app may take 2-3 months, while a feature-rich application can take 6+ months. We provide a detailed timeline after discussing your project needs."
            q4="Can NexGen develop Progressive Web Apps (PWAs)?"
            a4="Yes! We specialize in building Progressive Web Apps (PWAs) that offer a seamless, app-like experience across devices, improving user engagement and performance."
            q5="Do you offer full-stack web development services?"
            a5="Absolutely! Our team covers everything from front-end UI/UX design to back-end API development and database management, ensuring a fully integrated and functional web application."
            q6="Can you integrate third-party APIs and services?"
            a6="Yes, we have experience integrating various third-party APIs, payment gateways, CRMs, and other external services to enhance your web application’s functionality."
            q7="How do you ensure the security of web applications?"
            a7="We follow industry best practices, including data encryption, secure authentication, and regular security audits to ensure your web app is protected from vulnerabilities."
            q8="Do you offer maintenance and support after launch?"
            a8="Yes! We provide post-launch support, bug fixes, and feature updates to ensure your web application remains up-to-date and performs optimally."
            q9="Can NexGen help with UI/UX design for my web app?"
            a9="Of course! Our UI/UX experts create intuitive, user-friendly designs that enhance engagement and usability, ensuring a great experience for your users."
            q10="How can I get started with NexGen for my web app development project?"
            a10="Simply contact us at info@nexgensolutions.tech or fill out the contact form on our website. We’ll schedule a free consultation to discuss your project requirements and next steps."
          />
        </div>
      </div>
    </main>
  );
}

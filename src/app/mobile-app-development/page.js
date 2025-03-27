import Image from "next/image";
import Content from "../components/Content";
import MobileAppsDiv from "../components/MobileAppsDiv";
import QnA from "../components/QnA";

export default function MobileAppDevelopment() {
  return (
    <main>
      <div className="pt-20">
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
        <MobileAppsDiv
          image="ecomplicato-m"
          title="Ecomplicato: Navigating Hard Times"
          data="Our objective at Ecomplicato is to support individuals/couples during their relationship by matching users to professional services related to Health/Fitness, Legal Resources, Wellness, Financial Services, and Leisure Activities. Ecomplicato is designed to untangle the complexities encountered in a relationship while emphasizing convenience for our users."
          link1="https://apps.apple.com/us/app/ecomplicato/id1571491675"
          link2="https://play.google.com/store/apps/details?id=com.fa.ecomplicatoapp.live"
        />
        <MobileAppsDiv
          image="rainn-m"
          title="RAINN: Self-care App"
          data="The RAINN app gives survivors of sexual violence and their loved ones access to support, self-care tools, and information to help manage the short- and long-term effects of sexual violence. Weither you are looking to connect to the hotline via a phone call or chat support we are RAINN is here for you."
          link1="https://apps.apple.com/us/app/rainn/id1518956691"
          link2="https://play.google.com/store/apps/details?id=org.rainn.app&hl=en_IN&gl=US"
        />
        <MobileAppsDiv
          image="dynasty-m"
          title="Dynasty Trades In 5"
          data="Dynasty Trades in 5 is an online community where you can chat strategy live with other fantasy players, podcasters, and industry leaders. Have a trade question? Post it on the community Chatter and get feedback from your peers and experts. Download today to join this active community and start building dynasties!"
          link1="https://apps.apple.com/us/app/dynasty-trades-in-5/id1580900067"
          link2="https://play.google.com/store/apps/details?id=com.dynastypandemic.live"
        />
        <MobileAppsDiv
          image="stan-m"
          title="Stan Healthcare: Nurse Shift Tracker"
          data="This app is meant to help make applying and getting accepted to a job easier. You will also be able to use the app to check-in to your shift and check-out when you are leaving."
          link1="https://apps.apple.com/us/app/stan-healthcare/id6479426711"
          link2="https://play.google.com/store/apps/details?id=com.stanhealthcare.fa.live&hl=en&gl=US"
        />
        <MobileAppsDiv
          image="puppaws-m"
          title="Puppaws: Doggy Daycare"
          data="A professional pet care service in Baltimore, MD offering a range of services, including doggy daycare, dog walking, and overnight boarding. Booking the next appointment for your 4 legged family members just got a whole lot easier!"
          link1="https://apps.apple.com/us/app/puppaws/id6461729649"
          link2="https://play.google.com/store/apps/details?id=com.puppawsco.rn.live"
        />
        <MobileAppsDiv
          image="bcpscope-m"
          title="BCPSOPE: App for Teachers Union"
          data="Our mission is to provide our members with a voice in the workplace. We protect and improve the wages, benefits and work conditions of our members and their families. We encourage professional development, and advocate for a safe, secure, fair, and healthy workplace. We affirm the dignity and value of our members and the work they perform, as we enhance the performance of the organization. We have evolved from a union into a bargaining unit. We are a professional association and we believe in unity."
          link1="https://apps.apple.com/us/app/bcpsope/id6445958223"
          link2="https://play.google.com/store/apps/details?id=com.app.bcpsope"
        />
        <MobileAppsDiv
          image="krystallize-m"
          title="Krystallize"
          data="Create unique digital spaces effortlessly. Introducing Krystallize, the application that revolutionizes the way you save, organize, and share content."
          link1="https://apps.apple.com/us/app/krystallize/id6449075628"
          link2="https://play.google.com/store/apps/details?id=com.krystallize.app.live"
        />
        <MobileAppsDiv
          image="yi-m"
          title="Yur Invtd"
          data="Introducing the Yur Invtd app - the ultimate tool for hosts and guests to capture and share memories from any event or party! With Yur Invtd, the host of a party can easily create an event and invite guests to join. Once guests join the event, they can share photos and videos to the party gallery that everyone can access. Like, Share, and Download all of your favorites."
          link1="https://apps.apple.com/us/app/yur-invtd/id1673431182"
          link2="https://play.google.com/store/apps/details?id=com.app.yur_invtd&hl=en-IN"
        />
        <div className="pt-10 pb-7">
          <QnA
            q1="What is NexGen’s approach to mobile app development?"
            a1="We follow a user-centric approach, focusing on performance, scalability, and seamless user experience. Our team builds high-quality mobile apps tailored to your business needs, ensuring they run smoothly across all devices."
            q2="What technologies do you use for mobile app development?"
            a2="We specialize in React Native, Flutter, Swift (iOS), Kotlin (Android), and backend technologies like Node.js, Firebase, and AWS for scalable solutions."
            q3="Do you develop apps for both iOS and Android?"
            a3="Yes! We develop native apps for iOS and Android, as well as cross-platform apps using React Native and Flutter to ensure cost-efficiency and faster development."
            q4="How long does it take to develop a mobile app?"
            a4="The timeline depends on the app’s complexity. A simple app may take 3-4 months, while a feature-rich app can take 6+ months. We provide a detailed timeline after an initial consultation."
            q5="Can you integrate third-party APIs and services into the app?"
            a5="Yes! We can integrate payment gateways, social logins, analytics, push notifications, and other third-party services to enhance app functionality."
            q6="Do you provide UI/UX design services for mobile apps?"
            a6="Absolutely! Our design team creates intuitive and visually appealing interfaces that enhance user engagement and improve overall usability."
            q7="How do you ensure mobile app security?"
            a7="We implement secure authentication, data encryption, and best coding practices to protect user data and prevent security threats."
            q8="Do you offer post-launch support and app maintenance?"
            a8="Yes! We provide ongoing maintenance, updates, and bug fixes to ensure your app stays up-to-date with the latest technology and security standards."
            q9="Can NexGen help with publishing apps on the App Store and Google Play?"
            a9="Yes, we handle the entire app submission process, ensuring your app meets all the guidelines for the App Store and Google Play Store."
            q10="How can I get started with NexGen for my mobile app development project?"
            a10="Contact us at info@nexgensolutions.tech or fill out the contact form on our website. We’ll schedule a free consultation to discuss your app idea and next steps."
          />
        </div>
      </div>
    </main>
  );
}

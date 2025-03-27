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
        <div className="relative bg-[url('/images/marketing.webp')] bg-cover bg-center h-[100vw] lg:h-[36vw] w-full flex justify-center text-white">
          <div className="absolute inset-0 bg-[#051d40] opacity-70 z-0"></div>
          <div className="relative z-10">
            <FirstDiv word1="Marketing Services" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10 lg:space-y-0">
        <div className="lg:pl-10">
          <Image
            src={`/images/mservice.webp`}
            alt="Marketing Services"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-5">
            Marketing Services
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Strategic & Data-Driven Growth
          </h1>
          <Content
            p1a="At "
            p1b=", we craft powerful, data-driven marketing strategies designed to elevate your brand, increase engagement, and maximize conversions. Our expertise spans SEO, PPC advertising, social media marketing, content creation, branding, and email marketing, ensuring your business reaches the right audience at the right time. By leveraging in-depth analytics and industry insights, we create highly targeted campaigns that drive website traffic, generate leads, and boost sales. Whether you're looking to establish a strong online presence or scale your business, our tailored marketing solutions are designed to deliver measurable success and long-term growth."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-0 lg:pb-10 lg:px-14 space-y-10 lg:space-y-0">
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-4">
            SEO
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Optimized for Visibility & Growth
          </h1>
          <Content
            p1a="In today’s digital landscape, ranking high on search engines is crucial for business success. Our SEO solutions focus on increasing your website’s visibility, driving organic traffic, and improving search rankings. Through advanced keyword research, on-page and off-page optimization, technical SEO, and content strategies, we ensure your business stays ahead of the competition. Whether you're looking to enhance local SEO, boost domain authority, or improve user experience, our team at "
            p1b="crafts data-driven SEO strategies that drive sustainable growth and long-term success."
          />
        </div>
        <div className="lg:pl-24">
          <Image
            src={`/images/seo.webp`}
            alt="Mobile App Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-14 lg:px-14 space-y-10 lg:space-y-0">
        <div className="lg:pl-10 lg:pt-3">
          <Image
            src={`/images/ppc.webp`}
            alt="Marketing Services"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold">
            PPC Advertising
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Targeted Ads for Maximum ROI
          </h1>
          <Content
            p1a="At "
            p1b=", we create high-impact PPC (Pay-Per-Click) advertising campaigns that drive immediate traffic, generate quality leads, and maximize conversions. Whether it's Google Ads, Facebook Ads, LinkedIn Ads, or YouTube Ads, our data-driven approach ensures your ads reach the right audience at the right time. We focus on strategic keyword bidding, compelling ad creatives, and continuous optimization to lower costs and increase returns. Whether you're looking to boost sales, increase brand awareness, or retarget potential customers, our PPC experts craft tailored campaigns that deliver measurable success."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-10 md:py-14 md:px-14 lg:py-0 lg:pb-10 lg:px-14 space-y-10 lg:space-y-0">
        <div>
          <h1 className="text-[#051d40] text-2xl md:text-4xl lg:text-4xl font-bold lg:pt-4">
            Social Media Marketing
          </h1>
          <h1 className="text-[#38b6ff] text-xl md:text-2xl lg:text-2xl font-semibold pt-2">
            Engage, Influence & Grow Your Brand
          </h1>
          <Content
            p1a="We design social media marketing strategies that build brand awareness, foster engagement, and drive conversions across major platforms like Facebook, Instagram, Snapchat, LinkedIn, Twitter, Pinterest and TikTok. At "
            p1b=", our data-driven approach ensures your content reaches the right audience at the right time through targeted advertising, engaging creatives, and consistent community management. Whether you’re looking to increase followers, enhance brand credibility, or drive website traffic, our social media experts create compelling campaigns that amplify your brand’s voice and deliver measurable success."
          />
        </div>
        <div className="lg:pl-24 lg:pt-6">
          <Image
            src={`/images/social.webp`}
            alt="Mobile App Development"
            width={200}
            height={200}
            quality={70}
            className="w-full h-auto lg:w-96"
          />
        </div>
      </div>
      <WhyUsShort
        title="for Marketing Services?"
        icon1="data"
        h1="Data-Driven Marketing Strategies"
        c1="We use in-depth analytics and insights to craft targeted campaigns that drive engagement and maximize ROI."
        icon2="target"
        h2="Brand Visibility & Lead Generation"
        c2="Our marketing solutions help increase brand awareness, attract the right audience, and convert leads into loyal customers."
        icon3="megaphone"
        h3="Multi-Channel Approach"
        c3="From SEO and PPC to social media and content marketing, we leverage multiple channels to maximize reach and impact."
        icon4="handshake"
        h4="Ongoing Optimization & Support"
        c4="We continuously refine campaigns, track performance, and adapt strategies to ensure long-term marketing success."
      />
      <div className="pt-10 pb-7">
        <QnA
          q1="What marketing services does NexGen offer?"
          a1="We provide a full suite of digital marketing services, including SEO, PPC advertising, social media marketing, content creation, email marketing, and branding solutions."
          q2="How can digital marketing help my business grow?"
          a2="Digital marketing enhances brand visibility, drives targeted traffic, increases engagement, and improves conversion rates, helping your business reach and attract the right audience."
          q3="What is NexGen’s approach to SEO?"
          a3="We focus on data-driven SEO strategies, including keyword research, on-page optimization, technical SEO, and high-quality content creation to improve search engine rankings."
          q4="Do you offer paid advertising (PPC) services?"
          a4="Yes! We specialize in PPC campaigns on Google Ads, Facebook Ads, LinkedIn Ads, and other platforms to maximize ROI through targeted ad strategies."
          q5="Can you manage my social media accounts?"
          a5="Absolutely! We handle social media marketing, content creation, and engagement strategies for platforms like Facebook, Instagram, LinkedIn, and Twitter."
          q6="How does content marketing improve my business?"
          a6="Quality content builds trust, educates your audience, and improves SEO. We create blogs, articles, videos, and infographics tailored to your brand and industry."
          q7="Do you provide email marketing services?"
          a7="Yes, we design and execute personalized email campaigns to nurture leads, boost customer retention, and drive conversions."
          q8="How do you track marketing performance?"
          a8="We use analytics tools to monitor key metrics such as website traffic, conversion rates, ad performance, and customer engagement, providing detailed reports and insights."
          q9="Can you create a custom marketing strategy for my business?"
          a9="Yes! We tailor our marketing approach based on your industry, target audience, and business goals to deliver a strategy that ensures measurable success."
          q10="How can I get started with NexGen’s marketing services?"
          a10="Simply contact us at info@nexgensolutions.tech or fill out the contact form on our website. We’ll schedule a consultation to discuss your marketing needs and strategy."
        />
      </div>
    </main>
  );
}

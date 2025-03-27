import Link from "next/link";
import Image from "next/image";
import { facebook, insta, twitter, linkedin } from "../../../public/svgs/icons";
import Logo from "../../../public/images/logo.png";
import Payments from "../../../public/images/payments.webp";

export default function Footer() {
  return (
    <footer className="bg-[#051d40] text-white pt-8 pb-2">
      <div className="mx-auto px-6">
        <div className="lg:hidden flex items-center text-center flex-col">
          <Image
            src={Logo}
            alt="Golden Bird Limousines"
            width={200}
            height={200}
            quality={100}
            placeholder="blur"
            className="w-52 h-25 lg:w-36 lg:h-30"
          />
          <p className="mt-4 text-sm md:text-md lg:text-lg text-white">
            NexGen Solutions, a premier software development company based in
            New Jersey, has been delivering cutting-edge digital solutions since
            its inception in 2017. Established with a commitment to innovation
            and excellence, our expertise spans across web and mobile app
            development, blockchain solutions, and AI-powered applications. We
            specialize in crafting scalable, high-performance software tailored
            to meet the evolving needs of businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 lg:space-y-0 lg:px-10">
          {/* Column 1: Company Info */}
          <div className="hidden lg:flex items-center text-center flex-col pt-5">
            <Image
              src={Logo}
              alt="Golden Bird Limousines"
              width={200}
              height={200}
              quality={100}
              placeholder="blur"
              className="w-30 h-25 lg:w-52 lg:h-auto"
            />
            <p className="mt-4 text-sm md:text-md lg:text-md text-white">
              NexGen Solutions, a premier software development company based in
              New Jersey, has been delivering cutting-edge digital solutions
              since its inception in 2017. Established with a commitment to
              innovation and excellence, our expertise spans across web and
              mobile app development, blockchain solutions, and AI-powered
              applications. We specialize in crafting scalable, high-performance
              software tailored to meet the evolving needs of businesses
              worldwide.
            </p>
          </div>
          <div className="space-y-10 lg:space-y-10 lg:pl-24 md:pl-28">
            {/* Column 2: Development Services */}
            <div>
              <h3 className="font-semibold text-xl lg:text-lg mb-3 lg:mb-1">
                DEVELOPMENT SERVICES
              </h3>
              <ul className="space-y-1 lg:space-y-0.5">
                <li>
                  <Link
                    href="/software-development"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/web-app-development"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Web & Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Blockchain Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    AI & Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Marketing Services */}
            <div>
              <h3 className="font-semibold text-xl lg:text-lg mb-3 lg:mb-1">
                MARKETING SERVICES
              </h3>
              <ul className="space-y-1 lg:space-y-0.5">
                <li>
                  <Link
                    href="/marketing-services"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-services"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-services"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Pay-Per-Click (PPC) Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-services"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-services"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Branding & Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-10 md:space-y-16 lg:space-y-14 lg:pl-20 md:pl-28">
            {/* Column 4: Company Policies */}
            <div>
              <h3 className="font-semibold text-xl lg:text-lg mb-3 lg:mb-1">
                COMPANY
              </h3>
              <ul className="space-y-1 lg:space-y-0.5">
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm md:text-md lg:text-sm text-white hover:text-[#38b6ff]"
                  >
                    Privacy and Cookies
                  </Link>
                </li>
              </ul>

              {/* Payment Methods Image */}
              <div className="mt-2">
                <Image
                  src={Payments}
                  alt="payments"
                  width={200}
                  height={200}
                  quality={100}
                  placeholder="blur"
                  className="w-44 h-22 lg:w-3.56 lg:h-26"
                />
              </div>
            </div>

            {/* Column 5: Contact Us */}
            <div>
              <h3 className="font-semibold text-xl lg:text-lg mb-3 lg:mb-1">
                CONTACT US
              </h3>
              <div className="space-y-1 lg:space-y-0.5">
                <p className="text-sm md:text-md lg:text-sm text-white">
                  <i className="fa fa-phone"></i>{" "}
                  <Link
                    href="tel:+19087585622"
                    className="text-white hover:text-[#38b6ff]"
                  >
                    +1 (908) 758-8015
                  </Link>
                </p>
                <p className="text-sm md:text-md lg:text-sm text-white">
                  <i className="fa fa-envelope"></i>{" "}
                  <Link
                    href="mailto:info@nexgensols.tech"
                    className="text-white hover:text-[#38b6ff]"
                  >
                    info@nexgensols.tech
                  </Link>
                </p>
              </div>
              <div className="inline-flex space-x-3 pt-5">
                <span className="bg-black text-white hover:bg-[#38b6ff] hover:text-black p-3 rounded-full [&>svg]:h-3.5 [&>svg]:w-3.5">
                  {facebook}
                </span>
                <Link
                  href="https://www.instagram.com/nexgen_solutions/"
                  className="bg-black text-white hover:bg-[#38b6ff] hover:text-black p-3 rounded-full [&>svg]:h-3.5 [&>svg]:w-3.5"
                >
                  {insta}
                </Link>
                <span className="bg-black text-white hover:bg-[#38b6ff] hover:text-black p-3 rounded-full [&>svg]:h-3.5 [&>svg]:w-3.5">
                  {twitter}
                </span>
                <Link
                  href="https://www.linkedin.com/company/nexgen-sols-tech/"
                  className="bg-black text-white hover:bg-[#38b6ff] hover:text-black p-3 rounded-full [&>svg]:h-3.5 [&>svg]:w-3.5"
                >
                  {linkedin}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#051d40] text-center py-4 mt-10">
        <p className="text-sm lg:text-xs md:lext-sm text-white">
          © NexGen Solutions 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

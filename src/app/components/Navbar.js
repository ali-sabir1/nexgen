"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle Menu for Mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Dropdown for Services
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Sticky Navbar Logic
      if (currentScroll > 50) {
        setIsSticky(true); // Make navbar sticky after scrolling 50px
      } else {
        setIsSticky(false); // Unstick navbar when you're at the top of the page
      }

      // Top Bar Visibility Logic (Hide on scroll down, show on scroll up)
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsTopBarVisible(false); // Hide top bar when scrolling down
      } else {
        setIsTopBarVisible(true); // Show top bar when scrolling up or at top
      }

      // Update last scroll position
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Icons for mobile and desktop
  const dropDown = (
    <svg
      className="-mr-1 h-5 w-5 lg:h-3.5 lg:w-3.5"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const facebook = (
    <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 320 512"
      >
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </span>
  );
  const insta = (
    <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </span>
  );
  const twitter = (
    <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    </span>
  );
  const linkedin = (
    <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    </span>
  );
  const phone = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
  const mail = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 lg:size-5"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
  const clock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 lg:size-5"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="bg-black">
      {/* Original Top Bar */}
      <div
        className={`bg-[#38b6ff] text-black font-semibold text-sm lg:text-lg  py-2 md:py-4 lg:py-3 md:pl-12 lg:px-10 transition-all duration-300 ${
          isTopBarVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-16"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="hidden lg:inline-flex text-md space-x-8">
            {facebook}
            <Link
              href="https://www.instagram.com/nexgen_solutions/"
              className="hover:text-gray-600"
            >
              {insta}
            </Link>
            {twitter}
            <Link
              href="https://www.linkedin.com/company/nexgen-sols-tech/"
              className="hover:text-gray-600"
            >
              {linkedin}
            </Link>
          </div>
          <div className="md:inline-flex md:space-x-10 lg:text-sm text-center">
            <div className="inline-flex space-x-4 md:space-x-10">
              <a
                href="tel:+19087588015"
                className="inline-flex md:space-x-2 hover:text-[#3B3B3B]"
              >
                <div>{phone}</div>
                <div>+1(908)758-8015</div>
              </a>
              <div className="inline-flex md:space-x-2">
                <div>{clock}</div>
                <div>Monday - Friday 24 Hours</div>
              </div>
            </div>
            <a
              href="mailto:info@nexgensols.tech"
              className="inline-flex space-x-1 md:space-x-2 hover:text-[#3B3B3B] pl-5 md:pl-0 lg:pl-0"
            >
              <div>{mail}</div>
              <div>info@nexgensols.tech</div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        aria-label="Main Navigation"
        className={`z-50 flex items-center justify-between p-3 bg-[#051d40] shadow-md ${
          isSticky ? "fixed top-0 left-0 right-0 z-50" : "absolute w-full "
        }`}
      >
        <div className="flex items-center mx-5 lg:ml-5">
          <Link href="/" aria-label="Go to Home">
            <Image
              src={Logo}
              alt="NexGen Online Solutions"
              width={120}
              height={120}
              quality={100}
              placeholder="blur"
              className="w-40 h-17 lg:w-40 lg:h-auto"
            />
          </Link>
        </div>

        <div className="lg:flex hidden space-x-7 mr-7">
          <Link
            href="/"
            className="text-sm text-white font-semibold hover:text-[#38b6ff] transition-colors mt-3"
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="text-sm text-white font-semibold hover:text-[#38b6ff] transition-colors mt-3"
          >
            ABOUT US
          </Link>

          {/* Dropdown for Services (Desktop) */}
          <div
            className="relative text-white hover:text-[#38b6ff]"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <button className="inline-flex text-sm font-semibold mt-3">
              SERVICES
              {dropDown}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-80 mt-2 bg-[#38b6ff] shadow-md rounded-md">
                <Link
                  href="/software-development"
                  className="block px-4 py-2 hover:text-white font-semibold hover:bg-[#0068AA] text-black"
                >
                  Custom Software Development
                </Link>
                <Link
                  href="/mobile-app-development"
                  className="block px-4 py-2 hover:text-white font-semibold hover:bg-[#0068AA] text-black"
                >
                  Mobile App Development
                </Link>
                <Link
                  href="/web-app-development"
                  className="block px-4 py-2 hover:text-white font-semibold hover:bg-[#0068AA] text-black"
                >
                  Web App Development
                </Link>
                <Link
                  href="/marketing-services"
                  className="block px-4 py-2 hover:text-white font-semibold hover:bg-[#0068AA] text-black"
                >
                  Marketing Services
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm text-white font-semibold hover:text-[#38b6ff] transition-colors mt-3"
          >
            CONTACT
          </Link>
          <Link
            href="/blogs"
            className="text-sm text-white font-semibold hover:text-[#38b6ff] transition-colors mt-3"
          >
            BLOGS
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#051d40] font-semibold bg-[#38b6ff] hover:bg-[#0068AA] hover:text-white rounded-full px-6 py-2 transition-all mt-1"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-[#c0e8e8] font-semibold hover:text-[#38b6ff] transition-colors"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 mx-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when overlay is clicked
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 md:w-[30%] w-[70%] h-full bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="text-xl font-semibold">MENU</div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer text-white bg-[#051d40] px-2"
            aria-label="Close menu"
          >
            &#10005; {/* Close Icon */}
          </button>
        </div>

        <ul className="pt-4 pl-10 pr-10 flex flex-col space-y-4 px-6">
          <li className="border-b-2 pb-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
            >
              HOME
            </Link>
          </li>
          <li className="border-b-2 pb-3">
            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
            >
              ABOUT US
            </Link>
          </li>

          <li className="border-b-2 pb-3">
            <button
              onClick={toggleDropdown}
              className="inline-flex text-lg font-semibold hover:text-[#38b6ff] transition-colors"
            >
              SERVICES
              {dropDown}
            </button>
            {isDropdownOpen && (
              <ul className="pl-6 space-y-4 mt-2">
                <li className="pb-1 pt-2">
                  <Link
                    href="/software-development"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li className="pb-1">
                  <Link
                    href="/mobile-app-development"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="pb-1">
                  <Link
                    href="/web-app-development"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
                  >
                    Web App Development
                  </Link>
                </li>
                <li className="pb-3">
                  <Link
                    href="/marketing-services"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
                  >
                    Marketing Services
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="border-b-2 pb-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
            >
              CONTACT
            </Link>
          </li>
          <li className="border-b-2 pb-3">
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:text-[#38b6ff] transition-colors"
            >
              BLOGS
            </Link>
          </li>
          <li>
            <div className="flex justify-center pt-10">
              <div className="inline-flex space-x-5">
                {facebook}
                {insta}
                {twitter}
                {linkedin}
              </div>
            </div>
          </li>
          <li className="text-center pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-white bg-[#051d40] hover:bg-[#38b6ff] hover:text-black rounded-full px-6 py-2 transition-all"
            >
              Consult For Free
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
